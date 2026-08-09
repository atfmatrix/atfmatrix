import { h as n, v as o } from "./index-BkkCC0vW.js";
import "./matrix-05hIIFCf.js";
var c;
(function(i) {
  i.Year = "year", i.Month = "month", i.TwoWeeks = "twoWeeks", i.Week = "week", i.Day = "day", i.Hour = "hour", i.Minute = "minute", i.Second = "second";
})(c || (c = {}));
class l {
  static at(t, a = false, e = false) {
    return { at: { date: t, repeating: a, allowWhileIdle: e }, interval: void 0, every: void 0 };
  }
  static interval(t, a = false) {
    return { at: void 0, interval: { interval: t, allowWhileIdle: a }, every: void 0 };
  }
  static every(t, a, e = false) {
    return { at: void 0, interval: void 0, every: { interval: t, count: a, allowWhileIdle: e } };
  }
}
var s;
(function(i) {
  i[i.None = 0] = "None", i[i.Min = 1] = "Min", i[i.Low = 2] = "Low", i[i.Default = 3] = "Default", i[i.High = 4] = "High";
})(s || (s = {}));
var r;
(function(i) {
  i[i.Secret = -1] = "Secret", i[i.Private = 0] = "Private", i[i.Public = 1] = "Public";
})(r || (r = {}));
async function g() {
  return await n("plugin:notifications|is_permission_granted");
}
async function w() {
  return await n("plugin:notifications|request_permission");
}
async function _() {
  return await n("plugin:notifications|register_for_push_notifications");
}
async function v() {
  await n("plugin:notifications|unregister_for_push_notifications");
}
async function d() {
  return await n("plugin:notifications|list_distributors");
}
async function p(i) {
  await n("plugin:notifications|set_distributor", { name: i });
}
async function y(i) {
  await n("plugin:notifications|set_token", { token: i });
}
async function h(i) {
  await n("plugin:notifications|notify", { options: typeof i == "string" ? { title: i } : i });
}
async function k(i) {
  await n("plugin:notifications|register_action_types", { types: i });
}
async function P() {
  return await n("plugin:notifications|get_pending");
}
async function m(i) {
  await n("plugin:notifications|cancel", { notifications: i });
}
async function N() {
  await n("plugin:notifications|cancel_all");
}
async function A() {
  return await n("plugin:notifications|get_active");
}
async function D(i) {
  await n("plugin:notifications|remove_active", { notifications: i });
}
async function C() {
  await n("plugin:notifications|remove_all");
}
async function M(i) {
  await n("plugin:notifications|create_channel", { channel: i });
}
async function H(i) {
  await n("plugin:notifications|delete_channel", { id: i });
}
async function L() {
  return await n("plugin:notifications|list_channels");
}
async function T(i) {
  return await o("notifications", "notification", i);
}
async function W(i) {
  return await o("notifications", "actionPerformed", i);
}
async function b(i) {
  const t = await o("notifications", "notificationClicked", i);
  return await n("plugin:notifications|set_click_listener_active", { active: true }), { unregister: async () => (await n("plugin:notifications|set_click_listener_active", { active: false }), t.unregister()) };
}
export {
  s as Importance,
  l as Schedule,
  c as ScheduleEvery,
  r as Visibility,
  A as active,
  m as cancel,
  N as cancelAll,
  L as channels,
  M as createChannel,
  g as isPermissionGranted,
  d as listDistributors,
  W as onAction,
  b as onNotificationClicked,
  T as onNotificationReceived,
  P as pending,
  k as registerActionTypes,
  _ as registerForPushNotifications,
  D as removeActive,
  C as removeAllActive,
  H as removeChannel,
  w as requestPermission,
  h as sendNotification,
  p as setDistributor,
  y as setToken,
  v as unregisterForPushNotifications
};
