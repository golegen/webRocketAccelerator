<p align="center">
  <img src="assets/logo.svg" alt="Web Rocket Accelerator" width="128" height="128" onerror="this.style.display='none'">
</p>

<h1 align="center">🚀 Web Rocket Accelerator — 网页火箭加速器 Pro</h1>

<p align="center">
  <a href="https://github.com/golegen/WebRocketAccelerator/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0-blue.svg?style=flat-square" alt="License"></a>
  <a href="https://github.com/golegen/WebRocketAccelerator/releases"><img src="https://img.shields.io/badge/version-5.6.1-brightgreen.svg?style=flat-square" alt="Version"></a>
</p>

---

## 📖 Overview / 概述

**Web Rocket Accelerator** is a high-performance userscript that speeds up web browsing by intelligently prefetching links before you click, applying multi-layer CDN acceleration for common providers, and integrating 6+ regional mirrors — all within a single self-contained script compatible with Tampermonkey/Violentmonkey/ScriptCat.

一个高性能油猴脚本，在您点击链接之前智能预取目标页面，对常见 CDN 提供商应用多层加速策略，集成 6+ 个区域镜像节点 — 单脚本集成，兼容 Tampermonkey/Violentmonkey/ScriptCat。

> Built for Tampermonkey / Violentmonkey / ScriptCat  
> 专为 Tampermonkey / Violentmonkey / ScriptCat 打造

---

## ✨ Features / 核心功能

### 🎯 Intelligent Prefetching / 智能预取

| English Description | 中文说明 |
|---------------------|----------|
| Multi-event triggers: `hover` · `mousedown` · `touchstart` · `keydown` | **多事件触发：悬停 · 点击 · 触摸 · 键盘** |
| Viewport-aware with `IntersectionObserver` (250px margin) | **视口感知：进入视口自动预取（250px 边距）** |
| Dynamic content via `MutationObserver` (300ms debounce) | **动态内容监控：处理 SPA/Ajax 注入的链接（300ms 防抖）** |
| Speculation Rules API: Chrome-native prerender for top 20 cross-origin links | **原生预渲染：前 20 个跨域链接 prerender** |

### 🌐 Common CDN Mirrors / 常见 CDN 镜像

**Smart Domain Matching** — automatically replaces slow overseas CDNs with fast regional mirrors:

智能域名调度 — 自动将缓慢的海外 CDN 替换为快速国内镜像：

| Original (源域名) | Mirror (国内镜像) | Provider (提供方) |
|-------------------|-------------------|------------------|
| `cdnjs.cloudflare.com` | `cdn.bootcdn.net` / `cdn.staticfile.org` | Alibaba Cloud / jsDelivr |
| **Cloudflare CDN** | **BootCDN / StaticFile** | **阿里云 / 字节跳动** |
| `fonts.googleapis.com/css` | `fonts.font.im/css` / `fonts.loli.net/css` | Community mirror |
| **谷歌字体** | **font.im / 立丽网** | **社区镜像** |
| `ajax.googleapis.com` | `cdn.bootcdn.net` / `cdn.staticfile.org` | Alibaba Cloud / ByteDance |
| **谷歌 AJAX 库** | **BootCDN / StaticFile** | **阿里云 / 字节跳动** |
| `gravatar.com/avatar` | `gravatar.loli.net/avatar` / `cdn.sep.cc/avatar` | Community mirror |
| **Gravatar 头像** | **立丽网 / SepCC** | **社区镜像** |
| `stackpath.bootstrapcdn.com` | `cdn.jsdelivr.net/npm` | jsDelivr |
| **Bootstrap CDN** | **jsDelivr npm** | **jsDelivr** |
| `unpkg.com` | `registry.npmmirror.com` / `cdn.jsdelivr.net/npm` | npmmirror / jsDelivr |
| **unpkg NPM** | **npmmirror / jsDelivr** | **npmmirror / jsDelivr** |

Cloudflare → BootCDN/StaticFile · Google Fonts → fonts.font.im/loli.net · Gravatar → gravatar.loli.net/sep.cc · unpkg → npmmirror/jsDelivr

### 🎨 Warm Light Eye-Friendly UI / 暖光护眼 UI

**Design Principles**:

