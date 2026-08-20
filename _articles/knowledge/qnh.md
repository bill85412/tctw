---
title: "一次搞懂QNH、QFE、QNE到底是什麼？"
section: knowledge          # 大分類：news / knowledge / safety / fanzone
category: ifr           # 小分類代碼（見下表）
date: 2026-08-17            # 日期，新的排前面
thumb: /assets/img/qnh.jpg   # 縮圖（可留空 "" ）
excerpt: "「高度」並不只是高度計上顯示的一個數字。高度計其實是利用大氣壓力來推算高度，因此我們必須先告訴高度計：「你要把哪一個壓力面當作高度基準？」這就是 QNH、QFE 和 QNE 的用途"
# featured: true            # 想當首頁封面故事就取消這行註解（同時只留一篇）
description: "QNH、QFE、QNE 到底差在哪？一次搞懂三種高度計撥定值的意義與使用時機，以及為什麼高度其實是用氣壓推算出來的。"
image: /assets/img/qnh.jpg
---

對飛行員而言，「高度」並不只是高度計上顯示的一個數字。高度計其實是利用大氣壓力來推算高度，因此我們必須先告訴高度計：「你要把哪一個壓力面當作高度基準？」

這就是 QNH、QFE 和 QNE 的用途。

而一個容易被誤解的地方是：QNH、QFE、QNE 並不是一般意義上的英文縮寫。它們源自航空無線電通信使用的 Q-code，因此不能單純把每個字母拆成一個英文單字來理解。

## QNH：以平均海平面為基準 (True Altitude)

QNH是民航最常見的高度計設定。當飛行員將當地QNH設定進高度計後，飛機的高度計會以平均海平面（MSL, Mean Sea Level）作為高度基準。

因此，如果一座機場的標高是 500 ft：在機場地面設定 QNH → 高度計約顯示 500 ft

也就是：QNH → Altitude above MSL

這也是為什麼航空圖上的機場標高、山脈高度、最低安全高度等，通常都以 MSL 為基準。

## QFE：以地面作為基準 (Absolute Altitude)

QFE 的概念比較直觀，如果將 QFE 設定進高度計，在機場基準面上：高度計會顯示 0 ft

假設機場 elevation 是 500 ft：QNH → 地面顯示 500 ft；QFE → 地面顯示 0 ft

因此，使用 QFE 時，高度計所顯示的高度比較接近我們平常所說的 AGL（Above Ground Level）。

QFE 在現代民航的使用已經比 QNH 少，但在部分國家及軍事航空環境中仍然可以看到。

## QNE：1013.25 hPa (Pressure Altitude)

QNE 則是另一個非常重要的設定：QNE = Standard Pressure = 1013.25 hPa（29.92 inHg）

它不是以某一個機場或當地海平面氣壓為基準，而是使用國際標準大氣的標準壓力。

設定 1013.25 hPa 後，高度計所顯示的高度會以 Flight Level（飛行高度層）的概念來使用。

例如：18,000 ft → FL180

因此可以簡單記：QNE → 1013.25 hPa → Flight Level

<figure><img src="{{ '/assets/img/qnh.jpg' | relative_url }}"><figcaption>QNH, QFE, QNE</figcaption></figure>

## 三者到底差在哪裡？

可以用一個簡單的例子理解。

**假設在某機場，飛機停在跑道上**
Elevation：500 ft
QNH：1018 hPa

則高度計顯示：
QNH	約 500 ft
QFE	0 ft
QNE	約 630 ft

## QNH 和 QNE 什麼時候切換？

這就會連接到飛行中非常重要的Transition Altitude（TA） 和 Transition Level（TL）。

**爬升**

起飛後，飛機使用當地的 QNH。

當通過 Transition Altitude：QNH → 1013.25 hPa，之後高度以 Flight Level 表示。

例如：5,000 ft → FL070 → FL100 → FL180

**下降**

下降進入 Transition Level 後：1013.25 hPa → 當地 QNH，之後高度改以 ft MSL 表示。


## 那 QNH、QFE、QNE 的「NH、FE、NE」到底代表什麼？

這是很多飛行學生會問的問題。

QNH、QFE、QNE 都是航空 Q-code 的一部分，因此不應該把它們當成一般縮寫。

網路上常會看到的記法：
NH = Nautical Height
FE = Field Elevation

這些可以幫助記憶，但不是正式的逐字母英文全名。
