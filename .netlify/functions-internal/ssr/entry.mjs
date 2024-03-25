import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_M9cBBtKQ.mjs';

const _page0  = () => import('./chunks/generic_-KOZcWXa.mjs');
const _page1  = () => import('./chunks/index_I2V8V0y4.mjs');const pageMap = new Map([["../../../../opt/homebrew/lib/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"7ffb35fe-c35a-48ec-ac80-39c454c93fad"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
