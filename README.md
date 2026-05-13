<p align="center">
  <img src="assets/logo.svg" alt="Web Rocket Accelerator" width="128" height="128" onerror="this.style.display='none'">
</p>

<h1 align="center">🚀 Web Rocket Accelerator — 网页火箭加速器</h1>

<p align="center">
  <a href="https://github.com/golegen/WebRocketAccelerator/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0-blue.svg?style=flat-square" alt="License"></a>
  <a href="https://github.com/golegen/WebRocketAccelerator/releases"><img src="https://img.shields.io/badge/version-5.7.0-brightgreen.svg?style=flat-square" alt="Version"></a>
</p>

---

## 📖 Overview / 概述

**Web Rocket Accelerator** is a high-performance Tampermonkey script, specifically designed for accelerators that access web pages.

一个高性能油猴脚本，专为访问web网页的加速器。。

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

---

## 🚀 Install / 安装

1. Install a userscript manager: [Tampermonkey](https://www.tampermonkey.net/) · [Violentmonkey](https://violentmonkey.github.io/) · [ScriptCat](https://docs.scriptcat.org/)
2. Open the manager → **Import** → select `webRocketAccelerator.user.js` → **Save**

先安装脚本管理器，然后导入脚本文件保存即可。

---

## 🗒️ Changelog / 更新日志

### v5.7.0 (2026-05-13)
**Bug Fixes:**
- 🔒 **[SEC]** `modal()`: 完全重构为 DOM API 构建，移除了 `innerHTML` 直接拼接用户可控字符串，消除 XSS 风险
- 🌐 **[FIX]** 补充缺失的 `@connect` 指令：`cdn.jsdelivr.net`、`registry.npmmirror.com`、`cdn.sep.cc`、`fonts.loli.net`、`lib.baomitu.com`
- 📊 **[FIX]** `gh_m`（原生反向代理）统计量此前永不递增；现根据实际使用的镜像类型正确区分 `gh`（jsDelivr CDN）vs `gh_m`（gh-proxy）
- 🔄 **[FIX]** `tryCreateEntry` 重试退避从 `200*(n-1)` 修正为真正的指数退避 `100*(1<<(n-3))`（n=3→100ms, 4→200ms, 5→400ms）
- 🛡️ **[FIX]** `_wraPC` 属性改用模块级布尔变量，避免被页面 JS 覆盖

**Improvements:**
- 📌 使用 `C.minDelay` 替代硬编码 `15` 在 range input min 属性
- ⚡ GitHub 镜像函数返回类型统一为 `{url, mirror}`，消除 `accelerateUrl` 中的类型不一致

---

## 📄 License / 许可证

**GNU Affero General Public License v3.0** (AGPL-3.0)

See [LICENSE](LICENSE) for full terms. 详见 LICENSE 文件。

---

## 👤 Author / 作者

Powered by Hermes Agent & 凌泉素问 — [GitHub Profile](https://github.com/golegen)
