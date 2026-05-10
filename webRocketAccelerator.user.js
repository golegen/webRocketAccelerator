// ==UserScript==
// @name         webRocketAccelerator
// @namespace    https://github.com/golegen/webRocketAccelerator
// @version      5.6.7
// @author       凌泉素问
// @description  v5.6.7 — 智能网页加速：预取·CDN镜像·GitHub加速·省流·智能缓存 | Smart web accelerator with per-page session + all-time cumulative stats
// @match        *://*/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_addStyle
// @connect      fastly.jsdelivr.net
// @connect      cdn.bootcdn.net
// @connect      cdn.staticfile.org
// @connect      gh-proxy.com
// @connect      hosts.gitcdn.top
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMWExYTJlIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjMTYyMTNlIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBmMzQ2MCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZiIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmZiODMwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iNjAlIiBzdG9wLWNvbG9yPSIjZmY2YjM1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2U5NDU2MCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxmaWx0ZXIgaWQ9ImciPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz48L2ZpbHRlcj4KICA8L2RlZnM+CiAgPHBhdGggZD0iTTMyIDQgQzI4IDQgMjIgMTAgMjAgMTggQzE4IDMwIDE2IDQwIDE2IDQ4IEMxNiA1MiAxOCA1NiAyMiA1OCBDMjQgNTggMzAgNTYgMzIgNTIgQzM0IDU2IDQwIDU4IDQyIDU4IEM0NiA1NiA0OCA1MiA0OCA0OCBDNDggNDAgNDYgMzAgNDQgMTggQzQyIDEwIDM2IDQgMzIgNFoiIGZpbGw9InVybCgjYikiLz4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjI0IiByPSI0LjUiIGZpbGw9IiM2YzYzZmYiLz4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjI0IiByPSIyLjgiIGZpbGw9IiMwMGQyZmYiLz4KICA8cGF0aCBkPSJNMjIgNDQgTDYgNTYgTDIyIDU0WiIgZmlsbD0iIzE2MjEzZSIgb3BhY2l0eT0iLjkiLz4KICA8cGF0aCBkPSJNMjIgNDYgTDggNTYgTDIyIDU1WiIgZmlsbD0iIzdiNmZhYSIgb3BhY2l0eT0iLjUiLz4KICA8cGF0aCBkPSJNNDIgNDQgTDU4IDU2IEw0MiA1NFoiIGZpbGw9IiMxNjIxM2UiIG9wYWNpdHk9Ii45Ii8+CiAgPHBhdGggZD0iTTQyIDQ2IEw1NiA1NiBMNDIgNTVaIiBmaWxsPSIjN2I2ZmFhIiBvcGFjaXR5PSIuNSIvPgogIDxlbGxpcHNlIGN4PSIzMiIgY3k9IjYyIiByeD0iNiIgcnk9IjciIGZpbGw9InVybCgjZikiIGZpbHRlcj0idXJsKCNnKSIgb3BhY2l0eT0iLjgiLz4KICA8ZWxsaXBzZSBjeD0iMzIiIGN5PSI1OCIgcng9IjMiIHJ5PSI1IiBmaWxsPSIjZmZiODMwIi8+CiAgPGxpbmUgeDE9IjI0IiB5MT0iMTYiIHgyPSIyNCIgeTI9IjIyIiBzdHJva2U9IiMwMGQyZmYiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iLjQiLz4KICA8bGluZSB4MT0iMjgiIHkxPSIxNCIgeDI9IjI4IiB5Mj0iMjAiIHN0cm9rZT0iIzAwZDJmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMzUiLz4KICA8bGluZSB4MT0iMzYiIHkxPSIxNCIgeDI9IjM2IiB5Mj0iMjAiIHN0cm9rZT0iIzAwZDJmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMzUiLz4KICA8bGluZSB4MT0iNDAiIHkxPSIxNiIgeDI9IjQwIiB5Mj0iMjIiIHN0cm9rZT0iIzAwZDJmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuNCIvPgogIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTIiIHI9IjEuMiIgZmlsbD0iI2ZmZDcwMCIgb3BhY2l0eT0iLjciLz4KICA8Y2lyY2xlIGN4PSI1MiIgY3k9IjgiIHI9IjEiIGZpbGw9IiNmZmQ3MDAiIG9wYWNpdHk9Ii41Ii8+CiAgPGNpcmNsZSBjeD0iNDgiIGN5PSIxOCIgcj0iMC43IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIuMzUiLz4KPC9zdmc+
// @run-at       document-start
// ==/UserScript==

