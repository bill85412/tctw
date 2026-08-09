# 真航線 True Course

航空新聞・飛行知識・機型解析。使用 [Jekyll](https://jekyllrb.com/)，由 GitHub Pages 自動建置。

## 這個網站怎麼運作

- 每一篇文章 = `_articles/<分類>/<檔名>.md` 一個檔（見 **如何新增文章.md**）。
- 首頁、分類清單、搜尋、選單都會**自動**從文章生成，新增文章不用改其他檔。
- 版面與樣式在 `assets/css/style.css`；互動（時鐘、天氣、選單、搜尋）在 `assets/js/app.js`。

## 部署到 GitHub Pages

1. 把 `truecourse/` 資料夾**裡面的東西**放到你的 repo 根目錄（取代舊的 `index.html`）。
2. Settings → Pages → Build and deployment → Source 選 **Deploy from a branch**，分支選 `main`、資料夾 `/ (root)`，儲存。
3. 等一兩分鐘，到 repo 的 **Actions** 分頁可以看到「pages build and deployment」跑完，就上線了。

### ⚠️ baseurl（最重要，設錯全站樣式會跑掉）

打開 `_config.yml`，看 `baseurl` 這行：

- repo 名稱是 **`帳號.github.io`**（網站在 `https://帳號.github.io/`）→ `baseurl` 留空：`baseurl: ""`
- repo 名稱是別的（網站在 `https://帳號.github.io/repo名/`）→ 改成 `baseurl: "/repo名"`

## 目錄結構

```
_config.yml          設定（站名、baseurl、METAR worker）
_data/nav.yml        上方選單結構
_data/tax.yml        分類中文名稱對照
_layouts/            版型：default / home / article / category / page
_includes/           共用區塊：表頭、頁尾、搜尋、頂部天氣列…
_articles/           所有文章（依大分類分資料夾）
news/ knowledge/ …   各分類清單頁
about.md contribute.md contact.md shop.md   靜態頁
assets/css/ assets/js/ assets/img/           樣式、程式、圖片
search.json          搜尋索引（自動生成）
```

## 在自己電腦預覽（選用，非必要）

安裝 Ruby 後：

```bash
bundle install
bundle exec jekyll serve
```

打開 http://localhost:4000 。不想裝也沒關係——直接推上 GitHub 就會建置。

## 頂部即時天氣（METAR）

由 `_config.yml` 的 `metar_worker` 指向你的 Cloudflare Worker。若要改機場或網址，改那一行即可。

## 廣告

頁尾上方 `#ad-bottom` 可放 Google AdSense（改 `_includes/ad.html`）。發布廣告前需要有隱私權政策頁與足夠內容；**彈出視窗請勿放 AdSense**。
