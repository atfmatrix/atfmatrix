import { h as e, I as n, w as r } from "./index-BkkCC0vW.js";
import "./matrix-05hIIFCf.js";
async function l(a, i) {
  await e("plugin:clipboard-manager|write_text", { label: i?.label, text: a });
}
async function g() {
  return await e("plugin:clipboard-manager|read_text");
}
async function m(a) {
  await e("plugin:clipboard-manager|write_image", { image: r(a) });
}
async function o() {
  return await e("plugin:clipboard-manager|read_image").then((a) => new n(a));
}
async function p(a, i) {
  await e("plugin:clipboard-manager|write_html", { html: a, altText: i });
}
async function u() {
  await e("plugin:clipboard-manager|clear");
}
export {
  u as clear,
  o as readImage,
  g as readText,
  p as writeHtml,
  m as writeImage,
  l as writeText
};