(() => {
'use strict';

// ════════════════════════════════════════════
// 1. Configuration Constants
// ════════════════════════════════════════════
const V = '5.6.7';
const P = 'wra_';

const C = {
    delay: 65, minDelay: 15,
    touchCooldown: 1111,
    speculationLimit: 20,
    viewMargin: '250px',

    // Tier thresholds (milliseconds)
    warmTTL: 3_600_000,   // 1hr — cache is hot, skip rewrite
    staleTTL: 86_400_000, // 24hr — cache stale, re-accelerate
    cacheMax: 2000,       // max URL history entries

    // ── CDN Mirror Map — 12 overseas sources → top 8 domestic mirrors (speed-ranked via China test) ──
    // Tested from Chinese mainland: staticfile(0.29s) > npmmirror(0.42s) > font.im(0.72s) >
    // gh-proxy(1.16s) > gravatar.loli(1.25s) > bootcdn(1.38s) > baomitu(1.42s) > cdnjs.loli(1.59s)
    cdnMap: Object.freeze([
        {p:'cdnjs.cloudflare.com/ajax/libs',  r:['https://cdn.staticfile.org/ajax/libs','https://cdn.bootcdn.net/ajax/libs','https://cdnjs.loli.net/ajax/libs']},
        {p:'fonts.googleapis.com/css',        r:['https://fonts.font.im/css','https://fonts.loli.net/css']},
        {p:'fonts.gstatic.com',               r:['https://fonts.font.im','https://fonts.loli.net']},
        {p:'ajax.googleapis.com/ajax/libs',   r:['https://cdn.staticfile.org/ajax/libs','https://cdn.bootcdn.net/ajax/libs','https://lib.baomitu.com/ajax/libs']},
        {p:'gravatar.com/avatar',             r:['https://gravatar.loli.net/avatar','https://cdn.sep.cc/avatar']},
        {p:'stackpath.bootstrapcdn.com',       r:['https://cdn.staticfile.org','https://cdn.bootcdn.net','https://lib.baomitu.com']},
        {p:'cdn.jsdelivr.net',                r:['https://fastly.jsdelivr.net','https://cdn.jsdelivr.net']},
        {p:'unpkg.com',                        r:['https://registry.npmmirror.com','https://cdn.staticfile.org','https://lib.baomitu.com']},
        {p:'code.jquery.com',                  r:['https://cdn.staticfile.org','https://cdn.bootcdn.net','https://lib.baomitu.com']},
        {p:'maxcdn.bootstrapcdn.com',          r:['https://cdn.bootcdn.net','https://cdn.staticfile.org','https://lib.baomitu.com']},
        {p:'use.fontawesome.com',              r:['https://cdn.staticfile.org','https://cdn.bootcdn.net']},
        {p:'kit-free.fontawesome.com',         r:['https://cdn.staticfile.org','https://cdn.bootcdn.net']},
    ]),

    ghMirrors: Object.freeze([
        {re:/^https?:\/\/raw\.githubusercontent\.com\/([^\/]+)\/([^\/]+)\/(.+)$/,
         r:[{u:'https://cdn.jsdelivr.net/gh/$1/$2@$3'},{u:'https://gh-proxy.com/raw.githubusercontent.com/$1/$2/$3'}]},
        {re:/^https?:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)$/,
         r:[{u:'https://cdn.jsdelivr.net/gh/$1/$2@$3/$4'},{u:'https://gh-proxy.com/raw.githubusercontent.com/$1/$2/$3/$4'}]},
        {re:/^https?:\/\/github\.com\/([^\/]+)\/([^\/]+)\/(?:releases\/download|archive)\/(.+)$/,
         r:[{u:'https://gh-proxy.com/https://github.com/$1/$2/archive/$3'}]},
        {re:/^https?:\/\/codeload\.github\.com\/(.+)$/,
         r:[{u:'https://gh-proxy.com/https://codeload.github.com/$1'}]},
        {re:/^https?:\/\/gist\.github\.com\/(.+)$/,
         r:[{u:'https://gh-proxy.com/https://gist.github.com/$1'}]},
    ]),

    preDomains: Object.freeze([
        // GitHub ecosystem — full coverage from optimized CDN IPs
        'https://github.com','https://api.github.com','https://gist.github.com',
        'https://raw.githubusercontent.com','https://codeload.github.com',
        'https://github.githubassets.com','https://central.github.com',
        'https://avatars.githubusercontent.com','https://avatars0.githubusercontent.com',
        'https://avatars1.githubusercontent.com','https://avatars2.githubusercontent.com',
        'https://avatars3.githubusercontent.com','https://avatars4.githubusercontent.com',
        'https://avatars5.githubusercontent.com',
        'https://user-images.githubusercontent.com','https://favicons.githubusercontent.com',
        'https://camo.githubusercontent.com','https://cloud.githubusercontent.com',
        'https://media.githubusercontent.com','https://objects.githubusercontent.com',
        'https://desktop.githubusercontent.com',
        'https://github.global.ssl.fastly.net','https://github.map.fastly.net',
        'https://pipelines.actions.githubusercontent.com',
        'https://github-cloud.s3.amazonaws.com','https://github-com.s3.amazonaws.com',
        'https://github-production-release-asset-2e65be.s3.amazonaws.com',
        'https://github-production-user-asset-6210df.s3.amazonaws.com',
        'https://github-production-repository-file-5c1aeb.s3.amazonaws.com',
        // CDN mirrors
        'https://cdn.jsdelivr.net','https://fastly.jsdelivr.net','https://gh-proxy.com',
        'https://cdn.staticfile.org','https://cdn.bootcdn.net','https://cdnjs.loli.net',
        'https://registry.npmmirror.com','https://lib.baomitu.com','https://fonts.font.im',
    ]),

    blockWords: /\b(login|logout|register|signin|signup|signout|pay|create|edit|download|reset|submit|doubleclick)\b/i,
    resourceTags: new Set(['SCRIPT','LINK','IMG','IFRAME','VIDEO','AUDIO','SOURCE']),
};

// ════════════════════════════════════════════
// 2. App Store Mirrors
// ════════════════════════════════════════════
const storeMirrors = Object.freeze([
    {re:/chrome\.google\.com\/webstore\/.+\/([a-z]{32})/,           f:'chrome.google.com',         t:'chrome.crxsoso.com'},
    {re:/chromewebstore\.google\.com\/.+\/([a-z]{32})/,             f:'chromewebstore.google.com', t:'chrome.crxsoso.com/webstore'},
    {re:/microsoftedge\.microsoft\.com\/addons\/.+\/([a-z]{32})/,  f:'microsoftedge.microsoft.com',t:'microsoftedge.crxsoso.com'},
    {re:/addons\.mozilla\.org|addons(?:-dev)?\.allizom\.org/,     f:'addons.mozilla.org',         t:'addons.crxsoso.com'},
    {re:/(?:apps|www)\.microsoft\.com\/(?:store|p)\/.+\/([a-zA-Z\d]{10,})/, f:/(?:www|apps)\.microsoft\.com/, t:'apps.crxsoso.com'},
]);

// ════════════════════════════════════════════
// 3. Persistent Storage
// ════════════════════════════════════════════
const S = {
    g(k,d){ try{const v=GM_getValue(P+k);return v!==void 0?v:d}catch{return d} },
    s(k,v){ try{GM_setValue(P+k,v)}catch{} },
};

// ════════════════════════════════════════════
// 4. Utilities
// ════════════════════════════════════════════
const isUrl = u => /^https?:/i.test(u);

/** Stable URL fingerprint — strips minor params but preserves the resource identity */
function fid(u) {
    try {
        const p = new URL(u);
        // Strip tracking/random params, keep core identity
        const keep = [];
        for (const [k, v] of p.searchParams) {
            if (/^(v|ver|version|token|_|ts|r|rand|random|nonce|nc|_t|t|stamp)$/i.test(k)) continue;
            keep.push(k + '=' + v);
        }
        return p.origin + p.pathname + (keep.length ? '?' + keep.join('&') : '');
    } catch { return u; }
}

// ════════════════════════════════════════════
// 5. SmartCache — Tiered Adaptive Engine
// ════════════════════════════════════════════

/**
 * Resource Tier:
 *   T0_COLD    — Never seen or expired (>24h). Full acceleration: rewrite to mirror.
 *   T1_WARM    — Seen within 1h. Browser cache very likely still valid. Skip rewrite, serve from cache.
 *   T2_STALE   — Seen 1-24h ago. Cache may be stale. Re-accelerate with mirror when explicitly requested.
 */
const TIER = Object.freeze({ COLD:0, WARM:1, STALE:2 });

let urlHistory = null;

function loadHistory() {
    if (urlHistory) return urlHistory;
    try {
        const raw = S.g('_hist', '');
        if (raw) urlHistory = new Map(JSON.parse(raw));
        else urlHistory = new Map();
    } catch { urlHistory = new Map(); }
    return urlHistory;
}

function saveHistory() {
    try {
        const arr = [...urlHistory].slice(-C.cacheMax);
        S.s('_hist', JSON.stringify(arr));
    } catch {}
}

/** Query the cache tier for a URL */
function cacheTier(url) {
    const h = loadHistory();
    const key = fid(url);
    const entry = h.get(key);
    if (!entry) return TIER.COLD;
    const age = Date.now() - entry.ts;
    if (age < C.warmTTL) return TIER.WARM;
    if (age < C.staleTTL) return TIER.STALE;
    return TIER.COLD;
}

/** Record that a resource URL was just fetched (or about to be) */
function cacheTouch(url) {
    const h = loadHistory();
    const key = fid(url);
    h.set(key, { ts: Date.now(), n: (h.get(key)?.n || 0) + 1 });
    // LRU eviction
    if (h.size > C.cacheMax) {
        const oldest = [...h.entries()].sort((a, b) => a[1].ts - b[1].ts).slice(0, 500);
        for (const [k] of oldest) h.delete(k);
    }
    // Persist every 50 writes
    if (h.size % 50 === 0) saveHistory();
}

/** Get the original CDN URL from a possibly-mirrored URL for cache key purposes */
function originalCDNUrl(mirroredUrl) {
    // Reversed lookup: if the URL is a known mirror, reconstruct the original
    for (const rule of C.cdnMap) {
        for (const base of rule.r) {
            if (mirroredUrl.startsWith(base)) {
                return 'https://' + rule.p + mirroredUrl.slice(base.length);
            }
        }
    }
    return mirroredUrl;
}

// ════════════════════════════════════════════
// 6. Core Acceleration Engine
// ════════════════════════════════════════════
function cdnAccel(url) {
    if (!isUrl(url)) return url;
    for (const r of C.cdnMap) {
        const i = url.indexOf(r.p);
        if (i < 0) continue;
        const path = url.slice(i + r.p.length);
        for (const base of r.r) {
            try { new URL(base+path); return base+path } catch {}
        }
    }
    return url;
}

function ghAccel(url) {
    if (!isUrl(url)) return url;
    for (const rule of C.ghMirrors) {
        const m = url.match(rule.re);
        if (!m) continue;
        for (const r of rule.r) {
            try {
                const u = r.u.replace(/\$(\d+)/g,(_,n)=>m[n]||'');
                if (!isUrl(u)) continue;
                new URL(u);
                return u;
            } catch {}
        }
    }
    return url;
}

function storeAccel(url) {
    for (const m of storeMirrors) {
        if (!m.re.test(url)) continue;
        try { return url.replace(m.f, m.t) } catch { return url }
    }
    return null;
}

/**
 * Adaptive acceleration — respects SmartCache tiers.
 * T0 (COLD):  full mirror rewrite + record in cache
 * T1 (WARM):  skip rewrite, trust browser cache → saved data
 * T2 (STALE): rewrite only for explicit prefetch requests
 */
function accelerateUrl(url, opts = {}) {
    const flags = {};
    let u = url;
    const smartOn = opts.smart !== false && S.g('smart_on', true);

    // App store mirrors — always apply (URL change is semantic)
    if (opts.store !== false) {
        const sm = storeAccel(u);
        if (sm) { u = sm; flags.store = true; }
    }

    const tier = smartOn ? cacheTier(u) : TIER.COLD;

    // WARM: browser cache hit — skip rewrite entirely (DATA SAVED)
    if (tier === TIER.WARM) {
        flags.tier = 'warm';
        flags.saved = true;
        return {url: u, flags};
    }

    // CDN acceleration (COLD, STALE, or smart disabled)
    if (opts.cdn !== false) {
        const cu = cdnAccel(u);
        if (cu !== u) { u = cu; flags.cdn = true; }
    }

    // GitHub acceleration
    if (opts.gh !== false) {
        const gu = ghAccel(u);
        if (gu !== u) { u = gu; flags.gh = true; }
    }

    flags.tier = tier === TIER.COLD || tier === TIER.STALE ? 'cold' : 'warm';

    return {url: u, flags};
}

/** Register that a resource URL was successfully fetched */
function registerFetch(url) {
    cacheTouch(url);
    saveHistory();
}

function getResourceUrl(el) {
    if (!el?.tagName) return null;
    const tag = el.tagName;
    if (tag === 'SCRIPT' || tag === 'IMG' || tag === 'IFRAME' ||
        tag === 'VIDEO' || tag === 'AUDIO' || tag === 'SOURCE') {
        return el.src || el.getAttribute('src');
    }
    if (tag === 'LINK') {
        const rel = (el.rel || '').toLowerCase();
        if (/\b(?:stylesheet|preload|prefetch|icon|dns-prefetch|preconnect|modulepreload)\b/.test(rel)) {
            return el.href || el.getAttribute('href');
        }
    }
    return null;
}

function setResourceUrl(el, url) {
    const tag = el.tagName;
    if (tag === 'SCRIPT' || tag === 'IMG' || tag === 'IFRAME' ||
        tag === 'VIDEO' || tag === 'AUDIO' || tag === 'SOURCE') {
        if (el.src !== undefined) el.src = url;
        else el.setAttribute('src', url);
        return true;
    }
    if (tag === 'LINK') {
        if (el.href !== undefined) el.href = url;
        else el.setAttribute('href', url);
        return true;
    }
    return false;
}

// ════════════════════════════════════════════
// 7. Statistics — Session + Cumulative Dual-Track
// ════════════════════════════════════════════
// Session counters — ALWAYS fresh per page load
function freshSes() {
    return {pf:0,ps:0,pf_fail:0,cdn:0,gh:0,gh_m:0,res:0,sp:0,skip:0,savedRes:0,lazy:0,t0:Date.now()};
}
// Save ses periodically for crash recovery only (not loaded on next page)
function saveSes() { S.s('_ses', JSON.stringify(ses)); }

// Cumulative counters — persist across all sessions
function loadCum() {
    try { const r = S.g('_cum',''); if (r) return JSON.parse(r); } catch {}
    return {cdn:0,gh:0,skip:0,res:0,ps:0,savedRes:0,lazy:0,sp:0,gh_m:0,pf_fail:0,data:0,time:0,t0:Date.now()};
}
function saveCum() { S.s('_cum', JSON.stringify(cum)); }

let ses = freshSes();
let cum = loadCum();

function stInc(k) {
    // Session counter
    if (k in ses) { ses[k]++; }
    // Cumulative counter (map session key → cumulative key)
    const ck = {
        'pf':'pf', 'cdn':'cdn', 'gh':'gh', 'skip':'skip', 'res':'res',
        'ps':'ps', 'savedRes':'savedRes', 'lazy':'lazy', 'sp':'sp',
        'gh_m':'gh_m', 'pf_fail':'pf_fail'
    }[k] || null;
    if (ck && ck in cum) cum[ck]++;
    // Data estimate: skip=500KB, savedRes=120KB each
    if (k==='skip') cum.data += 500;
    if (k==='savedRes') cum.data += 120;
    // Time estimate: ~0.3s per accelerated resource
    if (k==='ps'||k==='cdn'||k==='gh'||k==='res') cum.time += 3; // deciseconds (3 = 0.3s)
    // Persist cum every 20 total increments
    const totalCum = cum.cdn + cum.gh + cum.skip + cum.res;
    if (totalCum % 20 === 0) saveCum();
    // Persist ses every 30 session events
    const totalSes = ses.pf + ses.cdn + ses.gh + ses.skip;
    if (totalSes % 30 === 0) saveSes();
}

function stRpt() {
    const t = ses.pf || 1;
    const sesData = (((ses.skip||0)*500_000) + ((ses.savedRes||0)*120_000)) / 1_000_000;
    const sesTime = Math.round((ses.ps + ses.cdn + ses.gh + (ses.res||0)) * 0.3);
    const cumData = (cum.data || 0) / 1000; // stored as KB, convert to MB
    return {
        // Session
        pf:ses.pf, ps:ses.ps, fail:ses.pf_fail,
        rate:((ses.ps/t)*100).toFixed(1),
        cdn:ses.cdn, gh:ses.gh, gh_m:ses.gh_m, sp:ses.sp,
        res:ses.res||0,
        skip:ses.skip||0, savedRes:ses.savedRes||0,
        lazy:ses.lazy||0,
        sesData:sesData.toFixed(1), sesTime:sesTime,
        up:Math.floor((Date.now()-ses.t0)/1000),
        // Cumulative
        cumCdn:cum.cdn, cumGh:cum.gh, cumSkip:cum.skip,
        cumRes:cum.res, cumPs:cum.ps||0, cumSavedRes:cum.savedRes||0,
        cumLazy:cum.lazy||0, cumSp:cum.sp||0, cumGhM:cum.gh_m||0,
        cumData:cumData.toFixed(1),
        cumTime:(cum.time/10)|0, cumSince:Math.floor((Date.now()-cum.t0)/1000),
    };
}

// ════════════════════════════════════════════
// 8. LazyOptimizer — Always-On Data Saver
// ════════════════════════════════════════════

/**
 * Apply lazy loading attributes to save data on non-critical resources.
 * These are passive optimizations — they don't prevent loading, just defer it.
 */
function lazyElement(el) {
    if (!el?.tagName) return false;
    const tag = el.tagName;
    let applied = false;

    if (tag === 'IMG' || tag === 'IFRAME') {
        // loading="lazy" — browser-native, only loads near viewport
        if (!el.hasAttribute('loading') || el.getAttribute('loading') === 'auto') {
            el.setAttribute('loading', 'lazy');
            applied = true;
        }
        // decoding="async" — non-blocking decode
        if (tag === 'IMG' && (!el.hasAttribute('decoding') || el.getAttribute('decoding') === 'auto')) {
            el.setAttribute('decoding', 'async');
        }
    }

    if ((tag === 'VIDEO' || tag === 'AUDIO') && (!el.hasAttribute('preload') || el.getAttribute('preload') === 'auto')) {
        el.setAttribute('preload', 'none');
        applied = true;
    }

    // Inject font-display:swap on @font-face stylesheets via a data hint
    // (Actual injection done via style observer, not per-element)

    if (tag === 'SCRIPT' && !el.hasAttribute('async') && !el.hasAttribute('defer') &&
        (!el.type || el.type === 'text/javascript') && el.hasAttribute('src')) {
        el.setAttribute('defer', '');
        applied = true;
    }

    return applied;
}

/** Recursively apply lazy loading to element and its children */
function lazyNode(node) {
    if (!node?.nodeType) return 0;
    if (node.nodeType === 1) { // Element node
        if (lazyElement(node)) return 1;
    }
    // Recurse into children
    let count = 0;
    if (node.children) {
        for (const child of node.children) {
            count += lazyNode(child);
        }
    }
    return count;
}

/** Scan existing DOM elements and apply lazy loading */
function scanAndLazy() {
    let count = 0;
    // Scan all resource elements
    const selectors = [
        'img[src]:not([loading="lazy"]):not([loading="lazy"])',
        'iframe[src]:not([loading="lazy"])',
        'video[src]:not([preload="none"])',
        'audio[src]:not([preload="none"])',
        'source[src]:not([preload="none"])'
    ];
    document.querySelectorAll(selectors.join(', ')).forEach(el => {
        if (lazyElement(el)) count++;
    });
    // Also scan scripts that could use defer
    document.querySelectorAll('script[src]:not([async]):not([defer])').forEach(el => {
        if (lazyElement(el)) count++;
    });
    return count;
}

/**
 * Accelerate a single resource node — rewrite via CDN/GH mirrors with smart-cache awareness.
 * Returns the number of URLs accelerated (0, 1, or 2 if both src/srcset are rewritten).
 */
function accelerateNode(el) {
    if (!el?.tagName) return 0;
    const smartOn = S.g('smart_on', true);
    const cdnOn = S.g('cdn_on', true);
    const ghMirror = S.g('gh_mirror', true);
    let count = 0;

    // Primary URL (src / href)
    const primaryUrl = getResourceUrl(el);
    if (primaryUrl) {
        const result = accelerateUrl(primaryUrl, {smart: smartOn, cdn: cdnOn, gh: ghMirror});
        if (result.url !== primaryUrl && !result.flags.saved) {
            setResourceUrl(el, result.url);
            if (result.flags.cdn) stInc('cdn');
            if (result.flags.gh) stInc('gh');
            if (result.flags.res || result.flags.cdn || result.flags.gh) stInc('res');
            count++;
        } else if (result.flags.saved) {
            stInc('savedRes');
        }
        registerFetch(result.url);
    }

    // srcset (responsive images) — count only once per element, not per variant
    if (el.tagName === 'IMG' && el.srcset) {
        let srcsetChanged = false;
        const parts = el.srcset.split(',').map(p => {
            const [url, ...desc] = p.trim().split(/\s+/);
            if (!url) return p;
            const result = accelerateUrl(url, {smart: smartOn, cdn: cdnOn, gh: ghMirror});
            registerFetch(result.url);
            if (result.url !== url && !result.flags.saved) {
                srcsetChanged = true;
                // Don't increment counters here — will do it once below if any change
                return result.url + (desc.length ? ' ' + desc.join(' ') : '');
            }
            if (result.flags.saved) stInc('savedRes');
            return p;
        });
        if (srcsetChanged) {
            el.srcset = parts.join(', ');
            count++; // Count as one accelerated resource (not per variant)
        } else {
            el.srcset = parts.join(', ');
        }
    }

    // Lazy-optimize the element after acceleration
    if (S.g('lazy_on', true) && lazyElement(el)) stInc('lazy');

    return count;
}

function scanExistingResources() {
    let count = 0;
    document.querySelectorAll('script[src], link[href], img[src], iframe[src], video[src], audio[src], source[src]').forEach(el => {
        const sub = accelerateNode(el);
        if (sub) count += sub;
    });
    return count;
}

function injectPreconnect() {
    if (!document.head || document.head._wraPC) return;
    document.head._wraPC = true;
    const df = document.createDocumentFragment();
    const domains = getEffectivePreconnectDomains();
    for (const o of domains) {
        const pc = document.createElement('link'); pc.rel='preconnect'; pc.href=o; pc.crossOrigin='anonymous'; df.appendChild(pc);
        const dp = document.createElement('link'); dp.rel='dns-prefetch'; dp.href=o; df.appendChild(dp);
    }
    document.head.appendChild(df);
}

// ── GitHub Hosts Auto-Update ──
// Fetches the latest GitHub subdomain list from hosts.gitcdn.top
// Falls back to hardcoded C.preDomains if fetch fails
const GH_HOSTS_URL = 'https://hosts.gitcdn.top/hosts.txt';
const GH_HOSTS_TTL = 86_400_000; // 24h

function getStoredGitHubDomains() {
    try {
        const raw = S.g('gh_domains', '');
        const ts = S.g('gh_domains_ts', 0);
        if (raw && ts && (Date.now() - ts) < GH_HOSTS_TTL) {
            return JSON.parse(raw);
        }
    } catch {}
    return null;
}

async function refreshGitHubDomains() {
    try {
        const resp = await fetch(GH_HOSTS_URL);
        if (!resp.ok) return null;
        const text = await resp.text();
        const domains = text.split('\n')
            .filter(l => l && !l.startsWith('#'))
            .map(l => {
                const parts = l.trim().split(/\s+/);
                return parts.length >= 2 ? 'https://' + parts[1] : null;
            })
            .filter(Boolean);
        if (domains.length > 5) {
            S.s('gh_domains', JSON.stringify(domains));
            S.s('gh_domains_ts', Date.now());
            return domains;
        }
    } catch {}
    return null;
}

function getEffectivePreconnectDomains() {
    const stored = getStoredGitHubDomains();
    if (stored && stored.length > 5) {
        // Merge stored GitHub domains with CDN mirrors (keep CDN mirrors from hardcoded list)
        const cdnMirrors = C.preDomains.filter(d => !d.includes('github.com') && !d.includes('githubusercontent.com') && !d.includes('fastly.net') && !d.includes('s3.amazonaws.com') && !d.includes('pipelines.actions'));
        return [...stored, ...cdnMirrors];
    }
    return C.preDomains;
}

// ════════════════════════════════════════════
// 10. Link Filter
// ════════════════════════════════════════════
function isOk(link) {
    if (!link?.href) return false;
    const u = link.href;
    if (!u.startsWith('http://')&&!u.startsWith('https://')) return false;
    const conn = navigator?.connection;
    if (conn?.saveData || conn?.effectiveType?.includes('2g')) return false;
    if (C.blockWords.test(u)) {
        if (!storeMirrors.some(m=>m.re.test(u))) return false;
    }
    if (link.dataset?.noInstant || link.dataset?.filename) return false;
    if (document.body?.dataset?.instantWhitelist && !link.dataset?.instant) return false;
    if (u.startsWith('http://') && location.protocol==='https:') return false;
    if (link.hash && link.pathname+link.search===location.pathname+location.search) return false;
    return true;
}

// ════════════════════════════════════════════
// 11. Speculation Rules
// ════════════════════════════════════════════
function applySpec() {
    const ok = 'supports' in HTMLScriptElement && HTMLScriptElement.supports?.('speculationrules');
    if (!ok || !S.g('spec_on',true)) return;
    const urls = [];
    for (const a of document.querySelectorAll('a[href]')) {
        if (isOk(a) && a.origin!==location.origin) urls.push(a.href);
        if (urls.length>=C.speculationLimit) break;
    }
    if (!urls.length) return;
    document.querySelector('script[type="speculationrules"]')?.remove();
    const s = document.createElement('script'); s.type='speculationrules';
    s.textContent=JSON.stringify({prerender:[{source:'document',where:{href:urls},eagerness:'moderate'}]});
    document.head?.appendChild(s);
    stInc('sp');
}

// ════════════════════════════════════════════
// 12. Core Prefetch (SmartCache-aware)
// ════════════════════════════════════════════
const done = new Set();

function prefetch(link) {
    const u = link.href;
    if (!u || done.has(u) || !navigator.onLine) return;

    stInc('pf');
    done.add(u);
    if (done.size > 3000) { const it = done.values(); for (let i = 0; i < 1000; i++) done.delete(it.next().value); }

    const smartOn = S.g('smart_on', true);
    const tier = smartOn ? cacheTier(u) : TIER.COLD;

    // WARM: recently visited — skip prefetch (DATA SAVED)
    if (tier === TIER.WARM) {
        stInc('skip');
        return;
    }

    // Record in cache
    registerFetch(u);

    // Prefetch the ORIGINAL URL — acceleration is only for resource tags (SCRIPT/LINK/IMG),
    // not for navigation links. This ensures browser cache hits on actual click and
    // preserves login sessions (no proxy redirect for page navigation).
    const pfEl = document.createElement('link'); pfEl.rel='prefetch'; pfEl.href=u; pfEl.crossOrigin='anonymous';
    pfEl.onload = () => { stInc('ps'); pfEl.remove(); };
    pfEl.onerror = () => { stInc('pf_fail'); pfEl.remove(); };
    document.head?.appendChild(pfEl);

    if (S.g('ind_on', false)) showBadge(u);
}

// ════════════════════════════════════════════
// 13. Floating Indicator
// ════════════════════════════════════════════
function showBadge(lastU) {
    let el = document.getElementById('wra-badge');
    if (!el) {
        el = document.createElement('div'); el.id = 'wra-badge';
        el.className = 'wra-badge';
        el.title = 'Web Rocket Accelerator — Click to view statistics / 点击查看统计';
        el.addEventListener('click', showStats);
        document.body?.appendChild(el);
    }
    // Show tier info: cold (accelerated) or warm (skipped)
    const isGH = /github|gh-proxy/i.test(lastU || '');
    const isCDN = /cdn|jsdelivr|staticfile|bootcdn|fastly/i.test(lastU || '');
    const skipCount = ses.skip || 0;
    el.innerHTML = '🚀 ' +
        (isGH ? '<b class="wra-badge-tag-gh">GitHub ⚡</b> ' : '') +
        (isCDN ? '<b class="wra-badge-tag-cdn">CDN 🌐</b> ' : '') +
        '<span class="wra-badge-text">Accelerated 已加速</span>' +
        (skipCount > 0 ? ' <span class="wra-badge-tag-skip">💾 ' + skipCount + ' 省流</span>' : '');
}

// ════════════════════════════════════════════
// 14. UI — Statistics Panel
// ════════════════════════════════════════════
function showStats() {
    try {
    const r = stRpt();
    const fmt = ss => { const h=Math.floor(ss/3600),m=Math.floor(ss%3600/60),s=ss%60; return h?h+'h '+m+'m '+s+'s':m?m+'m '+s+'s':s+'s'; };

    const c0 = (icon, en, zh, kids) =>
        `<div class="wra-card"><div class="wra-card-head"><span class="wra-card-icon">${icon}</span><div class="wra-card-titles"><div class="wra-card-en">${en}</div><div class="wra-card-zh">${zh}</div></div></div><div class="wra-card-body">${kids}</div></div>`;
    const rw = (en, zh, val, unit, cls='') =>
        `<div class="wra-r"><div class="wra-r-l"><span class="wra-r-en">${en}</span><span class="wra-r-zh">${zh}</span></div><span class="wra-r-v ${cls}">${val}${unit||''}</span></div>`;

    const sesCards = `<div class="wra-hdr"><span class="wra-hdr-en">📌 Current Page Session</span><span class="wra-hdr-zh">本页会话统计</span></div><div class="wra-cols">` +
        c0('⚡','Performance','预取性能',
            rw('Attempts','尝试次数',r.pf,'','c-n')+
            rw('Success','成功次数',r.ps,'','c-s')+
            rw('Failure','失败次数',r.fail,'','c-w')+
            rw('Success Rate','成功率',r.rate,'%','c-a')+
            rw('Uptime','运行时长',fmt(r.up),'','c-n'))+
        c0('🌍','Acceleration Source','加速来源',
            rw('Universal CDN','通用CDN镜像',r.cdn,'','c-p')+
            rw('GitHub Mirror','GitHub镜像代理',r.gh,'','c-l')+
            rw('Raw Proxy','原生反向代理',r.gh_m,'','c-n')+
            rw('Resource API','资源标签重写',r.res,'','c-s')+
            rw('Speculation','预测渲染规则',r.sp,'','c-w'))+
        c0('💾','Data Saver','智能省流',
            rw('Prefetch Skipped','跳过预取次数',r.skip,'','c-s')+
            rw('Rewrite Skipped','跳过重写次数',r.savedRes,'','c-s')+
            rw('Lazy Deployed','懒加载优化',r.lazy,'','c-l')+
            rw('Data Saved (est.)','本次节省流量(估算)',r.sesData,' MB','c-p')+
            rw('Time Saved (est.)','本次节省时间(估算)',fmt(r.sesTime),'','c-a'))+
    `</div>`;

    const cumCards = `<div class="wra-hdr mt-18"><span class="wra-hdr-en">🗄️ All-Time Cumulative</span><span class="wra-hdr-zh">历史累计统计</span></div><div class="wra-cols">` +
        c0('📊','Lifetime Acceleration','历史加速统计',
            rw('CDN Accelerated','CDN累计加速',r.cumCdn,'','c-p')+
            rw('GitHub Accelerated','GitHub累计加速',r.cumGh,'','c-l')+
            rw('Resources Rewritten','资源累计重写',r.cumRes,'','c-s')+
            rw('Prefetches Succeeded','预取累计成功',r.cumPs,'','c-n'))+
        c0('💾','Lifetime Data Saver','历史省流统计',
            rw('Prefetches Skipped','预取累计跳过',r.cumSkip,'','c-n')+
            rw('Rewrites Skipped','重写累计跳过',r.cumSavedRes,'','c-s')+
            rw('Lazy Deployments','懒加载累计',r.cumLazy,'','c-l')+
            rw('Speculations Fired','预渲染累计',r.cumSp,'','c-w'))+
        c0('💎','Lifetime Savings','历史节省统计',
            rw('Total Data Saved (est.)','累计节省流量(估算)',r.cumData,' MB','c-p')+
            rw('Total Time Saved (est.)','累计节省时间(估算)',fmt(r.cumTime),'','c-a')+
            rw('Tracking Since','统计起始时间',fmt(r.cumSince),'','c-n')+
            rw('Total Uptime','累计运行时长',fmt(r.up+r.cumSince),'','c-n'))+
    `</div>`;

    modal({title:'📈 Statistics 统计面板',html:sesCards + cumCards, ok:'Close 关闭',cancel:'Reset 重置'}).then(a=>{
        if(a==='cancel'){
            ses = freshSes(); cum = {cdn:0,gh:0,skip:0,res:0,data:0,time:0,t0:Date.now()};
            saveSes(); S.s('_cum','');
            S.s('_hist',''); urlHistory=new Map(); done.clear();
            document.getElementById('wra-badge')?.remove();
            modal({title:'✅ Reset Complete\n已重置',html:'<p class="tc">All statistics and smart cache cleared.\n全部统计数据与智能缓存已清除。</p>',ok:'OK 好的',noCancel:true});
        }
    });
    } catch(e) { console.warn('WRA showStats error:', e); }
}

// ════════════════════════════════════════════
// 15. UI — Settings Panel
// ════════════════════════════════════════════
function showSettings() {
    try {
    const sec = (icon, en, zh) =>
        `<div class="wra-sec"><span class="wra-sec-i">${icon}</span><div class="wra-sec-t"><div class="wra-sec-en">${en}</div><div class="wra-sec-zh">${zh}</div></div></div>`;

    const tgl = (id, en, zh, den, dzh, on) =>
        `<div class="wra-set">
            <div class="wra-set-i">
                <span class="wra-set-n"><span class="wra-set-en">${en}</span><span class="wra-set-zh">${zh}</span></span>
                <span class="wra-set-d"><span class="wra-set-den">${den}</span><span class="wra-set-dzh">${dzh}</span></span>
            </div>
            <div id="${id}" class="wra-tgl${on?' on':''}"></div></div>`;

    const h = `
        <div class="wra-banner">🚀 Web Rocket Accelerator<span class="wra-ban-zh">网页火箭加速器</span><span class="wra-ver">v${V}</span></div>

        ${sec('🎯','Prefetch Strategy','预取策略')}
        ${tgl('S_ind','Show Acceleration Indicator','显示加速指示器',
             'Display a floating badge for recent accelerations','显示最近加速的浮动角标',S.g('ind_on',false))}
        ${tgl('S_spec','Speculation Rules Prerender','原生预测渲染',
             'Chrome-native prerender for eligible cross-origin links','Chrome 原生 prerender 跨域链接',S.g('spec_on',true))}

        ${sec('🌍','CDN Acceleration','CDN 加速')}
        ${tgl('S_cdn','Universal CDN Mirror','通用CDN国内镜像',
             'Replace overseas CDN resources with domestic mirrors','将海外CDN资源替换为国内镜像',S.g('cdn_on',true))}
        ${tgl('S_ghm','GitHub Mirror Proxy','GitHub镜像代理',
             'Route GitHub traffic through jsDelivr and gh-proxy mirrors','通过jsDelivr和gh-proxy镜像路由GitHub流量',S.g('gh_mirror',true))}
        ${tgl('S_res','Resource Tag Interception','资源标签拦截',
             'Rewrite resource tag URLs to accelerated mirrors','将资源标签URL改写为加速镜像',S.g('res_on',true))}

        ${sec('💾','Smart Cache & Data Saver','智能缓存与省流')}
        ${tgl('S_smart','Adaptive Smart Cache','自适应智能缓存',
             'Tiered: cold→mirror, warm→skip, stale→refresh','分层策略：首次镜像加速，热缓存跳过省流，过期重新加速',S.g('smart_on',true))}
        ${tgl('S_lazy','Lazy Loading Optimizer','懒加载优化器',
             'Add loading="lazy", preload="none", defer non-critical scripts','添加懒加载属性，禁止预加载媒体，延迟非关键脚本',S.g('lazy_on',true))}

        <div class="wra-slide">
            <div class="wra-slide-t"><span class="wra-slide-en">Hover Delay</span><span class="wra-slide-zh">悬停延时</span></div>
            <div class="wra-slide-v"><span id="WRA_DV">${S.g('delay',65)}</span> ms</div>
            <input type="range" id="WRA_DLY" min="15" max="300" value="${S.g('delay',65)}">
            <div class="wra-slide-h"><span class="wra-slide-hen">Lower = faster, higher = saves data</span><span class="wra-slide-hzh">越低触发越快，越高越省流量</span></div>
        </div>`;

    modal({title:'⚙️ Accelerator Settings\n加速器设置',html:h,ok:'Close 关闭',noCancel:true});
    setTimeout(bindSettings,60);
    } catch(e) { console.warn('WRA showSettings error:', e); }
}

function bindSettings() {
    const m = {S_ind:'ind_on', S_spec:'spec_on', S_cdn:'cdn_on', S_ghm:'gh_mirror', S_res:'res_on', S_smart:'smart_on', S_lazy:'lazy_on'};
    document.querySelectorAll('.wra-tgl').forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('on');
            const k = m[el.id];
            if (k) S.s(k, el.classList.contains('on'));
        });
    });
    const s = document.getElementById('WRA_DLY'), l = document.getElementById('WRA_DV');
    s?.addEventListener('input', e => {
        l.textContent = e.target.value;
        S.s('delay', +e.target.value);
    });
}

