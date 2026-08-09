import { h as n, l as r } from "./index-BkkCC0vW.js";
import "./matrix-05hIIFCf.js";
async function u() {
  return await n("plugin:deep-link|get_current");
}
async function s(e) {
  return await n("plugin:deep-link|register", { protocol: e });
}
async function l(e) {
  return await n("plugin:deep-link|unregister", { protocol: e });
}
async function p(e) {
  return await n("plugin:deep-link|is_registered", { protocol: e });
}
async function g(e) {
  return await r("deep-link://new-url", (i) => {
    e(i.payload);
  });
}
export {
  u as getCurrent,
  p as isRegistered,
  g as onOpenUrl,
  s as register,
  l as unregister
};
