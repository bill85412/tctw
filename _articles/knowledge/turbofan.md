---
title: "一次搞懂四種航空發動機：Turbojet、Turbofan、Turboprop、Turboshaft"
section: knowledge          # 大分類：news / knowledge / safety / fanzone
category: aircraft           # 小分類代碼（見下表）
date: 2026-08-18            # 日期，新的排前面
thumb: /assets/img/ge90.jpg   # 縮圖（可留空 "" ）
excerpt: "飛機為什麼能夠飛上天空？如果把問題一路追溯到最根本，我們會發現，飛機的速度、航程、爬升能力與載重能力，都與一個核心系統密不可分——航空發動機（Aircraft Engine）"
# featured: true            # 想當首頁封面故事就取消這行註解（同時只留一篇）
---

現代航空器使用的發動機種類很多，但如果聚焦在燃氣渦輪發動機（Gas Turbine Engine），最重要的四種類型就是：

**Turbojet（渦輪噴射發動機）、Turbofan（渦輪風扇發動機）、Turboprop（渦輪螺旋槳發動機）以及 Turboshaft（渦輪軸發動機）**

此文將帶你認識這四種發動機做功的原理、以及它們的不同之處

## 所有燃氣渦輪發動機都從遵循同一原理

不論是 Boeing 777 的大型渦輪風扇，還是直升機上的渦輪軸發動機，它們都遵循相同的基本循環：

**進氣（Intake）→ 壓縮（compression）→ 燃燒（Combustion）→ 排氣（Exhaust）**

這就是著名的 **Brayton Cycle（布雷頓循環）**

與汽車常見的活塞發動機不同，燃氣渦輪發動機並不是利用活塞上下運動，而是讓空氣持續流過發動機，又稱為軸流式發動機

<figure><img src="{{ '/assets/img/brayton.jpg' | relative_url }}"><figcaption>布雷頓循環</figcaption></figure>

## 渦輪發動機做功的過程

**1. Compressor：壓縮空氣**

空氣首先進入發動機，經過壓縮機(Compressor)，壓縮機的作用是對空氣做功，提高空氣的：壓力、溫度、密度

為什麼要壓縮空氣？因為燃燒需要大量氧氣，而高壓空氣能讓燃燒過程更加有效率，也能讓後續的膨脹過程產生更多可用能量

**2. Combustion Chamber：進入燃燒室燃燒**

壓縮後的高壓空氣進入燃燒室，燃油被噴入並點燃。

這個過程可以簡化成：Fuel + Compressed Air → Hot, High-Energy Gas

這裡有一個非常重要的觀念：燃燒本身不是主要用來直接產生推力，而是將燃料中的化學能轉換成高溫燃氣的能量

**3. 渦輪（Turbine）：發動機的「能量分配器」

燃燒產生的高溫燃氣接著進入渦輪，高速燃氣流過渦輪時，會讓渦輪旋轉。渦輪再透過軸連接並帶動前方的壓縮機

但是渦輪並不會把所有能量都拿走

它只需要提取足夠的能量來：帶動壓縮機、帶動其他必要的附件、視發動機型式，提供額外的 Shaft Power

剩餘的能量則可以透過不同方式轉換成推力或機械功

**以上為渦輪發動機工作的基本原理，接下來這就是四種發動機開始分化的地方。**

## 渦輪噴射發動機(Turbojet)：把能量變成高速噴流

Turbojet 是最直接的燃氣渦輪發動機形式

基本結構是：**Intake → Compressor → Combustion Chamber → Turbine → Nozzle**

燃燒後的高溫燃氣經過 Turbine，Turbine 只提取部分能量來維持 Compressor 運轉，剩餘能量則保留在燃氣中，最後，這些高溫高壓燃氣經過 Nozzle 被加速，形成高速向後的噴流

根據牛頓第三運動定律：當燃氣高速向後排出時，飛機便受到向前的反作用力

因此 Turbojet 的核心概念就是：燃料化學能 → 高溫燃氣 → 高速噴流 → 推力

Turbojet 的特色是：少量空氣 × 非常高的排氣速度

這種方式在高速飛行時具有優勢，因此早期噴射客機與許多軍用飛機曾廣泛採用 Turbojet。但它也存在一個問題：如果把太少的空氣加速到太高的速度，會造成較大的能量損失與較低的推進效率，這也促成了下一代發動機的發展。

<figure><img src="{{ '/assets/img/turbojet.jpg' | relative_url }}"><figcaption>Turbojet Engine</figcaption></figure>

## 渦輪風扇發動機(Turbofan)：不只要加速少量空氣，而是加速大量空氣

現代民航客機幾乎都使用渦輪風扇發動機(Turbofan)

Turbofan 可以理解成：Turbojet 加上一個大型風扇

但這個風扇並不是單純「多了一片螺旋槳」，它與核心發動機整合在一起，而且尺寸非常大

當空氣進入 Turbofan 後，首先經過風扇

接著氣流分成兩部分：核心流（Core Flow）進入發動機核心；旁通流（Bypass Flow）繞過核心

因此 Turbofan 同時存在：Core Airflow以及Bypass Airflow

其中現代民航機使用的高旁通比渦輪風扇發動機（High-Bypass Turbofan），大部分空氣其實根本不進入燃燒室

為什麼繞過核心反而更有效率？這是理解 Turbofan 最重要的概念之一

假設我們有兩種方式產生推力。第一種：少量空氣 → 非常高速；第二種：大量空氣 → 較低速度

對飛機而言，第二種方式通常具有更好的推進效率，原因在於飛機需要的是改變空氣的動量。如果把少量空氣加速到遠高於飛機本身速度，雖然可以產生推力，但大量能量會以高速尾流的形式離開發動機；如果改成推動大量空氣，只需要讓這些空氣的速度增加較少，就能產生相同等級的動量變化，同時減少不必要的能量損失