// ════════════════════════════════════════════
// 16. Native Modal Dialog
// ════════════════════════════════════════════
function modal({title, html, ok='Confirm 确定', cancel, noCancel, footer, ms}={}) {
    return new Promise(res => {
        try {
        const ov = document.createElement('div');
        ov.className = 'wra-overlay';

        const md = document.createElement('div');
        md.className = 'wra-modal';

        // Inline style fallback — ensures modal is visible even if GM_addStyle was blocked
        // Uses !important to override host page CSS (critical for CSP-strict sites like bing.com desktop mode)
        md.style.cssText = 'background:linear-gradient(160deg,#f7f3ec,#fdfaf5) !important;border-radius:12px !important;max-width:490px !important;width:92% !important;max-height:84vh !important;overflow-y:auto !important;box-shadow:0 8px 28px rgba(70,50,30,.08) !important;border:1px solid #e3dbcf !important;color:#3d352c !important;padding:20px 24px !important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif !important;position:relative !important;opacity:1 !important';
        ov.style.cssText = 'position:fixed !important;inset:0 !important;background:rgba(70,50,30,.32) !important;backdrop-filter:blur(5px) !important;-webkit-backdrop-filter:blur(5px) !important;display:flex !important;align-items:center !important;justify-content:center !important;z-index:2147483647 !important;opacity:1 !important';

        md.innerHTML = `<h3 class="wra-modal-title">${(title||'').replace(/\n/g,'<br>')}</h3>
<div class="wra-modal-body">${html||''}</div>
${footer ? `<div class="wra-modal-footer">${footer}</div>` : ''}
<div class="wra-modal-actions">
    ${noCancel ? '' : `<button data-a="cancel" class="wra-btn-cancel">${cancel||'Cancel 取消'}</button>`}
    <button data-a="ok" class="wra-btn-ok">${ok}</button>
</div>`;

        // Append to documentElement as fallback — some sites (bing desktop mode) have body issues
        const target = document.body || document.documentElement;
        if (!target) { res('dismiss'); return; }
        target.appendChild(ov);
        ov.appendChild(md);

        const cls = a => { try { ov.remove(); } catch {} res(a); };
        md.querySelector('[data-a="ok"]')?.addEventListener('click', () => cls('ok'));
        md.querySelector('[data-a="cancel"]')?.addEventListener('click', () => cls('cancel'));
        ov.addEventListener('click', e => { if (e.target === ov) cls('dismiss'); });
        if (ms) setTimeout(() => cls('timeout'), ms);
        } catch(e) { console.warn('WRA modal error:', e); res('dismiss'); }
    });
}

