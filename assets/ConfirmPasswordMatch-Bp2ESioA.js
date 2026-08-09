import { r as s, c as m } from "./index-BkkCC0vW.js";
function p({ initialValue: e, children: n }) {
  const [r, t] = s.useState(e), c = s.useRef(null), a = s.useRef(null), u = m(s.useCallback(() => {
    const f = c.current?.value, o = a.current?.value;
    if (!o) {
      t(e);
      return;
    }
    t(f === o);
  }, [e]), { wait: 500, immediate: false });
  return n(r, u, c, a);
}
export {
  p as C
};
