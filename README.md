<p align="center">
  <img src="assets/logo.svg" alt="Web Rocket Accelerator" width="128" height="128" onerror="this.style.display='none'">
</p>

<h1 align="center">🚀 Web Rocket Accelerator — 网页火箭加速器</h1>

<p align="center">
  <a href="https://github.com/golegen/WebRocketAccelerator/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0-blue.svg?style=flat-square" alt="License"></a>
  <a href="https://github.com/golegen/WebRocketAccelerator/releases"><img src="https://img.shields.io/badge/version-5.6.4-brightgreen.svg?style=flat-square" alt="Version"></a>
</p>

---

## 📖 Overview / 概述

**Web Rocket Accelerator** is a self-contained userscript that speeds up web browsing by intelligently prefetching links, applying multi-layer CDN mirror acceleration (12+ regional mirrors), and optimizing resource loading — compatible with Tampermonkey / Violentmonkey / ScriptCat.

一个高性能油猴脚本，在点击链接前智能预取目标页面，对常见 CDN 提供商应用多层镜像加速（12+ 区域节点），优化资源加载。

---

## ✨ Features / 核心功能

**🎯 Intelligent Prefetching / 智能预取**

Multi-event triggers: `hover` · `mousedown` · `touchstart` · viewport entry via `IntersectionObserver` (250px margin). Dynamic content support via `MutationObserver`. Speculation Rules API for Chrome-native prerender on top cross-origin links.

多事件触发（悬停 · 点击 · 触摸 · 视口进入），动态内容监控，Chrome 原生预渲染。

**🌐 CDN & GitHub Mirror Acceleration / 镜像加速**

12 CDN mirror rules covering Cloudflare, Google Fonts, Gravatar, jsDelivr, unpkg, jQuery, BootstrapCDN, FontAwesome — each with priority-ordered fallback mirrors. GitHub static resources (raw content, blob files, releases, archives, gists) accelerated via jsDelivr and gh-proxy — **github.com page navigation stays on github.com, preserving your login session**.

12 条 CDN 镜像规则覆盖主流海外 CDN，每条规则含优先级排序的多个国内镜像。GitHub 静态资源（raw 内容、blob 文件、releases、archives、gist）通过 jsDelivr + gh-proxy 加速——**github.com 页面导航保留在原站，登录会话不受影响**。

**💾 Smart Cache Tiering / 智能缓存分层**

Three-tier adaptive strategy — see the Mermaid diagram below in the Architecture section.

三级自适应缓存策略（详见下方架构图中的 Mermaid 流程图）。

**🎨 Warm Light UI / 暖光护眼界面**

Card-based settings and statistics panels with warm cream palette, vertical bilingual labels (EN above, ZH below), 2-column grid layout, frosted glass overlay.

卡片式设置与统计面板，暖白配色，垂直双语排版，毛玻璃遮罩。

---

## 🏗️ Architecture / 架构设计

### System Flow / 系统流程

```mermaid
flowchart TD
    A["🖱️ User Interaction<br>hover · click · touch · viewport<br>用户交互"]:::event
    A --> B{"isOk() Gate<br>Protocol · BlockWords · SaveData · Hash<br>过滤检查"}:::gate

    B -->|"✅ Pass 通过"| C{"SmartCache Tier<br>缓存层级判断"}:::cache
    B -->|"❌ Block 拦截"| D["🚫 Skip Prefetch<br>跳过预取"]:::skip

    C -->|"T0_COLD<br>冷缓存"| E["🌐 CDN Mirror<br>cdnAccel() · ghAccel()<br>CDN镜像加速"]:::cdn
    C -->|"T1_WARM<br>热缓存"| F["💾 Skip Rewrite<br>Browser Cache Hit<br>跳过重写"]:::save
    C -->|"T2_STALE<br>过期缓存"| G["🔄 Re-accelerate<br>重新加速"]:::cdn

    E --> H["📦 Prefetch Tag<br>&lt;link rel=prefetch&gt;<br>预取标签注入"]:::action
    G --> H
    F --> I["📊 Stats Update<br>stInc('skip')<br>统计更新"]:::stats

    H --> J["⚡ Browser Cache<br>浏览器缓存"]:::result
    H --> K["📊 Stats Update<br>stInc('ps')<br>统计更新"]:::stats

    classDef event fill:#e8f5e9,stroke:#2e7d32,color:#1b5e20
    classDef gate fill:#fff3e0,stroke:#e65100,color:#bf360c
    classDef cache fill:#e3f2fd,stroke:#1565c0,color:#0d47a1
    classDef cdn fill:#f3e5f5,stroke:#7b1fa2,color:#4a148c
    classDef save fill:#e8f5e9,stroke:#2e7d32,color:#1b5e20
    classDef skip fill:#fce4ec,stroke:#c62828,color:#b71c1c
    classDef action fill:#fff8e1,stroke:#f57f17,color:#e65100
    classDef result fill:#e0f2f1,stroke:#00695c,color:#004d40
    classDef stats fill:#f3e5f5,stroke:#7b1fa2,color:#4a148c
```