因此 High-Bypass Turbofan 的核心思想可以濃縮成一句話：用更大的空氣流量，換取更低的排氣速度

這就是為什麼現代客機的發動機越來越「大」。它們不是單純追求更大的燃燒室，而是在追求更大的總流Mass Flow

Turbofan 有一個非常重要的參數：**Bypass Ratio（旁通比）**，它是繞過核心的空氣質量流量與通過核心的空氣質量流量之比值

例如：

Bypass Ratio = 10

代表大約每有 1 單位空氣進入核心，就有 10 單位空氣經過 Bypass。

因此現代 High-Bypass Turbofan 的推力主要來自 Fan 所推動的大量 Bypass Air，而不是單純依賴核心排氣。

這也是現代民航機能夠同時兼顧：燃油效率、航程、噪音、大推力的重要原因。

<figure><img src="{{ '/assets/img/turbofan.jpg' | relative_url }}"><figcaption>Turbofan Engine</figcaption></figure>

## 渦輪螺旋槳發動機(Turboprop)：把燃氣能量拿去轉螺旋槳

如果說 Turbofan 是：燃氣渦輪 → Fan

那麼 Turboprop 就是：燃氣渦輪 → Propeller

Turboprop 的核心仍然是：Compressor → Combustor → Turbine，但與 Turbojet 不同的是，Turbine 會從燃氣中提取更多能量，這些能量不再主要留給 Nozzle 形成高速噴流，而是轉換成：軸功率（Shaft Power）再經過變速箱，帶動螺旋槳

因此：**Fuel → Combustion → Turbine → Shaft → Gearbox → Propeller → Thrust**。這就是 Turboprop 的核心。

Turboprop 的推力其實主要來自螺旋槳。螺旋槳在較低飛行速度下非常有效率

Turboprop 仍然會有排氣，因此 Exhaust 也會提供一些推力，但通常大部分推力來自螺旋槳

這意味著 Turboprop 與 Turbofan 的思想其實非常接近：都希望推動大量空氣，而不是只製造極高速的排氣。可以想像 Turboprop 就是旁通比超大的 Turbofan，Turbofan 的旁通比通常在10以下，而 Turboprop 的旁通比能輕鬆達到50

差別只是：**Turbofan → Fan**；**Turboprop → Propeller**

因此像 ATR 72、Dash 8 這類巡航速度較低的飛機，非常適合使用 Turboprop

為什麼 Turboprop 不適合所有飛機？因為螺旋槳存在速度限制

當飛機速度越來越高，Propeller Blade 的局部速度也會越來越高。最終葉片尖端可能接近或超過音速，造成翼尖失速

因此在高速巡航的客機上，Turbofan 通常比傳統螺旋槳更適合

<figure><img src="{{ '/assets/img/turboprop.jpg' | relative_url }}"><figcaption>Turboprop Engine</figcaption></figure>

## 渦輪軸發動機(Turboshaft)：不需要推飛機，而是提供機械功率

Turboshaft 與 Turboprop 非常相似。兩者都會從高溫燃氣中提取大量能量，轉換成：Shaft Power，但兩者的最終用途不同

Turboprop：Shaft → Propeller

Turboshaft：Shaft → Transmission / Mechanical Load

最典型的應用就是直升機

直升機需要旋轉主旋翼，主旋翼需要非常大的機械功率，因此與其把燃氣高速噴出去，不如把燃氣中的能量大量提取出來，轉換成軸的旋轉功率

因此：Combustion → Turbine → Shaft Power → Transmission → Main Rotor → Lift，這就是直升機的基本能量鏈

所以 Turboshaft 的主要不是「噴流」，而是：可用的旋轉機械功率

然而，燃氣渦輪的轉速非常高，但直升機主旋翼需要的是較低的 RPM 與較大的 扭矩（Torque）

因此需要 Transmission / Reduction Gearbox

它負責把 High RPM + Lower Torque 轉換成 Lower RPM + Higher Torque，最後才能有效率地驅動主旋翼

這也是 Turboshaft 與 Turboprop 中 Gearbox 非常重要的原因

<figure><img src="{{ '/assets/img/turboshaft.jpg' | relative_url }}"><figcaption>Turboshaft Engine</figcaption></figure>

## 為什麼現代客機選擇 Turbofan？

真正原因是它非常適合現代客機的**速度 + 高度 + 航程 + 載重 + 燃油效率**

大型客機通常在約 Mach 0.78–0.85 的速度巡航，這個速度範圍對 High-Bypass Turbofan 非常有利，因此從早期的 Turbojet，航空業逐漸發展到 Low-Bypass Turbofan，再到今天的 High-Bypass Turbofan，這不是單純「技術更新」，而是推進效率與飛行任務需求共同演化的結果

## 最終理解：航空發動機其實是在「管理能量」

如果只背：**Turbojet、Turbofan、Turboprop、Turboshaft**很快就會忘記，但如果理解它們背後的共同邏輯，就不容易混淆。

所有燃氣渦輪發動機都在做同一件事情：**燃料的化學能** → **高溫燃氣的能量** → **Turbine 提取能量** → **轉換成不同形式的有用輸出**

最後的選擇只有幾種：

**高速噴流** → Turbojet

**大量低速空氣** → Turbofan

**螺旋槳旋轉** → Turboprop

**機械軸功率** → Turboshaft

所以最值得記住的不是四個英文名稱，而是這四句話：

它們共同遵循的核心則是：**吸入空氣、壓縮空氣、燃燒燃油、從燃氣中提取能量，再把剩餘能量轉換成推力或機械功率**
