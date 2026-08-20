---
title: "儀器降落系統 (Instrument Landing System, ILS)"
section: knowledge          # 大分類：news / knowledge / safety / fanzone
category: ifr           # 小分類代碼（見下表）
date: 2026-08-21            # 日期，新的排前面
thumb: /assets/img/ilsphoto.jpg   # 縮圖（可留空 "" ）
excerpt: "儀器降落系統是目前最普遍的精確進場(Precision Approach)輔助。所謂「精確」，在於它同時提供左右與上下的引導，讓飛行員即使看不到跑道，也能沿著一條固定的下滑道飛到接地帶附近"
description: "儀器降落系統是目前最普遍的精確進場(Precision Approach)輔助。所謂「精確」，在於它同時提供左右與上下的引導 (Lateral / Vertical Guidance)，讓飛行員即使看不到跑道，也能沿著一條固定的下滑道飛到接地帶附近"
image: /assets/img/ilsphoto.jpg   # 分享到社群時的預覽圖，通常填跟 thumb 一樣
# featured: true            # 想當首頁封面故事就取消這行註解（同時只留一篇）
---

儀器降落系統是目前最普遍的精確進場 (Precision Approach) 輔助。所謂「精確」，在於它同時提供左右與上下的引導 (Lateral / Vertical Guidance)，讓飛行員即使看不到跑道，也能沿著一條固定的下滑道飛到接地帶附近。

<figure><img src="{{ '/assets/img/ilsphoto.jpg' | relative_url }}"><figcaption>儀器降落系統 (Instrument Landing System, ILS)</figcaption></figure>

## ILS Components

### 一、引導資訊 (Guidance)

引導是 ILS 的核心，由兩台各自獨立的設備分工：**定位台管左右、滑降台管上下**。兩者其實共用同一套訊號原理，只是分別套在水平與垂直兩個平面上。

**定位台 (Localizer, LOC) —— 左右對準**

定位台的天線陣列裝在**跑道遠端 (離場端之外)**，朝進場方向把訊號射射出，畫出跑道中線的延伸線。

它怎麼畫出中線？定位台射出兩瓣重疊的訊號，一瓣以 **90 Hz** 調變、一瓣以 **150 Hz** 調變；以進場飛機的視角，90 Hz 偏左、150 Hz 偏右。接收機比較兩者的**調變深度差 (Difference in Depth of Modulation, DDM)**：兩者相等 (DDM = 0) 的那條線就是航道中心；當你偏右，收到較強的 150 Hz，指針便指示你該往左修。整套 ILS 的行為，都可以回到「量測 DDM」這一句話。

規格上，定位台使用 **VHF 108.10 – 111.95 MHz**，而且只用第一位小數為奇數的頻道 (108.10、108.15、108.30……)，藉此和用偶數小數的 VOR 區分。航道寬度會依跑道長度微調，讓全寬在跑道頭處約 700 英尺，換算成角度約 3° – 6° (全刻度偏轉大約在中線兩側各 **± 2.5°**)，靈敏度約為 VOR 的四倍。辨識碼是三字母摩斯電碼再加上 **「I」(··)** 前綴，例如 I-TSA，聽到它才代表訊號可用。

<figure><img src="{{ '/assets/img/loc.jpg' | relative_url }}"><figcaption>定位台 (Localizer, LOC)</figcaption></figure>

***滑降台 (Glideslope, GS) —— 下滑角度**

滑降台的天線裝在**跑道進場端附近、偏跑道一側**，離跑道頭約 1,000 英尺，畫出理想的下滑道。

原理與定位台相同，只是把方向轉成上下：**90 Hz 在下滑道之上、150 Hz 在其下**，相等處就是下滑道。頻率落在 **UHF 329.15–335.00 MHz**，而且**與定位台頻率自動配對** —— 飛行員只需調定位台的 VHF 頻率，對應的滑降台頻率會自動選定，不需另外輸入。

