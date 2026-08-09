import { j as o, n as a, o as i, p as s, q as p, s as c } from "./index-BkkCC0vW.js";
import "./matrix-05hIIFCf.js";
const l = new p.Icon({ iconUrl: c, iconSize: [25, 41], iconAnchor: [12, 41] });
function g({ coordinates: e, className: n }) {
  const t = e;
  return o.jsxs(a, { center: t, zoom: 16, scrollWheelZoom: true, className: n, attributionControl: true, children: [o.jsx(i, { attribution: '\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>', url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }), o.jsx(s, { position: t, eventHandlers: { mousedown: (r) => {
    r.originalEvent.preventDefault(), r.originalEvent.stopPropagation();
  } }, icon: l })] });
}
export {
  g as LocationMap
};