// ════════════════════════════════════════════
// 17. CSS — Warm Light Eye-Friendly Theme
// ════════════════════════════════════════════
function injectCSS() {
    if (document.getElementById('wra-css')) return;
    GM_addStyle(`

/* ===== Variables ===== */
:root {
    --bg:                  #faf7f2;
    --bg-card:             #fefcf8;
    --bg-head:             #f5f0e8;
    --bd:                  #e3dbcf;
    --bd-lt:               #eee8db;
    --tx:                  #3d352c;
    --t2:                  #7a6f60;
    --t3:                  #a89984;
    --c-p:                 #1a8a7d;
    --c-s:                 #3d7e4f;
    --c-w:                 #b8782c;
    --c-l:                 #665d99;
    --c-a:                 #c45a3e;
    --c-n:                 #55758c;
    --g-hdr:               linear-gradient(135deg,#3daa9c,#5ec4b6);
    --g-btn:               linear-gradient(135deg,#2d9d90,#4ab0a2);
    --rad:                 12px;
    --rad-sm:              8px;
    --sh:                  0 8px 28px rgba(70,50,30,.08),0 1px 4px rgba(70,50,30,.04);
    --sh-h:                0 10px 34px rgba(70,50,30,.12),0 2px 6px rgba(70,50,30,.06);
    --font:                -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif;
    --mono:                "JetBrains Mono","SF Mono","Cascadia Code",monospace;
}

/* ===== Overlay ===== */
.wra-overlay {
    position:fixed !important;inset:0 !important;background:rgba(70,50,30,.32) !important;
    backdrop-filter:blur(5px) !important;-webkit-backdrop-filter:blur(5px) !important;
    display:flex !important;align-items:center !important;justify-content:center !important;
    z-index:2147483647 !important;animation:wraF .18s ease !important;
}
@keyframes wraF{from{opacity:0}to{opacity:1}}

/* ===== Modal ===== */
.wra-modal {
    background:linear-gradient(160deg,#f7f3ec,#fdfaf5) !important;
    border-radius:var(--rad) !important;max-width:490px !important;width:92% !important;
    max-height:84vh !important;overflow-y:auto !important;
    box-shadow:var(--sh) !important;border:1px solid var(--bd) !important;
    color:var(--tx) !important;font-family:var(--font) !important;
    padding:20px 24px !important;
    animation:wraS .22s cubic-bezier(.16,1,.3,1) !important;
}
@keyframes wraS{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}

.wra-modal-title {
    text-align:center !important;margin:0 0 16px !important;
    font-size:16px !important;font-weight:700 !important;color:var(--tx) !important;
    line-height:1.5 !important;letter-spacing:.01em !important;
}
.wra-modal-body{margin-bottom:4px !important}
.wra-modal-footer{margin-top:10px !important;padding-top:10px !important;border-top:1px solid var(--bd-lt) !important;font-size:11px !important;color:var(--t2) !important}
.wra-modal-actions{display:flex !important;gap:8px !important;justify-content:flex-end !important;margin-top:14px !important}

.wra-btn-cancel {
    padding:8px 16px !important;border:1px solid var(--bd) !important;border-radius:var(--rad-sm) !important;
    cursor:pointer !important;background:var(--bg-card) !important;color:var(--t2) !important;
    font-size:12px !important;font-weight:500 !important;font-family:var(--font) !important;transition:all .18s !important;
}
.wra-btn-cancel:hover{background:#efe8dc !important;border-color:#d4c8b4 !important}
.wra-btn-ok {
    padding:8px 20px !important;border:none !important;border-radius:var(--rad-sm) !important;
    cursor:pointer !important;background:var(--g-btn) !important;color:#fff !important;
    font-size:12px !important;font-weight:600 !important;font-family:var(--font) !important;
    box-shadow:0 2px 10px rgba(26,138,125,.22) !important;transition:all .18s !important;
}
.wra-btn-ok:hover{box-shadow:0 4px 14px rgba(26,138,125,.32) !important;transform:translateY(-1px) !important}

/* ===== 2-Column Grid ===== */
.wra-cols{display:grid !important;grid-template-columns:1fr 1fr !important;gap:8px !important}
/* ===== Section Headers ===== */
.wra-hdr{display:flex !important;justify-content:space-between !important;align-items:baseline !important;padding:6px 0 2px 0 !important;margin-bottom:4px !important;border-bottom:1px solid var(--bd-lt) !important}
.wra-hdr-en{font-size:13px !important;font-weight:600 !important;color:var(--c-a) !important}
.wra-hdr-zh{font-size:11px !important;color:var(--t3) !important;text-align:right !important}
.mt-18{margin-top:18px !important}

/* ===== Cards ===== */
.wra-card {
    background:var(--bg-card) !important;border:1px solid var(--bd-lt) !important;
    border-radius:var(--rad-sm) !important;margin-bottom:10px !important;overflow:hidden !important;
    box-shadow:0 1px 3px rgba(70,50,30,.03) !important;
}
.wra-card-head {
    display:flex !important;align-items:center !important;gap:8px !important;padding:8px 12px !important;
    background:linear-gradient(135deg,#f6f1ea,#fefcf8) !important;
    border-bottom:1px solid var(--bd-lt) !important;
}
.wra-card-icon{font-size:15px !important}
.wra-card-titles{display:flex !important;flex-direction:column !important;line-height:1.35 !important}
.wra-card-en{font-size:12px !important;font-weight:700 !important;color:var(--tx) !important}
.wra-card-zh{font-size:10px !important;color:var(--t3) !important}
.wra-card-body{padding:6px 12px 8px !important}

/* ===== Stat Rows ===== */
.wra-r{display:flex !important;justify-content:space-between !important;align-items:flex-start !important;padding:4px 0 !important}
.wra-r-l{display:flex !important;flex-direction:column !important;line-height:1.45 !important}
.wra-r-en{font-size:11px !important;color:var(--t2) !important;font-family:var(--font) !important}
.wra-r-zh{font-size:10px !important;color:var(--t3) !important}
.wra-r-v{font-size:14px !important;font-weight:700 !important;font-family:var(--mono) !important;text-align:right !important;align-self:center !important}

/* ===== Colors ===== */
.c-p{color:var(--c-p) !important}.c-s{color:var(--c-s) !important}.c-w{color:var(--c-w) !important}
.c-l{color:var(--c-l) !important}.c-a{color:var(--c-a) !important}.c-n{color:var(--c-n) !important}
.tc{text-align:center !important;color:var(--t2) !important;padding:6px 0 !important;font-size:13px !important;line-height:1.6 !important}

/* ===== Settings ===== */
.wra-banner {
    background:var(--g-hdr) !important;color:#fff !important;padding:10px 14px !important;
    border-radius:var(--rad-sm) !important;margin-bottom:12px !important;
    font-size:13px !important;font-weight:700 !important;text-align:center !important;
    box-shadow:0 3px 12px rgba(26,138,125,.18) !important;
    display:flex !important;flex-direction:column !important;align-items:center !important;gap:2px !important;
    position:relative !important;
}
.wra-ban-zh{font-size:11px !important;font-weight:500 !important;opacity:.9 !important}
.wra-ver {
    position:absolute !important;top:8px !important;right:12px !important;
    background:rgba(255,255,255,.22) !important;padding:1px 8px !important;
    border-radius:10px !important;font-size:10px !important;font-weight:500 !important;
}
.wra-sec{display:flex !important;align-items:center !important;gap:8px !important;padding:10px 0 6px !important;margin-top:2px !important;border-bottom:1px solid var(--bd-lt) !important}
.wra-sec-i{font-size:14px !important}
.wra-sec-t{display:flex !important;flex-direction:column !important;line-height:1.35 !important}
.wra-sec-en{font-size:11px !important;font-weight:700 !important;color:var(--c-p) !important;text-transform:uppercase !important;letter-spacing:.04em !important}
.wra-sec-zh{font-size:10px !important;color:var(--t3) !important}

.wra-set{display:flex !important;align-items:center !important;justify-content:space-between !important;padding:10px 0 !important;border-bottom:1px solid var(--bd-lt) !important;gap:10px !important}
.wra-set-i{flex:1 !important;min-width:0 !important;display:flex !important;flex-direction:column !important;gap:2px !important}
.wra-set-n{display:flex !important;flex-direction:column !important;line-height:1.4 !important}
.wra-set-en{font-size:12px !important;font-weight:600 !important;color:var(--tx) !important}
.wra-set-zh{font-size:10px !important;color:var(--t3) !important}
.wra-set-d{display:flex !important;flex-direction:column !important;line-height:1.4 !important}
.wra-set-den{font-size:10px !important;color:var(--t3) !important}
.wra-set-dzh{font-size:10px !important;color:var(--t3) !important;font-style:italic !important}

/* ===== Toggle ===== */
.wra-tgl{position:relative !important;width:42px !important;height:24px !important;background:#d4ccc0 !important;border-radius:12px !important;cursor:pointer !important;transition:all .25s cubic-bezier(.4,0,.2,1) !important;flex-shrink:0 !important}
.wra-tgl.on{background:var(--c-p) !important}
.wra-tgl::after{content:'' !important;position:absolute !important;top:2px !important;left:2px !important;width:20px !important;height:20px !important;background:#fff !important;border-radius:50% !important;transition:transform .25s cubic-bezier(.4,0,.2,1) !important;box-shadow:0 1px 2px rgba(70,50,30,.12) !important}
.wra-tgl.on::after{transform:translateX(18px) !important}

/* ===== Slider ===== */
.wra-slide{padding:12px 0 4px !important;margin-top:6px !important;border-top:1px solid var(--bd-lt) !important}
.wra-slide-t{display:flex !important;flex-direction:column !important;align-items:center !important;gap:1px !important;line-height:1.4 !important}
.wra-slide-en{font-size:11px !important;font-weight:600 !important;color:var(--t2) !important}
.wra-slide-zh{font-size:10px !important;color:var(--t3) !important}
.wra-slide-v{text-align:center !important;font-size:20px !important;font-weight:700 !important;color:var(--c-p) !important;font-family:var(--mono) !important;margin:4px 0 !important}
.wra-slide-h{display:flex !important;flex-direction:column !important;align-items:center !important;gap:1px !important;margin-top:4px !important;line-height:1.4 !important}
.wra-slide-hen{font-size:9px !important;color:var(--t3) !important}
.wra-slide-hzh{font-size:9px !important;color:var(--t3) !important}
#WRA_DLY{width:100% !important;height:5px !important;-webkit-appearance:none !important;appearance:none !important;background:linear-gradient(90deg,var(--c-p),var(--c-a)) !important;border-radius:3px !important;outline:none !important;margin-top:4px !important;cursor:pointer !important}
#WRA_DLY::-webkit-slider-thumb{-webkit-appearance:none !important;appearance:none !important;width:18px !important;height:18px !important;background:#fff !important;border-radius:50% !important;cursor:pointer !important;border:2px solid var(--c-p) !important;box-shadow:0 2px 6px rgba(26,138,125,.2) !important}

/* ===== Badge ===== */
.wra-badge {
    position:fixed !important;bottom:20px !important;right:20px !important;
    background:rgba(254,252,248,.94) !important;color:var(--tx) !important;
    padding:8px 14px !important;border-radius:20px !important;font-size:11px !important;
    z-index:2147483646 !important;cursor:pointer !important;
    backdrop-filter:blur(12px) !important;-webkit-backdrop-filter:blur(12px) !important;
    border:1px solid var(--bd) !important;
    box-shadow:0 3px 16px rgba(70,50,30,.08) !important;
    font-family:var(--font) !important;transition:all .22s !important;
    display:flex !important;align-items:center !important;gap:5px !important;
}
.wra-badge:hover{transform:translateY(-2px);border-color:var(--c-p);box-shadow:var(--sh-h)}
.wra-badge-tag-gh{color:var(--c-l);font-size:10px}
.wra-badge-tag-cdn{color:var(--c-p);font-size:10px}
.wra-badge-tag-skip{color:var(--c-s);font-size:10px}
.wra-badge-text{color:var(--t2)}

/* ===== Entry Button ===== */
.wra-entry {
    position:fixed !important;bottom:76px !important;right:20px !important;width:42px !important;height:42px !important;
    background:var(--g-btn) !important;color:#fff !important;border-radius:50% !important;
    display:flex !important;align-items:center !important;justify-content:center !important;
    font-size:18px !important;cursor:pointer !important;z-index:2147483646 !important;
    box-shadow:0 3px 14px rgba(26,138,125,.28) !important;
    transition:all .22s !important;border:none !important;user-select:none !important;
    animation:wraS .35s cubic-bezier(.16,1,.3,1) !important;
}
.wra-entry:hover{transform:scale(1.12) !important;box-shadow:0 5px 20px rgba(26,138,125,.38) !important}
    `);
}