### CDN & GitHub Acceleration Pipeline / 加速管线

```mermaid
flowchart LR
    subgraph CDN["🌐 CDN Acceleration / CDN 镜像加速"]
        direction LR
        C1["cdnjs.cloudflare.com<br>fonts.googleapis.com<br>gravatar.com<br>unpkg.com<br>..."]:::src
        C2{"cdnMap<br>12 Rules<br>12条规则"}:::match
        C3["🇨🇳 Domestic Mirror<br>staticfile · bootcdn · loli<br>npmmirror · baomitu · font.im<br>国内镜像"]:::mirror
        C4["🔗 Keep Original<br>保留原链接"]:::orig
        C1 --> C2 -->|"Match 匹配"| C3
        C2 -->|"No Match 无匹配"| C4
    end

    subgraph GH["🐙 GitHub Acceleration / GitHub 加速"]
        direction LR
        G1["raw.githubusercontent.com<br>github.com/blob<br>codeload.github.com<br>gist.github.com"]:::src
        G2{"ghMirrors<br>6 Rules<br>6条规则"}:::match
        G3["⚡ jsDelivr CDN<br>gh-proxy.com<br>加速代理"]:::mirror
        G4["🔗 Keep Original<br>保留原链接"]:::orig
        G1 --> G2 -->|"Match 匹配"| G3
        G2 -->|"No Match 无匹配"| G4
    end

    classDef src fill:#e8eaf6,stroke:#283593,color:#1a237e
    classDef match fill:#fff3e0,stroke:#e65100,color:#bf360c
    classDef mirror fill:#e8f5e9,stroke:#2e7d32,color:#1b5e20
    classDef orig fill:#f5f5f5,stroke:#616161,color:#424242
```

### Smart Cache Tiers / 智能缓存分级

```mermaid
flowchart TD
    T0["T0_COLD<br>❄️ Never seen or >24h<br>从未见过或超过24h"]:::cold
    T1["T1_WARM<br️>🔥 Seen within 1h<br>1小时内见过"]:::warm
    T2["T2_STALE<br>🌤️ Seen 1-24h ago<br>1-24小时前见过"]:::stale

    T0 --> A0["✅ Full mirror rewrite<br>完整镜像重写"]:::act
    T1 --> A1["💾 Skip rewrite<br>跳过重写 · 省流"]:::act
    T2 --> A2["🔄 Re-accelerate<br>重新加速"]:::act

    classDef cold fill:#e3f2fd,stroke:#1565c0,color:#0d47a1
    classDef warm fill:#e8f5e9,stroke:#2e7d32,color:#1b5e20
    classDef stale fill:#fff3e0,stroke:#e65100,color:#bf360c
    classDef act fill:#f5f5f5,stroke:#616161,color:#424242
```

---

## 🚀 Install / 安装

1. Install a userscript manager: [Tampermonkey](https://www.tampermonkey.net/) · [Violentmonkey](https://violentmonkey.github.io/) · [ScriptCat](https://docs.scriptcat.org/)
2. Open the manager → **Import** → select `webRocketAccelerator.user.js` → **Save**

先安装脚本管理器，然后导入脚本文件保存即可。

---

## ⚙️ Configuration / 配置选项

Accessible via userscript manager menu or floating badge:

通过脚本管理器菜单或浮动徽章访问：

- **Show Acceleration Indicator** / 显示加速指示器 — Floating badge for recent accelerations (Off)
- **Speculation Rules Prerender** / 原生预测渲染 — Chrome-native prerender (On)
- **Universal CDN Mirror** / 通用 CDN 国内镜像 — Replace overseas CDN with domestic mirrors (On)
- **GitHub Mirror Proxy** / GitHub 镜像代理 — Route GitHub via jsDelivr/gh-proxy (On)
- **Resource Tag Interception** / 资源标签拦截 — Rewrite resource tag URLs (On)
- **Adaptive Smart Cache** / 自适应智能缓存 — Tiered cold/warm/stale strategy (On)
- **Lazy Loading Optimizer** / 懒加载优化器 — Add loading="lazy", defer scripts (On)
- **Hover Delay** / 悬停延时 — Prefetch trigger delay 15-300ms (65ms)

---

## 📄 License / 许可证

**GNU Affero General Public License v3.0** (AGPL-3.0)

See [LICENSE](LICENSE) for full terms. 详见 LICENSE 文件。

---

## 👤 Author / 作者

凌泉素问 — [GitHub Profile](https://github.com/golegen)

---

<p align="center">
  <sub>Made with ⚡ by <a href="https://github.com/golegen">golegen</a></sub><br/>
  <small style="color:#8b7d7b">用 ⚡ 打造 · Powered by Hermes Agent</small>
</p>