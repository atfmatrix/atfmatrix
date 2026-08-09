import { r as l, ak as zs, j as e, aM as V, f as h, z as k, d as c, aR as E, V as v, bb as Z, a4 as T, X as N, cS as Us, cT as W, Q as M, cU as _e, cV as _s, cW as $, c as Ds, bc as Ze, aI as Ie, aO as Ms, a0 as Bs, bd as Ae, be as Xe, bf as Qe, aN as Ee, bg as Os, cX as qs, aq as le, cY as Se, cZ as De, c_ as Hs, ao as he, u as Ns, aT as $s, ag as we, c$ as Vs, d0 as Je, d1 as es, d2 as Me, b2 as Ws, d3 as Gs, _ as Ys, d4 as Be, d5 as Ks, d6 as Zs, d7 as Xs, d8 as Qs, m as Ce, d9 as be, da as Oe, db as qe, dc as Js, dd as er, de as Pe, E as pe, aC as He, df as Ne, dg as Le, dh as sr, di as rr, b5 as $e, a5 as ss, dj as ye, dk as rs, dl as ts, dm as ns, dn as is, dp as re, dq as tr, dr as nr, a6 as J, ds as ir, ae as ar, dt as or, du as de, dv as ue, dw as cr, dx as te, dy as ne, dz as ie, dA as lr, dB as dr, ba as as, ar as os, c1 as cs, dC as ee, dD as ur, dE as ls, a8 as ds, dF as _, dG as gr, dH as hr, dI as ae, dJ as us, bh as ge, dK as Ve, T as pr, e as mr, a2 as fr, dL as xr, dM as jr, dN as vr, dO as yr, dP as ve, dQ as je, dR as wr, dS as Sr, dT as Cr, dU as br, dV as gs, dW as kr, dX as Rr } from "./index-BkkCC0vW.js";
import { A as C, c as me, M as P, S as hs } from "./matrix-05hIIFCf.js";
import { C as ps } from "./ConfirmPasswordMatch-Bp2ESioA.js";
const Ir = /* @__PURE__ */ new Map([["bold", l.createElement(l.Fragment, null, l.createElement("path", { d: "M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z" }))], ["duotone", l.createElement(l.Fragment, null, l.createElement("path", { d: "M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z", opacity: "0.2" }), l.createElement("path", { d: "M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z" }))], ["fill", l.createElement(l.Fragment, null, l.createElement("path", { d: "M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1-5.66-13.66l17-17-10.55-9.65-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,1,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60l10.93,10L226.34,50.3A8,8,0,0,1,240,56Z" }))], ["light", l.createElement(l.Fragment, null, l.createElement("path", { d: "M238,56v48a6,6,0,0,1-6,6H184a6,6,0,0,1,0-12h32.55l-30.38-27.8c-.06-.06-.12-.13-.19-.19a82,82,0,1,0-1.7,117.65,6,6,0,0,1,8.24,8.73A93.46,93.46,0,0,1,128,222h-1.28A94,94,0,1,1,194.37,61.4L226,90.35V56a6,6,0,1,1,12,0Z" }))], ["regular", l.createElement(l.Fragment, null, l.createElement("path", { d: "M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z" }))], ["thin", l.createElement(l.Fragment, null, l.createElement("path", { d: "M236,56v48a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h37.7L187.53,68.69l-.13-.12a84,84,0,1,0-1.75,120.51,4,4,0,0,1,5.5,5.82A91.43,91.43,0,0,1,128,220h-1.26A92,92,0,1,1,193,62.84l35,32.05V56a4,4,0,1,1,8,0Z" }))]]), ms = l.forwardRef((s, r) => l.createElement(zs, { ref: r, ...s, weights: Ir }));
ms.displayName = "ArrowClockwiseIcon";
function Ar({ title: s, message: r, onRetry: t, onCancel: n }) {
  return e.jsx(V, { children: e.jsxs(h, { style: { padding: k.space.S400 }, direction: "Column", gap: "400", children: [e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { size: "H4", children: s }), e.jsx(c, { children: r })] }), e.jsx(E, { variant: "Critical", onClick: t, children: e.jsx(c, { as: "span", size: "B400", children: "Retry" }) }), e.jsx(E, { variant: "Critical", fill: "None", outlined: true, onClick: n, children: e.jsx(c, { as: "span", size: "B400", children: "Cancel" }) })] }) });
}
function Er({ stageData: s, submitAuthDict: r, onCancel: t }) {
  const { errorCode: n, error: a, session: o } = s, i = l.useCallback(() => {
    r({ type: C.Dummy, session: o });
  }, [o, r]);
  return l.useEffect(() => {
    n || i();
  }, [i, n]), n ? e.jsx(Ar, { title: n, message: a ?? "Failed to register.", onRetry: i, onCancel: t }) : null;
}
function We({ title: s, message: r, defaultEmail: t, onRetry: n, onCancel: a }) {
  const o = (i) => {
    i.preventDefault();
    const { retryEmailInput: d } = i.target, u = d.value;
    n(u);
  };
  return e.jsx(V, { children: e.jsxs(h, { as: "form", onSubmit: o, style: { padding: k.space.S400 }, direction: "Column", gap: "400", children: [e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { size: "H4", children: s }), e.jsx(c, { children: r }), e.jsx(c, { as: "label", size: "L400", style: { paddingTop: k.space.S400 }, children: "Email" }), e.jsx(N, { name: "retryEmailInput", variant: "Background", size: "500", outlined: true, defaultValue: t, required: true })] }), e.jsx(E, { variant: "Primary", type: "submit", children: e.jsx(c, { as: "span", size: "B400", children: "Send Verification Email" }) }), e.jsx(E, { variant: "Critical", fill: "None", outlined: true, type: "button", onClick: a, children: e.jsx(c, { as: "span", size: "B400", children: "Cancel" }) })] }) });
}
function fs({ email: s, clientSecret: r, stageData: t, emailTokenState: n, requestEmailToken: a, submitAuthDict: o, onCancel: i }) {
  const { errorCode: d, error: u, session: g } = t, m = l.useCallback((S) => {
    const j = { sid: S, client_secret: r };
    o({ type: C.Email, threepid_creds: j, threepidCreds: j, session: g });
  }, [o, g, r]), f = l.useCallback((S) => {
    a(S, r);
  }, [r, a]);
  return l.useEffect(() => {
    s && !d && n.status === v.Idle && a(s, r);
  }, [s, d, r, n, a]), n.status === v.Loading ? e.jsxs(h, { direction: "Column", alignItems: "Center", gap: "400", children: [e.jsx(Z, { variant: "Secondary", size: "600" }), e.jsx(c, { style: { color: T.Secondary.Main }, children: "Sending verification email..." })] }) : n.status === v.Error ? e.jsx(We, { title: n.error.errcode ?? "Verify Email", message: n.error?.data?.error ?? n.error.message ?? "Failed to send verification Email request.", onRetry: f, onCancel: i }) : n.status === v.Success ? e.jsx(V, { children: e.jsxs(h, { style: { padding: k.space.S400 }, direction: "Column", gap: "400", children: [e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { size: "H4", children: "Verification Request Sent" }), e.jsx(c, { children: `Please check your email "${n.data.email}" and validate before continuing further.` }), d && e.jsx(c, { style: { color: T.Critical.Main }, children: `${d}: ${u}` })] }), e.jsx(E, { variant: "Primary", onClick: () => m(n.data.result.sid), children: e.jsx(c, { as: "span", size: "B400", children: "Continue" }) })] }) }) : s ? null : e.jsx(We, { title: "Provide Email", message: "Please provide email to send verification request.", onRetry: f, onCancel: i });
}
function Pr({ title: s, message: r, onCancel: t }) {
  return e.jsx(V, { children: e.jsxs(h, { style: { padding: k.space.S400 }, direction: "Column", gap: "400", children: [e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { size: "H4", children: s }), e.jsx(c, { children: r })] }), e.jsx(E, { variant: "Critical", fill: "None", outlined: true, onClick: t, children: e.jsx(c, { as: "span", size: "B400", children: "Cancel" }) })] }) });
}
function Lr({ stageData: s, submitAuthDict: r, onCancel: t }) {
  const { info: n, session: a } = s, o = n?.public_key, i = (d) => {
    r({ type: C.Recaptcha, response: d, session: a });
  };
  return typeof o != "string" || !a ? e.jsx(Pr, { title: "Invalid Data", message: "No valid data found to proceed with ReCAPTCHA.", onCancel: t }) : e.jsx(V, { children: e.jsxs(h, { style: { padding: k.space.S400 }, direction: "Column", gap: "400", children: [e.jsx(c, { children: "Please check the box below to proceed." }), e.jsx(Us, { sitekey: o, onChange: i })] }) });
}
function Ge({ title: s, message: r, defaultToken: t, onRetry: n, onCancel: a }) {
  const o = (i) => {
    i.preventDefault();
    const { retryTokenInput: d } = i.target, u = d.value;
    n(u);
  };
  return e.jsx(V, { children: e.jsxs(h, { as: "form", onSubmit: o, style: { padding: k.space.S400 }, direction: "Column", gap: "400", children: [e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { size: "H4", children: s }), e.jsx(c, { children: r }), e.jsx(c, { as: "label", size: "L400", style: { paddingTop: k.space.S400 }, children: "Registration Token" }), e.jsx(N, { name: "retryTokenInput", variant: "Background", size: "500", outlined: true, defaultValue: t, required: true })] }), e.jsx(E, { variant: "Critical", type: "submit", children: e.jsx(c, { as: "span", size: "B400", children: "Retry" }) }), e.jsx(E, { variant: "Critical", fill: "None", outlined: true, type: "button", onClick: a, children: e.jsx(c, { as: "span", size: "B400", children: "Cancel" }) })] }) });
}
function Tr({ token: s, stageData: r, submitAuthDict: t, onCancel: n }) {
  const { errorCode: a, error: o, session: i } = r, d = l.useCallback((u) => {
    t({ type: C.RegistrationToken, token: u, session: i });
  }, [i, t]);
  return l.useEffect(() => {
    s && !a && d(s);
  }, [d, s, a]), a ? e.jsx(Ge, { defaultToken: s, title: a, message: o ?? "Invalid registration token provided.", onRetry: d, onCancel: n }) : s ? null : e.jsx(Ge, { defaultToken: s, title: "Registration Token", message: "Please submit registration token provided by you homeserver admin.", onRetry: d, onCancel: n });
}
function Fr({ title: s, message: r, onRetry: t, onCancel: n }) {
  return e.jsx(V, { children: e.jsxs(h, { style: { padding: k.space.S400 }, direction: "Column", gap: "400", children: [e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { size: "H4", children: s }), e.jsx(c, { children: r })] }), e.jsx(E, { variant: "Critical", onClick: t, children: e.jsx(c, { as: "span", size: "B400", children: "Retry" }) }), e.jsx(E, { variant: "Critical", fill: "None", outlined: true, onClick: n, children: e.jsx(c, { as: "span", size: "B400", children: "Cancel" }) })] }) });
}
function zr({ stageData: s, submitAuthDict: r, onCancel: t }) {
  const { errorCode: n, error: a, session: o } = s, i = l.useCallback(() => r({ type: C.Terms, session: o }), [o, r]);
  return l.useEffect(() => {
    n || i();
  }, [o, n, i]), n ? e.jsx(Fr, { title: n, message: a ?? "Failed to submit Terms and Condition Acceptance.", onRetry: i, onCancel: t }) : null;
}
var H = ((s) => (s[s.FlowRequired = 401] = "FlowRequired", s[s.InvalidRequest = 400] = "InvalidRequest", s[s.RegistrationDisabled = 403] = "RegistrationDisabled", s[s.RateLimited = 429] = "RateLimited", s))(H || {});
const Ur = (s) => {
  switch (s.httpStatus) {
    case 400:
      return { status: 400 };
    case 429:
      return { status: 429 };
    case 403:
      return { status: 403 };
    case 401:
      return { status: 401, data: s.data };
    default:
      return { status: 400 };
  }
}, xs = (s) => s !== void 0 && s.grant_types_supported.includes("authorization_code") && s.grant_types_supported.includes("refresh_token") && s.response_types_supported.includes("code") && s.response_modes_supported.includes("fragment") && s.code_challenge_methods_supported.includes("S256"), js = l.createContext(null), _r = js.Provider, vs = () => {
  const s = l.useContext(js);
  if (!s) throw new Error("Auth Flow info is not loaded!");
  return s;
};
function Dr({ fallback: s, error: r, children: t }) {
  const a = W()["m.homeserver"].base_url, o = l.useMemo(() => me({ baseUrl: a, fetchFn: $ }), [a]), [i, d] = M(l.useCallback(async () => {
    const u = await Promise.allSettled([o.loginFlows(), o.registerRequest({}), o.getAuthMetadata()]), g = _e(u[0]), m = _s(u[1]), f = _e(u[2]), S = xs(f) ? f : void 0;
    let j = { status: H.InvalidRequest };
    typeof m == "object" && m.httpStatus && (j = Ur(m));
    const w = g && !("errcode" in g) ? g : void 0;
    if (!w && !S) throw new Error("Missing auth flow!");
    return { loginFlows: w ?? { flows: [] }, registerFlows: j, authMetadata: S };
  }, [o]));
  return l.useEffect(() => {
    d();
  }, [d]), i.status === v.Idle || i.status === v.Loading ? s?.() : i.status === v.Error ? r?.(i.error, d) : t(i.data);
}
const ys = l.createContext(null), Mr = ys.Provider, X = () => {
  const s = l.useContext(ys);
  if (s === null) throw new Error("Auth server is not provided!");
  return s;
};
function Br({ server: s, serverList: r, allowCustomServer: t, onServerChange: n }) {
  const [a, o] = l.useState(), i = l.useRef(null), d = l.useRef(false);
  l.useEffect(() => {
    !d.current && i.current && i.current.value !== s && (i.current.value = s);
  }, [s]);
  const u = Ds(n, { wait: 700 }), g = (p) => {
    const x = p.target.value.trim();
    x && u(x);
  }, m = () => {
    d.current = true;
  }, f = () => {
    d.current = false, i.current && i.current.value.trim() === "" && (i.current.value = s);
  }, S = (p) => {
    if (p.key === "ArrowDown" && (p.preventDefault(), o(void 0)), p.key === "Enter") {
      p.preventDefault();
      const x = p.currentTarget.value.trim();
      x && n(x);
    }
  }, j = (p) => {
    const x = p.currentTarget.getAttribute("data-server");
    x && n(x), o(void 0);
  }, w = (p) => {
    const x = p.currentTarget.parentElement ?? p.currentTarget;
    o(x.getBoundingClientRect());
  };
  return e.jsx(N, { ref: i, style: { paddingRight: k.space.S200 }, variant: t ? "Background" : "Surface", outlined: true, defaultValue: s, onChange: g, onKeyDown: S, onFocus: m, onBlur: f, size: "500", readOnly: !t, onClick: t ? void 0 : w, autoCapitalize: "off", spellCheck: false, autoCorrect: "off", after: r.length === 0 || r.length === 1 && !t ? void 0 : e.jsx(Ze, { anchor: a, position: "Bottom", align: "End", offset: 4, content: e.jsx(Ae, { focusTrapOptions: { initialFocus: false, onDeactivate: () => o(void 0), clickOutsideDeactivates: true, isKeyForward: (p) => p.key === "ArrowDown", isKeyBackward: (p) => p.key === "ArrowUp", escapeDeactivates: Xe }, children: e.jsxs(Qe, { children: [e.jsx(Ee, { size: "300", style: { padding: `0 ${k.space.S200}` }, children: e.jsx(c, { size: "L400", children: "Homeserver List" }) }), e.jsx("div", { style: { padding: k.space.S100, paddingTop: 0 }, children: r?.map((p) => e.jsx(Os, { radii: "300", "aria-pressed": p === s, "data-server": p, onClick: j, children: e.jsx(c, { children: p }) }, p)) })] }) }), children: e.jsx(Ie, { onClick: w, variant: t ? "Background" : "Surface", size: "300", "aria-pressed": !!a, radii: "300", children: Ms(Bs) }) }) });
}
var Or = "styles_AuthLayout__39n2z00", qr = "styles_AuthCard__39n2z01", Hr = "styles_AuthLogo__39n2z02 _1mqalmd1 _1mqalmd0", Nr = "styles_AuthHeader__39n2z03", $r = "styles_AuthCardContent__39n2z04", Vr = "styles_AuthFooter__39n2z05";
function Wr() {
  return e.jsxs(h, { className: Vr, justifyContent: "Center", gap: "400", wrap: "Wrap", children: [e.jsx(c, { as: "a", size: "T300", href: "https://app.sable.moe", target: "_blank", rel: "noreferrer", children: "About" }), e.jsx(c, { as: "a", size: "T300", href: "https://github.com/SableClient/Sable", target: "_blank", rel: "noreferrer", children: qs() }), e.jsx(c, { as: "a", size: "T300", href: "https://matrix.org", target: "_blank", rel: "noreferrer", children: "Powered by Matrix" })] });
}
const se = (s, r) => {
  const { hashRouter: t } = le(), { origin: n } = window.location, a = r?.ignoreHashRouter ?? false;
  return l.useMemo(() => {
    let i = Se(n);
    return i += `/${Se("/")}`, i = De(i), t?.enabled && !a && (i += `/#/${Se(t.basename ?? "")}`, i = De(i)), i += `/${Hs(s)}`, i;
  }, [s, t, n, a]);
}, Ye = (s) => Ce(be, s) ? be : Ce(Oe, s) ? Oe : Ce(qe, s) ? qe : be;
function Te({ message: s }) {
  return e.jsxs(h, { justifyContent: "Center", alignItems: "Center", gap: "200", children: [e.jsx(Z, { size: "100", variant: "Secondary" }), e.jsx(c, { align: "Center", size: "T300", children: s })] });
}
function ce({ message: s, retry: r }) {
  return e.jsxs(h, { justifyContent: "Center", alignItems: "Center", gap: "200", children: [e.jsx(c, { align: "Center", style: { color: T.Critical.Main }, size: "T300", children: s }), e.jsx(Ie, { type: "button", size: "300", variant: "Critical", fill: "None", onClick: r, "aria-label": "Retry", radii: "300", children: pe(ms, "100") })] });
}
function Gr({ baseUrl: s }) {
  return e.jsx(Te, { message: `Connecting to ${s}` });
}
function Yr(s, r) {
  return e.jsx(ce, { message: "Failed to connect. Either homeserver is unavailable at this moment or does not exist.", retry: r });
}
function Kr() {
  return e.jsx(Te, { message: "Loading authentication flow..." });
}
function Zr(s, r) {
  return e.jsx(ce, { message: "Failed to get authentication flow information.", retry: r });
}
function Xr({ authFlows: s }) {
  return e.jsx(_r, { value: s, children: e.jsx(Js, {}) });
}
function Qr({ specVersions: s, renderAuthFlows: r }) {
  return e.jsx(er, { value: s, children: e.jsx(Dr, { fallback: Kr, error: Zr, children: r }) });
}
function Pt() {
  const s = he(), r = Ns(), { server: t } = $s(), [n] = we(), a = n.get("addAccount") === "1", o = le(), i = se(Pe()), d = Vs(o);
  let g = (t && decodeURIComponent(t)) ?? d;
  Je(o, g) || (g = d);
  const [m, f] = M(l.useCallback(async (y) => {
    const L = await es($, y);
    return { serverName: y, response: L };
  }, [])), S = () => f(g);
  l.useEffect(() => {
    g && f(g);
  }, [f, g]), l.useEffect(() => {
    if (!t || decodeURIComponent(t) !== g) {
      const y = Me(Ye(r.pathname), { server: encodeURIComponent(g) }), L = n.toString();
      s(`${y}${L ? `?${L}` : ""}`, { replace: true });
    }
  }, [t, s, r, g, n]);
  const j = l.useCallback((y) => {
    if (y === g) {
      if (m.status === v.Loading) return;
      f(g);
      return;
    }
    const L = Me(Ye(r.pathname), { server: encodeURIComponent(y) }), A = n.toString();
    s(`${L}${A ? `?${A}` : ""}`);
  }, [s, r, m, g, f, n]), [w, p] = m.status === v.Success ? m.data.response : [], x = p?.["m.homeserver"]?.base_url, R = l.useCallback(() => x ? e.jsx(Gr, { baseUrl: x }) : null, [x]), b = l.useCallback((y) => e.jsx(Xr, { authFlows: y }), []), F = l.useCallback((y) => e.jsx(Qr, { specVersions: y, renderAuthFlows: b }), [b]);
  return e.jsx(Ws, { variant: "Background", visibility: "Hover", size: "300", hideTrack: true, children: e.jsxs(h, { className: Xs(Or, Qs), direction: "Column", alignItems: "Center", justifyContent: "SpaceBetween", gap: "400", children: [e.jsxs(h, { direction: "Column", className: qr, children: [e.jsxs(Ee, { className: Nr, size: "600", variant: "Surface", children: [e.jsxs(h, { grow: "Yes", direction: "Row", gap: "300", alignItems: "Center", children: [e.jsx("img", { className: Hr, src: Gs, alt: "Sable Logo" }), e.jsx(c, { size: "H3", children: "Sable" })] }), a && e.jsxs(h, { gap: "200", alignItems: "Center", style: { marginLeft: "auto" }, children: [e.jsx(c, { size: "T200", priority: "300", children: "Adding account" }), e.jsx(Ys, { variant: "Surface", radii: "300", onClick: () => window.location.assign(i), children: e.jsx(c, { size: "T200", children: "Cancel" }) })] })] }), e.jsxs(h, { className: $r, direction: "Column", children: [e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { as: "label", size: "L400", priority: "300", children: "Homeserver" }), e.jsx(Br, { server: g, serverList: o.homeserverList ?? [], allowCustomServer: o.allowCustomHomeservers, onServerChange: j })] }), m.status === v.Loading && e.jsx(Te, { message: "Looking for homeserver..." }), m.status === v.Error && e.jsx(ce, { message: "Failed to find homeserver.", retry: S }), w?.action === Be.FAIL_PROMPT && e.jsx(ce, { message: `Failed to connect. Homeserver configuration found with ${w.host} appears unusable.`, retry: S }), w?.action === Be.FAIL_ERROR && e.jsx(ce, { message: "Failed to connect. Homeserver configuration base_url appears invalid.", retry: S }), m.status === v.Success && p && e.jsx(Mr, { value: m.data.serverName, children: e.jsx(Ks, { value: p, children: e.jsx(Zs, { baseUrl: p["m.homeserver"].base_url, fallback: R, error: Yr, children: F }) }) })] })] }), e.jsx(Wr, {})] }) });
}
const Jr = (s) => s.find((r) => r.type === "m.login.sso" || r.type === "m.login.cas"), et = (s) => s.find((r) => r.type === "m.login.password"), st = (s) => s.find((r) => r.type === "m.login.token"), ws = (s) => l.useMemo(() => ({ password: et(s), token: st(s), sso: Jr(s) }), [s]), ke = async (s, r) => {
  if (!Le()) return;
  s.preventDefault();
  const t = sr();
  await rr(r, t === "ios" || t === "android" ? "inAppBrowser" : void 0);
};
function Ss({ providers: s, redirectUrl: r, action: t, saveScreenSpace: n }) {
  const o = W()["m.homeserver"].base_url, i = l.useMemo(() => me({ baseUrl: o, fetchFn: $ }), [o]), d = (m) => i.getSsoLoginUrl(r, "sso", m, t), g = (s ? s.find((m) => !m.icon || !i.mxcUrlToHttp(m.icon, 96, 96, "crop", false)) : true) ? false : n && s && s.length > 2;
  return e.jsx(h, { justifyContent: "Center", gap: "600", wrap: "Wrap", children: s ? s.map((m) => {
    const { id: f, name: S, icon: j } = m, w = j && i.mxcUrlToHttp(j, 96, 96, "crop", false), p = `Continue with ${S}`;
    return g ? e.jsx(He, { style: { cursor: "pointer" }, as: "a", href: d(f), onClick: (x) => ke(x, d(f)), "aria-label": p, size: "300", radii: "300", children: e.jsx(Ne, { src: w, alt: S, title: p }) }, f) : e.jsx(E, { style: { width: "100%" }, as: "a", href: d(f), onClick: (x) => ke(x, d(f)), size: "500", variant: "Secondary", fill: "Soft", outlined: true, before: w && e.jsx(He, { size: "200", radii: "300", children: e.jsx(Ne, { src: w, alt: S }) }), children: e.jsx(c, { align: "Center", size: "B500", truncate: true, children: p }) }, f);
  }) : e.jsx(E, { style: { width: "100%" }, as: "a", href: d(), onClick: (m) => ke(m, d()), size: "500", variant: "Secondary", fill: "Soft", outlined: true, children: e.jsx(c, { align: "Center", size: "B500", truncate: true, children: "Continue with SSO" }) }) });
}
function Re() {
  return e.jsxs(h, { gap: "400", alignItems: "Center", children: [e.jsx($e, { style: { flexGrow: 1 }, direction: "Horizontal", size: "300", variant: "Surface" }), e.jsx(c, { children: "OR" }), e.jsx($e, { style: { flexGrow: 1 }, direction: "Horizontal", size: "300", variant: "Surface" })] });
}
function I({ message: s }) {
  return e.jsxs(h, { style: { color: T.Critical.Main }, alignItems: "Center", gap: "100", children: [pe(ss, "50", { filled: true }), e.jsx(c, { size: "T200", children: e.jsx("b", { children: s }) })] });
}
const Fe = "sable.login.slidingSync", rt = () => {
  try {
    return globalThis.sessionStorage?.getItem(Fe) === "true";
  } catch {
    return false;
  }
}, tt = (s) => {
  try {
    globalThis.sessionStorage?.setItem(Fe, String(s));
  } catch {
  }
}, nt = () => {
  try {
    globalThis.sessionStorage?.removeItem(Fe);
  } catch {
  }
}, Cs = ir("loginUtil"), K = ar("loginUtil"), it = (s, r) => async () => {
  if (!Je(s, r)) throw new Error("NotAllow");
  const [, t] = await re(es($, r));
  let n;
  const [, a] = t ?? [];
  if (a && (n = a["m.homeserver"].base_url), !n) throw new Error("NotFound");
  const [, o] = await re(or($, n));
  if (!o) throw new Error("NotFound");
  return n;
};
var z = ((s) => (s.ServerNotAllowed = "ServerNotAllowed", s.InvalidServer = "InvalidServer", s.Forbidden = "Forbidden", s.UserDeactivated = "UserDeactivated", s.InvalidRequest = "InvalidRequest", s.RateLimited = "RateLimited", s.Unknown = "Unknown", s))(z || {});
const bs = async (s, r) => {
  const [t, n] = typeof s == "function" ? await re(s()) : [void 0, s];
  if (t) throw new P({ errcode: t.message === "NotAllow" ? "ServerNotAllowed" : "InvalidServer" });
  const a = me({ baseUrl: n, fetchFn: $ });
  return K.info("general", "Attempting login", { baseUrl: n, loginType: r.type }), tr({ name: "auth.login", op: "auth", attributes: { "auth.method": r.type } }, async (o) => {
    const [i, d] = await re(a.loginRequest(r));
    if (i) throw o.setAttribute("auth.error", i.errcode ?? "unknown"), nr("sable.auth.login_failed", 1, { attributes: { errcode: i.errcode ?? "unknown" } }), i.httpStatus === 400 ? (K.error("general", "Login failed - invalid request", { httpStatus: 400 }), new P({ errcode: "InvalidRequest" })) : i.httpStatus === 429 ? (K.error("general", "Login failed - rate limited", { httpStatus: 429 }), new P({ errcode: "RateLimited" })) : i.errcode === J.M_USER_DEACTIVATED ? (K.error("general", "Login failed - user deactivated", { errcode: i.errcode }), new P({ errcode: "UserDeactivated" })) : i.httpStatus === 403 ? (K.error("general", "Login failed - forbidden", { httpStatus: 403 }), new P({ errcode: "Forbidden" })) : (K.error("general", "Login failed - unknown error", { error: i.message, httpStatus: i.httpStatus }), new P({ error: i.message, errcode: "Unknown" }));
    return o.setAttribute("auth.success", true), K.info("general", "Login successful", { userId: d.user_id, deviceId: d.device_id }), { baseUrl: n, response: d };
  });
}, ks = () => {
  const s = he(), r = ye(rs), t = ye(ts);
  return l.useCallback((n, a) => {
    const o = a === void 0 ? n : { ...n, slidingSyncOptIn: a };
    r({ type: "PUT", session: o }), t(o.userId), nt();
    const i = ns();
    is();
    const d = i ?? Pe();
    Cs.log("commitLoginSession: navigating to", d), s(d, { replace: true });
  }, [s, r, t]);
}, Rs = (s, r) => {
  const t = ks();
  l.useEffect(() => {
    if (s) {
      const { response: n, baseUrl: a } = s;
      Cs.log("useLoginComplete: login success", { userId: n.user_id, baseUrl: a });
      const o = { baseUrl: a, userId: n.user_id, deviceId: n.device_id, accessToken: n.access_token };
      t(o, r);
    }
  }, [s, r, t]);
};
function at({ server: s }) {
  const [r, t] = l.useState(), n = (a) => {
    t(a.currentTarget.getBoundingClientRect());
  };
  return e.jsx(Ze, { anchor: r, position: "Top", align: "End", content: e.jsx(Ae, { focusTrapOptions: { initialFocus: false, onDeactivate: () => t(void 0), clickOutsideDeactivates: true, escapeDeactivates: Xe }, children: e.jsxs(Qe, { children: [e.jsx(Ee, { size: "300", style: { padding: `0 ${k.space.S200}` }, children: e.jsx(c, { size: "L400", children: "Hint" }) }), e.jsxs(h, { style: { padding: k.space.S200, paddingTop: 0 }, direction: "Column", tabIndex: 0, gap: "100", children: [e.jsxs(c, { size: "T300", children: [e.jsx(c, { as: "span", size: "Inherit", priority: "300", children: "Username:" }), " ", "user123"] }), e.jsxs(c, { size: "T300", children: [e.jsx(c, { as: "span", size: "Inherit", priority: "300", children: "Matrix ID:" }), ` @user123:${s}`] }), e.jsxs(c, { size: "T300", children: [e.jsx(c, { as: "span", size: "Inherit", priority: "300", children: "Email:" }), ` user123@${s}`] })] })] }) }), children: e.jsx(Ie, { tabIndex: -1, onClick: n, type: "button", variant: "Background", size: "300", radii: "300", "aria-pressed": !!r, children: pe(as, "100", { style: { opacity: k.opacity.P300 } }) }) });
}
function ot({ defaultUsername: s, defaultEmail: r, slidingSyncOptIn: t, slidingSyncOption: n }) {
  const a = X(), o = le(), d = W()["m.homeserver"].base_url, [u, g] = M(l.useCallback(bs, []));
  Rs(u.status === v.Success ? u.data : void 0, t);
  const m = (w, p) => {
    g(d, { type: "m.login.password", identifier: { type: "m.id.user", user: w }, password: p, initial_device_display_name: ee() });
  }, f = async (w, p) => {
    const x = os(w), R = cs(w);
    if (!x || !R) return;
    const b = it(o, x);
    g(b, { type: "m.login.password", identifier: { type: "m.id.user", user: R }, password: p, initial_device_display_name: ee() });
  }, S = (w, p) => {
    g(d, { type: "m.login.password", identifier: { type: "m.id.thirdparty", medium: "email", address: w }, password: p, initial_device_display_name: ee() });
  }, j = (w) => {
    w.preventDefault();
    const { usernameInput: p, passwordInput: x } = w.target, R = p.value.trim(), b = x.value;
    if (!R) {
      p.focus();
      return;
    }
    if (!b) {
      x.focus();
      return;
    }
    if (lr(R)) {
      f(R, b);
      return;
    }
    if (dr.test(R)) {
      S(R, b);
      return;
    }
    m(R, b);
  };
  return e.jsxs(h, { as: "form", onSubmit: j, direction: "Inherit", gap: "400", children: [e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { as: "label", htmlFor: "login-username-input", size: "L400", priority: "300", children: "Username" }), e.jsx(N, { id: "login-username-input", defaultValue: s ?? r, style: { paddingRight: k.space.S300 }, name: "usernameInput", variant: "Background", size: "500", required: true, outlined: true, autoCapitalize: "off", spellCheck: false, autoCorrect: "off", after: e.jsx(at, { server: a }) }), u.status === v.Error && e.jsxs(e.Fragment, { children: [u.error.errcode === z.ServerNotAllowed && e.jsx(I, { message: "Login with custom server not allowed by your client instance." }), u.error.errcode === z.InvalidServer && e.jsx(I, { message: "Failed to find your Matrix ID server." })] })] }), e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { as: "label", htmlFor: "login-password-input", size: "L400", priority: "300", children: "Password" }), e.jsx(de, { id: "login-password-input", name: "passwordInput", variant: "Background", size: "500", outlined: true, required: true }), e.jsxs(h, { alignItems: "Start", justifyContent: "SpaceBetween", gap: "200", children: [u.status === v.Error && e.jsxs(e.Fragment, { children: [u.error.errcode === z.Forbidden && e.jsx(I, { message: "Invalid Username or Password." }), u.error.errcode === z.UserDeactivated && e.jsx(I, { message: "This account has been deactivated." }), u.error.errcode === z.InvalidRequest && e.jsx(I, { message: "Failed to login. Part of your request data is invalid." }), u.error.errcode === z.RateLimited && e.jsx(I, { message: "Failed to login. Your login request has been rate-limited by server, Please try after some time." }), u.error.errcode === z.Unknown && e.jsx(I, { message: `Failed to login: ${u.error.data.error}` })] }), e.jsx(h, { grow: "Yes", shrink: "No", justifyContent: "End", children: e.jsx(c, { as: "span", size: "T200", priority: "400", align: "Right", children: e.jsx(ue, { to: cr(a), children: "Forget Password?" }) }) })] })] }), n, e.jsx(E, { type: "submit", variant: "Primary", size: "500", children: e.jsx(c, { as: "span", size: "B500", children: "Login" }) }), e.jsx(te, { open: u.status === v.Loading || u.status === v.Success, backdrop: e.jsx(ie, {}), children: e.jsx(ne, { children: e.jsx(Z, { variant: "Secondary", size: "600" }) }) })] });
}
function oe({ message: s }) {
  return e.jsxs(h, { style: { backgroundColor: T.Critical.Container, color: T.Critical.OnContainer, padding: k.space.S300, borderRadius: k.radii.R400 }, justifyContent: "Start", alignItems: "Start", gap: "300", children: [pe(ss, "300", { filled: true }), e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { size: "L400", children: "Token Login" }), e.jsx(c, { size: "T300", children: e.jsx("b", { children: s }) })] })] });
}
function ct({ token: s, slidingSyncOptIn: r }) {
  const n = W()["m.homeserver"].base_url, [a, o] = M(l.useCallback(bs, []));
  return l.useEffect(() => {
    o(n, { type: "m.login.token", token: s, initial_device_display_name: ee() });
  }, [n, s, o]), Rs(a.status === v.Success ? a.data : void 0, r), e.jsxs(e.Fragment, { children: [a.status === v.Error && e.jsxs(e.Fragment, { children: [a.error.errcode === z.Forbidden && e.jsx(oe, { message: "Invalid login token." }), a.error.errcode === z.UserDeactivated && e.jsx(oe, { message: "This account has been deactivated." }), a.error.errcode === z.InvalidRequest && e.jsx(oe, { message: "Failed to login. Part of your request data is invalid." }), a.error.errcode === z.RateLimited && e.jsx(oe, { message: "Failed to login. Your login request has been rate-limited by server, Please try after some time." }), a.error.errcode === z.Unknown && e.jsx(oe, { message: `Failed to login: ${a.error.data.error}` })] }), e.jsx(te, { open: a.status !== v.Error, backdrop: e.jsx(ie, {}), children: e.jsx(ne, { children: e.jsx(Z, { size: "600", variant: "Secondary" }) }) })] });
}
const Is = "Single sign-on", As = (s) => {
  switch (s instanceof hr ? s.code : ae.Unknown) {
    case ae.RegistrationFailed:
      return "Could not register with the homeserver for single sign-on.";
    case ae.CodeExchangeFailed:
      return "Sign-in could not be completed. Please try again.";
    case ae.MissingDeviceId:
      return "The homeserver did not grant a device for this session.";
    case ae.MissingRefreshToken:
      return "The authorization server did not issue the required refresh token.";
    default:
      return "Failed to sign in with single sign-on.";
  }
};
function Es({ authMetadata: s, homeserverUrl: r, redirectUri: t, label: n, prompt: a, notice: o, server: i }) {
  const [d, u] = M(l.useCallback(() => gr(s, r, t, { prompt: a, server: i }), [s, r, t, a, i])), g = d.status === v.Loading || d.status === v.Success, m = d.status === v.Error ? As(d.error) : o;
  return e.jsxs(h, { direction: "Column", gap: "300", children: [m && e.jsx(ls, { variant: "Critical", title: Is, description: m }), e.jsx(ds, { style: { width: "100%" }, size: "500", variant: "Secondary", fill: "Soft", outlined: true, loading: g, spinnerSize: "200", spinnerVariant: "Secondary", onClick: () => u(), children: e.jsx(c, { align: "Center", size: "B500", truncate: true, children: n }) })] });
}
function lt({ code: s, state: r, slidingSyncOptIn: t }) {
  const n = ks(), a = X(), o = he(), [i, d] = M(l.useCallback(ur, []));
  return l.useEffect(() => {
    d(s, r);
  }, [s, r, d]), l.useEffect(() => {
    i.status === v.Success && n(i.data.session, t);
  }, [i, t, n]), e.jsxs(e.Fragment, { children: [i.status === v.Error && e.jsxs(h, { direction: "Column", gap: "300", children: [e.jsx(ls, { variant: "Critical", title: Is, description: As(i.error) }), e.jsx(ds, { variant: "Secondary", fill: "Soft", outlined: true, onClick: () => o(_(a), { replace: true }), children: e.jsx(c, { align: "Center", size: "B400", children: "Back to Login" }) })] }), e.jsx(te, { open: i.status !== v.Error, backdrop: e.jsx(ie, {}), children: e.jsx(ne, { children: e.jsx(Z, { size: "600", variant: "Secondary" }) }) })] });
}
const dt = () => {
  const s = new URLSearchParams(window.location.search);
  return { loginToken: s.get("loginToken") ?? void 0, code: s.get("code") ?? void 0, state: s.get("state") ?? void 0, error: s.get("error") ?? void 0, errorDescription: s.get("error_description") ?? void 0 };
}, ut = (s) => l.useMemo(() => ({ username: s.get("username") ?? void 0, email: s.get("email") ?? void 0, loginToken: s.get("loginToken") ?? void 0 }), [s]);
function gt({ value: s, onChange: r }) {
  return e.jsxs(h, { alignItems: "Center", justifyContent: "SpaceBetween", gap: "300", children: [e.jsxs(h, { alignItems: "Center", gap: "100", children: [e.jsx(c, { as: "label", htmlFor: "login-sliding-sync", priority: "400", children: "Use sliding sync" }), e.jsx(pr, { delay: 300, tooltip: e.jsx(mr, { style: { maxWidth: "240px", padding: k.space.S200 }, children: e.jsx(c, { size: "T200", children: "Sliding sync is faster and uses less bandwidth, but it can be buggier. You can toggle it later in Settings at any time." }) }), children: (t) => e.jsx("span", { ref: t, role: "img", "aria-label": "About sliding sync", style: { display: "inline-flex", color: T.Surface.OnContainer }, children: pe(as, "100") }) })] }), e.jsx(fr, { variant: "Primary", value: s, onChange: r, id: "login-sliding-sync" })] });
}
function Lt() {
  const s = X(), { hashRouter: r } = le(), { hideUsernamePasswordFields: t } = le(), { loginFlows: n, registerFlows: a, authMetadata: o } = vs(), d = W()["m.homeserver"].base_url, [u] = we(), g = ut(u), m = se(_(s)), f = Le() ? us(s) : m, S = se(_(s), { ignoreHashRouter: true }), j = dt(), w = se(_(s)), [p, x] = l.useState(rt), R = (xe) => {
    x(xe), tt(xe);
  };
  r?.enabled && (j.loginToken || j.code && j.state) && window.location.replace(ge(w, { ...j.loginToken ? { loginToken: j.loginToken } : {}, ...j.code && j.state ? { code: j.code, state: j.state } : {} }));
  const b = ws(n.flows), y = u.get("addAccount") === "1" ? ge(Ve(s), { addAccount: "1" }) : Ve(s), L = a.status === H.RegistrationDisabled && !b.sso, A = u.get("code") ?? void 0, U = u.get("state") ?? void 0, B = u.get("error") ?? j.error, G = u.get("error_description") ?? j.errorDescription, Q = B ? G ?? `Sign-in was not completed (${B}).` : void 0, fe = xs(o) ? o : void 0, O = fe !== void 0, Y = !t && b.password !== void 0, q = b.sso !== void 0;
  return O && A && U ? e.jsx(lt, { code: A, state: U, slidingSyncOptIn: p }) : e.jsxs(h, { direction: "Column", gap: "500", children: [e.jsx(c, { size: "H2", priority: "400", children: "Login" }), e.jsx(gt, { value: p, onChange: R }), b.token && g.loginToken && e.jsx(ct, { token: g.loginToken, slidingSyncOptIn: p }), O && e.jsxs(e.Fragment, { children: [e.jsx(Es, { authMetadata: fe, homeserverUrl: d, redirectUri: S, label: `Continue with ${s}`, notice: Q, server: s }), e.jsx("span", { "data-spacing-node": true })] }), q && e.jsxs(e.Fragment, { children: [O && e.jsx(Re, {}), e.jsx(Ss, { providers: b.sso.identity_providers, redirectUrl: f, action: hs.LOGIN, saveScreenSpace: Y || O }), e.jsx("span", { "data-spacing-node": true })] }), Y && e.jsxs(e.Fragment, { children: [(q || O && !q) && e.jsx(Re, {}), e.jsx(ot, { defaultUsername: g.username, defaultEmail: g.email, slidingSyncOptIn: p }), e.jsx("span", { "data-spacing-node": true })] }), !Y && !q && !O && e.jsxs(e.Fragment, { children: [e.jsx(c, { style: { color: T.Critical.Main }, children: `This client does not support login on "${s}" homeserver. Password and SSO based login method not found.` }), e.jsx("span", { "data-spacing-node": true })] }), !L && e.jsxs(c, { align: "Center", children: ["Do not have an account? ", e.jsx(ue, { to: y, children: "Register" })] })] });
}
function ht({ flows: s, supportedStages: r, children: t }) {
  const n = xr(s, r);
  return t(n);
}
const pt = (s) => {
  const r = l.useRef(1), t = l.useCallback(async (o, i, d) => {
    const u = r.current;
    r.current += 1;
    const g = await s.requestRegisterEmailToken(o, i, u, d);
    return { email: o, clientSecret: i, result: g };
  }, [s]), [n, a] = M(t);
  return [n, a];
};
var D = ((s) => (s.UserTaken = "UserTaken", s.UserInvalid = "UserInvalid", s.UserExclusive = "UserExclusive", s.PasswordWeak = "PasswordWeak", s.PasswordShort = "PasswordShort", s.InvalidRequest = "InvalidRequest", s.Forbidden = "Forbidden", s.RateLimited = "RateLimited", s.Unknown = "Unknown", s))(D || {});
const mt = async (s, r) => {
  const [t, n] = await re(s.registerRequest(r));
  if (t) {
    if (t.httpStatus === 401) return [t.data, void 0];
    throw t.errcode === J.M_USER_IN_USE ? new P({ errcode: "UserTaken" }) : t.errcode === J.M_INVALID_USERNAME ? new P({ errcode: "UserInvalid" }) : t.errcode === J.M_EXCLUSIVE ? new P({ errcode: "UserExclusive" }) : t.errcode === J.M_WEAK_PASSWORD ? new P({ errcode: "PasswordWeak", error: t.data.error }) : t.errcode === J.M_PASSWORD_TOO_SHORT ? new P({ errcode: "PasswordShort", error: t.data.error }) : t.httpStatus === 429 ? new P({ errcode: "RateLimited" }) : t.httpStatus === 400 ? new P({ errcode: "InvalidRequest" }) : t.httpStatus === 403 ? new P({ errcode: "Forbidden" }) : new P({ errcode: "Unknown", error: t.data.error });
  }
  return [void 0, { baseUrl: s.baseUrl, response: n }];
}, ft = (s) => {
  const r = he(), t = ye(rs), n = ye(ts);
  l.useEffect(() => {
    if (s) {
      const { response: a, baseUrl: o } = s, i = a.user_id, d = a.access_token, u = a.device_id;
      if (d && u) {
        t({ type: "PUT", session: { baseUrl: o, userId: i, deviceId: u, accessToken: d } }), n(i), jr(d, u, i, o);
        const g = ns();
        is(), r(g ?? Pe(), { replace: true });
      } else {
        const g = cs(i), m = os(i);
        r(ge(_(m), { username: g ?? "" }), { replace: true });
      }
    }
  }, [s, r, t, n]);
}, xt = [C.RegistrationToken, C.Terms, C.Recaptcha, C.Email, C.Dummy], jt = (s, r) => {
  const t = [];
  return r.token && t.push(C.RegistrationToken), r.email && t.push(C.Email), r.terms && t.push(C.Terms), ve(s, C.Recaptcha) && t.push(C.Recaptcha), t;
};
function vt({ formData: s, flow: r, authData: t, registerEmailState: n, registerEmail: a, onRegister: o }) {
  const i = Cr(t), { getStageToComplete: d } = br(t, r), u = d(), g = l.useCallback((f) => {
    const { password: S, username: j } = s;
    o({ auth: f, password: S, username: j, initial_device_display_name: ee() });
  }, [o, s]), m = l.useCallback(() => {
    window.location.reload();
  }, []);
  return u ? e.jsxs(gs, { currentStep: i.length + 1, stepCount: r.stages.length, onCancel: m, children: [u.type === C.RegistrationToken && e.jsx(Tr, { token: s.token, stageData: u, submitAuthDict: g, onCancel: m }), u.type === C.Terms && e.jsx(zr, { stageData: u, submitAuthDict: g, onCancel: m }), u.type === C.Recaptcha && e.jsx(Lr, { stageData: u, submitAuthDict: g, onCancel: m }), u.type === C.Email && e.jsx(fs, { email: s.email, clientSecret: s.clientSecret, stageData: u, requestEmailToken: a, emailTokenState: n, submitAuthDict: g, onCancel: m }), u.type === C.Dummy && e.jsx(Er, { stageData: u, submitAuthDict: g, onCancel: m })] }) : null;
}
function yt({ authData: s, uiaFlows: r, defaultUsername: t, defaultEmail: n, defaultRegisterToken: a }) {
  const i = W()["m.homeserver"].base_url, d = l.useMemo(() => me({ baseUrl: i, fetchFn: $ }), [i]), u = vr(s), g = yr(u), [m, f] = l.useState(), [S, j] = l.useState(), [w, p] = pt(d), [x, R] = M(l.useCallback(async (A) => mt(d, A), [d])), [b, F] = x.status === v.Success ? x.data : [], y = x.status === v.Error ? x.error : void 0;
  ft(F);
  const L = (A) => {
    A.preventDefault();
    const { usernameInput: U, passwordInput: B, confirmPasswordInput: G, emailInput: Q, tokenInput: fe, termsInput: O } = A.target, ze = fe?.value.trim(), Y = U.value.trim(), q = B.value, xe = G.value;
    if (q !== xe) return;
    const Ps = Q?.value.trim(), Ls = O?.value === "on";
    if (!Y) {
      U.focus();
      return;
    }
    const Ue = { username: Y, password: q, token: ze, email: Ps, terms: Ls, clientSecret: d.generateClientSecret() }, Ts = jt(r, Ue), Fs = Sr(r, Ts);
    j(Fs), f(Ue), R({ username: Y, password: q, auth: { session: s.session }, initial_device_display_name: ee() });
  };
  return e.jsxs(e.Fragment, { children: [e.jsxs(h, { as: "form", onSubmit: L, direction: "Inherit", gap: "400", children: [e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { as: "label", htmlFor: "register-username-input", size: "L400", priority: "300", children: "Username" }), e.jsx(N, { id: "register-username-input", variant: "Background", defaultValue: t, name: "usernameInput", size: "500", outlined: true, required: true }), y?.errcode === D.UserTaken && e.jsx(I, { message: "This username is already taken." }), y?.errcode === D.UserInvalid && e.jsx(I, { message: "This username contains invalid characters." }), y?.errcode === D.UserExclusive && e.jsx(I, { message: "This username is reserved." })] }), e.jsx(ps, { initialValue: true, children: (A, U, B, G) => e.jsxs(e.Fragment, { children: [e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { as: "label", htmlFor: "register-password-input", size: "L400", priority: "300", children: "Password" }), e.jsx(de, { id: "register-password-input", ref: B, onChange: U, name: "passwordInput", variant: "Background", size: "500", outlined: true, required: true }), y?.errcode === D.PasswordWeak && e.jsx(I, { message: y.data.error ?? "Weak Password. Password rejected by server please choosing more strong Password." }), y?.errcode === D.PasswordShort && e.jsx(I, { message: y.data.error ?? "Short Password. Password rejected by server please choosing more long Password." })] }), e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { as: "label", htmlFor: "register-confirm-password-input", size: "L400", priority: "300", children: "Confirm Password" }), e.jsx(de, { id: "register-confirm-password-input", ref: G, onChange: U, name: "confirmPasswordInput", variant: "Background", size: "500", style: { color: A ? void 0 : T.Critical.Main }, outlined: true, required: true })] })] }) }), ve(r, C.RegistrationToken) && e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { as: "label", htmlFor: "register-token-input", size: "L400", priority: "300", children: je(r, C.RegistrationToken) ? "Registration Token" : "Registration Token (Optional)" }), e.jsx(N, { id: "register-token-input", variant: "Background", defaultValue: a, name: "tokenInput", size: "500", required: je(r, C.RegistrationToken), outlined: true })] }), ve(r, C.Email) && e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { as: "label", htmlFor: "register-email-input", size: "L400", priority: "300", children: je(r, C.Email) ? "Email" : "Email (Optional)" }), e.jsx(N, { id: "register-email-input", variant: "Background", defaultValue: n, name: "emailInput", type: "email", size: "500", required: je(r, C.Email), outlined: true })] }), ve(r, C.Terms) && g && e.jsxs(h, { alignItems: "Center", gap: "200", children: [e.jsx(wr, { name: "termsInput", size: "300", variant: "Primary", required: true }), e.jsxs(c, { size: "T300", children: ["I accept server", " ", e.jsx("a", { href: g, target: "_blank", rel: "noreferrer", children: "Terms and Conditions" }), "."] })] }), y?.errcode === D.RateLimited && e.jsx(I, { message: "Failed to register. Your register request has been rate-limited by server, Please try after some time." }), y?.errcode === D.Forbidden && e.jsx(I, { message: "Failed to register. The homeserver does not permit registration." }), y?.errcode === D.InvalidRequest && e.jsx(I, { message: "Failed to register. Invalid request." }), y?.errcode === D.Unknown && e.jsx(I, { message: y.data.error ?? "Failed to register. Unknown Reason." }), e.jsx("span", { "data-spacing-node": true }), e.jsx(E, { variant: "Primary", size: "500", type: "submit", children: e.jsx(c, { as: "span", size: "B500", children: "Register" }) })] }), x.status === v.Success && m && S && b && e.jsx(vt, { formData: m, flow: S, authData: b, registerEmail: p, registerEmailState: w, onRegister: R }), x.status === v.Loading && e.jsx(te, { open: true, backdrop: e.jsx(ie, {}), children: e.jsx(ne, { children: e.jsx(Z, { variant: "Secondary", size: "600" }) }) })] });
}
const wt = (s) => l.useMemo(() => ({ username: s.get("username") ?? void 0, email: s.get("email") ?? void 0, token: s.get("token") ?? void 0 }), [s]);
function Tt() {
  const s = X(), { loginFlows: r, registerFlows: t, authMetadata: n } = vs(), o = W()["m.homeserver"].base_url, [i] = we(), d = wt(i), { sso: u } = ws(r.flows), g = se(_(s)), m = Le() ? us(s) : g, f = se(_(s), { ignoreHashRouter: true }), j = i.get("addAccount") === "1" ? ge(_(s), { addAccount: "1" }) : _(s);
  return n?.prompt_values_supported?.includes("create") === true ? e.jsxs(h, { direction: "Column", gap: "500", children: [e.jsx(c, { size: "H2", priority: "400", children: "Register" }), e.jsx(Es, { authMetadata: n, homeserverUrl: o, redirectUri: f, label: `Continue with ${s}`, prompt: "create", server: s }), e.jsx("span", { "data-spacing-node": true }), e.jsxs(c, { align: "Center", children: ["Already have an account? ", e.jsx(ue, { to: j, children: "Login" })] })] }) : e.jsxs(h, { direction: "Column", gap: "500", children: [e.jsx(c, { size: "H2", priority: "400", children: "Register" }), t.status === H.RegistrationDisabled && !u && e.jsx(c, { style: { color: T.Critical.Main }, size: "T300", children: "Registration has been disabled on this homeserver." }), t.status === H.RateLimited && !u && e.jsx(c, { style: { color: T.Critical.Main }, size: "T300", children: "You have been rate-limited! Please try after some time." }), t.status === H.InvalidRequest && !u && e.jsx(c, { style: { color: T.Critical.Main }, size: "T300", children: "Invalid Request! Failed to get any registration options." }), t.status === H.FlowRequired && e.jsxs(e.Fragment, { children: [e.jsx(ht, { flows: t.data.flows ?? [], supportedStages: xt, children: (p) => p.length === 0 ? e.jsx(c, { style: { color: T.Critical.Main }, size: "T300", children: "This application does not support registration on this homeserver." }) : e.jsx(yt, { authData: t.data, uiaFlows: p, defaultUsername: d.username, defaultEmail: d.email, defaultRegisterToken: d.token }) }), e.jsx("span", { "data-spacing-node": true }), u && e.jsx(Re, {})] }), u && e.jsxs(e.Fragment, { children: [e.jsx(Ss, { providers: u.identity_providers, redirectUrl: m, action: hs.REGISTER, saveScreenSpace: t.status === H.FlowRequired }), e.jsx("span", { "data-spacing-node": true })] }), e.jsxs(c, { align: "Center", children: ["Already have an account? ", e.jsx(ue, { to: j, children: "Login" })] })] });
}
const St = (s) => {
  const r = l.useRef(1), t = l.useCallback(async (o, i, d) => {
    const u = r.current;
    r.current += 1;
    const g = await s.requestPasswordEmailToken(o, i, u, d);
    return { email: o, clientSecret: i, result: g };
  }, [s]), [n, a] = M(t);
  return [n, a];
}, Ct = async (s, r, t) => {
  const [n, a] = await re(s.setPassword(r, t, false));
  if (n) {
    if (n.httpStatus === 401) return [n.data, void 0];
    throw n;
  }
  return [void 0, a];
};
function bt({ email: s }) {
  const r = X(), t = he(), n = () => {
    const a = _(r);
    if (s) {
      t(ge(a, { email: s }));
      return;
    }
    t(a);
  };
  return e.jsx(te, { open: true, backdrop: e.jsx(ie, {}), children: e.jsx(ne, { children: e.jsx(Ae, { children: e.jsx(V, { children: e.jsxs(h, { style: { padding: k.space.S400 }, direction: "Column", gap: "400", children: [e.jsx(c, { children: "Password has been reset successfully. Please login with your new password." }), e.jsx(E, { variant: "Primary", onClick: n, children: e.jsx(c, { size: "B400", as: "span", children: "Login" }) })] }) }) }) }) });
}
const Ke = () => {
  window.location.reload();
};
function kt({ defaultEmail: s }) {
  const r = X(), n = W()["m.homeserver"].base_url, a = l.useMemo(() => me({ baseUrl: n, fetchFn: $ }), [n]), [o, i] = l.useState(), [d, u] = St(a), [g, m] = M(l.useCallback(async (F, y) => Ct(a, F, y), [a])), [f, S] = g.status === v.Success ? g.data : [], j = g.status === v.Error ? g.error : void 0, w = f && kr(f), p = f && Rr(f);
  let x = true;
  S && (x = false), f && w === void 0 && (x = false), j && (x = false), g.status === v.Loading && (x = false), l.useEffect(() => {
    o && f && !w && m({ type: C.Password, identifier: { type: "m.id.thirdparty", medium: "email", address: o.email }, password: o.password }, o.password);
  }, [f, w, o, m]);
  const R = (F) => {
    F.preventDefault();
    const { emailInput: y, passwordInput: L, confirmPasswordInput: A } = F.target, U = y.value.trim(), B = L.value, G = A.value;
    if (!U) {
      y.focus();
      return;
    }
    if (B !== G) return;
    const Q = a.generateClientSecret();
    u(U, Q), i({ email: U, password: B, clientSecret: Q });
  }, b = l.useCallback((F) => {
    if (!o) return;
    const { password: y } = o;
    m(F, y);
  }, [o, m]);
  return e.jsxs(h, { as: "form", onSubmit: R, direction: "Inherit", gap: "400", children: [e.jsxs(c, { size: "T300", priority: "400", children: ["Homeserver ", e.jsx("strong", { children: r }), " will send you an email to let you reset your password."] }), e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { as: "label", size: "L400", priority: "300", children: "Email" }), e.jsx(N, { defaultValue: s, type: "email", name: "emailInput", variant: "Background", size: "500", required: true, outlined: true }), d.status === v.Error && e.jsx(I, { message: `${d.error.errcode}: ${d.error.data?.error}` })] }), e.jsx(ps, { initialValue: true, children: (F, y, L, A) => e.jsxs(e.Fragment, { children: [e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { as: "label", size: "L400", priority: "300", children: "New Password" }), e.jsx(de, { ref: L, onChange: y, name: "passwordInput", variant: "Background", size: "500", outlined: true, required: true })] }), e.jsxs(h, { direction: "Column", gap: "100", children: [e.jsx(c, { as: "label", size: "L400", priority: "300", children: "Confirm Password" }), e.jsx(de, { ref: A, onChange: y, name: "confirmPasswordInput", variant: "Background", size: "500", style: { color: F ? void 0 : T.Critical.Main }, outlined: true, required: true })] })] }) }), j && e.jsx(I, { message: `${j.errcode}: ${j.data?.error ?? "Failed to reset password."}` }), e.jsx("span", { "data-spacing-node": true }), e.jsx(E, { type: "submit", variant: "Primary", size: "500", children: e.jsx(c, { as: "span", size: "B500", children: "Reset Password" }) }), S && e.jsx(bt, { email: o?.email }), d.status === v.Success && o && x && e.jsx(gs, { currentStep: 1, stepCount: 1, onCancel: Ke, children: e.jsx(fs, { stageData: { type: C.Email, errorCode: w, error: p, session: f?.session }, submitAuthDict: b, email: o.email, clientSecret: o.clientSecret, requestEmailToken: u, emailTokenState: d, onCancel: Ke }) }), e.jsx(te, { open: d.status === v.Loading || g.status === v.Loading, backdrop: e.jsx(ie, {}), children: e.jsx(ne, { children: e.jsx(Z, { variant: "Secondary", size: "600" }) }) })] });
}
const Rt = (s) => l.useMemo(() => ({ email: s.get("email") ?? void 0 }), [s]);
function Ft() {
  const s = X(), [r] = we(), t = Rt(r);
  return e.jsxs(h, { direction: "Column", gap: "500", children: [e.jsx(c, { size: "H2", priority: "400", children: "Reset Password" }), e.jsx(kt, { defaultEmail: t.email }), e.jsx("span", { "data-spacing-node": true }), e.jsxs(c, { align: "Center", children: ["Remember your password? ", e.jsx(ue, { to: _(s), children: "Login" })] })] });
}
export {
  Pt as AuthLayout,
  Lt as Login,
  Tt as Register,
  Ft as ResetPassword
};
