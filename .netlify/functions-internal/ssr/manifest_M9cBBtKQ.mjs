import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_ScqZITa5.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../../../opt/homebrew/lib/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){const n=document.querySelector(\".cloud-sect\"),t=document.querySelector(\".mountain-container\");function e(){const s=n.getBoundingClientRect().top+window.scrollY-window.innerHeight/2;window.scrollY>s?(t.classList.add(\"fade-in\"),t.classList.add(\"move-up\")):(t.classList.remove(\"fade-in\"),t.classList.remove(\"move-up\"))}window.addEventListener(\"scroll\",e),window.addEventListener(\"resize\",e),e()});function g(n,t,e){let o;return function(){const s=this,r=arguments,a=function(){o=null,e||n.apply(s,r)},u=e&&!o;clearTimeout(o),o=setTimeout(a,t),u&&n.apply(s,r)}}const i=document.getElementById(\"svgPathLeft\"),c=i.getTotalLength();i.style.strokeDasharray=c;i.style.strokeDashoffset=c;const d=document.getElementById(\"svgPathRight\"),l=d.getTotalLength();d.style.strokeDasharray=l;d.style.strokeDashoffset=l;window.addEventListener(\"scroll\",g(function(){const n=window.scrollY/(document.documentElement.scrollHeight-document.documentElement.clientHeight),t=c*n*7;i.style.strokeDashoffset=c-t;const e=l*n*7;d.style.strokeDashoffset=l-e},10));\n"}],"styles":[{"type":"external","src":"/_astro/index.WvEcVFvc.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_Igl_lyT_.mjs","\u0000@astrojs-manifest":"manifest_M9cBBtKQ.mjs","\u0000@astro-page:../../../../opt/homebrew/lib/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_-KOZcWXa.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_I2V8V0y4.mjs","/astro/hoisted.js?q=0":"_astro/hoisted._6XLcpO4.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/circleMenu.v5dQQHeR.png","/_astro/index.WvEcVFvc.css","/favicon.svg","/headimg.png","/assets/css/fonts.css","/assets/fonts/Futura.woff2","/assets/fonts/MyriadPro-Regular.otf","/assets/img/bottomSection.svg","/assets/img/circleMenu.png","/assets/img/circleMenu.webp","/assets/img/clouds.svg","/assets/img/counterCircle.svg","/assets/img/figureSvg.svg","/assets/img/homeTopSvg.svg","/assets/img/leftPlant.svg","/assets/img/menuCircle.svg","/assets/img/monkey.svg","/assets/img/mountain.svg","/assets/img/mountainBackground.svg","/assets/img/mountainFront.png","/assets/img/mountainSide.svg","/assets/img/mountainTop.svg","/assets/img/preFooterLines.svg","/assets/img/rightPlant.svg","/assets/img/splitterImage.svg","/assets/img/teamLine.svg","/assets/img/teamLogo.png","/assets/img/teamLogo.svg","/assets/img/textAnimationTop.json","/assets/img/topLinesNew.svg","/assets/img/topLinesPath.svg","/assets/img/1x/Asset 1.png"]});

export { manifest };