// ════════════════════════════════════════════
// 18. Bootstrap
// ════════════════════════════════════════════

function setupResourceObserver() {
    if (typeof MutationObserver === 'undefined') return;
    new MutationObserver(mutations => {
        try {
        const smartOn = S.g('smart_on', true);
        const lazyOn = S.g('lazy_on', true);
        const resOn = S.g('res_on', true);
        if (!resOn && !lazyOn) return;

        for (const m of mutations) {
            for (const node of m.addedNodes) {
                if (node.nodeType !== 1) continue;
                if (resOn) accelerateNode(node);
                if (lazyOn) {
                    const c = lazyNode(node);
                    if (c > 0) { for (let li = 0; li < c; li++) stInc('lazy'); }
                }
            }
        }
        } catch(e) { /* silent — DOM observer must never break */ }
    }).observe(document.documentElement, {childList: true, subtree: true});
}

setupResourceObserver();

// Inject preconnect/dns-prefetch at module level — before DOMContentLoaded
// This warms up TCP+TLS for all GitHub/CDN domains as early as possible
(function earlyPreconnect() {
    try {
        const hd = document.head || document.documentElement;
        if (!hd) { document.addEventListener('DOMContentLoaded', injectPreconnect, {once:true}); return; }
        injectPreconnect();
    } catch {}
})();