滑降台在角度上比定位台敏感許多 (全刻度偏轉僅 ± 0.35° – 0.7° 之間)，因此輕微的俯仰或高度變化就會讓指針大幅移動，這是初學者覺得「滑降道很難壓穩」的原因。它也有一個必須知道的陷阱：**假下滑道(False Glideslope)**。訊號諧波會在更高角度 (例如 6°、9°) 產生同樣「置中」的假訊號，因此標準做法是**一律從下方攔截**，並在攔截點用高度交叉檢查 —— 正常 3° 下滑道通過外指點標 (Outer Marker) 時約在跑道面上 1,400 英尺、通過中指點標 (Middle Marker) 時約 200 英尺，對不上就代表你可能咬到了假下滑道。

<figure><img src="{{ '/assets/img/gs.jpg' | relative_url }}"><figcaption>滑降台 (Glideslope, GS)</figcaption></figure>

### 二、距離資訊(Range)

引導只告訴你「在不在線上」，距離資訊則回答「到哪了」。

**指點標 (Marker Beacons)**

三個指點標**全部使用 75 MHz**，天線朝正上方射出扇形波束，你飛越它時座艙會同時亮燈並播放音調。它靠**顏色、音調、摩斯節奏**三重編碼，讓你不必看頻率就分辨得出來：

| 指點標 | 位置 | 音頻 | 摩斯 | 燈色 | 對應點 |
|---|---|---|---|---|---|
| 外指點標 OM | 離跑道約 4–7 浬 | 400 Hz(低) | 連續長劃(每秒 2) | 藍 | 滑降道攔截/FAF |
| 中指點標 MM | 離跑道頭約 3500 ft | 1300 Hz(中) | 點劃交替 | 琥珀 | 約 CAT I 決定高 200 ft |
| 內指點標 IM | MM 與跑道頭之間 | 3000 Hz(高) | 連續點(每秒 6) | 白 | CAT II 決定高 100 ft |

**DME 與 Compass Locator**

指點標只給「你正好在某一點正上方」這種離散資訊。現代許多 ILS 改用**DME**提供連續距離讀數，甚至直接淘汰指點標。

<figure><img src="{{ '/assets/img/markerbeacon.jpg' | relative_url }}"><figcaption>指點標 (Marker Beacons)</figcaption></figure>

### 三、目視資訊 (Visual)

當你飛到決斷高度 (DA)、把視線從儀表轉向窗外時，接手的就是目視資訊。

它包含**進場燈光系統 (Approach Lighting System, ALS，如 ALSF-2、MALSR)**，以及滑行燈、跑道中線燈、跑道邊燈等。它們的作用是替你在「儀表飛行」與「目視落地」之間搭一座橋：燈光的排列、顏色與閃爍序列讓你在能見度受限時，仍能快速判斷跑道方位、距離與對正程度，平順地完成最後幾秒的落地。ILS 的分類 (尤其 CAT II/III) 對燈光系統的規格有明確要求，原因正在於此。

<figure><img src="{{ '/assets/img/ldlight.jpg' | relative_url }}"><figcaption>進場燈光系統 (Approach Lighting System, ALS)</figcaption></figure>

## 座艙如何呈現：CDI 與 HSI

地面的引導訊號，最後落在座艙的航道偏差航示器 (Course Deviation Indicator, CDI) 或水平狀態指示器 (Horizontal Situation Indicator, HSI) 上。在 ILS 模式下：

- **垂直指針 = 定位台 (左右)**；偏左代表航道在你左邊，該左修。
- **水平指針 = 滑降台(上下)**；偏上代表下滑道在你上方，你偏低了，該帶起來。

原則是「追針」，兩針交叉的十字就是你相對理想進場點的位置。

**CDI / Glideslpoe 每一格 (dot) 代表多少度?** 全刻度偏轉 (Full-scale Deflection)：定位台約在中線兩側各 **±2.5°**、滑降台約 **±0.7°**。至於每一格幾度，要看該儀表一側標了幾格 —— 常見的五格刻度下，定位台約 **每格 0.5°**、滑降台約 **每格 0.14°**；若滑降台採兩格刻度，則約每格 0.35°。與其硬記格數，不如記住比例：**滑降台的角度靈敏度約是定位台的 3 – 4 倍，定位台又約是 VOR 的 4 倍** (VOR 每格 2° → 定位台每格 0.5°)。這正是滑降道容易「一壓就過頭」的原因。