| Aspect | English Details | 中文说明 |
|--------|-----------------|---------|
| Base color | Warm cream/caramel (#fdfaf5–#f7f3ec) | **奶油暖白底色（#fdfaf5–#f7f3ec）** |
| Accent colors | Muted teal (#1a8a7d), coral (#ff6b35), lavender (#7b6faa) | **强调色：青绿 #1a8a7d · 珊瑚橙 #ff6b35 · 紫藤 #7b6faa** |
| Corner radius | 8–12px rounded corners | **圆角：8–12px** |
| Shadow depth | Soft layered shadows for depth | **阴影层次：柔和分层阴影** |
| Layout | Card-based with 2-column grid | **布局：卡片式 + 2 列网格** |
| Typography | Primary English, secondary Chinese (muted tone) | **排版：英文主行 + 中文辅助（弱化色调）** |

### 🔒 Security First / 安全第一

| Mechanism | English Details | 中文说明 |
|-----------|-----------------|---------|
| `Object.freeze()` | Immutable configuration constants | **常量保护：配置常量防篡改** |
| `WeakMap` | Internal state isolated from external access | **状态隔离：内部状态与外部隔离** |
| Private fields (`#`) | Class internals inaccessible from outside | **私有字段：类内部对外不可访问** |
| Zero `eval()` | No dynamic code execution | **零 eval：无动态代码执行** |
| URL validation | All URLs validated via `new URL()` | **URL 校验：所有 URL 通过构造函数验证** |
| Protocol whitelist | Only `https:` URLs pass through | **协议白名单：仅 https:// 协议通过加速** |
| XSS-safe DOM | `createElement` + `textContent`, no raw HTML injection | **安全 DOM：createElement + textContent，无原始 HTML 注入** |

---

## 📊 Performance / 性能指标

| Metric | English Value | 中文说明 |
|--------|---------------|---------|
| Page load improvement (varies by network) | ~30–70% | **页面加载提升（因网络而异）** |
| CDN resource acceleration (China mainland) | **2–5×** faster | **CDN 资源加速（中国大陆）**：**2–5 倍** |
| Memory footprint | < 2MB (LRU cache) | **内存占用**：**< 2MB（LRU 缓存）** |
| Max cached URLs | 2000 | **最大缓存 URL**：**2000** |
| Cache TTL (warm) | 1 hour | **热缓存有效期**：**1 小时** |
| Cache TTL (stale) | 24 hours | **过期缓存有效期**：**24 小时** |

---

## 🚀 Install / 安装

### Prerequisites / 前置条件

Install a userscript manager first:

先安装用户脚本管理器：

- [Tampermonkey](https://www.tampermonkey.net/) — Recommended / 推荐
- [Violentmonkey](https://violentmonkey.github.io/)
- [ScriptCat](https://docs.scriptcat.org/)

### Installation Steps / 安装步骤

1. Open your userscript manager popup  
   打开脚本管理器弹窗
2. Choose **"Import"** or **"从本地导入"**  
   选择"导入"功能
3. Select `webRocketAccelerator.user.js`  
   选择脚本文件
4. Click "Save" or "安装" to confirm  
   点击保存完成安装
5. Done! The accelerator badge appears on every page  
   完成！每个页面会出现浮动加速徽章

---

## ⚙️ Configuration / 配置选项

Accessible via right-click menu on the floating badge or via userscript manager menu:

通过右键点击浮动徽章或脚本管理器菜单访问设置：

| Setting | English Description | 中文说明 | Default |
|---------|---------------------|---------|---------|
| **Accelerate External Links** / 加速外部链接 | Prefetch and accelerate outbound links on hover | **悬停时预取并加速外部链接** | ✅ On |
| **Enable Preload** / 启用预加载 | Inject preload hints for critical resources | **为关键资源注入预加载提示** | ✅ On |
| **Show Acceleration Indicator** / 显示加速指示器 | Display a floating badge for recent accelerations | **显示最近加速的浮动角标** | ❌ Off |
| **Universal CDN Mirror** / 通用 CDN 国内镜像 | Replace overseas CDN resources with domestic mirrors | **将海外 CDN 资源替换为国内镜像** | ✅ On |
| **GitHub Mirror Proxy** / GitHub 镜像代理 | Route GitHub traffic through jsDelivr and gh-proxy mirrors | **通过镜像路由 GitHub 流量** | ✅ On |
| **Resource Tag Interception** / 资源标签拦截 | Rewrite resource tag URLs to accelerated mirrors | **将资源标签 URL 改写为加速镜像** | ✅ On |
| **Adaptive Smart Cache** / 自适应智能缓存 | Tiered: cold→mirror, warm→skip, stale→refresh | **首次镜像加速，热缓存跳过省流，过期重新加速** | ✅ On |
| **Lazy Loading Optimizer** / 懒加载优化器 | Add loading="lazy", defer non-critical scripts | **添加懒加载属性，延迟非关键脚本** | ✅ On |
| **Speculation Rules API** / 原生预渲染 | Chrome-native prerender for eligible cross-origin links | **Chrome 原生 prerender 跨域链接** | ✅ On |
| **Hover Delay** / 悬停延时 | Time before triggering prefetch on hover (15–300ms) | **悬停触发预取的等待时间** | 65ms |

---

## 🏗️ Architecture / 架构设计

### System Flow / 系统流程

```
┌─────────────────────────────────────────────────────────┐
│                   User Interaction                        │
│   hover · mousedown · touchstart · viewport entry       │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│              _isPreloadable() Gate                      │
│   Protocol check · Keyword filter · Download filter ·   │
│   Data saver mode · External link policy                │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│         _doPrefetch() — CDN Acceleration Pipeline       │
│                                                          │
│  Layer 1: CDN Acceleration (CDNAccelerator)            │
│           ├── applyMirrors (URL rewrite)                │
│           └── injectPreconnect (Connection warm-up)     │
│                                                          │
│  Output: Accelerated URL → prefetch/preload tag         │
└─────────────────────────────────────────────────────────┘
```

### Smart Cache Tiers / 智能缓存分级

| Tier (层级) | Condition (条件) | Action (操作) |
|-------------|------------------|---------------|
| **T0_COLD** | Never seen or >24h old | Full acceleration: rewrite to mirror |
| **冷缓存** | **从未见过或超过 24 小时** | **完整加速：替换镜像** |
| **T1_WARM** | Seen within 1h | Skip rewrite, serve from browser cache |
| **热缓存** | **1 小时内见过** | **跳过重写，直接使用浏览器缓存** |
| **T2_STALE** | Seen 1–24h ago | Re-accelerate on explicit request |
| **过期缓存** | **1–24 小时前见过** | **显式请求时重新加速** |

---

## 📄 License / 许可证

This project is licensed under the **GNU Affero General Public License v3.0** (AGPL-3.0).

本项目采用 GNU Affero 通用公共许可证 v3.0（AGPL-3.0）许可。

See [LICENSE](LICENSE) for full terms.

详见 [LICENSE](LICENSE) 文件。

---

## 🙏 Credits / 致谢

| Contribution (贡献方) | Description (说明) |
|--------------|-------------|
| [Tampermonkey](https://www.tampermonkey.net/) | Userscript runtime |
| **[Tampermonkey]** | **【用户脚本运行环境】** |
| [ScriptCat Documentation](https://learn.scriptcat.org/) | Development guide |
| **[ScriptCat 文档]** | **【开发指南】** |
| [jsDelivr](https://www.jsdelivr.com/) | Open-source CDN provider |
| **[jsDelivr]** | **【开源 CDN 服务】** |
| [gh-proxy](https://github.com/hunshcn/gh-proxy) | GitHub proxy service |
| **[gh-proxy]** | **【GitHub 代理服务】** |
| [BootCDN](https://www.bootcdn.cn/) | Alibaba static CDN |
| **[BootCDN]** | **【阿里静态资源 CDN】** |
| [StaticFile](https://www.staticfile.org/) | ByteDance static CDN |
| **[StaticFile]** | **【字节静态资源 CDN】** |

---

## 👤 Author / 作者

凌泉素问 — See [GitHub Profile](https://github.com/golegen)

---

<p align="center">
  <sub>Made with ⚡ by <a href="https://github.com/golegen">golegen</a></sub><br/>
  <small style="color:#8b7d7b">用 ⚡ 打造 · Powered by Hermes Agent</small>
</p>
