---
title: "什麼是 ICAO Q-Code？"
section: knowledge          # 大分類：news / knowledge / safety / fanzone
category: atc           # 小分類代碼（見下表）
date: 2026-08-21            # 日期，新的排前面
author: "Bill Lin"       # 作者名字，可改成自己的名字或筆名；刪掉這行或留空 "" 會顯示「真航線編輯部」
thumb: /assets/img/qcodenav.jpg   # 縮圖（可留空 "" ）
excerpt: "Q-Code 是一套以字母 Q 開頭的三字母簡碼，每一個都對應一整句常用的話。它誕生於摩斯電碼的無線電報年代：當通訊得靠人手敲點劃，又要跨越不同母語的操作員時，把「請問你的位置?」壓縮成三個字母 QTH，既省時間又不受語言隔閡。這就是 Q-Code 的核心價值 —— 簡短、標準、語言中立"
description: "q-code, icao, aviation, faa"
image: /assets/img/qcodenav.jpg   # 分享到社群時的預覽圖，通常填跟 thumb 一樣
# featured: true            # 想當首頁封面故事就取消這行註解（同時只留一篇）
---

# ICAO Q-Code

## 一組電報時代的「通用語」

Q-Code 是一套以字母 **Q 開頭的三字母簡碼**，每一個都對應一整句常用的話。它誕生於摩斯電碼的無線電報年代：當通訊得靠人手敲點劃，又要跨越不同母語的操作員時，把「請問你的位置?」壓縮成三個字母 **QTH**，既省時間又不受語言隔閡。這就是 Q-Code 的核心價值 —— **簡短、標準、語言中立**。

一個巧妙的設計是：同一個 Q-Code **既能當問句、也能當答句**。在電報中後面加上問號代表提問 (QTH？ = 你的位置在哪？)，不加問號並接上資料則代表回答 (QTH 後接座標 = 我的位置在此)。今天在航空無線電裡，這個「一碼兩用」的功能依然存在，例如 request QDM (問) 與 QDM 270 (答)。

<figure><img src="{{ '/assets/img/qcode.jpg' | relative_url }}"><figcaption>Q-Code</figcaption></figure>

## 由來與演進

Q-Code 最早由英國 Marconi 與郵政總局在 **1909 年前後**制定，用於商用無線電報。隨後被國際無線電報公約採納，並由**國際電信聯盟 (ITU) **與後來的**國際民航組織 (ICAO) **接手擴充，分別發展出海事與航空專用的碼組。它比 ICAO 本身還要老，可以說是無線電通訊史的活化石。

## 結構與碼段分配

每個 Q-Code 都是 **Q 加兩個字母**，可用組合有限，因此國際上依「服務種類」把碼段切開分配：

- **QAA – QNZ**：航空服務 (由 ICAO 管理)
- **QOA – QQZ**：海事移動服務
- **QRA – QUZ**：所有服務通用(通訊本身的收發、干擾、頻率等)

也因此，航空最重要的高度表撥定碼 (QNH、QFE、QNE) 都落在 QAA – QNZ 這段，而在業餘無線電裡的 QSL、QSO、QRM 等，則屬於 QRA – QUZ 的通用段。

## 航空核心：三個高度表撥定碼

Q-Code 在現代航空最無可取代的角色，是**高度表的氣壓撥定 (Altimeter Setting)**。高度表本質上是個氣壓計，你撥入什麼參考氣壓，它就以那個基準換算高度。三個 Q-Code 正好對應三種基準：

| 代碼 | 撥入的氣壓 | 高度表讀數 |
|---|---|---|---|
| **QNH** | 換算到海平面的當地氣壓 | 海平面以上高度 (Altitude) |
| **QFE** | 場站基準點的實際氣壓 | 場站以上高度 (Height) |
| **QNE** | 標準氣壓 1013.25 hPa / 29.92 inHg | 氣壓高度 / 飛航空層 (FL) |

## 方向尋找家族：QDM / QDR / QTE / QUJ / QGH

在衛星導航之前，地面測向 (Direction Finding, DF) 是重要的導航手段：地面電台測出你電波來向，再用 Q-Code 把方位告訴你。這一家族至今仍在少數場站與訓練中留存，尤其向裝有 VHF 測向儀 (VDF) 的塔台 Request QDM 仍看得到。

- **QDM**：飛向電台所需的**磁航向 (Magnetic Bearing To The Station)** 。最常用，直接告訴你「機頭該指幾度就能飛到我這」。
- **QDR**：自電台向外的**磁方位 (Magnetic Bearing From The Station)** (即 Radial)，是 QDM 的反方向。
- **QTE**：自電台向外的**真方位 (True Bearing From The Station)**。
- **QUJ**：飛向電台的**真航向 (True Bearing To The Station)**。
- **QGH**：一種由管制員用測向資料、以連續給航向與高度把飛機「Talk Down」引導下降的程序 (QGH approach)。(Controlled Descent Through Clouds (Or "Ground Homing"))

一個好記的關係：**QDM 對 Station、QDR 從 Station，兩者互為反方向；把「磁」換成「真」就成了 QUJ 與 QTE。**

<figure><img src="{{ '/assets/img/qcodenav.jpg.jpg' | relative_url }}"><figcaption>Q-Code Navigation</figcaption></figure>

## 從電報時代活到今天的其他 Q-Code

通用碼段 (QRA – QUZ) 裡有一大批處理「通訊本身」的 Q-Code，雖然航空語音通話已少用，卻在**業餘無線電**裡活得好好的，也值得認識它們的來歷。

**QTH** (位置)、**QSY** (換頻率)、**QSL** (收到、確認，業餘無線電的「QSL 卡」即通聯確認卡)、**QSO** (一次通聯)、**QRM** (人為干擾)、**QRN** (天電/自然干擾)、**QRT** (停止發送)、**QRX** (稍待)、**QRZ** (是誰在呼叫我?)、**QSB** (信號衰落)。

值得一提的是**地區差異**：QNH 在 ICAO 體系幾乎通行全球，QFE 則在俄羅斯、中國與部分軍用 / 通用航空較常見；而美國在一般通話中直接說 "Altimeter Setting" 而非 QNH。同一套碼，不同天空講法不盡相同。

---

Q 碼是一套為摩斯電碼而生、以「Q + 兩字母」壓縮整句話的通用簡碼，靠簡短與語言中立跨越了語言與時代。它的碼段依航空、海事、通用切分，而航空最核心的遺產，就是高度表的三個撥定基準 —— **QNH、QFE、QNE**。

<figure><img src="{{ '/assets/img/檔名.jpg' | relative_url }}"><figcaption>圖片說明</figcaption></figure>

放 YouTube 影片（把 影片ID 換成影片網址 watch?v= 後面那串）：

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;"><iframe src="https://www.youtube.com/embed/影片ID" title="影片標題" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen></iframe></div>