function init() {
    try {
    const defaults = {
        ind_on:false,
        cdn_on:true, gh_mirror:true, spec_on:true, res_on:true,
        smart_on:true, lazy_on:true,
        delay:65
    };
    Object.entries(defaults).forEach(([k,v]) => {
        if (S.g(k) === void 0) S.s(k, v);
    });

    // ⚠️ Register menu commands FIRST — before any DOM ops
    // Ensures user can always access stats/settings even if scan fails
    GM_registerMenuCommand('🚀 Statistics 加速统计', showStats);
    GM_registerMenuCommand('⚙️ Settings 加速器设置', showSettings);
    GM_registerMenuCommand('🔄 Reset 重置统计', () => {
        ses = freshSes(); cum = {cdn:0,gh:0,skip:0,res:0,data:0,time:0,t0:Date.now()};
        saveSes(); S.s('_cum','');
        S.s('_hist',''); urlHistory = new Map(); done.clear();
        document.getElementById('wra-badge')?.remove();
    });

    // Background refresh GitHub hosts (non-blocking)
    // If cache is stale, fetch new list in background — next page load picks it up
    if (!getStoredGitHubDomains()) {
        refreshGitHubDomains().catch(() => {});
    }

    // Create entry button only if user opted in via settings
    if (S.g('ind_on', false)) {
        tryCreateEntry();
    }

    // Retry entry button creation if body wasn't ready — handles complex pages (bing desktop mode)
    function tryCreateEntry(retries) {
        if (retries === void 0) retries = 0;
        if (retries > 5) return;
        try {
            if (!document.body) {
                if (retries < 3) requestAnimationFrame(() => tryCreateEntry(retries + 1));
                else setTimeout(() => tryCreateEntry(retries + 1), 200 * (retries - 1));
                return;
            }
            let entryBtn = document.getElementById('wra-entry');
            if (!entryBtn) {
                entryBtn = document.createElement('div');
                entryBtn.id = 'wra-entry';
                entryBtn.className = 'wra-entry';
                entryBtn.title = 'Web Rocket Accelerator — Click for options / 点击打开菜单';
                entryBtn.textContent = '🚀';
                entryBtn.addEventListener('click', () => {
                    modal({
                        title: '🚀 Web Rocket Accelerator\n网页火箭加速器',
                        html: `<p class="tc" style="margin:8px 0 4px">v${V} — <a href="#" id="wra-entry-stats" style="color:var(--c-p);text-decoration:none;font-weight:600">Statistics 统计</a> · <a href="#" id="wra-entry-settings" style="color:var(--c-l);text-decoration:none;font-weight:600">Settings 设置</a></p>`,
                        ok: 'Close 关闭',
                        noCancel: true,
                        footer: `<span style="color:var(--t3);font-size:10px">Click menu command or badge to reopen · 通过菜单或徽章重新打开</span>`
                    });
                    setTimeout(() => {
                        document.getElementById('wra-entry-stats')?.addEventListener('click', e => { e.preventDefault(); showStats(); });
                        document.getElementById('wra-entry-settings')?.addEventListener('click', e => { e.preventDefault(); showSettings(); });
                    }, 50);
                });
                document.body.appendChild(entryBtn);
            }
        } catch(e) { console.warn('WRA entry button error:', e); }
    }

    injectCSS();
    loadHistory(); // warm up cache index

    // Isolated DOM scans — failure here won't block menu or events
    try {
        if (S.g('res_on', true)) {
            const resc = scanExistingResources();
            if (resc > 0) saveSes();
        }
    } catch(e) { console.warn('WRA scanExistingResources error:', e); }

    try {
        if (S.g('lazy_on', true)) {
            const lazyc = scanAndLazy();
            if (lazyc > 0) { for (let li = 0; li < lazyc; li++) stInc('lazy'); saveSes(); }
        }
    } catch(e) { console.warn('WRA scanAndLazy error:', e); }

    // ── Event listeners (viewport-independent) ──
    const opt = {capture:true, passive:true};
    let lastTouch=0, hoverTmr=null;

    document.addEventListener('touchstart', e => {
        lastTouch = performance.now();
        const l = e.target?.closest?.('a');
        if (l && isOk(l)) prefetch(l);
    }, opt);

    document.addEventListener('mousedown', e => {
        const l = e.target?.closest?.('a');
        if (l && isOk(l)) prefetch(l);
    }, opt);

    document.addEventListener('mouseover', e => {
        if (performance.now() - lastTouch < C.touchCooldown) return;
        const l = e.target?.closest?.('a');
        if (!l || !isOk(l)) return;
        clearTimeout(hoverTmr);
        l.addEventListener('mouseout', () => { clearTimeout(hoverTmr); hoverTmr = null; }, {once:true, passive:true});
        hoverTmr = setTimeout(() => { prefetch(l); hoverTmr = null; }, S.g('delay', 65));
    }, opt);

    // ── IntersectionObserver (viewport-aware prefetch) ──
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(es => {
            for (const e of es) {
                if (e.isIntersecting) { io.unobserve(e.target); prefetch(e.target); }
            }
        }, {rootMargin: C.viewMargin});

        for (const a of document.querySelectorAll('a[href]')) {
            if (isOk(a)) io.observe(a);
        }

        // Watch for dynamically added links — safe fallback if body not ready
        try {
            const target = document.body || document.documentElement;
            new MutationObserver(ms => {
                for (const m of ms) {
                    for (const n of m.addedNodes) {
                        if (n.nodeType !== 1) continue;
                        if (n.tagName === 'A' && isOk(n)) io.observe(n);
                        n.querySelectorAll?.('a')?.forEach(a => { if (isOk(a)) io.observe(a); });
                    }
                }
            }).observe(target, {childList:true, subtree:true});
        } catch {}
    }

    const idle = fn => ('requestIdleCallback' in window ? requestIdleCallback(fn, {timeout:3000}) : setTimeout(fn, 200));
    idle(() => {
        for (const a of document.querySelectorAll('a[href]')) {
            const r = a.getBoundingClientRect();
            if (r.top < window.innerHeight && r.bottom > 0 && isOk(a)) prefetch(a);
        }
    });
    idle(applySpec);
    } catch(e) { console.warn('WRA init error:', e); }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, {once: true});
} else {
    init();
}

})();