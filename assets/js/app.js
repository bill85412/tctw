/* 真航線 True Course — 前端互動:Zulu 時鐘、METAR、選單、搜尋、reveal、影片、篩選 */
(function(){
  'use strict';
  function pad(n){return String(n).padStart(2,'0');}

  // Zulu clock
  function tickZulu(){var el=document.getElementById('zulu');if(!el)return;var d=new Date();
    el.textContent=pad(d.getUTCHours())+':'+pad(d.getUTCMinutes())+':'+pad(d.getUTCSeconds())+'Z';}
  tickZulu();setInterval(tickZulu,1000);

  // METAR:Worker 優先 + 公開代理備援 + 本機快取(失敗顯示最近已知),每 15 分鐘更新
  function loadMetar(){
    var el=document.getElementById('metar');if(!el)return;var KEY='tc_metar_rctp';
    try{var c=localStorage.getItem(KEY);if(c){var o=JSON.parse(c);if(o&&o.raw){el.textContent=o.raw;el.title=o.raw;}}}catch(e){}
    var target='https://aviationweather.gov/api/data/metar?ids=RCTP&format=raw';var srcs=[];
    if(window.METAR_WORKER){srcs.push(window.METAR_WORKER+(window.METAR_WORKER.indexOf('?')>-1?'&':'?')+'ids=RCTP');}
    srcs.push('https://api.codetabs.com/v1/proxy/?quest='+encodeURIComponent(target));
    srcs.push('https://api.allorigins.win/raw?url='+encodeURIComponent(target));
    (function attempt(i){if(i>=srcs.length)return;
      fetch(srcs[i],{cache:'no-store'}).then(function(r){if(!r.ok)throw 0;return r.text();})
      .then(function(t){t=(t||'').trim();
        if(t&&t.indexOf('RCTP')>-1){el.textContent=t;el.title=t;try{localStorage.setItem(KEY,JSON.stringify({raw:t,ts:Date.now()}));}catch(e){}}
        else{throw 0;}})
      .catch(function(){attempt(i+1);});})(0);
  }
  loadMetar();setInterval(loadMetar,900000);

  // 手機漢堡選單
  var header=document.querySelector('header.nav');
  var menuBtn=document.querySelector('.menutoggle');
  if(menuBtn&&header){menuBtn.addEventListener('click',function(e){
    e.stopPropagation();var open=header.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open?'true':'false');});}

  // 下拉:桌機用 CSS hover;手機/鍵盤點按鈕展開
  Array.prototype.forEach.call(document.querySelectorAll('.navitem.has-menu > .navlink'),function(btn){
    btn.addEventListener('click',function(e){e.stopPropagation();
      var item=btn.parentElement;var isOpen=item.classList.toggle('open');
      btn.setAttribute('aria-expanded',isOpen?'true':'false');
      Array.prototype.forEach.call(document.querySelectorAll('.navitem.has-menu.open'),function(o){if(o!==item){o.classList.remove('open');}});});});
  document.addEventListener('click',function(){Array.prototype.forEach.call(document.querySelectorAll('.navitem.has-menu.open'),function(o){o.classList.remove('open');});});

  // 搜尋
  var sModal=document.getElementById('searchModal'),sOpen=document.getElementById('searchOpen'),
      sClose=document.getElementById('searchClose'),sInput=document.getElementById('searchInput'),
      sResults=document.getElementById('searchResults');
  var idx=null,loading=false;
  function esc(s){return (s||'').replace(/[&<>]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];});}
  function loadIndex(){if(idx||loading||!window.SEARCH_URL)return;loading=true;
    fetch(window.SEARCH_URL).then(function(r){return r.json();}).then(function(d){idx=d||[];render(sInput?sInput.value:'');}).catch(function(){idx=[];});}
  function render(q){if(!sResults)return;q=(q||'').trim().toLowerCase();
    if(!idx){sResults.innerHTML='<div style="padding:16px 18px;color:#93A6C0;font-family:var(--font-mono);font-size:13px">載入中…</div>';return;}
    var items=idx;if(q){items=idx.filter(function(a){return (a.title+' '+(a.excerpt||'')+' '+(a.category||'')).toLowerCase().indexOf(q)>-1;});}
    items=items.slice(0,12);
    if(!items.length){sResults.innerHTML='<div style="padding:16px 18px;color:#93A6C0;font-family:var(--font-mono);font-size:13px">找不到相關文章</div>';return;}
    sResults.innerHTML=items.map(function(a){return '<a class="sres" href="'+a.url+'"><span class="stag">'+esc((a.category||'').toUpperCase())+'</span><h4>'+esc(a.title)+'</h4>'+(a.excerpt?'<p>'+esc(a.excerpt)+'</p>':'')+'</a>';}).join('');}
  function openSearch(){if(!sModal)return;sModal.hidden=false;document.body.style.overflow='hidden';loadIndex();setTimeout(function(){if(sInput)sInput.focus();},30);}
  function closeSearch(){if(!sModal)return;sModal.hidden=true;document.body.style.overflow='';}
  if(sOpen)sOpen.addEventListener('click',openSearch);
  if(sClose)sClose.addEventListener('click',closeSearch);
  if(sModal)sModal.addEventListener('click',function(e){if(e.target===sModal)closeSearch();});
  if(sInput)sInput.addEventListener('input',function(){render(sInput.value);});
  document.addEventListener('keydown',function(e){
    if((e.key==='/'||((e.metaKey||e.ctrlKey)&&(e.key==='k'||e.key==='K')))&&sModal&&sModal.hidden){e.preventDefault();openSearch();}
    if(e.key==='Escape'&&sModal&&!sModal.hidden){closeSearch();}});

  // reveal on scroll
  var rev=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window&&rev.length){
    var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
    Array.prototype.forEach.call(rev,function(el){io.observe(el);});
  }else{Array.prototype.forEach.call(rev,function(el){el.classList.add('in');});}

  // 首頁新聞篩選
  var chips=document.querySelectorAll('#filters .chip');
  if(chips.length){Array.prototype.forEach.call(chips,function(ch){ch.addEventListener('click',function(){
    Array.prototype.forEach.call(chips,function(c){c.classList.remove('on');});ch.classList.add('on');
    var f=ch.getAttribute('data-f');
    Array.prototype.forEach.call(document.querySelectorAll('#newsgrid .card'),function(card){
      card.style.display=(f==='all'||card.getAttribute('data-cat')===f)?'':'none';});});});}

  // 影片:點擊縮圖載入 YouTube
  document.addEventListener('click',function(e){var f=e.target.closest('.video-facade');if(!f)return;
    var id=f.getAttribute('data-id'),ifr=document.createElement('iframe');
    ifr.src='https://www.youtube.com/embed/'+id+'?autoplay=1&rel=0';ifr.title='影片';ifr.setAttribute('frameborder','0');
    ifr.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';ifr.allowFullscreen=true;f.replaceWith(ifr);});
})();
