import { h as e } from "./index-BkkCC0vW.js";
import "./matrix-05hIIFCf.js";
async function n(a, i) {
  await e("plugin:sharekit|share_text", { text: a, ...i });
}
async function s(a, i) {
  await e("plugin:sharekit|share_file", { url: a, ...i });
}
export {
  s as shareFile,
  n as shareText
};
