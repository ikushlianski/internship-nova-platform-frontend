const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './Toast.stories-BvZput4V.js',
      './index-uubelm5h.js',
      './extends-CF3RwP-h.js',
      './entry-preview-Dvjl8iik.js',
      './react-18-CpPJSmEb.js',
      './entry-preview-docs-QYK2EIZI.js',
      './isArray-Bj2hUI6y.js',
      './index-DrFu-skq.js',
      './preview-BJPLiuSt.js',
      './index-D-8MO0q_.js',
      './preview-9hFJSo5S.js',
      './preview-DB9FwMii.js',
    ]),
) => i.map((i) => d[i]);
import '../sb-preview/runtime.js';
(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) l(e);
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === 'childList')
        for (const o of r.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && l(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(e) {
    const r = {};
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : e.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    );
  }
  function l(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = c(e);
    fetch(e.href, r);
  }
})();
const f = 'modulepreload',
  R = function (t, i) {
    return new URL(t, i).href;
  },
  p = {},
  _ = function (i, c, l) {
    let e = Promise.resolve();
    if (c && c.length > 0) {
      const r = document.getElementsByTagName('link'),
        o = document.querySelector('meta[property=csp-nonce]'),
        E = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute('nonce'));
      e = Promise.all(
        c.map((s) => {
          if (((s = R(s, l)), s in p)) return;
          p[s] = !0;
          const a = s.endsWith('.css'),
            d = a ? '[rel="stylesheet"]' : '';
          if (l)
            for (let u = r.length - 1; u >= 0; u--) {
              const O = r[u];
              if (O.href === s && (!a || O.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${s}"]${d}`)) return;
          const n = document.createElement('link');
          if (
            ((n.rel = a ? 'stylesheet' : f),
            a || ((n.as = 'script'), (n.crossOrigin = '')),
            (n.href = s),
            E && n.setAttribute('nonce', E),
            document.head.appendChild(n),
            a)
          )
            return new Promise((u, O) => {
              n.addEventListener('load', u),
                n.addEventListener('error', () => O(new Error(`Unable to preload CSS for ${s}`)));
            });
        }),
      );
    }
    return e
      .then(() => i())
      .catch((r) => {
        const o = new Event('vite:preloadError', { cancelable: !0 });
        if (((o.payload = r), window.dispatchEvent(o), !o.defaultPrevented)) throw r;
      });
  },
  { createBrowserChannel: T } = __STORYBOOK_MODULE_CHANNELS__,
  { addons: L } = __STORYBOOK_MODULE_PREVIEW_API__,
  m = T({ page: 'preview' });
L.setChannel(m);
window.__STORYBOOK_ADDONS_CHANNEL__ = m;
window.CONFIG_TYPE === 'DEVELOPMENT' && (window.__STORYBOOK_SERVER_CHANNEL__ = m);
const S = {
  './src/stories/Toast.stories.tsx': async () =>
    _(() => import('./Toast.stories-BvZput4V.js'), __vite__mapDeps([0, 1, 2]), import.meta.url),
};
async function P(t) {
  return S[t]();
}
const { composeConfigs: y, PreviewWeb: I, ClientApi: w } = __STORYBOOK_MODULE_PREVIEW_API__,
  V = async (t = []) => {
    const i = await Promise.all([
      t.at(0) ??
        _(() => import('./entry-preview-Dvjl8iik.js'), __vite__mapDeps([3, 1, 4]), import.meta.url),
      t.at(1) ??
        _(
          () => import('./entry-preview-docs-QYK2EIZI.js'),
          __vite__mapDeps([5, 6, 1, 7]),
          import.meta.url,
        ),
      t.at(2) ?? _(() => import('./preview-BJPLiuSt.js'), __vite__mapDeps([8, 9]), import.meta.url),
      t.at(3) ?? _(() => import('./preview--1ockvkq.js'), [], import.meta.url),
      t.at(4) ?? _(() => import('./preview-Ct5NkTJf.js'), [], import.meta.url),
      t.at(5) ??
        _(() => import('./preview-9hFJSo5S.js'), __vite__mapDeps([10, 7]), import.meta.url),
      t.at(6) ?? _(() => import('./preview-BnWGZYux.js'), [], import.meta.url),
      t.at(7) ?? _(() => import('./preview-Cdum89jS.js'), [], import.meta.url),
      t.at(8) ??
        _(() => import('./preview-DB9FwMii.js'), __vite__mapDeps([11, 7]), import.meta.url),
      t.at(9) ?? _(() => import('./preview-BpcF_O6y.js'), [], import.meta.url),
      t.at(10) ?? _(() => import('./preview-gLmJTRpJ.js'), [], import.meta.url),
      t.at(11) ?? _(() => import('./preview-CIRcjyVj.js'), [], import.meta.url),
    ]);
    return y(i);
  };
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new I(P, V);
window.__STORYBOOK_STORY_STORE__ =
  window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export { _ };