**靈敏度隨接近跑道而增高**：兩瓣訊號越靠跑道越收斂，同樣角度對應的橫向距離越小，指針在短五邊 (Short Final) 會變得很「跳」，修正要越來越細。

<figure><img src="{{ '/assets/img/cdi.jpg' | relative_url }}"><figcaption>航道偏差航示器 (Course Deviation Indicator, CDI)</figcaption></figure>

## 反航道 (Back Course) 與反向感應

定位台天線也會從陣列背面往反方向射出一道**反航道 (Back Course)**，指向另一向進場路徑。某些機場沒有為對向跑道另建 ILS，就利用這道反航道做一個**非精確進場 (Non-Precision Approach)**。注意：反航道**沒有可用的滑降台**，若出現滑降指示那是假訊號，必須忽略，全程當非精確進場操作。

反航道最惡名昭彰的是**反向感應(Reverse Sensing)**：在傳統 CDI (或 HSI 未設到前航道值) 上沿反航道入航時,90 Hz 與 150 Hz 兩瓣相對於你的左右恰好對調，指針偏轉方向與該修正方向相反 —— 你得「**背著針飛**」，針偏左時往右修。

解法是：用 **HSI** 時把航道箭頭轉到**前航道的航向值** (而非你實際飛的反向航向)，HSI 會自動把顯示轉正，又回到「追針」；部分現代航電另設 Back-Course 模式直接處理。核心觀念是 —— 反向感應是「顯示參考」的問題，訊號本身沒有錯。

## ILS 分類與最低標準

ILS 依可用的決斷高度 (DH) 與跑道視程 (RVR) 分級，分級越高，對地面設備與機載自動化的要求越嚴 (精確數值依 ICAO / 各國民航當局規定略有差異)：

| 分類 | 決斷高度 DH | 跑道視程 RVR | 概念 |
|---|---|---|---|
| CAT I | 200 ft | 550 m 或 2400 ft | 需目視完成落地 |
| CAT II | 100 ft | 300 – 350 m | 需自動或抬頭引導輔助 |
| CAT IIIA | < 100 ft 或無 | ≥ 200 m | 需自動落地能力 |
| CAT IIIB | < 50 ft 或無 | 50 – 200 m | 自動落地，滑行仍需部分目視 |
| CAT IIIC | 無 | 無限制 (0 / 0) | 全自動落地與滑行，罕見 |

越往下走，越依賴機載自動落地與地面訊號的高完整度，這也是 CAT II/III 對臨界區保護、燈光與機隊裝備都有額外規定的原因。

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;"><iframe src="https://www.youtube.com/embed/V0OJ-rPDXNs?si=3ccZcOGJxqsfKqFy" title="ILS Autoland" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen></iframe></div>


## 限制與陷阱

ILS 精確但不是萬能。它易受**地形與反射面影響**：附近大型建物、地形，或進入 **ILS 臨界區 (ILS Critical Area)** 的航機車輛，都可能讓航道彎曲 (Course Bends) —— 這也是低能見度、特別是 CAT II/III 運行時，塔台嚴格管制臨界區進出的原因。加上前述的**假下滑道**，以及訊號在很靠近天線時本就不穩，實務上都會用指點標、DME 或 GPS 高度交叉檢查，絕不單靠一針走到底。

## 結語

把 ILS 拆成 **Guidance / Range / Visual** 三類，對應「對準了嗎、多遠、看到了嗎」，整套系統就清楚了：定位台與滑降台給引導、指點標與 DME 給距離、進場燈光給目視，最後統一呈現在 CDI/HSI 的兩支指針上。真正要用心的，反而是那些陷阱型細節 —— 從下方攔截以避開假下滑道、反航道的反向感應、以及靈敏度隨接近跑道而增高。

