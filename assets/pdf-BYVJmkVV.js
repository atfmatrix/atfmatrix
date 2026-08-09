let Jt, Wt, V, j, Qt, ns, Kt, ft, Un, Dt, ii, G, Z, Me, Qe, Fi, nt, Gt, jt, ln, Ri, wt, Di, _n, Cn, ye, Xi, ti, pe, Bi, _t, si, hi, D, ni, zs, Hn, aa, Gs, Wi, Gn, ea, Rn, Bn, Ne, Oe, js, li, Yi, hr, Re, Vi, Li, Ft, Fn, Vs, re, $, lt, $s, ra;
let __tla = (async () => {
  var vi = {}, ve = {}, hs;
  function xn() {
    if (hs) return ve;
    hs = 1, ve.byteLength = a, ve.toByteArray = l, ve.fromByteArray = d;
    for (var u = [], t = [], e = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, n = i.length; s < n; ++s) u[s] = i[s], t[i.charCodeAt(s)] = s;
    t[45] = 62, t[95] = 63;
    function r(p) {
      var m = p.length;
      if (m % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var b = p.indexOf("=");
      b === -1 && (b = m);
      var y = b === m ? 0 : 4 - b % 4;
      return [
        b,
        y
      ];
    }
    function a(p) {
      var m = r(p), b = m[0], y = m[1];
      return (b + y) * 3 / 4 - y;
    }
    function o(p, m, b) {
      return (m + b) * 3 / 4 - b;
    }
    function l(p) {
      var m, b = r(p), y = b[0], w = b[1], v = new e(o(p, y, w)), E = 0, _ = w > 0 ? y - 4 : y, S;
      for (S = 0; S < _; S += 4) m = t[p.charCodeAt(S)] << 18 | t[p.charCodeAt(S + 1)] << 12 | t[p.charCodeAt(S + 2)] << 6 | t[p.charCodeAt(S + 3)], v[E++] = m >> 16 & 255, v[E++] = m >> 8 & 255, v[E++] = m & 255;
      return w === 2 && (m = t[p.charCodeAt(S)] << 2 | t[p.charCodeAt(S + 1)] >> 4, v[E++] = m & 255), w === 1 && (m = t[p.charCodeAt(S)] << 10 | t[p.charCodeAt(S + 1)] << 4 | t[p.charCodeAt(S + 2)] >> 2, v[E++] = m >> 8 & 255, v[E++] = m & 255), v;
    }
    function h(p) {
      return u[p >> 18 & 63] + u[p >> 12 & 63] + u[p >> 6 & 63] + u[p & 63];
    }
    function c(p, m, b) {
      for (var y, w = [], v = m; v < b; v += 3) y = (p[v] << 16 & 16711680) + (p[v + 1] << 8 & 65280) + (p[v + 2] & 255), w.push(h(y));
      return w.join("");
    }
    function d(p) {
      for (var m, b = p.length, y = b % 3, w = [], v = 16383, E = 0, _ = b - y; E < _; E += v) w.push(c(p, E, E + v > _ ? _ : E + v));
      return y === 1 ? (m = p[b - 1], w.push(u[m >> 2] + u[m << 4 & 63] + "==")) : y === 2 && (m = (p[b - 2] << 8) + p[b - 1], w.push(u[m >> 10] + u[m >> 4 & 63] + u[m << 2 & 63] + "=")), w.join("");
    }
    return ve;
  }
  var $e = {};
  var cs;
  function En() {
    return cs || (cs = 1, $e.read = function(u, t, e, i, s) {
      var n, r, a = s * 8 - i - 1, o = (1 << a) - 1, l = o >> 1, h = -7, c = e ? s - 1 : 0, d = e ? -1 : 1, p = u[t + c];
      for (c += d, n = p & (1 << -h) - 1, p >>= -h, h += a; h > 0; n = n * 256 + u[t + c], c += d, h -= 8) ;
      for (r = n & (1 << -h) - 1, n >>= -h, h += i; h > 0; r = r * 256 + u[t + c], c += d, h -= 8) ;
      if (n === 0) n = 1 - l;
      else {
        if (n === o) return r ? NaN : (p ? -1 : 1) * (1 / 0);
        r = r + Math.pow(2, i), n = n - l;
      }
      return (p ? -1 : 1) * r * Math.pow(2, n - i);
    }, $e.write = function(u, t, e, i, s, n) {
      var r, a, o, l = n * 8 - s - 1, h = (1 << l) - 1, c = h >> 1, d = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = i ? 0 : n - 1, m = i ? 1 : -1, b = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, r = h) : (r = Math.floor(Math.log(t) / Math.LN2), t * (o = Math.pow(2, -r)) < 1 && (r--, o *= 2), r + c >= 1 ? t += d / o : t += d * Math.pow(2, 1 - c), t * o >= 2 && (r++, o /= 2), r + c >= h ? (a = 0, r = h) : r + c >= 1 ? (a = (t * o - 1) * Math.pow(2, s), r = r + c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, s), r = 0)); s >= 8; u[e + p] = a & 255, p += m, a /= 256, s -= 8) ;
      for (r = r << s | a, l += s; l > 0; u[e + p] = r & 255, p += m, r /= 256, l -= 8) ;
      u[e + p - m] |= b * 128;
    }), $e;
  }
  var ds;
  function Sn() {
    return ds || (ds = 1, (function(u) {
      const t = xn(), e = En(), i = typeof Symbol == "function" && typeof Symbol.for == "function" ? /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom") : null;
      u.Buffer = a, u.SlowBuffer = v, u.INSPECT_MAX_BYTES = 50;
      const s = 2147483647;
      u.kMaxLength = s, a.TYPED_ARRAY_SUPPORT = n(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function n() {
        try {
          const A = new Uint8Array(1), f = {
            foo: function() {
              return 42;
            }
          };
          return Object.setPrototypeOf(f, Uint8Array.prototype), Object.setPrototypeOf(A, f), A.foo() === 42;
        } catch {
          return false;
        }
      }
      Object.defineProperty(a.prototype, "parent", {
        enumerable: true,
        get: function() {
          if (a.isBuffer(this)) return this.buffer;
        }
      }), Object.defineProperty(a.prototype, "offset", {
        enumerable: true,
        get: function() {
          if (a.isBuffer(this)) return this.byteOffset;
        }
      });
      function r(A) {
        if (A > s) throw new RangeError('The value "' + A + '" is invalid for option "size"');
        const f = new Uint8Array(A);
        return Object.setPrototypeOf(f, a.prototype), f;
      }
      function a(A, f, g) {
        if (typeof A == "number") {
          if (typeof f == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
          return c(A);
        }
        return o(A, f, g);
      }
      a.poolSize = 8192;
      function o(A, f, g) {
        if (typeof A == "string") return d(A, f);
        if (ArrayBuffer.isView(A)) return m(A);
        if (A == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof A);
        if (Ot(A, ArrayBuffer) || A && Ot(A.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ot(A, SharedArrayBuffer) || A && Ot(A.buffer, SharedArrayBuffer))) return b(A, f, g);
        if (typeof A == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        const x = A.valueOf && A.valueOf();
        if (x != null && x !== A) return a.from(x, f, g);
        const C = y(A);
        if (C) return C;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof A[Symbol.toPrimitive] == "function") return a.from(A[Symbol.toPrimitive]("string"), f, g);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof A);
      }
      a.from = function(A, f, g) {
        return o(A, f, g);
      }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
      function l(A) {
        if (typeof A != "number") throw new TypeError('"size" argument must be of type number');
        if (A < 0) throw new RangeError('The value "' + A + '" is invalid for option "size"');
      }
      function h(A, f, g) {
        return l(A), A <= 0 ? r(A) : f !== void 0 ? typeof g == "string" ? r(A).fill(f, g) : r(A).fill(f) : r(A);
      }
      a.alloc = function(A, f, g) {
        return h(A, f, g);
      };
      function c(A) {
        return l(A), r(A < 0 ? 0 : w(A) | 0);
      }
      a.allocUnsafe = function(A) {
        return c(A);
      }, a.allocUnsafeSlow = function(A) {
        return c(A);
      };
      function d(A, f) {
        if ((typeof f != "string" || f === "") && (f = "utf8"), !a.isEncoding(f)) throw new TypeError("Unknown encoding: " + f);
        const g = E(A, f) | 0;
        let x = r(g);
        const C = x.write(A, f);
        return C !== g && (x = x.slice(0, C)), x;
      }
      function p(A) {
        const f = A.length < 0 ? 0 : w(A.length) | 0, g = r(f);
        for (let x = 0; x < f; x += 1) g[x] = A[x] & 255;
        return g;
      }
      function m(A) {
        if (Ot(A, Uint8Array)) {
          const f = new Uint8Array(A);
          return b(f.buffer, f.byteOffset, f.byteLength);
        }
        return p(A);
      }
      function b(A, f, g) {
        if (f < 0 || A.byteLength < f) throw new RangeError('"offset" is outside of buffer bounds');
        if (A.byteLength < f + (g || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let x;
        return f === void 0 && g === void 0 ? x = new Uint8Array(A) : g === void 0 ? x = new Uint8Array(A, f) : x = new Uint8Array(A, f, g), Object.setPrototypeOf(x, a.prototype), x;
      }
      function y(A) {
        if (a.isBuffer(A)) {
          const f = w(A.length) | 0, g = r(f);
          return g.length === 0 || A.copy(g, 0, 0, f), g;
        }
        if (A.length !== void 0) return typeof A.length != "number" || wi(A.length) ? r(0) : p(A);
        if (A.type === "Buffer" && Array.isArray(A.data)) return p(A.data);
      }
      function w(A) {
        if (A >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
        return A | 0;
      }
      function v(A) {
        return +A != A && (A = 0), a.alloc(+A);
      }
      a.isBuffer = function(f) {
        return f != null && f._isBuffer === true && f !== a.prototype;
      }, a.compare = function(f, g) {
        if (Ot(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), Ot(g, Uint8Array) && (g = a.from(g, g.offset, g.byteLength)), !a.isBuffer(f) || !a.isBuffer(g)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (f === g) return 0;
        let x = f.length, C = g.length;
        for (let k = 0, P = Math.min(x, C); k < P; ++k) if (f[k] !== g[k]) {
          x = f[k], C = g[k];
          break;
        }
        return x < C ? -1 : C < x ? 1 : 0;
      }, a.isEncoding = function(f) {
        switch (String(f).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      }, a.concat = function(f, g) {
        if (!Array.isArray(f)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (f.length === 0) return a.alloc(0);
        let x;
        if (g === void 0) for (g = 0, x = 0; x < f.length; ++x) g += f[x].length;
        const C = a.allocUnsafe(g);
        let k = 0;
        for (x = 0; x < f.length; ++x) {
          let P = f[x];
          if (Ot(P, Uint8Array)) k + P.length > C.length ? (a.isBuffer(P) || (P = a.from(P)), P.copy(C, k)) : Uint8Array.prototype.set.call(C, P, k);
          else if (a.isBuffer(P)) P.copy(C, k);
          else throw new TypeError('"list" argument must be an Array of Buffers');
          k += P.length;
        }
        return C;
      };
      function E(A, f) {
        if (a.isBuffer(A)) return A.length;
        if (ArrayBuffer.isView(A) || Ot(A, ArrayBuffer)) return A.byteLength;
        if (typeof A != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof A);
        const g = A.length, x = arguments.length > 2 && arguments[2] === true;
        if (!x && g === 0) return 0;
        let C = false;
        for (; ; ) switch (f) {
          case "ascii":
          case "latin1":
          case "binary":
            return g;
          case "utf8":
          case "utf-8":
            return Ai(A).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return g * 2;
          case "hex":
            return g >>> 1;
          case "base64":
            return ls(A).length;
          default:
            if (C) return x ? -1 : Ai(A).length;
            f = ("" + f).toLowerCase(), C = true;
        }
      }
      a.byteLength = E;
      function _(A, f, g) {
        let x = false;
        if ((f === void 0 || f < 0) && (f = 0), f > this.length || ((g === void 0 || g > this.length) && (g = this.length), g <= 0) || (g >>>= 0, f >>>= 0, g <= f)) return "";
        for (A || (A = "utf8"); ; ) switch (A) {
          case "hex":
            return yt(this, f, g);
          case "utf8":
          case "utf-8":
            return Y(this, f, g);
          case "ascii":
            return N(this, f, g);
          case "latin1":
          case "binary":
            return bt(this, f, g);
          case "base64":
            return X(this, f, g);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Lt(this, f, g);
          default:
            if (x) throw new TypeError("Unknown encoding: " + A);
            A = (A + "").toLowerCase(), x = true;
        }
      }
      a.prototype._isBuffer = true;
      function S(A, f, g) {
        const x = A[f];
        A[f] = A[g], A[g] = x;
      }
      a.prototype.swap16 = function() {
        const f = this.length;
        if (f % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let g = 0; g < f; g += 2) S(this, g, g + 1);
        return this;
      }, a.prototype.swap32 = function() {
        const f = this.length;
        if (f % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let g = 0; g < f; g += 4) S(this, g, g + 3), S(this, g + 1, g + 2);
        return this;
      }, a.prototype.swap64 = function() {
        const f = this.length;
        if (f % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let g = 0; g < f; g += 8) S(this, g, g + 7), S(this, g + 1, g + 6), S(this, g + 2, g + 5), S(this, g + 3, g + 4);
        return this;
      }, a.prototype.toString = function() {
        const f = this.length;
        return f === 0 ? "" : arguments.length === 0 ? Y(this, 0, f) : _.apply(this, arguments);
      }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(f) {
        if (!a.isBuffer(f)) throw new TypeError("Argument must be a Buffer");
        return this === f ? true : a.compare(this, f) === 0;
      }, a.prototype.inspect = function() {
        let f = "";
        const g = u.INSPECT_MAX_BYTES;
        return f = this.toString("hex", 0, g).replace(/(.{2})/g, "$1 ").trim(), this.length > g && (f += " ... "), "<Buffer " + f + ">";
      }, i && (a.prototype[i] = a.prototype.inspect), a.prototype.compare = function(f, g, x, C, k) {
        if (Ot(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), !a.isBuffer(f)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f);
        if (g === void 0 && (g = 0), x === void 0 && (x = f ? f.length : 0), C === void 0 && (C = 0), k === void 0 && (k = this.length), g < 0 || x > f.length || C < 0 || k > this.length) throw new RangeError("out of range index");
        if (C >= k && g >= x) return 0;
        if (C >= k) return -1;
        if (g >= x) return 1;
        if (g >>>= 0, x >>>= 0, C >>>= 0, k >>>= 0, this === f) return 0;
        let P = k - C, q = x - g;
        const dt = Math.min(P, q), at = this.slice(C, k), ut = f.slice(g, x);
        for (let et = 0; et < dt; ++et) if (at[et] !== ut[et]) {
          P = at[et], q = ut[et];
          break;
        }
        return P < q ? -1 : q < P ? 1 : 0;
      };
      function T(A, f, g, x, C) {
        if (A.length === 0) return -1;
        if (typeof g == "string" ? (x = g, g = 0) : g > 2147483647 ? g = 2147483647 : g < -2147483648 && (g = -2147483648), g = +g, wi(g) && (g = C ? 0 : A.length - 1), g < 0 && (g = A.length + g), g >= A.length) {
          if (C) return -1;
          g = A.length - 1;
        } else if (g < 0) if (C) g = 0;
        else return -1;
        if (typeof f == "string" && (f = a.from(f, x)), a.isBuffer(f)) return f.length === 0 ? -1 : M(A, f, g, x, C);
        if (typeof f == "number") return f = f & 255, typeof Uint8Array.prototype.indexOf == "function" ? C ? Uint8Array.prototype.indexOf.call(A, f, g) : Uint8Array.prototype.lastIndexOf.call(A, f, g) : M(A, [
          f
        ], g, x, C);
        throw new TypeError("val must be string, number or Buffer");
      }
      function M(A, f, g, x, C) {
        let k = 1, P = A.length, q = f.length;
        if (x !== void 0 && (x = String(x).toLowerCase(), x === "ucs2" || x === "ucs-2" || x === "utf16le" || x === "utf-16le")) {
          if (A.length < 2 || f.length < 2) return -1;
          k = 2, P /= 2, q /= 2, g /= 2;
        }
        function dt(ut, et) {
          return k === 1 ? ut[et] : ut.readUInt16BE(et * k);
        }
        let at;
        if (C) {
          let ut = -1;
          for (at = g; at < P; at++) if (dt(A, at) === dt(f, ut === -1 ? 0 : at - ut)) {
            if (ut === -1 && (ut = at), at - ut + 1 === q) return ut * k;
          } else ut !== -1 && (at -= at - ut), ut = -1;
        } else for (g + q > P && (g = P - q), at = g; at >= 0; at--) {
          let ut = true;
          for (let et = 0; et < q; et++) if (dt(A, at + et) !== dt(f, et)) {
            ut = false;
            break;
          }
          if (ut) return at;
        }
        return -1;
      }
      a.prototype.includes = function(f, g, x) {
        return this.indexOf(f, g, x) !== -1;
      }, a.prototype.indexOf = function(f, g, x) {
        return T(this, f, g, x, true);
      }, a.prototype.lastIndexOf = function(f, g, x) {
        return T(this, f, g, x, false);
      };
      function I(A, f, g, x) {
        g = Number(g) || 0;
        const C = A.length - g;
        x ? (x = Number(x), x > C && (x = C)) : x = C;
        const k = f.length;
        x > k / 2 && (x = k / 2);
        let P;
        for (P = 0; P < x; ++P) {
          const q = parseInt(f.substr(P * 2, 2), 16);
          if (wi(q)) return P;
          A[g + P] = q;
        }
        return P;
      }
      function F(A, f, g, x) {
        return Ge(Ai(f, A.length - g), A, g, x);
      }
      function R(A, f, g, x) {
        return Ge(yn(f), A, g, x);
      }
      function B(A, f, g, x) {
        return Ge(ls(f), A, g, x);
      }
      function H(A, f, g, x) {
        return Ge(An(f, A.length - g), A, g, x);
      }
      a.prototype.write = function(f, g, x, C) {
        if (g === void 0) C = "utf8", x = this.length, g = 0;
        else if (x === void 0 && typeof g == "string") C = g, x = this.length, g = 0;
        else if (isFinite(g)) g = g >>> 0, isFinite(x) ? (x = x >>> 0, C === void 0 && (C = "utf8")) : (C = x, x = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const k = this.length - g;
        if ((x === void 0 || x > k) && (x = k), f.length > 0 && (x < 0 || g < 0) || g > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        C || (C = "utf8");
        let P = false;
        for (; ; ) switch (C) {
          case "hex":
            return I(this, f, g, x);
          case "utf8":
          case "utf-8":
            return F(this, f, g, x);
          case "ascii":
          case "latin1":
          case "binary":
            return R(this, f, g, x);
          case "base64":
            return B(this, f, g, x);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return H(this, f, g, x);
          default:
            if (P) throw new TypeError("Unknown encoding: " + C);
            C = ("" + C).toLowerCase(), P = true;
        }
      }, a.prototype.toJSON = function() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function X(A, f, g) {
        return f === 0 && g === A.length ? t.fromByteArray(A) : t.fromByteArray(A.slice(f, g));
      }
      function Y(A, f, g) {
        g = Math.min(A.length, g);
        const x = [];
        let C = f;
        for (; C < g; ) {
          const k = A[C];
          let P = null, q = k > 239 ? 4 : k > 223 ? 3 : k > 191 ? 2 : 1;
          if (C + q <= g) {
            let dt, at, ut, et;
            switch (q) {
              case 1:
                k < 128 && (P = k);
                break;
              case 2:
                dt = A[C + 1], (dt & 192) === 128 && (et = (k & 31) << 6 | dt & 63, et > 127 && (P = et));
                break;
              case 3:
                dt = A[C + 1], at = A[C + 2], (dt & 192) === 128 && (at & 192) === 128 && (et = (k & 15) << 12 | (dt & 63) << 6 | at & 63, et > 2047 && (et < 55296 || et > 57343) && (P = et));
                break;
              case 4:
                dt = A[C + 1], at = A[C + 2], ut = A[C + 3], (dt & 192) === 128 && (at & 192) === 128 && (ut & 192) === 128 && (et = (k & 15) << 18 | (dt & 63) << 12 | (at & 63) << 6 | ut & 63, et > 65535 && et < 1114112 && (P = et));
            }
          }
          P === null ? (P = 65533, q = 1) : P > 65535 && (P -= 65536, x.push(P >>> 10 & 1023 | 55296), P = 56320 | P & 1023), x.push(P), C += q;
        }
        return U(x);
      }
      const rt = 4096;
      function U(A) {
        const f = A.length;
        if (f <= rt) return String.fromCharCode.apply(String, A);
        let g = "", x = 0;
        for (; x < f; ) g += String.fromCharCode.apply(String, A.slice(x, x += rt));
        return g;
      }
      function N(A, f, g) {
        let x = "";
        g = Math.min(A.length, g);
        for (let C = f; C < g; ++C) x += String.fromCharCode(A[C] & 127);
        return x;
      }
      function bt(A, f, g) {
        let x = "";
        g = Math.min(A.length, g);
        for (let C = f; C < g; ++C) x += String.fromCharCode(A[C]);
        return x;
      }
      function yt(A, f, g) {
        const x = A.length;
        (!f || f < 0) && (f = 0), (!g || g < 0 || g > x) && (g = x);
        let C = "";
        for (let k = f; k < g; ++k) C += wn[A[k]];
        return C;
      }
      function Lt(A, f, g) {
        const x = A.slice(f, g);
        let C = "";
        for (let k = 0; k < x.length - 1; k += 2) C += String.fromCharCode(x[k] + x[k + 1] * 256);
        return C;
      }
      a.prototype.slice = function(f, g) {
        const x = this.length;
        f = ~~f, g = g === void 0 ? x : ~~g, f < 0 ? (f += x, f < 0 && (f = 0)) : f > x && (f = x), g < 0 ? (g += x, g < 0 && (g = 0)) : g > x && (g = x), g < f && (g = f);
        const C = this.subarray(f, g);
        return Object.setPrototypeOf(C, a.prototype), C;
      };
      function st(A, f, g) {
        if (A % 1 !== 0 || A < 0) throw new RangeError("offset is not uint");
        if (A + f > g) throw new RangeError("Trying to access beyond buffer length");
      }
      a.prototype.readUintLE = a.prototype.readUIntLE = function(f, g, x) {
        f = f >>> 0, g = g >>> 0, x || st(f, g, this.length);
        let C = this[f], k = 1, P = 0;
        for (; ++P < g && (k *= 256); ) C += this[f + P] * k;
        return C;
      }, a.prototype.readUintBE = a.prototype.readUIntBE = function(f, g, x) {
        f = f >>> 0, g = g >>> 0, x || st(f, g, this.length);
        let C = this[f + --g], k = 1;
        for (; g > 0 && (k *= 256); ) C += this[f + --g] * k;
        return C;
      }, a.prototype.readUint8 = a.prototype.readUInt8 = function(f, g) {
        return f = f >>> 0, g || st(f, 1, this.length), this[f];
      }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(f, g) {
        return f = f >>> 0, g || st(f, 2, this.length), this[f] | this[f + 1] << 8;
      }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(f, g) {
        return f = f >>> 0, g || st(f, 2, this.length), this[f] << 8 | this[f + 1];
      }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(f, g) {
        return f = f >>> 0, g || st(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
      }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(f, g) {
        return f = f >>> 0, g || st(f, 4, this.length), this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
      }, a.prototype.readBigUInt64LE = qt(function(f) {
        f = f >>> 0, Vt(f, "offset");
        const g = this[f], x = this[f + 7];
        (g === void 0 || x === void 0) && Zt(f, this.length - 8);
        const C = g + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24, k = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + x * 2 ** 24;
        return BigInt(C) + (BigInt(k) << BigInt(32));
      }), a.prototype.readBigUInt64BE = qt(function(f) {
        f = f >>> 0, Vt(f, "offset");
        const g = this[f], x = this[f + 7];
        (g === void 0 || x === void 0) && Zt(f, this.length - 8);
        const C = g * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f], k = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + x;
        return (BigInt(C) << BigInt(32)) + BigInt(k);
      }), a.prototype.readIntLE = function(f, g, x) {
        f = f >>> 0, g = g >>> 0, x || st(f, g, this.length);
        let C = this[f], k = 1, P = 0;
        for (; ++P < g && (k *= 256); ) C += this[f + P] * k;
        return k *= 128, C >= k && (C -= Math.pow(2, 8 * g)), C;
      }, a.prototype.readIntBE = function(f, g, x) {
        f = f >>> 0, g = g >>> 0, x || st(f, g, this.length);
        let C = g, k = 1, P = this[f + --C];
        for (; C > 0 && (k *= 256); ) P += this[f + --C] * k;
        return k *= 128, P >= k && (P -= Math.pow(2, 8 * g)), P;
      }, a.prototype.readInt8 = function(f, g) {
        return f = f >>> 0, g || st(f, 1, this.length), this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f];
      }, a.prototype.readInt16LE = function(f, g) {
        f = f >>> 0, g || st(f, 2, this.length);
        const x = this[f] | this[f + 1] << 8;
        return x & 32768 ? x | 4294901760 : x;
      }, a.prototype.readInt16BE = function(f, g) {
        f = f >>> 0, g || st(f, 2, this.length);
        const x = this[f + 1] | this[f] << 8;
        return x & 32768 ? x | 4294901760 : x;
      }, a.prototype.readInt32LE = function(f, g) {
        return f = f >>> 0, g || st(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
      }, a.prototype.readInt32BE = function(f, g) {
        return f = f >>> 0, g || st(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
      }, a.prototype.readBigInt64LE = qt(function(f) {
        f = f >>> 0, Vt(f, "offset");
        const g = this[f], x = this[f + 7];
        (g === void 0 || x === void 0) && Zt(f, this.length - 8);
        const C = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (x << 24);
        return (BigInt(C) << BigInt(32)) + BigInt(g + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24);
      }), a.prototype.readBigInt64BE = qt(function(f) {
        f = f >>> 0, Vt(f, "offset");
        const g = this[f], x = this[f + 7];
        (g === void 0 || x === void 0) && Zt(f, this.length - 8);
        const C = (g << 24) + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
        return (BigInt(C) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + x);
      }), a.prototype.readFloatLE = function(f, g) {
        return f = f >>> 0, g || st(f, 4, this.length), e.read(this, f, true, 23, 4);
      }, a.prototype.readFloatBE = function(f, g) {
        return f = f >>> 0, g || st(f, 4, this.length), e.read(this, f, false, 23, 4);
      }, a.prototype.readDoubleLE = function(f, g) {
        return f = f >>> 0, g || st(f, 8, this.length), e.read(this, f, true, 52, 8);
      }, a.prototype.readDoubleBE = function(f, g) {
        return f = f >>> 0, g || st(f, 8, this.length), e.read(this, f, false, 52, 8);
      };
      function W(A, f, g, x, C, k) {
        if (!a.isBuffer(A)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (f > C || f < k) throw new RangeError('"value" argument is out of bounds');
        if (g + x > A.length) throw new RangeError("Index out of range");
      }
      a.prototype.writeUintLE = a.prototype.writeUIntLE = function(f, g, x, C) {
        if (f = +f, g = g >>> 0, x = x >>> 0, !C) {
          const q = Math.pow(2, 8 * x) - 1;
          W(this, f, g, x, q, 0);
        }
        let k = 1, P = 0;
        for (this[g] = f & 255; ++P < x && (k *= 256); ) this[g + P] = f / k & 255;
        return g + x;
      }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(f, g, x, C) {
        if (f = +f, g = g >>> 0, x = x >>> 0, !C) {
          const q = Math.pow(2, 8 * x) - 1;
          W(this, f, g, x, q, 0);
        }
        let k = x - 1, P = 1;
        for (this[g + k] = f & 255; --k >= 0 && (P *= 256); ) this[g + k] = f / P & 255;
        return g + x;
      }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(f, g, x) {
        return f = +f, g = g >>> 0, x || W(this, f, g, 1, 255, 0), this[g] = f & 255, g + 1;
      }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(f, g, x) {
        return f = +f, g = g >>> 0, x || W(this, f, g, 2, 65535, 0), this[g] = f & 255, this[g + 1] = f >>> 8, g + 2;
      }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(f, g, x) {
        return f = +f, g = g >>> 0, x || W(this, f, g, 2, 65535, 0), this[g] = f >>> 8, this[g + 1] = f & 255, g + 2;
      }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(f, g, x) {
        return f = +f, g = g >>> 0, x || W(this, f, g, 4, 4294967295, 0), this[g + 3] = f >>> 24, this[g + 2] = f >>> 16, this[g + 1] = f >>> 8, this[g] = f & 255, g + 4;
      }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(f, g, x) {
        return f = +f, g = g >>> 0, x || W(this, f, g, 4, 4294967295, 0), this[g] = f >>> 24, this[g + 1] = f >>> 16, this[g + 2] = f >>> 8, this[g + 3] = f & 255, g + 4;
      };
      function tt(A, f, g, x, C) {
        ce(f, x, C, A, g, 7);
        let k = Number(f & BigInt(4294967295));
        A[g++] = k, k = k >> 8, A[g++] = k, k = k >> 8, A[g++] = k, k = k >> 8, A[g++] = k;
        let P = Number(f >> BigInt(32) & BigInt(4294967295));
        return A[g++] = P, P = P >> 8, A[g++] = P, P = P >> 8, A[g++] = P, P = P >> 8, A[g++] = P, g;
      }
      function Bt(A, f, g, x, C) {
        ce(f, x, C, A, g, 7);
        let k = Number(f & BigInt(4294967295));
        A[g + 7] = k, k = k >> 8, A[g + 6] = k, k = k >> 8, A[g + 5] = k, k = k >> 8, A[g + 4] = k;
        let P = Number(f >> BigInt(32) & BigInt(4294967295));
        return A[g + 3] = P, P = P >> 8, A[g + 2] = P, P = P >> 8, A[g + 1] = P, P = P >> 8, A[g] = P, g + 8;
      }
      a.prototype.writeBigUInt64LE = qt(function(f, g = 0) {
        return tt(this, f, g, BigInt(0), BigInt("0xffffffffffffffff"));
      }), a.prototype.writeBigUInt64BE = qt(function(f, g = 0) {
        return Bt(this, f, g, BigInt(0), BigInt("0xffffffffffffffff"));
      }), a.prototype.writeIntLE = function(f, g, x, C) {
        if (f = +f, g = g >>> 0, !C) {
          const dt = Math.pow(2, 8 * x - 1);
          W(this, f, g, x, dt - 1, -dt);
        }
        let k = 0, P = 1, q = 0;
        for (this[g] = f & 255; ++k < x && (P *= 256); ) f < 0 && q === 0 && this[g + k - 1] !== 0 && (q = 1), this[g + k] = (f / P >> 0) - q & 255;
        return g + x;
      }, a.prototype.writeIntBE = function(f, g, x, C) {
        if (f = +f, g = g >>> 0, !C) {
          const dt = Math.pow(2, 8 * x - 1);
          W(this, f, g, x, dt - 1, -dt);
        }
        let k = x - 1, P = 1, q = 0;
        for (this[g + k] = f & 255; --k >= 0 && (P *= 256); ) f < 0 && q === 0 && this[g + k + 1] !== 0 && (q = 1), this[g + k] = (f / P >> 0) - q & 255;
        return g + x;
      }, a.prototype.writeInt8 = function(f, g, x) {
        return f = +f, g = g >>> 0, x || W(this, f, g, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[g] = f & 255, g + 1;
      }, a.prototype.writeInt16LE = function(f, g, x) {
        return f = +f, g = g >>> 0, x || W(this, f, g, 2, 32767, -32768), this[g] = f & 255, this[g + 1] = f >>> 8, g + 2;
      }, a.prototype.writeInt16BE = function(f, g, x) {
        return f = +f, g = g >>> 0, x || W(this, f, g, 2, 32767, -32768), this[g] = f >>> 8, this[g + 1] = f & 255, g + 2;
      }, a.prototype.writeInt32LE = function(f, g, x) {
        return f = +f, g = g >>> 0, x || W(this, f, g, 4, 2147483647, -2147483648), this[g] = f & 255, this[g + 1] = f >>> 8, this[g + 2] = f >>> 16, this[g + 3] = f >>> 24, g + 4;
      }, a.prototype.writeInt32BE = function(f, g, x) {
        return f = +f, g = g >>> 0, x || W(this, f, g, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[g] = f >>> 24, this[g + 1] = f >>> 16, this[g + 2] = f >>> 8, this[g + 3] = f & 255, g + 4;
      }, a.prototype.writeBigInt64LE = qt(function(f, g = 0) {
        return tt(this, f, g, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      }), a.prototype.writeBigInt64BE = qt(function(f, g = 0) {
        return Bt(this, f, g, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function he(A, f, g, x, C, k) {
        if (g + x > A.length) throw new RangeError("Index out of range");
        if (g < 0) throw new RangeError("Index out of range");
      }
      function zt(A, f, g, x, C) {
        return f = +f, g = g >>> 0, C || he(A, f, g, 4), e.write(A, f, g, x, 23, 4), g + 4;
      }
      a.prototype.writeFloatLE = function(f, g, x) {
        return zt(this, f, g, true, x);
      }, a.prototype.writeFloatBE = function(f, g, x) {
        return zt(this, f, g, false, x);
      };
      function ct(A, f, g, x, C) {
        return f = +f, g = g >>> 0, C || he(A, f, g, 8), e.write(A, f, g, x, 52, 8), g + 8;
      }
      a.prototype.writeDoubleLE = function(f, g, x) {
        return ct(this, f, g, true, x);
      }, a.prototype.writeDoubleBE = function(f, g, x) {
        return ct(this, f, g, false, x);
      }, a.prototype.copy = function(f, g, x, C) {
        if (!a.isBuffer(f)) throw new TypeError("argument should be a Buffer");
        if (x || (x = 0), !C && C !== 0 && (C = this.length), g >= f.length && (g = f.length), g || (g = 0), C > 0 && C < x && (C = x), C === x || f.length === 0 || this.length === 0) return 0;
        if (g < 0) throw new RangeError("targetStart out of bounds");
        if (x < 0 || x >= this.length) throw new RangeError("Index out of range");
        if (C < 0) throw new RangeError("sourceEnd out of bounds");
        C > this.length && (C = this.length), f.length - g < C - x && (C = f.length - g + x);
        const k = C - x;
        return this === f && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(g, x, C) : Uint8Array.prototype.set.call(f, this.subarray(x, C), g), k;
      }, a.prototype.fill = function(f, g, x, C) {
        if (typeof f == "string") {
          if (typeof g == "string" ? (C = g, g = 0, x = this.length) : typeof x == "string" && (C = x, x = this.length), C !== void 0 && typeof C != "string") throw new TypeError("encoding must be a string");
          if (typeof C == "string" && !a.isEncoding(C)) throw new TypeError("Unknown encoding: " + C);
          if (f.length === 1) {
            const P = f.charCodeAt(0);
            (C === "utf8" && P < 128 || C === "latin1") && (f = P);
          }
        } else typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
        if (g < 0 || this.length < g || this.length < x) throw new RangeError("Out of range index");
        if (x <= g) return this;
        g = g >>> 0, x = x === void 0 ? this.length : x >>> 0, f || (f = 0);
        let k;
        if (typeof f == "number") for (k = g; k < x; ++k) this[k] = f;
        else {
          const P = a.isBuffer(f) ? f : a.from(f, C), q = P.length;
          if (q === 0) throw new TypeError('The value "' + f + '" is invalid for argument "value"');
          for (k = 0; k < x - g; ++k) this[k + g] = P[k % q];
        }
        return this;
      };
      const Yt = {};
      function Ae(A, f, g) {
        Yt[A] = class extends g {
          constructor() {
            super(), Object.defineProperty(this, "message", {
              value: f.apply(this, arguments),
              writable: true,
              configurable: true
            }), this.name = `${this.name} [${A}]`, this.stack, delete this.name;
          }
          get code() {
            return A;
          }
          set code(C) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value: C,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${A}]: ${this.message}`;
          }
        };
      }
      Ae("ERR_BUFFER_OUT_OF_BOUNDS", function(A) {
        return A ? `${A} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError), Ae("ERR_INVALID_ARG_TYPE", function(A, f) {
        return `The "${A}" argument must be of type number. Received type ${typeof f}`;
      }, TypeError), Ae("ERR_OUT_OF_RANGE", function(A, f, g) {
        let x = `The value of "${A}" is out of range.`, C = g;
        return Number.isInteger(g) && Math.abs(g) > 2 ** 32 ? C = He(String(g)) : typeof g == "bigint" && (C = String(g), (g > BigInt(2) ** BigInt(32) || g < -(BigInt(2) ** BigInt(32))) && (C = He(C)), C += "n"), x += ` It must be ${f}. Received ${C}`, x;
      }, RangeError);
      function He(A) {
        let f = "", g = A.length;
        const x = A[0] === "-" ? 1 : 0;
        for (; g >= x + 4; g -= 3) f = `_${A.slice(g - 3, g)}${f}`;
        return `${A.slice(0, g)}${f}`;
      }
      function we(A, f, g) {
        Vt(f, "offset"), (A[f] === void 0 || A[f + g] === void 0) && Zt(f, A.length - (g + 1));
      }
      function ce(A, f, g, x, C, k) {
        if (A > g || A < f) {
          const P = typeof f == "bigint" ? "n" : "";
          let q;
          throw f === 0 || f === BigInt(0) ? q = `>= 0${P} and < 2${P} ** ${(k + 1) * 8}${P}` : q = `>= -(2${P} ** ${(k + 1) * 8 - 1}${P}) and < 2 ** ${(k + 1) * 8 - 1}${P}`, new Yt.ERR_OUT_OF_RANGE("value", q, A);
        }
        we(x, C, k);
      }
      function Vt(A, f) {
        if (typeof A != "number") throw new Yt.ERR_INVALID_ARG_TYPE(f, "number", A);
      }
      function Zt(A, f, g) {
        throw Math.floor(A) !== A ? (Vt(A, g), new Yt.ERR_OUT_OF_RANGE("offset", "an integer", A)) : f < 0 ? new Yt.ERR_BUFFER_OUT_OF_BOUNDS() : new Yt.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${f}`, A);
      }
      const mn = /[^+/0-9A-Za-z-_]/g;
      function bn(A) {
        if (A = A.split("=")[0], A = A.trim().replace(mn, ""), A.length < 2) return "";
        for (; A.length % 4 !== 0; ) A = A + "=";
        return A;
      }
      function Ai(A, f) {
        f = f || 1 / 0;
        let g;
        const x = A.length;
        let C = null;
        const k = [];
        for (let P = 0; P < x; ++P) {
          if (g = A.charCodeAt(P), g > 55295 && g < 57344) {
            if (!C) {
              if (g > 56319) {
                (f -= 3) > -1 && k.push(239, 191, 189);
                continue;
              } else if (P + 1 === x) {
                (f -= 3) > -1 && k.push(239, 191, 189);
                continue;
              }
              C = g;
              continue;
            }
            if (g < 56320) {
              (f -= 3) > -1 && k.push(239, 191, 189), C = g;
              continue;
            }
            g = (C - 55296 << 10 | g - 56320) + 65536;
          } else C && (f -= 3) > -1 && k.push(239, 191, 189);
          if (C = null, g < 128) {
            if ((f -= 1) < 0) break;
            k.push(g);
          } else if (g < 2048) {
            if ((f -= 2) < 0) break;
            k.push(g >> 6 | 192, g & 63 | 128);
          } else if (g < 65536) {
            if ((f -= 3) < 0) break;
            k.push(g >> 12 | 224, g >> 6 & 63 | 128, g & 63 | 128);
          } else if (g < 1114112) {
            if ((f -= 4) < 0) break;
            k.push(g >> 18 | 240, g >> 12 & 63 | 128, g >> 6 & 63 | 128, g & 63 | 128);
          } else throw new Error("Invalid code point");
        }
        return k;
      }
      function yn(A) {
        const f = [];
        for (let g = 0; g < A.length; ++g) f.push(A.charCodeAt(g) & 255);
        return f;
      }
      function An(A, f) {
        let g, x, C;
        const k = [];
        for (let P = 0; P < A.length && !((f -= 2) < 0); ++P) g = A.charCodeAt(P), x = g >> 8, C = g % 256, k.push(C), k.push(x);
        return k;
      }
      function ls(A) {
        return t.toByteArray(bn(A));
      }
      function Ge(A, f, g, x) {
        let C;
        for (C = 0; C < x && !(C + g >= f.length || C >= A.length); ++C) f[C + g] = A[C];
        return C;
      }
      function Ot(A, f) {
        return A instanceof f || A != null && A.constructor != null && A.constructor.name != null && A.constructor.name === f.name;
      }
      function wi(A) {
        return A !== A;
      }
      const wn = (function() {
        const A = "0123456789abcdef", f = new Array(256);
        for (let g = 0; g < 16; ++g) {
          const x = g * 16;
          for (let C = 0; C < 16; ++C) f[x + C] = A[g] + A[C];
        }
        return f;
      })();
      function qt(A) {
        return typeof BigInt > "u" ? vn : A;
      }
      function vn() {
        throw new Error("BigInt not supported");
      }
    })(vi)), vi;
  }
  var us = Sn();
  let Tt, Xt, se, Pi, xi, St, Ct, ge, Pe, mt, ue, xe;
  Tt = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
  Xt = [
    1 / 0,
    1 / 0,
    -1 / 0,
    -1 / 0
  ];
  se = new Float32Array(Xt);
  Pi = [
    1e-3,
    0,
    0,
    1e-3,
    0,
    0
  ];
  xi = 1.35;
  St = "http://www.w3.org/2000/svg";
  Ct = {
    ANY: 1,
    DISPLAY: 2,
    PRINT: 4,
    ANNOTATIONS_FORMS: 16,
    ANNOTATIONS_STORAGE: 32,
    ANNOTATIONS_DISABLE: 64,
    IS_EDITING: 128,
    OPLIST: 256
  };
  Kt = {
    DISABLE: 0,
    ENABLE: 1,
    ENABLE_FORMS: 2,
    ENABLE_STORAGE: 3
  };
  ge = "pdfjs_internal_id_";
  Pe = "pdfjs_internal_editor_";
  j = {
    DISABLE: -1,
    NONE: 0,
    FREETEXT: 3,
    HIGHLIGHT: 9,
    STAMP: 13,
    INK: 15,
    POPUP: 16,
    SIGNATURE: 101,
    COMMENT: 102
  };
  V = {
    RESIZE: 1,
    CREATE: 2,
    FREETEXT_SIZE: 11,
    FREETEXT_COLOR: 12,
    FREETEXT_OPACITY: 13,
    INK_COLOR: 21,
    INK_THICKNESS: 22,
    INK_OPACITY: 23,
    INK_COLOR_AND_OPACITY: 24,
    HIGHLIGHT_COLOR: 31,
    HIGHLIGHT_THICKNESS: 32,
    HIGHLIGHT_FREE: 33,
    HIGHLIGHT_SHOW_ALL: 34,
    DRAW_STEP: 41
  };
  Cn = {
    PRINT: 4,
    MODIFY_CONTENTS: 8,
    COPY: 16,
    MODIFY_ANNOTATIONS: 32,
    FILL_INTERACTIVE_FORMS: 256,
    COPY_FOR_ACCESSIBILITY: 512,
    ASSEMBLE: 1024,
    PRINT_HIGH_QUALITY: 2048
  };
  mt = {
    FILL: 0,
    STROKE: 1,
    FILL_STROKE: 2,
    INVISIBLE: 3,
    FILL_STROKE_MASK: 3,
    ADD_TO_PATH_FLAG: 4
  };
  Qe = {
    GRAYSCALE_1BPP: 1,
    RGB_24BPP: 2,
    RGBA_32BPP: 3
  };
  ft = {
    TEXT: 1,
    LINK: 2,
    FREETEXT: 3,
    LINE: 4,
    SQUARE: 5,
    CIRCLE: 6,
    POLYGON: 7,
    POLYLINE: 8,
    HIGHLIGHT: 9,
    UNDERLINE: 10,
    SQUIGGLY: 11,
    STRIKEOUT: 12,
    STAMP: 13,
    CARET: 14,
    INK: 15,
    POPUP: 16,
    FILEATTACHMENT: 17,
    SOUND: 18,
    MOVIE: 19,
    WIDGET: 20,
    SCREEN: 21,
    PRINTERMARK: 22,
    TRAPNET: 23,
    WATERMARK: 24,
    THREED: 25,
    REDACT: 26,
    RICHMEDIA: 27
  };
  ue = {
    SOLID: 1,
    DASHED: 2,
    BEVELED: 3,
    INSET: 4,
    UNDERLINE: 5
  };
  ni = {
    ERRORS: 0,
    WARNINGS: 1,
    INFOS: 5
  };
  Gt = {
    dependency: 1,
    setLineWidth: 2,
    setLineCap: 3,
    setLineJoin: 4,
    setMiterLimit: 5,
    setDash: 6,
    setRenderingIntent: 7,
    setFlatness: 8,
    setGState: 9,
    save: 10,
    restore: 11,
    transform: 12,
    moveTo: 13,
    lineTo: 14,
    curveTo: 15,
    curveTo2: 16,
    curveTo3: 17,
    closePath: 18,
    rectangle: 19,
    stroke: 20,
    closeStroke: 21,
    fill: 22,
    eoFill: 23,
    fillStroke: 24,
    eoFillStroke: 25,
    closeFillStroke: 26,
    closeEOFillStroke: 27,
    endPath: 28,
    clip: 29,
    eoClip: 30,
    beginText: 31,
    endText: 32,
    setCharSpacing: 33,
    setWordSpacing: 34,
    setHScale: 35,
    setLeading: 36,
    setFont: 37,
    setTextRenderingMode: 38,
    setTextRise: 39,
    moveText: 40,
    setLeadingMoveText: 41,
    setTextMatrix: 42,
    nextLine: 43,
    showText: 44,
    showSpacedText: 45,
    nextLineShowText: 46,
    nextLineSetSpacingShowText: 47,
    setCharWidth: 48,
    setCharWidthAndBounds: 49,
    setStrokeColorSpace: 50,
    setFillColorSpace: 51,
    setStrokeColor: 52,
    setStrokeColorN: 53,
    setFillColor: 54,
    setFillColorN: 55,
    setStrokeGray: 56,
    setFillGray: 57,
    setStrokeRGBColor: 58,
    setFillRGBColor: 59,
    setStrokeCMYKColor: 60,
    setFillCMYKColor: 61,
    shadingFill: 62,
    beginInlineImage: 63,
    beginImageData: 64,
    endInlineImage: 65,
    paintXObject: 66,
    markPoint: 67,
    markPointProps: 68,
    beginMarkedContent: 69,
    beginMarkedContentProps: 70,
    endMarkedContent: 71,
    beginCompat: 72,
    endCompat: 73,
    paintFormXObjectBegin: 74,
    paintFormXObjectEnd: 75,
    beginGroup: 76,
    endGroup: 77,
    beginAnnotation: 80,
    endAnnotation: 81,
    paintImageMaskXObject: 83,
    paintImageMaskXObjectGroup: 84,
    paintImageXObject: 85,
    paintInlineImageXObject: 86,
    paintInlineImageXObjectGroup: 87,
    paintImageXObjectRepeat: 88,
    paintImageMaskXObjectRepeat: 89,
    paintSolidColorImageMask: 90,
    constructPath: 91,
    setStrokeTransparent: 92,
    setFillTransparent: 93,
    rawFillPath: 94
  };
  xe = {
    moveTo: 0,
    lineTo: 1,
    curveTo: 2,
    quadraticCurveTo: 3,
    closePath: 4
  };
  _n = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
  };
  let ri = ni.WARNINGS;
  function Tn(u) {
    Number.isInteger(u) && (ri = u);
  }
  function kn() {
    return ri;
  }
  function ai(u) {
    ri >= ni.INFOS && console.info(`Info: ${u}`);
  }
  function z(u) {
    ri >= ni.WARNINGS && console.warn(`Warning: ${u}`);
  }
  function K(u) {
    throw new Error(u);
  }
  function ht(u, t) {
    u || K(t);
  }
  function Mn(u) {
    switch (u?.protocol) {
      case "http:":
      case "https:":
      case "ftp:":
      case "mailto:":
      case "tel:":
        return true;
      default:
        return false;
    }
  }
  Gs = function(u, t = null, e = null) {
    if (!u) return null;
    if (e && typeof u == "string" && (e.addDefaultProtocol && u.startsWith("www.") && u.match(/\./g)?.length >= 2 && (u = `http://${u}`), e.tryConvertEncoding)) try {
      u = Dn(u);
    } catch {
    }
    const i = t ? URL.parse(u, t) : URL.parse(u);
    return Mn(i) ? i : null;
  };
  $s = function(u, t, e = false) {
    const i = URL.parse(u);
    return i ? (i.hash = t, i.href) : e && Gs(u, "http://example.com") ? u.split("#", 1)[0] + `${t ? `#${t}` : ""}` : "";
  };
  function Ii(u) {
    return u.substring(u.lastIndexOf("/") + 1);
  }
  $ = function(u, t, e, i = false) {
    return Object.defineProperty(u, t, {
      value: e,
      enumerable: !i,
      configurable: true,
      writable: false
    }), e;
  };
  const oe = (function() {
    function t(e, i) {
      this.message = e, this.name = i;
    }
    return t.prototype = new Error(), t.constructor = t, t;
  })();
  Di = class extends oe {
    constructor(t, e) {
      super(t, "PasswordException"), this.code = e;
    }
  };
  class Ei extends oe {
    constructor(t, e) {
      super(t, "UnknownErrorException"), this.details = e;
    }
  }
  Fi = class extends oe {
    constructor(t) {
      super(t, "InvalidPDFException");
    }
  };
  ti = class extends oe {
    constructor(t, e, i) {
      super(t, "ResponseException"), this.status = e, this.missing = i;
    }
  };
  class Pn extends oe {
    constructor(t) {
      super(t, "FormatError");
    }
  }
  Jt = class extends oe {
    constructor(t) {
      super(t, "AbortException");
    }
  };
  function In(u) {
    (typeof u != "object" || u?.length === void 0) && K("Invalid argument for bytesToString");
    const t = u.length, e = 8192;
    if (t < e) return String.fromCharCode.apply(null, u);
    const i = [];
    for (let s = 0; s < t; s += e) {
      const n = Math.min(s + e, t), r = u.subarray(s, n);
      i.push(String.fromCharCode.apply(null, r));
    }
    return i.join("");
  }
  function oi(u) {
    typeof u != "string" && K("Invalid argument for stringToBytes");
    const t = u.length, e = new Uint8Array(t);
    for (let i = 0; i < t; ++i) e[i] = u.charCodeAt(i) & 255;
    return e;
  }
  Z = class {
    static get isLittleEndian() {
      const t = new Uint8Array(4);
      t[0] = 1;
      const e = new Uint32Array(t.buffer, 0, 1);
      return $(this, "isLittleEndian", e[0] === 1);
    }
    static get isOffscreenCanvasSupported() {
      return $(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
    }
    static get isImageDecoderSupported() {
      return $(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
    }
    static get isFloat16ArraySupported() {
      return $(this, "isFloat16ArraySupported", typeof Float16Array < "u");
    }
    static get isSanitizerSupported() {
      return $(this, "isSanitizerSupported", typeof Sanitizer < "u");
    }
    static get platform() {
      const { platform: t, userAgent: e } = navigator;
      return $(this, "platform", {
        isAndroid: e.includes("Android"),
        isLinux: t.includes("Linux"),
        isMac: t.includes("Mac"),
        isWindows: t.includes("Win"),
        isFirefox: e.includes("Firefox")
      });
    }
    static get isCanvasFilterSupported() {
      let t;
      return this.isOffscreenCanvasSupported ? t = new OffscreenCanvas(1, 1).getContext("2d") : typeof document < "u" && (t = document.createElement("canvas").getContext("2d")), $(this, "isCanvasFilterSupported", t?.filter !== void 0);
    }
    static get isAlphaColorInputSupported() {
      if (typeof document > "u") return $(this, "isAlphaColorInputSupported", false);
      const t = document.createElement("input");
      return t.type = "color", t.setAttribute("alpha", ""), t.value = "#ff000080", $(this, "isAlphaColorInputSupported", t.value !== "#ff0000");
    }
    static get isBackdropFilterSupported() {
      return $(this, "isBackdropFilterSupported", typeof CSS < "u" && CSS.supports("backdrop-filter", "blur(1px)"));
    }
  };
  D = class {
    static get hexNums() {
      return $(this, "hexNums", Array.from(Array(256).keys(), (t) => t.toString(16).padStart(2, "0")));
    }
    static makeHexColor(t, e, i) {
      return `#${this.hexNums[t]}${this.hexNums[e]}${this.hexNums[i]}`;
    }
    static transform(t, e) {
      return [
        t[0] * e[0] + t[2] * e[1],
        t[1] * e[0] + t[3] * e[1],
        t[0] * e[2] + t[2] * e[3],
        t[1] * e[2] + t[3] * e[3],
        t[0] * e[4] + t[2] * e[5] + t[4],
        t[1] * e[4] + t[3] * e[5] + t[5]
      ];
    }
    static multiplyByDOMMatrix(t, e) {
      return [
        t[0] * e.a + t[2] * e.b,
        t[1] * e.a + t[3] * e.b,
        t[0] * e.c + t[2] * e.d,
        t[1] * e.c + t[3] * e.d,
        t[0] * e.e + t[2] * e.f + t[4],
        t[1] * e.e + t[3] * e.f + t[5]
      ];
    }
    static applyTransform(t, e, i = 0) {
      const s = t[i], n = t[i + 1];
      t[i] = s * e[0] + n * e[2] + e[4], t[i + 1] = s * e[1] + n * e[3] + e[5];
    }
    static applyTransformToBezier(t, e, i = 0) {
      const s = e[0], n = e[1], r = e[2], a = e[3], o = e[4], l = e[5];
      for (let h = 0; h < 6; h += 2) {
        const c = t[i + h], d = t[i + h + 1];
        t[i + h] = c * s + d * r + o, t[i + h + 1] = c * n + d * a + l;
      }
    }
    static applyInverseTransform(t, e) {
      const i = t[0], s = t[1], n = e[0] * e[3] - e[1] * e[2];
      t[0] = (i * e[3] - s * e[2] + e[2] * e[5] - e[4] * e[3]) / n, t[1] = (-i * e[1] + s * e[0] + e[4] * e[1] - e[5] * e[0]) / n;
    }
    static axialAlignedBoundingBox(t, e, i) {
      const s = e[0], n = e[1], r = e[2], a = e[3], o = e[4], l = e[5], h = t[0], c = t[1], d = t[2], p = t[3];
      let m = s * h + o, b = m, y = s * d + o, w = y, v = a * c + l, E = v, _ = a * p + l, S = _;
      if (n !== 0 || r !== 0) {
        const T = n * h, M = n * d, I = r * c, F = r * p;
        m += I, w += I, y += F, b += F, v += T, S += T, _ += M, E += M;
      }
      i[0] = Math.min(i[0], m, y, b, w), i[1] = Math.min(i[1], v, _, E, S), i[2] = Math.max(i[2], m, y, b, w), i[3] = Math.max(i[3], v, _, E, S);
    }
    static inverseTransform(t) {
      const e = t[0] * t[3] - t[1] * t[2];
      return [
        t[3] / e,
        -t[1] / e,
        -t[2] / e,
        t[0] / e,
        (t[2] * t[5] - t[4] * t[3]) / e,
        (t[4] * t[1] - t[5] * t[0]) / e
      ];
    }
    static singularValueDecompose2dScale(t, e) {
      const i = t[0], s = t[1], n = t[2], r = t[3], a = i ** 2 + s ** 2, o = i * n + s * r, l = n ** 2 + r ** 2, h = (a + l) / 2, c = Math.sqrt(h ** 2 - (a * l - o ** 2));
      e[0] = Math.sqrt(h + c || 1), e[1] = Math.sqrt(h - c || 1);
    }
    static normalizeRect(t) {
      const e = t.slice(0);
      return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
    }
    static intersect(t, e) {
      const i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), s = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
      if (i > s) return null;
      const n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), r = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
      return n > r ? null : [
        i,
        n,
        s,
        r
      ];
    }
    static pointBoundingBox(t, e, i) {
      i[0] = Math.min(i[0], t), i[1] = Math.min(i[1], e), i[2] = Math.max(i[2], t), i[3] = Math.max(i[3], e);
    }
    static rectBoundingBox(t, e, i, s, n) {
      n[0] = Math.min(n[0], t, i), n[1] = Math.min(n[1], e, s), n[2] = Math.max(n[2], t, i), n[3] = Math.max(n[3], e, s);
    }
    static #t(t, e, i, s, n, r, a, o, l, h) {
      if (l <= 0 || l >= 1) return;
      const c = 1 - l, d = l * l, p = d * l, m = c * (c * (c * t + 3 * l * e) + 3 * d * i) + p * s, b = c * (c * (c * n + 3 * l * r) + 3 * d * a) + p * o;
      h[0] = Math.min(h[0], m), h[1] = Math.min(h[1], b), h[2] = Math.max(h[2], m), h[3] = Math.max(h[3], b);
    }
    static #e(t, e, i, s, n, r, a, o, l, h, c, d) {
      if (Math.abs(l) < 1e-12) {
        Math.abs(h) >= 1e-12 && this.#t(t, e, i, s, n, r, a, o, -c / h, d);
        return;
      }
      const p = h ** 2 - 4 * c * l;
      if (p < 0) return;
      const m = Math.sqrt(p), b = 2 * l;
      this.#t(t, e, i, s, n, r, a, o, (-h + m) / b, d), this.#t(t, e, i, s, n, r, a, o, (-h - m) / b, d);
    }
    static bezierBoundingBox(t, e, i, s, n, r, a, o, l) {
      l[0] = Math.min(l[0], t, a), l[1] = Math.min(l[1], e, o), l[2] = Math.max(l[2], t, a), l[3] = Math.max(l[3], e, o), this.#e(t, i, n, a, e, s, r, o, 3 * (-t + 3 * (i - n) + a), 6 * (t - 2 * i + n), 3 * (i - t), l), this.#e(t, i, n, a, e, s, r, o, 3 * (-e + 3 * (s - r) + o), 6 * (e - 2 * s + r), 3 * (s - e), l);
    }
  };
  function Dn(u) {
    return decodeURIComponent(escape(u));
  }
  let Si = null, fs = null;
  Fn = function(u) {
    return Si || (Si = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, fs = /* @__PURE__ */ new Map([
      [
        "\uFB05",
        "\u017Ft"
      ]
    ])), u.replaceAll(Si, (t, e, i) => e ? e.normalize("NFKC") : fs.get(i));
  };
  js = function() {
    if (typeof crypto.randomUUID == "function") return crypto.randomUUID();
    const u = new Uint8Array(32);
    return crypto.getRandomValues(u), In(u);
  };
  function Ln(u, t, e) {
    if (!Array.isArray(e) || e.length < 2) return false;
    const [i, s, ...n] = e;
    if (!u(i) && !Number.isInteger(i) || !t(s)) return false;
    const r = n.length;
    let a = true;
    switch (s.name) {
      case "XYZ":
        if (r < 2 || r > 3) return false;
        break;
      case "Fit":
      case "FitB":
        return r === 0;
      case "FitH":
      case "FitBH":
      case "FitV":
      case "FitBV":
        if (r > 1) return false;
        break;
      case "FitR":
        if (r !== 4) return false;
        a = false;
        break;
      default:
        return false;
    }
    for (const o of n) if (!(typeof o == "number" || a && o === null)) return false;
    return true;
  }
  Re = () => [];
  Vi = () => /* @__PURE__ */ new Map();
  Li = () => /* @__PURE__ */ Object.create(null);
  nt = function(u, t, e) {
    return Math.min(Math.max(u, t), e);
  };
  class Be {
    constructor({ viewBox: t, userUnit: e, scale: i, rotation: s, offsetX: n = 0, offsetY: r = 0, dontFlip: a = false }) {
      this.viewBox = t, this.userUnit = e, this.scale = i, this.rotation = s, this.offsetX = n, this.offsetY = r, i *= e;
      const o = (t[2] + t[0]) / 2, l = (t[3] + t[1]) / 2;
      let h, c, d, p;
      switch (s %= 360, s < 0 && (s += 360), s) {
        case 180:
          h = -1, c = 0, d = 0, p = 1;
          break;
        case 90:
          h = 0, c = 1, d = 1, p = 0;
          break;
        case 270:
          h = 0, c = -1, d = -1, p = 0;
          break;
        case 0:
          h = 1, c = 0, d = 0, p = -1;
          break;
        default:
          throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
      }
      a && (d = -d, p = -p);
      let m, b, y, w;
      h === 0 ? (m = Math.abs(l - t[1]) * i + n, b = Math.abs(o - t[0]) * i + r, y = (t[3] - t[1]) * i, w = (t[2] - t[0]) * i) : (m = Math.abs(o - t[0]) * i + n, b = Math.abs(l - t[1]) * i + r, y = (t[2] - t[0]) * i, w = (t[3] - t[1]) * i), this.transform = [
        h * i,
        c * i,
        d * i,
        p * i,
        m - h * i * o - d * i * l,
        b - c * i * o - p * i * l
      ], this.width = y, this.height = w;
    }
    get rawDims() {
      const t = this.viewBox;
      return $(this, "rawDims", {
        pageWidth: t[2] - t[0],
        pageHeight: t[3] - t[1],
        pageX: t[0],
        pageY: t[1]
      });
    }
    clone({ scale: t = this.scale, rotation: e = this.rotation, offsetX: i = this.offsetX, offsetY: s = this.offsetY, dontFlip: n = false } = {}) {
      return new Be({
        viewBox: this.viewBox.slice(),
        userUnit: this.userUnit,
        scale: t,
        rotation: e,
        offsetX: i,
        offsetY: s,
        dontFlip: n
      });
    }
    convertToViewportPoint(t, e) {
      const i = [
        t,
        e
      ];
      return D.applyTransform(i, this.transform), i;
    }
    convertToPdfPoint(t, e) {
      const i = [
        t,
        e
      ];
      return D.applyInverseTransform(i, this.transform), i;
    }
  }
  class Ie {
    static textContent(t) {
      const e = [], i = {
        items: e,
        styles: /* @__PURE__ */ Object.create(null)
      };
      function s(n) {
        if (!n) return;
        let r = null;
        const a = n.name;
        if (a === "#text") r = n.value;
        else if (Ie.shouldBuildText(a)) n?.attributes?.textContent ? r = n.attributes.textContent : n.value && (r = n.value);
        else return;
        if (r !== null && e.push({
          str: r
        }), !!n.children) for (const o of n.children) s(o);
      }
      return s(t), i;
    }
    static shouldBuildText(t) {
      return !(t === "textarea" || t === "input" || t === "option" || t === "select");
    }
  }
  zs = class {
    static setupStorage(t, e, i, s, n) {
      const r = s.getValue(e, {
        value: null
      });
      switch (i.name) {
        case "textarea":
          if (r.value !== null && (t.textContent = r.value), n === "print") break;
          t.addEventListener("input", (a) => {
            s.setValue(e, {
              value: a.target.value
            });
          });
          break;
        case "input":
          if (i.attributes.type === "radio" || i.attributes.type === "checkbox") {
            if (r.value === i.attributes.xfaOn ? t.setAttribute("checked", true) : r.value === i.attributes.xfaOff && t.removeAttribute("checked"), n === "print") break;
            t.addEventListener("change", (a) => {
              s.setValue(e, {
                value: a.target.checked ? a.target.getAttribute("xfaOn") : a.target.getAttribute("xfaOff")
              });
            });
          } else {
            if (r.value !== null && t.setAttribute("value", r.value), n === "print") break;
            t.addEventListener("input", (a) => {
              s.setValue(e, {
                value: a.target.value
              });
            });
          }
          break;
        case "select":
          if (r.value !== null) {
            t.setAttribute("value", r.value);
            for (const a of i.children) a.attributes.value === r.value ? a.attributes.selected = true : Object.hasOwn(a.attributes, "selected") && delete a.attributes.selected;
          }
          t.addEventListener("input", (a) => {
            const o = a.target.options, l = o.selectedIndex === -1 ? "" : o[o.selectedIndex].value;
            s.setValue(e, {
              value: l
            });
          });
          break;
      }
    }
    static setAttributes({ html: t, element: e, storage: i = null, intent: s, linkService: n }) {
      const { attributes: r } = e, a = t instanceof HTMLAnchorElement;
      r.type === "radio" && (r.name = `${r.name}-${s}`);
      for (const [o, l] of Object.entries(r)) if (l != null) switch (o) {
        case "class":
          l.length && t.setAttribute(o, l.join(" "));
          break;
        case "dataId":
          break;
        case "id":
          t.setAttribute("data-element-id", l);
          break;
        case "style":
          Object.assign(t.style, l);
          break;
        case "textContent":
          t.textContent = l;
          break;
        default:
          (!a || o !== "href" && o !== "newWindow") && t.setAttribute(o, l);
      }
      a && n.addLinkAttributes(t, r.href, r.newWindow), i && r.dataId && this.setupStorage(t, r.dataId, e, i);
    }
    static render(t) {
      const e = t.annotationStorage, i = t.linkService, s = t.xfaHtml, n = t.intent || "display", r = document.createElement(s.name);
      s.attributes && this.setAttributes({
        html: r,
        element: s,
        intent: n,
        linkService: i
      });
      const a = n !== "richText", o = t.div;
      if (o.append(r), t.viewport) {
        const c = `matrix(${t.viewport.transform.join(",")})`;
        o.style.transform = c;
      }
      a && o.setAttribute("class", "xfaLayer xfaFont");
      const l = [];
      if (s.children.length === 0) {
        if (s.value) {
          const c = document.createTextNode(s.value);
          r.append(c), a && Ie.shouldBuildText(s.name) && l.push(c);
        }
        return {
          textDivs: l
        };
      }
      const h = [
        [
          s,
          -1,
          r
        ]
      ];
      for (; h.length > 0; ) {
        const [c, d, p] = h.at(-1);
        if (d + 1 === c.children.length) {
          h.pop();
          continue;
        }
        const m = c.children[++h.at(-1)[1]];
        if (m === null) continue;
        const { name: b } = m;
        if (b === "#text") {
          const w = document.createTextNode(m.value);
          l.push(w), p.append(w);
          continue;
        }
        const y = m?.attributes?.xmlns ? document.createElementNS(m.attributes.xmlns, b) : document.createElement(b);
        if (p.append(y), m.attributes && this.setAttributes({
          html: y,
          element: m,
          storage: e,
          intent: n,
          linkService: i
        }), m.children?.length > 0) h.push([
          m,
          -1,
          y
        ]);
        else if (m.value) {
          const w = document.createTextNode(m.value);
          a && Ie.shouldBuildText(b) && l.push(w), y.append(w);
        }
      }
      for (const c of o.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) c.setAttribute("readOnly", true);
      return {
        textDivs: l
      };
    }
    static update(t) {
      const e = `matrix(${t.viewport.transform.join(",")})`;
      t.div.style.transform = e, t.div.hidden = false;
    }
    static getPageViewport(t, { scale: e = 1, rotation: i = 0 }) {
      const { width: s, height: n } = t.attributes.style;
      return new Be({
        viewBox: [
          0,
          0,
          parseInt(s, 10),
          parseInt(n, 10)
        ],
        userUnit: 1,
        scale: e,
        rotation: i
      });
    }
  };
  ye = class {
    static CSS = 96;
    static PDF = 72;
    static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
  };
  Wi = async function(u, t = "text") {
    if (_e(u, document.baseURI)) {
      const e = await fetch(u);
      if (!e.ok) throw new Error(e.statusText);
      switch (t) {
        case "blob":
          return e.blob();
        case "bytes":
          return e.bytes();
        case "json":
          return e.json();
      }
      return e.text();
    }
    return new Promise((e, i) => {
      const s = new XMLHttpRequest();
      s.open("GET", u, true), s.responseType = t === "bytes" ? "arraybuffer" : t, s.onreadystatechange = () => {
        if (s.readyState === XMLHttpRequest.DONE) {
          if (s.status === 200 || s.status === 0) {
            switch (t) {
              case "bytes":
                e(new Uint8Array(s.response));
                return;
              case "blob":
              case "json":
                e(s.response);
                return;
            }
            e(s.responseText);
            return;
          }
          i(new Error(s.statusText));
        }
      }, s.send(null);
    });
  };
  Xi = class extends oe {
    constructor(t, e = 0) {
      super(t, "RenderingCancelledException"), this.extraDelay = e;
    }
  };
  li = function(u) {
    const t = u.length;
    let e = 0;
    for (; e < t && u[e].trim() === ""; ) e++;
    return u.substring(e, e + 5).toLowerCase() === "data:";
  };
  Yi = function(u) {
    return typeof u == "string" && /\.pdf$/i.test(u);
  };
  Rn = function(u) {
    return [u] = u.split(/[#?]/, 1), Ii(u);
  };
  Bn = function(u, t = "document.pdf") {
    if (typeof u != "string") return t;
    if (li(u)) return z('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
    const i = ((a) => {
      try {
        return new URL(a);
      } catch {
      }
      try {
        return new URL(decodeURIComponent(a));
      } catch {
      }
      try {
        return new URL(a, "https://foo.bar");
      } catch {
      }
      try {
        return new URL(decodeURIComponent(a), "https://foo.bar");
      } catch {
      }
      return null;
    })(u);
    if (!i) return t;
    const s = (a) => {
      try {
        let o = decodeURIComponent(a);
        return o.includes("/") && (o = Ii(o), o.length === 4 && n.test(o)) ? a : o;
      } catch {
        return a;
      }
    }, n = /\.pdf$/i, r = Ii(i.pathname);
    if (n.test(r)) return s(r);
    if (i.searchParams.size > 0) {
      const a = (l) => [
        ...l
      ].findLast((h) => n.test(h)), o = a(i.searchParams.values()) ?? a(i.searchParams.keys());
      if (o) return s(o);
    }
    if (i.hash) {
      const o = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i.hash);
      if (o) return s(o[0]);
    }
    return t;
  };
  class ps {
    #t = /* @__PURE__ */ new Map();
    times = [];
    time(t) {
      this.#t.has(t) && z(`Timer is already running for ${t}`), this.#t.set(t, Date.now());
    }
    timeEnd(t) {
      this.#t.has(t) || z(`Timer has not been started for ${t}`), this.times.push({
        name: t,
        start: this.#t.get(t),
        end: Date.now()
      }), this.#t.delete(t);
    }
    toString() {
      const t = Math.max(...this.times.map((e) => e.name.length));
      return this.times.map((e) => `${e.name.padEnd(t)} ${e.end - e.start}ms
`).join("");
    }
  }
  function _e(u, t) {
    const e = t ? URL.parse(u, t) : URL.parse(u);
    return /https?:/.test(e?.protocol ?? "");
  }
  Ft = function(u) {
    u.preventDefault();
  };
  lt = function(u) {
    u.preventDefault(), u.stopPropagation();
  };
  Ri = class {
    static #t;
    static toDateObject(t) {
      if (t instanceof Date) return t;
      if (!t || typeof t != "string") return null;
      this.#t ||= new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+\\-])?(\\d{2})?'?(\\d{2})?'?");
      const e = this.#t.exec(t);
      if (!e) return null;
      const i = parseInt(e[1], 10);
      let s = parseInt(e[2], 10);
      s = s >= 1 && s <= 12 ? s - 1 : 0;
      let n = parseInt(e[3], 10);
      n = n >= 1 && n <= 31 ? n : 1;
      let r = parseInt(e[4], 10);
      r = r >= 0 && r <= 23 ? r : 0;
      let a = parseInt(e[5], 10);
      a = a >= 0 && a <= 59 ? a : 0;
      let o = parseInt(e[6], 10);
      o = o >= 0 && o <= 59 ? o : 0;
      const l = e[7] || "Z";
      let h = parseInt(e[8], 10);
      h = h >= 0 && h <= 23 ? h : 0;
      let c = parseInt(e[9], 10) || 0;
      return c = c >= 0 && c <= 59 ? c : 0, l === "-" ? (r += h, a += c) : l === "+" && (r -= h, a -= c), new Date(Date.UTC(i, s, n, r, a, o));
    }
  };
  Oe = function(u) {
    if (u.startsWith("#")) {
      const e = u.slice(1);
      return [
        parseInt(e.slice(0, 2), 16),
        parseInt(e.slice(2, 4), 16),
        parseInt(e.slice(4, 6), 16),
        e.length >= 8 ? parseInt(e.slice(6, 8), 16) / 255 : 1
      ];
    }
    if (u.startsWith("rgb(")) {
      const [e, i, s] = u.slice(4, -1).split(",").map((n) => parseInt(n, 10));
      return [
        e,
        i,
        s,
        1
      ];
    }
    if (u.startsWith("rgba(")) {
      const e = u.slice(5, -1).split(",");
      return [
        parseInt(e[0], 10),
        parseInt(e[1], 10),
        parseInt(e[2], 10),
        parseFloat(e[3])
      ];
    }
    const t = u.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+|none))?\)$/);
    return t ? [
      Math.round(parseFloat(t[1]) * 255),
      Math.round(parseFloat(t[2]) * 255),
      Math.round(parseFloat(t[3]) * 255),
      t[4] !== void 0 && t[4] !== "none" ? parseFloat(t[4]) : 1
    ] : null;
  };
  Ne = function(u) {
    const t = Oe(u);
    return t ? t.slice(0, 3) : (z(`Not a valid color format: "${u}"`), [
      0,
      0,
      0
    ]);
  };
  function On(u) {
    const t = document.createElement("span");
    t.style.visibility = "hidden", t.style.colorScheme = "only light", document.body.append(t);
    for (const e of u.keys()) {
      t.style.color = e;
      const i = window.getComputedStyle(t).color;
      u.set(e, Ne(i));
    }
    t.remove();
  }
  function it(u) {
    const { a: t, b: e, c: i, d: s, e: n, f: r } = u.getTransform();
    return [
      t,
      e,
      i,
      s,
      n,
      r
    ];
  }
  function Nt(u) {
    const { a: t, b: e, c: i, d: s, e: n, f: r } = u.getTransform().invertSelf();
    return [
      t,
      e,
      i,
      s,
      n,
      r
    ];
  }
  re = function(u, t, e = false, i = true) {
    if (t instanceof Be) {
      const { pageWidth: s, pageHeight: n } = t.rawDims, { style: r } = u, a = `round(down, var(--total-scale-factor) * ${s}px, var(--scale-round-x))`, o = `round(down, var(--total-scale-factor) * ${n}px, var(--scale-round-y))`;
      !e || t.rotation % 180 === 0 ? (r.width = a, r.height = o) : (r.width = o, r.height = a);
    }
    i && u.setAttribute("data-main-rotation", t.rotation);
  };
  jt = class {
    constructor() {
      const { pixelRatio: t } = jt;
      this.sx = t, this.sy = t;
    }
    get scaled() {
      return this.sx !== 1 || this.sy !== 1;
    }
    get symmetric() {
      return this.sx === this.sy;
    }
    limitCanvas(t, e, i, s, n = -1) {
      let r = 1 / 0, a = 1 / 0, o = 1 / 0;
      i = jt.capPixels(i, n), i > 0 && (r = Math.sqrt(i / (t * e))), s !== -1 && (a = s / t, o = s / e);
      const l = Math.min(r, a, o);
      return this.sx > l || this.sy > l ? (this.sx = l, this.sy = l, true) : false;
    }
    static get pixelRatio() {
      return globalThis.devicePixelRatio || 1;
    }
    static capPixels(t, e) {
      if (e >= 0) {
        const i = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100));
        return t > 0 ? Math.min(t, i) : i;
      }
      return t;
    }
  };
  Bi = [
    "image/apng",
    "image/avif",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/webp",
    "image/x-icon"
  ];
  class Nn {
    static get isDarkMode() {
      return $(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
    }
  }
  Un = class {
    static get commentForegroundColor() {
      const t = document.createElement("span");
      t.classList.add("comment", "sidebar");
      const { style: e } = t;
      e.width = e.height = "0", e.display = "none", e.color = "var(--comment-fg-color)", document.body.append(t);
      const { color: i } = window.getComputedStyle(t);
      return t.remove(), $(this, "commentForegroundColor", Ne(i));
    }
  };
  Hn = function(u, t) {
    t = nt(t ?? 1, 0, 1);
    const e = 255 * (1 - t);
    return u.map((i) => Math.round(i * t + e));
  };
  function gs(u, t) {
    const e = u[0] / 255, i = u[1] / 255, s = u[2] / 255, n = Math.max(e, i, s), r = Math.min(e, i, s), a = (n + r) / 2;
    if (n === r) t[0] = t[1] = 0;
    else {
      const o = n - r;
      switch (t[1] = a < 0.5 ? o / (n + r) : o / (2 - n - r), n) {
        case e:
          t[0] = ((i - s) / o + (i < s ? 6 : 0)) * 60;
          break;
        case i:
          t[0] = ((s - e) / o + 2) * 60;
          break;
        case s:
          t[0] = ((e - i) / o + 4) * 60;
          break;
      }
    }
    t[2] = a;
  }
  function Oi(u, t) {
    const e = u[0], i = u[1], s = u[2], n = (1 - Math.abs(2 * s - 1)) * i, r = n * (1 - Math.abs(e / 60 % 2 - 1)), a = s - n / 2;
    switch (Math.floor(e / 60)) {
      case 0:
        t[0] = n + a, t[1] = r + a, t[2] = a;
        break;
      case 1:
        t[0] = r + a, t[1] = n + a, t[2] = a;
        break;
      case 2:
        t[0] = a, t[1] = n + a, t[2] = r + a;
        break;
      case 3:
        t[0] = a, t[1] = r + a, t[2] = n + a;
        break;
      case 4:
        t[0] = r + a, t[1] = a, t[2] = n + a;
        break;
      case 5:
      case 6:
        t[0] = n + a, t[1] = a, t[2] = r + a;
        break;
    }
  }
  function ms(u) {
    return u <= 0.03928 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4;
  }
  function bs(u, t, e) {
    Oi(u, e), e.map(ms);
    const i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
    Oi(t, e), e.map(ms);
    const s = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
    return i > s ? (i + 0.05) / (s + 0.05) : (s + 0.05) / (i + 0.05);
  }
  const ys = /* @__PURE__ */ new Map();
  Gn = function(u, t) {
    const e = u[0] + u[1] * 256 + u[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
    let i = ys.get(e);
    if (i) return i;
    const s = new Float32Array(9), n = s.subarray(0, 3), r = s.subarray(3, 6);
    gs(u, r);
    const a = s.subarray(6, 9);
    gs(t, a);
    const o = a[2] < 0.5, l = o ? 12 : 4.5;
    if (r[2] = o ? Math.sqrt(r[2]) : 1 - Math.sqrt(1 - r[2]), bs(r, a, n) < l) {
      let h, c;
      o ? (h = r[2], c = 1) : (h = 0, c = r[2]);
      const d = 5e-3;
      for (; c - h > d; ) {
        const p = r[2] = (h + c) / 2;
        o === bs(r, a, n) < l ? h = p : c = p;
      }
      r[2] = o ? c : h;
    }
    return Oi(r, n), i = D.makeHexColor(Math.round(n[0] * 255), Math.round(n[1] * 255), Math.round(n[2] * 255)), ys.set(e, i), i;
  };
  Vs = function({ html: u, dir: t, className: e }, i) {
    const s = document.createDocumentFragment();
    if (typeof u == "string") {
      const n = document.createElement("p");
      n.dir = t || "auto";
      const r = u.split(/\r\n?|\n/);
      for (let a = 0, o = r.length; a < o; ++a) {
        const l = r[a];
        n.append(document.createTextNode(l)), a < o - 1 && n.append(document.createElement("br"));
      }
      s.append(n);
    } else zs.render({
      xfaHtml: u,
      div: s,
      intent: "richText"
    });
    s.firstElementChild.classList.add("richText", e), i.append(s);
  };
  function Ws(u) {
    const t = new Path2D();
    if (!u) return t;
    for (let e = 0, i = u.length; e < i; ) switch (u[e++]) {
      case xe.moveTo:
        t.moveTo(u[e++], u[e++]);
        break;
      case xe.lineTo:
        t.lineTo(u[e++], u[e++]);
        break;
      case xe.curveTo:
        t.bezierCurveTo(u[e++], u[e++], u[e++], u[e++], u[e++], u[e++]);
        break;
      case xe.quadraticCurveTo:
        t.quadraticCurveTo(u[e++], u[e++], u[e++], u[e++]);
        break;
      case xe.closePath:
        t.closePath();
        break;
      default:
        z(`Unrecognized drawing path operator: ${u[e - 1]}`);
        break;
    }
    return t;
  }
  class Te {
    #t = null;
    #e = null;
    #i;
    #s = null;
    #n = null;
    #a = null;
    #r = null;
    #o = null;
    static #h = null;
    constructor(t) {
      this.#i = t, Te.#h ||= Object.freeze({
        freetext: "pdfjs-editor-remove-freetext-button",
        highlight: "pdfjs-editor-remove-highlight-button",
        ink: "pdfjs-editor-remove-ink-button",
        stamp: "pdfjs-editor-remove-stamp-button",
        signature: "pdfjs-editor-remove-signature-button"
      });
    }
    render() {
      const t = this.#t = document.createElement("div");
      t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
      const e = this.#i._uiManager._signal;
      e instanceof AbortSignal && !e.aborted && (t.addEventListener("contextmenu", Ft, {
        signal: e
      }), t.addEventListener("pointerdown", Te.#l, {
        signal: e
      }));
      const i = this.#s = document.createElement("div");
      i.className = "buttons", t.append(i);
      const s = this.#i.toolbarPosition;
      if (s) {
        const { style: n } = t, r = this.#i._uiManager.direction === "ltr" ? 1 - s[0] : s[0];
        n.insetInlineEnd = `${100 * r}%`, n.top = `calc(${100 * s[1]}% + var(--editor-toolbar-vert-offset))`;
      }
      return t;
    }
    get div() {
      return this.#t;
    }
    static #l(t) {
      t.stopPropagation();
    }
    #u(t) {
      this.#i._focusEventsAllowed = false, lt(t);
    }
    #d(t) {
      this.#i._focusEventsAllowed = true, lt(t);
    }
    #p(t) {
      const e = this.#i._uiManager._signal;
      return !(e instanceof AbortSignal) || e.aborted ? false : (t.addEventListener("focusin", this.#u.bind(this), {
        capture: true,
        signal: e
      }), t.addEventListener("focusout", this.#d.bind(this), {
        capture: true,
        signal: e
      }), t.addEventListener("contextmenu", Ft, {
        signal: e
      }), true);
    }
    hide() {
      this.#t.classList.add("hidden"), this.#e?.hideDropdown();
    }
    show() {
      this.#t.classList.remove("hidden"), this.#n?.shown(), this.#a?.shown();
    }
    addDeleteButton() {
      const { editorType: t, _uiManager: e } = this.#i, i = document.createElement("button");
      i.classList.add("basic", "deleteButton"), i.tabIndex = 0, i.setAttribute("data-l10n-id", Te.#h[t]), this.#p(i) && i.addEventListener("click", (s) => {
        e.delete();
      }, {
        signal: e._signal
      }), this.#s.append(i);
    }
    get #m() {
      const t = document.createElement("div");
      return t.className = "divider", t;
    }
    async addAltText(t) {
      const e = await t.render();
      this.#p(e), this.#s.append(e, this.#m), this.#n = t;
    }
    addComment(t, e = null) {
      if (this.#a) return;
      const i = t.renderForToolbar();
      if (!i) return;
      this.#p(i);
      const s = this.#r = this.#m;
      e ? (this.#s.insertBefore(i, e), this.#s.insertBefore(s, e)) : this.#s.append(i, s), this.#a = t, t.toolbar = this;
    }
    addColorPicker(t) {
      if (this.#e) return;
      this.#e = t;
      const e = t.renderButton();
      this.#p(e), this.#s.append(e, this.#m);
    }
    async addEditSignatureButton(t) {
      const e = this.#o = await t.renderEditButton(this.#i);
      this.#p(e), this.#s.append(e, this.#m);
    }
    removeButton(t) {
      t === "comment" && (this.#a?.removeToolbarCommentButton(), this.#a = null, this.#r?.remove(), this.#r = null);
    }
    async addButton(t, e) {
      switch (t) {
        case "colorPicker":
          e && this.addColorPicker(e);
          break;
        case "altText":
          e && await this.addAltText(e);
          break;
        case "editSignature":
          e && await this.addEditSignatureButton(e);
          break;
        case "delete":
          this.addDeleteButton();
          break;
        case "comment":
          e && this.addComment(e);
          break;
      }
    }
    async addButtonBefore(t, e, i) {
      if (!e && t === "comment") return;
      const s = this.#s.querySelector(i);
      s && t === "comment" && this.addComment(e, s);
    }
    updateEditSignatureButton(t) {
      this.#o && (this.#o.title = t);
    }
    remove() {
      this.#t.remove(), this.#e?.destroy(), this.#e = null;
    }
  }
  class $n {
    #t = null;
    #e = null;
    #i;
    constructor(t) {
      this.#i = t;
    }
    #s() {
      const t = this.#e = document.createElement("div");
      t.className = "editToolbar", t.setAttribute("role", "toolbar");
      const e = this.#i._signal;
      e instanceof AbortSignal && !e.aborted && t.addEventListener("contextmenu", Ft, {
        signal: e
      });
      const i = this.#t = document.createElement("div");
      return i.className = "buttons", t.append(i), this.#i.hasCommentManager() && this.#a("commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
        this.#i.commentSelection("floating_button");
      }), this.#a("highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
        this.#i.highlightSelection("floating_button");
      }), t;
    }
    #n(t, e) {
      let i = 0, s = 0;
      for (const n of t) {
        const r = n.y + n.height;
        if (r < i) continue;
        const a = n.x + (e ? n.width : 0);
        if (r > i) {
          s = a, i = r;
          continue;
        }
        e ? a > s && (s = a) : a < s && (s = a);
      }
      return [
        e ? 1 - s : s,
        i
      ];
    }
    show(t, e, i) {
      const [s, n] = this.#n(e, i), { style: r } = this.#e ||= this.#s();
      t.append(this.#e), r.insetInlineEnd = `${100 * s}%`, r.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`;
    }
    hide() {
      this.#e.remove();
    }
    #a(t, e, i, s) {
      const n = document.createElement("button");
      n.classList.add("basic", t), n.tabIndex = 0, n.setAttribute("data-l10n-id", e);
      const r = document.createElement("span");
      n.append(r), r.className = "visuallyHidden", r.setAttribute("data-l10n-id", i);
      const a = this.#i._signal;
      a instanceof AbortSignal && !a.aborted && (n.addEventListener("contextmenu", Ft, {
        signal: a
      }), n.addEventListener("click", s, {
        signal: a
      })), this.#t.append(n);
    }
  }
  const jn = "068f09d6-5b37-4f77-a97a-f8ff4f253b68", Ci = Object.freeze({
    internal: jn
  });
  function Xs(u, t, e) {
    for (const i of e) t.addEventListener(i, u[i].bind(u));
  }
  class Q {
    static #t = NaN;
    static #e = null;
    static #i = NaN;
    static #s = null;
    static initializeAndAddPointerId(t) {
      (Q.#e ||= /* @__PURE__ */ new Set()).add(t);
    }
    static setPointer(t, e) {
      Q.#t ||= e, Q.#s ??= t;
    }
    static setTimeStamp(t) {
      Q.#i = t;
    }
    static isSamePointerId(t) {
      return Q.#t === t;
    }
    static isSamePointerIdOrRemove(t) {
      return Q.#t === t ? true : (Q.#e?.delete(t), false);
    }
    static isSamePointerType(t) {
      return Q.#s === t;
    }
    static isInitializedAndDifferentPointerType(t) {
      return Q.#s !== null && !Q.isSamePointerType(t);
    }
    static isSameTimeStamp(t) {
      return Q.#i === t;
    }
    static isUsingMultiplePointers() {
      return Q.#e?.size >= 1;
    }
    static clearPointerType() {
      Q.#s = null;
    }
    static clearPointerIds() {
      Q.#t = NaN, Q.#e = null;
    }
    static clearTimeStamp() {
      Q.#i = NaN;
    }
  }
  class zn {
    #t = 0;
    get id() {
      return `${Pe}${this.#t++}`;
    }
  }
  class qi {
    #t = js();
    #e = 0;
    #i = null;
    static get _isSVGFittingCanvas() {
      const t = `data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="${St}"><rect width="1" height="1" style="fill:red;"/></svg>`, i = new OffscreenCanvas(1, 3).getContext("2d", {
        willReadFrequently: true
      }), s = new Image();
      s.src = t;
      const n = s.decode().then(() => (i.drawImage(s, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(i.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
      return $(this, "_isSVGFittingCanvas", n);
    }
    async #s(t, e) {
      this.#i ||= /* @__PURE__ */ new Map();
      let i = this.#i.get(t);
      if (i === null) return null;
      if (i?.bitmap) return i.refCounter += 1, i;
      try {
        i ||= {
          bitmap: null,
          id: `image_${this.#t}_${this.#e++}`,
          refCounter: 0,
          isSvg: false
        };
        let s;
        if (typeof e == "string" ? (i.url = e, s = await Wi(e, "blob")) : e instanceof File ? s = i.file = e : e instanceof Blob && (s = e), s.type === "image/svg+xml") {
          const n = qi._isSVGFittingCanvas, r = new FileReader(), a = new Image(), o = new Promise((l, h) => {
            a.onload = () => {
              i.bitmap = a, i.isSvg = true, l();
            }, r.onload = async () => {
              const c = i.svgUrl = r.result;
              a.src = await n ? `${c}#svgView(preserveAspectRatio(none))` : c;
            }, a.onerror = r.onerror = h;
          });
          r.readAsDataURL(s), await o;
        } else i.bitmap = await createImageBitmap(s);
        i.refCounter = 1;
      } catch (s) {
        z(s), i = null;
      }
      return this.#i.set(t, i), i && this.#i.set(i.id, i), i;
    }
    async getFromFile(t) {
      const { lastModified: e, name: i, size: s, type: n } = t;
      return this.#s(`${e}_${i}_${s}_${n}`, t);
    }
    async getFromUrl(t) {
      return this.#s(t, t);
    }
    async getFromBlob(t, e) {
      const i = await e;
      return this.#s(t, i);
    }
    async getFromId(t) {
      this.#i ||= /* @__PURE__ */ new Map();
      const e = this.#i.get(t);
      if (!e) return null;
      if (e.bitmap) return e.refCounter += 1, e;
      if (e.file) return this.getFromFile(e.file);
      if (e.blobPromise) {
        const { blobPromise: i } = e;
        return delete e.blobPromise, this.getFromBlob(e.id, i);
      }
      return this.getFromUrl(e.url);
    }
    getFromCanvas(t, e) {
      this.#i ||= /* @__PURE__ */ new Map();
      let i = this.#i.get(t);
      if (i?.bitmap) return i.refCounter += 1, i;
      const s = new OffscreenCanvas(e.width, e.height);
      return s.getContext("2d").drawImage(e, 0, 0), i = {
        bitmap: s.transferToImageBitmap(),
        id: `image_${this.#t}_${this.#e++}`,
        refCounter: 1,
        isSvg: false
      }, this.#i.set(t, i), this.#i.set(i.id, i), i;
    }
    getSvgUrl(t) {
      const e = this.#i.get(t);
      return e?.isSvg ? e.svgUrl : null;
    }
    deleteId(t) {
      this.#i ||= /* @__PURE__ */ new Map();
      const e = this.#i.get(t);
      if (!e || (e.refCounter -= 1, e.refCounter !== 0)) return;
      const { bitmap: i } = e;
      if (!e.url && !e.file) {
        const s = new OffscreenCanvas(i.width, i.height);
        s.getContext("bitmaprenderer").transferFromImageBitmap(i), e.blobPromise = s.convertToBlob();
      }
      i.close?.(), e.bitmap = null;
    }
    isValidId(t) {
      return t.startsWith(`image_${this.#t}_`);
    }
  }
  class Vn {
    #t = [];
    #e = false;
    #i;
    #s = -1;
    constructor(t = 128) {
      this.#i = t;
    }
    add({ cmd: t, undo: e, post: i, mustExec: s, type: n = NaN, overwriteIfSameType: r = false, keepUndo: a = false }) {
      if (s && t(), this.#e) return;
      const o = {
        cmd: t,
        undo: e,
        post: i,
        type: n
      };
      if (this.#s === -1) {
        this.#t.length > 0 && (this.#t.length = 0), this.#s = 0, this.#t.push(o);
        return;
      }
      if (r && this.#t[this.#s].type === n) {
        a && (o.undo = this.#t[this.#s].undo), this.#t[this.#s] = o;
        return;
      }
      const l = this.#s + 1;
      l === this.#i ? this.#t.splice(0, 1) : (this.#s = l, l < this.#t.length && this.#t.splice(l)), this.#t.push(o);
    }
    undo() {
      if (this.#s === -1) return;
      this.#e = true;
      const { undo: t, post: e } = this.#t[this.#s];
      t(), e?.(), this.#e = false, this.#s -= 1;
    }
    redo() {
      if (this.#s < this.#t.length - 1) {
        this.#s += 1, this.#e = true;
        const { cmd: t, post: e } = this.#t[this.#s];
        t(), e?.(), this.#e = false;
      }
    }
    hasSomethingToUndo() {
      return this.#s !== -1;
    }
    hasSomethingToRedo() {
      return this.#s < this.#t.length - 1;
    }
    cleanType(t) {
      if (this.#s !== -1) {
        for (let e = this.#s; e >= 0; e--) if (this.#t[e].type !== t) {
          this.#t.splice(e + 1, this.#s - e), this.#s = e;
          return;
        }
        this.#t.length = 0, this.#s = -1;
      }
    }
    destroy() {
      this.#t = null;
    }
  }
  class kt {
    static ALT = 1;
    static CTRL = 2;
    static META = 4;
    static SHIFT = 8;
    constructor(t) {
      this.callbacks = /* @__PURE__ */ new Map();
      const { isMac: e } = Z.platform;
      for (const [i, s, n = {}] of t) {
        const r = i.some((a) => a.startsWith("mac+"));
        for (const a of i) {
          let o = a;
          if (r) {
            const c = a.startsWith("mac+");
            if (e !== c) continue;
            c && (o = a.slice(4));
          }
          const [l, h] = kt.#t(o);
          l !== null && this.callbacks.getOrInsertComputed(l, Re).push({
            callback: s,
            options: n,
            modifiers: h
          });
        }
      }
    }
    static #t(t) {
      let e = null, i = 0;
      for (let s of t.split("+")) {
        if (s = s.trim(), !s) continue;
        const n = s.toUpperCase(), r = kt[n];
        if (r) {
          i |= r;
          continue;
        }
        if (e !== null) {
          z(`KeyboardManager: multiple keys in shortcut "${t}"`);
          break;
        }
        e = n === "SPACE" ? " " : s;
      }
      return e === null && z(`KeyboardManager: no key found in shortcut "${t}"`), [
        e,
        i
      ];
    }
    static #e(t) {
      const e = /^(?:Key([A-Z])|(?:Digit|Numpad)(\d))$/.exec(t);
      return e ? e[1]?.toLowerCase() ?? e[2] : null;
    }
    exec(t, e) {
      let i = this.callbacks.get(e.key);
      if (!i) {
        if (/^[a-z]$/i.test(e.key)) return;
        const h = kt.#e(e.code);
        if (h === null || h === e.key || (i = this.callbacks.get(h), !i)) return;
      }
      const s = (e.altKey ? kt.ALT : 0) | (e.ctrlKey ? kt.CTRL : 0) | (e.metaKey ? kt.META : 0) | (e.shiftKey ? kt.SHIFT : 0), n = i.find((h) => h.modifiers === s);
      if (!n) return;
      const { callback: r, options: { bubbles: a = false, args: o = [], checker: l = null } } = n;
      l && !l(t, e) || (r.bind(t, ...o, e)(), a || lt(e));
    }
  }
  class Ki {
    static _colorsMapping = /* @__PURE__ */ new Map([
      [
        "CanvasText",
        [
          0,
          0,
          0
        ]
      ],
      [
        "Canvas",
        [
          255,
          255,
          255
        ]
      ]
    ]);
    get _colors() {
      const t = /* @__PURE__ */ new Map([
        [
          "CanvasText",
          null
        ],
        [
          "Canvas",
          null
        ]
      ]);
      return On(t), $(this, "_colors", t);
    }
    convert(t) {
      const e = Ne(t);
      if (!window.matchMedia("(forced-colors: active)").matches) return e;
      for (const [i, s] of this._colors) if (s.every((n, r) => n === e[r])) return Ki._colorsMapping.get(i);
      return e;
    }
    getHexCode(t) {
      const e = this._colors.get(t);
      return e ? D.makeHexColor(...e) : t;
    }
  }
  Qt = class {
    #t = new AbortController();
    #e = null;
    #i = null;
    #s = /* @__PURE__ */ new Map();
    #n = /* @__PURE__ */ new Map();
    #a = null;
    #r = null;
    #o = null;
    #h = null;
    #l = new Vn();
    #u = null;
    #d = null;
    #p = null;
    #m = 0;
    #g = /* @__PURE__ */ new Set();
    #c = null;
    #f = null;
    #y = /* @__PURE__ */ new Set();
    _editorUndoBar = null;
    #A = false;
    #b = false;
    #E = false;
    #S = null;
    #w = null;
    #C = null;
    #x = null;
    #T = false;
    #M = null;
    #P = new zn();
    #k = false;
    #F = false;
    #L = false;
    #D = null;
    #R = null;
    #O = null;
    #U = null;
    #V = null;
    #_ = j.NONE;
    #v = /* @__PURE__ */ new Set();
    #B = null;
    #G = null;
    #j = null;
    #q = null;
    #X = null;
    #Y = {
      isEditing: false,
      isEmpty: true,
      hasSomethingToUndo: false,
      hasSomethingToRedo: false,
      hasSelectedEditor: false,
      hasSelectedText: false
    };
    #N = [
      0,
      0
    ];
    #z = null;
    #W = null;
    #Z = null;
    #tt = null;
    #H = null;
    static TRANSLATE_SMALL = 1;
    static TRANSLATE_BIG = 10;
    static get _keyboardManager() {
      const t = Qt.prototype, e = (r) => r.#W.contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && r.hasSomethingToControl(), i = (r, { target: a }) => {
        if (a instanceof HTMLInputElement) {
          const { type: o } = a;
          return o !== "text" && o !== "number";
        }
        return true;
      }, s = this.TRANSLATE_SMALL, n = this.TRANSLATE_BIG;
      return $(this, "_keyboardManager", new kt([
        [
          [
            "ctrl+a",
            "mac+meta+a"
          ],
          t.selectAll,
          {
            checker: i
          }
        ],
        [
          [
            "ctrl+z",
            "mac+meta+z"
          ],
          t.undo,
          {
            checker: i
          }
        ],
        [
          [
            "ctrl+y",
            "ctrl+shift+z",
            "mac+meta+shift+z",
            "ctrl+shift+Z",
            "mac+meta+shift+Z"
          ],
          t.redo,
          {
            checker: i
          }
        ],
        [
          [
            "Backspace",
            "alt+Backspace",
            "ctrl+Backspace",
            "shift+Backspace",
            "mac+Backspace",
            "mac+alt+Backspace",
            "mac+ctrl+Backspace",
            "Delete",
            "ctrl+Delete",
            "shift+Delete",
            "mac+Delete"
          ],
          t.delete,
          {
            checker: i
          }
        ],
        [
          [
            "Enter"
          ],
          t.addNewEditorFromKeyboard,
          {
            checker: (r, { target: a }) => !(a instanceof HTMLButtonElement) && r.#W.contains(a) && !r.isEnterHandled
          }
        ],
        [
          [
            "Space"
          ],
          t.addNewEditorFromKeyboard,
          {
            checker: (r, { target: a }) => !(a instanceof HTMLButtonElement) && r.#W.contains(document.activeElement)
          }
        ],
        [
          [
            "Escape"
          ],
          t.unselectAll
        ],
        [
          [
            "ArrowLeft"
          ],
          t.translateSelectedEditors,
          {
            args: [
              -s,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowLeft",
            "mac+shift+ArrowLeft"
          ],
          t.translateSelectedEditors,
          {
            args: [
              -n,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowRight"
          ],
          t.translateSelectedEditors,
          {
            args: [
              s,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowRight",
            "mac+shift+ArrowRight"
          ],
          t.translateSelectedEditors,
          {
            args: [
              n,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowUp"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              -s
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowUp",
            "mac+shift+ArrowUp"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              -n
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowDown"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              s
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowDown",
            "mac+shift+ArrowDown"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              n
            ],
            checker: e
          }
        ]
      ]));
    }
    constructor(t, e, i, s, n, r, a, o, l, h, c, d, p, m, b, y) {
      const w = this._signal = this.#t.signal;
      this.#W = t, this.#Z = e, this.#tt = i, this.#r = s, this.#u = n, this.#G = r, this.#X = o, this._eventBus = a;
      const v = {
        signal: w,
        ...Ci
      };
      a.on("editingaction", this.onEditingAction.bind(this), v), a.on("pagechanging", this.onPageChanging.bind(this), v), a.on("scalechanging", this.onScaleChanging.bind(this), v), a.on("rotationchanging", this.onRotationChanging.bind(this), v), a.on("setpreference", this.onSetPreference.bind(this), v), a.on("switchannotationeditorparams", (E) => this.updateParams(E.type, E.value), v), window.addEventListener("pointerdown", () => {
        this.#F = true;
      }, {
        capture: true,
        signal: w
      }), window.addEventListener("pointerup", () => {
        this.#F = false;
      }, {
        capture: true,
        signal: w
      }), window.addEventListener("beforeunload", this.#rt.bind(this), {
        capture: true,
        signal: w
      }), this.#lt(), this.#pt(), this.#it(), this.#o = o.annotationStorage, this.#S = o.filterFactory, this.#j = l, this.#x = h || null, this.#A = c, this.#b = d, this.#E = p, this.#V = m || null, this.viewParameters = {
        realScale: ye.PDF_TO_CSS_UNITS,
        rotation: 0
      }, this.isShiftKeyDown = false, this._editorUndoBar = b || null, this._supportsPinchToZoom = y !== false, n?.setSidebarUiManager(this);
    }
    destroy() {
      this.#H?.resolve(), this.#H = null, this.#t?.abort(), this.#t = null, this._signal = null;
      for (const t of this.#n.values()) t.destroy();
      this.#n.clear(), this.#s.clear(), this.#y.clear(), this.#U?.clear(), this.#e = null, this.#v.clear(), this.#l.destroy(), this.#r?.destroy(), this.#u?.destroy(), this.#G?.destroy(), this.#M?.hide(), this.#M = null, this.#O?.destroy(), this.#O = null, this.#i = null, this.#w && (clearTimeout(this.#w), this.#w = null), this.#z && (clearTimeout(this.#z), this.#z = null), this._editorUndoBar?.destroy(), this.#X = null;
    }
    combinedSignal(t) {
      return AbortSignal.any([
        this._signal,
        t.signal
      ]);
    }
    get mlManager() {
      return this.#V;
    }
    get useNewAltTextFlow() {
      return this.#b;
    }
    get useNewAltTextWhenAddingImage() {
      return this.#E;
    }
    get hcmFilter() {
      return $(this, "hcmFilter", this.#j ? this.#S.addHCMFilter(this.#j.foreground, this.#j.background) : "none");
    }
    get direction() {
      return $(this, "direction", getComputedStyle(this.#W).direction);
    }
    get _highlightColors() {
      return $(this, "_highlightColors", this.#x ? new Map(this.#x.split(",").map((t) => (t = t.split("=").map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
    }
    get highlightColors() {
      const { _highlightColors: t } = this;
      if (!t) return $(this, "highlightColors", null);
      const e = /* @__PURE__ */ new Map(), i = !!this.#j;
      for (const [s, n] of t) {
        const r = s.endsWith("_HCM");
        if (i && r) {
          e.set(s.replace("_HCM", ""), n);
          continue;
        }
        !i && !r && e.set(s, n);
      }
      return $(this, "highlightColors", e);
    }
    get highlightColorNames() {
      return $(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
    }
    getNonHCMColor(t) {
      if (!this._highlightColors) return t;
      const e = this.highlightColorNames.get(t);
      return this._highlightColors.get(e) || t;
    }
    getNonHCMColorName(t) {
      return this.highlightColorNames.get(t) || t;
    }
    setCurrentDrawingSession(t) {
      t ? (this.unselectAll(), this.disableUserSelect(true)) : this.disableUserSelect(false), this.#p = t;
    }
    setMainHighlightColorPicker(t) {
      this.#O = t;
    }
    editAltText(t, e = false) {
      this.#r?.editAltText(this, t, e);
    }
    hasCommentManager() {
      return !!this.#u;
    }
    editComment(t, e, i, s) {
      this.#u?.showDialog(this, t, e, i, s);
    }
    selectComment(t, e) {
      this.#n.get(t)?.getEditorByUID(e)?.toggleComment(true, true);
    }
    updateComment(t) {
      this.#u?.updateComment(t.getData());
    }
    updatePopupColor(t) {
      this.#u?.updatePopupColor(t);
    }
    removeComment(t) {
      this.#u?.removeComments([
        t.uid
      ]);
    }
    deleteComment(t, e) {
      const i = () => {
        t.comment = e;
      }, s = () => {
        this._editorUndoBar?.show(i, "comment"), this.toggleComment(null), t.comment = null;
      };
      this.addCommands({
        cmd: s,
        undo: i,
        mustExec: true
      });
    }
    toggleComment(t, e, i = void 0) {
      this.#u?.toggleCommentPopup(t, e, i);
    }
    makeCommentColor(t, e) {
      return t && this.#u?.makeCommentColor(t, e) || null;
    }
    getCommentDialogElement() {
      return this.#u?.dialogElement || null;
    }
    async waitForEditorsRendered(t) {
      if (this.#n.has(t - 1)) return;
      const { resolve: e, promise: i } = Promise.withResolvers(), s = (n) => {
        n.pageNumber === t && (this._eventBus.off("editorsrendered", s), e());
      };
      this._eventBus.on("editorsrendered", s, Ci), await i;
    }
    getSignature(t) {
      this.#G?.getSignature({
        uiManager: this,
        editor: t
      });
    }
    get signatureManager() {
      return this.#G;
    }
    switchToMode(t, e) {
      this._eventBus.on("annotationeditormodechanged", e, {
        once: true,
        signal: this._signal,
        ...Ci
      }), this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: t
      });
    }
    setPreference(t, e) {
      this._eventBus.dispatch("setpreference", {
        source: this,
        name: t,
        value: e
      });
    }
    onSetPreference({ name: t, value: e }) {
      t === "enableNewAltTextWhenAddingImage" && (this.#E = e);
    }
    onPageChanging({ pageNumber: t }) {
      this.#m = t - 1;
    }
    deletePage(t) {
      for (const e of this.getEditors(t)) e.remove();
      this.#n.delete(t), this.#m === t && (this.#m = 0);
    }
    focusMainContainer() {
      this.#W.focus();
    }
    findParent(t, e) {
      for (const i of this.#n.values()) {
        const { x: s, y: n, width: r, height: a } = i.div.getBoundingClientRect();
        if (t >= s && t <= s + r && e >= n && e <= n + a) return i;
      }
      return null;
    }
    disableUserSelect(t = false) {
      this.#Z.classList.toggle("noUserSelect", t);
    }
    addShouldRescale(t) {
      this.#y.add(t);
    }
    removeShouldRescale(t) {
      this.#y.delete(t);
    }
    onScaleChanging({ scale: t }) {
      this.commitOrRemove(), this.viewParameters.realScale = t * ye.PDF_TO_CSS_UNITS;
      for (const e of this.#y) e.onScaleChanging();
      this.#p?.onScaleChanging();
    }
    onRotationChanging({ pagesRotation: t }) {
      this.commitOrRemove(), this.viewParameters.rotation = t;
    }
    #Q({ anchorNode: t }) {
      return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
    }
    #et(t) {
      const { currentLayer: e } = this;
      if (e.hasTextLayer(t)) return e;
      for (const i of this.#n.values()) if (i.hasTextLayer(t)) return i;
      return null;
    }
    highlightSelection(t = "", e = false) {
      const i = document.getSelection();
      if (!i || i.isCollapsed) return;
      const { anchorNode: s, anchorOffset: n, focusNode: r, focusOffset: a } = i, o = i.toString(), h = this.#Q(i).closest(".textLayer"), c = this.getSelectionBoxes(h);
      if (!c) return;
      i.empty();
      const d = this.#et(h), p = this.#_ === j.NONE, m = () => {
        const b = d?.createAndAddNewEditor({
          x: 0,
          y: 0
        }, false, {
          methodOfCreation: t,
          boxes: c,
          anchorNode: s,
          anchorOffset: n,
          focusNode: r,
          focusOffset: a,
          text: o
        });
        p && this.showAllEditors("highlight", true, true), e && b?.editComment();
      };
      if (p) {
        this.switchToMode(j.HIGHLIGHT, m);
        return;
      }
      m();
    }
    commentSelection(t = "") {
      this.highlightSelection(t, true);
    }
    #rt(t) {
      this.commitOrRemove(), this.currentLayer?.endDrawingSession(false);
    }
    #at() {
      const t = document.getSelection();
      if (!t || t.isCollapsed) return;
      const i = this.#Q(t).closest(".textLayer"), s = this.getSelectionBoxes(i);
      s && (this.#M ||= new $n(this), this.#M.show(i, s, this.direction === "ltr"));
    }
    getAndRemoveDataFromAnnotationStorage(t) {
      if (!this.#o) return null;
      const e = `${Pe}${t}`, i = this.#o.getRawValue(e);
      return i && this.#o.remove(e), i;
    }
    addToAnnotationStorage(t) {
      !t.isEmpty() && this.#o && !this.#o.has(t.id) && this.#o.setValue(t.id, t);
    }
    a11yAlert(t, e = null) {
      const i = this.#tt;
      i && (i.setAttribute("data-l10n-id", t), e ? i.setAttribute("data-l10n-args", JSON.stringify(e)) : i.removeAttribute("data-l10n-args"));
    }
    #ot() {
      const t = document.getSelection();
      if (!t || t.isCollapsed) {
        this.#B && (this.#M?.hide(), this.#B = null, this.#I({
          hasSelectedText: false
        }));
        return;
      }
      const { anchorNode: e } = t;
      if (e === this.#B) return;
      const s = this.#Q(t).closest(".textLayer");
      if (!s) {
        this.#B && (this.#M?.hide(), this.#B = null, this.#I({
          hasSelectedText: false
        }));
        return;
      }
      if (this.#M?.hide(), this.#B = e, this.#I({
        hasSelectedText: true
      }), !(this.#_ !== j.HIGHLIGHT && this.#_ !== j.NONE) && (this.#_ === j.HIGHLIGHT && this.showAllEditors("highlight", true, true), this.#T = this.isShiftKeyDown, !this.isShiftKeyDown)) {
        const n = this.#_ === j.HIGHLIGHT ? this.#et(s) : null;
        if (n?.toggleDrawing(), this.#F) {
          const r = new AbortController(), a = this.combinedSignal(r), o = (l) => {
            l.type === "pointerup" && l.button !== 0 || (r.abort(), n?.toggleDrawing(true), l.type === "pointerup" && this.#K("main_toolbar"));
          };
          window.addEventListener("pointerup", o, {
            signal: a
          }), window.addEventListener("blur", o, {
            signal: a
          });
        } else n?.toggleDrawing(true), this.#K("main_toolbar");
      }
    }
    #K(t = "") {
      this.#_ === j.HIGHLIGHT ? this.highlightSelection(t) : this.#A && this.#at();
    }
    #lt() {
      document.addEventListener("selectionchange", this.#ot.bind(this), {
        signal: this._signal
      });
    }
    #ht() {
      if (this.#C) return;
      this.#C = new AbortController();
      const t = this.combinedSignal(this.#C);
      window.addEventListener("focus", this.focus.bind(this), {
        signal: t
      }), window.addEventListener("blur", this.blur.bind(this), {
        signal: t
      });
    }
    #ct() {
      this.#C?.abort(), this.#C = null;
    }
    blur() {
      if (this.isShiftKeyDown = false, this.#T && (this.#T = false, this.#K("main_toolbar")), !this.hasSelection) return;
      const { activeElement: t } = document;
      for (const e of this.#v) if (e.div.contains(t)) {
        this.#R = [
          e,
          t
        ], e._focusEventsAllowed = false;
        break;
      }
    }
    focus() {
      if (!this.#R) return;
      const [t, e] = this.#R;
      this.#R = null, e.addEventListener("focusin", () => {
        t._focusEventsAllowed = true;
      }, {
        once: true,
        signal: this._signal
      }), e.focus();
    }
    #it() {
      if (this.#D) return;
      this.#D = new AbortController();
      const t = this.combinedSignal(this.#D);
      window.addEventListener("keydown", this.keydown.bind(this), {
        signal: t
      }), window.addEventListener("keyup", this.keyup.bind(this), {
        signal: t
      });
    }
    #dt() {
      this.#D?.abort(), this.#D = null;
    }
    #ut() {
      if (this.#d) return;
      this.#d = new AbortController();
      const t = this.combinedSignal(this.#d);
      document.addEventListener("copy", this.copy.bind(this), {
        signal: t
      }), document.addEventListener("cut", this.cut.bind(this), {
        signal: t
      }), document.addEventListener("paste", this.paste.bind(this), {
        signal: t
      });
    }
    #ft() {
      this.#d?.abort(), this.#d = null;
    }
    #pt() {
      const t = this._signal;
      document.addEventListener("dragover", this.dragOver.bind(this), {
        signal: t
      }), document.addEventListener("drop", this.drop.bind(this), {
        signal: t
      });
    }
    addEditListeners() {
      this.#it(), this.setEditingState(true);
    }
    removeEditListeners() {
      this.#dt(), this.setEditingState(false);
    }
    dragOver(t) {
      for (const { type: e } of t.dataTransfer.items) for (const i of this.#f) if (i.isHandlingMimeForPasting(e)) {
        t.dataTransfer.dropEffect = "copy", t.preventDefault();
        return;
      }
    }
    drop(t) {
      for (const e of t.dataTransfer.items) for (const i of this.#f) if (i.isHandlingMimeForPasting(e.type)) {
        i.paste(e, this.currentLayer), t.preventDefault();
        return;
      }
    }
    copy(t) {
      if (t.preventDefault(), this.#e?.commitOrRemove(), !this.hasSelection) return;
      const e = [];
      for (const i of this.#v) {
        const s = i.serialize(true);
        s && e.push(s);
      }
      e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
    }
    cut(t) {
      this.copy(t), this.delete();
    }
    async paste(t) {
      t.preventDefault();
      const { clipboardData: e } = t;
      for (const n of e.items) for (const r of this.#f) if (r.isHandlingMimeForPasting(n.type)) {
        r.paste(n, this.currentLayer);
        return;
      }
      let i = e.getData("application/pdfjs");
      if (!i) return;
      try {
        i = JSON.parse(i);
      } catch (n) {
        z(`paste: "${n.message}".`);
        return;
      }
      if (!Array.isArray(i)) return;
      this.unselectAll();
      const s = this.currentLayer;
      try {
        const n = [];
        for (const o of i) {
          const l = await s.deserialize(o);
          if (!l) return;
          n.push(l);
        }
        const r = () => {
          for (const o of n) this.#st(o);
          this.#nt(n);
        }, a = () => {
          for (const o of n) o.remove();
        };
        this.addCommands({
          cmd: r,
          undo: a,
          mustExec: true
        });
      } catch (n) {
        z(`paste: "${n.message}".`);
      }
    }
    keydown(t) {
      !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = true), this.#_ !== j.NONE && !this.isEditorHandlingKeyboard && Qt._keyboardManager.exec(this, t);
    }
    keyup(t) {
      this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = false, this.#T && (this.#T = false, this.#K("main_toolbar")));
    }
    onEditingAction({ name: t }) {
      switch (t) {
        case "undo":
        case "redo":
        case "delete":
        case "selectAll":
          this[t]();
          break;
        case "highlightSelection":
          this.highlightSelection("context_menu");
          break;
        case "commentSelection":
          this.commentSelection("context_menu");
          break;
      }
    }
    updatePageIndex(t, e) {
      for (const s of this.getEditors(t)) s.pageIndex = e;
      const i = this.#a.get(t);
      i && (i.pageIndex = e, this.#n.set(e, i), this.#k ? i.enable() : i.disable());
    }
    startUpdatePages() {
      this.#a = new Map(this.#n), this.#n.clear();
    }
    endUpdatePages() {
      this.#a = null;
    }
    clonePage(t, e) {
      for (const i of this.getEditors(t)) {
        const s = i.serialize(i.mode !== j.HIGHLIGHT);
        s && (s.pageIndex = e, s.id = this.getId(), s.isClone = true, delete s.popupRef, this.#o.setValue(s.id, s));
      }
    }
    findClonesForPage(t) {
      const e = [], { pageIndex: i } = t;
      for (const [s, n] of this.#o) n.pageIndex === i && n.isClone && (this.#o.remove(s), e.push(t.deserialize(n).then((r) => {
        r && (r.isClone = true, t.addOrRebuild(r));
      })));
      return Promise.all(e);
    }
    #I(t) {
      Object.entries(t).some(([i, s]) => this.#Y[i] !== s) && (this._eventBus.dispatch("editingstateschanged", {
        source: this,
        details: Object.assign(this.#Y, t)
      }), this.#_ === j.HIGHLIGHT && t.hasSelectedEditor === false && this.#$([
        [
          V.HIGHLIGHT_FREE,
          true
        ]
      ]));
    }
    #$(t) {
      this._eventBus.dispatch("annotationeditorparamschanged", {
        source: this,
        details: t
      });
    }
    setEditingState(t) {
      t ? (this.#ht(), this.#ut(), this.#I({
        isEditing: this.#_ !== j.NONE,
        isEmpty: this.#J(),
        hasSomethingToUndo: this.#l.hasSomethingToUndo(),
        hasSomethingToRedo: this.#l.hasSomethingToRedo(),
        hasSelectedEditor: false
      })) : (this.#ct(), this.#ft(), this.#I({
        isEditing: false
      }), this.disableUserSelect(false));
    }
    registerEditorTypes(t) {
      if (!this.#f) {
        this.#f = t;
        for (const e of this.#f) this.#$(e.defaultPropertiesToUpdate);
      }
    }
    getId() {
      return this.#P.id;
    }
    get currentLayer() {
      return this.#n.get(this.#m);
    }
    getLayer(t) {
      return this.#n.get(t);
    }
    get currentPageIndex() {
      return this.#m;
    }
    addLayer(t) {
      this.#n.set(t.pageIndex, t), this.#k ? t.enable() : t.disable();
    }
    removeLayer(t) {
      this.#n.delete(t.pageIndex);
    }
    async updateMode(t, e = null, i = false, s = false, n = false, r = false) {
      if (this.#_ !== t && !(this.#H && (await this.#H.promise, !this.#H))) {
        if (this.#H = Promise.withResolvers(), this.#p?.commitOrRemove(), this.#_ === j.POPUP && this.#u?.hideSidebar(), this.#u?.destroyPopup(), this.#_ = t, t === j.NONE) {
          this.setEditingState(false), this.#mt();
          for (const a of this.#s.values()) a.hideStandaloneCommentButton();
          this._editorUndoBar?.hide(), this.toggleComment(null), this.#H.resolve();
          return;
        }
        for (const a of this.#s.values()) a.addStandaloneCommentButton();
        t === j.SIGNATURE && await this.#G?.loadSignatures(), i && Q.clearPointerType(), this.setEditingState(true), await this.#gt(), this.unselectAll();
        for (const a of this.#n.values()) a.updateMode(t);
        if (t === j.POPUP) {
          this.#i ||= await this.#X.getAnnotationsByType(new Set(this.#f.map((l) => l._editorType)));
          const a = /* @__PURE__ */ new Set(), o = [];
          for (const l of this.#s.values()) {
            const { annotationElementId: h, hasComment: c, deleted: d } = l;
            h && a.add(h), c && !d && o.push(l.getData());
          }
          for (const l of this.#i) {
            const { id: h, popupRef: c, contentsObj: d } = l;
            c && d?.str && !a.has(h) && !this.#g.has(h) && o.push(l);
          }
          this.#u?.showSidebar(o);
        }
        if (!e) {
          s && this.addNewEditorFromKeyboard(), this.#H.resolve();
          return;
        }
        for (const a of this.#s.values()) a.uid === e ? (this.setSelected(a), r ? a.editComment() : n ? a.enterInEditMode() : a.focus()) : a.unselect();
        this.#H.resolve();
      }
    }
    addNewEditorFromKeyboard() {
      this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
    }
    updateToolbar(t) {
      t.mode !== this.#_ && this._eventBus.dispatch("switchannotationeditormode", {
        source: this,
        ...t
      });
    }
    updateParams(t, e) {
      if (this.#f) {
        switch (t) {
          case V.CREATE:
            this.currentLayer.addNewEditor(e);
            return;
          case V.HIGHLIGHT_SHOW_ALL:
            this._eventBus.dispatch("reporttelemetry", {
              source: this,
              details: {
                type: "editing",
                data: {
                  type: "highlight",
                  action: "toggle_visibility"
                }
              }
            }), (this.#q ||= /* @__PURE__ */ new Map()).set(t, e), this.showAllEditors("highlight", e);
            break;
        }
        if (this.hasSelection) for (const i of this.#v) i.updateParams(t, e);
        else for (const i of this.#f) i.updateDefaultParams(t, e);
      }
    }
    showAllEditors(t, e, i = false) {
      for (const n of this.#s.values()) n.editorType === t && n.show(e);
      (this.#q?.get(V.HIGHLIGHT_SHOW_ALL) ?? true) !== e && this.#$([
        [
          V.HIGHLIGHT_SHOW_ALL,
          e
        ]
      ]);
    }
    enableWaiting(t = false) {
      if (this.#L !== t) {
        this.#L = t;
        for (const e of this.#n.values()) t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
      }
    }
    async #gt() {
      if (!this.#k) {
        this.#k = true;
        const t = [];
        for (const e of this.#n.values()) t.push(e.enable());
        await Promise.all(t);
        for (const e of this.#s.values()) e.enable();
      }
    }
    #mt() {
      if (this.unselectAll(), this.#k) {
        this.#k = false;
        for (const t of this.#n.values()) t.disable();
        for (const t of this.#s.values()) t.disable();
      }
    }
    *getEditors(t) {
      for (const e of this.#s.values()) e.pageIndex === t && (yield e);
    }
    getEditor(t) {
      return this.#s.get(t);
    }
    addEditor(t) {
      this.#s.set(t.id, t);
    }
    removeEditor(t) {
      t.div.contains(document.activeElement) && (this.#w && clearTimeout(this.#w), this.#w = setTimeout(() => {
        this.focusMainContainer(), this.#w = null;
      }, 0)), this.#s.delete(t.id), t.annotationElementId && this.#U?.delete(t.annotationElementId), this.unselect(t), (!t.annotationElementId || !this.#g.has(t.annotationElementId)) && this.#o?.remove(t.id);
    }
    addDeletedAnnotationElement(t) {
      this.#g.add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = true;
    }
    isDeletedAnnotationElement(t) {
      return this.#g.has(t);
    }
    removeDeletedAnnotationElement(t) {
      this.#g.delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = false;
    }
    #st(t) {
      const e = this.#n.get(t.pageIndex);
      e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
    }
    setActiveEditor(t) {
      this.#e !== t && (this.#e = t, t && this.#$(t.propertiesToUpdate));
    }
    get #bt() {
      let t = null;
      for (t of this.#v) ;
      return t;
    }
    updateUI(t) {
      this.#bt === t && this.#$(t.propertiesToUpdate);
    }
    updateUIForDefaultProperties(t) {
      this.#$(t.defaultPropertiesToUpdate);
    }
    toggleSelected(t) {
      if (this.#v.has(t)) {
        this.#v.delete(t), t.unselect(), this.#I({
          hasSelectedEditor: this.hasSelection
        });
        return;
      }
      this.#v.add(t), t.select(), this.#$(t.propertiesToUpdate), this.#I({
        hasSelectedEditor: true
      });
    }
    setSelected(t) {
      this.updateToolbar({
        mode: t.mode,
        editId: t.uid
      }), this.#p?.commitOrRemove();
      for (const e of this.#v) e !== t && e.unselect();
      this.#u?.destroyPopup(), this.#v.clear(), this.#v.add(t), t.select(), this.#$(t.propertiesToUpdate), this.#I({
        hasSelectedEditor: true
      });
    }
    get firstSelectedEditor() {
      return this.#v.values().next().value;
    }
    unselect(t) {
      t.unselect(), this.#v.delete(t), this.#I({
        hasSelectedEditor: this.hasSelection
      });
    }
    get hasSelection() {
      return this.#v.size !== 0;
    }
    get isEnterHandled() {
      return this.#v.size === 1 && this.firstSelectedEditor.isEnterHandled;
    }
    undo() {
      this.#l.undo(), this.#I({
        hasSomethingToUndo: this.#l.hasSomethingToUndo(),
        hasSomethingToRedo: true,
        isEmpty: this.#J()
      }), this._editorUndoBar?.hide();
    }
    redo() {
      this.#l.redo(), this.#I({
        hasSomethingToUndo: true,
        hasSomethingToRedo: this.#l.hasSomethingToRedo(),
        isEmpty: this.#J()
      });
    }
    addCommands(t) {
      this.#l.add(t), this.#I({
        hasSomethingToUndo: true,
        hasSomethingToRedo: false,
        isEmpty: this.#J()
      });
    }
    cleanUndoStack(t) {
      this.#l.cleanType(t);
    }
    #J() {
      if (this.#s.size === 0) return true;
      if (this.#s.size === 1) for (const t of this.#s.values()) return t.isEmpty();
      return false;
    }
    delete() {
      this.commitOrRemove();
      const t = this.currentLayer?.endDrawingSession(true);
      if (!this.hasSelection && !t) return;
      const e = t ? [
        t
      ] : [
        ...this.#v
      ], i = () => {
        this._editorUndoBar?.show(s, e.length === 1 ? e[0].editorType : e.length);
        for (const n of e) n.remove();
      }, s = () => {
        for (const n of e) this.#st(n);
      };
      this.addCommands({
        cmd: i,
        undo: s,
        mustExec: true
      });
    }
    commitOrRemove() {
      this.#e?.commitOrRemove();
    }
    hasSomethingToControl() {
      return this.#e || this.hasSelection;
    }
    #nt(t) {
      for (const e of this.#v) e.unselect();
      this.#v.clear();
      for (const e of t) e.isEmpty() || (this.#v.add(e), e.select());
      this.#I({
        hasSelectedEditor: this.hasSelection
      });
    }
    selectAll() {
      for (const t of this.#v) t.commit();
      this.#nt(this.#s.values());
    }
    unselectAll() {
      if (!(this.#e && (this.#e.commitOrRemove(), this.#_ !== j.NONE)) && !this.#p?.commitOrRemove() && (this.#u?.destroyPopup(), !!this.hasSelection)) {
        for (const t of this.#v) t.unselect();
        this.#v.clear(), this.#I({
          hasSelectedEditor: false
        });
      }
    }
    translateSelectedEditors(t, e, i = false) {
      if (i || this.commitOrRemove(), !this.hasSelection) return;
      this.#N[0] += t, this.#N[1] += e;
      const [s, n] = this.#N, r = [
        ...this.#v
      ], a = 1e3;
      this.#z && clearTimeout(this.#z), this.#z = setTimeout(() => {
        this.#z = null, this.#N[0] = this.#N[1] = 0, this.addCommands({
          cmd: () => {
            for (const o of r) this.#s.has(o.id) && (o.translateInPage(s, n), o.translationDone());
          },
          undo: () => {
            for (const o of r) this.#s.has(o.id) && (o.translateInPage(-s, -n), o.translationDone());
          },
          mustExec: false
        });
      }, a);
      for (const o of r) o.translateInPage(t, e), o.translationDone();
    }
    setUpDragSession() {
      if (this.hasSelection) {
        this.disableUserSelect(true), this.#c = /* @__PURE__ */ new Map();
        for (const t of this.#v) this.#c.set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
      }
    }
    endDragSession() {
      if (!this.#c) return false;
      this.disableUserSelect(false);
      const t = this.#c;
      this.#c = null;
      let e = false;
      for (const [{ x: s, y: n, pageIndex: r }, a] of t) a.newX = s, a.newY = n, a.newPageIndex = r, e ||= s !== a.savedX || n !== a.savedY || r !== a.savedPageIndex;
      if (!e) return false;
      const i = (s, n, r, a) => {
        if (this.#s.has(s.id)) {
          const o = this.#n.get(a);
          o ? s._setParentAndPosition(o, n, r) : (s.pageIndex = a, s.x = n, s.y = r);
        }
      };
      return this.addCommands({
        cmd: () => {
          for (const [s, { newX: n, newY: r, newPageIndex: a }] of t) i(s, n, r, a);
        },
        undo: () => {
          for (const [s, { savedX: n, savedY: r, savedPageIndex: a }] of t) i(s, n, r, a);
        },
        mustExec: true
      }), true;
    }
    dragSelectedEditors(t, e) {
      if (this.#c) for (const i of this.#c.keys()) i.drag(t, e);
    }
    rebuild(t) {
      if (t.parent === null) {
        const e = this.getLayer(t.pageIndex);
        e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
      } else t.parent.addOrRebuild(t);
    }
    get isEditorHandlingKeyboard() {
      return this.getActive()?.shouldGetKeyboardEvents() || this.#v.size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
    }
    isActive(t) {
      return this.#e === t;
    }
    getActive() {
      return this.#e;
    }
    getMode() {
      return this.#_;
    }
    isEditingMode() {
      return this.#_ !== j.NONE;
    }
    get imageManager() {
      return $(this, "imageManager", new qi());
    }
    getSelectionBoxes(t) {
      if (!t) return null;
      const e = document.getSelection();
      for (let l = 0, h = e.rangeCount; l < h; l++) if (!t.contains(e.getRangeAt(l).commonAncestorContainer)) return null;
      const { x: i, y: s, width: n, height: r } = t.getBoundingClientRect();
      let a;
      switch (t.getAttribute("data-main-rotation")) {
        case "90":
          a = (l, h, c, d) => ({
            x: (h - s) / r,
            y: 1 - (l + c - i) / n,
            width: d / r,
            height: c / n
          });
          break;
        case "180":
          a = (l, h, c, d) => ({
            x: 1 - (l + c - i) / n,
            y: 1 - (h + d - s) / r,
            width: c / n,
            height: d / r
          });
          break;
        case "270":
          a = (l, h, c, d) => ({
            x: 1 - (h + d - s) / r,
            y: (l - i) / n,
            width: d / r,
            height: c / n
          });
          break;
        default:
          a = (l, h, c, d) => ({
            x: (l - i) / n,
            y: (h - s) / r,
            width: c / n,
            height: d / r
          });
          break;
      }
      const o = [];
      for (let l = 0, h = e.rangeCount; l < h; l++) {
        const c = e.getRangeAt(l);
        if (!c.collapsed) for (const { x: d, y: p, width: m, height: b } of c.getClientRects()) m === 0 || b === 0 || o.push(a(d, p, m, b));
      }
      return o.length === 0 ? null : o;
    }
    addChangedExistingAnnotation({ annotationElementId: t, id: e }) {
      (this.#h ||= /* @__PURE__ */ new Map()).set(t, e);
    }
    removeChangedExistingAnnotation({ annotationElementId: t }) {
      this.#h?.delete(t);
    }
    renderAnnotationElement(t) {
      const e = this.#h?.get(t.data.id);
      if (!e) return;
      const i = this.#o.getRawValue(e);
      i && (this.#_ === j.NONE && !i.hasBeenModified || i.renderAnnotationElement(t));
    }
    setMissingCanvas(t, e, i) {
      const s = this.#U?.get(t);
      s && (s.setCanvas(e, i), this.#U.delete(t));
    }
    addMissingCanvas(t, e) {
      (this.#U ||= /* @__PURE__ */ new Map()).set(t, e);
    }
  };
  class $t {
    #t = null;
    #e = false;
    #i = null;
    #s = null;
    #n = null;
    #a = null;
    #r = false;
    #o = null;
    #h = null;
    #l = null;
    #u = null;
    #d = false;
    static #p = null;
    static _l10n = null;
    constructor(t) {
      this.#h = t, this.#d = t._uiManager.useNewAltTextFlow, $t.#p ||= Object.freeze({
        added: "pdfjs-editor-new-alt-text-added-button",
        "added-label": "pdfjs-editor-new-alt-text-added-button-label",
        missing: "pdfjs-editor-new-alt-text-missing-button",
        "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
        review: "pdfjs-editor-new-alt-text-to-review-button",
        "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
      });
    }
    static initialize(t) {
      $t._l10n ??= t;
    }
    async render() {
      const t = this.#i = document.createElement("button");
      t.className = "altText", t.tabIndex = "0";
      const e = this.#s = document.createElement("span");
      t.append(e), this.#d ? (t.classList.add("new"), t.setAttribute("data-l10n-id", $t.#p.missing), e.setAttribute("data-l10n-id", $t.#p["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
      const i = this.#h._uiManager._signal;
      t.addEventListener("contextmenu", Ft, {
        signal: i
      }), t.addEventListener("pointerdown", (n) => n.stopPropagation(), {
        signal: i
      });
      const s = (n) => {
        n.preventDefault(), this.#h._uiManager.editAltText(this.#h), this.#d && this.#h._reportTelemetry({
          action: "pdfjs.image.alt_text.image_status_label_clicked",
          data: {
            label: this.#m
          }
        });
      };
      return t.addEventListener("click", s, {
        capture: true,
        signal: i
      }), t.addEventListener("keydown", (n) => {
        n.target === t && n.key === "Enter" && (this.#r = true, s(n));
      }, {
        signal: i
      }), await this.#g(), t;
    }
    get #m() {
      return this.#t && "added" || this.#t === null && this.guessedText && "review" || "missing";
    }
    finish() {
      this.#i && (this.#i.focus({
        focusVisible: this.#r
      }), this.#r = false);
    }
    isEmpty() {
      return this.#d ? this.#t === null : !this.#t && !this.#e;
    }
    hasData() {
      return this.#d ? this.#t !== null || !!this.#l : this.isEmpty();
    }
    get guessedText() {
      return this.#l;
    }
    async setGuessedText(t) {
      this.#t === null && (this.#l = t, this.#u = await $t._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
        generatedAltText: t
      }), this.#g());
    }
    toggleAltTextBadge(t = false) {
      if (!this.#d || this.#t) {
        this.#o?.remove(), this.#o = null;
        return;
      }
      if (!this.#o) {
        const e = this.#o = document.createElement("div");
        e.className = "noAltTextBadge", this.#h.div.append(e);
      }
      this.#o.classList.toggle("hidden", !t);
    }
    serialize(t) {
      let e = this.#t;
      return !t && this.#l === e && (e = this.#u), {
        altText: e,
        decorative: this.#e,
        guessedText: this.#l,
        textWithDisclaimer: this.#u
      };
    }
    get data() {
      return {
        altText: this.#t,
        decorative: this.#e
      };
    }
    set data({ altText: t, decorative: e, guessedText: i, textWithDisclaimer: s, cancel: n = false }) {
      i && (this.#l = i, this.#u = s), !(this.#t === t && this.#e === e) && (n || (this.#t = t, this.#e = e), this.#g());
    }
    toggle(t = false) {
      this.#i && (!t && this.#a && (clearTimeout(this.#a), this.#a = null), this.#i.disabled = !t);
    }
    shown() {
      this.#h._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_displayed",
        data: {
          label: this.#m
        }
      });
    }
    destroy() {
      this.#i?.remove(), this.#i = null, this.#s = null, this.#n = null, this.#o?.remove(), this.#o = null;
    }
    async #g() {
      const t = this.#i;
      if (!t) return;
      if (this.#d) {
        if (t.classList.toggle("done", !!this.#t), t.setAttribute("data-l10n-id", $t.#p[this.#m]), this.#s?.setAttribute("data-l10n-id", $t.#p[`${this.#m}-label`]), !this.#t) {
          this.#n?.remove();
          return;
        }
      } else {
        if (!this.#t && !this.#e) {
          t.classList.remove("done"), this.#n?.remove();
          return;
        }
        t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
      }
      let e = this.#n;
      if (!e) {
        this.#n = e = document.createElement("span"), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${this.#h.id}`;
        const s = 100, n = this.#h._uiManager._signal;
        n.addEventListener("abort", () => {
          clearTimeout(this.#a), this.#a = null;
        }, {
          once: true
        }), t.addEventListener("mouseenter", () => {
          this.#a = setTimeout(() => {
            this.#a = null, this.#n.classList.add("show"), this.#h._reportTelemetry({
              action: "alt_text_tooltip"
            });
          }, s);
        }, {
          signal: n
        }), t.addEventListener("mouseleave", () => {
          this.#a && (clearTimeout(this.#a), this.#a = null), this.#n?.classList.remove("show");
        }, {
          signal: n
        });
      }
      this.#e ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = this.#t), e.parentNode || t.append(e), this.#h.getElementForAltText()?.setAttribute("aria-describedby", e.id);
    }
  }
  class je {
    #t = null;
    #e = null;
    #i = false;
    #s = null;
    #n = null;
    #a = null;
    #r = null;
    #o = null;
    #h = false;
    #l = null;
    constructor(t) {
      this.#s = t;
    }
    renderForToolbar() {
      const t = this.#e = document.createElement("button");
      return t.className = "comment", this.#u(t, false);
    }
    renderForStandalone() {
      const t = this.#t = document.createElement("button");
      t.className = "annotationCommentButton";
      const e = this.#s.commentButtonPosition;
      if (e) {
        const { style: i } = t;
        i.insetInlineEnd = `calc(${100 * (this.#s._uiManager.direction === "ltr" ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`, i.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
        const s = this.#s.commentButtonColor;
        s && (i.backgroundColor = s);
      }
      return this.#u(t, true);
    }
    focusButton() {
      setTimeout(() => {
        (this.#t ?? this.#e)?.focus();
      }, 0);
    }
    onUpdatedColor() {
      if (!this.#t) return;
      const t = this.#s.commentButtonColor;
      t && (this.#t.style.backgroundColor = t), this.#s._uiManager.updatePopupColor(this.#s);
    }
    get commentButtonWidth() {
      return (this.#t?.getBoundingClientRect().width ?? 0) / this.#s.parent.boundingClientRect.width;
    }
    get commentPopupPositionInLayer() {
      if (this.#l) return this.#l;
      if (!this.#t) return null;
      const { x: t, y: e, height: i } = this.#t.getBoundingClientRect(), { x: s, y: n, width: r, height: a } = this.#s.parent.boundingClientRect;
      return [
        (t - s) / r,
        (e + i - n) / a
      ];
    }
    set commentPopupPositionInLayer(t) {
      this.#l = t;
    }
    hasDefaultPopupPosition() {
      return this.#l === null;
    }
    removeStandaloneCommentButton() {
      this.#t?.remove(), this.#t = null;
    }
    removeToolbarCommentButton() {
      this.#e?.remove(), this.#e = null;
    }
    setCommentButtonStates({ selected: t, hasPopup: e }) {
      this.#t && (this.#t.classList.toggle("selected", t), this.#t.ariaExpanded = e);
    }
    #u(t, e) {
      if (!this.#s._uiManager.hasCommentManager()) return null;
      t.tabIndex = "0", t.ariaHasPopup = "dialog", e ? (t.ariaControls = "commentPopup", t.setAttribute("data-l10n-id", "pdfjs-show-comment-button")) : (t.ariaControlsElements = [
        this.#s._uiManager.getCommentDialogElement()
      ], t.setAttribute("data-l10n-id", "pdfjs-editor-add-comment-button"));
      const i = this.#s._uiManager._signal;
      if (!(i instanceof AbortSignal) || i.aborted) return t;
      t.addEventListener("contextmenu", Ft, {
        signal: i
      }), e && (t.addEventListener("focusin", (n) => {
        this.#s._focusEventsAllowed = false, lt(n);
      }, {
        capture: true,
        signal: i
      }), t.addEventListener("focusout", (n) => {
        this.#s._focusEventsAllowed = true, lt(n);
      }, {
        capture: true,
        signal: i
      })), t.addEventListener("pointerdown", (n) => n.stopPropagation(), {
        signal: i
      });
      const s = (n) => {
        n.preventDefault(), t === this.#e ? this.edit() : this.#s.toggleComment(true);
      };
      return t.addEventListener("click", s, {
        capture: true,
        signal: i
      }), t.addEventListener("keydown", (n) => {
        n.target === t && n.key === "Enter" && (this.#i = true, s(n));
      }, {
        signal: i
      }), t.addEventListener("pointerenter", () => {
        this.#s.toggleComment(false, true);
      }, {
        signal: i
      }), t.addEventListener("pointerleave", () => {
        this.#s.toggleComment(false, false);
      }, {
        signal: i
      }), t;
    }
    edit(t) {
      const e = this.commentPopupPositionInLayer;
      let i, s;
      if (e) [i, s] = e;
      else {
        [i, s] = this.#s.commentButtonPosition;
        const { width: h, height: c, x: d, y: p } = this.#s;
        i = d + i * h, s = p + s * c;
      }
      const n = this.#s.parent.boundingClientRect, { x: r, y: a, width: o, height: l } = n;
      this.#s._uiManager.editComment(this.#s, r + i * o, a + s * l, {
        ...t,
        parentDimensions: n
      });
    }
    finish() {
      this.#e && (this.#e.focus({
        focusVisible: this.#i
      }), this.#i = false);
    }
    isDeleted() {
      return this.#h || this.#r === "";
    }
    isEmpty() {
      return this.#r === null;
    }
    hasBeenEdited() {
      return this.isDeleted() || this.#r !== this.#n;
    }
    serialize() {
      return this.data;
    }
    get data() {
      return {
        text: this.#r,
        richText: this.#a,
        date: this.#o,
        deleted: this.isDeleted()
      };
    }
    set data(t) {
      if (t !== this.#r && (this.#a = null), t === null) {
        this.#r = "", this.#h = true;
        return;
      }
      this.#r = t, this.#o = /* @__PURE__ */ new Date(), this.#h = false;
    }
    restoreData({ text: t, richText: e, date: i }) {
      this.#r = t, this.#a = e, this.#o = i, this.#h = false;
    }
    setInitialText(t, e = null) {
      this.#n = t, this.data = t, this.#o = null, this.#a = e;
    }
    shown() {
    }
    destroy() {
      this.#e?.remove(), this.#e = null, this.#t?.remove(), this.#t = null, this.#r = "", this.#a = null, this.#o = null, this.#s = null, this.#i = false, this.#h = false;
    }
  }
  hi = class {
    #t;
    #e = false;
    #i = null;
    #s;
    #n;
    #a;
    #r;
    #o = null;
    #h;
    #l = null;
    #u;
    #d = null;
    constructor({ container: t, isPinchingDisabled: e = null, isPinchingStopped: i = null, onPinchStart: s = null, onPinching: n = null, onPinchEnd: r = null, signal: a }) {
      this.#t = t, this.#i = i, this.#s = e, this.#n = s, this.#a = n, this.#r = r, this.#u = new AbortController(), this.#h = AbortSignal.any([
        a,
        this.#u.signal
      ]), t.addEventListener("touchstart", this.#p.bind(this), {
        passive: false,
        signal: this.#h
      });
    }
    get MIN_TOUCH_DISTANCE_TO_PINCH() {
      return 35 / jt.pixelRatio;
    }
    #p(t) {
      if (this.#s?.()) return;
      if (t.touches.length === 1) {
        if (this.#o) return;
        const s = this.#o = new AbortController(), n = AbortSignal.any([
          this.#h,
          s.signal
        ]), r = this.#t, a = {
          capture: true,
          signal: n,
          passive: false
        }, o = (l) => {
          l.pointerType === "touch" && (this.#o?.abort(), this.#o = null);
        };
        r.addEventListener("pointerdown", (l) => {
          l.pointerType === "touch" && (lt(l), o(l));
        }, a), r.addEventListener("pointerup", o, a), r.addEventListener("pointercancel", o, a);
        return;
      }
      if (!this.#d) {
        this.#d = new AbortController();
        const s = AbortSignal.any([
          this.#h,
          this.#d.signal
        ]), n = this.#t, r = {
          signal: s,
          capture: false,
          passive: false
        };
        n.addEventListener("touchmove", this.#m.bind(this), r);
        const a = this.#g.bind(this);
        n.addEventListener("touchend", a, r), n.addEventListener("touchcancel", a, r), r.capture = true, n.addEventListener("pointerdown", lt, r), n.addEventListener("pointermove", lt, r), n.addEventListener("pointercancel", lt, r), n.addEventListener("pointerup", lt, r), this.#n?.();
      }
      if (lt(t), t.touches.length !== 2 || this.#i?.()) {
        this.#l = null;
        return;
      }
      let [e, i] = t.touches;
      e.identifier > i.identifier && ([e, i] = [
        i,
        e
      ]), this.#l = {
        touch0X: e.screenX,
        touch0Y: e.screenY,
        touch1X: i.screenX,
        touch1Y: i.screenY
      };
    }
    #m(t) {
      if (!this.#l || t.touches.length !== 2) return;
      lt(t);
      let [e, i] = t.touches;
      e.identifier > i.identifier && ([e, i] = [
        i,
        e
      ]);
      const { screenX: s, screenY: n } = e, { screenX: r, screenY: a } = i, o = this.#l, { touch0X: l, touch0Y: h, touch1X: c, touch1Y: d } = o, p = c - l, m = d - h, b = r - s, y = a - n, w = Math.hypot(b, y) || 1, v = Math.hypot(p, m) || 1;
      if (!this.#e && Math.abs(v - w) <= hi.MIN_TOUCH_DISTANCE_TO_PINCH) return;
      if (o.touch0X = s, o.touch0Y = n, o.touch1X = r, o.touch1Y = a, !this.#e) {
        this.#e = true;
        return;
      }
      const E = [
        (s + r) / 2,
        (n + a) / 2
      ];
      this.#a?.(E, v, w);
    }
    #g(t) {
      t.touches.length >= 2 || (this.#d && (this.#d.abort(), this.#d = null, this.#r?.()), this.#l && (lt(t), this.#l = null, this.#e = false));
    }
    destroy() {
      this.#u?.abort(), this.#u = null, this.#o?.abort(), this.#o = null;
    }
  };
  class O {
    #t = null;
    #e = null;
    #i = null;
    #s = null;
    #n = null;
    #a = false;
    #r = null;
    #o = "";
    #h = null;
    #l = null;
    #u = null;
    #d = null;
    #p = null;
    #m = "";
    #g = false;
    #c = null;
    #f = false;
    #y = false;
    #A = false;
    #b = null;
    #E = 0;
    #S = 0;
    #w = null;
    #C = null;
    isSelected = false;
    _isCopy = false;
    _editToolbar = null;
    _initialOptions = /* @__PURE__ */ Object.create(null);
    _initialData = null;
    _isVisible = true;
    _uiManager = null;
    _focusEventsAllowed = true;
    static _l10n = null;
    static _l10nAlert = null;
    static _l10nResizer = null;
    #x = false;
    #T = O._zIndex++;
    static _borderLineWidth = -1;
    static _colorManager = new Ki();
    static _zIndex = 1;
    static _telemetryTimeout = 1e3;
    static get _resizerKeyboardManager() {
      const t = O.prototype._resizeWithKeyboard, e = Qt.TRANSLATE_SMALL, i = Qt.TRANSLATE_BIG;
      return $(this, "_resizerKeyboardManager", new kt([
        [
          [
            "ArrowLeft"
          ],
          t,
          {
            args: [
              -e,
              0
            ]
          }
        ],
        [
          [
            "ctrl+ArrowLeft",
            "mac+shift+ArrowLeft"
          ],
          t,
          {
            args: [
              -i,
              0
            ]
          }
        ],
        [
          [
            "ArrowRight"
          ],
          t,
          {
            args: [
              e,
              0
            ]
          }
        ],
        [
          [
            "ctrl+ArrowRight",
            "mac+shift+ArrowRight"
          ],
          t,
          {
            args: [
              i,
              0
            ]
          }
        ],
        [
          [
            "ArrowUp"
          ],
          t,
          {
            args: [
              0,
              -e
            ]
          }
        ],
        [
          [
            "ctrl+ArrowUp",
            "mac+shift+ArrowUp"
          ],
          t,
          {
            args: [
              0,
              -i
            ]
          }
        ],
        [
          [
            "ArrowDown"
          ],
          t,
          {
            args: [
              0,
              e
            ]
          }
        ],
        [
          [
            "ctrl+ArrowDown",
            "mac+shift+ArrowDown"
          ],
          t,
          {
            args: [
              0,
              i
            ]
          }
        ],
        [
          [
            "Escape"
          ],
          O.prototype._stopResizingWithKeyboard
        ]
      ]));
    }
    constructor(t) {
      this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = false, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null, this.annotationElementId = t.annotationElementId || null, this.creationDate = t.creationDate || /* @__PURE__ */ new Date(), this.modificationDate = t.modificationDate || null, this.canAddComment = true;
      const { rotation: e, rawDims: { pageWidth: i, pageHeight: s, pageX: n, pageY: r } } = this.parent.viewport;
      this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [
        i,
        s
      ], this.pageTranslation = [
        n,
        r
      ];
      const [a, o] = this.parentDimensions;
      this.x = t.x / a, this.y = t.y / o, this.isAttachedToDOM = false, this.deleted = false;
    }
    updatePageIndex(t) {
      this.pageIndex = t;
    }
    get editorType() {
      return Object.getPrototypeOf(this).constructor._type;
    }
    get mode() {
      return Object.getPrototypeOf(this).constructor._editorType;
    }
    static get isDrawer() {
      return false;
    }
    static get _defaultLineColor() {
      return $(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
    }
    static deleteAnnotationElement(t) {
      const e = new Wn({
        id: t._uiManager.getId(),
        parent: t.parent,
        uiManager: t._uiManager
      });
      e.annotationElementId = t.annotationElementId, e.deleted = true, e._uiManager.addToAnnotationStorage(e);
    }
    static initialize(t, e) {
      if (O._l10n ??= t, O._l10nAlert ??= Object.freeze({
        highlight: "pdfjs-editor-highlight-added-alert",
        freetext: "pdfjs-editor-freetext-added-alert",
        ink: "pdfjs-editor-ink-added-alert",
        stamp: "pdfjs-editor-stamp-added-alert",
        signature: "pdfjs-editor-signature-added-alert"
      }), O._l10nResizer ??= Object.freeze({
        topLeft: "pdfjs-editor-resizer-top-left",
        topMiddle: "pdfjs-editor-resizer-top-middle",
        topRight: "pdfjs-editor-resizer-top-right",
        middleRight: "pdfjs-editor-resizer-middle-right",
        bottomRight: "pdfjs-editor-resizer-bottom-right",
        bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
        bottomLeft: "pdfjs-editor-resizer-bottom-left",
        middleLeft: "pdfjs-editor-resizer-middle-left"
      }), O._borderLineWidth !== -1) return;
      const i = getComputedStyle(document.documentElement);
      O._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0;
    }
    static updateDefaultParams(t, e) {
    }
    static get defaultPropertiesToUpdate() {
      return [];
    }
    static isHandlingMimeForPasting(t) {
      return false;
    }
    static paste(t, e) {
      K("Not implemented");
    }
    get propertiesToUpdate() {
      return [];
    }
    get _isDraggable() {
      return this.#x;
    }
    set _isDraggable(t) {
      this.#x = t, this.div?.classList.toggle("draggable", t);
    }
    get uid() {
      return this.annotationElementId || this.id;
    }
    get isEnterHandled() {
      return true;
    }
    center() {
      const [t, e] = this.pageDimensions;
      switch (this.parentRotation) {
        case 90:
          this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
          break;
        case 180:
          this.x += this.width / 2, this.y += this.height / 2;
          break;
        case 270:
          this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
          break;
        default:
          this.x -= this.width / 2, this.y -= this.height / 2;
          break;
      }
      this.fixAndSetPosition();
    }
    addCommands(t) {
      this._uiManager.addCommands(t);
    }
    get currentLayer() {
      return this._uiManager.currentLayer;
    }
    setInBackground() {
      this.div.style.zIndex = 0;
    }
    setInForeground() {
      this.div.style.zIndex = this.#T;
    }
    setParent(t) {
      t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (this.#N(), this.#d?.remove(), this.#d = null), this.parent = t;
    }
    focusin(t) {
      this._focusEventsAllowed && (this.#g ? this.#g = false : this.parent.setSelected(this));
    }
    focusout(t) {
      !this._focusEventsAllowed || !this.isAttachedToDOM || t.relatedTarget?.closest(`#${this.id}`) || (t.preventDefault(), this.parent?.isMultipleSelection || this.commitOrRemove());
    }
    commitOrRemove() {
      this.isEmpty() ? this.remove() : this.commit();
    }
    commit() {
      this.isInEditMode() && this.addToAnnotationStorage();
    }
    addToAnnotationStorage() {
      this._uiManager.addToAnnotationStorage(this);
    }
    setAt(t, e, i, s) {
      const [n, r] = this.parentDimensions;
      [i, s] = this.screenToPageTranslation(i, s), this.x = (t + i) / n, this.y = (e + s) / r, this.fixAndSetPosition();
    }
    _moveAfterPaste(t, e) {
      if (this.isClone) {
        delete this.isClone;
        return;
      }
      const [i, s] = this.parentDimensions;
      this.setAt(t * i, e * s, this.width * i, this.height * s), this._onTranslated();
    }
    #M([t, e], i, s) {
      [i, s] = this.screenToPageTranslation(i, s), this.x += i / t, this.y += s / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
    }
    translate(t, e) {
      this.#M(this.parentDimensions, t, e);
    }
    translateInPage(t, e) {
      this.#c ||= [
        this.x,
        this.y,
        this.width,
        this.height
      ], this.#M(this.pageDimensions, t, e), this.div.scrollIntoView({
        block: "nearest"
      });
    }
    translationDone() {
      this._onTranslated(this.x, this.y);
    }
    drag(t, e) {
      this.#c ||= [
        this.x,
        this.y,
        this.width,
        this.height
      ];
      const { div: i, parentDimensions: [s, n] } = this;
      if (this.x += t / s, this.y += e / n, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
        const { x: c, y: d } = this.div.getBoundingClientRect();
        this.parent.findNewParent(this, c, d) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
      }
      let { x: r, y: a } = this;
      const [o, l] = this.getBaseTranslation();
      r += o, a += l;
      const { style: h } = i;
      h.left = `${(100 * r).toFixed(2)}%`, h.top = `${(100 * a).toFixed(2)}%`, this._onTranslating(r, a), i.scrollIntoView({
        block: "nearest"
      });
    }
    _onTranslating(t, e) {
    }
    _onTranslated(t, e) {
    }
    get _hasBeenMoved() {
      return !!this.#c && (this.#c[0] !== this.x || this.#c[1] !== this.y);
    }
    get _hasBeenResized() {
      return !!this.#c && (this.#c[2] !== this.width || this.#c[3] !== this.height);
    }
    getBaseTranslation() {
      const [t, e] = this.parentDimensions, { _borderLineWidth: i } = O, s = i / t, n = i / e;
      switch (this.rotation) {
        case 90:
          return [
            -s,
            n
          ];
        case 180:
          return [
            s,
            n
          ];
        case 270:
          return [
            s,
            -n
          ];
        default:
          return [
            -s,
            -n
          ];
      }
    }
    get _mustFixPosition() {
      return true;
    }
    fixAndSetPosition(t = this.rotation) {
      const { div: { style: e }, pageDimensions: [i, s] } = this;
      let { x: n, y: r, width: a, height: o } = this;
      if (a *= i, o *= s, n *= i, r *= s, this._mustFixPosition) switch (t) {
        case 0:
          n = nt(n, 0, i - a), r = nt(r, 0, s - o);
          break;
        case 90:
          n = nt(n, 0, i - o), r = nt(r, a, s);
          break;
        case 180:
          n = nt(n, a, i), r = nt(r, o, s);
          break;
        case 270:
          n = nt(n, o, i), r = nt(r, 0, s - a);
          break;
      }
      this.x = n /= i, this.y = r /= s;
      const [l, h] = this.getBaseTranslation();
      n += l, r += h, e.left = `${(100 * n).toFixed(2)}%`, e.top = `${(100 * r).toFixed(2)}%`, this.moveInDOM();
    }
    static #P(t, e, i) {
      switch (i) {
        case 90:
          return [
            e,
            -t
          ];
        case 180:
          return [
            -t,
            -e
          ];
        case 270:
          return [
            -e,
            t
          ];
        default:
          return [
            t,
            e
          ];
      }
    }
    screenToPageTranslation(t, e) {
      return O.#P(t, e, this.parentRotation);
    }
    pageTranslationToScreen(t, e) {
      return O.#P(t, e, 360 - this.parentRotation);
    }
    #k(t) {
      switch (t) {
        case 90: {
          const [e, i] = this.pageDimensions;
          return [
            0,
            -e / i,
            i / e,
            0
          ];
        }
        case 180:
          return [
            -1,
            0,
            0,
            -1
          ];
        case 270: {
          const [e, i] = this.pageDimensions;
          return [
            0,
            e / i,
            -i / e,
            0
          ];
        }
        default:
          return [
            1,
            0,
            0,
            1
          ];
      }
    }
    get parentScale() {
      return this._uiManager.viewParameters.realScale;
    }
    get parentRotation() {
      return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
    }
    get parentDimensions() {
      const { parentScale: t, pageDimensions: [e, i] } = this;
      return [
        e * t,
        i * t
      ];
    }
    setDims() {
      const { div: { style: t }, width: e, height: i } = this;
      t.width = `${(100 * e).toFixed(2)}%`, t.height = `${(100 * i).toFixed(2)}%`;
    }
    getInitialTranslation() {
      return [
        0,
        0
      ];
    }
    #F() {
      if (this.#h) return;
      this.#h = document.createElement("div"), this.#h.classList.add("resizers");
      const t = this._willKeepAspectRatio ? [
        "topLeft",
        "topRight",
        "bottomRight",
        "bottomLeft"
      ] : [
        "topLeft",
        "topMiddle",
        "topRight",
        "middleRight",
        "bottomRight",
        "bottomMiddle",
        "bottomLeft",
        "middleLeft"
      ], e = this._uiManager._signal;
      for (const i of t) {
        const s = document.createElement("div");
        this.#h.append(s), s.classList.add("resizer", i), s.setAttribute("data-resizer-name", i), s.addEventListener("pointerdown", this.#L.bind(this, i), {
          signal: e
        }), s.addEventListener("contextmenu", Ft, {
          signal: e
        }), s.tabIndex = -1;
      }
      this.div.prepend(this.#h);
    }
    #L(t, e) {
      e.preventDefault();
      const { isMac: i } = Z.platform;
      if (e.button !== 0 || e.ctrlKey && i) return;
      this.#i?.toggle(false);
      const s = this._isDraggable;
      this._isDraggable = false, this.#l = [
        e.screenX,
        e.screenY
      ];
      const n = new AbortController(), r = this._uiManager.combinedSignal(n);
      this.parent.togglePointerEvents(false), window.addEventListener("pointermove", this.#O.bind(this, t), {
        passive: true,
        capture: true,
        signal: r
      }), window.addEventListener("touchmove", lt, {
        passive: false,
        signal: r
      }), window.addEventListener("contextmenu", Ft, {
        signal: r
      }), this.#u = {
        savedX: this.x,
        savedY: this.y,
        savedWidth: this.width,
        savedHeight: this.height
      };
      const a = this.parent.div.style.cursor, o = this.div.style.cursor;
      this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
      const l = () => {
        n.abort(), this.parent.togglePointerEvents(true), this.#i?.toggle(true), this._isDraggable = s, this.parent.div.style.cursor = a, this.div.style.cursor = o, this.#R();
      };
      window.addEventListener("pointerup", l, {
        signal: r
      }), window.addEventListener("blur", l, {
        signal: r
      });
    }
    #D(t, e, i, s) {
      this.width = i, this.height = s, this.x = t, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
    }
    _onResized() {
    }
    #R() {
      if (!this.#u) return;
      const { savedX: t, savedY: e, savedWidth: i, savedHeight: s } = this.#u;
      this.#u = null;
      const n = this.x, r = this.y, a = this.width, o = this.height;
      n === t && r === e && a === i && o === s || this.addCommands({
        cmd: this.#D.bind(this, n, r, a, o),
        undo: this.#D.bind(this, t, e, i, s),
        mustExec: true
      });
    }
    static _round(t) {
      return Math.round(t * 1e4) / 1e4;
    }
    #O(t, e) {
      const [i, s] = this.parentDimensions, n = this.x, r = this.y, a = this.width, o = this.height, l = O.MIN_SIZE / i, h = O.MIN_SIZE / s, c = this.#k(this.rotation), d = (U, N) => [
        c[0] * U + c[2] * N,
        c[1] * U + c[3] * N
      ], p = this.#k(360 - this.rotation), m = (U, N) => [
        p[0] * U + p[2] * N,
        p[1] * U + p[3] * N
      ];
      let b, y, w = false, v = false;
      switch (t) {
        case "topLeft":
          w = true, b = (U, N) => [
            0,
            0
          ], y = (U, N) => [
            U,
            N
          ];
          break;
        case "topMiddle":
          b = (U, N) => [
            U / 2,
            0
          ], y = (U, N) => [
            U / 2,
            N
          ];
          break;
        case "topRight":
          w = true, b = (U, N) => [
            U,
            0
          ], y = (U, N) => [
            0,
            N
          ];
          break;
        case "middleRight":
          v = true, b = (U, N) => [
            U,
            N / 2
          ], y = (U, N) => [
            0,
            N / 2
          ];
          break;
        case "bottomRight":
          w = true, b = (U, N) => [
            U,
            N
          ], y = (U, N) => [
            0,
            0
          ];
          break;
        case "bottomMiddle":
          b = (U, N) => [
            U / 2,
            N
          ], y = (U, N) => [
            U / 2,
            0
          ];
          break;
        case "bottomLeft":
          w = true, b = (U, N) => [
            0,
            N
          ], y = (U, N) => [
            U,
            0
          ];
          break;
        case "middleLeft":
          v = true, b = (U, N) => [
            0,
            N / 2
          ], y = (U, N) => [
            U,
            N / 2
          ];
          break;
      }
      const E = b(a, o), _ = y(a, o);
      let S = d(..._);
      const T = O._round(n + S[0]), M = O._round(r + S[1]);
      let I = 1, F = 1, R, B;
      if (e.fromKeyboard) ({ deltaX: R, deltaY: B } = e);
      else {
        const { screenX: U, screenY: N } = e, [bt, yt] = this.#l;
        [R, B] = this.screenToPageTranslation(U - bt, N - yt), this.#l[0] = U, this.#l[1] = N;
      }
      if ([R, B] = m(R / i, B / s), w) {
        const U = Math.hypot(a, o);
        I = F = Math.max(Math.min(Math.hypot(_[0] - E[0] - R, _[1] - E[1] - B) / U, 1 / a, 1 / o), l / a, h / o);
      } else v ? I = nt(Math.abs(_[0] - E[0] - R), l, 1) / a : F = nt(Math.abs(_[1] - E[1] - B), h, 1) / o;
      const H = O._round(a * I), X = O._round(o * F);
      S = d(...y(H, X));
      const Y = T - S[0], rt = M - S[1];
      this.#c ||= [
        this.x,
        this.y,
        this.width,
        this.height
      ], this.width = H, this.height = X, this.x = Y, this.y = rt, this.setDims(), this.fixAndSetPosition(), this._onResizing();
    }
    _onResizing() {
    }
    altTextFinish() {
      this.#i?.finish();
    }
    get toolbarButtons() {
      return null;
    }
    async addEditToolbar() {
      if (this._editToolbar || this.#y) return this._editToolbar;
      this._editToolbar = new Te(this), this.div.append(this._editToolbar.render());
      const { toolbarButtons: t } = this;
      if (t) for (const [e, i] of t) await this._editToolbar.addButton(e, i);
      return this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton()), this._editToolbar.addButton("delete"), this._editToolbar;
    }
    addCommentButtonInToolbar() {
      this._editToolbar?.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
    }
    removeCommentButtonFromToolbar() {
      this._editToolbar?.removeButton("comment");
    }
    removeEditToolbar() {
      this._editToolbar?.remove(), this._editToolbar = null, this.#i?.destroy();
    }
    addContainer(t) {
      const e = this._editToolbar?.div;
      e ? e.before(t) : this.div.append(t);
    }
    getClientDimensions() {
      return this.div.getBoundingClientRect();
    }
    createAltText() {
      return this.#i || ($t.initialize(O._l10n), this.#i = new $t(this), this.#t && (this.#i.data = this.#t, this.#t = null)), this.#i;
    }
    get altTextData() {
      return this.#i?.data;
    }
    set altTextData(t) {
      this.#i && (this.#i.data = t);
    }
    get guessedAltText() {
      return this.#i?.guessedText;
    }
    async setGuessedAltText(t) {
      await this.#i?.setGuessedText(t);
    }
    serializeAltText(t) {
      return this.#i?.serialize(t);
    }
    hasAltText() {
      return !!this.#i && !this.#i.isEmpty();
    }
    hasAltTextData() {
      return this.#i?.hasData() ?? false;
    }
    focusCommentButton() {
      this.#s?.focusButton();
    }
    addCommentButton() {
      return this.canAddComment ? this.#s ||= new je(this) : null;
    }
    addStandaloneCommentButton() {
      if (this._uiManager.hasCommentManager()) {
        if (this.#n) {
          this._uiManager.isEditingMode() && this.#n.classList.remove("hidden");
          return;
        }
        this.hasComment && (this.#n = this.#s.renderForStandalone(), this.div.append(this.#n));
      }
    }
    removeStandaloneCommentButton() {
      this.#s.removeStandaloneCommentButton(), this.#n = null;
    }
    hideStandaloneCommentButton() {
      this.#n?.classList.add("hidden");
    }
    get comment() {
      if (!this.#s) return null;
      const { data: { richText: t, text: e, date: i, deleted: s } } = this.#s;
      return {
        text: e,
        richText: t,
        date: i,
        deleted: s,
        color: this.getNonHCMColor(),
        opacity: this.opacity ?? 1
      };
    }
    set comment(t) {
      this.#s ||= new je(this), typeof t == "object" && t !== null ? this.#s.restoreData(t) : this.#s.data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
    }
    setCommentData({ comment: t, popupRef: e, richText: i }) {
      if (!e || (this.#s ||= new je(this), this.#s.setInitialText(t, i), !this.annotationElementId)) return;
      const s = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
      s && this.updateFromAnnotationLayer(s);
    }
    get hasEditedComment() {
      return this.#s?.hasBeenEdited();
    }
    get hasDeletedComment() {
      return this.#s?.isDeleted();
    }
    get hasComment() {
      return !!this.#s && !this.#s.isEmpty() && !this.#s.isDeleted();
    }
    async editComment(t) {
      this.#s ||= new je(this), this.#s.edit(t);
    }
    toggleComment(t, e = void 0) {
      this.hasComment && this._uiManager.toggleComment(this, t, e);
    }
    setSelectedCommentButton(t) {
      this.#s.setSelectedButton(t);
    }
    addComment(t) {
      if (this.hasEditedComment) {
        const [, , , s] = t.rect, [n] = this.pageDimensions, [r] = this.pageTranslation, a = r + n + 1, o = s - 100, l = a + 180;
        t.popup = {
          contents: this.comment.text,
          deleted: this.comment.deleted,
          rect: [
            a,
            o,
            l,
            s
          ]
        };
      }
    }
    updateFromAnnotationLayer({ popup: { contents: t, deleted: e } }) {
      this.#s.data = e ? null : t;
    }
    get parentBoundingClientRect() {
      return this.parent.boundingClientRect;
    }
    render() {
      const t = this.div = document.createElement("div");
      t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t.className = this.name, t.setAttribute("id", this.id), t.tabIndex = this.#a ? -1 : 0, t.setAttribute("role", "application"), this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t.classList.add("hidden"), this.setInForeground(), this.#G();
      const [e, i] = this.parentDimensions;
      this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * i / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / i).toFixed(2)}%`);
      const [s, n] = this.getInitialTranslation();
      return this.translate(s, n), Xs(this, t, [
        "keydown",
        "pointerdown",
        "dblclick"
      ]), this.isResizable && this._uiManager._supportsPinchToZoom && (this.#C ||= new hi({
        container: t,
        isPinchingDisabled: () => !this.isSelected,
        onPinchStart: this.#U.bind(this),
        onPinching: this.#V.bind(this),
        onPinchEnd: this.#_.bind(this),
        signal: this._uiManager._signal
      })), this.addStandaloneCommentButton(), this._uiManager._editorUndoBar?.hide(), t;
    }
    #U() {
      this.#u = {
        savedX: this.x,
        savedY: this.y,
        savedWidth: this.width,
        savedHeight: this.height
      }, this.#i?.toggle(false), this.parent.togglePointerEvents(false);
    }
    #V(t, e, i) {
      let n = 0.7 * (i / e) + 1 - 0.7;
      if (n === 1) return;
      const r = this.#k(this.rotation), a = (T, M) => [
        r[0] * T + r[2] * M,
        r[1] * T + r[3] * M
      ], [o, l] = this.parentDimensions, h = this.x, c = this.y, d = this.width, p = this.height, m = O.MIN_SIZE / o, b = O.MIN_SIZE / l;
      n = Math.max(Math.min(n, 1 / d, 1 / p), m / d, b / p);
      const y = O._round(d * n), w = O._round(p * n);
      if (y === d && w === p) return;
      this.#c ||= [
        h,
        c,
        d,
        p
      ];
      const v = a(d / 2, p / 2), E = O._round(h + v[0]), _ = O._round(c + v[1]), S = a(y / 2, w / 2);
      this.x = E - S[0], this.y = _ - S[1], this.width = y, this.height = w, this.setDims(), this.fixAndSetPosition(), this._onResizing();
    }
    #_() {
      this.#i?.toggle(true), this.parent.togglePointerEvents(true), this.#R();
    }
    pointerdown(t) {
      const { isMac: e } = Z.platform;
      if (t.button !== 0 || t.ctrlKey && e) {
        t.preventDefault();
        return;
      }
      if (this.#g = true, this._isDraggable) {
        this.#B(t);
        return;
      }
      this.#v(t);
    }
    #v(t) {
      const { isMac: e } = Z.platform;
      t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
    }
    #B(t) {
      const { isSelected: e } = this;
      this._uiManager.setUpDragSession();
      let i = false;
      const s = new AbortController(), n = this._uiManager.combinedSignal(s), r = {
        capture: true,
        passive: false,
        signal: n
      }, a = (l) => {
        s.abort(), this.#r = null, this.#g = false, this._uiManager.endDragSession() || this.#v(l), i && this._onStopDragging();
      };
      e && (this.#E = t.clientX, this.#S = t.clientY, this.#r = t.pointerId, this.#o = t.pointerType, window.addEventListener("pointermove", (l) => {
        i || (i = true, this._uiManager.toggleComment(this, true, false), this._onStartDragging());
        const { clientX: h, clientY: c, pointerId: d } = l;
        if (d !== this.#r) {
          lt(l);
          return;
        }
        const [p, m] = this.screenToPageTranslation(h - this.#E, c - this.#S);
        this.#E = h, this.#S = c, this._uiManager.dragSelectedEditors(p, m);
      }, r), window.addEventListener("touchmove", lt, r), window.addEventListener("pointerdown", (l) => {
        l.pointerType === this.#o && (this.#C || l.isPrimary) && a(l), lt(l);
      }, r));
      const o = (l) => {
        if (!this.#r || this.#r === l.pointerId) {
          a(l);
          return;
        }
        lt(l);
      };
      window.addEventListener("pointerup", o, {
        signal: n
      }), window.addEventListener("blur", o, {
        signal: n
      });
    }
    _onStartDragging() {
    }
    _onStopDragging() {
    }
    moveInDOM() {
      this.#b && clearTimeout(this.#b), this.#b = setTimeout(() => {
        this.#b = null, this.parent?.moveEditorInDOM(this);
      }, 0);
    }
    _setParentAndPosition(t, e, i) {
      t.changeParent(this), this.x = e, this.y = i, this.fixAndSetPosition(), this._onTranslated();
    }
    getRect(t, e, i = this.rotation) {
      const s = this.parentScale, [n, r] = this.pageDimensions, [a, o] = this.pageTranslation, l = t / s, h = e / s, c = this.x * n, d = this.y * r, p = this.width * n, m = this.height * r;
      switch (i) {
        case 0:
          return [
            c + l + a,
            r - d - h - m + o,
            c + l + p + a,
            r - d - h + o
          ];
        case 90:
          return [
            c + h + a,
            r - d + l + o,
            c + h + m + a,
            r - d + l + p + o
          ];
        case 180:
          return [
            c - l - p + a,
            r - d + h + o,
            c - l + a,
            r - d + h + m + o
          ];
        case 270:
          return [
            c - h - m + a,
            r - d - l - p + o,
            c - h + a,
            r - d - l + o
          ];
        default:
          throw new Error("Invalid rotation");
      }
    }
    getRectInCurrentCoords(t, e) {
      const [i, s, n, r] = t, a = n - i, o = r - s;
      switch (this.rotation) {
        case 0:
          return [
            i,
            e - r,
            a,
            o
          ];
        case 90:
          return [
            i,
            e - s,
            o,
            a
          ];
        case 180:
          return [
            n,
            e - s,
            a,
            o
          ];
        case 270:
          return [
            n,
            e - r,
            o,
            a
          ];
        default:
          throw new Error("Invalid rotation");
      }
    }
    getPDFRect() {
      return this.getRect(0, 0);
    }
    getNonHCMColor() {
      return this.color && O._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
    }
    onUpdatedColor() {
      this.#s?.onUpdatedColor();
    }
    getData() {
      const { comment: { text: t, color: e, date: i, opacity: s, deleted: n, richText: r }, uid: a, pageIndex: o, creationDate: l, modificationDate: h } = this;
      return {
        id: a,
        pageIndex: o,
        rect: this.getPDFRect(),
        richText: r,
        contentsObj: {
          str: t
        },
        creationDate: l,
        modificationDate: i || h,
        popupRef: !n,
        color: e,
        opacity: s
      };
    }
    onceAdded(t) {
    }
    isEmpty() {
      return false;
    }
    enableEditMode() {
      return this.isInEditMode() ? false : (this.parent.setEditingState(false), this.#y = true, true);
    }
    disableEditMode() {
      return this.isInEditMode() ? (this.parent.setEditingState(true), this.#y = false, true) : false;
    }
    isInEditMode() {
      return this.#y;
    }
    shouldGetKeyboardEvents() {
      return this.#A;
    }
    needsToBeRebuilt() {
      return this.div && !this.isAttachedToDOM;
    }
    get isOnScreen() {
      const { top: t, left: e, bottom: i, right: s } = this.getClientDimensions(), { innerHeight: n, innerWidth: r } = window;
      return e < r && s > 0 && t < n && i > 0;
    }
    #G() {
      if (this.#p || !this.div) return;
      this.#p = new AbortController();
      const t = this._uiManager.combinedSignal(this.#p);
      this.div.addEventListener("focusin", this.focusin.bind(this), {
        signal: t
      }), this.div.addEventListener("focusout", this.focusout.bind(this), {
        signal: t
      });
    }
    rebuild() {
      this.#G();
    }
    rotate(t) {
    }
    resize() {
    }
    serializeDeleted() {
      return {
        id: this.annotationElementId,
        deleted: true,
        pageIndex: this.pageIndex,
        popupRef: this._initialData?.popupRef || ""
      };
    }
    serialize(t = false, e = null) {
      return {
        annotationType: this.mode,
        pageIndex: this.pageIndex,
        rect: this.getPDFRect(),
        rotation: this.rotation,
        structTreeParentId: this._structTreeParentId,
        popupRef: this._initialData?.popupRef || ""
      };
    }
    static async deserialize(t, e, i) {
      const s = new this.prototype.constructor({
        parent: e,
        id: i.getId(),
        uiManager: i,
        annotationElementId: t.annotationElementId,
        creationDate: t.creationDate,
        modificationDate: t.modificationDate
      });
      s.rotation = t.rotation, s.#t = t.accessibilityData, s._isCopy = t.isCopy || false;
      const [n, r] = s.pageDimensions, [a, o, l, h] = s.getRectInCurrentCoords(t.rect, r);
      return s.x = a / n, s.y = o / r, s.width = l / n, s.height = h / r, s;
    }
    get hasBeenModified() {
      return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
    }
    remove() {
      if (this.#p?.abort(), this.#p = null, this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), this.hideCommentPopup(), this.#b && (clearTimeout(this.#b), this.#b = null), this.#N(), this.removeEditToolbar(), this.#w) {
        for (const t of this.#w.values()) clearTimeout(t);
        this.#w = null;
      }
      this.parent = null, this.#C?.destroy(), this.#C = null, this.#d?.remove(), this.#d = null;
    }
    get isResizable() {
      return false;
    }
    makeResizable() {
      this.isResizable && (this.#F(), this.#h.classList.remove("hidden"));
    }
    get toolbarPosition() {
      return null;
    }
    get commentButtonPosition() {
      return this._uiManager.direction === "ltr" ? [
        1,
        0
      ] : [
        0,
        0
      ];
    }
    get commentButtonPositionInPage() {
      const { commentButtonPosition: [t, e] } = this, [i, s, n, r] = this.getPDFRect();
      return [
        O._round(i + (n - i) * t),
        O._round(s + (r - s) * (1 - e))
      ];
    }
    get commentButtonColor() {
      return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
    }
    get commentPopupPosition() {
      return this.#s.commentPopupPositionInLayer;
    }
    set commentPopupPosition(t) {
      this.#s.commentPopupPositionInLayer = t;
    }
    hasDefaultPopupPosition() {
      return this.#s.hasDefaultPopupPosition();
    }
    get commentButtonWidth() {
      return this.#s.commentButtonWidth;
    }
    get elementBeforePopup() {
      return this.div;
    }
    setCommentButtonStates(t) {
      this.#s?.setCommentButtonStates(t);
    }
    keydown(t) {
      if (!this.isResizable || t.target !== this.div || t.key !== "Enter") return;
      this._uiManager.setSelected(this), this.#u = {
        savedX: this.x,
        savedY: this.y,
        savedWidth: this.width,
        savedHeight: this.height
      };
      const e = this.#h.children;
      if (!this.#e) {
        this.#e = Array.from(e);
        const r = this.#j.bind(this), a = this.#q.bind(this), o = this._uiManager._signal;
        for (const l of this.#e) {
          const h = l.getAttribute("data-resizer-name");
          l.setAttribute("role", "spinbutton"), l.addEventListener("keydown", r, {
            signal: o
          }), l.addEventListener("blur", a, {
            signal: o
          }), l.addEventListener("focus", this.#X.bind(this, h), {
            signal: o
          }), l.setAttribute("data-l10n-id", O._l10nResizer[h]);
        }
      }
      const i = this.#e[0];
      let s = 0;
      for (const r of e) {
        if (r === i) break;
        s++;
      }
      const n = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#e.length / 4);
      if (n !== s) {
        if (n < s) for (let a = 0; a < s - n; a++) this.#h.append(this.#h.firstElementChild);
        else if (n > s) for (let a = 0; a < n - s; a++) this.#h.firstElementChild.before(this.#h.lastElementChild);
        let r = 0;
        for (const a of e) {
          const l = this.#e[r++].getAttribute("data-resizer-name");
          a.setAttribute("data-l10n-id", O._l10nResizer[l]);
        }
      }
      this.#Y(0), this.#A = true, this.#h.firstElementChild.focus({
        focusVisible: true
      }), t.preventDefault(), t.stopImmediatePropagation();
    }
    #j(t) {
      O._resizerKeyboardManager.exec(this, t);
    }
    #q(t) {
      this.#A && t.relatedTarget?.parentNode !== this.#h && this.#N();
    }
    #X(t) {
      this.#m = this.#A ? t : "";
    }
    #Y(t) {
      if (this.#e) for (const e of this.#e) e.tabIndex = t;
    }
    _resizeWithKeyboard(t, e) {
      this.#A && this.#O(this.#m, {
        deltaX: t,
        deltaY: e,
        fromKeyboard: true
      });
    }
    #N() {
      this.#A = false, this.#Y(-1), this.#R();
    }
    _stopResizingWithKeyboard() {
      this.#N(), this.div.focus();
    }
    select() {
      if (this.isSelected && this._editToolbar) {
        this._editToolbar.show();
        return;
      }
      if (this.isSelected = true, this.makeResizable(), this.div?.classList.add("selectedEditor"), !this._editToolbar) {
        this.addEditToolbar().then(() => {
          this.div?.classList.contains("selectedEditor") && this._editToolbar?.show();
        });
        return;
      }
      this._editToolbar?.show(), this.#i?.toggleAltTextBadge(false);
    }
    focus() {
      this.div && !this.div.contains(document.activeElement) && setTimeout(() => this.div?.focus({
        preventScroll: true
      }), 0);
    }
    unselect() {
      this.isSelected && (this.isSelected = false, this.#h?.classList.add("hidden"), this.div?.classList.remove("selectedEditor"), this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
        preventScroll: true
      }), this._editToolbar?.hide(), this.#i?.toggleAltTextBadge(true), this.hideCommentPopup());
    }
    hideCommentPopup() {
      this.hasComment && this._uiManager.toggleComment(null);
    }
    updateParams(t, e) {
    }
    disableEditing() {
    }
    enableEditing() {
    }
    get canChangeContent() {
      return false;
    }
    enterInEditMode() {
      this.canChangeContent && (this.enableEditMode(), this.div.focus());
    }
    dblclick(t) {
      t.target.nodeName !== "BUTTON" && (this.enterInEditMode(), this.parent.updateToolbar({
        mode: this.constructor._editorType,
        editId: this.uid
      }));
    }
    getElementForAltText() {
      return this.div;
    }
    get contentDiv() {
      return this.div;
    }
    get isEditing() {
      return this.#f;
    }
    set isEditing(t) {
      this.#f = t, this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
    }
    static get MIN_SIZE() {
      return 16;
    }
    static canCreateNewEmptyEditor() {
      return true;
    }
    get telemetryInitialData() {
      return {
        action: "added"
      };
    }
    get telemetryFinalData() {
      return null;
    }
    _reportTelemetry(t, e = false) {
      if (e) {
        this.#w ||= /* @__PURE__ */ new Map();
        const { action: i } = t;
        let s = this.#w.get(i);
        s && clearTimeout(s), s = setTimeout(() => {
          this._reportTelemetry(t), this.#w.delete(i), this.#w.size === 0 && (this.#w = null);
        }, O._telemetryTimeout), this.#w.set(i, s);
        return;
      }
      t.type ||= this.editorType, this._uiManager._eventBus.dispatch("reporttelemetry", {
        source: this,
        details: {
          type: "editing",
          data: t
        }
      });
    }
    show(t = this._isVisible) {
      this.div.classList.toggle("hidden", !t), this._isVisible = t;
    }
    enable() {
      this.div && (this.div.tabIndex = 0), this.#a = false;
    }
    disable() {
      this.div && (this.div.tabIndex = -1), this.#a = true;
    }
    updateFakeAnnotationElement(t) {
      if (!this.#d && !this.deleted) {
        this.#d = t.addFakeAnnotation(this);
        return;
      }
      if (this.deleted) {
        this.#d.remove(), this.#d = null;
        return;
      }
      (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && this.#d.updateEdited({
        rect: this.getPDFRect(),
        popup: this.comment
      });
    }
    renderAnnotationElement(t) {
      if (this.deleted) return t.hide(), null;
      let e = t.container.querySelector(".annotationContent");
      if (!e) e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
      else if (e.nodeName === "CANVAS") {
        const i = e;
        e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), i.before(e);
      }
      return e;
    }
    resetAnnotationElement(t) {
      const { firstElementChild: e } = t.container;
      e?.nodeName === "DIV" && e.classList.contains("annotationContent") && e.remove();
    }
  }
  class Wn extends O {
    constructor(t) {
      super(t), this.annotationElementId = t.annotationElementId, this.deleted = true;
    }
    serialize() {
      return this.serializeDeleted();
    }
  }
  const As = 3285377520, Pt = 4294901760, Ut = 65535;
  class Ni {
    constructor(t) {
      this.h1 = t ? t & 4294967295 : As, this.h2 = t ? t & 4294967295 : As;
    }
    update(t) {
      let e, i;
      if (typeof t == "string") {
        e = new Uint8Array(t.length * 2), i = 0;
        for (let b = 0, y = t.length; b < y; b++) {
          const w = t.charCodeAt(b);
          w <= 255 ? e[i++] = w : (e[i++] = w >>> 8, e[i++] = w & 255);
        }
      } else if (ArrayBuffer.isView(t)) e = t.slice(), i = e.byteLength;
      else throw new Error("Invalid data format, must be a string or TypedArray.");
      const s = i >> 2, n = i - s * 4, r = new Uint32Array(e.buffer, 0, s);
      let a = 0, o = 0, l = this.h1, h = this.h2;
      const c = 3432918353, d = 461845907, p = c & Ut, m = d & Ut;
      for (let b = 0; b < s; b++) b & 1 ? (a = r[b], a = a * c & Pt | a * p & Ut, a = a << 15 | a >>> 17, a = a * d & Pt | a * m & Ut, l ^= a, l = l << 13 | l >>> 19, l = l * 5 + 3864292196) : (o = r[b], o = o * c & Pt | o * p & Ut, o = o << 15 | o >>> 17, o = o * d & Pt | o * m & Ut, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196);
      switch (a = 0, n) {
        case 3:
          a ^= e[s * 4 + 2] << 16;
        case 2:
          a ^= e[s * 4 + 1] << 8;
        case 1:
          a ^= e[s * 4], a = a * c & Pt | a * p & Ut, a = a << 15 | a >>> 17, a = a * d & Pt | a * m & Ut, s & 1 ? l ^= a : h ^= a;
      }
      this.h1 = l, this.h2 = h;
    }
    hexdigest() {
      let t = this.h1, e = this.h2;
      return t ^= e >>> 1, t = t * 3981806797 & Pt | t * 36045 & Ut, e = e * 4283543511 & Pt | ((e << 16 | t >>> 16) * 2950163797 & Pt) >>> 16, t ^= e >>> 1, t = t * 444984403 & Pt | t * 60499 & Ut, e = e * 3301882366 & Pt | ((e << 16 | t >>> 16) * 3120437893 & Pt) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
    }
  }
  const De = Object.freeze({
    map: null,
    hash: "",
    transfer: void 0
  });
  class Ji {
    #t = false;
    #e = null;
    #i = null;
    #s = /* @__PURE__ */ new Map();
    onSetModified = null;
    onResetModified = null;
    onAnnotationEditor = null;
    getValue(t, e) {
      const i = this.#s.get(t);
      return i === void 0 ? e : Object.assign(e, i);
    }
    getRawValue(t) {
      return this.#s.get(t);
    }
    remove(t) {
      const e = this.#s.get(t);
      e !== void 0 && (e instanceof O && this.#i.delete(e.annotationElementId), this.#s.delete(t), this.#s.size === 0 && this.resetModified(), !this.#s.values().some((i) => i instanceof O) && this.onAnnotationEditor?.(null));
    }
    setValue(t, e) {
      const i = this.#s.get(t);
      let s = false;
      if (i !== void 0) for (const [n, r] of Object.entries(e)) i[n] !== r && (s = true, i[n] = r);
      else s = true, this.#s.set(t, e);
      s && this.#n(), e instanceof O && ((this.#i ||= /* @__PURE__ */ new Map()).set(e.annotationElementId, e), this.onAnnotationEditor?.(e.constructor._type));
    }
    has(t) {
      return this.#s.has(t);
    }
    get size() {
      return this.#s.size;
    }
    #n() {
      this.#t || (this.#t = true, this.onSetModified?.());
    }
    resetModified() {
      this.#t && (this.#t = false, this.onResetModified?.());
    }
    get print() {
      return new Ys(this);
    }
    get serializable() {
      if (this.#s.size === 0) return De;
      const t = /* @__PURE__ */ new Map(), e = new Ni(), i = [], s = /* @__PURE__ */ Object.create(null);
      let n = false;
      for (const [r, a] of this.#s) {
        const o = a instanceof O ? a.serialize(false, s) : a;
        a.page && (a.pageIndex = a.page._pageIndex, delete a.page), o && (t.set(r, o), e.update(`${r}:${JSON.stringify(o)}`), n ||= !!o.bitmap);
      }
      if (n) for (const r of t.values()) r.bitmap && i.push(r.bitmap);
      return t.size > 0 ? {
        map: t,
        hash: e.hexdigest(),
        transfer: i
      } : De;
    }
    get editorStats() {
      let t = null;
      const e = /* @__PURE__ */ new Map();
      let i = 0, s = 0;
      for (const n of this.#s.values()) {
        if (!(n instanceof O)) {
          n.popup && (n.popup.deleted ? s += 1 : i += 1);
          continue;
        }
        n.isCommentDeleted ? s += 1 : n.hasEditedComment && (i += 1);
        const r = n.telemetryFinalData;
        if (!r) continue;
        const { type: a } = r;
        e.getOrInsertComputed(a, () => Object.getPrototypeOf(n).constructor), t ||= /* @__PURE__ */ Object.create(null);
        const o = t[a] ||= /* @__PURE__ */ new Map();
        for (const [l, h] of Object.entries(r)) {
          if (l === "type") continue;
          const c = o.getOrInsertComputed(l, Vi);
          c.set(h, (c.get(h) ?? 0) + 1);
        }
      }
      if ((s > 0 || i > 0) && (t ||= /* @__PURE__ */ Object.create(null), t.comments = {
        deleted: s,
        edited: i
      }), !t) return null;
      for (const [n, r] of e) t[n] = r.computeTelemetryFinalData(t[n]);
      return t;
    }
    resetModifiedIds() {
      this.#e = null;
    }
    updateEditor(t, e) {
      const i = this.#i?.get(t);
      return i ? (i.updateFromAnnotationLayer(e), true) : false;
    }
    getEditor(t) {
      return this.#i?.get(t) || null;
    }
    get modifiedIds() {
      if (this.#e) return this.#e;
      const t = [];
      if (this.#i) for (const i of this.#i.values()) i.serialize() && t.push(i.annotationElementId);
      let e = "";
      if (t.length) {
        const i = new Ni();
        i.update(t.join(",")), e = i.hexdigest();
      }
      return this.#e = {
        ids: new Set(t),
        hash: e
      };
    }
    [Symbol.iterator]() {
      return this.#s.entries();
    }
  }
  class Ys extends Ji {
    #t = De;
    constructor(t) {
      super();
      const { serializable: e } = t;
      if (e === De) return;
      const { map: i, hash: s, transfer: n } = e, r = structuredClone(i, n ? {
        transfer: n
      } : null);
      this.#t = {
        map: r,
        hash: s,
        transfer: []
      };
    }
    get print() {
      K("Should not call PrintAnnotationStorage.print");
    }
    get serializable() {
      return this.#t;
    }
    get modifiedIds() {
      return $(this, "modifiedIds", {
        ids: /* @__PURE__ */ new Set(),
        hash: ""
      });
    }
  }
  const de = "__forcedDependency", { floor: ws, ceil: vs } = Math;
  function xs(u, t, e, i, s, n) {
    u[t * 4 + 0] = Math.min(u[t * 4 + 0], e), u[t * 4 + 1] = Math.min(u[t * 4 + 1], i), u[t * 4 + 2] = Math.max(u[t * 4 + 2], s), u[t * 4 + 3] = Math.max(u[t * 4 + 3], n);
  }
  function Xn(u, t, e, i, s) {
    let n;
    u ? (u < 0 && (n = s[0], s[0] = s[2], s[2] = n), s[0] *= u, s[2] *= u, t < 0 && (n = s[1], s[1] = s[3], s[3] = n), s[1] *= t, s[3] *= t) : s.fill(0), s[0] += e, s[1] += i, s[2] += e, s[3] += i;
  }
  const Ui = new Uint32Array(new Uint8Array([
    255,
    255,
    0,
    0
  ]).buffer)[0];
  class Yn {
    #t;
    #e;
    constructor(t, e) {
      this.#t = t, this.#e = e;
    }
    get length() {
      return this.#t.length;
    }
    isEmpty(t) {
      return this.#t[t] === Ui;
    }
    minX(t) {
      return this.#e[t * 4 + 0] / 256;
    }
    minY(t) {
      return this.#e[t * 4 + 1] / 256;
    }
    maxX(t) {
      return (this.#e[t * 4 + 2] + 1) / 256;
    }
    maxY(t) {
      return (this.#e[t * 4 + 3] + 1) / 256;
    }
  }
  const Es = (u, t) => u?.getOrInsertComputed(t, () => ({
    dependencies: /* @__PURE__ */ new Set(),
    isRenderingOperation: false
  }));
  class qn {
    #t = [
      [
        1,
        0,
        0,
        1,
        0,
        0
      ]
    ];
    #e = [
      -1 / 0,
      -1 / 0,
      1 / 0,
      1 / 0
    ];
    #i = new Float64Array(Xt);
    _pendingBBoxIdx = -1;
    #s;
    #n;
    #a;
    #r;
    _savesStack = [];
    _markedContentStack = [];
    constructor(t, e) {
      this.#s = t.width, this.#n = t.height, this.#o(e);
    }
    growOperationsCount(t) {
      t >= this.#r.length && this.#o(t, this.#r);
    }
    #o(t, e) {
      const i = new ArrayBuffer(t * 4);
      this.#a = new Uint8ClampedArray(i), this.#r = new Uint32Array(i), e && e.length > 0 ? (this.#r.set(e), this.#r.fill(Ui, e.length)) : this.#r.fill(Ui);
    }
    get clipBox() {
      return this.#e;
    }
    save(t) {
      return this.#e = {
        __proto__: this.#e
      }, this._savesStack.push(t), this;
    }
    restore(t, e) {
      const i = Object.getPrototypeOf(this.#e);
      if (i === null) return this;
      this.#e = i;
      const s = this._savesStack.pop();
      return s !== void 0 && (e?.(s, t), this.#r[t] = this.#r[s]), this;
    }
    recordOpenMarker(t) {
      return this._savesStack.push(t), this;
    }
    getOpenMarker() {
      return this._savesStack.length === 0 ? null : this._savesStack.at(-1);
    }
    recordCloseMarker(t, e) {
      const i = this._savesStack.pop();
      return i !== void 0 && (e?.(i, t), this.#r[t] = this.#r[i]), this;
    }
    beginMarkedContent(t) {
      return this._markedContentStack.push(t), this;
    }
    endMarkedContent(t, e) {
      const i = this._markedContentStack.pop();
      return i !== void 0 && (e?.(i, t), this.#r[t] = this.#r[i]), this;
    }
    pushBaseTransform(t) {
      return this.#t.push(D.multiplyByDOMMatrix(this.#t.at(-1), t.getTransform())), this;
    }
    popBaseTransform() {
      return this.#t.length > 1 && this.#t.pop(), this;
    }
    resetBBox(t) {
      return this._pendingBBoxIdx !== t && (this._pendingBBoxIdx = t, this.#i.set(Xt, 0)), this;
    }
    recordClipBox(t, e, i, s, n, r) {
      const a = D.multiplyByDOMMatrix(this.#t.at(-1), e.getTransform()), o = Xt.slice();
      D.axialAlignedBoundingBox([
        i,
        n,
        s,
        r
      ], a, o);
      const l = D.intersect(this.#e, o);
      return l ? (this.#e[0] = l[0], this.#e[1] = l[1], this.#e[2] = l[2], this.#e[3] = l[3]) : (this.#e[0] = this.#e[1] = 1 / 0, this.#e[2] = this.#e[3] = -1 / 0), this;
    }
    recordBBox(t, e, i, s, n, r) {
      const a = this.#e;
      if (a[0] === 1 / 0) return this;
      const o = D.multiplyByDOMMatrix(this.#t.at(-1), e.getTransform());
      if (a[0] === -1 / 0) return D.axialAlignedBoundingBox([
        i,
        n,
        s,
        r
      ], o, this.#i), this;
      const l = Xt.slice();
      return D.axialAlignedBoundingBox([
        i,
        n,
        s,
        r
      ], o, l), this.#i[0] = nt(l[0], a[0], this.#i[0]), this.#i[1] = nt(l[1], a[1], this.#i[1]), this.#i[2] = nt(l[2], this.#i[2], a[2]), this.#i[3] = nt(l[3], this.#i[3], a[3]), this;
    }
    recordFullPageBBox(t) {
      return this.#i[0] = Math.max(0, this.#e[0]), this.#i[1] = Math.max(0, this.#e[1]), this.#i[2] = Math.min(this.#s, this.#e[2]), this.#i[3] = Math.min(this.#n, this.#e[3]), this;
    }
    recordOperation(t, e = false, i) {
      if (this._pendingBBoxIdx !== t) return this;
      const s = ws(this.#i[0] * 256 / this.#s), n = ws(this.#i[1] * 256 / this.#n), r = vs(this.#i[2] * 256 / this.#s), a = vs(this.#i[3] * 256 / this.#n);
      if (xs(this.#a, t, s, n, r, a), i) for (const o of i) for (const l of o) l !== t && xs(this.#a, l, s, n, r, a);
      return e || (this._pendingBBoxIdx = -1), this;
    }
    bboxToClipBoxDropOperation(t) {
      return this._pendingBBoxIdx === t && (this._pendingBBoxIdx = -1, this.#e[0] = Math.max(this.#e[0], this.#i[0]), this.#e[1] = Math.max(this.#e[1], this.#i[1]), this.#e[2] = Math.min(this.#e[2], this.#i[2]), this.#e[3] = Math.min(this.#e[3], this.#i[3])), this;
    }
    take() {
      return new Yn(this.#r, this.#a);
    }
    takeDebugMetadata() {
      throw new Error("Unreachable");
    }
    recordSimpleData(t, e) {
      return this;
    }
    recordIncrementalData(t, e) {
      return this;
    }
    resetIncrementalData(t, e) {
      return this;
    }
    recordNamedData(t, e) {
      return this;
    }
    recordSimpleDataFromNamed(t, e, i) {
      return this;
    }
    recordFutureForcedDependency(t, e) {
      return this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t) {
      return this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      return this;
    }
    recordCharacterBBox(t, e, i, s = 1, n = 0, r = 0, a) {
      return this;
    }
    getSimpleIndex(t) {
    }
    recordDependencies(t, e) {
      return this;
    }
    recordNamedDependency(t, e) {
      return this;
    }
    recordShowTextOperation(t, e = false) {
      return this;
    }
  }
  class Kn {
    #t = {
      __proto__: null
    };
    #e = {
      __proto__: null,
      transform: [],
      moveText: [],
      sameLineText: [],
      [de]: []
    };
    #i = /* @__PURE__ */ new Map();
    #s = /* @__PURE__ */ new Set();
    #n = /* @__PURE__ */ new Map();
    #a;
    #r;
    #o;
    constructor(t, e = false) {
      this.#o = t, e && (this.#a = /* @__PURE__ */ new Map(), this.#r = (i, s) => {
        Es(this.#a, s).dependencies.add(i);
      });
    }
    get clipBox() {
      return this.#o.clipBox;
    }
    growOperationsCount(t) {
      this.#o.growOperationsCount(t);
    }
    save(t) {
      return this.#t = {
        __proto__: this.#t
      }, this.#e = {
        __proto__: this.#e,
        transform: {
          __proto__: this.#e.transform
        },
        moveText: {
          __proto__: this.#e.moveText
        },
        sameLineText: {
          __proto__: this.#e.sameLineText
        },
        [de]: {
          __proto__: this.#e[de]
        }
      }, this.#o.save(t), this;
    }
    restore(t) {
      this.#o.restore(t, this.#r);
      const e = Object.getPrototypeOf(this.#t);
      return e === null ? this : (this.#t = e, this.#e = Object.getPrototypeOf(this.#e), this);
    }
    recordOpenMarker(t) {
      return this.#o.recordOpenMarker(t, this.#r), this;
    }
    getOpenMarker() {
      return this.#o.getOpenMarker();
    }
    recordCloseMarker(t) {
      return this.#o.recordCloseMarker(t, this.#r), this;
    }
    beginMarkedContent(t) {
      return this.#o.beginMarkedContent(t), this;
    }
    endMarkedContent(t) {
      return this.#o.endMarkedContent(t, this.#r), this;
    }
    pushBaseTransform(t) {
      return this.#o.pushBaseTransform(t), this;
    }
    popBaseTransform() {
      return this.#o.popBaseTransform(), this;
    }
    recordSimpleData(t, e) {
      return this.#t[t] = e, this;
    }
    recordIncrementalData(t, e) {
      return this.#e[t].push(e), this;
    }
    resetIncrementalData(t, e) {
      return this.#e[t].length = 0, this;
    }
    recordNamedData(t, e) {
      return this.#i.set(t, e), this;
    }
    recordSimpleDataFromNamed(t, e, i) {
      this.#t[t] = this.#i.get(e) ?? i;
    }
    recordFutureForcedDependency(t, e) {
      return this.recordIncrementalData(de, e), this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t) {
      for (const e of t) e in this.#t && this.recordFutureForcedDependency(e, this.#t[e]);
      return this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      for (const t of this.#s) this.recordFutureForcedDependency(de, t);
      return this;
    }
    resetBBox(t) {
      return this.#o.resetBBox(t), this;
    }
    recordClipBox(t, e, i, s, n, r) {
      return this.#o.recordClipBox(t, e, i, s, n, r), this;
    }
    recordBBox(t, e, i, s, n, r) {
      return this.#o.recordBBox(t, e, i, s, n, r), this;
    }
    recordCharacterBBox(t, e, i, s = 1, n = 0, r = 0, a) {
      const o = i.bbox;
      let l, h;
      if (o && (l = o[2] !== o[0] && o[3] !== o[1] && this.#n.get(i), l !== false && (h = [
        0,
        0,
        0,
        0
      ], D.axialAlignedBoundingBox(o, i.fontMatrix, h), (s !== 1 || n !== 0 || r !== 0) && Xn(s, -s, n, r, h), l))) return this.recordBBox(t, e, h[0], h[2], h[1], h[3]);
      if (!a) return this.recordFullPageBBox(t);
      const c = a();
      return o && h && l === void 0 && (l = h[0] <= n - c.actualBoundingBoxLeft && h[2] >= n + c.actualBoundingBoxRight && h[1] <= r - c.actualBoundingBoxAscent && h[3] >= r + c.actualBoundingBoxDescent, this.#n.set(i, l), l) ? this.recordBBox(t, e, h[0], h[2], h[1], h[3]) : this.recordBBox(t, e, n - c.actualBoundingBoxLeft, n + c.actualBoundingBoxRight, r - c.actualBoundingBoxAscent, r + c.actualBoundingBoxDescent);
    }
    recordFullPageBBox(t) {
      return this.#o.recordFullPageBBox(t), this;
    }
    getSimpleIndex(t) {
      return this.#t[t];
    }
    recordDependencies(t, e) {
      const i = this.#s, s = this.#t, n = this.#e;
      for (const r of e) r in this.#t ? i.add(s[r]) : r in n && n[r].forEach(i.add, i);
      return this;
    }
    recordNamedDependency(t, e) {
      return this.#i.has(e) && this.#s.add(this.#i.get(e)), this;
    }
    recordOperation(t, e = false) {
      if (this.recordDependencies(t, [
        de
      ]), this.#a) {
        const s = Es(this.#a, t), { dependencies: n } = s;
        this.#s.forEach(n.add, n), this.#o._savesStack.forEach(n.add, n), this.#o._markedContentStack.forEach(n.add, n), n.delete(t), s.isRenderingOperation = true;
      }
      const i = !e && t === this.#o._pendingBBoxIdx;
      return this.#o.recordOperation(t, e, [
        this.#s,
        this.#o._savesStack,
        this.#o._markedContentStack
      ]), i && this.#s.clear(), this;
    }
    recordShowTextOperation(t, e = false) {
      const i = Array.from(this.#s);
      this.recordOperation(t, e), this.recordIncrementalData("sameLineText", t);
      for (const s of i) this.recordIncrementalData("sameLineText", s);
      return this;
    }
    bboxToClipBoxDropOperation(t, e = false) {
      const i = !e && t === this.#o._pendingBBoxIdx;
      return this.#o.bboxToClipBoxDropOperation(t), i && this.#s.clear(), this;
    }
    take() {
      return this.#n.clear(), this.#o.take();
    }
    takeDebugMetadata() {
      return this.#a;
    }
  }
  class Fe {
    #t;
    #e;
    #i;
    #s = 0;
    #n = 0;
    constructor(t, e, i) {
      if (t instanceof Fe && t.#i === !!i) return t;
      this.#t = t, this.#e = e, this.#i = !!i;
    }
    get clipBox() {
      return this.#t.clipBox;
    }
    growOperationsCount() {
      throw new Error("Unreachable");
    }
    save(t) {
      return this.#n++, this.#t.save(this.#e), this;
    }
    restore(t) {
      return this.#n > 0 && (this.#t.restore(this.#e), this.#n--), this;
    }
    recordOpenMarker(t) {
      return this.#s++, this;
    }
    getOpenMarker() {
      return this.#s > 0 ? this.#e : this.#t.getOpenMarker();
    }
    recordCloseMarker(t) {
      return this.#s--, this;
    }
    beginMarkedContent(t) {
      return this;
    }
    endMarkedContent(t) {
      return this;
    }
    pushBaseTransform(t) {
      return this.#t.pushBaseTransform(t), this;
    }
    popBaseTransform() {
      return this.#t.popBaseTransform(), this;
    }
    recordSimpleData(t, e) {
      return this.#t.recordSimpleData(t, this.#e), this;
    }
    recordIncrementalData(t, e) {
      return this.#t.recordIncrementalData(t, this.#e), this;
    }
    resetIncrementalData(t, e) {
      return this.#t.resetIncrementalData(t, this.#e), this;
    }
    recordNamedData(t, e) {
      return this;
    }
    recordSimpleDataFromNamed(t, e, i) {
      return this.#t.recordSimpleDataFromNamed(t, e, this.#e), this;
    }
    recordFutureForcedDependency(t, e) {
      return this.#t.recordFutureForcedDependency(t, this.#e), this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t) {
      return this.#t.inheritSimpleDataAsFutureForcedDependencies(t), this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      return this.#t.inheritPendingDependenciesAsFutureForcedDependencies(), this;
    }
    resetBBox(t) {
      return this.#i || this.#t.resetBBox(this.#e), this;
    }
    recordClipBox(t, e, i, s, n, r) {
      return this.#i || this.#t.recordClipBox(this.#e, e, i, s, n, r), this;
    }
    recordBBox(t, e, i, s, n, r) {
      return this.#i || this.#t.recordBBox(this.#e, e, i, s, n, r), this;
    }
    recordCharacterBBox(t, e, i, s, n, r, a) {
      return this.#i || this.#t.recordCharacterBBox(this.#e, e, i, s, n, r, a), this;
    }
    recordFullPageBBox(t) {
      return this.#i || this.#t.recordFullPageBBox(this.#e), this;
    }
    getSimpleIndex(t) {
      return this.#t.getSimpleIndex(t);
    }
    recordDependencies(t, e) {
      return this.#t.recordDependencies(this.#e, e), this;
    }
    recordNamedDependency(t, e) {
      return this.#t.recordNamedDependency(this.#e, e), this;
    }
    recordOperation(t) {
      return this.#t.recordOperation(this.#e, true), this;
    }
    recordShowTextOperation(t) {
      return this.#t.recordShowTextOperation(this.#e, true), this;
    }
    bboxToClipBoxDropOperation(t) {
      return this.#i || this.#t.bboxToClipBoxDropOperation(this.#e, true), this;
    }
    take() {
      throw new Error("Unreachable");
    }
    takeDebugMetadata() {
      throw new Error("Unreachable");
    }
  }
  const It = {
    stroke: [
      "path",
      "transform",
      "filter",
      "strokeColor",
      "strokeAlpha",
      "lineWidth",
      "lineCap",
      "lineJoin",
      "miterLimit",
      "dash"
    ],
    fill: [
      "path",
      "transform",
      "filter",
      "fillColor",
      "fillAlpha",
      "globalCompositeOperation",
      "SMask"
    ],
    imageXObject: [
      "transform",
      "SMask",
      "filter",
      "fillAlpha",
      "strokeAlpha",
      "globalCompositeOperation"
    ],
    rawFillPath: [
      "filter",
      "fillColor",
      "fillAlpha"
    ],
    showText: [
      "transform",
      "leading",
      "charSpacing",
      "wordSpacing",
      "hScale",
      "textRise",
      "moveText",
      "textMatrix",
      "font",
      "fontObj",
      "filter",
      "fillColor",
      "textRenderingMode",
      "SMask",
      "fillAlpha",
      "strokeAlpha",
      "globalCompositeOperation",
      "sameLineText"
    ],
    transform: [
      "transform"
    ],
    transformAndFill: [
      "transform",
      "fillColor"
    ]
  };
  class ei {
    #t;
    #e;
    #i = 4;
    #s = 0;
    #n = new ei.#a(this.#i * 6);
    static #a = Z.isFloat16ArraySupported ? Float16Array : Float32Array;
    constructor(t) {
      this.#t = t.width, this.#e = t.height;
    }
    record(t, e, i, s) {
      if (this.#s === this.#i) {
        this.#i *= 2;
        const a = new ei.#a(this.#i * 6);
        a.set(this.#n), this.#n = a;
      }
      const n = it(t);
      let r;
      if (s[0] !== 1 / 0) {
        const a = Xt.slice();
        D.axialAlignedBoundingBox([
          0,
          -i,
          e,
          0
        ], n, a);
        const o = D.intersect(s, a);
        if (!o) return;
        const [l, h, c, d] = o;
        if (l !== a[0] || h !== a[1] || c !== a[2] || d !== a[3]) {
          const p = Math.atan2(n[1], n[0]), m = Math.abs(Math.sin(p)), b = Math.abs(Math.cos(p));
          if (m < 1e-6 || b < 1e-6 || Math.abs(m - b) < 1e-6) r = [
            l,
            h,
            l,
            d,
            c,
            h
          ];
          else {
            const y = c - l, w = d - h, v = m * m, E = b * b, _ = b * m, S = E - v, T = (w * E - y * _) / S, M = (w * _ - y * v) / S;
            r = [
              l + M,
              h,
              l,
              h + T,
              c,
              d - T
            ];
          }
        }
      }
      r || (r = [
        0,
        -i,
        0,
        0,
        e,
        -i
      ], D.applyTransform(r, n, 0), D.applyTransform(r, n, 2), D.applyTransform(r, n, 4)), r[0] /= this.#t, r[1] /= this.#e, r[2] /= this.#t, r[3] /= this.#e, r[4] /= this.#t, r[5] /= this.#e, this.#n.set(r, this.#s * 6), this.#s++;
    }
    take() {
      return this.#n.subarray(0, this.#s * 6);
    }
  }
  class Jn {
    #t = /* @__PURE__ */ new Set();
    #e = null;
    constructor({ ownerDocument: t = globalThis.document, styleElement: e = null }) {
      this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
    }
    addNativeFontFace(t) {
      this.nativeFontFaces.add(t), this._document.fonts.add(t);
    }
    removeNativeFontFace(t) {
      this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
    }
    insertRule(t) {
      const e = this.#i();
      e.insertRule(t, e.cssRules.length);
    }
    #i() {
      if (this.#e) return this.#e;
      const t = this._document.defaultView?.CSSStyleSheet || globalThis.CSSStyleSheet;
      if (!this.styleElement && t) {
        const { adoptedStyleSheets: e } = this._document;
        if (e) {
          const i = new t();
          return e.push(i), this.#e = i;
        }
      }
      return this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement)), this.#e = this.styleElement.sheet;
    }
    clear() {
      for (const t of this.nativeFontFaces) this._document.fonts.delete(t);
      if (this.nativeFontFaces.clear(), this.#t.clear(), this.#e) {
        const { adoptedStyleSheets: t } = this._document;
        t?.includes(this.#e) && (this._document.adoptedStyleSheets = t.filter((e) => e !== this.#e)), this.#e = null;
      }
      this.styleElement && (this.styleElement.remove(), this.styleElement = null);
    }
    async loadSystemFont({ systemFontInfo: t, disableFontFace: e, _inspectFont: i }) {
      if (!(!t || this.#t.has(t.loadedName))) {
        if (ht(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
          const { loadedName: s, src: n, style: r } = t, a = new FontFace(s, n, r);
          this.addNativeFontFace(a);
          try {
            await a.load(), this.#t.add(s), i?.(t);
          } catch {
            z(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(a);
          }
          return;
        }
        K("Not implemented: loadSystemFont without the Font Loading API.");
      }
    }
    async bind(t) {
      if (t.attached || t.missingFile && !t.systemFontInfo) return;
      if (t.attached = true, t.systemFontInfo) {
        await this.loadSystemFont(t);
        return;
      }
      if (this.isFontLoadingAPISupported) {
        const i = t.createNativeFontFace();
        if (i) {
          this.addNativeFontFace(i);
          try {
            await i.loaded;
          } catch (s) {
            throw z(`Failed to load font '${i.family}': '${s}'.`), t.disableFontFace = true, s;
          }
        }
        return;
      }
      const e = t.createFontFaceRule();
      if (e) {
        if (this.insertRule(e), this.isSyncFontLoadingSupported) return;
        await new Promise((i) => {
          const s = this._queueLoadingCallback(i);
          this._prepareFontLoadEvent(t, s);
        });
      }
    }
    get isFontLoadingAPISupported() {
      const t = !!this._document?.fonts;
      return $(this, "isFontLoadingAPISupported", t);
    }
    get isSyncFontLoadingSupported() {
      return $(this, "isSyncFontLoadingSupported", Tt || Z.platform.isFirefox);
    }
    _queueLoadingCallback(t) {
      function e() {
        for (ht(!s.done, "completeRequest() cannot be called twice."), s.done = true; i.length > 0 && i[0].done; ) {
          const n = i.shift();
          setTimeout(n.callback, 0);
        }
      }
      const { loadingRequests: i } = this, s = {
        done: false,
        complete: e,
        callback: t
      };
      return i.push(s), s;
    }
    get _loadTestFont() {
      const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
      return $(this, "_loadTestFont", t);
    }
    _prepareFontLoadEvent(t, e) {
      function i(S, T) {
        return S.charCodeAt(T) << 24 | S.charCodeAt(T + 1) << 16 | S.charCodeAt(T + 2) << 8 | S.charCodeAt(T + 3) & 255;
      }
      function s(S) {
        return String.fromCharCode(S >> 24 & 255, S >> 16 & 255, S >> 8 & 255, S & 255);
      }
      function n(S, T, M, I) {
        const F = S.substring(0, T), R = S.substring(T + M);
        return F + I + R;
      }
      let r, a;
      const o = this._document.createElement("canvas");
      o.width = 1, o.height = 1;
      const l = o.getContext("2d");
      let h = 0;
      function c(S, T) {
        if (++h > 30) {
          z("Load test font never loaded."), T();
          return;
        }
        if (l.font = "30px " + S, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
          T();
          return;
        }
        setTimeout(c.bind(null, S, T));
      }
      const d = `lt${Date.now()}${this.loadTestFontId++}`;
      let p = this._loadTestFont;
      p = n(p, 976, d.length, d);
      const b = 16, y = 1482184792;
      let w = i(p, b);
      for (r = 0, a = d.length - 3; r < a; r += 4) w = w - y + i(d, r) | 0;
      r < d.length && (w = w - y + i(d + "XXX", r) | 0), p = n(p, b, 4, s(w));
      const v = `url(data:font/opentype;base64,${btoa(p)});`, E = `@font-face {font-family:"${d}";src:${v}}`;
      this.insertRule(E);
      const _ = this._document.createElement("div");
      _.style.visibility = "hidden", _.style.width = _.style.height = "10px", _.style.position = "absolute", _.style.top = _.style.left = "0px";
      for (const S of [
        t.loadedName,
        d
      ]) {
        const T = this._document.createElement("span");
        T.textContent = "Hi", T.style.fontFamily = S, _.append(T);
      }
      this._document.body.append(_), c(d, () => {
        _.remove(), e.complete();
      });
    }
  }
  class Qn {
    compiledGlyphs = /* @__PURE__ */ Object.create(null);
    #t;
    constructor(t, e = null, i, s) {
      this.#t = t, this._inspectFont = e, i && (this.charProcOperatorList = i), s && Object.assign(this, s);
    }
    createNativeFontFace() {
      if (!this.data || this.disableFontFace) return null;
      let t;
      if (!this.cssFontInfo) t = new FontFace(this.loadedName, this.data, {});
      else {
        const e = {
          weight: this.cssFontInfo.fontWeight
        };
        this.cssFontInfo.italicAngle && (e.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, e);
      }
      return this._inspectFont?.(this), t;
    }
    createFontFaceRule() {
      if (!this.data || this.disableFontFace) return null;
      const t = `url(data:${this.mimetype};base64,${this.data.toBase64()});`;
      let e;
      if (!this.cssFontInfo) e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
      else {
        let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
        this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${t}}`;
      }
      return this._inspectFont?.(this, t), e;
    }
    getPathGenerator(t, e) {
      if (this.compiledGlyphs[e] !== void 0) return this.compiledGlyphs[e];
      const i = this.loadedName + "_path_" + e;
      let s;
      try {
        s = t.get(i);
      } catch (r) {
        z(`getPathGenerator - ignoring character: "${r}".`);
      }
      const n = Ws(s?.path);
      return this.fontExtraProperties || t.delete(i), this.compiledGlyphs[e] = n;
    }
    get black() {
      return this.#t.black;
    }
    get bold() {
      return this.#t.bold;
    }
    get disableFontFace() {
      return this.#t.disableFontFace;
    }
    set disableFontFace(t) {
      $(this, "disableFontFace", !!t);
    }
    get fontExtraProperties() {
      return this.#t.fontExtraProperties;
    }
    get isInvalidPDFjsFont() {
      return this.#t.isInvalidPDFjsFont;
    }
    get isType3Font() {
      return this.#t.isType3Font;
    }
    get italic() {
      return this.#t.italic;
    }
    get missingFile() {
      return this.#t.missingFile;
    }
    get remeasure() {
      return this.#t.remeasure;
    }
    get vertical() {
      return this.#t.vertical;
    }
    get ascent() {
      return this.#t.ascent;
    }
    get defaultWidth() {
      return this.#t.defaultWidth;
    }
    get descent() {
      return this.#t.descent;
    }
    get bbox() {
      return this.#t.bbox;
    }
    get fontMatrix() {
      return this.#t.fontMatrix;
    }
    get fallbackName() {
      return this.#t.fallbackName;
    }
    get loadedName() {
      return this.#t.loadedName;
    }
    get mimetype() {
      return this.#t.mimetype;
    }
    get name() {
      return this.#t.name;
    }
    get data() {
      return this.#t.data;
    }
    clearData() {
      this.#t.clearData();
    }
    get cssFontInfo() {
      return this.#t.cssFontInfo;
    }
    get systemFontInfo() {
      return this.#t.systemFontInfo;
    }
    get defaultVMetrics() {
      return this.#t.defaultVMetrics;
    }
  }
  class Zn {
    static strings = [
      "fontFamily",
      "fontWeight",
      "italicAngle"
    ];
  }
  class tr {
    static strings = [
      "css",
      "loadedName",
      "baseFontName",
      "src"
    ];
  }
  class Rt {
    static bools = [
      "black",
      "bold",
      "disableFontFace",
      "fontExtraProperties",
      "isInvalidPDFjsFont",
      "isType3Font",
      "italic",
      "missingFile",
      "remeasure",
      "vertical"
    ];
    static numbers = [
      "ascent",
      "defaultWidth",
      "descent"
    ];
    static strings = [
      "fallbackName",
      "loadedName",
      "mimetype",
      "name"
    ];
    static OFFSET_NUMBERS = Math.ceil(this.bools.length * 2 / 8);
    static OFFSET_BBOX = this.OFFSET_NUMBERS + this.numbers.length * 8;
    static OFFSET_FONT_MATRIX = this.OFFSET_BBOX + 1 + 8;
    static OFFSET_DEFAULT_VMETRICS = this.OFFSET_FONT_MATRIX + 1 + 48;
    static OFFSET_STRINGS = this.OFFSET_DEFAULT_VMETRICS + 1 + 6;
  }
  class te {
    static KIND = 0;
    static HAS_BBOX = 1;
    static HAS_BACKGROUND = 2;
    static SHADING_TYPE = 3;
    static N_COORD = 4;
    static N_COLOR = 8;
    static N_STOP = 12;
    static N_FIGURES = 16;
  }
  class er {
    #t;
    #e = new TextDecoder();
    #i;
    constructor(t) {
      this.#t = t, this.#i = new DataView(t);
    }
    #s(t) {
      ht(t < Zn.strings.length, "Invalid string index");
      let e = 0;
      for (let s = 0; s < t; s++) e += this.#i.getUint32(e) + 4;
      const i = this.#i.getUint32(e);
      return this.#e.decode(new Uint8Array(this.#t, e + 4, i));
    }
    get fontFamily() {
      return this.#s(0);
    }
    get fontWeight() {
      return this.#s(1);
    }
    get italicAngle() {
      return this.#s(2);
    }
  }
  class ir {
    #t;
    #e = new TextDecoder();
    #i;
    constructor(t) {
      this.#t = t, this.#i = new DataView(t);
    }
    get guessFallback() {
      return this.#i.getUint8(0) !== 0;
    }
    #s(t) {
      ht(t < tr.strings.length, "Invalid string index");
      let e = 5;
      for (let s = 0; s < t; s++) e += this.#i.getUint32(e) + 4;
      const i = this.#i.getUint32(e);
      return this.#e.decode(new Uint8Array(this.#t, e + 4, i));
    }
    get css() {
      return this.#s(0);
    }
    get loadedName() {
      return this.#s(1);
    }
    get baseFontName() {
      return this.#s(2);
    }
    get src() {
      return this.#s(3);
    }
    get style() {
      let t = 1;
      t += 4 + this.#i.getUint32(t);
      const e = this.#i.getUint32(t), i = this.#e.decode(new Uint8Array(this.#t, t + 4, e));
      t += 4 + e;
      const s = this.#i.getUint32(t), n = this.#e.decode(new Uint8Array(this.#t, t + 4, s));
      return {
        style: i,
        weight: n
      };
    }
  }
  class sr {
    #t;
    #e = new TextDecoder();
    #i;
    constructor({ buffer: t, extra: e }) {
      this.#t = t, this.#i = new DataView(t), e && Object.assign(this, e);
    }
    #s(t) {
      ht(t < Rt.bools.length, "Invalid boolean index");
      const e = Math.floor(t / 4), i = t * 2 % 8, s = this.#i.getUint8(e) >> i & 3;
      return s === 0 ? void 0 : s === 2;
    }
    get black() {
      return this.#s(0);
    }
    get bold() {
      return this.#s(1);
    }
    get disableFontFace() {
      return this.#s(2);
    }
    get fontExtraProperties() {
      return this.#s(3);
    }
    get isInvalidPDFjsFont() {
      return this.#s(4);
    }
    get isType3Font() {
      return this.#s(5);
    }
    get italic() {
      return this.#s(6);
    }
    get missingFile() {
      return this.#s(7);
    }
    get remeasure() {
      return this.#s(8);
    }
    get vertical() {
      return this.#s(9);
    }
    #n(t) {
      return ht(t < Rt.numbers.length, "Invalid number index"), this.#i.getFloat64(Rt.OFFSET_NUMBERS + t * 8);
    }
    get ascent() {
      return this.#n(0);
    }
    get defaultWidth() {
      return this.#n(1);
    }
    get descent() {
      return this.#n(2);
    }
    #a(t, e, i, s) {
      const n = this.#i.getUint8(t);
      if (n === 0) return;
      ht(n === e, "Invalid array length."), t += 1;
      const r = new Array(n);
      for (let a = 0; a < n; a++) r[a] = this.#i[i](t, true), t += s;
      return r;
    }
    get bbox() {
      return this.#a(Rt.OFFSET_BBOX, 4, "getInt16", 2);
    }
    get fontMatrix() {
      return this.#a(Rt.OFFSET_FONT_MATRIX, 6, "getFloat64", 8);
    }
    get defaultVMetrics() {
      return this.#a(Rt.OFFSET_DEFAULT_VMETRICS, 3, "getInt16", 2);
    }
    #r(t) {
      ht(t < Rt.strings.length, "Invalid string index");
      let e = Rt.OFFSET_STRINGS + 4;
      for (let s = 0; s < t; s++) e += this.#i.getUint32(e) + 4;
      const i = this.#i.getUint32(e);
      return this.#e.decode(new Uint8Array(this.#t, e + 4, i));
    }
    get fallbackName() {
      return this.#r(0);
    }
    get loadedName() {
      return this.#r(1);
    }
    get mimetype() {
      return this.#r(2);
    }
    get name() {
      return this.#r(3);
    }
    #o() {
      let t = Rt.OFFSET_STRINGS;
      const e = this.#i.getUint32(t);
      t += 4 + e;
      const i = this.#i.getUint32(t);
      t += 4 + i;
      const s = this.#i.getUint32(t);
      t += 4 + s;
      const n = this.#i.getUint32(t);
      return {
        offset: t,
        length: n
      };
    }
    get data() {
      const { offset: t, length: e } = this.#o();
      return e === 0 ? void 0 : new Uint8Array(this.#t, t + 4, e);
    }
    clearData() {
      const { offset: t, length: e } = this.#o();
      e !== 0 && (this.#i.setUint32(t, 0), this.#t = new Uint8Array(this.#t, 0, t + 4).slice().buffer, this.#i = new DataView(this.#t));
    }
    get cssFontInfo() {
      let t = Rt.OFFSET_STRINGS;
      const e = this.#i.getUint32(t);
      t += 4 + e;
      const i = this.#i.getUint32(t);
      t += 4 + i;
      const s = this.#i.getUint32(t);
      if (s === 0) return null;
      const n = new Uint8Array(s);
      return n.set(new Uint8Array(this.#t, t + 4, s)), new er(n.buffer);
    }
    get systemFontInfo() {
      let t = Rt.OFFSET_STRINGS;
      const e = this.#i.getUint32(t);
      t += 4 + e;
      const i = this.#i.getUint32(t);
      if (i === 0) return null;
      const s = new Uint8Array(i);
      return s.set(new Uint8Array(this.#t, t + 4, i)), new ir(s.buffer);
    }
  }
  class nr {
    constructor(t) {
      this.buffer = t, this.view = new DataView(t), this.data = new Uint8Array(t);
    }
    getIR() {
      const t = this.view, e = this.data[te.KIND], i = !!this.data[te.HAS_BBOX], s = !!this.data[te.HAS_BACKGROUND], n = t.getUint32(te.N_COORD, true), r = t.getUint32(te.N_COLOR, true), a = t.getUint32(te.N_STOP, true);
      let o = 20;
      const l = new Float32Array(this.buffer, o, n * 2);
      o += n * 8;
      const h = new Uint8Array(this.buffer, o, r * 4);
      o += r * 4;
      const c = [];
      for (let m = 0; m < a; ++m) {
        const b = t.getFloat32(o, true);
        o += 4;
        const y = t.getUint32(o, true);
        o += 4, c.push([
          b,
          `#${y.toString(16).padStart(6, "0")}`
        ]);
      }
      let d = null;
      if (i) {
        d = [];
        for (let m = 0; m < 4; ++m) d.push(t.getFloat32(o, true)), o += 4;
      }
      let p = null;
      if (s && (p = new Uint8Array(this.buffer, o, 3), o += 3), e === 1) return [
        "RadialAxial",
        "axial",
        d,
        c,
        Array.from(l.slice(0, 2)),
        Array.from(l.slice(2, 4)),
        null,
        null
      ];
      if (e === 2) return [
        "RadialAxial",
        "radial",
        d,
        c,
        [
          l[0],
          l[1]
        ],
        [
          l[3],
          l[4]
        ],
        l[2],
        l[5]
      ];
      if (e === 3) {
        const m = this.data[te.SHADING_TYPE];
        let b = null;
        if (l.length > 0) {
          b = Xt.slice();
          for (let y = 0, w = l.length; y < w; y += 2) D.pointBoundingBox(l[y], l[y + 1], b);
        }
        return [
          "Mesh",
          m,
          l,
          h,
          n,
          b,
          d,
          p
        ];
      }
      throw new Error(`Unsupported pattern kind: ${e}`);
    }
  }
  class rr {
    #t;
    constructor(t) {
      this.#t = t;
    }
    get path() {
      return Z.isFloat16ArraySupported ? new Float16Array(this.#t) : new Float32Array(this.#t);
    }
  }
  function ar(u) {
    if (u instanceof URL) return u;
    if (typeof u == "string") {
      if (Tt) {
        if (/^[a-z][a-z0-9\-+.]+:/i.test(u)) return new URL(u);
        const e = process.getBuiltinModule("url");
        return new URL(e.pathToFileURL(u));
      }
      const t = URL.parse(u, window.location);
      if (t) return t;
    }
    throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
  }
  function or(u) {
    if (Tt && typeof us.Buffer < "u" && u instanceof us.Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
    if (u instanceof Uint8Array && u.byteLength === u.buffer.byteLength) return u;
    if (typeof u == "string") return oi(u);
    if (u instanceof ArrayBuffer || ArrayBuffer.isView(u) || typeof u == "object" && !isNaN(u?.length)) return new Uint8Array(u);
    throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
  }
  function ze(u) {
    if (typeof u != "string") return null;
    if (u.endsWith("/")) return u;
    throw new Error(`Invalid factory url: "${u}" must include trailing slash.`);
  }
  let Hi, lr;
  Hi = (u) => typeof u == "object" && Number.isInteger(u?.num) && u.num >= 0 && Number.isInteger(u?.gen) && u.gen >= 0;
  lr = (u) => typeof u == "object" && typeof u?.name == "string";
  hr = Ln.bind(null, Hi, lr);
  class cr {
    #t = /* @__PURE__ */ new Map();
    #e = Promise.resolve();
    postMessage(t, e) {
      const i = {
        data: structuredClone(t, e ? {
          transfer: e
        } : null)
      };
      this.#e.then(() => {
        for (const [s] of this.#t) s.call(this, i);
      });
    }
    addEventListener(t, e, i = null) {
      let s = null;
      if (i?.signal instanceof AbortSignal) {
        const { signal: n } = i;
        if (n.aborted) {
          z("LoopbackPort - cannot use an `aborted` signal.");
          return;
        }
        const r = () => this.removeEventListener(t, e);
        s = () => n.removeEventListener("abort", r), n.addEventListener("abort", r);
      }
      this.#t.set(e, s);
    }
    removeEventListener(t, e) {
      this.#t.get(e)?.(), this.#t.delete(e);
    }
    terminate() {
      for (const [, t] of this.#t) t?.();
      this.#t.clear();
    }
  }
  const Ve = {
    DATA: 1,
    ERROR: 2
  }, gt = {
    CANCEL: 1,
    CANCEL_COMPLETE: 2,
    CLOSE: 3,
    ENQUEUE: 4,
    ERROR: 5,
    PULL: 6,
    PULL_COMPLETE: 7,
    START_COMPLETE: 8
  };
  function Ss() {
  }
  function xt(u) {
    if (u instanceof Jt || u instanceof Fi || u instanceof Di || u instanceof ti || u instanceof Ei) return u;
    switch (u instanceof Error || typeof u == "object" && u !== null || K('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), u.name) {
      case "AbortException":
        return new Jt(u.message);
      case "InvalidPDFException":
        return new Fi(u.message);
      case "PasswordException":
        return new Di(u.message, u.code);
      case "ResponseException":
        return new ti(u.message, u.status, u.missing);
      case "UnknownErrorException":
        return new Ei(u.message, u.details);
    }
    return new Ei(u.message, u.toString());
  }
  class Ce {
    #t = new AbortController();
    constructor(t, e, i) {
      this.sourceName = t, this.targetName = e, this.comObj = i, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), i.addEventListener("message", this.#e.bind(this), {
        signal: this.#t.signal
      });
    }
    #e({ data: t }) {
      if (t.targetName !== this.sourceName) return;
      if (t.stream) {
        this.#s(t);
        return;
      }
      if (t.callback) {
        const i = t.callbackId, s = this.callbackCapabilities[i];
        if (!s) throw new Error(`Cannot resolve callback ${i}`);
        if (delete this.callbackCapabilities[i], t.callback === Ve.DATA) s.resolve(t.data);
        else if (t.callback === Ve.ERROR) s.reject(xt(t.reason));
        else throw new Error("Unexpected callback case");
        return;
      }
      const e = this.actionHandler[t.action];
      if (!e) throw new Error(`Unknown action from worker: ${t.action}`);
      if (t.callbackId) {
        const i = this.sourceName, s = t.sourceName, n = this.comObj;
        Promise.try(e, t.data).then(function(r) {
          n.postMessage({
            sourceName: i,
            targetName: s,
            callback: Ve.DATA,
            callbackId: t.callbackId,
            data: r
          });
        }, function(r) {
          n.postMessage({
            sourceName: i,
            targetName: s,
            callback: Ve.ERROR,
            callbackId: t.callbackId,
            reason: xt(r)
          });
        });
        return;
      }
      if (t.streamId) {
        this.#i(t);
        return;
      }
      e(t.data);
    }
    on(t, e) {
      const i = this.actionHandler;
      if (i[t]) throw new Error(`There is already an actionName called "${t}"`);
      i[t] = e;
    }
    send(t, e, i) {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        data: e
      }, i);
    }
    sendWithPromise(t, e, i) {
      const s = this.callbackId++, n = Promise.withResolvers();
      this.callbackCapabilities[s] = n;
      try {
        this.comObj.postMessage({
          sourceName: this.sourceName,
          targetName: this.targetName,
          action: t,
          callbackId: s,
          data: e
        }, i);
      } catch (r) {
        n.reject(r);
      }
      return n.promise;
    }
    sendWithStream(t, e, i, s) {
      const n = this.streamId++, r = this.sourceName, a = this.targetName, o = this.comObj;
      return new ReadableStream({
        start: (l) => {
          const h = Promise.withResolvers();
          return this.streamControllers[n] = {
            controller: l,
            startCall: h,
            pullCall: null,
            cancelCall: null,
            isClosed: false
          }, o.postMessage({
            sourceName: r,
            targetName: a,
            action: t,
            streamId: n,
            data: e,
            desiredSize: l.desiredSize
          }, s), h.promise;
        },
        pull: (l) => {
          const h = Promise.withResolvers();
          return this.streamControllers[n].pullCall = h, o.postMessage({
            sourceName: r,
            targetName: a,
            stream: gt.PULL,
            streamId: n,
            desiredSize: l.desiredSize
          }), h.promise;
        },
        cancel: (l) => {
          ht(l instanceof Error, "cancel must have a valid reason");
          const h = Promise.withResolvers();
          return this.streamControllers[n].cancelCall = h, this.streamControllers[n].isClosed = true, o.postMessage({
            sourceName: r,
            targetName: a,
            stream: gt.CANCEL,
            streamId: n,
            reason: xt(l)
          }), h.promise;
        }
      }, i);
    }
    #i(t) {
      const e = t.streamId, i = this.sourceName, s = t.sourceName, n = this.comObj, r = this, a = this.actionHandler[t.action], o = {
        enqueue(l, h = 1, c) {
          if (this.isCancelled) return;
          const d = this.desiredSize;
          this.desiredSize -= h, d > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), n.postMessage({
            sourceName: i,
            targetName: s,
            stream: gt.ENQUEUE,
            streamId: e,
            chunk: l
          }, c);
        },
        close() {
          this.isCancelled || (this.isCancelled = true, n.postMessage({
            sourceName: i,
            targetName: s,
            stream: gt.CLOSE,
            streamId: e
          }), delete r.streamSinks[e]);
        },
        error(l) {
          ht(l instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = true, n.postMessage({
            sourceName: i,
            targetName: s,
            stream: gt.ERROR,
            streamId: e,
            reason: xt(l)
          }));
        },
        sinkCapability: Promise.withResolvers(),
        onPull: null,
        onCancel: null,
        isCancelled: false,
        desiredSize: t.desiredSize,
        ready: null
      };
      o.sinkCapability.resolve(), o.ready = o.sinkCapability.promise, this.streamSinks[e] = o, Promise.try(a, t.data, o).then(function() {
        n.postMessage({
          sourceName: i,
          targetName: s,
          stream: gt.START_COMPLETE,
          streamId: e,
          success: true
        });
      }, function(l) {
        n.postMessage({
          sourceName: i,
          targetName: s,
          stream: gt.START_COMPLETE,
          streamId: e,
          reason: xt(l)
        });
      });
    }
    #s(t) {
      const e = t.streamId, i = this.sourceName, s = t.sourceName, n = this.comObj, r = this.streamControllers[e], a = this.streamSinks[e];
      switch (t.stream) {
        case gt.START_COMPLETE:
          t.success ? r.startCall.resolve() : r.startCall.reject(xt(t.reason));
          break;
        case gt.PULL_COMPLETE:
          t.success ? r.pullCall.resolve() : r.pullCall.reject(xt(t.reason));
          break;
        case gt.PULL:
          if (!a) {
            n.postMessage({
              sourceName: i,
              targetName: s,
              stream: gt.PULL_COMPLETE,
              streamId: e,
              success: true
            });
            break;
          }
          a.desiredSize <= 0 && t.desiredSize > 0 && a.sinkCapability.resolve(), a.desiredSize = t.desiredSize, Promise.try(a.onPull || Ss).then(function() {
            n.postMessage({
              sourceName: i,
              targetName: s,
              stream: gt.PULL_COMPLETE,
              streamId: e,
              success: true
            });
          }, function(l) {
            n.postMessage({
              sourceName: i,
              targetName: s,
              stream: gt.PULL_COMPLETE,
              streamId: e,
              reason: xt(l)
            });
          });
          break;
        case gt.ENQUEUE:
          if (ht(r, "enqueue should have stream controller"), r.isClosed) break;
          r.controller.enqueue(t.chunk);
          break;
        case gt.CLOSE:
          if (ht(r, "close should have stream controller"), r.isClosed) break;
          r.isClosed = true, r.controller.close(), this.#n(r, e);
          break;
        case gt.ERROR:
          ht(r, "error should have stream controller"), r.controller.error(xt(t.reason)), this.#n(r, e);
          break;
        case gt.CANCEL_COMPLETE:
          t.success ? r.cancelCall.resolve() : r.cancelCall.reject(xt(t.reason)), this.#n(r, e);
          break;
        case gt.CANCEL:
          if (!a) break;
          const o = xt(t.reason);
          Promise.try(a.onCancel || Ss, o).then(function() {
            n.postMessage({
              sourceName: i,
              targetName: s,
              stream: gt.CANCEL_COMPLETE,
              streamId: e,
              success: true
            });
          }, function(l) {
            n.postMessage({
              sourceName: i,
              targetName: s,
              stream: gt.CANCEL_COMPLETE,
              streamId: e,
              reason: xt(l)
            });
          }), a.sinkCapability.reject(o), a.isCancelled = true, delete this.streamSinks[e];
          break;
        default:
          throw new Error("Unexpected stream case");
      }
    }
    async #n(t, e) {
      await Promise.allSettled([
        t.startCall?.promise,
        t.pullCall?.promise,
        t.cancelCall?.promise
      ]), delete this.streamControllers[e];
    }
    destroy() {
      this.#t?.abort(), this.#t = null;
    }
  }
  class qs {
    #t = Object.freeze({
      cMapUrl: "CMap",
      standardFontDataUrl: "font",
      wasmUrl: "wasm"
    });
    constructor({ cMapUrl: t = null, standardFontDataUrl: e = null, wasmUrl: i = null }) {
      this.cMapUrl = t, this.standardFontDataUrl = e, this.wasmUrl = i;
    }
    async fetch({ kind: t, filename: e }) {
      switch (t) {
        case "cMapUrl":
        case "standardFontDataUrl":
        case "wasmUrl":
          break;
        default:
          K(`Not implemented: ${t}`);
      }
      const i = this[t];
      if (!i) throw new Error(`Ensure that the \`${t}\` API parameter is provided.`);
      const s = `${i}${e}`;
      return this._fetch(s, t).catch((n) => {
        throw new Error(`Unable to load ${this.#t[t]} data at: ${s}`);
      });
    }
    async _fetch(t, e) {
      K("Abstract method `_fetch` called.");
    }
  }
  class Cs extends qs {
    async _fetch(t, e) {
      const i = e === "cMapUrl" && !t.endsWith(".bcmap") ? "text" : "bytes", s = await Wi(t, i);
      return s instanceof Uint8Array ? s : oi(s);
    }
  }
  class Ks {
    #t = false;
    constructor({ enableHWA: t = false }) {
      this.#t = t;
    }
    create(t, e) {
      if (t <= 0 || e <= 0) throw new Error("Invalid canvas size");
      const i = this._createCanvas(t, e);
      return {
        canvas: i,
        context: i.getContext("2d", {
          willReadFrequently: !this.#t
        })
      };
    }
    reset({ canvas: t }, e, i) {
      if (!t) throw new Error("Canvas is not specified");
      if (e <= 0 || i <= 0) throw new Error("Invalid canvas size");
      t.width = e, t.height = i;
    }
    destroy(t) {
      const { canvas: e } = t;
      if (!e) throw new Error("Canvas is not specified");
      e.width = e.height = 0, t.canvas = null, t.context = null;
    }
    _createCanvas(t, e) {
      K("Abstract method `_createCanvas` called.");
    }
  }
  class dr extends Ks {
    constructor({ ownerDocument: t = globalThis.document, enableHWA: e = false }) {
      super({
        enableHWA: e
      }), this._document = t;
    }
    _createCanvas(t, e) {
      const i = this._document.createElement("canvas");
      return i.width = t, i.height = e, i;
    }
  }
  class Js {
    addFilter(t) {
      return "none";
    }
    addHCMFilter(t, e) {
      return "none";
    }
    addAlphaFilter(t) {
      return "none";
    }
    addLuminosityFilter(t) {
      return "none";
    }
    addKnockoutFilter(t = 0) {
      return "none";
    }
    addHighlightHCMFilter(t, e, i, s, n) {
      return "none";
    }
    addSelectionHCMFilter(t, e) {
      return "none";
    }
    addSelectionFilter() {
      return "none";
    }
    createSelectionStyle(t = null) {
      return null;
    }
    destroy(t = false) {
    }
  }
  class ur extends Js {
    #t;
    #e;
    #i;
    #s;
    #n;
    #a;
    #r = 0;
    constructor({ docId: t, ownerDocument: e = globalThis.document }) {
      super(), this.#s = t, this.#n = e;
    }
    get #o() {
      return this.#e ||= /* @__PURE__ */ new Map();
    }
    get #h() {
      return this.#a ||= /* @__PURE__ */ new Map();
    }
    get #l() {
      if (!this.#i) {
        const t = this.#n.createElement("div"), { style: e } = t;
        e.colorScheme = "only light", e.visibility = "hidden", e.contain = "strict", e.width = e.height = 0, e.position = "absolute", e.top = e.left = 0, e.zIndex = -1;
        const i = this.#n.createElementNS(St, "svg");
        i.setAttribute("width", 0), i.setAttribute("height", 0), this.#i = this.#n.createElementNS(St, "defs"), t.append(i), i.append(this.#i), this.#n.body.append(t);
      }
      return this.#i;
    }
    #u(t) {
      if (t.length === 1) {
        const o = t[0], l = new Array(256);
        for (let c = 0; c < 256; c++) l[c] = o[c] / 255;
        const h = l.join(",");
        return [
          h,
          h,
          h
        ];
      }
      const [e, i, s] = t, n = new Array(256), r = new Array(256), a = new Array(256);
      for (let o = 0; o < 256; o++) n[o] = e[o] / 255, r[o] = i[o] / 255, a[o] = s[o] / 255;
      return [
        n.join(","),
        r.join(","),
        a.join(",")
      ];
    }
    #d(t) {
      if (this.#t === void 0) {
        this.#t = "";
        const e = this.#n.URL;
        e !== this.#n.baseURI && (li(e) ? z('#createUrl: ignore "data:"-URL for performance reasons.') : this.#t = $s(e, ""));
      }
      return `url(${this.#t}#${t})`;
    }
    addFilter(t) {
      if (!t) return "none";
      let e = this.#o.get(t);
      if (e) return e;
      const [i, s, n] = this.#u(t), r = t.length === 1 ? i : `${i}${s}${n}`;
      if (e = this.#o.get(r), e) return this.#o.set(t, e), e;
      const a = `g_${this.#s}_transfer_map_${this.#r++}`, o = this.#d(a);
      this.#o.set(t, o), this.#o.set(r, o);
      const l = this.#g(a);
      return this.#f(i, s, n, l), o;
    }
    addHCMFilter(t, e) {
      const i = `${t}-${e}`, s = "base";
      let n = this.#h.get(s);
      if (n?.key === i || (n ? (n.filter?.remove(), n.key = i, n.url = "none", n.filter = null) : (n = {
        key: i,
        url: "none",
        filter: null
      }, this.#h.set(s, n)), !t || !e)) return n.url;
      const r = this.#A(t);
      t = D.makeHexColor(...r);
      const a = this.#A(e);
      if (e = D.makeHexColor(...a), this.#l.style.color = "", t === "#000000" && e === "#ffffff" || t === e) return n.url;
      const o = new Array(256);
      for (let p = 0; p <= 255; p++) {
        const m = p / 255;
        o[p] = m <= 0.03928 ? m / 12.92 : ((m + 0.055) / 1.055) ** 2.4;
      }
      const l = o.join(","), h = `g_${this.#s}_hcm_filter`, c = n.filter = this.#g(h);
      this.#f(l, l, l, c), this.#m(c);
      const d = (p, m) => {
        const b = r[p] / 255, y = a[p] / 255, w = new Array(m + 1);
        for (let v = 0; v <= m; v++) w[v] = b + v / m * (y - b);
        return w.join(",");
      };
      return this.#f(d(0, 5), d(1, 5), d(2, 5), c), n.url = this.#d(h), n.url;
    }
    addSelectionHCMFilter(t, e) {
      return this.addHighlightHCMFilter("selection", t, e, "HighlightText", "Highlight");
    }
    addSelectionFilter() {
      return this.addHighlightHCMFilter("selection_default", "black", "white", "HighlightText", "Highlight");
    }
    createSelectionStyle(t = null) {
      const e = t ? this.addSelectionHCMFilter(t.foreground, t.background) : this.addSelectionFilter();
      return e === "none" || !Z.platform.isFirefox ? null : {
        "backdrop-filter": e,
        "background-color": "transparent"
      };
    }
    addAlphaFilter(t) {
      let e = this.#o.get(t);
      if (e) return e;
      const [i] = this.#u([
        t
      ]), s = `alpha_${i}`;
      if (e = this.#o.get(s), e) return this.#o.set(t, e), e;
      const n = `g_${this.#s}_alpha_map_${this.#r++}`, r = this.#d(n);
      this.#o.set(t, r), this.#o.set(s, r);
      const a = this.#g(n);
      return this.#y(i, a), r;
    }
    addLuminosityFilter(t) {
      let e = this.#o.get(t || "luminosity");
      if (e) return e;
      let i, s;
      if (t ? ([i] = this.#u([
        t
      ]), s = `luminosity_${i}`) : s = "luminosity", e = this.#o.get(s), e) return this.#o.set(t, e), e;
      const n = `g_${this.#s}_luminosity_map_${this.#r++}`, r = this.#d(n);
      this.#o.set(t, r), this.#o.set(s, r);
      const a = this.#g(n);
      return this.#p(a), t && this.#y(i, a), r;
    }
    addKnockoutFilter(t = 0) {
      const e = t > 0 ? Math.min(1 / t, 1e6) : 1e6, i = `knockout_${e}`, s = this.#o.get(i);
      if (s) return s;
      const n = `g_${this.#s}_knockout_filter_${this.#r++}`, r = this.#d(n);
      this.#o.set(i, r);
      const a = this.#g(n), o = this.#n.createElementNS(St, "feComponentTransfer");
      a.append(o);
      const l = this.#n.createElementNS(St, "feFuncA");
      return l.setAttribute("type", "linear"), l.setAttribute("slope", `${e}`), l.setAttribute("intercept", "0"), o.append(l), r;
    }
    addHighlightHCMFilter(t, e, i, s, n) {
      const r = `${e}-${i}-${s}-${n}`;
      let a = this.#h.get(t);
      if (a?.key === r || (a ? (a.filter?.remove(), a.key = r, a.url = "none", a.filter = null) : (a = {
        key: r,
        url: "none",
        filter: null
      }, this.#h.set(t, a)), !e || !i)) return a.url;
      const [o, l] = [
        e,
        i
      ].map(this.#A.bind(this));
      let h = Math.round(0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2]), c = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]), [d, p] = [
        s,
        n
      ].map(this.#E.bind(this));
      c < h && ([h, c, d, p] = [
        c,
        h,
        p,
        d
      ]), this.#l.style.color = "";
      const m = (w, v, E) => {
        const _ = new Array(256), S = (c - h) / E, T = w / 255, M = (v - w) / (255 * E);
        let I = 0;
        for (let F = 0; F <= E; F++) {
          const R = Math.round(h + F * S), B = T + F * M;
          for (let H = I; H <= R; H++) _[H] = B;
          I = R + 1;
        }
        for (let F = I; F < 256; F++) _[F] = _[I - 1];
        return _.join(",");
      }, b = `g_${this.#s}_hcm_${t}_filter`, y = a.filter = this.#g(b);
      return this.#m(y), this.#f(m(d[0], p[0], 5), m(d[1], p[1], 5), m(d[2], p[2], 5), y), a.url = this.#d(b), a.url;
    }
    destroy(t = false) {
      t && this.#a?.size || (this.#i?.parentNode.parentNode.remove(), this.#i = null, this.#e?.clear(), this.#e = null, this.#a?.clear(), this.#a = null, this.#r = 0);
    }
    #p(t) {
      const e = this.#n.createElementNS(St, "feColorMatrix");
      e.setAttribute("type", "matrix"), e.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), t.append(e);
    }
    #m(t) {
      const e = this.#n.createElementNS(St, "feColorMatrix");
      e.setAttribute("type", "matrix"), e.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), t.append(e);
    }
    #g(t) {
      const e = this.#n.createElementNS(St, "filter");
      return e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("id", t), this.#l.append(e), e;
    }
    #c(t, e, i) {
      const s = this.#n.createElementNS(St, e);
      s.setAttribute("type", "discrete"), s.setAttribute("tableValues", i), t.append(s);
    }
    #f(t, e, i, s) {
      const n = this.#n.createElementNS(St, "feComponentTransfer");
      s.append(n), this.#c(n, "feFuncR", t), this.#c(n, "feFuncG", e), this.#c(n, "feFuncB", i);
    }
    #y(t, e) {
      const i = this.#n.createElementNS(St, "feComponentTransfer");
      e.append(i), this.#c(i, "feFuncA", t);
    }
    #A(t) {
      return this.#l.style.color = t, Ne(getComputedStyle(this.#l).getPropertyValue("color"));
    }
    #b(t) {
      return this.#l.style.color = t, Oe(getComputedStyle(this.#l).getPropertyValue("color"));
    }
    #E(t) {
      const [e, i, s, n] = this.#b(t);
      if (n === 1) return [
        e,
        i,
        s
      ];
      const [r, a, o] = this.#A("Canvas");
      return [
        _i(e, r, n),
        _i(i, a, n),
        _i(s, o, n)
      ];
    }
  }
  function _i(u, t, e) {
    return Math.round(e * u + (1 - e) * t);
  }
  Tt && z("Please use the `legacy` build in Node.js environments.");
  async function fr(u) {
    const e = await process.getBuiltinModule("fs/promises").readFile(u);
    return new Uint8Array(e);
  }
  class pr extends Js {
  }
  class gr extends Ks {
    _createCanvas(t, e) {
      return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
    }
  }
  class mr extends qs {
    async _fetch(t, e) {
      return fr(t);
    }
  }
  function Qs({ src: u, srcPos: t = 0, dest: e, width: i, height: s, nonBlackColor: n = 4294967295, inverseDecode: r = false }) {
    const a = Z.isLittleEndian ? 4278190080 : 255, [o, l] = r ? [
      n,
      a
    ] : [
      a,
      n
    ], h = i >> 3, c = i & 7, d = o ^ l, p = u.length;
    e = new Uint32Array(e.buffer);
    let m = 0;
    for (let b = 0; b < s; ++b) {
      for (const w = t + h; t < w; ++t, m += 8) {
        const v = u[t];
        e[m] = o ^ -(v >> 7 & 1) & d, e[m + 1] = o ^ -(v >> 6 & 1) & d, e[m + 2] = o ^ -(v >> 5 & 1) & d, e[m + 3] = o ^ -(v >> 4 & 1) & d, e[m + 4] = o ^ -(v >> 3 & 1) & d, e[m + 5] = o ^ -(v >> 2 & 1) & d, e[m + 6] = o ^ -(v >> 1 & 1) & d, e[m + 7] = o ^ -(v & 1) & d;
      }
      if (c === 0) continue;
      const y = t < p ? u[t++] : 255;
      for (let w = 0; w < c; ++w, ++m) e[m] = o ^ -(y >> 7 - w & 1) & d;
    }
    return {
      srcPos: t,
      destPos: m
    };
  }
  function br({ src: u, srcPos: t = 0, dest: e, destPos: i = 0, width: s, height: n }) {
    let r = 0;
    const a = s * n * 3, o = a >> 2, l = new Uint32Array(u.buffer, t, o), h = Z.isLittleEndian ? 4278190080 : 255;
    if (Z.isLittleEndian) {
      for (; r < o - 2; r += 3, i += 4) {
        const c = l[r], d = l[r + 1], p = l[r + 2];
        e[i] = c | h, e[i + 1] = c >>> 24 | d << 8 | h, e[i + 2] = d >>> 16 | p << 16 | h, e[i + 3] = p >>> 8 | h;
      }
      for (let c = r * 4, d = t + a; c < d; c += 3) e[i++] = u[c] | u[c + 1] << 8 | u[c + 2] << 16 | h;
    } else {
      for (; r < o - 2; r += 3, i += 4) {
        const c = l[r], d = l[r + 1], p = l[r + 2];
        e[i] = c | h, e[i + 1] = c << 24 | d >>> 8 | h, e[i + 2] = d << 16 | p >>> 16 | h, e[i + 3] = p << 8 | h;
      }
      for (let c = r * 4, d = t + a; c < d; c += 3) e[i++] = u[c] << 24 | u[c + 1] << 16 | u[c + 2] << 8 | h;
    }
    return {
      srcPos: t + a,
      destPos: i
    };
  }
  const yr = `
struct Uniforms {
  offsetX      : f32,
  offsetY      : f32,
  scaleX       : f32,
  scaleY       : f32,
  paddedWidth  : f32,
  paddedHeight : f32,
  borderSize   : f32,
  _pad         : f32,
};

@group(0) @binding(0) var<uniform> u : Uniforms;

struct VertexInput {
  @location(0) position : vec2<f32>,
  @location(1) color    : vec4<f32>,
};

struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0)       color    : vec3<f32>,
};

@vertex
fn vs_main(in : VertexInput) -> VertexOutput {
  var out : VertexOutput;
  let cx = (in.position.x + u.offsetX) * u.scaleX;
  let cy = (in.position.y + u.offsetY) * u.scaleY;
  out.position = vec4<f32>(
    ((cx + u.borderSize) / u.paddedWidth) * 2.0 - 1.0,
    1.0 - ((cy + u.borderSize) / u.paddedHeight) * 2.0,
    0.0,
    1.0
  );
  out.color = in.color.rgb;
  return out;
}

@fragment
fn fs_main(in : VertexOutput) -> @location(0) vec4<f32> {
  return vec4<f32>(in.color, 1.0);
}
`;
  class Ar {
    #t = null;
    #e = null;
    #i = null;
    #s = null;
    async #n() {
      if (!globalThis.navigator?.gpu) return false;
      try {
        const t = await navigator.gpu.requestAdapter();
        return t ? (this.#s = navigator.gpu.getPreferredCanvasFormat(), this.#e = await t.requestDevice(), true) : false;
      } catch {
        return false;
      }
    }
    init() {
      return this.#t ||= this.#n();
    }
    get isReady() {
      return this.#e !== null;
    }
    loadMeshShader() {
      if (!this.#e || this.#i) return;
      const t = this.#e.createShaderModule({
        code: yr
      });
      this.#i = this.#e.createRenderPipeline({
        layout: "auto",
        vertex: {
          module: t,
          entryPoint: "vs_main",
          buffers: [
            {
              arrayStride: 8,
              attributes: [
                {
                  shaderLocation: 0,
                  offset: 0,
                  format: "float32x2"
                }
              ]
            },
            {
              arrayStride: 4,
              attributes: [
                {
                  shaderLocation: 1,
                  offset: 0,
                  format: "unorm8x4"
                }
              ]
            }
          ]
        },
        fragment: {
          module: t,
          entryPoint: "fs_main",
          targets: [
            {
              format: this.#s
            }
          ]
        },
        primitive: {
          topology: "triangle-list"
        }
      });
    }
    draw(t, e, i, s, n, r, a, o) {
      this.loadMeshShader();
      const l = this.#e, { offsetX: h, offsetY: c, scaleX: d, scaleY: p } = s, m = l.createBuffer({
        size: Math.max(t.byteLength, 4),
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
      });
      t.byteLength > 0 && l.queue.writeBuffer(m, 0, t);
      const b = l.createBuffer({
        size: Math.max(e.byteLength, 4),
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
      });
      e.byteLength > 0 && l.queue.writeBuffer(b, 0, e);
      const y = l.createBuffer({
        size: 32,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
      });
      l.queue.writeBuffer(y, 0, new Float32Array([
        h,
        c,
        d,
        p,
        r,
        a,
        o,
        0
      ]));
      const w = l.createBindGroup({
        layout: this.#i.getBindGroupLayout(0),
        entries: [
          {
            binding: 0,
            resource: {
              buffer: y
            }
          }
        ]
      }), v = new OffscreenCanvas(r, a), E = v.getContext("webgpu");
      E.configure({
        device: l,
        format: this.#s,
        alphaMode: n ? "opaque" : "premultiplied"
      });
      const _ = n ? {
        r: n[0] / 255,
        g: n[1] / 255,
        b: n[2] / 255,
        a: 1
      } : {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      }, S = l.createCommandEncoder(), T = S.beginRenderPass({
        colorAttachments: [
          {
            view: E.getCurrentTexture().createView(),
            clearValue: _,
            loadOp: "clear",
            storeOp: "store"
          }
        ]
      });
      return i > 0 && (T.setPipeline(this.#i), T.setBindGroup(0, w), T.setVertexBuffer(0, m), T.setVertexBuffer(1, b), T.draw(i)), T.end(), l.queue.submit([
        S.finish()
      ]), m.destroy(), b.destroy(), y.destroy(), v.transferToImageBitmap();
    }
  }
  const ci = new Ar();
  function wr() {
    return ci.init();
  }
  function vr() {
    return ci.isReady;
  }
  function xr() {
    ci.loadMeshShader();
  }
  function Er(u, t, e, i, s, n, r, a) {
    return ci.draw(u, t, e, i, s, n, r, a);
  }
  const vt = {
    FILL: "Fill",
    STROKE: "Stroke",
    SHADING: "Shading"
  };
  function Ze(u, t) {
    if (!t) return;
    const e = t[2] - t[0], i = t[3] - t[1], s = new Path2D();
    s.rect(t[0], t[1], e, i), u.clip(s);
  }
  class Qi {
    isModifyingCurrentTransform() {
      return false;
    }
    getPattern() {
      K("Abstract method `getPattern` called.");
    }
  }
  class Sr extends Qi {
    constructor(t) {
      super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
    }
    isOriginBased() {
      return this._p0[0] === 0 && this._p0[1] === 0 && (!this.isRadial() || this._p1[0] === 0 && this._p1[1] === 0);
    }
    isRadial() {
      return this._type === "radial";
    }
    areConic() {
      if (!this.isRadial()) return false;
      const t = Math.hypot(this._p0[0] - this._p1[0], this._p0[1] - this._p1[1]);
      return t + this._r1 > this._r0 && t + this._r0 > this._r1;
    }
    _createGradient(t, e = null) {
      let i, s = this._p0, n = this._p1;
      if (e && (s = s.slice(), n = n.slice(), D.applyTransform(s, e), D.applyTransform(n, e)), this._type === "axial") i = t.createLinearGradient(s[0], s[1], n[0], n[1]);
      else if (this._type === "radial") {
        let r = this._r0, a = this._r1;
        if (e) {
          const o = new Float32Array(2);
          D.singularValueDecompose2dScale(e, o), r *= o[0], a *= o[0];
        }
        i = t.createRadialGradient(s[0], s[1], r, n[0], n[1], a);
      }
      for (const r of this._colorStops) i.addColorStop(r[0], r[1]);
      return i;
    }
    _createReversedGradient(t, e = null) {
      let i = this._p1, s = this._p0;
      e && (i = i.slice(), s = s.slice(), D.applyTransform(i, e), D.applyTransform(s, e));
      let n = this._r1, r = this._r0;
      if (e) {
        const l = new Float32Array(2);
        D.singularValueDecompose2dScale(e, l), n *= l[0], r *= l[0];
      }
      const a = t.createRadialGradient(i[0], i[1], n, s[0], s[1], r), o = this._colorStops.map(([l, h]) => [
        1 - l,
        h
      ]).reverse();
      for (const [l, h] of o) a.addColorStop(l, h);
      return a;
    }
    getPattern(t, e, i, s) {
      let n;
      if (s === vt.STROKE || s === vt.FILL) {
        if (this.isOriginBased()) {
          let d = D.transform(i, e.baseTransform);
          this.matrix && (d = D.transform(d, this.matrix));
          const p = 1e-3, m = Math.hypot(d[0], d[1]), b = Math.hypot(d[2], d[3]), y = (d[0] * d[2] + d[1] * d[3]) / (m * b);
          if (Math.abs(y) < p) if (this.isRadial()) {
            if (Math.abs(m - b) < p) return this._createGradient(t, d);
          } else return this._createGradient(t, d);
        }
        const r = e.current.getClippedPathBoundingBox(s, it(t)) || [
          0,
          0,
          0,
          0
        ], a = Math.ceil(r[2] - r[0]) || 1, o = Math.ceil(r[3] - r[1]) || 1, l = e.canvasFactory.create(a, o), h = l.context;
        h.clearRect(0, 0, h.canvas.width, h.canvas.height), h.beginPath(), h.rect(0, 0, h.canvas.width, h.canvas.height), h.translate(-r[0], -r[1]), i = D.transform(i, [
          1,
          0,
          0,
          1,
          r[0],
          r[1]
        ]), h.transform(...e.baseTransform), this.matrix && h.transform(...this.matrix), Ze(h, this._bbox), this.areConic() && (h.fillStyle = this._createReversedGradient(h), h.fill()), h.fillStyle = this._createGradient(h), h.fill(), n = t.createPattern(l.canvas, "no-repeat"), e.canvasFactory.destroy(l);
        const c = new DOMMatrix(i);
        n.setTransform(c);
      } else this.areConic() && (t.save(), Ze(t, this._bbox), t.fillStyle = this._createReversedGradient(t), t.fillRect(-1e10, -1e10, 2e10, 2e10), t.restore()), Ze(t, this._bbox), n = this._createGradient(t);
      return n;
    }
  }
  function Cr(u, t, e, i, s, n, r, a) {
    const o = t.coords, l = t.colors, h = u.data, c = u.width * 4;
    let d;
    o[e * 2 + 1] > o[i * 2 + 1] && (d = e, e = i, i = d, d = n, n = r, r = d), o[i * 2 + 1] > o[s * 2 + 1] && (d = i, i = s, s = d, d = r, r = a, a = d), o[e * 2 + 1] > o[i * 2 + 1] && (d = e, e = i, i = d, d = n, n = r, r = d);
    const p = (o[e * 2] + t.offsetX) * t.scaleX, m = (o[e * 2 + 1] + t.offsetY) * t.scaleY, b = (o[i * 2] + t.offsetX) * t.scaleX, y = (o[i * 2 + 1] + t.offsetY) * t.scaleY, w = (o[s * 2] + t.offsetX) * t.scaleX, v = (o[s * 2 + 1] + t.offsetY) * t.scaleY;
    if (m >= v) return;
    const E = l[n * 4], _ = l[n * 4 + 1], S = l[n * 4 + 2], T = l[r * 4], M = l[r * 4 + 1], I = l[r * 4 + 2], F = l[a * 4], R = l[a * 4 + 1], B = l[a * 4 + 2], H = Math.round(m), X = Math.round(v);
    let Y, rt, U, N, bt, yt, Lt, st;
    for (let W = H; W <= X; W++) {
      if (W < y) {
        const ct = W < m ? 0 : (m - W) / (m - y);
        Y = p - (p - b) * ct, rt = E - (E - T) * ct, U = _ - (_ - M) * ct, N = S - (S - I) * ct;
      } else {
        let ct;
        W > v ? ct = 1 : y === v ? ct = 0 : ct = (y - W) / (y - v), Y = b - (b - w) * ct, rt = T - (T - F) * ct, U = M - (M - R) * ct, N = I - (I - B) * ct;
      }
      let tt;
      W < m ? tt = 0 : W > v ? tt = 1 : tt = (m - W) / (m - v), bt = p - (p - w) * tt, yt = E - (E - F) * tt, Lt = _ - (_ - R) * tt, st = S - (S - B) * tt;
      const Bt = Math.round(Math.min(Y, bt)), he = Math.round(Math.max(Y, bt));
      let zt = c * W + Bt * 4;
      for (let ct = Bt; ct <= he; ct++) tt = (Y - ct) / (Y - bt), tt < 0 ? tt = 0 : tt > 1 && (tt = 1), h[zt++] = rt - (rt - yt) * tt | 0, h[zt++] = U - (U - Lt) * tt | 0, h[zt++] = N - (N - st) * tt | 0, h[zt++] = 255;
    }
  }
  class _r extends Qi {
    constructor(t) {
      super(), this._posData = t[2], this._colData = t[3], this._vertexCount = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null, xr();
    }
    _createMeshCanvas(t, e, i) {
      const a = Math.floor(this._bounds[0]), o = Math.floor(this._bounds[1]), l = Math.ceil(this._bounds[2]) - a, h = Math.ceil(this._bounds[3]) - o, c = Math.min(Math.ceil(Math.abs(l * t[0] * 1.1)), 3e3) || 1, d = Math.min(Math.ceil(Math.abs(h * t[1] * 1.1)), 3e3) || 1, p = l ? l / c : 1, m = h ? h / d : 1, b = {
        coords: this._posData,
        colors: this._colData,
        offsetX: -a,
        offsetY: -o,
        scaleX: 1 / p,
        scaleY: 1 / m
      }, y = c + 4, w = d + 4, v = i.create(y, w);
      if (vr() && this._vertexCount > 48) v.context.drawImage(Er(this._posData, this._colData, this._vertexCount, b, e, y, w, 2), 0, 0);
      else {
        const E = v.context.createImageData(c, d);
        if (e) {
          const _ = E.data;
          for (let S = 0, T = _.length; S < T; S += 4) _[S] = e[0], _[S + 1] = e[1], _[S + 2] = e[2], _[S + 3] = 255;
        }
        for (let _ = 0, S = this._vertexCount; _ < S; _ += 3) Cr(E, b, _, _ + 1, _ + 2, _, _ + 1, _ + 2);
        v.context.putImageData(E, 2, 2);
      }
      return {
        canvas: v.canvas,
        offsetX: a - 2 * p,
        offsetY: o - 2 * m,
        scaleX: p,
        scaleY: m
      };
    }
    isModifyingCurrentTransform() {
      return true;
    }
    getPattern(t, e, i, s) {
      Ze(t, this._bbox);
      const n = new Float32Array(2);
      if (s === vt.SHADING) D.singularValueDecompose2dScale(it(t), n);
      else if (this.matrix) {
        D.singularValueDecompose2dScale(this.matrix, n);
        const [o, l] = n;
        D.singularValueDecompose2dScale(e.baseTransform, n), n[0] *= o, n[1] *= l;
      } else D.singularValueDecompose2dScale(e.baseTransform, n);
      const r = this._createMeshCanvas(n, s === vt.SHADING ? null : this._background, e.canvasFactory);
      s !== vt.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(r.offsetX, r.offsetY), t.scale(r.scaleX, r.scaleY);
      const a = t.createPattern(r.canvas, "no-repeat");
      return e.canvasFactory.destroy(r), a;
    }
  }
  class Tr extends Qi {
    getPattern() {
      return "hotpink";
    }
  }
  function kr(u) {
    switch (u[0]) {
      case "RadialAxial":
        return new Sr(u);
      case "Mesh":
        return new _r(u);
      case "Dummy":
        return new Tr();
    }
    throw new Error(`Unknown IR type: ${u[0]}`);
  }
  const _s = {
    COLORED: 1,
    UNCOLORED: 2
  };
  class ke {
    static MAX_PATTERN_SIZE = 3e3;
    constructor(t, e, i, s) {
      this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.needsIsolation = t[9] ?? true, this.ctx = e, this.canvasGraphicsFactory = i, this.baseTransform = s, this.patternBaseMatrix = this.matrix ? D.transform(s, this.matrix) : s;
    }
    canSkipPatternCanvas([t, e, i, s]) {
      const [n, r, a, o] = this.bbox, l = Math.abs(this.xstep), h = Math.abs(this.ystep);
      if (t > l + 1e-6 || e > h + 1e-6) return null;
      const c = Math.floor((i - a) / l) + 1, d = Math.ceil((i + t - n) / l) - 1, p = Math.floor((s - o) / h) + 1, m = Math.ceil((s + e - r) / h) - 1;
      return d <= c && m <= p ? [
        c,
        p
      ] : null;
    }
    updatePatternDims(t, e) {
      const i = D.inverseTransform(this.patternBaseMatrix), s = [
        t[0],
        t[1]
      ], n = [
        t[2],
        t[3]
      ];
      D.applyTransform(s, i), D.applyTransform(n, i), e[0] = Math.abs(n[0] - s[0]), e[1] = Math.abs(n[1] - s[1]), e[2] = Math.min(s[0], n[0]), e[3] = Math.min(s[1], n[1]);
    }
    _renderTileCanvas(t, e, i, s) {
      const [n, r, a, o] = this.bbox, l = t.canvasFactory.create(i.size, s.size), h = l.context, c = this.canvasGraphicsFactory.createCanvasGraphics(h, e);
      return c.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(c, this.paintType, this.color), h.translate(-i.scale * n, -s.scale * r), c.transform(0, i.scale, 0, 0, s.scale, 0, 0), h.save(), c.dependencyTracker?.save(), this.clipBbox(c, n, r, a, o), c.baseTransform = it(c.ctx), c.executeOperatorList(this.operatorList), c.endDrawing(), c.dependencyTracker?.restore(), h.restore(), l;
    }
    _getCombinedScales() {
      const t = new Float32Array(2);
      D.singularValueDecompose2dScale(this.matrix, t);
      const [e, i] = t;
      return D.singularValueDecompose2dScale(this.baseTransform, t), [
        e * t[0],
        i * t[1]
      ];
    }
    drawPattern(t, e, i = false, [s, n], r) {
      const [a, o, l, h] = this.bbox, c = t.dependencyTracker;
      if (c && (t.dependencyTracker = new Fe(c, r)), t.save(), i ? t.ctx.clip(e, "evenodd") : t.ctx.clip(e), t.ctx.setTransform(...this.patternBaseMatrix), t.ctx.translate(s * this.xstep, n * this.ystep), this.needsIsolation || t.ctx.globalAlpha !== 1 || t.ctx.globalCompositeOperation !== "source-over" || t.inSMaskMode) {
        const d = l - a, p = h - o, [m, b] = this._getCombinedScales(), y = this.getSizeAndScale(d, this.ctx.canvas.width, m), w = this.getSizeAndScale(p, this.ctx.canvas.height, b), v = this._renderTileCanvas(t, r, y, w);
        t.ctx.drawImage(v.canvas, a, o, d, p), t.canvasFactory.destroy(v);
      } else this.setFillAndStrokeStyleToContext(t, this.paintType, this.color), this.clipBbox(t, a, o, l, h), t.baseTransformStack.push(t.baseTransform), t.baseTransform = it(t.ctx), t.executeOperatorList(this.operatorList), t.baseTransform = t.baseTransformStack.pop();
      t.restore(), c && (t.dependencyTracker = c);
    }
    createPatternCanvas(t, e) {
      const [i, s, n, r] = this.bbox, a = n - i, o = r - s;
      let { xstep: l, ystep: h } = this;
      l = Math.abs(l), h = Math.abs(h), ai("TilingType: " + this.tilingType);
      const [c, d] = this._getCombinedScales();
      let p = a, m = o, b = false, y = false;
      Math.ceil(l * c) >= Math.ceil(a * c) ? p = l : b = true, Math.ceil(h * d) >= Math.ceil(o * d) ? m = h : y = true;
      const w = this.getSizeAndScale(p, this.ctx.canvas.width, c), v = this.getSizeAndScale(m, this.ctx.canvas.height, d), E = this._renderTileCanvas(t, e, w, v);
      if (b || y) {
        const _ = E.canvas;
        b && (p = l), y && (m = h);
        const S = this.getSizeAndScale(p, this.ctx.canvas.width, c), T = this.getSizeAndScale(m, this.ctx.canvas.height, d), M = S.size, I = T.size, F = t.canvasFactory.create(M, I), R = F.context, B = b ? Math.floor(a / l) : 0, H = y ? Math.floor(o / h) : 0;
        for (let X = 0; X <= B; X++) for (let Y = 0; Y <= H; Y++) R.drawImage(_, M * X, I * Y, M, I, 0, 0, M, I);
        return t.canvasFactory.destroy(E), {
          canvas: F.canvas,
          canvasEntry: F,
          scaleX: S.scale,
          scaleY: T.scale,
          offsetX: i,
          offsetY: s
        };
      }
      return {
        canvas: E.canvas,
        canvasEntry: E,
        scaleX: w.scale,
        scaleY: v.scale,
        offsetX: i,
        offsetY: s
      };
    }
    getSizeAndScale(t, e, i) {
      const s = Math.max(ke.MAX_PATTERN_SIZE, e);
      let n = Math.ceil(t * i);
      return n >= s ? n = s : i = n / t, {
        scale: i,
        size: n
      };
    }
    clipBbox(t, e, i, s, n) {
      const r = s - e, a = n - i, o = new Path2D();
      o.rect(e, i, r, a), D.axialAlignedBoundingBox([
        e,
        i,
        s,
        n
      ], it(t.ctx), t.current.minMax), t.ctx.clip(o), t.current.updateClipFromPath();
    }
    setFillAndStrokeStyleToContext(t, e, i) {
      const s = t.ctx, n = t.current;
      switch (n.patternFill = n.patternStroke = false, e) {
        case _s.COLORED:
          const { fillStyle: r, strokeStyle: a } = this.ctx;
          s.fillStyle = n.fillColor = r, s.strokeStyle = n.strokeColor = a;
          break;
        case _s.UNCOLORED:
          s.fillStyle = s.strokeStyle = i, n.fillColor = n.strokeColor = i;
          break;
        default:
          throw new Pn(`Unsupported paint type: ${e}`);
      }
    }
    isModifyingCurrentTransform() {
      return false;
    }
    getPattern(t, e, i, s, n) {
      const r = s !== vt.SHADING ? D.transform(i, this.patternBaseMatrix) : i, a = this.createPatternCanvas(e, n);
      let o = new DOMMatrix(r);
      o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
      const l = t.createPattern(a.canvas, "repeat");
      return e.canvasFactory.destroy(a.canvasEntry), l.setTransform(o), l;
    }
  }
  const Mr = 16, Pr = 100, Ir = 15, Ts = 10, Et = 16, Ti = new DOMMatrix(), Mt = new Float32Array(2);
  function ks(u, t) {
    if (u._removeMirroring) throw new Error("Context is already forwarding operations.");
    const e = /* @__PURE__ */ new Map();
    for (const i of [
      "save",
      "restore",
      "rotate",
      "scale",
      "translate",
      "transform",
      "setTransform",
      "resetTransform",
      "clip",
      "moveTo",
      "lineTo",
      "bezierCurveTo",
      "quadraticCurveTo",
      "arc",
      "arcTo",
      "ellipse",
      "rect",
      "roundRect",
      "closePath",
      "beginPath"
    ]) {
      const s = u[i];
      typeof s != "function" || typeof t[i] != "function" || (e.set(i, s), u[i] = function(...n) {
        return t[i](...n), s.apply(this, n);
      });
    }
    u._removeMirroring = () => {
      for (const [i, s] of e) u[i] = s;
      delete u._removeMirroring;
    };
  }
  function We(u, t, e, i, s, n, r, a, o, l) {
    const [h, c, d, p, m, b] = it(u);
    if (c === 0 && d === 0) {
      const v = r * h + m, E = Math.round(v), _ = a * p + b, S = Math.round(_), T = (r + o) * h + m, M = Math.abs(Math.round(T) - E) || 1, I = (a + l) * p + b, F = Math.abs(Math.round(I) - S) || 1;
      return u.setTransform(Math.sign(h), 0, 0, Math.sign(p), E, S), u.drawImage(t, e, i, s, n, 0, 0, M, F), u.setTransform(h, c, d, p, m, b), [
        M,
        F
      ];
    }
    if (h === 0 && p === 0) {
      const v = a * d + m, E = Math.round(v), _ = r * c + b, S = Math.round(_), T = (a + l) * d + m, M = Math.abs(Math.round(T) - E) || 1, I = (r + o) * c + b, F = Math.abs(Math.round(I) - S) || 1;
      return u.setTransform(0, Math.sign(c), Math.sign(d), 0, E, S), u.drawImage(t, e, i, s, n, 0, 0, F, M), u.setTransform(h, c, d, p, m, b), [
        F,
        M
      ];
    }
    u.drawImage(t, e, i, s, n, r, a, o, l);
    const y = Math.hypot(h, c), w = Math.hypot(d, p);
    return [
      y * o,
      w * l
    ];
  }
  class Ms {
    alphaIsShape = false;
    fontSize = 0;
    fontSizeScale = 1;
    textMatrix = null;
    textMatrixScale = 1;
    fontMatrix = Pi;
    leading = 0;
    x = 0;
    y = 0;
    lineX = 0;
    lineY = 0;
    charSpacing = 0;
    wordSpacing = 0;
    textHScale = 1;
    textRenderingMode = mt.FILL;
    textRise = 0;
    fillColor = "#000000";
    strokeColor = "#000000";
    tilingPatternDims = null;
    patternFill = false;
    patternStroke = false;
    fillAlpha = 1;
    strokeAlpha = 1;
    lineWidth = 1;
    activeSMask = null;
    transferMaps = "none";
    minMax = se.slice();
    constructor(t, e) {
      this.clipBox = new Float32Array([
        0,
        0,
        t,
        e
      ]);
    }
    clone() {
      const t = Object.create(this);
      return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t.tilingPatternDims = this.tilingPatternDims?.slice(), t;
    }
    getPathBoundingBox(t = vt.FILL, e = null) {
      const i = this.minMax.slice();
      if (t === vt.STROKE) {
        e || K("Stroke bounding box must include transform."), D.singularValueDecompose2dScale(e, Mt);
        const s = Mt[0] * this.lineWidth / 2, n = Mt[1] * this.lineWidth / 2;
        i[0] -= s, i[1] -= n, i[2] += s, i[3] += n;
      }
      return i;
    }
    updateClipFromPath() {
      const t = D.intersect(this.clipBox, this.getPathBoundingBox());
      this.startNewPathAndClipBox(t || [
        0,
        0,
        0,
        0
      ]);
    }
    isEmptyClip() {
      return this.minMax[0] === 1 / 0;
    }
    startNewPathAndClipBox(t) {
      this.clipBox.set(t, 0), this.minMax.set(se, 0);
    }
    getClippedPathBoundingBox(t = vt.FILL, e = null) {
      return D.intersect(this.clipBox, this.getPathBoundingBox(t, e));
    }
  }
  function Ps(u, t) {
    const { width: e, height: i, kind: s } = t, n = i % Et, r = (i - n) / Et, a = n === 0 ? r : r + 1, o = u.createImageData(e, Et);
    let l = 0;
    const h = t.data, c = o.data;
    let d;
    if (s === Qe.GRAYSCALE_1BPP) for (d = 0; d < a; d++) ({ srcPos: l } = Qs({
      src: h,
      srcPos: l,
      dest: c,
      width: e,
      height: d < r ? Et : n
    })), u.putImageData(o, 0, d * Et);
    else if (s === Qe.RGBA_32BPP) {
      let p = 0, m = e * Et * 4;
      for (d = 0; d < r; d++) c.set(h.subarray(l, l + m)), l += m, u.putImageData(o, 0, p), p += Et;
      d < a && (m = e * n * 4, c.set(h.subarray(l, l + m)), u.putImageData(o, 0, p));
    } else if (s === Qe.RGB_24BPP) for (d = 0; d < a; d++) ({ srcPos: l } = br({
      src: h,
      srcPos: l,
      dest: new Uint32Array(c.buffer),
      width: e,
      height: d < r ? Et : n
    })), u.putImageData(o, 0, d * Et);
    else throw new Error(`bad image kind: ${s}`);
  }
  function Is(u, t) {
    if (t.bitmap) {
      u.drawImage(t.bitmap, 0, 0);
      return;
    }
    const { width: e, height: i } = t, s = i % Et, n = (i - s) / Et, r = s === 0 ? n : n + 1, a = u.createImageData(e, Et);
    let o = 0;
    const l = t.data, h = a.data;
    for (let c = 0; c < r; c++) ({ srcPos: o } = Qs({
      src: l,
      srcPos: o,
      dest: h,
      width: e,
      height: c < n ? Et : s,
      nonBlackColor: 0
    })), u.putImageData(a, 0, c * Et);
  }
  function ee(u, t) {
    const e = [
      "strokeStyle",
      "fillStyle",
      "fillRule",
      "globalAlpha",
      "lineWidth",
      "lineCap",
      "lineJoin",
      "miterLimit",
      "globalCompositeOperation",
      "font",
      "filter"
    ];
    for (const i of e) u[i] !== void 0 && (t[i] = u[i]);
    u.setLineDash !== void 0 && (t.setLineDash(u.getLineDash()), t.lineDashOffset = u.lineDashOffset);
  }
  function Xe(u) {
    u.strokeStyle = u.fillStyle = "#000000", u.fillRule = "nonzero", u.globalAlpha = 1, u.lineWidth = 1, u.lineCap = "butt", u.lineJoin = "miter", u.miterLimit = 10, u.globalCompositeOperation = "source-over", u.font = "10px sans-serif", u.setLineDash !== void 0 && (u.setLineDash([]), u.lineDashOffset = 0);
    const { filter: t } = u;
    t !== "none" && t !== "" && (u.filter = "none");
  }
  function Ds(u, t) {
    if (t) return true;
    D.singularValueDecompose2dScale(u, Mt);
    const e = Math.fround(jt.pixelRatio * ye.PDF_TO_CSS_UNITS);
    return Mt[0] <= e && Mt[1] <= e;
  }
  const Dr = [
    "butt",
    "round",
    "square"
  ], Fr = [
    "miter",
    "round",
    "bevel"
  ], Lr = {}, Fs = {};
  class be {
    #t = 0;
    #e = 0;
    #i = null;
    #s = null;
    #n = null;
    #a = null;
    #r = 1;
    #o;
    #h = null;
    #l = [];
    constructor(t, e, i, s, n, { optionalContentConfig: r, markedContentStack: a = null }, o, l, h, c) {
      this.ctx = t, this.current = new Ms(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = false, this.commonObjs = e, this.objs = i, this.canvasFactory = s, this.filterFactory = n, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.tempSMask = null, this.smaskGroupCanvases = [], this.smaskPreparedEntry = null, this.smaskPreparedFor = null, this.smaskPreparedOffsetX = 0, this.smaskPreparedOffsetY = 0, this.smaskPreparedOOBAlpha = null, this.suspendedCtx = null, this.contentVisible = true, this.markedContentStack = a || [], this.optionalContentConfig = r, this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = o, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = l, this._cachedScaleForStroking = [
        -1,
        0
      ], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = h ?? null, this.imagesTracker = c ?? null;
    }
    getObject(t, e, i = null) {
      return typeof e == "string" ? (this.dependencyTracker?.recordNamedDependency(t, e), e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e)) : i;
    }
    beginDrawing({ transform: t, viewport: e, transparency: i = false, background: s = null }) {
      const n = this.ctx.canvas.width, r = this.ctx.canvas.height, a = this.ctx.fillStyle;
      if (this.ctx.fillStyle = s || "#ffffff", this.ctx.fillRect(0, 0, n, r), this.ctx.fillStyle = a, i) {
        const o = this.transparentCanvasEntry = this.canvasFactory.create(n, r);
        this.compositeCtx = this.ctx, { canvas: this.transparentCanvas, context: this.ctx } = o, this.ctx.save(), this.ctx.transform(...it(this.compositeCtx));
      }
      this.ctx.save(), Xe(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[3]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = it(this.ctx);
    }
    executeOperatorList(t, e, i, s, n) {
      const r = t.argsArray, a = t.fnArray;
      let o = e || 0;
      const l = r.length;
      if (l === o) return o;
      const h = l - o > Ts && typeof i == "function", c = h ? Date.now() + Ir : 0;
      let d = 0;
      const p = this.commonObjs, m = this.objs;
      let b, y;
      for (; ; ) {
        if (s !== void 0) {
          if (o === s.nextBreakPoint) return s.breakIt(o, i), o;
          if (s.shouldSkip(o)) {
            if (++o === l) return o;
            continue;
          }
        }
        if (!n || n(o)) if (b = a[o], y = r[o] ?? null, b !== Gt.dependency) y === null ? this[b](o) : this[b](o, ...y);
        else for (const w of y) {
          this.dependencyTracker?.recordNamedData(w, o);
          const v = w.startsWith("g_") ? p : m;
          if (!v.has(w)) return v.get(w, i), o;
        }
        if (o++, o === l) return o;
        if (h && ++d > Ts) {
          if (Date.now() > c) return i(), o;
          d = 0;
        }
      }
    }
    #u() {
      for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
      this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.canvasFactory.destroy(this.transparentCanvasEntry), this.transparentCanvas = null, this.transparentCanvasEntry = null);
    }
    endDrawing() {
      this.#u();
      for (const t of this.smaskGroupCanvases) this.canvasFactory.destroy(t);
      this.smaskGroupCanvases.length = 0, this._clearPreparedSMask(), this.tempSMask = null, this.smaskStack.length = 0;
      for (const t of this.#l) this.#b(t);
      this.#l.length = 0, this.#i = null, this.#s = null, this.#n = null, this.#a = null, this.#r = 1, this.#h = null, this.#e = 0, this.#t = 0, this.cachedPatterns.clear();
      for (const t of this._cachedBitmapsMap.values()) {
        for (const e of t.values()) typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
        t.clear();
      }
      this._cachedBitmapsMap.clear(), this.#d();
    }
    #d() {
      if (this.pageColors) {
        const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
        if (t !== "none") {
          const e = this.ctx.filter;
          this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
        }
      }
    }
    _scaleImage(t, e) {
      const i = t.width ?? t.displayWidth, s = t.height ?? t.displayHeight, n = Math.max(Math.hypot(e[0], e[1]), 1), r = Math.max(Math.hypot(e[2], e[3]), 1), a = [];
      let o = n, l = r, h = i, c = s;
      for (; o > 2 && h > 1 || l > 2 && c > 1; ) {
        let w = h, v = c;
        o > 2 && h > 1 && (w = Math.ceil(h / 2), o /= h / w), l > 2 && c > 1 && (v = Math.ceil(c / 2), l /= c / v), a.push({
          newWidth: w,
          newHeight: v
        }), h = w, c = v;
      }
      if (a.length === 0) return {
        img: t,
        paintWidth: i,
        paintHeight: s,
        tmpCanvas: null
      };
      if (a.length === 1) {
        const { newWidth: w, newHeight: v } = a[0], E = this.canvasFactory.create(w, v);
        return E.context.drawImage(t, 0, 0, i, s, 0, 0, w, v), {
          img: E.canvas,
          paintWidth: w,
          paintHeight: v,
          tmpCanvas: E
        };
      }
      let d = this.canvasFactory.create(1, 1), p = this.canvasFactory.create(1, 1), m = i, b = s, y = t;
      for (const { newWidth: w, newHeight: v } of a) this.canvasFactory.reset(p, w, v), p.context.drawImage(y, 0, 0, m, b, 0, 0, w, v), [d, p] = [
        p,
        d
      ], y = d.canvas, m = w, b = v;
      return this.canvasFactory.destroy(p), {
        img: d.canvas,
        paintWidth: m,
        paintHeight: b,
        tmpCanvas: d
      };
    }
    _createMaskCanvas(t, e) {
      const i = this.ctx, { width: s, height: n } = e, r = this.current.fillColor, a = this.current.patternFill, o = it(i);
      let l, h, c, d;
      if ((e.bitmap || e.data) && e.count > 1) {
        const B = e.bitmap || e.data.buffer;
        h = JSON.stringify(a ? o : [
          o.slice(0, 4),
          r
        ]), l = this._cachedBitmapsMap.getOrInsertComputed(B, Vi);
        const H = l.get(h);
        if (H && !a) {
          const X = Math.round(Math.min(o[0], o[2]) + o[4]), Y = Math.round(Math.min(o[1], o[3]) + o[5]);
          return this.dependencyTracker?.recordDependencies(t, It.transformAndFill), {
            canvas: H,
            offsetX: X,
            offsetY: Y
          };
        }
        c = H;
      }
      c || (d = this.canvasFactory.create(s, n), Is(d.context, e));
      let p = D.transform(o, [
        1 / s,
        0,
        0,
        -1 / n,
        0,
        0
      ]);
      p = D.transform(p, [
        1,
        0,
        0,
        1,
        0,
        -n
      ]);
      const m = se.slice();
      D.axialAlignedBoundingBox([
        0,
        0,
        s,
        n
      ], p, m);
      const [b, y, w, v] = m, E = Math.round(w - b) || 1, _ = Math.round(v - y) || 1, S = this.canvasFactory.create(E, _), T = S.context, M = b, I = y;
      T.translate(-M, -I), T.transform(...p);
      let F = null;
      if (!c) {
        const B = this._scaleImage(d.canvas, Nt(T));
        c = B.img, F = B.tmpCanvas, c !== d.canvas && (this.canvasFactory.destroy(d), d = null), l && a && (l.set(h, c), F = null, d = null);
      }
      T.imageSmoothingEnabled = Ds(it(T), e.interpolate), We(T, c, 0, 0, c.width, c.height, 0, 0, s, n), F && this.canvasFactory.destroy(F), d && this.canvasFactory.destroy(d), T.globalCompositeOperation = "source-in";
      const R = D.transform(Nt(T), [
        1,
        0,
        0,
        1,
        -M,
        -I
      ]);
      return T.fillStyle = a ? r.getPattern(i, this, R, vt.FILL, t) : r, T.fillRect(0, 0, s, n), l && !a && l.set(h, S.canvas), this.dependencyTracker?.recordDependencies(t, It.transformAndFill), {
        canvas: S.canvas,
        canvasEntry: l && !a ? null : S,
        offsetX: Math.round(M),
        offsetY: Math.round(I)
      };
    }
    setLineWidth(t, e) {
      this.dependencyTracker?.recordSimpleData("lineWidth", t), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
    }
    setLineCap(t, e) {
      this.dependencyTracker?.recordSimpleData("lineCap", t), this.ctx.lineCap = Dr[e];
    }
    setLineJoin(t, e) {
      this.dependencyTracker?.recordSimpleData("lineJoin", t), this.ctx.lineJoin = Fr[e];
    }
    setMiterLimit(t, e) {
      this.dependencyTracker?.recordSimpleData("miterLimit", t), this.ctx.miterLimit = e;
    }
    setDash(t, e, i) {
      this.dependencyTracker?.recordSimpleData("dash", t);
      const s = this.ctx;
      s.setLineDash !== void 0 && (s.setLineDash(e), s.lineDashOffset = i);
    }
    setRenderingIntent(t, e) {
    }
    setFlatness(t, e) {
    }
    setGState(t, e) {
      for (const [i, s] of e) switch (i) {
        case "LW":
          this.setLineWidth(t, s);
          break;
        case "LC":
          this.setLineCap(t, s);
          break;
        case "LJ":
          this.setLineJoin(t, s);
          break;
        case "ML":
          this.setMiterLimit(t, s);
          break;
        case "D":
          this.setDash(t, s[0], s[1]);
          break;
        case "RI":
          this.setRenderingIntent(t, s);
          break;
        case "FL":
          this.setFlatness(t, s);
          break;
        case "Font":
          this.setFont(t, s[0], s[1]);
          break;
        case "CA":
          this.dependencyTracker?.recordSimpleData("strokeAlpha", t), this.current.strokeAlpha = s;
          break;
        case "ca":
          this.dependencyTracker?.recordSimpleData("fillAlpha", t), this.ctx.globalAlpha = this.current.fillAlpha = s;
          break;
        case "BM":
          this.dependencyTracker?.recordSimpleData("globalCompositeOperation", t), this.ctx.globalCompositeOperation = s;
          break;
        case "SMask":
          this.dependencyTracker?.recordSimpleData("SMask", t), this.current.activeSMask = s ? this.tempSMask : null, this.current.activeSMask && (this.current.activeSMask.blendMode = this.ctx.globalCompositeOperation), this.tempSMask = null, this.checkSMaskState(t);
          break;
        case "TR":
          this.dependencyTracker?.recordSimpleData("filter", t), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
          break;
      }
    }
    get inSMaskMode() {
      return !!this.suspendedCtx;
    }
    _clearPreparedSMask() {
      this.smaskPreparedEntry && (this.canvasFactory.destroy(this.smaskPreparedEntry), this.smaskPreparedEntry = null), this.smaskPreparedFor = null, this.smaskPreparedOffsetX = 0, this.smaskPreparedOffsetY = 0, this.smaskPreparedOOBAlpha = null;
    }
    _ensurePreparedSMask(t) {
      t !== this.smaskPreparedFor && (this._clearPreparedSMask(), this._prepareSMaskCanvas(t));
    }
    checkSMaskState(t) {
      const e = this.inSMaskMode;
      this.current.activeSMask && !e ? this.beginSMaskMode(t) : !this.current.activeSMask && e ? this.endSMaskMode() : this.current.activeSMask && e && this._ensurePreparedSMask(this.current.activeSMask);
    }
    _prepareSMaskCanvas(t) {
      const { canvas: e, subtype: i, backdrop: s, transferMap: n } = t, r = i === "Luminosity" || i === "Alpha" && n;
      if (!r && !(i === "Luminosity" && s)) {
        this.smaskPreparedFor = t;
        return;
      }
      let a;
      if (i === "Luminosity" && s) {
        const [v, E, _] = Oe(s), S = Math.round(0.3 * v + 0.59 * E + 0.11 * _);
        a = n?.[S] ?? S;
      } else a = n?.[0] ?? 0;
      const o = 4, { width: l, height: h } = this.ctx.canvas, c = e.width * e.height, d = l * h < o * c, p = r ? {
        url: i === "Alpha" ? this.filterFactory.addAlphaFilter(n) : this.filterFactory.addLuminosityFilter(n),
        subtype: i,
        transferMap: n
      } : null, m = i === "Luminosity" ? s : null;
      let b, y, w;
      d ? (b = this._bakeSMaskCanvas(e, t.offsetX, t.offsetY, l, h, m, p), y = 0, w = 0) : (b = this._bakeSMaskCanvas(e, 0, 0, e.width, e.height, m, p), y = t.offsetX, w = t.offsetY), this.smaskPreparedEntry = b, this.smaskPreparedFor = t, this.smaskPreparedOffsetX = y, this.smaskPreparedOffsetY = w, this.smaskPreparedOOBAlpha = !d && a !== 0 ? a : null;
    }
    _bakeSMaskCanvas(t, e, i, s, n, r, a) {
      !r && !a && K("_bakeSMaskCanvas with neither backdrop nor filter");
      const o = this.canvasFactory.create(s, n), l = o.context;
      if (l.drawImage(t, e, i), r && (l.globalCompositeOperation = "destination-atop", l.fillStyle = r, l.fillRect(0, 0, s, n)), !a) return o;
      const h = this.canvasFactory.create(s, n), c = h.context;
      c.filter = a.url;
      const d = Z.isCanvasFilterSupported && c.filter !== "none" && c.filter !== "";
      if (c.drawImage(o.canvas, 0, 0), Z.isCanvasFilterSupported && (c.filter = "none"), !d) {
        const p = c.getImageData(0, 0, s, n), { data: m } = p, { transferMap: b } = a;
        if (a.subtype === "Luminosity") for (let y = 0, w = m.length; y < w; y += 4) {
          const v = 0.3 * m[y] + 0.59 * m[y + 1] + 0.11 * m[y + 2] + 0.5 | 0;
          m[y] = m[y + 1] = m[y + 2] = 0, m[y + 3] = b?.[v] ?? v;
        }
        else for (let y = 3, w = m.length; y < w; y += 4) m[y] = b[m[y]];
        c.putImageData(p, 0, 0);
      }
      return this.canvasFactory.destroy(o), h;
    }
    beginSMaskMode(t) {
      if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
      const { width: e, height: i } = this.ctx.canvas, s = this.canvasFactory.create(e, i);
      this.smaskScratchCanvas = s, this.suspendedCtx = this.ctx;
      const n = this.ctx = s.context;
      n.setTransform(this.suspendedCtx.getTransform()), ee(this.suspendedCtx, n), ks(n, this.suspendedCtx), this._ensurePreparedSMask(this.current.activeSMask), this.setGState(t, [
        [
          "BM",
          "source-over"
        ]
      ]);
    }
    endSMaskMode() {
      if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
      this.ctx._removeMirroring(), ee(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null, this.canvasFactory.destroy(this.smaskScratchCanvas), this.smaskScratchCanvas = null, this._clearPreparedSMask();
    }
    #p(t, e = null, i = 1) {
      const { width: s, height: n } = t, r = e ?? this.canvasFactory.create(s, n), a = r.context;
      i = Math.round(i * 255) / 255;
      const o = i < 1;
      o && this.#o === void 0 && (this.#o = Z.isCanvasFilterSupported ? /* @__PURE__ */ new Map() : "none");
      let l = "none";
      if (o && this.#o instanceof Map && (l = this.#o.getOrInsertComputed(i, () => this.filterFactory.addKnockoutFilter(i))), !o || l !== "none") return e && (a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, s, n), a.restore()), a.filter = l, a.drawImage(t, 0, 0), a.filter = "none", r;
      const h = t.getContext("2d", {
        willReadFrequently: true
      }).getImageData(0, 0, s, n), c = a.createImageData(s, n), d = h.data, p = c.data, m = i > 0 ? 1 / i : 1e6;
      for (let b = 3, y = d.length; b < y; b += 4) p[b] = Math.min(Math.round(d[b] * m), 255);
      return a.putImageData(c, 0, 0), r;
    }
    #m(t, e, i, s) {
      let n = t?.[e] ?? null;
      if (n && (n.canvas.width !== i || n.canvas.height !== s) && (this.canvasFactory.destroy(n), n = null), !n) return n = this.canvasFactory.create(i, s), t && (t[e] = n), n;
      const r = n.context;
      return r.save(), r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, i, s), r.restore(), n;
    }
    #g(t, e, i = {}) {
      const { backdropCanvas: s = null, destTransform: n = [
        1,
        0,
        0,
        1,
        0,
        0
      ], backdropOffset: r = [
        0,
        0
      ], reuseMaskEntry: a = null, poolMeta: o = null, sourceAlpha: l = 1, sourceFilter: h = "none", knockoutAlpha: c = 1 } = i, { width: d, height: p } = e, m = this.#p(e, a, c), b = t.globalCompositeOperation;
      if (t.save(), t.setTransform(...n), t.globalAlpha = 1, Z.isCanvasFilterSupported && (t.filter = "none"), t.globalCompositeOperation = "destination-out", t.drawImage(m.canvas, 0, 0), s) {
        const [y, w] = r, v = this.#m(o, "knockoutBackdropEntry", d, p), E = v.context;
        E.drawImage(s, y, w, d, p, 0, 0, d, p), E.globalCompositeOperation = "destination-in", E.drawImage(m.canvas, 0, 0), E.globalCompositeOperation = "source-over", t.globalCompositeOperation = "destination-over", t.drawImage(v.canvas, 0, 0), o || this.canvasFactory.destroy(v);
      }
      t.globalCompositeOperation = b, t.globalAlpha = l, Z.isCanvasFilterSupported && (t.filter = h ?? "none"), t.drawImage(e, 0, 0), t.restore(), a || this.canvasFactory.destroy(m);
    }
    #c(t = 1) {
      if (this.#t === 0 || this.#e > 0 || !this.contentVisible) return false;
      this.#e++, this.#r = t;
      const e = this.#l.at(-1), { canvas: i } = this.ctx, s = this.#m(e, "knockoutTempEntry", i.width, i.height);
      this.#i = s;
      const n = s.context;
      return n.save(), n.setTransform(this.ctx.getTransform()), ee(this.ctx, n), this.#a = n.globalCompositeOperation, n.globalCompositeOperation = "source-over", ks(n, this.ctx), this.#h = e, this.#s = this.ctx, this.#n = this.suspendedCtx, this.ctx = n, this.inSMaskMode && (this.suspendedCtx = n), true;
    }
    #f(t) {
      if (!t) return;
      const e = this.#i, i = this.#s, s = this.#n, n = e.context;
      this.#i = null, this.#s = null, this.#n = null, this.inSMaskMode && this.suspendedCtx === n && this.ctx !== n && this.endSMaskMode(), this.inSMaskMode && (this.suspendedCtx = s), this.ctx._removeMirroring(), this.ctx.globalCompositeOperation = this.#a, this.#a = null, ee(this.ctx, i), this.ctx = i;
      const r = this.#h;
      this.#h = null;
      const a = this.#r;
      this.#r = 1;
      try {
        this.#g(s ?? i, e.canvas, {
          backdropCanvas: r?.backdropCtx?.canvas ?? null,
          backdropOffset: r?.backdropCtx ? [
            r.offsetX,
            r.offsetY
          ] : [
            0,
            0
          ],
          reuseMaskEntry: r?.knockoutMaskEntry ?? null,
          poolMeta: r,
          knockoutAlpha: a
        });
      } finally {
        n.restore(), this.#e--, r || this.canvasFactory.destroy(e);
      }
    }
    compose(t) {
      if (!this.current.activeSMask) return;
      t = t ? [
        Math.floor(t[0]),
        Math.floor(t[1]),
        Math.ceil(t[2]),
        Math.ceil(t[3])
      ] : [
        0,
        0,
        this.ctx.canvas.width,
        this.ctx.canvas.height
      ];
      const e = this.current.activeSMask, i = this.suspendedCtx, s = this.#e > 0 && i === this.ctx;
      this.composeSMask(s ? null : i, e, this.ctx, t), !s && (this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore());
    }
    composeSMask(t, e, i, s) {
      const n = s[0], r = s[1], a = s[2] - n, o = s[3] - r;
      if (a === 0 || o === 0) return;
      const l = this.smaskPreparedEntry;
      if (l) {
        let h = n, c = r, d = a, p = o;
        const m = this.smaskPreparedOOBAlpha, b = m !== null;
        if (b) {
          h = Math.max(n, e.offsetX), c = Math.max(r, e.offsetY);
          const y = Math.min(n + a, e.offsetX + e.canvas.width), w = Math.min(r + o, e.offsetY + e.canvas.height);
          d = y - h, p = w - c;
        }
        if (d > 0 && p > 0) {
          const y = h - this.smaskPreparedOffsetX, w = c - this.smaskPreparedOffsetY;
          i.save(), i.globalAlpha = 1, i.setTransform(1, 0, 0, 1, 0, 0);
          const v = new Path2D();
          v.rect(h, c, d, p), i.clip(v), i.globalCompositeOperation = "destination-in", i.drawImage(l.canvas, y, w, d, p, h, c, d, p), i.restore();
        }
        b && m < 255 && this._applySMaskOOBAlpha(i, n, r, a, o, h, c, h + d, c + p, m);
      } else this.genericComposeSMask(e, i, a, o, n, r);
      t && (t.save(), t.globalAlpha = 1, t.globalCompositeOperation = e.blendMode || "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(i.canvas, n, r, a, o, n, r, a, o), t.restore());
    }
    _applySMaskOOBAlpha(t, e, i, s, n, r, a, o, l, h) {
      const c = r < o && a < l;
      if (c && r === e && a === i && o === e + s && l === i + n) return;
      const d = new Path2D();
      d.rect(e, i, s, n), c && d.rect(r, a, o - r, l - a), t.save(), t.globalAlpha = h / 255, t.setTransform(1, 0, 0, 1, 0, 0), t.clip(d, "evenodd"), t.globalCompositeOperation = "destination-in", t.fillStyle = "#000000", t.fillRect(e, i, s, n), t.restore();
    }
    genericComposeSMask(t, e, i, s, n, r) {
      const { context: a, offsetX: o, offsetY: l } = t;
      e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0);
      const h = new Path2D();
      h.rect(n, r, i, s), e.clip(h), e.globalCompositeOperation = "destination-in", e.drawImage(a.canvas, n - o, r - l, i, s, n, r, i, s), e.restore();
    }
    save(t) {
      this.inSMaskMode && ee(this.ctx, this.suspendedCtx), this.ctx.save();
      const e = this.current;
      this.stateStack.push(e), this.current = e.clone(), this.dependencyTracker?.save(t);
    }
    restore(t) {
      if (this.dependencyTracker?.restore(t), this.stateStack.length === 0) {
        this.inSMaskMode && this.endSMaskMode();
        return;
      }
      this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && (ee(this.suspendedCtx, this.ctx), this.ctx.setTransform(this.suspendedCtx.getTransform())), this.checkSMaskState(t), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
    }
    transform(t, e, i, s, n, r, a) {
      this.dependencyTracker?.recordIncrementalData("transform", t), this.ctx.transform(e, i, s, n, r, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
    }
    constructPath(t, e, i, s) {
      let [n] = i;
      if (!s) {
        n ||= i[0] = new Path2D(), e !== Gt.stroke && e !== Gt.closeStroke && (this.current.tilingPatternDims = null), this[e](t, n);
        return;
      }
      if (this.dependencyTracker !== null) {
        const a = e === Gt.stroke ? this.current.lineWidth / 2 : 0;
        this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, s[0] - a, s[2] + a, s[1] - a, s[3] + a).recordDependencies(t, [
          "transform"
        ]);
      }
      n instanceof Path2D || (n = i[0] = Ws(n)), D.axialAlignedBoundingBox(s, it(this.ctx), this.current.minMax);
      const r = this.current.tilingPatternDims;
      if (r && e !== Gt.stroke && e !== Gt.closeStroke && this.current.fillColor instanceof ke) {
        const a = D.intersect(this.current.clipBox, this.current.minMax);
        a ? this.current.fillColor.updatePatternDims(a, r) : this.current.tilingPatternDims = null;
      }
      this[e](t, n), this._pathStartIdx = t;
    }
    closePath(t) {
      this.ctx.closePath();
    }
    stroke(t, e, i = true) {
      const s = i && this.#c(this.current.strokeAlpha), n = this.ctx, r = this.current.strokeColor;
      if (n.globalAlpha = this.current.strokeAlpha, this.contentVisible) if (typeof r == "object" && r?.getPattern) {
        const a = r.isModifyingCurrentTransform() ? n.getTransform() : null;
        if (n.save(), n.strokeStyle = r.getPattern(n, this, Nt(n), vt.STROKE, t), a) {
          const o = new Path2D();
          o.addPath(e, n.getTransform().invertSelf().multiplySelf(a)), e = o;
        }
        this.rescaleAndStroke(e, false), n.restore();
      } else this.rescaleAndStroke(e, true);
      this.dependencyTracker?.recordDependencies(t, It.stroke), i && this.consumePath(t, e, this.current.getClippedPathBoundingBox(vt.STROKE, it(this.ctx))), n.globalAlpha = this.current.fillAlpha, this.#f(s);
    }
    closeStroke(t, e) {
      this.stroke(t, e);
    }
    fill(t, e, i = true) {
      const s = i && this.#c(this.current.fillAlpha), n = this.ctx, r = this.current.fillColor, a = this.current.patternFill;
      let o = false;
      const l = this.current.getClippedPathBoundingBox();
      if (this.dependencyTracker?.recordDependencies(t, It.fill), a) {
        const h = this.current.tilingPatternDims, c = h && r.canSkipPatternCanvas(h);
        if (c) {
          r.drawPattern(this, e, this.pendingEOFill, c, t), this.pendingEOFill = false, i && this.consumePath(t, e, l), this.current.tilingPatternDims = null, this.#f(s);
          return;
        }
        const d = r.isModifyingCurrentTransform() ? n.getTransform() : null;
        if (this.dependencyTracker?.save(t), n.save(), n.fillStyle = r.getPattern(n, this, Nt(n), vt.FILL, t), d) {
          const p = new Path2D();
          p.addPath(e, n.getTransform().invertSelf().multiplySelf(d)), e = p;
        }
        o = true;
      }
      this.contentVisible && l !== null && (this.pendingEOFill ? (n.fill(e, "evenodd"), this.pendingEOFill = false) : n.fill(e)), o && (n.restore(), this.dependencyTracker?.restore(t)), i && this.consumePath(t, e, l), this.#f(s);
    }
    eoFill(t, e) {
      this.pendingEOFill = true, this.fill(t, e);
    }
    fillStroke(t, e) {
      const i = this.#c(Math.min(this.current.fillAlpha, this.current.strokeAlpha));
      this.fill(t, e, false), this.stroke(t, e, false), this.consumePath(t, e), this.#f(i);
    }
    eoFillStroke(t, e) {
      this.pendingEOFill = true, this.fillStroke(t, e);
    }
    closeFillStroke(t, e) {
      this.fillStroke(t, e);
    }
    closeEOFillStroke(t, e) {
      this.pendingEOFill = true, this.fillStroke(t, e);
    }
    endPath(t, e) {
      this.consumePath(t, e);
    }
    rawFillPath(t, e) {
      const i = this.#c(this.current.fillAlpha);
      this.ctx.fill(e), this.dependencyTracker?.recordDependencies(t, It.rawFillPath).recordOperation(t), this.#f(i);
    }
    clip(t) {
      this.dependencyTracker?.recordFutureForcedDependency("clipMode", t), this.pendingClip = Lr;
    }
    eoClip(t) {
      this.dependencyTracker?.recordFutureForcedDependency("clipMode", t), this.pendingClip = Fs;
    }
    beginText(t) {
      this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, this.dependencyTracker?.recordOpenMarker(t).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t);
    }
    endText(t) {
      const e = this.pendingTextPaths, i = this.ctx;
      if (this.dependencyTracker) {
        const { dependencyTracker: s } = this;
        e !== void 0 && s.recordFutureForcedDependency("textClip", s.getOpenMarker()).recordFutureForcedDependency("textClip", t), s.recordCloseMarker(t);
      }
      if (e !== void 0) {
        const s = new Path2D(), n = i.getTransform().invertSelf();
        for (const { transform: r, x: a, y: o, fontSize: l, path: h } of e) h && s.addPath(h, new DOMMatrix(r).preMultiplySelf(n).translate(a, o).scale(l, -l));
        i.clip(s);
      }
      delete this.pendingTextPaths;
    }
    setCharSpacing(t, e) {
      this.dependencyTracker?.recordSimpleData("charSpacing", t), this.current.charSpacing = e;
    }
    setWordSpacing(t, e) {
      this.dependencyTracker?.recordSimpleData("wordSpacing", t), this.current.wordSpacing = e;
    }
    setHScale(t, e) {
      this.dependencyTracker?.recordSimpleData("hScale", t), this.current.textHScale = e / 100;
    }
    setLeading(t, e) {
      this.dependencyTracker?.recordSimpleData("leading", t), this.current.leading = -e;
    }
    setFont(t, e, i) {
      this.dependencyTracker?.recordSimpleData("font", t).recordSimpleDataFromNamed("fontObj", e, t);
      const s = this.commonObjs.get(e), n = this.current;
      if (!s) throw new Error(`Can't find font for ${e}`);
      if (n.fontMatrix = s.fontMatrix || Pi, (n.fontMatrix[0] === 0 || n.fontMatrix[3] === 0) && z("Invalid font matrix for font " + e), i < 0 ? (i = -i, n.fontDirection = -1) : n.fontDirection = 1, this.current.font = s, this.current.fontSize = i, s.isType3Font) return;
      const r = s.loadedName || "sans-serif", a = s.systemFontInfo?.css || `"${r}", ${s.fallbackName}`;
      let o = "normal";
      s.black ? o = "900" : s.bold && (o = "bold");
      const l = s.italic ? "italic" : "normal", h = nt(i, Mr, Pr);
      this.current.fontSizeScale = i / h, this.ctx.font = `${l} ${o} ${h}px ${a}`;
    }
    setTextRenderingMode(t, e) {
      this.dependencyTracker?.recordSimpleData("textRenderingMode", t), this.current.textRenderingMode = e;
    }
    setTextRise(t, e) {
      this.dependencyTracker?.recordSimpleData("textRise", t), this.current.textRise = e;
    }
    moveText(t, e, i) {
      this.dependencyTracker?.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t), this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += i;
    }
    setLeadingMoveText(t, e, i) {
      this.setLeading(t, -i), this.moveText(t, e, i);
    }
    setTextMatrix(t, e) {
      this.dependencyTracker?.resetIncrementalData("sameLineText").recordSimpleData("textMatrix", t);
      const { current: i } = this;
      i.textMatrix = e, i.textMatrixScale = Math.hypot(e[0], e[1]), i.x = i.lineX = 0, i.y = i.lineY = 0;
    }
    nextLine(t) {
      this.moveText(t, 0, this.current.leading), this.dependencyTracker?.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t);
    }
    #y(t, e, i) {
      const s = new Path2D();
      return s.addPath(t, new DOMMatrix(i).invertSelf().multiplySelf(e)), s;
    }
    paintChar(t, e, i, s, n, r) {
      const a = this.ctx, o = this.current, l = o.font, h = o.textRenderingMode, c = o.fontSize / o.fontSizeScale, d = h & mt.FILL_STROKE_MASK, p = !!(h & mt.ADD_TO_PATH_FLAG), m = o.patternFill && !l.missingFile, b = o.patternStroke && !l.missingFile;
      let y;
      if ((l.disableFontFace || p || m || b) && !l.missingFile && (y = l.getPathGenerator(this.commonObjs, e)), y && (l.disableFontFace || m || b)) {
        a.save(), a.translate(i, s), a.scale(c, -c), this.dependencyTracker?.recordCharacterBBox(t, a, l);
        let w;
        if (d === mt.FILL || d === mt.FILL_STROKE) if (n) {
          w = a.getTransform(), a.setTransform(...n);
          const v = this.#y(y, w, n);
          a.fill(v);
        } else a.fill(y);
        if (d === mt.STROKE || d === mt.FILL_STROKE) if (r) {
          w ||= a.getTransform(), a.setTransform(...r);
          const { a: v, b: E, c: _, d: S } = w, T = D.inverseTransform(r), M = D.transform([
            v,
            E,
            _,
            S,
            0,
            0
          ], T);
          D.singularValueDecompose2dScale(M, Mt), a.lineWidth *= Math.max(Mt[0], Mt[1]) / c, a.stroke(this.#y(y, w, r));
        } else a.lineWidth /= c, a.stroke(y);
        a.restore();
      } else (d === mt.FILL || d === mt.FILL_STROKE) && (a.fillText(e, i, s), this.dependencyTracker?.recordCharacterBBox(t, a, l, c, i, s, () => a.measureText(e))), (d === mt.STROKE || d === mt.FILL_STROKE) && (this.dependencyTracker && this.dependencyTracker?.recordCharacterBBox(t, a, l, c, i, s, () => a.measureText(e)).recordDependencies(t, It.stroke), a.strokeText(e, i, s));
      p && ((this.pendingTextPaths ||= []).push({
        transform: it(a),
        x: i,
        y: s,
        fontSize: c,
        path: y
      }), this.dependencyTracker?.recordCharacterBBox(t, a, l, c, i, s));
    }
    get isFontSubpixelAAEnabled() {
      const t = this.canvasFactory.create(10, 10), e = t.context;
      e.scale(1.5, 1), e.fillText("I", 0, 10);
      const i = e.getImageData(0, 0, 10, 10).data;
      this.canvasFactory.destroy(t);
      let s = false;
      for (let n = 3; n < i.length; n += 4) if (i[n] > 0 && i[n] < 255) {
        s = true;
        break;
      }
      return $(this, "isFontSubpixelAAEnabled", s);
    }
    showText(t, e) {
      this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, It.showText).resetBBox(t), this.current.textRenderingMode & mt.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency("textClip", t).inheritPendingDependenciesAsFutureForcedDependencies());
      const i = this.current, s = i.font;
      if (s.isType3Font) {
        const H = this.#c(i.fillAlpha);
        this.showType3Text(t, e), this.dependencyTracker?.recordShowTextOperation(t), this.#f(H);
        return;
      }
      const n = i.fontSize;
      if (n === 0) {
        this.dependencyTracker?.recordOperation(t);
        return;
      }
      const r = this.#c(i.fillAlpha), a = this.ctx, o = i.fontSizeScale, l = i.charSpacing, h = i.wordSpacing, c = i.fontDirection, d = i.textHScale * c, p = e.length, m = s.vertical, b = m ? 1 : -1, y = s.defaultVMetrics, w = n * i.fontMatrix[0], v = i.textRenderingMode === mt.FILL && !s.disableFontFace && !i.patternFill;
      a.save(), i.textMatrix && a.transform(...i.textMatrix), a.translate(i.x, i.y + i.textRise), c > 0 ? a.scale(d, -1) : a.scale(d, 1);
      let E, _;
      const S = i.textRenderingMode & mt.FILL_STROKE_MASK, T = S === mt.FILL || S === mt.FILL_STROKE, M = S === mt.STROKE || S === mt.FILL_STROKE;
      let I = i.lineWidth;
      const F = i.textMatrixScale;
      if (F === 0 || I === 0 ? M && (I = this.getSinglePixelWidth()) : I /= F, o !== 1 && (a.scale(o, o), I /= o), a.lineWidth = I, T && i.patternFill) {
        a.save();
        const H = i.fillColor.getPattern(a, this, Nt(a), vt.FILL, t);
        E = it(a), a.restore(), a.fillStyle = H;
      }
      if (M && i.patternStroke) {
        a.save();
        const H = i.strokeColor.getPattern(a, this, Nt(a), vt.STROKE, t);
        _ = it(a), a.restore(), a.strokeStyle = H;
      }
      if (s.isInvalidPDFjsFont) {
        const H = [];
        let X = 0;
        for (const rt of e) H.push(rt.unicode), X += rt.width;
        const Y = H.join("");
        if (a.fillText(Y, 0, 0), this.dependencyTracker !== null) {
          const rt = a.measureText(Y);
          this.dependencyTracker.recordBBox(t, this.ctx, -rt.actualBoundingBoxLeft, rt.actualBoundingBoxRight, -rt.actualBoundingBoxAscent, rt.actualBoundingBoxDescent).recordShowTextOperation(t);
        }
        i.x += X * w * d, a.restore(), this.compose(), this.#f(r);
        return;
      }
      let R = 0, B;
      for (B = 0; B < p; ++B) {
        const H = e[B];
        if (typeof H == "number") {
          R += b * H * n / 1e3;
          continue;
        }
        let X = false;
        const Y = (H.isSpace ? h : 0) + l, rt = H.fontChar, U = H.accent;
        let N, bt, yt = H.width;
        if (m) {
          const W = H.vmetric || y, tt = -(H.vmetric ? W[1] : yt * 0.5) * w, Bt = W[2] * w;
          yt = W ? -W[0] : yt, N = tt / o, bt = (R + Bt) / o;
        } else N = R / o, bt = 0;
        let Lt;
        if (s.remeasure && yt > 0) {
          Lt = a.measureText(rt);
          const W = Lt.width * 1e3 / n * o;
          if (yt < W && this.isFontSubpixelAAEnabled) {
            const tt = yt / W;
            X = true, a.save(), a.scale(tt, 1), N /= tt;
          } else yt !== W && (N += (yt - W) / 2e3 * n / o);
        }
        if (this.contentVisible && (H.isInFont || s.missingFile)) {
          if (v && !U) a.fillText(rt, N, bt), this.dependencyTracker?.recordCharacterBBox(t, a, Lt ? {
            bbox: null
          } : s, n / o, N, bt, () => Lt ?? a.measureText(rt));
          else if (this.paintChar(t, rt, N, bt, E, _), U) {
            const W = N + n * U.offset.x / o, tt = bt - n * U.offset.y / o;
            this.paintChar(t, U.fontChar, W, tt, E, _);
          }
        }
        const st = m ? yt * w - Y * c : yt * w + Y * c;
        R += st, X && a.restore();
      }
      m ? i.y -= R : i.x += R * d, a.restore(), this.compose(), this.dependencyTracker?.recordShowTextOperation(t), this.#f(r);
    }
    showType3Text(t, e) {
      const i = this.ctx, s = this.current, n = s.font, r = s.fontSize, a = s.fontDirection, o = n.vertical ? 1 : -1, l = s.charSpacing, h = s.wordSpacing, c = s.textHScale * a, d = s.fontMatrix || Pi, p = e.length, m = s.textRenderingMode === mt.INVISIBLE;
      let b, y, w, v;
      if (m || r === 0) return;
      this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, i.save(), s.textMatrix && i.transform(...s.textMatrix), i.translate(s.x, s.y + s.textRise), i.scale(c, a);
      const E = this.dependencyTracker;
      for (this.dependencyTracker = E ? new Fe(E, t) : null, b = 0; b < p; ++b) {
        if (y = e[b], typeof y == "number") {
          v = o * y * r / 1e3, this.ctx.translate(v, 0), s.x += v * c;
          continue;
        }
        const _ = (y.isSpace ? h : 0) + l, S = n.charProcOperatorList[y.operatorListId];
        S ? this.contentVisible && (this.save(), S.fnArray[0] === Gt.setCharWidth && (s.fillAlpha = s.strokeAlpha = 1, i.globalAlpha = 1), i.scale(r, r), i.transform(...d), this.executeOperatorList(S), this.restore()) : z(`Type3 character "${y.operatorListId}" is not available.`);
        const T = [
          y.width,
          0
        ];
        D.applyTransform(T, d), w = T[0] * r + _, i.translate(w, 0), s.x += w * c;
      }
      i.restore(), E && (this.dependencyTracker = E);
    }
    setCharWidth(t, e, i) {
    }
    setCharWidthAndBounds(t, e, i, s, n, r, a) {
      const o = new Path2D();
      o.rect(s, n, r - s, a - n), this.ctx.clip(o), this.dependencyTracker?.recordBBox(t, this.ctx, s, r, n, a).recordClipBox(t, this.ctx, s, r, n, a), this.endPath(t);
    }
    getColorN_Pattern(t, e) {
      let i;
      if (e[0] === "TilingPattern") {
        const s = this.baseTransform || it(this.ctx), n = {
          createCanvasGraphics: (r, a) => new be(r, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
            optionalContentConfig: this.optionalContentConfig,
            markedContentStack: this.markedContentStack
          }, void 0, void 0, this.dependencyTracker ? new Fe(this.dependencyTracker, a, true) : null)
        };
        i = new ke(e, this.ctx, n, s);
      } else i = this._getPattern(t, e[1], e[2]);
      return i;
    }
    setStrokeColorN(t, ...e) {
      this.dependencyTracker?.recordSimpleData("strokeColor", t), this.current.strokeColor = this.getColorN_Pattern(t, e), this.current.patternStroke = true;
    }
    setFillColorN(t, ...e) {
      this.dependencyTracker?.recordSimpleData("fillColor", t);
      const i = this.current.fillColor = this.getColorN_Pattern(t, e);
      this.current.patternFill = true, this.current.tilingPatternDims = i instanceof ke ? [
        0,
        0,
        0,
        0
      ] : null;
    }
    setStrokeRGBColor(t, e) {
      this.dependencyTracker?.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = e, this.current.patternStroke = false;
    }
    setStrokeTransparent(t) {
      this.dependencyTracker?.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = false;
    }
    setFillRGBColor(t, e) {
      this.dependencyTracker?.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = e, this.current.patternFill = false, this.current.tilingPatternDims = null;
    }
    setFillTransparent(t) {
      this.dependencyTracker?.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = false, this.current.tilingPatternDims = null;
    }
    _getPattern(t, e, i = null) {
      let s;
      return this.cachedPatterns.has(e) ? s = this.cachedPatterns.get(e) : (s = kr(this.getObject(t, e)), this.cachedPatterns.set(e, s)), i && (s.matrix = i), s;
    }
    shadingFill(t, e) {
      if (!this.contentVisible) return;
      const i = this.#c(this.current.fillAlpha), s = this.ctx;
      this.save(t);
      const n = this._getPattern(t, e);
      s.fillStyle = n.getPattern(s, this, Nt(s), vt.SHADING, t);
      const r = Nt(s);
      if (r) {
        const { width: a, height: o } = s.canvas, l = se.slice();
        D.axialAlignedBoundingBox([
          0,
          0,
          a,
          o
        ], r, l);
        const [h, c, d, p] = l;
        this.ctx.fillRect(h, c, d - h, p - c);
      } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      this.dependencyTracker?.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, It.transform).recordDependencies(t, It.fill).recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t), this.#f(i);
    }
    beginInlineImage() {
      K("Should not call beginInlineImage");
    }
    beginImageData() {
      K("Should not call beginImageData");
    }
    paintFormXObjectBegin(t, e, i) {
      if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = it(this.ctx), i)) {
        D.axialAlignedBoundingBox(i, this.baseTransform, this.current.minMax);
        const [s, n, r, a] = i, o = new Path2D();
        o.rect(s, n, r - s, a - n), this.ctx.clip(o), this.dependencyTracker?.recordClipBox(t, this.ctx, s, r, n, a), this.endPath(t);
      }
    }
    paintFormXObjectEnd(t) {
      this.contentVisible && (this.restore(t), this.baseTransform = this.baseTransformStack.pop());
    }
    beginGroup(t, e) {
      if (!this.contentVisible) return;
      this.save(t);
      const { inSMaskMode: i } = this;
      i && (this.endSMaskMode(), this.current.activeSMask = null);
      const s = this.ctx;
      if ((!e.needsIsolation || !e.isolated && !e.hasSoftMask) && !e.knockout && !e.isGray && this.#t === 0 && s.globalAlpha === 1 && s.globalCompositeOperation === "source-over" && !i) {
        if (e.bbox) {
          let v = new Path2D();
          const [E, _, S, T] = e.bbox;
          if (v.rect(E, _, S - E, T - _), e.matrix) {
            const M = new Path2D();
            M.addPath(v, new DOMMatrix(e.matrix)), v = M;
          }
          s.clip(v);
        }
        this.groupStack.push(null), this.#l.push(null), this.groupLevel++;
        return;
      }
      !e.isolated && !e.knockout && this.#t === 0 && ai("TODO: Fully support non-isolated non-knockout groups.");
      const n = it(s);
      e.matrix && s.transform(...e.matrix);
      const r = [
        0,
        0,
        s.canvas.width,
        s.canvas.height
      ];
      let a;
      e.bbox ? (a = se.slice(), D.axialAlignedBoundingBox(e.bbox, it(s), a), a = D.intersect(a, r) || [
        0,
        0,
        0,
        0
      ]) : a = r;
      const o = Math.floor(a[0]), l = Math.floor(a[1]), h = Math.max(Math.ceil(a[2]) - o, 1), c = Math.max(Math.ceil(a[3]) - l, 1);
      this.current.startNewPathAndClipBox([
        0,
        0,
        h,
        c
      ]);
      const d = this.canvasFactory.create(h, c);
      e.smask && this.smaskGroupCanvases.push(d);
      const p = d.context, m = e.knockout && !e.isolated ? s : null, b = !e.isolated && !e.knockout && !e.smask && e.needsIsolation && this.#t > 0, y = e.knockout ? this.canvasFactory.create(h, c) : null, w = this.#t;
      if (e.knockout ? this.#t++ : this.#t = 0, p.translate(-o, -l), p.transform(...n), !e.isolated && !e.smask && i && e.needsIsolation && (p.save(), p.setTransform(1, 0, 0, 1, 0, 0), p.drawImage(s.canvas, -o, -l), p.restore()), e.bbox) {
        let v = new Path2D();
        const [E, _, S, T] = e.bbox;
        if (v.rect(E, _, S - E, T - _), e.matrix) {
          const M = new Path2D();
          M.addPath(v, new DOMMatrix(e.matrix)), v = M;
        }
        p.clip(v);
      }
      e.smask && this.smaskStack.push({
        canvas: d.canvas,
        context: p,
        offsetX: o,
        offsetY: l,
        subtype: e.smask.subtype,
        backdrop: e.smask.backdrop,
        transferMap: e.smask.transferMap || null
      }), (!e.smask || this.dependencyTracker) && (s.setTransform(1, 0, 0, 1, 0, 0), s.translate(o, l), s.save()), ee(s, p), this.ctx = p, this.dependencyTracker?.inheritSimpleDataAsFutureForcedDependencies([
        "fillAlpha",
        "strokeAlpha",
        "globalCompositeOperation"
      ]).pushBaseTransform(s), this.setGState(t, [
        [
          "BM",
          "source-over"
        ],
        [
          "ca",
          1
        ],
        [
          "CA",
          1
        ],
        [
          "TR",
          null
        ]
      ]), this.groupStack.push(s), this.#l.push({
        backdropCtx: m,
        savedKnockoutLevel: w,
        offsetX: o,
        offsetY: l,
        hasInnerBackdrop: b,
        knockoutMaskEntry: y,
        knockoutTempEntry: null,
        knockoutBackdropEntry: null
      }), this.groupLevel++;
    }
    endGroup(t, e) {
      if (!this.contentVisible) return;
      this.groupLevel--;
      const i = this.ctx, s = this.groupStack.pop(), n = this.#l.pop();
      if (n && (this.#t = n.savedKnockoutLevel), s === null) {
        this.restore(t);
        return;
      }
      if (e.isGray && this.#A(i), this.ctx = s, this.ctx.imageSmoothingEnabled = false, this.dependencyTracker?.popBaseTransform(), e.smask) this.tempSMask = this.smaskStack.pop(), this.restore(t), this.dependencyTracker && (this.ctx.restore(), this.inSMaskMode && this.ctx.setTransform(this.suspendedCtx.getTransform())), this.#b(n);
      else {
        this.ctx.restore();
        const r = it(this.ctx);
        this.restore(t), this.ctx.save(), this.ctx.setTransform(...r);
        const a = se.slice();
        D.axialAlignedBoundingBox([
          0,
          0,
          i.canvas.width,
          i.canvas.height
        ], r, a);
        const o = this.#l.at(-1);
        if (this.#t > 0) if (n.hasInnerBackdrop) {
          const { width: l, height: h } = i.canvas, c = this.canvasFactory.create(l, h), d = c.context;
          d.drawImage(s.canvas, n.offsetX, n.offsetY, l, h, 0, 0, l, h), d.globalCompositeOperation = "source-over", d.drawImage(i.canvas, 0, 0);
          const p = this.#p(i.canvas);
          d.globalCompositeOperation = "destination-in", d.drawImage(p.canvas, 0, 0);
          const m = this.ctx.globalCompositeOperation, b = this.ctx.globalAlpha, y = this.ctx.filter;
          this.ctx.save(), this.ctx.setTransform(...r), this.ctx.globalAlpha = 1, Z.isCanvasFilterSupported && (this.ctx.filter = "none"), this.ctx.globalCompositeOperation = "destination-out", this.ctx.drawImage(p.canvas, 0, 0), this.ctx.globalCompositeOperation = m, this.ctx.globalAlpha = b, Z.isCanvasFilterSupported && (this.ctx.filter = y ?? "none"), this.ctx.drawImage(c.canvas, 0, 0), this.ctx.restore(), this.canvasFactory.destroy(p), this.canvasFactory.destroy(c);
        } else {
          const l = o?.backdropCtx ?? null;
          this.#g(this.ctx, i.canvas, {
            backdropCanvas: l?.canvas ?? null,
            destTransform: r,
            backdropOffset: l ? [
              o.offsetX + n.offsetX,
              o.offsetY + n.offsetY
            ] : [
              0,
              0
            ],
            sourceAlpha: this.ctx.globalAlpha,
            sourceFilter: this.ctx.filter
          });
        }
        else this.ctx.drawImage(i.canvas, 0, 0);
        this.ctx.restore(), this.canvasFactory.destroy({
          canvas: i.canvas,
          context: i
        }), this.#b(n), this.compose(a);
      }
    }
    #A(t) {
      const { canvas: e } = t, { width: i, height: s } = e;
      if (Z.isCanvasFilterSupported) {
        t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.filter = "grayscale(1)", t.globalAlpha = 1, t.globalCompositeOperation = "copy", t.drawImage(e, 0, 0), t.restore();
        return;
      }
      const n = t.getImageData(0, 0, i, s), { data: r } = n;
      for (let a = 0, o = r.length; a < o; a += 4) {
        const l = r[a] * 0.2126 + r[a + 1] * 0.7152 + r[a + 2] * 0.0722 + 0.5 | 0;
        r[a] = r[a + 1] = r[a + 2] = l;
      }
      t.putImageData(n, 0, 0);
    }
    #b(t) {
      t && (t.knockoutMaskEntry && (this.canvasFactory.destroy(t.knockoutMaskEntry), t.knockoutMaskEntry = null), t.knockoutTempEntry && (this.canvasFactory.destroy(t.knockoutTempEntry), t.knockoutTempEntry = null), t.knockoutBackdropEntry && (this.canvasFactory.destroy(t.knockoutBackdropEntry), t.knockoutBackdropEntry = null));
    }
    beginAnnotation(t, e, i, s, n, r, a) {
      if (this.#u(), Xe(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), i) {
        const o = i[2] - i[0], l = i[3] - i[1];
        if (r && this.annotationCanvasMap) {
          s = s.slice(), s[4] -= i[0], s[5] -= i[1], i = i.slice(), i[0] = i[1] = 0, i[2] = o, i[3] = l, D.singularValueDecompose2dScale(it(this.ctx), Mt);
          const { viewportScale: h } = this, c = Math.ceil(o * this.outputScaleX * h), d = Math.ceil(l * this.outputScaleY * h);
          this.annotationCanvas = this.canvasFactory.create(c, d);
          const { canvas: p, context: m } = this.annotationCanvas;
          if (a) {
            const b = this.annotationCanvasMap.getOrInsertComputed(e, Re);
            p.setAttribute("data-canvas-name", a);
            const y = b.findIndex((w) => w.getAttribute("data-canvas-name") === a);
            y === -1 ? b.push(p) : b[y] = p;
          } else this.annotationCanvasMap.set(e, p);
          this.annotationCanvas.savedCtx = this.ctx, this.ctx = m, this.ctx.save(), this.ctx.setTransform(Mt[0], 0, 0, -Mt[1], 0, l * Mt[1]), Xe(this.ctx);
        } else {
          Xe(this.ctx), this.endPath(t);
          const h = new Path2D();
          h.rect(i[0], i[1], o, l), this.ctx.clip(h);
        }
      }
      this.current = new Ms(this.ctx.canvas.width, this.ctx.canvas.height), this.baseTransformStack.push(this.baseTransform), this.transform(t, ...s), this.transform(t, ...n), this.baseTransform = it(this.ctx);
    }
    endAnnotation(t) {
      this.annotationCanvas && (this.ctx.restore(), this.#d(), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas), this.baseTransform = this.baseTransformStack.pop();
    }
    paintImageMaskXObject(t, e) {
      if (!this.contentVisible) return;
      const i = e.count;
      e = this.getObject(t, e.data, e), e.count = i;
      const s = this.#c(this.current.fillAlpha), n = this.ctx, r = this._createMaskCanvas(t, e), a = r.canvas;
      n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(a, r.offsetX, r.offsetY), this.dependencyTracker?.resetBBox(t).recordBBox(t, this.ctx, r.offsetX, r.offsetX + a.width, r.offsetY, r.offsetY + a.height).recordOperation(t), n.restore(), r.canvasEntry && this.canvasFactory.destroy(r.canvasEntry), this.compose(), this.#f(s);
    }
    paintImageMaskXObjectRepeat(t, e, i, s = 0, n = 0, r, a) {
      if (!this.contentVisible) return;
      e = this.getObject(t, e.data, e);
      const o = this.#c(this.current.fillAlpha), l = this.ctx;
      l.save();
      const h = it(l);
      l.transform(i, s, n, r, 0, 0);
      const c = this._createMaskCanvas(t, e);
      l.setTransform(1, 0, 0, 1, c.offsetX - h[4], c.offsetY - h[5]), this.dependencyTracker?.resetBBox(t);
      for (let d = 0, p = a.length; d < p; d += 2) {
        const m = D.transform(h, [
          i,
          s,
          n,
          r,
          a[d],
          a[d + 1]
        ]);
        l.drawImage(c.canvas, m[4], m[5]), this.dependencyTracker?.recordBBox(t, this.ctx, m[4], m[4] + c.canvas.width, m[5], m[5] + c.canvas.height);
      }
      l.restore(), c.canvasEntry && this.canvasFactory.destroy(c.canvasEntry), this.compose(), this.dependencyTracker?.recordOperation(t), this.#f(o);
    }
    paintImageMaskXObjectGroup(t, e) {
      if (!this.contentVisible) return;
      const i = this.#c(this.current.fillAlpha), s = this.ctx, n = this.current.fillColor, r = this.current.patternFill;
      this.dependencyTracker?.resetBBox(t).recordDependencies(t, It.transformAndFill);
      for (const a of e) {
        const { data: o, width: l, height: h, transform: c } = a, d = this.canvasFactory.create(l, h), p = d.context;
        p.save();
        const m = this.getObject(t, o, a);
        Is(p, m), p.globalCompositeOperation = "source-in", p.fillStyle = r ? n.getPattern(p, this, Nt(s), vt.FILL, t) : n, p.fillRect(0, 0, l, h), p.restore(), s.save(), s.transform(...c), s.scale(1, -1), We(s, d.canvas, 0, 0, l, h, 0, -1, 1, 1), this.canvasFactory.destroy(d), this.dependencyTracker?.recordBBox(t, s, 0, l, 0, h), s.restore();
      }
      this.compose(), this.dependencyTracker?.recordOperation(t), this.#f(i);
    }
    paintImageXObject(t, e) {
      if (!this.contentVisible) return;
      const i = this.getObject(t, e);
      if (!i) {
        z("Dependent image isn't ready yet");
        return;
      }
      this.paintInlineImageXObject(t, i);
    }
    paintImageXObjectRepeat(t, e, i, s, n) {
      if (!this.contentVisible) return;
      const r = this.getObject(t, e);
      if (!r) {
        z("Dependent image isn't ready yet");
        return;
      }
      const a = r.width, o = r.height, l = [];
      for (let h = 0, c = n.length; h < c; h += 2) l.push({
        transform: [
          i,
          0,
          0,
          s,
          n[h],
          n[h + 1]
        ],
        x: 0,
        y: 0,
        w: a,
        h: o
      });
      this.paintInlineImageXObjectGroup(t, r, l);
    }
    applyTransferMapsToCanvas(t) {
      return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
    }
    applyTransferMapsToBitmap(t) {
      if (this.current.transferMaps === "none") return {
        img: t.bitmap,
        canvasEntry: null
      };
      const { bitmap: e, width: i, height: s } = t, n = this.canvasFactory.create(i, s), r = n.context;
      return r.filter = this.current.transferMaps, r.drawImage(e, 0, 0), r.filter = "none", {
        img: n.canvas,
        canvasEntry: n
      };
    }
    paintInlineImageXObject(t, e) {
      if (!this.contentVisible) return;
      const i = e.width, s = e.height, n = this.#c(this.current.fillAlpha), r = this.ctx;
      this.save(t);
      const { filter: a } = r;
      a !== "none" && a !== "" && (r.filter = "none"), r.scale(1 / i, -1 / s);
      let o, l = null;
      if (e.bitmap) {
        const c = this.applyTransferMapsToBitmap(e);
        o = c.img, l = c.canvasEntry;
      } else {
        const c = this.canvasFactory.create(i, s);
        Ps(c.context, e), o = this.applyTransferMapsToCanvas(c.context), l = c;
      }
      const h = this._scaleImage(o, Nt(r));
      r.imageSmoothingEnabled = Ds(it(r), e.interpolate), this.dependencyTracker && (this.dependencyTracker.resetBBox(t).recordBBox(t, r, 0, i, -s, 0).recordDependencies(t, It.imageXObject).recordOperation(t), this.imagesTracker?.record(r, i, s, this.dependencyTracker.clipBox)), We(r, h.img, 0, 0, h.paintWidth, h.paintHeight, 0, -s, i, s), h.tmpCanvas && this.canvasFactory.destroy(h.tmpCanvas), l && this.canvasFactory.destroy(l), this.compose(), this.restore(t), this.#f(n);
    }
    paintInlineImageXObjectGroup(t, e, i) {
      if (!this.contentVisible) return;
      const s = this.#c(this.current.fillAlpha), n = this.ctx;
      let r, a = null;
      if (e.bitmap) r = e.bitmap;
      else {
        const o = e.width, l = e.height, h = this.canvasFactory.create(o, l);
        Ps(h.context, e), r = this.applyTransferMapsToCanvas(h.context), a = h;
      }
      this.dependencyTracker?.resetBBox(t);
      for (const o of i) n.save(), n.transform(...o.transform), n.scale(1, -1), We(n, r, o.x, o.y, o.w, o.h, 0, -1, 1, 1), this.dependencyTracker?.recordBBox(t, n, 0, 1, -1, 0), n.restore();
      a && this.canvasFactory.destroy(a), this.dependencyTracker?.recordOperation(t), this.compose(), this.#f(s);
    }
    paintSolidColorImageMask(t) {
      if (!this.contentVisible) return;
      const e = this.#c(this.current.fillAlpha);
      this.dependencyTracker?.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, It.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose(), this.#f(e);
    }
    markPoint(t, e) {
    }
    markPointProps(t, e, i) {
    }
    beginMarkedContent(t, e) {
      this.dependencyTracker?.beginMarkedContent(t), this.markedContentStack.push({
        visible: true
      });
    }
    beginMarkedContentProps(t, e, i) {
      this.dependencyTracker?.beginMarkedContent(t), e === "OC" ? this.markedContentStack.push({
        visible: this.optionalContentConfig.isVisible(i)
      }) : this.markedContentStack.push({
        visible: true
      }), this.contentVisible = this.isContentVisible();
    }
    endMarkedContent(t) {
      this.dependencyTracker?.endMarkedContent(t), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
    }
    beginCompat(t) {
    }
    endCompat(t) {
    }
    consumePath(t, e, i) {
      const s = this.current.isEmptyClip();
      this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(i);
      const n = this.ctx;
      this.pendingClip ? (s || (this.pendingClip === Fs ? n.clip(e, "evenodd") : n.clip(e)), this.pendingClip = null, this.dependencyTracker?.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t)) : this.dependencyTracker?.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
    }
    getSinglePixelWidth() {
      if (!this._cachedGetSinglePixelWidth) {
        const t = it(this.ctx);
        if (t[1] === 0 && t[2] === 0) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
        else {
          const e = Math.abs(t[0] * t[3] - t[2] * t[1]), i = Math.hypot(t[0], t[2]), s = Math.hypot(t[1], t[3]);
          this._cachedGetSinglePixelWidth = Math.max(i, s) / e;
        }
      }
      return this._cachedGetSinglePixelWidth;
    }
    getScaleForStroking() {
      if (this._cachedScaleForStroking[0] === -1) {
        const { lineWidth: t } = this.current, { a: e, b: i, c: s, d: n } = this.ctx.getTransform();
        let r, a;
        if (i === 0 && s === 0) {
          const o = Math.abs(e), l = Math.abs(n);
          if (o === l) if (t === 0) r = a = 1 / o;
          else {
            const h = o * t;
            r = a = h < 1 ? 1 / h : 1;
          }
          else if (t === 0) r = 1 / o, a = 1 / l;
          else {
            const h = o * t, c = l * t;
            r = h < 1 ? 1 / h : 1, a = c < 1 ? 1 / c : 1;
          }
        } else {
          const o = Math.abs(e * n - i * s), l = Math.hypot(e, i), h = Math.hypot(s, n);
          if (t === 0) r = h / o, a = l / o;
          else {
            const c = t * o;
            r = h > c ? h / c : 1, a = l > c ? l / c : 1;
          }
        }
        this._cachedScaleForStroking[0] = r, this._cachedScaleForStroking[1] = a;
      }
      return this._cachedScaleForStroking;
    }
    rescaleAndStroke(t, e) {
      const { ctx: i, current: { lineWidth: s } } = this, [n, r] = this.getScaleForStroking();
      if (n === r) {
        i.lineWidth = (s || 1) * n, i.stroke(t);
        return;
      }
      const a = i.getLineDash();
      e && i.save(), i.scale(n, r), Ti.a = 1 / n, Ti.d = 1 / r;
      const o = new Path2D();
      if (o.addPath(t, Ti), a.length > 0) {
        const l = Math.max(n, r);
        i.setLineDash(a.map((h) => h / l)), i.lineDashOffset /= l;
      }
      i.lineWidth = s || 1, i.stroke(o), e && i.restore();
    }
    isContentVisible() {
      for (let t = this.markedContentStack.length - 1; t >= 0; t--) if (!this.markedContentStack[t].visible) return false;
      return true;
    }
  }
  for (const u in Gt) be.prototype[u] !== void 0 && (be.prototype[Gt[u]] = be.prototype[u]);
  class di {
    #t = null;
    #e = null;
    _fullReader = null;
    _rangeReaders = /* @__PURE__ */ new Set();
    _source = null;
    constructor(t, e, i) {
      this._source = t, this.#t = e, this.#e = i;
    }
    get _progressiveDataLength() {
      return this._fullReader?._loaded ?? 0;
    }
    getFullReader() {
      return ht(!this._fullReader, "BasePDFStream.getFullReader can only be called once."), this._fullReader = new this.#t(this);
    }
    getRangeReader(t, e) {
      if (e <= this._progressiveDataLength) return null;
      const i = new this.#e(this, t, e);
      return this._rangeReaders.add(i), i;
    }
    cancelAllRequests(t) {
      this._fullReader?.cancel(t);
      for (const e of new Set(this._rangeReaders)) e.cancel(t);
    }
  }
  class ui {
    onProgress = null;
    _contentLength = 0;
    _filename = null;
    _headersCapability = Promise.withResolvers();
    _isRangeSupported = false;
    _isStreamingSupported = false;
    _loaded = 0;
    _stream = null;
    constructor(t) {
      this._stream = t;
    }
    _callOnProgress() {
      this.onProgress?.({
        loaded: this._loaded,
        total: this._contentLength
      });
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    get filename() {
      return this._filename;
    }
    get contentLength() {
      return this._contentLength;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      K("Abstract method `read` called");
    }
    cancel(t) {
      K("Abstract method `cancel` called");
    }
  }
  class fi {
    _stream = null;
    constructor(t, e, i) {
      this._stream = t;
    }
    async read() {
      K("Abstract method `read` called");
    }
    cancel(t) {
      K("Abstract method `cancel` called");
    }
  }
  function Rr(u) {
    let t = true, e = i("filename\\*", "i").exec(u);
    if (e) {
      e = e[1];
      let h = a(e);
      return h = unescape(h), h = o(h), h = l(h), n(h);
    }
    if (e = r(u), e) {
      const h = l(e);
      return n(h);
    }
    if (e = i("filename", "i").exec(u), e) {
      e = e[1];
      let h = a(e);
      return h = l(h), n(h);
    }
    function i(h, c) {
      return new RegExp("(?:^|;)\\s*" + h + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', c);
    }
    function s(h, c) {
      if (h) {
        if (!/^[\x00-\xFF]+$/.test(c)) return c;
        try {
          const d = new TextDecoder(h, {
            fatal: true
          }), p = oi(c);
          c = d.decode(p), t = false;
        } catch {
        }
      }
      return c;
    }
    function n(h) {
      return t && /[\x80-\xff]/.test(h) && (h = s("utf-8", h), t && (h = s("iso-8859-1", h))), h;
    }
    function r(h) {
      const c = [];
      let d;
      const p = i("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
      for (; (d = p.exec(h)) !== null; ) {
        let [, b, y, w] = d;
        if (b = parseInt(b, 10), b in c) {
          if (b === 0) break;
          continue;
        }
        c[b] = [
          y,
          w
        ];
      }
      const m = [];
      for (let b = 0; b < c.length && b in c; ++b) {
        let [y, w] = c[b];
        w = a(w), y && (w = unescape(w), b === 0 && (w = o(w))), m.push(w);
      }
      return m.join("");
    }
    function a(h) {
      if (h.startsWith('"')) {
        const c = h.slice(1).split('\\"');
        for (let d = 0; d < c.length; ++d) {
          const p = c[d].indexOf('"');
          p !== -1 && (c[d] = c[d].slice(0, p), c.length = d + 1), c[d] = c[d].replaceAll(/\\(.)/g, "$1");
        }
        h = c.join('"');
      }
      return h;
    }
    function o(h) {
      const c = h.indexOf("'");
      if (c === -1) return h;
      const d = h.slice(0, c), m = h.slice(c + 1).replace(/^[^']*'/, "");
      return s(d, m);
    }
    function l(h) {
      return !h.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(h) ? h : h.replaceAll(/=\?([\w-]*)\?([QB])\?((?:[^?]|\?(?!=))*)\?=/gi, function(c, d, p, m) {
        if (p === "q" || p === "Q") return m = m.replaceAll("_", " "), m = m.replaceAll(/=([0-9a-f]{2})/gi, function(b, y) {
          return String.fromCharCode(parseInt(y, 16));
        }), s(d, m);
        try {
          m = atob(m);
        } catch {
        }
        return s(d, m);
      });
    }
    return "";
  }
  function Zs(u, t) {
    const e = new Headers();
    if (!u || !t || typeof t != "object") return e;
    for (const i in t) {
      const s = t[i];
      s !== void 0 && e.append(i, s);
    }
    return e;
  }
  function pi(u) {
    return URL.parse(u)?.origin ?? null;
  }
  function tn({ responseHeaders: u, isHttp: t, rangeChunkSize: e, disableRange: i }) {
    const s = {
      contentLength: 0,
      isRangeSupported: false
    }, n = parseInt(u.get("Content-Length"), 10);
    return !Number.isInteger(n) || (s.contentLength = n, n <= 2 * e) || i || !t || u.get("Accept-Ranges") !== "bytes" || (u.get("Content-Encoding") || "identity") === "identity" && (s.isRangeSupported = true), s;
  }
  function en(u) {
    const t = u.get("Content-Disposition");
    if (t) {
      let e = Rr(t);
      if (e.includes("%")) try {
        e = decodeURIComponent(e);
      } catch {
      }
      if (Yi(e)) return e;
    }
    return null;
  }
  function gi(u, t) {
    return new ti(`Unexpected server response (${u}) while retrieving PDF "${t.href}".`, u, u === 404 || u === 0 && t.protocol === "file:");
  }
  function sn(u, t) {
    if (u !== t) throw new Error(`Expected range response-origin "${u}" to match "${t}".`);
  }
  function nn(u, t, e, i) {
    return fetch(u, {
      method: "GET",
      headers: t,
      signal: i.signal,
      mode: "cors",
      credentials: e ? "include" : "same-origin",
      redirect: "follow"
    });
  }
  function rn(u, t) {
    if (u !== 200 && u !== 206) throw gi(u, t);
  }
  function mi(u) {
    if (u instanceof Uint8Array) return u.buffer;
    if (u instanceof ArrayBuffer) return u;
    throw new Error(`getArrayBuffer - unexpected data: ${u}`);
  }
  class Br extends di {
    _responseOrigin = null;
    constructor(t) {
      super(t, Or, Nr);
      const { httpHeaders: e, url: i } = t;
      ht(/https?:/.test(i.protocol), "PDFFetchStream only supports http(s):// URLs."), this.headers = Zs(true, e);
    }
  }
  class Or extends ui {
    _abortController = new AbortController();
    _reader = null;
    constructor(t) {
      super(t);
      const { disableRange: e, disableStream: i, rangeChunkSize: s, url: n, withCredentials: r } = t._source;
      this._isStreamingSupported = !i;
      const a = new Headers(t.headers);
      nn(n, a, r, this._abortController).then((o) => {
        t._responseOrigin = pi(o.url), rn(o.status, n), this._reader = o.body.getReader();
        const l = o.headers, { contentLength: h, isRangeSupported: c } = tn({
          responseHeaders: l,
          isHttp: true,
          rangeChunkSize: s,
          disableRange: e
        });
        this._contentLength = h, this._isRangeSupported = c, this._filename = en(l), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Jt("Streaming is disabled.")), this._headersCapability.resolve();
      }).catch(this._headersCapability.reject);
    }
    async read() {
      await this._headersCapability.promise;
      const { value: t, done: e } = await this._reader.read();
      return e ? {
        value: t,
        done: e
      } : (this._loaded += t.byteLength, this._callOnProgress(), {
        value: mi(t),
        done: false
      });
    }
    cancel(t) {
      this._reader?.cancel(t), this._abortController.abort();
    }
  }
  class Nr extends fi {
    _abortController = new AbortController();
    _readCapability = Promise.withResolvers();
    _reader = null;
    constructor(t, e, i) {
      super(t, e, i);
      const { url: s, withCredentials: n } = t._source, r = new Headers(t.headers);
      r.append("Range", `bytes=${e}-${i - 1}`), nn(s, r, n, this._abortController).then((a) => {
        const o = pi(a.url);
        sn(o, t._responseOrigin), rn(a.status, s), this._reader = a.body.getReader(), this._readCapability.resolve();
      }).catch(this._readCapability.reject);
    }
    async read() {
      await this._readCapability.promise;
      const { value: t, done: e } = await this._reader.read();
      return e ? {
        value: t,
        done: e
      } : {
        value: mi(t),
        done: false
      };
    }
    cancel(t) {
      this._reader?.cancel(t), this._abortController.abort();
    }
  }
  function Ls(u) {
    return u instanceof Uint8Array && u.byteLength === u.buffer.byteLength ? u.buffer : new Uint8Array(u).buffer;
  }
  function bi() {
    for (const u of this._requests) u.resolve({
      value: void 0,
      done: true
    });
    this._requests.length = 0;
  }
  class Ur extends di {
    _progressiveDone = false;
    _queuedChunks = [];
    constructor(t) {
      super(t, Hr, Gr);
      const { pdfDataRangeTransport: e } = t, { initialData: i, progressiveDone: s } = e;
      if (i?.length > 0) {
        const r = Ls(i);
        this._queuedChunks.push(r);
      }
      this._progressiveDone = s;
      const n = (r) => {
        switch (r.type) {
          case "range":
          case "progressiveRead":
            this.#t(r.begin, r.chunk);
            break;
          case "progressiveDone":
            this._fullReader?.progressiveDone(), this._progressiveDone = true;
            break;
        }
      };
      e.transportReady(n);
    }
    #t(t, e) {
      const i = Ls(e);
      if (t === void 0) this._fullReader ? this._fullReader._enqueue(i) : this._queuedChunks.push(i);
      else {
        const s = this._rangeReaders.keys().find((n) => n._begin === t);
        ht(s, "#onReceiveData - no `PDFDataTransportStreamRangeReader` instance found."), s._enqueue(i);
      }
    }
    getFullReader() {
      const t = super.getFullReader();
      return this._queuedChunks = null, t;
    }
    getRangeReader(t, e) {
      const i = super.getRangeReader(t, e);
      return i && (i.onDone = () => this._rangeReaders.delete(i), this._source.pdfDataRangeTransport.requestDataRange(t, e)), i;
    }
    cancelAllRequests(t) {
      super.cancelAllRequests(t), this._source.pdfDataRangeTransport.abort();
    }
  }
  class Hr extends ui {
    #t = bi.bind(this);
    _done = false;
    _queuedChunks = null;
    _requests = [];
    constructor(t) {
      super(t);
      const { pdfDataRangeTransport: e, disableRange: i, disableStream: s } = t._source, { length: n, contentDispositionFilename: r } = e;
      this._queuedChunks = t._queuedChunks || [];
      for (const o of this._queuedChunks) this._loaded += o.byteLength;
      this._done = t._progressiveDone, this._contentLength = n, this._isStreamingSupported = !s, this._isRangeSupported = !i, Yi(r) && (this._filename = r), this._headersCapability.resolve();
      const a = this._loaded;
      Promise.resolve().then(() => {
        a > 0 && this._loaded === a && this._callOnProgress();
      });
    }
    _enqueue(t) {
      this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
        value: t,
        done: false
      }) : this._queuedChunks.push(t), this._loaded += t.byteLength, this._callOnProgress());
    }
    async read() {
      if (this._queuedChunks.length > 0) return {
        value: this._queuedChunks.shift(),
        done: false
      };
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true, this.#t();
    }
    progressiveDone() {
      this._done ||= true, this._queuedChunks.length === 0 && this.#t();
    }
  }
  class Gr extends fi {
    #t = bi.bind(this);
    onDone = null;
    _begin = -1;
    _done = false;
    _queuedChunk = null;
    _requests = [];
    constructor(t, e, i) {
      super(t, e, i), this._begin = e;
    }
    _enqueue(t) {
      this._done || (this._requests.length === 0 ? this._queuedChunk = t : (this._requests.shift().resolve({
        value: t,
        done: false
      }), this.#t()), this._done = true, this.onDone?.());
    }
    async read() {
      if (this._queuedChunk) {
        const e = this._queuedChunk;
        return this._queuedChunk = null, {
          value: e,
          done: false
        };
      }
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true, this.#t(), this.onDone?.();
    }
  }
  const ki = 200, Rs = 206;
  function $r(u) {
    return typeof u != "string" ? u : oi(u).buffer;
  }
  class jr extends di {
    #t = /* @__PURE__ */ new WeakMap();
    _responseOrigin = null;
    constructor(t) {
      super(t, zr, Vr);
      const { httpHeaders: e, url: i } = t;
      this.url = i, this.isHttp = /https?:/.test(i.protocol), this.headers = Zs(this.isHttp, e);
    }
    _request(t) {
      const e = new XMLHttpRequest(), i = {
        validateStatus: null,
        onHeadersReceived: t.onHeadersReceived,
        onDone: t.onDone,
        onError: t.onError,
        onProgress: t.onProgress
      };
      this.#t.set(e, i), e.open("GET", this.url), e.withCredentials = this._source.withCredentials;
      for (const [s, n] of this.headers) e.setRequestHeader(s, n);
      return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.validateStatus = (s) => s === Rs || s === ki) : i.validateStatus = (s) => s === ki, e.responseType = "arraybuffer", ht(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => t.onError(e.status), e.onreadystatechange = this.#i.bind(this, e), e.onprogress = this.#e.bind(this, e), e.send(null), e;
    }
    #e(t, e) {
      this.#t.get(t)?.onProgress?.(e);
    }
    #i(t, e) {
      const i = this.#t.get(t);
      if (!i || (t.readyState >= 2 && i.onHeadersReceived && (i.onHeadersReceived(), delete i.onHeadersReceived), t.readyState !== 4) || !this.#t.has(t)) return;
      if (this.#t.delete(t), t.status === 0 && this.isHttp) {
        i.onError(t.status);
        return;
      }
      const s = t.status || ki;
      if (!i.validateStatus(s)) {
        i.onError(t.status);
        return;
      }
      const n = $r(t.response);
      if (s === Rs) {
        const r = t.getResponseHeader("Content-Range");
        /bytes \d+-\d+\/\d+/.test(r) ? i.onDone(n) : (z('Missing or invalid "Content-Range" header.'), i.onError(0));
      } else n ? i.onDone(n) : i.onError(t.status);
    }
    _abortRequest(t) {
      this.#t.has(t) && (this.#t.delete(t), t.abort());
    }
    getRangeReader(t, e) {
      const i = super.getRangeReader(t, e);
      return i && (i.onClosed = () => this._rangeReaders.delete(i)), i;
    }
  }
  class zr extends ui {
    #t = bi.bind(this);
    _cachedChunks = [];
    _done = false;
    _requests = [];
    _storedError = null;
    constructor(t) {
      super(t), this._fullRequestXhr = t._request({
        onHeadersReceived: this.#e.bind(this),
        onDone: this.#i.bind(this),
        onError: this.#s.bind(this),
        onProgress: this.#n.bind(this)
      });
    }
    #e() {
      const t = this._stream, { disableRange: e, rangeChunkSize: i } = t._source, s = this._fullRequestXhr;
      t._responseOrigin = pi(s.responseURL);
      const n = s.getAllResponseHeaders(), r = new Headers(n ? n.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((l) => {
        const [h, ...c] = l.split(": ");
        return [
          h,
          c.join(": ")
        ];
      }) : []), { contentLength: a, isRangeSupported: o } = tn({
        responseHeaders: r,
        isHttp: t.isHttp,
        rangeChunkSize: i,
        disableRange: e
      });
      this._contentLength = a, this._isRangeSupported = o, this._filename = en(r), this._isRangeSupported && t._abortRequest(s), this._headersCapability.resolve();
    }
    #i(t) {
      this._requests.length > 0 ? this._requests.shift().resolve({
        value: t,
        done: false
      }) : this._cachedChunks.push(t), this._done = true, this._cachedChunks.length === 0 && this.#t();
    }
    #s(t) {
      this._storedError = gi(t, this._stream.url), this._headersCapability.reject(this._storedError);
      for (const e of this._requests) e.reject(this._storedError);
      this._requests.length = 0, this._cachedChunks.length = 0;
    }
    #n(t) {
      this.onProgress?.({
        loaded: t.loaded,
        total: t.lengthComputable ? t.total : this._contentLength
      });
    }
    async read() {
      if (await this._headersCapability.promise, this._storedError) throw this._storedError;
      if (this._cachedChunks.length > 0) return {
        value: this._cachedChunks.shift(),
        done: false
      };
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true, this._headersCapability.reject(t), this.#t(), this._stream._abortRequest(this._fullRequestXhr), this._fullRequestXhr = null;
    }
  }
  class Vr extends fi {
    #t = bi.bind(this);
    onClosed = null;
    _done = false;
    _queuedChunk = null;
    _requests = [];
    _storedError = null;
    constructor(t, e, i) {
      super(t, e, i), this._requestXhr = t._request({
        begin: e,
        end: i,
        onHeadersReceived: this.#e.bind(this),
        onDone: this.#i.bind(this),
        onError: this.#s.bind(this),
        onProgress: null
      });
    }
    #e() {
      const t = pi(this._requestXhr?.responseURL);
      try {
        sn(t, this._stream._responseOrigin);
      } catch (e) {
        this._storedError = e, this.#s(0);
      }
    }
    #i(t) {
      this._requests.length > 0 ? this._requests.shift().resolve({
        value: t,
        done: false
      }) : this._queuedChunk = t, this._done = true, this.#t(), this.onClosed?.();
    }
    #s(t) {
      this._storedError ??= gi(t, this._stream.url);
      for (const e of this._requests) e.reject(this._storedError);
      this._requests.length = 0, this._queuedChunk = null;
    }
    async read() {
      if (this._storedError) throw this._storedError;
      if (this._queuedChunk !== null) {
        const e = this._queuedChunk;
        return this._queuedChunk = null, {
          value: e,
          done: false
        };
      }
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true, this.#t(), this._stream._abortRequest(this._requestXhr), this.onClosed?.();
    }
  }
  function an(u, t = null) {
    const e = process.getBuiltinModule("fs"), { Readable: i } = process.getBuiltinModule("stream"), s = e.createReadStream(u, t);
    return i.toWeb(s);
  }
  class Wr extends di {
    constructor(t) {
      super(t, Xr, Yr);
      const { url: e } = t;
      ht(e.protocol === "file:", "PDFNodeStream only supports file:// URLs.");
    }
  }
  class Xr extends ui {
    _reader = null;
    constructor(t) {
      super(t);
      const { disableRange: e, disableStream: i, rangeChunkSize: s, url: n } = t._source;
      this._isStreamingSupported = !i, process.getBuiltinModule("fs/promises").lstat(n).then((a) => {
        const o = an(n);
        this._reader = o.getReader();
        const { size: l } = a;
        this._contentLength = l, this._isRangeSupported = !e && l > 2 * s, !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Jt("Streaming is disabled.")), this._headersCapability.resolve();
      }).catch((a) => {
        a.code === "ENOENT" && (a = gi(0, n)), this._headersCapability.reject(a);
      });
    }
    async read() {
      await this._headersCapability.promise;
      const { value: t, done: e } = await this._reader.read();
      return e ? {
        value: t,
        done: e
      } : (this._loaded += t.byteLength, this._callOnProgress(), {
        value: mi(t),
        done: false
      });
    }
    cancel(t) {
      this._reader?.cancel(t);
    }
  }
  class Yr extends fi {
    _readCapability = Promise.withResolvers();
    _reader = null;
    constructor(t, e, i) {
      super(t, e, i);
      const { url: s } = t._source;
      try {
        const n = an(s, {
          start: e,
          end: i - 1
        });
        this._reader = n.getReader(), this._readCapability.resolve();
      } catch (n) {
        this._readCapability.reject(n);
      }
    }
    async read() {
      await this._readCapability.promise;
      const { value: t, done: e } = await this._reader.read();
      return e ? {
        value: t,
        done: e
      } : {
        value: mi(t),
        done: false
      };
    }
    cancel(t) {
      this._reader?.cancel(t);
    }
  }
  function qr(u) {
    return _e(u) ? Br : Tt ? Wr : jr;
  }
  Me = class {
    static #t = null;
    static #e = "";
    static get workerPort() {
      return this.#t;
    }
    static set workerPort(t) {
      if (!(typeof Worker < "u" && t instanceof Worker) && t !== null) throw new Error("Invalid `workerPort` type.");
      this.#t = t;
    }
    static get workerSrc() {
      return this.#e;
    }
    static set workerSrc(t) {
      if (typeof t != "string") throw new Error("Invalid `workerSrc` type.");
      this.#e = t;
    }
  };
  class Kr {
    #t;
    #e;
    constructor({ parsedData: t, rawData: e }) {
      this.#t = t, this.#e = e;
    }
    getRaw() {
      return this.#e;
    }
    get(t) {
      return this.#t.get(t) ?? null;
    }
    [Symbol.iterator]() {
      return this.#t.entries();
    }
  }
  const ie = /* @__PURE__ */ Symbol("INTERNAL");
  class Jr {
    #t = false;
    #e = false;
    #i = false;
    #s = true;
    constructor(t, { name: e, intent: i, usage: s, rbGroups: n }) {
      this.#t = !!(t & Ct.DISPLAY), this.#e = !!(t & Ct.PRINT), this.name = e, this.intent = i, this.usage = s, this.rbGroups = n;
    }
    get visible() {
      if (this.#i) return this.#s;
      if (!this.#s) return false;
      const { print: t, view: e } = this.usage;
      return this.#t ? e?.viewState !== "OFF" : this.#e ? t?.printState !== "OFF" : true;
    }
    _setVisible(t, e, i = false) {
      t !== ie && K("Internal method `_setVisible` called."), this.#i = i, this.#s = e;
    }
    get serializable() {
      return {
        userSet: this.#i,
        visible: this.#s
      };
    }
  }
  class Zi {
    #t = null;
    #e = /* @__PURE__ */ new Map();
    #i = null;
    #s = null;
    #n;
    creator = null;
    name = null;
    constructor(t, e = Ct.DISPLAY, i = null) {
      if (this.#n = t, this.renderingIntent = e, t !== null) {
        this.name = t.name, this.creator = t.creator, this.#s = t.order;
        for (const s of t.groups) this.#e.set(s.id, new Jr(e, s));
        if (i) {
          i.size !== this.#e.size && K("Incorrect serialized groupState.");
          for (const [s, n] of i) this.#e.get(s)._setVisible(ie, n.visible, n.userSet);
        } else {
          if (t.baseState === "OFF") for (const s of this.#e.values()) s._setVisible(ie, false);
          for (const s of t.on) this.#e.get(s)._setVisible(ie, true);
          for (const s of t.off) this.#e.get(s)._setVisible(ie, false);
        }
        this.#i = this.getHash();
      }
    }
    #a(t) {
      const e = t.length;
      if (e < 2) return true;
      const i = t[0];
      for (let s = 1; s < e; s++) {
        const n = t[s];
        let r;
        if (Array.isArray(n)) r = this.#a(n);
        else if (this.#e.has(n)) r = this.#e.get(n).visible;
        else return z(`Optional content group not found: ${n}`), true;
        switch (i) {
          case "And":
            if (!r) return false;
            break;
          case "Or":
            if (r) return true;
            break;
          case "Not":
            return !r;
          default:
            return true;
        }
      }
      return i === "And";
    }
    isVisible(t) {
      if (this.#e.size === 0) return true;
      if (!t) return ai("Optional content group not defined."), true;
      if (t.type === "OCG") return this.#e.has(t.id) ? this.#e.get(t.id).visible : (z(`Optional content group not found: ${t.id}`), true);
      if (t.type === "OCMD") {
        if (t.expression) return this.#a(t.expression);
        if (!t.policy || t.policy === "AnyOn") {
          for (const e of t.ids) {
            if (!this.#e.has(e)) return z(`Optional content group not found: ${e}`), true;
            if (this.#e.get(e).visible) return true;
          }
          return false;
        } else if (t.policy === "AllOn") {
          for (const e of t.ids) {
            if (!this.#e.has(e)) return z(`Optional content group not found: ${e}`), true;
            if (!this.#e.get(e).visible) return false;
          }
          return true;
        } else if (t.policy === "AnyOff") {
          for (const e of t.ids) {
            if (!this.#e.has(e)) return z(`Optional content group not found: ${e}`), true;
            if (!this.#e.get(e).visible) return true;
          }
          return false;
        } else if (t.policy === "AllOff") {
          for (const e of t.ids) {
            if (!this.#e.has(e)) return z(`Optional content group not found: ${e}`), true;
            if (this.#e.get(e).visible) return false;
          }
          return true;
        }
        return z(`Unknown optional content policy ${t.policy}.`), true;
      }
      return z(`Unknown group type ${t.type}.`), true;
    }
    setVisibility(t, e = true, i = true) {
      const s = this.#e.get(t);
      if (!s) {
        z(`Optional content group not found: ${t}`);
        return;
      }
      if (i && e && s.rbGroups.length) for (const n of s.rbGroups) for (const r of n) r !== t && this.#e.get(r)?._setVisible(ie, false, true);
      s._setVisible(ie, !!e, true), this.#t = null;
    }
    setOCGState({ state: t, preserveRB: e }) {
      let i;
      for (const s of t) {
        switch (s) {
          case "ON":
          case "OFF":
          case "Toggle":
            i = s;
            continue;
        }
        const n = this.#e.get(s);
        if (n) switch (i) {
          case "ON":
            this.setVisibility(s, true, e);
            break;
          case "OFF":
            this.setVisibility(s, false, e);
            break;
          case "Toggle":
            this.setVisibility(s, !n.visible, e);
            break;
        }
      }
      this.#t = null;
    }
    get hasInitialVisibility() {
      return this.#i === null || this.getHash() === this.#i;
    }
    getOrder() {
      return this.#e.size ? this.#s ? this.#s.slice() : [
        ...this.#e.keys()
      ] : null;
    }
    getGroup(t) {
      return this.#e.get(t) || null;
    }
    getHash() {
      if (this.#t !== null) return this.#t;
      const t = new Ni();
      for (const [e, i] of this.#e) t.update(`${e}:${i.visible}`);
      return this.#t = t.hexdigest();
    }
    [Symbol.iterator]() {
      return this.#e.entries();
    }
    get serializable() {
      const t = /* @__PURE__ */ new Map();
      for (const [e, i] of this.#e) t.set(e, i.serializable);
      return {
        data: this.#n,
        renderingIntent: this.renderingIntent,
        groupState: t
      };
    }
    static fromSerializable({ data: t, renderingIntent: e, groupState: i }) {
      return new Zi(t, e, i);
    }
  }
  class Qr {
    #t = null;
    #e = null;
    #i = 0;
    #s = null;
    #n = null;
    get pagesNumber() {
      return this.#i;
    }
    set pagesNumber(t) {
      this.#i !== t && (this.#i = t, this.#t = null, this.#e = null);
    }
    #a() {
      if (this.#t) return;
      const t = this.#i, e = this.#t = new Uint32Array(t);
      for (let i = 0; i < t; i++) e[i] = i + 1;
      this.#e = new Int32Array(e);
    }
    #r() {
      const t = /* @__PURE__ */ new Map(), e = this.#t;
      for (let i = 0, s = this.#i; i < s; i++) {
        const n = e[i], r = t.get(n);
        r ? r.push(i + 1) : t.set(n, [
          i + 1
        ]);
      }
      return t;
    }
    movePages(t, e, i) {
      this.#a();
      const s = this.#t, n = this.#r(), r = e.length, a = new Uint32Array(r);
      let o = 0;
      for (let d = 0; d < r; d++) {
        const p = e[d] - 1;
        a[d] = s[p], p < i && o++;
      }
      const l = this.#i, h = l - r, c = nt(i - o, 0, h);
      for (let d = 0, p = 0; d < l; d++) t.has(d + 1) || (s[p++] = s[d]);
      s.copyWithin(c + r, c, h), s.set(a, c), this.#o(n), s.every((d, p) => d === p + 1) && (this.#t = null);
    }
    deletePages(t) {
      this.#a();
      const e = this.#t, i = this.#r();
      this.#n = {
        pageNumberToId: e.slice(),
        pagesNumber: this.#i,
        prevPageNumbers: this.#e.slice()
      };
      const s = this.#i - t.length;
      this.#i = s;
      const n = this.#t = new Uint32Array(s);
      this.#e = new Int32Array(s);
      let r = 0, a = 0;
      for (const o of t) {
        const l = o - 1;
        l !== r && (n.set(e.subarray(r, l), a), a += l - r), r = l + 1;
      }
      r < e.length && n.set(e.subarray(r), a), this.#o(i, new Set(t));
    }
    cancelDelete() {
      this.#n && (this.#t = this.#n.pageNumberToId, this.#i = this.#n.pagesNumber, this.#e = this.#n.prevPageNumbers, this.#n = null);
    }
    cleanSavedData() {
      this.#n = null;
    }
    copyPages(t) {
      this.#a(), this.#s = {
        pageNumbers: t,
        pageIds: t.map((e) => this.#t[e - 1])
      };
    }
    cancelCopy() {
      this.#s = null;
    }
    pastePages(t) {
      this.#a();
      const e = this.#t, i = this.#r(), { pageNumbers: s, pageIds: n } = this.#s, r = this.#i + s.length;
      this.#i = r;
      const a = this.#t = new Uint32Array(r);
      this.#e = new Int32Array(r), a.set(e.subarray(0, t), 0), a.set(n, t), a.set(e.subarray(t), t + s.length), this.#o(i, null, t, s), this.#s = null;
    }
    #o(t, e = null, i = -1, s = null) {
      const n = this.#e, r = this.#t, a = i + (s?.length ?? 0), o = /* @__PURE__ */ new Map();
      for (let l = 0, h = this.#i; l < h; l++) {
        if (l >= i && l < a) {
          n[l] = -s[l - i];
          continue;
        }
        const c = r[l], d = t.get(c);
        let p = o.get(c) || 0;
        if (e && d) for (; p < d.length && e.has(d[p]); ) p++;
        n[l] = d?.[p], o.set(c, p + 1);
      }
    }
    hasBeenAltered() {
      return this.#t !== null;
    }
    getPageMappingForSaving(t = null) {
      t ??= this.#r();
      let e = 0;
      for (const s of t.values()) e = Math.max(e, s.length);
      const i = new Array(e);
      for (let s = 0; s < e; s++) i[s] = {
        document: null,
        pageIndices: [],
        includePages: []
      };
      for (const [s, n] of t) for (let r = 0, a = n.length; r < a; r++) i[r].includePages.push([
        s - 1,
        n[r] - 1
      ]);
      for (const { includePages: s, pageIndices: n } of i) {
        s.sort((r, a) => r[0] - a[0]);
        for (let r = 0, a = s.length; r < a; r++) n.push(s[r][1]), s[r] = s[r][0];
      }
      return i;
    }
    extractPages(t) {
      t = Array.from(t).sort((i, s) => i - s);
      const e = /* @__PURE__ */ new Map();
      for (let i = 0, s = t.length; i < s; i++) {
        const n = this.getPageId(t[i]);
        e.getOrInsertComputed(n, Re).push(i + 1);
      }
      return this.getPageMappingForSaving(e);
    }
    getPrevPageNumber(t) {
      return this.#e?.[t - 1] ?? 0;
    }
    getPageNumber(t) {
      if (!this.#t) return t;
      const e = this.#t;
      for (let i = 0, s = this.#i; i < s; i++) if (e[i] === t) return i + 1;
      return 0;
    }
    getPageId(t) {
      return this.#t?.[t - 1] ?? t;
    }
    getMapping() {
      return this.#t?.subarray(0, this.pagesNumber);
    }
  }
  const fe = /* @__PURE__ */ Symbol("INITIAL_DATA"), Bs = () => ({
    ...Promise.withResolvers(),
    data: fe
  });
  class on {
    #t = /* @__PURE__ */ new Map();
    get(t, e = null) {
      if (e) {
        const s = this.#t.getOrInsertComputed(t, Bs);
        return s.promise.then(() => e(s.data)), null;
      }
      const i = this.#t.get(t);
      if (!i || i.data === fe) throw new Error(`Requesting object that isn't resolved yet ${t}.`);
      return i.data;
    }
    has(t) {
      const e = this.#t.get(t);
      return !!e && e.data !== fe;
    }
    delete(t) {
      const e = this.#t.get(t);
      return !e || e.data === fe ? false : (this.#t.delete(t), true);
    }
    resolve(t, e = null) {
      const i = this.#t.getOrInsertComputed(t, Bs);
      if (i.data !== fe) throw new Error(`Object already resolved ${t}.`);
      i.data = e, i.resolve();
    }
    clear() {
      for (const { data: t } of this.#t.values()) t?.bitmap?.close();
      this.#t.clear();
    }
    *[Symbol.iterator]() {
      for (const [t, { data: e }] of this.#t) e !== fe && (yield [
        t,
        e
      ]);
    }
  }
  const Zr = 1e5, Os = 30;
  _t = class {
    #t = Promise.withResolvers();
    #e = null;
    #i = false;
    #s = !!globalThis.FontInspector?.enabled;
    #n = null;
    #a = null;
    #r = null;
    #o = 0;
    #h = 0;
    #l = null;
    #u = null;
    #d = 0;
    #p = 0;
    #m = /* @__PURE__ */ Object.create(null);
    #g = [];
    #c = null;
    #f = [];
    #y = /* @__PURE__ */ new WeakMap();
    #A = null;
    static #b = /* @__PURE__ */ new Map();
    static #E = /* @__PURE__ */ new Map();
    static #S = /* @__PURE__ */ new WeakMap();
    static #w = null;
    static #C = /* @__PURE__ */ new Set();
    constructor({ textContentSource: t, images: e, container: i, viewport: s }) {
      if (t instanceof ReadableStream) this.#c = t;
      else if (typeof t == "object") this.#c = new ReadableStream({
        start(l) {
          l.enqueue(t), l.close();
        }
      });
      else throw new Error('No "textContentSource" parameter specified.');
      this.#e = this.#u = i, this.#n = e, this.#p = s.scale * jt.pixelRatio, this.#d = s.rotation, this.#r = {
        div: null,
        properties: null,
        ctx: null
      };
      const { pageWidth: n, pageHeight: r, pageX: a, pageY: o } = s.rawDims;
      this.#A = [
        1,
        0,
        0,
        -1,
        -a,
        o + r
      ], this.#h = n, this.#o = r, _t.#F(), i.style.setProperty("--min-font-size", _t.#w), re(i, s), this.#t.promise.finally(() => {
        _t.#C.delete(this), this.#r = null, this.#m = null;
      }).catch(() => {
      });
    }
    static get fontFamilyMap() {
      const { isWindows: t, isFirefox: e } = Z.platform;
      return $(this, "fontFamilyMap", /* @__PURE__ */ new Map([
        [
          "sans-serif",
          `${t && e ? "Calibri, " : ""}sans-serif`
        ],
        [
          "monospace",
          `${t && e ? "Lucida Console, " : ""}monospace`
        ]
      ]));
    }
    render() {
      this.#n && this.#e.append(this.#n.render());
      const t = () => {
        this.#l.read().then(({ value: e, done: i }) => {
          if (i) {
            this.#t.resolve();
            return;
          }
          this.#a ??= e.lang, Object.assign(this.#m, e.styles), this.#x(e.items), t();
        }, this.#t.reject);
      };
      return this.#l = this.#c.getReader(), _t.#C.add(this), t(), this.#t.promise;
    }
    update({ viewport: t, onBefore: e = null }) {
      const i = t.scale * jt.pixelRatio, s = t.rotation;
      if (s !== this.#d && (e?.(), this.#d = s, re(this.#u, {
        rotation: s
      })), i !== this.#p) {
        e?.(), this.#p = i;
        const n = {
          div: null,
          properties: null,
          ctx: _t.#P(this.#a)
        };
        for (const r of this.#f) n.properties = this.#y.get(r), n.div = r, this.#M(n);
      }
    }
    cancel() {
      const t = new Jt("TextLayer task cancelled.");
      this.#l?.cancel(t).catch(() => {
      }), this.#l = null, this.#t.reject(t);
    }
    get textDivs() {
      return this.#f;
    }
    get textContentItemsStr() {
      return this.#g;
    }
    #x(t) {
      if (this.#i) return;
      this.#r.ctx ??= _t.#P(this.#a);
      const e = this.#f, i = this.#g;
      for (const s of t) {
        if (e.length > Zr) {
          z("Ignoring additional textDivs for performance reasons."), this.#i = true;
          return;
        }
        if (s.str === void 0) {
          if (s.type === "beginMarkedContentProps" || s.type === "beginMarkedContent") {
            const n = this.#e;
            this.#e = document.createElement("span"), this.#e.classList.add("markedContent"), s.id && this.#e.setAttribute("id", `${s.id}`), s.tag === "Artifact" && (this.#e.ariaHidden = true), n.append(this.#e);
          } else s.type === "endMarkedContent" && (this.#e = this.#e.parentNode);
          continue;
        }
        i.push(s.str), this.#T(s);
      }
    }
    #T(t) {
      const e = document.createElement("span"), i = {
        angle: 0,
        canvasWidth: 0,
        hasText: t.str !== "",
        hasEOL: t.hasEOL,
        fontSize: 0
      };
      this.#f.push(e);
      const s = D.transform(this.#A, t.transform);
      let n = Math.atan2(s[1], s[0]);
      const r = this.#m[t.fontName];
      r.vertical && (n += Math.PI / 2);
      let a = this.#s && r.fontSubstitution || r.fontFamily;
      a = _t.fontFamilyMap.get(a) || a;
      const o = Math.hypot(s[2], s[3]), l = o * _t.#L(a, r, this.#a);
      let h, c;
      n === 0 ? (h = s[4], c = s[5] - l) : (h = s[4] + l * Math.sin(n), c = s[5] - l * Math.cos(n));
      const d = e.style;
      d.left = `${(100 * h / this.#h).toFixed(2)}%`, d.top = `${(100 * c / this.#o).toFixed(2)}%`, d.setProperty("--font-height", `${o.toFixed(2)}px`), d.fontFamily = a, i.fontSize = o, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, this.#s && (e.dataset.fontName = r.fontSubstitutionLoadedName || t.fontName), n !== 0 && (i.angle = n * (180 / Math.PI));
      let p = false;
      if (t.str.length > 1) p = true;
      else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
        const m = Math.abs(t.transform[0]), b = Math.abs(t.transform[3]);
        m !== b && Math.max(m, b) / Math.min(m, b) > 1.5 && (p = true);
      }
      if (p && (i.canvasWidth = r.vertical ? t.height : t.width), this.#y.set(e, i), this.#r.div = e, this.#r.properties = i, this.#M(this.#r), i.hasText && this.#e.append(e), i.hasEOL) {
        const m = document.createElement("br");
        m.setAttribute("role", "presentation"), this.#e.append(m);
      }
    }
    #M(t) {
      const { div: e, properties: i, ctx: s } = t, { style: n } = e;
      if (i.canvasWidth !== 0 && i.hasText) {
        const { fontFamily: r } = n, { canvasWidth: a, fontSize: o } = i;
        _t.#k(s, o * this.#p, r);
        const { width: l } = s.measureText(e.textContent);
        l > 0 && n.setProperty("--scale-x", a * this.#p / l);
      }
      i.angle !== 0 && n.setProperty("--rotate", `${i.angle}deg`);
    }
    static cleanup() {
      if (!(this.#C.size > 0)) {
        this.#b.clear();
        for (const { canvas: t } of this.#E.values()) t.remove();
        this.#E.clear();
      }
    }
    static #P(t = null) {
      let e = this.#E.get(t ||= "");
      if (!e) {
        const i = document.createElement("canvas");
        i.style.cssText = "position:absolute;top:0;left:0;width:0;height:0;display:none;letter-spacing:normal;word-spacing:normal", i.lang = t, document.body.append(i), e = i.getContext("2d", {
          alpha: false,
          willReadFrequently: true
        }), this.#E.set(t, e), this.#S.set(e, {
          size: 0,
          family: ""
        });
      }
      return e;
    }
    static #k(t, e, i) {
      const s = this.#S.get(t);
      e === s.size && i === s.family || (t.font = `${e}px ${i}`, s.size = e, s.family = i);
    }
    static #F() {
      if (this.#w !== null) return;
      const t = document.createElement("div");
      t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), this.#w = t.getBoundingClientRect().height, t.remove();
    }
    static #L(t, e, i) {
      const s = this.#b.get(t);
      if (s) return s;
      const n = this.#P(i);
      n.canvas.width = n.canvas.height = Os, this.#k(n, Os, t);
      const r = n.measureText(""), a = r.fontBoundingBoxAscent, o = Math.abs(r.fontBoundingBoxDescent);
      n.canvas.width = n.canvas.height = 0;
      let l = 0.8;
      return a ? l = a / (a + o) : (Z.platform.isFirefox && z("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e.ascent ? l = e.ascent : e.descent && (l = 1 + e.descent)), this.#b.set(t, l), l;
    }
  };
  const ta = 100;
  ea = function(u = {}) {
    const t = new ts(), { docId: e } = t, i = u.url ? ar(u.url) : null, s = u.data ? or(u.data) : null, n = u.httpHeaders || null, r = u.withCredentials === true, a = u.password ?? null, o = u.range instanceof ln ? u.range : null, l = Number.isInteger(u.rangeChunkSize) && u.rangeChunkSize > 0 ? u.rangeChunkSize : 2 ** 16;
    let h = u.worker instanceof wt ? u.worker : null;
    const c = u.verbosity, d = typeof u.docBaseUrl == "string" && !li(u.docBaseUrl) ? u.docBaseUrl : null, p = ze(u.cMapUrl), m = u.cMapPacked !== false, b = ze(u.iccUrl), y = ze(u.standardFontDataUrl), w = ze(u.wasmUrl), v = u.stopAtErrors !== true, E = Number.isInteger(u.maxImageSize) && u.maxImageSize > -1 ? u.maxImageSize : -1, _ = typeof u.isOffscreenCanvasSupported == "boolean" ? u.isOffscreenCanvasSupported : !Tt, S = typeof u.isImageDecoderSupported == "boolean" ? u.isImageDecoderSupported : !Tt, T = Number.isInteger(u.canvasMaxAreaInBytes) ? u.canvasMaxAreaInBytes : -1, M = typeof u.disableFontFace == "boolean" ? u.disableFontFace : Tt, I = u.fontExtraProperties === true, F = u.enableXfa === true, R = u.ownerDocument || globalThis.document, B = u.disableRange === true, H = u.disableStream === true, X = u.disableAutoFetch === true, Y = u.pdfBug === true, rt = u.CanvasFactory || (Tt ? gr : dr), U = u.FilterFactory || (Tt ? pr : ur), N = u.BinaryDataFactory || (Tt ? mr : Cs), bt = u.enableHWA === true, Lt = u.enableWebGPU === true ? wr() : Promise.resolve(false), st = u.useWasm !== false, W = u.pagesMapper || new Qr(), tt = typeof u.useSystemFonts == "boolean" ? u.useSystemFonts : !Tt && !M, Bt = typeof u.useWorkerFetch == "boolean" ? u.useWorkerFetch : !!(N === Cs && p && m && y && w && _e(p, document.baseURI) && _e(y, document.baseURI) && _e(w, document.baseURI)), he = null;
    Tn(c);
    const zt = {
      canvasFactory: new rt({
        ownerDocument: R,
        enableHWA: bt
      }),
      filterFactory: new U({
        docId: e,
        ownerDocument: R
      }),
      binaryDataFactory: Bt ? null : new N({
        cMapUrl: p,
        standardFontDataUrl: y,
        wasmUrl: w
      })
    };
    h || (h = wt.create({
      verbosity: c,
      port: Me.workerPort
    }), t._worker = h);
    const ct = {
      docId: e,
      apiVersion: "6.1.200",
      data: s,
      password: a,
      disableAutoFetch: X,
      rangeChunkSize: l,
      docBaseUrl: d,
      enableXfa: F,
      evaluatorOptions: {
        maxImageSize: E,
        disableFontFace: M,
        ignoreErrors: v,
        isOffscreenCanvasSupported: _,
        isImageDecoderSupported: S,
        canvasMaxAreaInBytes: T,
        fontExtraProperties: I,
        useSystemFonts: tt,
        useWasm: st,
        useWorkerFetch: Bt,
        cMapUrl: p,
        cMapPacked: m,
        iccUrl: b,
        standardFontDataUrl: y,
        wasmUrl: w,
        hasGPU: false
      }
    }, Yt = {
      ownerDocument: R,
      pdfBug: Y,
      styleElement: he,
      enableHWA: bt,
      loadingParams: {
        disableAutoFetch: X,
        enableXfa: F
      }
    };
    return Promise.all([
      h.promise,
      Lt
    ]).then(function([, Ae]) {
      if (h.destroyed) throw new Error("Worker was destroyed");
      ct.evaluatorOptions.hasGPU = Ae;
      const He = h.messageHandler.sendWithPromise("GetDocRequest", ct, s ? [
        s.buffer
      ] : null);
      let we;
      if (!s) if (o) we = new Ur({
        pdfDataRangeTransport: o,
        disableRange: B,
        disableStream: H
      });
      else if (i) {
        const ce = qr(i);
        we = new ce({
          url: i,
          httpHeaders: n,
          withCredentials: r,
          rangeChunkSize: l,
          disableRange: B,
          disableStream: H
        });
      } else throw new Error("getDocument - expected either `data`, `range`, or `url` parameter.");
      return He.then((ce) => {
        if (h.destroyed) throw new Error("Worker was destroyed");
        const Vt = new Ce(e, ce, h.port), Zt = new sa(Vt, t, we, Yt, zt, W);
        if (t._transport = Zt, t.destroyed) throw new Error("Loading aborted");
        Vt.send("Ready", null);
      });
    }).catch(t._capability.reject).finally(t._setupCapability.resolve), t;
  };
  class ts {
    static #t = 0;
    _capability = Promise.withResolvers();
    _setupCapability = Promise.withResolvers();
    _transport = null;
    _worker = null;
    docId = `d${ts.#t++}`;
    destroyed = false;
    onPassword = null;
    onProgress = null;
    get promise() {
      return this._capability.promise;
    }
    async destroy() {
      this.destroyed = true, this._capability.promise.catch(() => {
      });
      try {
        this._worker?.port && (this._worker._pendingDestroy = true), await this._setupCapability.promise, await this._transport?.destroy();
      } catch (t) {
        throw this._worker?.port && delete this._worker._pendingDestroy, t;
      }
      this._transport = null, this._worker?.destroy(), this._worker = null;
    }
    async getData() {
      return this._transport.getData();
    }
  }
  ln = class {
    #t = Promise.withResolvers();
    #e = null;
    constructor(t, e, i = false, s = null) {
      this.length = t, this.initialData = e, this.progressiveDone = i, this.contentDispositionFilename = s;
    }
    onDataRange(t, e) {
      this.#e({
        type: "range",
        begin: t,
        chunk: e
      });
    }
    onDataProgressiveRead(t) {
      this.#t.promise.then(() => {
        this.#e({
          type: "progressiveRead",
          chunk: t
        });
      });
    }
    onDataProgressiveDone() {
      this.#t.promise.then(() => {
        this.#e({
          type: "progressiveDone"
        });
      });
    }
    transportReady(t) {
      this.#e = t, this.#t.resolve();
    }
    requestDataRange(t, e) {
      K("Abstract method PDFDataRangeTransport.requestDataRange");
    }
    abort() {
    }
  };
  class ia {
    constructor(t, e) {
      this._pdfInfo = t, this._transport = e;
    }
    get pagesMapper() {
      return this._transport.pagesMapper;
    }
    get annotationStorage() {
      return this._transport.annotationStorage;
    }
    get canvasFactory() {
      return this._transport.canvasFactory;
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get numPages() {
      return this._pdfInfo.numPages;
    }
    get fingerprints() {
      return this._pdfInfo.fingerprints;
    }
    get isPureXfa() {
      return $(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    get allXfaHtml() {
      return this._transport._htmlForXfa;
    }
    getPage(t) {
      return this._transport.getPage(t);
    }
    getPageIndex(t) {
      return this._transport.getPageIndex(t);
    }
    getDestinations() {
      return this._transport.getDestinations();
    }
    getDestination(t) {
      return this._transport.getDestination(t);
    }
    getPageLabels() {
      return this._transport.getPageLabels();
    }
    getPageLayout() {
      return this._transport.getPageLayout();
    }
    getPageMode() {
      return this._transport.getPageMode();
    }
    getViewerPreferences() {
      return this._transport.getViewerPreferences();
    }
    getOpenAction() {
      return this._transport.getOpenAction();
    }
    getAttachments() {
      return this._transport.getAttachments();
    }
    getAttachmentContent(t) {
      return this._transport.getAttachmentContent(t);
    }
    getAnnotationsByType(t, e) {
      return this._transport.getAnnotationsByType(t, e);
    }
    getJSActions() {
      return this._transport.getDocJSActions();
    }
    getOutline() {
      return this._transport.getOutline();
    }
    getOptionalContentConfig({ intent: t = "display" } = {}) {
      const { renderingIntent: e } = this._transport.getRenderingIntent(t);
      return this._transport.getOptionalContentConfig(e);
    }
    getPermissions() {
      return this._transport.getPermissions();
    }
    getMetadata() {
      return this._transport.getMetadata();
    }
    getMarkInfo() {
      return this._transport.getMarkInfo();
    }
    getData() {
      return this._transport.getData();
    }
    saveDocument() {
      return this._transport.saveDocument();
    }
    extractPages(t) {
      return this._transport.extractPages(t);
    }
    getDownloadInfo() {
      return this._transport.downloadInfoCapability.promise;
    }
    getRawData(t) {
      return this._transport.getRawData(t);
    }
    cleanup(t = false) {
      return this._transport.startCleanup(t || this.isPureXfa);
    }
    cachedPageNumber(t) {
      return this._transport.cachedPageNumber(t);
    }
    get loadingParams() {
      return this._transport.loadingParams;
    }
    get loadingTask() {
      return this._transport.loadingTask;
    }
    getFieldObjects() {
      return this._transport.getFieldObjects();
    }
    hasJSActions() {
      return this._transport.hasJSActions();
    }
    getCalculationOrderIds() {
      return this._transport.getCalculationOrderIds();
    }
  }
  class es {
    #t = false;
    #e = null;
    constructor(t, e, i, s, n = false) {
      this._pageIndex = t, this._pageInfo = e, this._transport = i, this._stats = n ? new ps() : null, this._pdfBug = n, this.commonObjs = i.commonObjs, this.objs = new on(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = false, this.recordedBBoxes = null, this.#e = s, this.imageCoordinates = null;
    }
    clone(t) {
      const e = new es(t, this._pageInfo, this._transport, this.#e, this._pdfBug);
      return e.clonedFromIndex = this.clonedFromIndex ?? this._pageIndex, this._transport.updatePage(e), e;
    }
    get pageNumber() {
      return this._pageIndex + 1;
    }
    set pageNumber(t) {
      this._pageIndex = t - 1, this._transport.updatePage(this);
    }
    get rotate() {
      return this._pageInfo.rotate;
    }
    get ref() {
      return this._pageInfo.ref;
    }
    get userUnit() {
      return this._pageInfo.userUnit;
    }
    get view() {
      return this._pageInfo.view;
    }
    getViewport({ scale: t, rotation: e = this.rotate, offsetX: i = 0, offsetY: s = 0, dontFlip: n = false } = {}) {
      return new Be({
        viewBox: this.view,
        userUnit: this.userUnit,
        scale: t,
        rotation: e,
        offsetX: i,
        offsetY: s,
        dontFlip: n
      });
    }
    getAnnotations({ intent: t = "display" } = {}) {
      const { renderingIntent: e } = this._transport.getRenderingIntent(t);
      return this._transport.getAnnotations(this._pageIndex, e);
    }
    getJSActions() {
      return this._transport.getPageJSActions(this._pageIndex);
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get isPureXfa() {
      return $(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    async getXfa() {
      return this._transport._htmlForXfa?.children[this._pageIndex] || null;
    }
    render({ canvasContext: t, canvas: e = t.canvas, viewport: i, intent: s = "display", annotationMode: n = Kt.ENABLE, transform: r = null, background: a = null, optionalContentConfigPromise: o = null, annotationCanvasMap: l = null, pageColors: h = null, printAnnotationStorage: c = null, isEditing: d = false, recordImages: p = false, recordOperations: m = false, operationsFilter: b = null }) {
      this._stats?.time("Overall");
      const y = this._transport.getRenderingIntent(s, n, c, d), { renderingIntent: w, cacheKey: v } = y;
      this.#t = false, o ||= this._transport.getOptionalContentConfig(w);
      const E = this._intentStates.getOrInsertComputed(v, Li);
      E.streamReaderCancelTimeout && (clearTimeout(E.streamReaderCancelTimeout), E.streamReaderCancelTimeout = null);
      const _ = !!(w & Ct.PRINT);
      E.displayReadyCapability || (E.displayReadyCapability = Promise.withResolvers(), E.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      }, this._stats?.time("Page Request"), this._pumpOperatorList(y));
      const S = !!(this._pdfBug && globalThis.StepperManager?.enabled), T = !!e && !this.recordedBBoxes && (m || S), M = !!e && !this.imageCoordinates && p, I = (X) => {
        if (E.renderTasks.delete(B), T) {
          const Y = B.gfx?.dependencyTracker.take();
          Y && (B.stepper?.setOperatorBBoxes(Y, B.gfx.dependencyTracker.takeDebugMetadata()), m && (this.recordedBBoxes = Y));
        }
        M && !X && (this.imageCoordinates = B.gfx?.imagesTracker.take()), _ && (this.#t = true), this.#i(), X ? (B.capability.reject(X), this._abortOperatorList({
          intentState: E,
          reason: X instanceof Error ? X : new Error(X)
        })) : B.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), globalThis.Stats?.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
      };
      let F = null, R = null;
      (T || M) && (R = new qn(e, E.operatorList.length)), T && (F = new Kn(R, S));
      const B = new me({
        callback: I,
        params: {
          canvas: e,
          canvasContext: t,
          dependencyTracker: F ?? R,
          imagesTracker: M ? new ei(e) : null,
          viewport: i,
          transform: r,
          background: a
        },
        objs: this.objs,
        commonObjs: this.commonObjs,
        annotationCanvasMap: l,
        operatorList: E.operatorList,
        pageIndex: this._pageIndex,
        canvasFactory: this._transport.canvasFactory,
        filterFactory: this._transport.filterFactory,
        useRequestAnimationFrame: !_,
        pdfBug: this._pdfBug,
        pageColors: h,
        enableHWA: this._transport.enableHWA,
        operationsFilter: b
      });
      (E.renderTasks ||= /* @__PURE__ */ new Set()).add(B);
      const H = B.task;
      return Promise.all([
        E.displayReadyCapability.promise,
        o
      ]).then(([X, Y]) => {
        if (this.destroyed) {
          I();
          return;
        }
        if (this._stats?.time("Rendering"), !(Y.renderingIntent & w)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
        B.initializeGraphics({
          transparency: X,
          optionalContentConfig: Y
        }), B.operatorListChanged();
      }).catch(I), H;
    }
    getOperatorList({ intent: t = "display", annotationMode: e = Kt.ENABLE, printAnnotationStorage: i = null, isEditing: s = false } = {}) {
      function n() {
        a.operatorList.lastChunk && (a.opListReadCapability.resolve(a.operatorList), a.renderTasks.delete(o));
      }
      const r = this._transport.getRenderingIntent(t, e, i, s, true), a = this._intentStates.getOrInsertComputed(r.cacheKey, Li);
      let o;
      return a.opListReadCapability || (o = /* @__PURE__ */ Object.create(null), o.operatorListChanged = n, a.opListReadCapability = Promise.withResolvers(), (a.renderTasks ||= /* @__PURE__ */ new Set()).add(o), a.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      }, this._stats?.time("Page Request"), this._pumpOperatorList(r)), a.opListReadCapability.promise;
    }
    streamTextContent({ includeMarkedContent: t = false, disableNormalization: e = false } = {}) {
      return this._transport.messageHandler.sendWithStream("GetTextContent", {
        pageId: this.#e.getPageId(this._pageIndex + 1) - 1,
        pageIndex: this._pageIndex,
        includeMarkedContent: t === true,
        disableNormalization: e === true
      }, {
        highWaterMark: 100,
        size(s) {
          return s.items.length;
        }
      });
    }
    async getTextContent(t = {}) {
      if (this._transport._htmlForXfa) return this.getXfa().then((s) => Ie.textContent(s));
      const e = this.streamTextContent(t), i = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      for await (const s of e) i.lang ??= s.lang, Object.assign(i.styles, s.styles), i.items.push(...s.items);
      return i;
    }
    getStructTree() {
      return this._transport.getStructTree(this._pageIndex);
    }
    _destroy() {
      this.destroyed = true;
      const t = [];
      for (const e of this._intentStates.values()) if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: true
      }), !e.opListReadCapability) for (const i of e.renderTasks) t.push(i.completed), i.cancel();
      return this.objs.clear(), this.#t = false, Promise.all(t);
    }
    cleanup(t = false) {
      this.#t = true;
      const e = this.#i();
      return t && e && (this._stats &&= new ps()), e;
    }
    #i() {
      if (!this.#t || this.destroyed) return false;
      for (const { renderTasks: t, operatorList: e } of this._intentStates.values()) if (t.size > 0 || !e.lastChunk) return false;
      return this._intentStates.clear(), this.objs.clear(), this.#t = false, true;
    }
    _startRenderPage(t, e) {
      const i = this._intentStates.get(e);
      i && (this._stats?.timeEnd("Page Request"), i.displayReadyCapability?.resolve(t));
    }
    _renderPageChunk(t, e) {
      for (let i = 0, s = t.length; i < s; i++) e.operatorList.fnArray.push(t.fnArray[i]), e.operatorList.argsArray.push(t.argsArray[i]);
      e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
      for (const i of e.renderTasks) i.operatorListChanged();
      t.lastChunk && this.#i();
    }
    _pumpOperatorList({ renderingIntent: t, cacheKey: e, annotationStorageSerializable: i, modifiedIds: s }) {
      const { map: n, transfer: r } = i, o = this._transport.messageHandler.sendWithStream("GetOperatorList", {
        pageId: this.#e.getPageId(this._pageIndex + 1) - 1,
        pageIndex: this._pageIndex,
        intent: t,
        cacheKey: e,
        annotationStorage: n,
        modifiedIds: s
      }, void 0, r).getReader(), l = this._intentStates.get(e);
      l.streamReader = o;
      const h = () => {
        o.read().then(({ value: c, done: d }) => {
          if (d) {
            l.streamReader = null;
            return;
          }
          this._transport.destroyed || (this._renderPageChunk(c, l), h());
        }, (c) => {
          if (l.streamReader = null, !this._transport.destroyed) {
            if (l.operatorList) {
              l.operatorList.lastChunk = true;
              for (const d of l.renderTasks) d.operatorListChanged();
              this.#i();
            }
            if (l.displayReadyCapability) l.displayReadyCapability.reject(c);
            else if (l.opListReadCapability) l.opListReadCapability.reject(c);
            else throw c;
          }
        });
      };
      h();
    }
    _abortOperatorList({ intentState: t, reason: e, force: i = false }) {
      if (t.streamReader) {
        if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !i) {
          if (t.renderTasks.size > 0) return;
          if (e instanceof Xi) {
            let s = ta;
            e.extraDelay > 0 && e.extraDelay < 1e3 && (s += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
              t.streamReaderCancelTimeout = null, this._abortOperatorList({
                intentState: t,
                reason: e,
                force: true
              });
            }, s);
            return;
          }
        }
        if (t.streamReader.cancel(new Jt(e.message)).catch(() => {
        }), t.streamReader = null, !this._transport.destroyed) {
          for (const [s, n] of this._intentStates) if (n === t) {
            this._intentStates.delete(s);
            break;
          }
          this.cleanup();
        }
      }
    }
    get stats() {
      return this._stats;
    }
  }
  wt = class {
    #t = Promise.withResolvers();
    #e = null;
    #i = null;
    #s = null;
    static #n = 0;
    static #a = false;
    static #r = /* @__PURE__ */ new WeakMap();
    static {
      Tt && (this.#a = true, Me.workerSrc ||= "./pdf.worker.mjs"), this._isSameOrigin = (t, e) => {
        const i = URL.parse(t);
        if (!i?.origin || i.origin === "null") return false;
        const s = new URL(e, i);
        return i.origin === s.origin;
      }, this._createCDNWrapper = (t) => {
        const e = `await import("${t}");`;
        return URL.createObjectURL(new Blob([
          e
        ], {
          type: "text/javascript"
        }));
      };
    }
    constructor({ name: t = null, port: e = null, verbosity: i = kn() } = {}) {
      if (this.name = t, this.destroyed = false, this.verbosity = i, e) {
        if (wt.#r.has(e)) throw new Error("Cannot use more than one PDFWorker per port.");
        wt.#r.set(e, this), this.#h(e);
      } else this.#l();
    }
    get promise() {
      return this.#t.promise;
    }
    #o() {
      this.#t.resolve(), this.#e.send("configure", {
        verbosity: this.verbosity
      });
    }
    get port() {
      return this.#i;
    }
    get messageHandler() {
      return this.#e;
    }
    #h(t) {
      this.#i = t, this.#e = new Ce("main", "worker", t), this.#e.on("ready", () => {
      }), this.#o();
    }
    #l() {
      if (wt.#a || wt.#d) {
        this.#u();
        return;
      }
      let { workerSrc: t } = wt;
      try {
        wt._isSameOrigin(window.location, t) || (t = wt._createCDNWrapper(new URL(t, window.location).href));
        const e = new Worker(t, {
          type: "module"
        }), i = new Ce("main", "worker", e), s = () => {
          n.abort(), i.destroy(), e.terminate(), this.destroyed ? this.#t.reject(new Error("Worker was destroyed")) : this.#u();
        }, n = new AbortController();
        e.addEventListener("error", () => {
          this.#s || s();
        }, {
          signal: n.signal
        }), i.on("test", (a) => {
          if (n.abort(), this.destroyed || !a) {
            s();
            return;
          }
          this.#e = i, this.#i = e, this.#s = e, this.#o();
        }), i.on("ready", (a) => {
          if (n.abort(), this.destroyed) {
            s();
            return;
          }
          try {
            r();
          } catch {
            this.#u();
          }
        });
        const r = () => {
          const a = new Uint8Array();
          i.send("test", a, [
            a.buffer
          ]);
        };
        r();
        return;
      } catch {
        ai("The worker has been disabled.");
      }
      this.#u();
    }
    #u() {
      wt.#a || (z("Setting up fake worker."), wt.#a = true), wt._setupFakeWorkerGlobal.then((t) => {
        if (this.destroyed) {
          this.#t.reject(new Error("Worker was destroyed"));
          return;
        }
        const e = new cr();
        this.#i = e;
        const i = `fake${wt.#n++}`, s = new Ce(i + "_worker", i, e);
        t.setup(s, e), this.#e = new Ce(i, i + "_worker", e), this.#o();
      }).catch((t) => {
        this.#t.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
      });
    }
    destroy() {
      this.destroyed = true, this.#s?.terminate(), this.#s = null, wt.#r.delete(this.#i), this.#i = null, this.#e?.destroy(), this.#e = null;
    }
    static create(t) {
      const e = this.#r.get(t?.port);
      if (e) {
        if (e._pendingDestroy) throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
        return e;
      }
      return new wt(t);
    }
    static get workerSrc() {
      if (Me.workerSrc) return Me.workerSrc;
      throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
    }
    static get #d() {
      try {
        return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
      } catch {
        return null;
      }
    }
    static get _setupFakeWorkerGlobal() {
      return $(this, "_setupFakeWorkerGlobal", (async () => this.#d ? this.#d : (await import(this.workerSrc).then(async (m) => {
        await m.__tla;
        return m;
      })).WorkerMessageHandler)());
    }
  };
  class sa {
    downloadInfoCapability = Promise.withResolvers();
    #t = null;
    #e = /* @__PURE__ */ new Map();
    #i = null;
    #s = /* @__PURE__ */ new Map();
    #n = /* @__PURE__ */ new Map();
    #a = /* @__PURE__ */ new Map();
    #r = null;
    constructor(t, e, i, s, n, r) {
      this.messageHandler = t, this.loadingTask = e, this.#i = i, this.commonObjs = new on(), this.fontLoader = new Jn({
        ownerDocument: s.ownerDocument,
        styleElement: s.styleElement
      }), this.enableHWA = s.enableHWA, this.loadingParams = s.loadingParams, this._params = s, this.canvasFactory = n.canvasFactory, this.filterFactory = n.filterFactory, this.binaryDataFactory = n.binaryDataFactory, this.pagesMapper = r, this.destroyed = false, this.destroyCapability = null, this.setupMessageHandler();
    }
    updatePage(t) {
      const { _pageIndex: e } = t;
      this.#s.set(e, t), this.#n.set(e, Promise.resolve(t));
    }
    #o(t, e = null) {
      return this.#e.getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, e));
    }
    #h({ loaded: t, total: e }) {
      this.loadingTask.onProgress?.({
        loaded: t,
        total: e,
        percent: e ? nt(Math.round(t / e * 100), 0, 100) : NaN
      });
    }
    get annotationStorage() {
      return $(this, "annotationStorage", new Ji());
    }
    getRenderingIntent(t, e = Kt.ENABLE, i = null, s = false, n = false) {
      let r = Ct.DISPLAY, a = De;
      switch (t) {
        case "any":
          r = Ct.ANY;
          break;
        case "display":
          break;
        case "print":
          r = Ct.PRINT;
          break;
        default:
          z(`getRenderingIntent - invalid intent: ${t}`);
      }
      const o = r & Ct.PRINT && i instanceof Ys ? i : this.annotationStorage;
      switch (e) {
        case Kt.DISABLE:
          r += Ct.ANNOTATIONS_DISABLE;
          break;
        case Kt.ENABLE:
          break;
        case Kt.ENABLE_FORMS:
          r += Ct.ANNOTATIONS_FORMS;
          break;
        case Kt.ENABLE_STORAGE:
          r += Ct.ANNOTATIONS_STORAGE, a = o.serializable;
          break;
        default:
          z(`getRenderingIntent - invalid annotationMode: ${e}`);
      }
      s && (r += Ct.IS_EDITING), n && (r += Ct.OPLIST);
      const { ids: l, hash: h } = o.modifiedIds, c = [
        r,
        a.hash,
        h
      ];
      return {
        renderingIntent: r,
        cacheKey: c.join("_"),
        annotationStorageSerializable: a,
        modifiedIds: l
      };
    }
    destroy() {
      if (this.destroyCapability) return this.destroyCapability.promise;
      this.destroyed = true, this.destroyCapability = Promise.withResolvers(), this.#r?.reject(new Error("Worker was destroyed during onPassword callback"));
      const t = [];
      for (const i of this.#s.values()) t.push(i._destroy());
      this.#s.clear(), this.#n.clear(), this.#a.clear(), Object.hasOwn(this, "annotationStorage") && this.annotationStorage.resetModified();
      const e = this.messageHandler.sendWithPromise("Terminate", null);
      return t.push(e), Promise.all(t).then(() => {
        this.commonObjs.clear(), this.fontLoader.clear(), this.#e.clear(), this.filterFactory.destroy(), _t.cleanup(), this.#i?.cancelAllRequests(new Jt("Worker was terminated.")), this.messageHandler?.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
      }, this.destroyCapability.reject), this.destroyCapability.promise;
    }
    setupMessageHandler() {
      const { messageHandler: t, loadingTask: e } = this;
      t.on("GetReader", (i, s) => {
        ht(this.#i, "GetReader - no `BasePDFStream` instance available."), this.#t = this.#i.getFullReader(), this.#t.onProgress = (n) => this.#h(n), s.onPull = () => {
          this.#t.read().then(function({ value: n, done: r }) {
            if (r) {
              s.close();
              return;
            }
            ht(n instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), s.enqueue(new Uint8Array(n), 1, [
              n
            ]);
          }).catch((n) => {
            s.error(n);
          });
        }, s.onCancel = (n) => {
          this.#t.cancel(n), s.ready.catch((r) => {
            if (!this.destroyed) throw r;
          });
        };
      }), t.on("ReaderHeadersReady", async (i) => {
        await this.#t.headersReady;
        const { isStreamingSupported: s, isRangeSupported: n, contentLength: r } = this.#t;
        return s && n && (this.#t.onProgress = null), {
          isStreamingSupported: s,
          isRangeSupported: n,
          contentLength: r
        };
      }), t.on("GetRangeReader", (i, s) => {
        ht(this.#i, "GetRangeReader - no `BasePDFStream` instance available.");
        const n = this.#i.getRangeReader(i.begin, i.end);
        if (!n) {
          s.close();
          return;
        }
        s.onPull = () => {
          n.read().then(function({ value: r, done: a }) {
            if (a) {
              s.close();
              return;
            }
            ht(r instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), s.enqueue(new Uint8Array(r), 1, [
              r
            ]);
          }).catch((r) => {
            s.error(r);
          });
        }, s.onCancel = (r) => {
          n.cancel(r), s.ready.catch((a) => {
            if (!this.destroyed) throw a;
          });
        };
      }), t.on("GetDoc", ({ pdfInfo: i }) => {
        this.pagesMapper.pagesNumber = i.numPages, this._numPages = i.numPages, this._htmlForXfa = i.htmlForXfa, delete i.htmlForXfa, e._capability.resolve(new ia(i, this));
      }), t.on("DocException", (i) => {
        e._capability.reject(xt(i));
      }), t.on("PasswordRequest", (i) => {
        this.#r = Promise.withResolvers();
        try {
          if (!e.onPassword) throw xt(i);
          const s = (n) => {
            n instanceof Error ? this.#r.reject(n) : this.#r.resolve({
              password: n
            });
          };
          e.onPassword(s, i.code);
        } catch (s) {
          this.#r.reject(s);
        }
        return this.#r.promise;
      }), t.on("DataLoaded", (i) => {
        this.#h({
          loaded: i.length,
          total: i.length
        }), this.downloadInfoCapability.resolve(i);
      }), t.on("StartRenderPage", (i) => {
        if (this.destroyed) return;
        this.#s.get(i.pageIndex)._startRenderPage(i.transparency, i.cacheKey);
      }), t.on("commonobj", ([i, s, n]) => {
        if (this.destroyed || this.commonObjs.has(i)) return null;
        switch (s) {
          case "Font":
            if ("error" in n) {
              const c = n.error;
              z(`Error during font loading: ${c}`), this.commonObjs.resolve(i, c);
              break;
            }
            const r = new sr(n), a = this._params.pdfBug && globalThis.FontInspector?.enabled ? (c, d) => globalThis.FontInspector.fontAdded(c, d) : null, o = new Qn(r, a, n.charProcOperatorList, n.extra);
            this.fontLoader.bind(o).catch(() => t.sendWithPromise("FontFallback", {
              id: i
            })).finally(() => {
              o.fontExtraProperties || o.clearData(), this.commonObjs.resolve(i, o);
            });
            break;
          case "CopyLocalImage":
            const { imageRef: l } = n;
            ht(l, "The imageRef must be defined.");
            for (const c of this.#s.values()) for (const [, d] of c.objs) {
              if (d?.ref !== l) continue;
              if (!d.dataLen) return null;
              const p = structuredClone(d);
              return this.commonObjs.resolve(i, p), d.dataLen;
            }
            break;
          case "FontPath":
            this.commonObjs.resolve(i, new rr(n));
            break;
          case "Image":
            this.commonObjs.resolve(i, n);
            break;
          case "Pattern":
            const h = new nr(n);
            this.commonObjs.resolve(i, h.getIR());
            break;
          default:
            throw new Error(`Got unknown common object type ${s}`);
        }
        return null;
      }), t.on("obj", ([i, s, n, r]) => {
        if (this.destroyed) return;
        const a = this.#s.get(s);
        if (!a.objs.has(i)) {
          if (a._intentStates.size === 0) {
            r?.bitmap?.close();
            return;
          }
          switch (n) {
            case "Image":
            case "Pattern":
              a.objs.resolve(i, r);
              break;
            default:
              throw new Error(`Got unknown object type ${n}`);
          }
        }
      }), t.on("DocProgress", (i) => {
        this.destroyed || this.#h(i);
      }), t.on("FetchBinaryData", async (i) => {
        if (this.destroyed) throw new Error("Worker was destroyed.");
        if (!this.binaryDataFactory) throw new Error("`BinaryDataFactory` not initialized, see the `useWorkerFetch` parameter.");
        return this.binaryDataFactory.fetch(i);
      });
    }
    getData() {
      return this.messageHandler.sendWithPromise("GetData", null);
    }
    saveDocument() {
      this.annotationStorage.size <= 0 && z("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
      const { map: t, transfer: e } = this.annotationStorage.serializable;
      return this.messageHandler.sendWithPromise("SaveDocument", {
        isPureXfa: !!this._htmlForXfa,
        numPages: this._numPages,
        annotationStorage: t,
        filename: this.#t?.filename ?? null
      }, e).finally(() => {
        this.annotationStorage.resetModified();
      });
    }
    extractPages(t) {
      const e = {
        pageInfos: t
      };
      let i;
      const s = globalThis.ImageBitmap;
      if (typeof s == "function") {
        const n = Array.isArray(t) ? t : [
          t
        ];
        for (const r of n) r?.image instanceof s && (i ||= []).push(r.image);
      }
      if (this.annotationStorage.size > 0) {
        const n = this.annotationStorage.serializable;
        let { map: r } = n;
        n.transfer?.length && (i ? i.push(...n.transfer) : i = n.transfer);
        const a = this.pagesMapper.getMapping();
        if (a) {
          const o = /* @__PURE__ */ new Map();
          for (const [l, h] of r) {
            if (h?.pageIndex !== void 0 && h.pageIndex >= 0 && h.pageIndex < a.length) {
              const c = a[h.pageIndex] - 1;
              if (c !== h.pageIndex) {
                o.set(l, {
                  ...h,
                  pageIndex: c
                });
                continue;
              }
            }
            o.set(l, h);
          }
          r = o;
        }
        e.annotationStorage = r;
      }
      return this.messageHandler.sendWithPromise("ExtractPages", e, i).finally(() => {
        this.annotationStorage.resetModified();
      });
    }
    getPage(t) {
      if (!Number.isInteger(t) || t <= 0 || t > this.pagesMapper.pagesNumber) return Promise.reject(new Error("Invalid page request."));
      const e = t - 1, i = this.pagesMapper.getPageId(t) - 1, s = this.#n.get(e);
      if (s) return s;
      const n = this.messageHandler.sendWithPromise("GetPage", {
        pageIndex: i
      }).then((r) => {
        if (this.destroyed) throw new Error("Transport destroyed");
        r.refStr && this.#a.set(r.refStr, i);
        const a = new es(e, r, this, this.pagesMapper, this._params.pdfBug);
        return this.#s.set(e, a), a;
      });
      return this.#n.set(e, n), n;
    }
    async getPageIndex(t) {
      if (!Hi(t)) throw new Error("Invalid pageIndex request.");
      const e = await this.messageHandler.sendWithPromise("GetPageIndex", {
        num: t.num,
        gen: t.gen
      }), i = this.pagesMapper.getPageNumber(e + 1);
      if (i === 0) throw new Error("GetPageIndex: page has been removed.");
      return i - 1;
    }
    getAnnotations(t, e) {
      return this.messageHandler.sendWithPromise("GetAnnotations", {
        pageIndex: this.pagesMapper.getPageId(t + 1) - 1,
        intent: e
      });
    }
    getFieldObjects() {
      return this.#o("GetFieldObjects");
    }
    hasJSActions() {
      return this.#o("HasJSActions");
    }
    getCalculationOrderIds() {
      return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
    }
    getDestinations() {
      return this.messageHandler.sendWithPromise("GetDestinations", null);
    }
    getDestination(t) {
      return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
        id: t
      });
    }
    getPageLabels() {
      return this.messageHandler.sendWithPromise("GetPageLabels", null);
    }
    getPageLayout() {
      return this.messageHandler.sendWithPromise("GetPageLayout", null);
    }
    getPageMode() {
      return this.messageHandler.sendWithPromise("GetPageMode", null);
    }
    getViewerPreferences() {
      return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
    }
    getOpenAction() {
      return this.messageHandler.sendWithPromise("GetOpenAction", null);
    }
    getAttachments() {
      return this.messageHandler.sendWithPromise("GetAttachments", null);
    }
    getAttachmentContent(t) {
      return this.messageHandler.sendWithPromise("GetAttachmentContent", t);
    }
    getAnnotationsByType(t, e) {
      return this.messageHandler.sendWithPromise("GetAnnotationsByType", {
        types: t,
        pageIndexesToSkip: e
      });
    }
    getDocJSActions() {
      return this.#o("GetDocJSActions");
    }
    getPageJSActions(t) {
      return this.messageHandler.sendWithPromise("GetPageJSActions", {
        pageIndex: this.pagesMapper.getPageId(t + 1) - 1
      });
    }
    getStructTree(t) {
      return this.messageHandler.sendWithPromise("GetStructTree", {
        pageIndex: this.pagesMapper.getPageId(t + 1) - 1
      });
    }
    getOutline() {
      return this.messageHandler.sendWithPromise("GetOutline", null);
    }
    getOptionalContentConfig(t) {
      return this.#o("GetOptionalContentConfig").then((e) => new Zi(e, t));
    }
    getPermissions() {
      return this.messageHandler.sendWithPromise("GetPermissions", null);
    }
    getMetadata() {
      const t = "GetMetadata";
      return this.#e.getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, null).then((e) => ({
        info: e[0],
        metadata: e[1] ? new Kr(e[1]) : null,
        contentDispositionFilename: this.#t?.filename ?? null,
        contentLength: this.#t?.contentLength ?? null,
        hasStructTree: e[2]
      })));
    }
    getMarkInfo() {
      return this.messageHandler.sendWithPromise("GetMarkInfo", null);
    }
    getRawData(t) {
      return this.messageHandler.sendWithPromise("GetRawData", t);
    }
    async startCleanup(t = false) {
      if (!this.destroyed) {
        await this.messageHandler.sendWithPromise("Cleanup", null);
        for (const e of this.#s.values()) if (!e.cleanup()) throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
        this.commonObjs.clear(), t || this.fontLoader.clear(), this.#e.clear(), this.filterFactory.destroy(true), _t.cleanup();
      }
    }
    cachedPageNumber(t) {
      if (!Hi(t)) return null;
      const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`, i = this.#a.get(e);
      if (i >= 0) {
        const s = this.pagesMapper.getPageNumber(i + 1);
        if (s !== 0) return s;
      }
      return null;
    }
  }
  class na {
    _internalRenderTask = null;
    onContinue = null;
    onError = null;
    constructor(t) {
      this._internalRenderTask = t;
    }
    get promise() {
      return this._internalRenderTask.capability.promise;
    }
    cancel(t = 0) {
      this._internalRenderTask.cancel(null, t);
    }
    get separateAnnots() {
      const { separateAnnots: t } = this._internalRenderTask.operatorList;
      if (!t) return false;
      const { annotationCanvasMap: e } = this._internalRenderTask;
      return t.form || t.canvas && e?.size > 0;
    }
    get imageCoordinates() {
      return this._internalRenderTask.imageCoordinates || null;
    }
  }
  class me {
    #t = null;
    static #e = /* @__PURE__ */ new WeakSet();
    constructor({ callback: t, params: e, objs: i, commonObjs: s, annotationCanvasMap: n, operatorList: r, pageIndex: a, canvasFactory: o, filterFactory: l, useRequestAnimationFrame: h = false, pdfBug: c = false, pageColors: d = null, enableHWA: p = false, operationsFilter: m = null }) {
      this.callback = t, this.params = e, this.objs = i, this.commonObjs = s, this.annotationCanvasMap = n, this.operatorListIdx = null, this.operatorList = r, this._pageIndex = a, this.canvasFactory = o, this.filterFactory = l, this._pdfBug = c, this.pageColors = d, this.running = false, this.graphicsReadyCallback = null, this.graphicsReady = false, this._useRequestAnimationFrame = h === true && typeof window < "u", this.cancelled = false, this.capability = Promise.withResolvers(), this.task = new na(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = p, this._dependencyTracker = e.dependencyTracker, this._imagesTracker = e.imagesTracker, this._operationsFilter = m;
    }
    get completed() {
      return this.capability.promise.catch(function() {
      });
    }
    initializeGraphics({ transparency: t = false, optionalContentConfig: e }) {
      if (this.cancelled) return;
      if (this._canvas) {
        if (me.#e.has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
        me.#e.add(this._canvas);
      }
      this._pdfBug && globalThis.StepperManager?.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
      const { viewport: i, transform: s, background: n, dependencyTracker: r, imagesTracker: a } = this.params, o = this._canvasContext || this._canvas.getContext("2d", {
        alpha: false,
        willReadFrequently: !this._enableHWA
      });
      this.gfx = new be(o, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
        optionalContentConfig: e
      }, this.annotationCanvasMap, this.pageColors, r, a), this.gfx.beginDrawing({
        transform: s,
        viewport: i,
        transparency: t,
        background: n
      }), this.operatorListIdx = 0, this.graphicsReady = true, this.graphicsReadyCallback?.();
    }
    cancel(t = null, e = 0) {
      this.running = false, this.cancelled = true, this.gfx?.endDrawing(), this.#t && (window.cancelAnimationFrame(this.#t), this.#t = null), me.#e.delete(this._canvas), t ||= new Xi(`Rendering cancelled, page ${this._pageIndex + 1}`, e), this.callback(t), this.task.onError?.(t);
    }
    operatorListChanged() {
      if (!this.graphicsReady) {
        this.graphicsReadyCallback ||= this._continueBound;
        return;
      }
      this.gfx.dependencyTracker?.growOperationsCount(this.operatorList.fnArray.length), this.stepper?.updateOperatorList(this.operatorList), !this.running && this._continue();
    }
    _continue() {
      this.running = true, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
    }
    _scheduleNext() {
      this._useRequestAnimationFrame ? this.#t = window.requestAnimationFrame(() => {
        this.#t = null, this._nextBound().catch(this._cancelBound);
      }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
    async _next() {
      this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = false, this.operatorList.lastChunk && (this.gfx.endDrawing(), me.#e.delete(this._canvas), this.callback())));
    }
  }
  ra = "6.1.200";
  aa = "6353acefe";
  Dt = class {
    #t = null;
    #e = null;
    #i;
    #s = null;
    #n = false;
    #a = false;
    #r = null;
    #o;
    #h = null;
    #l = null;
    static #u = null;
    static get _keyboardManager() {
      return $(this, "_keyboardManager", new kt([
        [
          [
            "Escape"
          ],
          Dt.prototype._hideDropdownFromKeyboard
        ],
        [
          [
            "Space"
          ],
          Dt.prototype._colorSelectFromKeyboard
        ],
        [
          [
            "ArrowDown",
            "ArrowRight"
          ],
          Dt.prototype._moveToNext
        ],
        [
          [
            "ArrowUp",
            "ArrowLeft"
          ],
          Dt.prototype._moveToPrevious
        ],
        [
          [
            "Home"
          ],
          Dt.prototype._moveToBeginning
        ],
        [
          [
            "End"
          ],
          Dt.prototype._moveToEnd
        ]
      ]));
    }
    constructor({ editor: t = null, uiManager: e = null }) {
      t ? (this.#a = false, this.#r = t) : this.#a = true, this.#l = t?._uiManager || e, this.#o = this.#l._eventBus, this.#i = t?.color?.toUpperCase() || this.#l?.highlightColors.values().next().value || "#FFFF98", Dt.#u ||= Object.freeze({
        blue: "pdfjs-editor-colorpicker-blue",
        green: "pdfjs-editor-colorpicker-green",
        pink: "pdfjs-editor-colorpicker-pink",
        red: "pdfjs-editor-colorpicker-red",
        yellow: "pdfjs-editor-colorpicker-yellow"
      });
    }
    renderButton() {
      const t = this.#t = document.createElement("button");
      t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.ariaHasPopup = "true", this.#r && (t.ariaControls = `${this.#r.id}_colorpicker_dropdown`);
      const e = this.#l._signal;
      t.addEventListener("click", this.#g.bind(this), {
        signal: e
      }), t.addEventListener("keydown", this.#m.bind(this), {
        signal: e
      });
      const i = this.#e = document.createElement("span");
      return i.className = "swatch", i.ariaHidden = "true", i.style.backgroundColor = this.#i, t.append(i), t;
    }
    renderMainDropdown() {
      const t = this.#s = this.#d();
      return t.ariaOrientation = "horizontal", t.ariaLabelledBy = "highlightColorPickerLabel", t;
    }
    #d() {
      const t = document.createElement("div"), e = this.#l._signal;
      t.addEventListener("contextmenu", Ft, {
        signal: e
      }), t.className = "dropdown", t.role = "listbox", t.ariaMultiSelectable = "false", t.ariaOrientation = "vertical", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), this.#r && (t.id = `${this.#r.id}_colorpicker_dropdown`);
      for (const [i, s] of this.#l.highlightColors) {
        const n = document.createElement("button");
        n.tabIndex = "0", n.role = "option", n.setAttribute("data-color", s), n.title = i, n.setAttribute("data-l10n-id", Dt.#u[i]);
        const r = document.createElement("span");
        n.append(r), r.className = "swatch", r.style.backgroundColor = s, n.ariaSelected = s === this.#i, n.addEventListener("click", this.#p.bind(this, s), {
          signal: e
        }), t.append(n);
      }
      return t.addEventListener("keydown", this.#m.bind(this), {
        signal: e
      }), t;
    }
    #p(t, e) {
      e.stopPropagation(), this.#o.dispatch("switchannotationeditorparams", {
        source: this,
        type: V.HIGHLIGHT_COLOR,
        value: t
      }), this.updateColor(t);
    }
    _colorSelectFromKeyboard(t) {
      if (t.target === this.#t) {
        this.#g(t);
        return;
      }
      const e = t.target.getAttribute("data-color");
      e && this.#p(e, t);
    }
    _moveToNext(t) {
      if (!this.#f) {
        this.#g(t);
        return;
      }
      if (t.target === this.#t) {
        this.#s.firstElementChild?.focus();
        return;
      }
      t.target.nextSibling?.focus();
    }
    _moveToPrevious(t) {
      if (t.target === this.#s?.firstElementChild || t.target === this.#t) {
        this.#f && this._hideDropdownFromKeyboard();
        return;
      }
      this.#f || this.#g(t), t.target.previousSibling?.focus();
    }
    _moveToBeginning(t) {
      if (!this.#f) {
        this.#g(t);
        return;
      }
      this.#s.firstElementChild?.focus();
    }
    _moveToEnd(t) {
      if (!this.#f) {
        this.#g(t);
        return;
      }
      this.#s.lastElementChild?.focus();
    }
    #m(t) {
      Dt._keyboardManager.exec(this, t);
    }
    #g(t) {
      if (this.#f) {
        this.hideDropdown();
        return;
      }
      if (this.#n = t.detail === 0, this.#h || (this.#h = new AbortController(), window.addEventListener("pointerdown", this.#c.bind(this), {
        signal: this.#l.combinedSignal(this.#h)
      })), this.#t.ariaExpanded = "true", this.#s) {
        this.#s.classList.remove("hidden");
        return;
      }
      const e = this.#s = this.#d();
      this.#t.append(e);
    }
    #c(t) {
      this.#s?.contains(t.target) || this.hideDropdown();
    }
    hideDropdown() {
      this.#s?.classList.add("hidden"), this.#t.ariaExpanded = "false", this.#h?.abort(), this.#h = null;
    }
    get #f() {
      return this.#s && !this.#s.classList.contains("hidden");
    }
    _hideDropdownFromKeyboard() {
      if (!this.#a) {
        if (!this.#f) {
          this.#r?.unselect();
          return;
        }
        this.hideDropdown(), this.#t.focus({
          preventScroll: true,
          focusVisible: this.#n
        });
      }
    }
    updateColor(t) {
      if (this.#e && (this.#e.style.backgroundColor = t), !this.#s) return;
      const e = this.#l.highlightColors.values();
      for (const i of this.#s.children) i.ariaSelected = e.next().value === t.toUpperCase();
    }
    destroy() {
      this.#t?.remove(), this.#t = null, this.#e = null, this.#s?.remove(), this.#s = null;
    }
  };
  class Le {
    #t = null;
    #e = false;
    #i = null;
    #s = null;
    static #n = null;
    constructor(t) {
      this.#i = t, this.#s = t._uiManager, Le.#n ||= Object.freeze({
        freetext: "pdfjs-editor-color-picker-free-text-input",
        ink: "pdfjs-editor-color-picker-ink-input"
      });
    }
    renderButton() {
      if (this.#t) return this.#t;
      const { editorType: t, colorType: e, colorAndOpacityType: i, opacityType: s, color: n, opacity: r } = this.#i, a = this.#e = Z.isAlphaColorInputSupported && s !== void 0, o = this.#t = document.createElement("input");
      if (o.type = "color", a) {
        o.setAttribute("alpha", "");
        const l = D.hexNums[Math.round((r ?? 1) * 255)];
        o.value = (n || "#000000") + l;
      } else o.value = n || "#000000";
      return o.className = "basicColorPicker", o.tabIndex = 0, o.setAttribute("data-l10n-id", Le.#n[t]), o.addEventListener("input", () => {
        if (a) {
          const l = Oe(o.value);
          if (!l) return;
          const [h, c, d, p] = l, m = D.makeHexColor(h, c, d);
          i !== void 0 ? this.#s.updateParams(i, {
            color: m,
            opacity: p
          }) : (this.#s.updateParams(e, m), this.#s.updateParams(s, p));
        } else this.#s.updateParams(e, o.value);
      }, {
        signal: this.#s._signal
      }), o;
    }
    update(t) {
      if (this.#t) if (this.#e) {
        const e = D.hexNums[Math.round(this.#i.opacity * 255)];
        this.#t.value = t + e;
      } else this.#t.value = t;
    }
    updateOpacity(t) {
      if (!this.#t || !this.#e) return;
      const e = D.hexNums[Math.round(t * 255)];
      this.#t.value = this.#i.color + e;
    }
    destroy() {
      this.#t?.remove(), this.#t = null;
    }
    hideDropdown() {
    }
  }
  function Ns(u) {
    return Math.floor(nt(u, 0, 1) * 255).toString(16).padStart(2, "0");
  }
  function Ee(u) {
    return nt(u, 0, 1) * 255;
  }
  class Us {
    static CMYK_G([t, e, i, s]) {
      return [
        "G",
        1 - Math.min(1, 0.3 * t + 0.59 * i + 0.11 * e + s)
      ];
    }
    static G_CMYK([t]) {
      return [
        "CMYK",
        0,
        0,
        0,
        1 - t
      ];
    }
    static G_RGB([t]) {
      return [
        "RGB",
        t,
        t,
        t
      ];
    }
    static G_rgb([t]) {
      return t = Ee(t), [
        t,
        t,
        t
      ];
    }
    static G_HTML([t]) {
      const e = Ns(t);
      return `#${e}${e}${e}`;
    }
    static RGB_G([t, e, i]) {
      return [
        "G",
        0.3 * t + 0.59 * e + 0.11 * i
      ];
    }
    static RGB_rgb(t) {
      return t.map(Ee);
    }
    static RGB_HTML(t) {
      return `#${t.map(Ns).join("")}`;
    }
    static T_HTML() {
      return "#00000000";
    }
    static T_rgb() {
      return [
        null
      ];
    }
    static CMYK_RGB([t, e, i, s]) {
      return [
        "RGB",
        1 - Math.min(1, t + s),
        1 - Math.min(1, i + s),
        1 - Math.min(1, e + s)
      ];
    }
    static CMYK_rgb([t, e, i, s]) {
      return [
        Ee(1 - Math.min(1, t + s)),
        Ee(1 - Math.min(1, i + s)),
        Ee(1 - Math.min(1, e + s))
      ];
    }
    static CMYK_HTML(t) {
      const e = this.CMYK_RGB(t).slice(1);
      return this.RGB_HTML(e);
    }
    static RGB_CMYK([t, e, i]) {
      const s = 1 - t, n = 1 - e, r = 1 - i, a = Math.min(s, n, r);
      return [
        "CMYK",
        s,
        n,
        r,
        a
      ];
    }
  }
  class oa {
    create(t, e, i = false) {
      if (t <= 0 || e <= 0) throw new Error("Invalid SVG dimensions");
      const s = this._createSVG("svg:svg");
      return s.setAttribute("version", "1.1"), i || (s.setAttribute("width", `${t}px`), s.setAttribute("height", `${e}px`)), s.setAttribute("preserveAspectRatio", "none"), s.setAttribute("viewBox", `0 0 ${t} ${e}`), s;
    }
    createElement(t) {
      if (typeof t != "string") throw new Error("Invalid SVG element type");
      return this._createSVG(t);
    }
    _createSVG(t) {
      K("Abstract method `_createSVG` called.");
    }
  }
  ii = class extends oa {
    _createSVG(t) {
      return document.createElementNS(St, t);
    }
  };
  const la = 9, ae = /* @__PURE__ */ new WeakSet(), ha = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
  class Mi {
    static create(t) {
      switch (t.data.annotationType) {
        case ft.LINK:
          return new is(t);
        case ft.TEXT:
          return new da(t);
        case ft.WIDGET:
          switch (t.data.fieldType) {
            case "Tx":
              return new ua(t);
            case "Btn":
              return t.data.radioButton ? new ga(t) : t.data.checkBox ? new pa(t) : new ma(t);
            case "Ch":
              return new ba(t);
            case "Sig":
              return new fa(t);
          }
          return new le(t);
        case ft.POPUP:
          return new Gi(t);
        case ft.FREETEXT:
          return new hn(t);
        case ft.LINE:
          return new Aa(t);
        case ft.SQUARE:
          return new wa(t);
        case ft.CIRCLE:
          return new va(t);
        case ft.POLYLINE:
          return new cn(t);
        case ft.CARET:
          return new Ea(t);
        case ft.INK:
          return new ss(t);
        case ft.POLYGON:
          return new xa(t);
        case ft.HIGHLIGHT:
          return new dn(t);
        case ft.UNDERLINE:
          return new Sa(t);
        case ft.SQUIGGLY:
          return new Ca(t);
        case ft.STRIKEOUT:
          return new _a(t);
        case ft.STAMP:
          return new un(t);
        case ft.FILEATTACHMENT:
          return new Ta(t);
        case ft.RICHMEDIA:
        case ft.SCREEN:
          return new fn(t);
        default:
          return new ot(t);
      }
    }
  }
  class ot {
    #t = null;
    #e = false;
    #i = null;
    constructor(t, { isRenderable: e = false, ignoreBorder: i = false, createQuadrilaterals: s = false } = {}) {
      this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableComment = t.enableComment, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, this.hasOwnCommentButton = false, e && (this.contentElement = this.container = this._createContainer(i)), s && this._createQuadrilaterals();
    }
    static _hasPopupData({ contentsObj: t, richText: e }) {
      return !!(t?.str || e?.str);
    }
    get _isEditable() {
      return this.data.isEditable;
    }
    get hasPopupData() {
      return ot._hasPopupData(this.data) || this.enableComment && !!this.commentText;
    }
    get commentData() {
      const { data: t } = this, e = this.annotationStorage?.getEditor(t.id);
      return e ? e.getData() : t;
    }
    get hasCommentButton() {
      return this.enableComment && this.hasPopupElement;
    }
    get commentButtonPosition() {
      const t = this.annotationStorage?.getEditor(this.data.id);
      if (t) return t.commentButtonPositionInPage;
      const { quadPoints: e, inkLists: i, rect: s } = this.data;
      let n = -1 / 0, r = -1 / 0;
      if (e?.length >= 8) {
        for (let a = 0; a < e.length; a += 8) e[a + 1] > r ? (r = e[a + 1], n = e[a + 2]) : e[a + 1] === r && (n = Math.max(n, e[a + 2]));
        return [
          n,
          r
        ];
      }
      if (i?.length >= 1) {
        for (const a of i) for (let o = 0, l = a.length; o < l; o += 2) a[o + 1] > r ? (r = a[o + 1], n = a[o]) : a[o + 1] === r && (n = Math.max(n, a[o]));
        if (n !== 1 / 0) return [
          n,
          r
        ];
      }
      return s ? [
        s[2],
        s[3]
      ] : null;
    }
    _normalizePoint(t) {
      const { page: { view: e }, viewport: { rawDims: { pageWidth: i, pageHeight: s, pageX: n, pageY: r } } } = this.parent;
      return t[1] = e[3] - t[1] + e[1], t[0] = 100 * (t[0] - n) / i, t[1] = 100 * (t[1] - r) / s, t;
    }
    get commentText() {
      const { data: t } = this;
      return this.annotationStorage.getRawValue(`${Pe}${t.id}`)?.popup?.contents || t.contentsObj?.str || "";
    }
    set commentText(t) {
      const { data: e } = this, i = {
        deleted: !t,
        contents: t || ""
      };
      this.annotationStorage.updateEditor(e.id, {
        popup: i
      }) || this.annotationStorage.setValue(`${Pe}${e.id}`, {
        id: e.id,
        annotationType: e.annotationType,
        page: this.parent.page,
        popup: i,
        popupRef: e.popupRef,
        modificationDate: /* @__PURE__ */ new Date()
      }), t || this.removePopup();
    }
    removePopup() {
      (this.#i?.popup || this.popup)?.remove(), this.#i = this.popup = null;
    }
    updateEdited(t) {
      if (!this.container) return;
      t.rect && (this.#t ||= {
        rect: this.data.rect.slice(0)
      });
      const { rect: e, popup: i } = t;
      e && this.#s(e);
      let s = this.#i?.popup || this.popup;
      !s && i?.text && (this._createPopup(i), s = this.#i.popup), s && (s.updateEdited(t), i?.deleted && (s.remove(), this.#i = null, this.popup = null));
    }
    resetEdited() {
      this.#t && (this.#s(this.#t.rect), this.#i?.popup.resetEdited(), this.#t = null);
    }
    #s(t) {
      const { container: { style: e }, data: { rect: i, rotation: s }, parent: { viewport: { rawDims: { pageWidth: n, pageHeight: r, pageX: a, pageY: o } } } } = this;
      i?.splice(0, 4, ...t), e.left = `${100 * (t[0] - a) / n}%`, e.top = `${100 * (r - t[3] + o) / r}%`, s === 0 ? (e.width = `${100 * (t[2] - t[0]) / n}%`, e.height = `${100 * (t[3] - t[1]) / r}%`) : this.setRotation(s);
    }
    _createContainer(t) {
      const { data: e, parent: { page: i, viewport: s } } = this, n = document.createElement("section");
      n.setAttribute("data-annotation-id", e.id), !(this instanceof le) && !(this instanceof is) && !(this instanceof fn) && (n.tabIndex = 0);
      const { style: r } = n;
      if (r.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (n.title = e.alternativeText), e.noRotate && n.classList.add("norotate"), !e.rect || this instanceof Gi) {
        const { rotation: b } = e;
        return !e.hasOwnCanvas && b !== 0 && this.setRotation(b, n), n;
      }
      const { width: a, height: o } = this;
      if (!t && e.borderStyle.width > 0) {
        r.borderWidth = `${e.borderStyle.width}px`;
        const b = e.borderStyle.horizontalCornerRadius, y = e.borderStyle.verticalCornerRadius;
        if (b > 0 || y > 0) {
          const v = `calc(${b}px * var(--total-scale-factor)) / calc(${y}px * var(--total-scale-factor))`;
          r.borderRadius = v;
        }
        switch (e.borderStyle.style) {
          case ue.SOLID:
            r.borderStyle = "solid";
            break;
          case ue.DASHED:
            r.borderStyle = "dashed";
            break;
          case ue.BEVELED:
            z("Unimplemented border style: beveled");
            break;
          case ue.INSET:
            z("Unimplemented border style: inset");
            break;
          case ue.UNDERLINE:
            r.borderBottomStyle = "solid";
            break;
        }
        const w = e.borderColor || null;
        w ? (this.#e = true, r.borderColor = D.makeHexColor(...w)) : r.borderWidth = 0;
      }
      const l = D.normalizeRect([
        e.rect[0],
        i.view[3] - e.rect[1] + i.view[1],
        e.rect[2],
        i.view[3] - e.rect[3] + i.view[1]
      ]), { pageWidth: h, pageHeight: c, pageX: d, pageY: p } = s.rawDims;
      r.left = `${100 * (l[0] - d) / h}%`, r.top = `${100 * (l[1] - p) / c}%`;
      const { rotation: m } = e;
      return e.hasOwnCanvas || m === 0 ? (r.width = `${100 * a / h}%`, r.height = `${100 * o / c}%`) : this.setRotation(m, n), n;
    }
    setRotation(t, e = this.container) {
      if (!this.data.rect) return;
      const { pageWidth: i, pageHeight: s } = this.parent.viewport.rawDims;
      let { width: n, height: r } = this;
      t % 180 !== 0 && ([n, r] = [
        r,
        n
      ]), e.style.width = `${100 * n / i}%`, e.style.height = `${100 * r / s}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
    }
    get _commonActions() {
      const t = (e, i, s) => {
        const n = s.detail[e], r = n[0], a = n.slice(1);
        s.target.style[i] = Us[`${r}_HTML`](a), this.annotationStorage.setValue(this.data.id, {
          [i]: Us[`${r}_rgb`](a)
        });
      };
      return $(this, "_commonActions", {
        display: (e) => {
          const { display: i } = e.detail, s = i % 2 === 1;
          this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
            noView: s,
            noPrint: i === 1 || i === 2
          });
        },
        print: (e) => {
          this.annotationStorage.setValue(this.data.id, {
            noPrint: !e.detail.print
          });
        },
        hidden: (e) => {
          const { hidden: i } = e.detail;
          this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
            noPrint: i,
            noView: i
          });
        },
        focus: (e) => {
          setTimeout(() => e.target.focus({
            preventScroll: false
          }), 0);
        },
        userName: (e) => {
          e.target.title = e.detail.userName;
        },
        readonly: (e) => {
          e.target.disabled = e.detail.readonly;
        },
        required: (e) => {
          this._setRequired(e.target, e.detail.required);
        },
        bgColor: (e) => {
          t("bgColor", "backgroundColor", e);
        },
        fillColor: (e) => {
          t("fillColor", "backgroundColor", e);
        },
        fgColor: (e) => {
          t("fgColor", "color", e);
        },
        textColor: (e) => {
          t("textColor", "color", e);
        },
        borderColor: (e) => {
          t("borderColor", "borderColor", e);
        },
        strokeColor: (e) => {
          t("strokeColor", "borderColor", e);
        },
        rotation: (e) => {
          const i = e.detail.rotation;
          this.setRotation(i), this.annotationStorage.setValue(this.data.id, {
            rotation: i
          });
        }
      });
    }
    _dispatchEventFromSandbox(t, e) {
      const i = this._commonActions;
      for (const s of Object.keys(e.detail)) (t[s] || i[s])?.(e);
    }
    _setDefaultPropertiesFromJS(t) {
      if (!this.enableScripting) return;
      const e = this.annotationStorage.getRawValue(this.data.id);
      if (!e) return;
      const i = this._commonActions;
      for (const [s, n] of Object.entries(e)) {
        const r = i[s];
        if (r) {
          const a = {
            detail: {
              [s]: n
            },
            target: t
          };
          r(a), delete e[s];
        }
      }
    }
    _createQuadrilaterals() {
      if (!this.container) return;
      const { quadPoints: t } = this.data;
      if (!t) return;
      const [e, i, s, n] = this.data.rect.map((b) => Math.fround(b));
      if (t.length === 8) {
        const [b, y, w, v] = t.subarray(2, 6);
        if (s === b && n === y && e === w && i === v) return;
      }
      const { style: r } = this.container;
      let a;
      if (this.#e) {
        const { borderColor: b, borderWidth: y } = r;
        r.borderWidth = 0, a = [
          "url('data:image/svg+xml;utf8,",
          `<svg xmlns="${St}" preserveAspectRatio="none" viewBox="0 0 1 1">`,
          `<g fill="transparent" stroke="${b}" stroke-width="${y}">`
        ], this.container.classList.add("hasBorder");
      }
      const o = s - e, l = n - i, { svgFactory: h } = this, c = h.createElement("svg");
      c.classList.add("quadrilateralsContainer"), c.setAttribute("width", 0), c.setAttribute("height", 0), c.role = "none";
      const d = h.createElement("defs");
      c.append(d);
      const p = h.createElement("clipPath"), m = `clippath_${this.data.id}`;
      p.setAttribute("id", m), p.setAttribute("clipPathUnits", "objectBoundingBox"), d.append(p);
      for (let b = 2, y = t.length; b < y; b += 8) {
        const w = t[b], v = t[b + 1], E = t[b + 2], _ = t[b + 3], S = h.createElement("rect"), T = (E - e) / o, M = (n - v) / l, I = (w - E) / o, F = (v - _) / l;
        S.setAttribute("x", T), S.setAttribute("y", M), S.setAttribute("width", I), S.setAttribute("height", F), p.append(S), a?.push(`<rect vector-effect="non-scaling-stroke" x="${T}" y="${M}" width="${I}" height="${F}"/>`);
      }
      this.#e && (a.push("</g></svg>')"), r.backgroundImage = a.join("")), this.container.append(c), this.container.style.clipPath = `url(#${m})`;
    }
    _createPopup(t = null) {
      const { data: e } = this;
      let i, s;
      t ? (i = {
        str: t.text
      }, s = t.date) : (i = e.contentsObj, s = e.modificationDate), this.#i = new Gi({
        data: {
          color: e.color,
          titleObj: e.titleObj,
          modificationDate: s,
          contentsObj: i,
          richText: e.richText,
          parentRect: e.rect,
          borderStyle: 0,
          id: `popup_${e.id}`,
          rotation: e.rotation,
          noRotate: true
        },
        linkService: this.linkService,
        parent: this.parent,
        elements: [
          this
        ]
      });
    }
    get hasPopupElement() {
      return !!(this.#i || this.popup || this.data.popupRef);
    }
    get extraPopupElement() {
      return this.#i;
    }
    render() {
      K("Abstract method `AnnotationElement.render` called");
    }
    _getElementsByName(t, e = null) {
      const i = [];
      if (this._fieldObjects) {
        const s = this._fieldObjects[t];
        if (s) for (const { page: n, id: r, exportValues: a } of s) {
          if (n === -1 || r === e) continue;
          const o = typeof a == "string" ? a : null, l = document.querySelector(`[data-element-id="${r}"]`);
          if (l && !ae.has(l)) {
            z(`_getElementsByName - element not allowed: ${r}`);
            continue;
          }
          i.push({
            id: r,
            exportValue: o,
            domElement: l
          });
        }
        return i;
      }
      for (const s of document.getElementsByName(t)) {
        const { exportValue: n } = s, r = s.getAttribute("data-element-id");
        r !== e && ae.has(s) && i.push({
          id: r,
          exportValue: n,
          domElement: s
        });
      }
      return i;
    }
    show() {
      this.container && (this.container.hidden = false), this.popup?.maybeShow();
    }
    hide() {
      this.container && (this.container.hidden = true), this.popup?.forceHide();
    }
    getElementsToTriggerPopup() {
      return this.container;
    }
    addHighlightArea() {
      const t = this.getElementsToTriggerPopup();
      if (Array.isArray(t)) for (const e of t) e.classList.add("highlightArea");
      else t.classList.add("highlightArea");
    }
    _editOnDoubleClick() {
      if (!this._isEditable) return;
      const { annotationEditorType: t, data: { id: e } } = this;
      this.container.addEventListener("dblclick", () => {
        this.linkService.eventBus?.dispatch("switchannotationeditormode", {
          source: this,
          mode: t,
          editId: e,
          mustEnterInEditMode: true
        });
      });
    }
    updateOC(t) {
      if (!this.data.oc || !t) return;
      t.isVisible(this.data.oc) ? this.show() : this.hide();
    }
    get width() {
      return this.data.rect[2] - this.data.rect[0];
    }
    get height() {
      return this.data.rect[3] - this.data.rect[1];
    }
    _setBackgroundColor(t) {
      const e = this.data.backgroundColor || null;
      t.style.backgroundColor = e === null ? "transparent" : D.makeHexColor(...e);
    }
  }
  class ca extends ot {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), this.editor = t.editor;
    }
    render() {
      return this.container.className = "editorAnnotation", this.container;
    }
    createOrUpdatePopup() {
      const { editor: t } = this;
      t.hasComment && this._createPopup(t.comment);
    }
    get hasCommentButton() {
      return this.enableComment && this.editor.hasComment;
    }
    get commentButtonPosition() {
      return this.editor.commentButtonPositionInPage;
    }
    get commentText() {
      return this.editor.comment.text;
    }
    set commentText(t) {
      this.editor.comment = t, t || this.removePopup();
    }
    get commentData() {
      return this.editor.getData();
    }
    remove() {
      this.parent.removeAnnotation(this.data.id), this.container.remove(), this.container = null, this.removePopup();
    }
  }
  class is extends ot {
    constructor(t, e = null) {
      super(t, {
        isRenderable: true,
        ignoreBorder: !!e?.ignoreBorder,
        createQuadrilaterals: true
      }), this.isTooltipOnly = t.data.isTooltipOnly;
    }
    render() {
      const { data: t, linkService: e } = this, i = document.createElement("a");
      i.setAttribute("data-element-id", t.id);
      let s = false;
      return t.url ? (e.addLinkAttributes(i, t.url, t.newWindow), s = true) : t.action ? (this._bindNamedAction(i, t.action, t.overlaidText), s = true) : t.attachment ? (this.#e(i, t.attachmentId, t.attachment, t.overlaidText, t.attachmentDest), s = true) : t.setOCGState ? (this.#i(i, t.setOCGState, t.overlaidText), s = true) : t.dest ? (this._bindLink(i, t.dest, t.overlaidText), s = true) : (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, t), s = true), t.resetForm ? (this._bindResetFormAction(i, t.resetForm), s = true) : this.isTooltipOnly && !s && (this._bindLink(i, ""), s = true)), this.container.classList.add("linkAnnotation"), s && (this.contentElement = i, this.container.append(i)), this.container;
    }
    #t() {
      this.container.setAttribute("data-internal-link", "");
    }
    _bindLink(t, e, i = "") {
      t.href = this.linkService.getDestinationHash(e), t.onclick = () => (e && this.linkService.goToDestination(e), false), (e || e === "") && this.#t(), i && (t.title = i);
    }
    _bindNamedAction(t, e, i = "") {
      t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeNamedAction(e), false), i && (t.title = i), this.#t();
    }
    #e(t, e, i, s = "", n = null) {
      t.href = this.linkService.getAnchorUrl(""), i.description ? t.title = i.description : s && (t.title = s);
      const r = async () => {
        const a = await this.linkService.getAttachmentContent(e);
        a && this.downloadManager?.openOrDownloadData(a, i.filename, n);
      };
      t.onclick = () => (r(), false), this.#t();
    }
    #i(t, e, i = "") {
      t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeSetOCGState(e), false), i && (t.title = i), this.#t();
    }
    _bindJSAction(t, e) {
      t.href = this.linkService.getAnchorUrl("");
      const i = /* @__PURE__ */ new Map([
        [
          "Action",
          "onclick"
        ],
        [
          "Mouse Up",
          "onmouseup"
        ],
        [
          "Mouse Down",
          "onmousedown"
        ]
      ]);
      for (const s of Object.keys(e.actions)) {
        const n = i.get(s);
        n && (t[n] = () => (this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: e.id,
            name: s
          }
        }), false));
      }
      e.overlaidText && (t.title = e.overlaidText), t.onclick || (t.onclick = () => false), this.#t();
    }
    _bindResetFormAction(t, e) {
      const i = t.onclick;
      if (i || (t.href = this.linkService.getAnchorUrl("")), this.#t(), !this._fieldObjects) {
        z('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (t.onclick = () => false);
        return;
      }
      t.onclick = () => {
        i?.();
        const { fields: s, refs: n, include: r } = e, a = [];
        if (s.length !== 0 || n.length !== 0) {
          const h = new Set(n);
          for (const c of s) {
            const d = this._fieldObjects[c] || [];
            for (const { id: p } of d) h.add(p);
          }
          for (const c of Object.values(this._fieldObjects)) for (const d of c) h.has(d.id) === r && a.push(d);
        } else for (const h of Object.values(this._fieldObjects)) a.push(...h);
        const o = this.annotationStorage, l = [];
        for (const h of a) {
          const { id: c } = h;
          switch (l.push(c), h.type) {
            case "text": {
              const p = h.defaultValue || "";
              o.setValue(c, {
                value: p
              });
              break;
            }
            case "checkbox":
            case "radiobutton": {
              const p = h.defaultValue === h.exportValues;
              o.setValue(c, {
                value: p
              });
              break;
            }
            case "combobox":
            case "listbox": {
              const p = h.defaultValue || "";
              o.setValue(c, {
                value: p
              });
              break;
            }
            default:
              continue;
          }
          const d = document.querySelector(`[data-element-id="${c}"]`);
          if (d) {
            if (!ae.has(d)) {
              z(`_bindResetFormAction - element not allowed: ${c}`);
              continue;
            }
          } else continue;
          d.dispatchEvent(new Event("resetform"));
        }
        return this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: "app",
            ids: l,
            name: "ResetForm"
          }
        }), false;
      };
    }
  }
  class da extends ot {
    constructor(t) {
      super(t, {
        isRenderable: true
      });
    }
    render() {
      this.container.classList.add("textAnnotation");
      const t = document.createElement("img");
      return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
        type: this.data.name
      })), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container.append(t), this.container;
    }
  }
  class le extends ot {
    render() {
      return this.container;
    }
    _getKeyModifier(t) {
      return Z.platform.isMac ? t.metaKey : t.ctrlKey;
    }
    _setEventListener(t, e, i, s, n) {
      i.includes("mouse") ? t.addEventListener(i, (r) => {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: s,
            value: n(r),
            shift: r.shiftKey,
            modifier: this._getKeyModifier(r)
          }
        });
      }) : t.addEventListener(i, (r) => {
        if (i === "blur") {
          if (!e.focused || !r.relatedTarget) return;
          e.focused = false;
        } else if (i === "focus") {
          if (e.focused) return;
          e.focused = true;
        }
        n && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: s,
            value: n(r)
          }
        });
      });
    }
    _setEventListeners(t, e, i, s) {
      for (const [n, r] of i) (r === "Action" || this.data.actions?.[r]) && ((r === "Focus" || r === "Blur") && (e ||= {
        focused: false
      }), this._setEventListener(t, e, n, r, s), r === "Focus" && !this.data.actions?.Blur ? this._setEventListener(t, e, "blur", "Blur", null) : r === "Blur" && !this.data.actions?.Focus && this._setEventListener(t, e, "focus", "Focus", null));
    }
    _setTextStyle(t) {
      const e = [
        "left",
        "center",
        "right"
      ], { fontColor: i } = this.data.defaultAppearanceData, s = this.data.defaultAppearanceData.fontSize || la, n = t.style;
      let r;
      const a = 2, o = (l) => Math.round(10 * l) / 10;
      if (this.data.multiLine) {
        const l = Math.abs(this.data.rect[3] - this.data.rect[1] - a), h = Math.round(l / (xi * s)) || 1, c = l / h;
        r = Math.min(s, o(c / xi));
      } else {
        const l = Math.abs(this.data.rect[3] - this.data.rect[1] - a);
        r = Math.min(s, o(l / xi));
      }
      n.fontSize = `calc(${r}px * var(--total-scale-factor))`, n.color = D.makeHexColor(...i), this.data.textAlignment !== null && !this.data.comb && (n.textAlign = e[this.data.textAlignment]);
    }
    _setRequired(t, e) {
      e ? t.setAttribute("required", true) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
    }
  }
  class ua extends le {
    constructor(t) {
      const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
      super(t, {
        isRenderable: e
      });
    }
    setPropertyOnSiblings(t, e, i, s) {
      const n = this.annotationStorage;
      for (const r of this._getElementsByName(t.name, t.id)) r.domElement && (r.domElement[e] = i), n.setValue(r.id, {
        [s]: i
      });
    }
    render() {
      const t = this.annotationStorage, e = this.data.id;
      this.container.classList.add("textWidgetAnnotation");
      let i = null;
      if (this.renderForms) {
        const s = t.getValue(e, {
          value: this.data.fieldValue
        });
        let n = s.value || "";
        const r = t.getValue(e, {
          charLimit: this.data.maxLen
        }).charLimit;
        r && n.length > r && (n = n.slice(0, r));
        let a = s.formattedValue || this.data.textContent?.join(`
`) || null;
        a && this.data.comb && (a = a.replaceAll(/\s+/g, ""));
        const o = {
          userValue: n,
          formattedValue: a,
          lastCommittedValue: null,
          commitKey: 1,
          focused: false
        };
        this.data.multiLine ? (i = document.createElement("textarea"), i.textContent = a ?? n, this.data.doNotScroll && (i.style.overflowY = "hidden")) : (i = document.createElement("input"), i.type = this.data.password ? "password" : "text", i.setAttribute("value", a ?? n), this.data.doNotScroll && (i.style.overflowX = "hidden")), this.data.hasOwnCanvas && (this.container.classList.add("hasOwnCanvas"), t.has(e) && this.container.classList.add("sandboxModified")), ae.add(i), this.contentElement = i, i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, i.name = this.data.fieldName, i.tabIndex = 0;
        const { datetimeFormat: l, datetimeType: h, timeStep: c } = this.data, d = !!h && this.enableScripting;
        l && (i.title = l), this._setRequired(i, this.data.required), r && (i.maxLength = r), i.addEventListener("input", (m) => {
          t.setValue(e, {
            value: m.target.value
          }), this.setPropertyOnSiblings(i, "value", m.target.value, "value"), o.formattedValue = null;
        }), i.addEventListener("resetform", (m) => {
          const b = this.data.defaultFieldValue ?? "";
          i.value = o.userValue = b, o.formattedValue = null;
        });
        let p = (m) => {
          const { formattedValue: b } = o;
          b != null && (m.target.value = b), m.target.scrollLeft = 0;
        };
        if (this.enableScripting && this.hasJSActions) {
          i.addEventListener("focus", (b) => {
            if (o.focused) return;
            const { target: y } = b;
            if (d && (y.type = h, c && (y.step = c)), o.userValue) {
              const w = o.userValue;
              if (d) if (h === "time") {
                const v = new Date(w), E = [
                  v.getHours(),
                  v.getMinutes(),
                  v.getSeconds()
                ];
                y.value = E.map((_) => _.toString().padStart(2, "0")).join(":");
              } else y.value = new Date(w - ha).toISOString().split(h === "date" ? "T" : ".", 1)[0];
              else y.value = w;
            }
            o.lastCommittedValue = y.value, o.commitKey = 1, this.data.actions?.Focus || (o.focused = true);
          }), i.addEventListener("updatefromsandbox", (b) => {
            this.container.classList.add("sandboxModified");
            const y = {
              value(w) {
                o.userValue = w.detail.value ?? "", d || t.setValue(e, {
                  value: o.userValue.toString()
                }), w.target.value = o.userValue;
              },
              formattedValue(w) {
                const { formattedValue: v } = w.detail;
                o.formattedValue = v, v != null && w.target !== document.activeElement && (w.target.value = v);
                const E = {
                  formattedValue: v
                };
                d && (E.value = v), t.setValue(e, E);
              },
              selRange(w) {
                w.target.setSelectionRange(...w.detail.selRange);
              },
              charLimit: (w) => {
                const { charLimit: v } = w.detail, { target: E } = w;
                if (v === 0) {
                  E.removeAttribute("maxLength");
                  return;
                }
                E.setAttribute("maxLength", v);
                let _ = o.userValue;
                !_ || _.length <= v || (_ = _.slice(0, v), E.value = o.userValue = _, t.setValue(e, {
                  value: _
                }), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: e,
                    name: "Keystroke",
                    value: _,
                    willCommit: true,
                    commitKey: 1,
                    selStart: E.selectionStart,
                    selEnd: E.selectionEnd
                  }
                }));
              }
            };
            this._dispatchEventFromSandbox(y, b);
          }), i.addEventListener("keydown", (b) => {
            o.commitKey = 1;
            let y = -1;
            if (b.key === "Escape" ? y = 0 : b.key === "Enter" && !this.data.multiLine ? y = 2 : b.key === "Tab" && (o.commitKey = 3), y === -1) return;
            const { value: w } = b.target;
            o.lastCommittedValue !== w && (o.lastCommittedValue = w, o.userValue = w, this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value: w,
                willCommit: true,
                commitKey: y,
                selStart: b.target.selectionStart,
                selEnd: b.target.selectionEnd
              }
            }));
          });
          const m = p;
          p = null, i.addEventListener("blur", (b) => {
            if (!o.focused || !b.relatedTarget) return;
            this.data.actions?.Blur || (o.focused = false);
            const { target: y } = b;
            let { value: w } = y;
            if (d) {
              if (w && h === "time") {
                const v = w.split(":").map((E) => parseInt(E, 10));
                w = new Date(2e3, 0, 1, v[0], v[1], v[2] || 0).valueOf(), y.step = "";
              } else w.includes("T") || (w = `${w}T00:00`), w = new Date(w).valueOf();
              y.type = "text";
            }
            o.userValue = w, o.lastCommittedValue !== w && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value: w,
                willCommit: true,
                commitKey: o.commitKey,
                selStart: b.target.selectionStart,
                selEnd: b.target.selectionEnd
              }
            }), m(b);
          }), this.data.actions?.Keystroke && i.addEventListener("beforeinput", (b) => {
            o.lastCommittedValue = null;
            const { data: y, target: w } = b, { value: v, selectionStart: E, selectionEnd: _ } = w;
            let S = E, T = _;
            switch (b.inputType) {
              case "deleteWordBackward": {
                const M = v.substring(0, E).match(/\w*\W*$/);
                M && (S -= M[0].length);
                break;
              }
              case "deleteWordForward": {
                const M = v.substring(E).match(/^\W*\w*/);
                M && (T += M[0].length);
                break;
              }
              case "deleteContentBackward":
                E === _ && (S -= 1);
                break;
              case "deleteContentForward":
                E === _ && (T += 1);
                break;
            }
            b.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value: v,
                change: y || "",
                willCommit: false,
                selStart: S,
                selEnd: T
              }
            });
          }), this._setEventListeners(i, o, [
            [
              "focus",
              "Focus"
            ],
            [
              "blur",
              "Blur"
            ],
            [
              "mousedown",
              "Mouse Down"
            ],
            [
              "mouseenter",
              "Mouse Enter"
            ],
            [
              "mouseleave",
              "Mouse Exit"
            ],
            [
              "mouseup",
              "Mouse Up"
            ]
          ], (b) => b.target.value);
        }
        if (p && i.addEventListener("blur", p), this.data.comb) {
          const b = (this.data.rect[2] - this.data.rect[0]) / r;
          i.classList.add("comb"), i.style.setProperty("--comb-width", `calc(${b}px * var(--total-scale-factor))`);
          const y = this.data.textAlignment;
          if (y === 1 || y === 2) {
            const w = () => {
              const v = r - i.value.length;
              i.style.setProperty("--comb-offset", `${y === 1 ? v >> 1 : v}`);
            };
            w();
            for (const v of [
              "input",
              "blur",
              "resetform",
              "updatefromsandbox"
            ]) i.addEventListener(v, w);
          }
        }
      } else i = document.createElement("div"), i.textContent = this.data.fieldValue, i.style.verticalAlign = "middle", i.style.display = "table-cell", this.data.hasOwnCanvas && (i.hidden = true);
      return this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
    }
  }
  class fa extends le {
    constructor(t) {
      super(t, {
        isRenderable: !!t.data.hasOwnCanvas
      });
    }
  }
  class pa extends le {
    constructor(t) {
      super(t, {
        isRenderable: t.renderForms
      });
    }
    render() {
      const t = this.annotationStorage, e = this.data, i = e.id;
      let s = t.getValue(i, {
        value: e.exportValue === e.fieldValue
      }).value;
      typeof s == "string" && (s = s !== "Off", t.setValue(i, {
        value: s
      })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
      const n = document.createElement("input");
      return ae.add(n), n.setAttribute("data-element-id", i), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "checkbox", n.name = e.fieldName, s && n.setAttribute("checked", true), n.setAttribute("exportValue", e.exportValue), n.tabIndex = 0, n.addEventListener("change", (r) => {
        const { name: a, checked: o } = r.target;
        for (const l of this._getElementsByName(a, i)) {
          const h = o && l.exportValue === e.exportValue;
          l.domElement && (l.domElement.checked = h), t.setValue(l.id, {
            value: h
          });
        }
        t.setValue(i, {
          value: o
        });
      }), n.addEventListener("resetform", (r) => {
        const a = e.defaultFieldValue || "Off";
        r.target.checked = a === e.exportValue;
      }), this.enableScripting && this.hasJSActions && (n.addEventListener("updatefromsandbox", (r) => {
        const a = {
          value(o) {
            o.target.checked = o.detail.value !== "Off", t.setValue(i, {
              value: o.target.checked
            });
          }
        };
        this._dispatchEventFromSandbox(a, r);
      }), this._setEventListeners(n, null, [
        [
          "change",
          "Validate"
        ],
        [
          "change",
          "Action"
        ],
        [
          "focus",
          "Focus"
        ],
        [
          "blur",
          "Blur"
        ],
        [
          "mousedown",
          "Mouse Down"
        ],
        [
          "mouseenter",
          "Mouse Enter"
        ],
        [
          "mouseleave",
          "Mouse Exit"
        ],
        [
          "mouseup",
          "Mouse Up"
        ]
      ], (r) => r.target.checked)), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
    }
  }
  class ga extends le {
    constructor(t) {
      super(t, {
        isRenderable: t.renderForms
      });
    }
    render() {
      this.container.classList.add("buttonWidgetAnnotation", "radioButton");
      const t = this.annotationStorage, e = this.data, i = e.id;
      let s = t.getValue(i, {
        value: e.buttonValue !== null && e.fieldValue === e.buttonValue
      }).value;
      if (typeof s == "string" && (s = s !== e.buttonValue, t.setValue(i, {
        value: s
      })), s) for (const r of this._getElementsByName(e.fieldName, i)) t.setValue(r.id, {
        value: false
      });
      const n = document.createElement("input");
      if (ae.add(n), n.setAttribute("data-element-id", i), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "radio", n.name = e.fieldName, s && n.setAttribute("checked", true), n.tabIndex = 0, n.addEventListener("change", (r) => {
        const { name: a, checked: o } = r.target;
        for (const l of this._getElementsByName(a, i)) t.setValue(l.id, {
          value: false
        });
        t.setValue(i, {
          value: o
        });
      }), n.addEventListener("resetform", (r) => {
        const a = e.defaultFieldValue;
        r.target.checked = a != null && a === e.buttonValue;
      }), this.enableScripting && this.hasJSActions) {
        const r = e.buttonValue;
        n.addEventListener("updatefromsandbox", (a) => {
          const o = {
            value: (l) => {
              const h = r === l.detail.value;
              for (const c of this._getElementsByName(l.target.name)) {
                const d = h && c.id === i;
                c.domElement && (c.domElement.checked = d), t.setValue(c.id, {
                  value: d
                });
              }
            }
          };
          this._dispatchEventFromSandbox(o, a);
        }), this._setEventListeners(n, null, [
          [
            "change",
            "Validate"
          ],
          [
            "change",
            "Action"
          ],
          [
            "focus",
            "Focus"
          ],
          [
            "blur",
            "Blur"
          ],
          [
            "mousedown",
            "Mouse Down"
          ],
          [
            "mouseenter",
            "Mouse Enter"
          ],
          [
            "mouseleave",
            "Mouse Exit"
          ],
          [
            "mouseup",
            "Mouse Up"
          ]
        ], (a) => a.target.checked);
      }
      return this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
    }
  }
  class ma extends is {
    constructor(t) {
      super(t, {
        ignoreBorder: t.data.hasAppearance
      });
    }
    render() {
      const t = super.render();
      t.classList.add("buttonWidgetAnnotation", "pushButton");
      const e = t.lastChild;
      return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (i) => {
        this._dispatchEventFromSandbox({}, i);
      })), t;
    }
  }
  class ba extends le {
    constructor(t) {
      super(t, {
        isRenderable: t.renderForms
      });
    }
    render() {
      this.container.classList.add("choiceWidgetAnnotation");
      const t = this.annotationStorage, e = this.data.id, i = t.getValue(e, {
        value: this.data.fieldValue
      }), s = document.createElement("select");
      ae.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, this._setRequired(s, this.data.required), s.name = this.data.fieldName, s.tabIndex = 0;
      let n = this.data.combo && this.data.options.length > 0;
      this.data.combo || (s.size = this.data.options.length, this.data.multiSelect && (s.multiple = true)), s.addEventListener("resetform", (c) => {
        const d = this.data.defaultFieldValue;
        for (const p of s.options) p.selected = p.value === d;
      });
      const r = (c, d) => {
        const p = d.replaceAll(" ", "\xA0");
        c.textContent = p, p !== d && c.setAttribute("display-value", d);
      };
      for (const c of this.data.options) {
        const d = document.createElement("option");
        r(d, c.displayValue), d.value = c.exportValue, i.value.includes(c.exportValue) && (d.setAttribute("selected", true), n = false), s.append(d);
      }
      let a = null;
      if (n) {
        const c = document.createElement("option");
        c.value = " ", c.setAttribute("hidden", true), c.setAttribute("selected", true), s.prepend(c), a = () => {
          c.remove(), s.removeEventListener("input", a), a = null;
        }, s.addEventListener("input", a);
      }
      const o = (c) => {
        const d = c ? "value" : "textContent", { options: p, multiple: m } = s;
        return m ? Array.prototype.filter.call(p, (b) => b.selected).map((b) => b[d]) : p.selectedIndex === -1 ? null : p[p.selectedIndex][d];
      };
      let l = o(false);
      const h = (c) => {
        const d = c.target.options;
        return Array.prototype.map.call(d, (p) => ({
          displayValue: p.getAttribute("display-value") || p.textContent,
          exportValue: p.value
        }));
      };
      return this.enableScripting && this.hasJSActions ? (s.addEventListener("updatefromsandbox", (c) => {
        const d = {
          value(p) {
            a?.();
            const m = p.detail.value, b = new Set(Array.isArray(m) ? m : [
              m
            ]);
            for (const y of s.options) y.selected = b.has(y.value);
            t.setValue(e, {
              value: o(true)
            }), l = o(false);
          },
          multipleSelection(p) {
            s.multiple = true;
          },
          remove(p) {
            const m = s.options, b = p.detail.remove;
            m[b].selected = false, s.remove(b), m.length > 0 && Array.prototype.findIndex.call(m, (w) => w.selected) === -1 && (m[0].selected = true), t.setValue(e, {
              value: o(true),
              items: h(p)
            }), l = o(false);
          },
          clear(p) {
            for (; s.length !== 0; ) s.remove(0);
            t.setValue(e, {
              value: null,
              items: []
            }), l = o(false);
          },
          insert(p) {
            const { index: m, displayValue: b, exportValue: y } = p.detail.insert, w = s.children[m], v = document.createElement("option");
            r(v, b), v.value = y, w ? w.before(v) : s.append(v), t.setValue(e, {
              value: o(true),
              items: h(p)
            }), l = o(false);
          },
          items(p) {
            const { items: m } = p.detail;
            for (; s.length !== 0; ) s.remove(0);
            for (const b of m) {
              const { displayValue: y, exportValue: w } = b, v = document.createElement("option");
              r(v, y), v.value = w, s.append(v);
            }
            s.options.length > 0 && (s.options[0].selected = true), t.setValue(e, {
              value: o(true),
              items: h(p)
            }), l = o(false);
          },
          indices(p) {
            const m = new Set(p.detail.indices);
            for (const b of p.target.options) b.selected = m.has(b.index);
            t.setValue(e, {
              value: o(true)
            }), l = o(false);
          },
          editable(p) {
            p.target.disabled = !p.detail.editable;
          }
        };
        this._dispatchEventFromSandbox(d, c);
      }), s.addEventListener("input", (c) => {
        const d = o(true), p = o(false);
        t.setValue(e, {
          value: d
        }), c.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: e,
            name: "Keystroke",
            value: l,
            change: p,
            changeEx: d,
            willCommit: false,
            commitKey: 1,
            keyDown: false
          }
        });
      }), this._setEventListeners(s, null, [
        [
          "focus",
          "Focus"
        ],
        [
          "blur",
          "Blur"
        ],
        [
          "mousedown",
          "Mouse Down"
        ],
        [
          "mouseenter",
          "Mouse Enter"
        ],
        [
          "mouseleave",
          "Mouse Exit"
        ],
        [
          "mouseup",
          "Mouse Up"
        ],
        [
          "input",
          "Action"
        ],
        [
          "input",
          "Validate"
        ]
      ], (c) => c.target.value)) : s.addEventListener("input", function(c) {
        t.setValue(e, {
          value: o(true)
        });
      }), this.data.combo && this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
    }
  }
  class Gi extends ot {
    constructor(t) {
      const { data: e, elements: i, parent: s } = t, n = !!s._commentManager;
      if (super(t, {
        isRenderable: !n && ot._hasPopupData(e)
      }), this.elements = i, n && ot._hasPopupData(e)) {
        const r = this.popup = this.#t();
        for (const a of i) a.popup = r;
      } else this.popup = null;
    }
    #t() {
      return new ya({
        container: this.container,
        color: this.data.color,
        titleObj: this.data.titleObj,
        modificationDate: this.data.modificationDate || this.data.creationDate,
        contentsObj: this.data.contentsObj,
        richText: this.data.richText,
        rect: this.data.rect,
        parentRect: this.data.parentRect || null,
        parent: this.parent,
        elements: this.elements,
        open: this.data.open,
        commentManager: this.parent._commentManager
      });
    }
    render() {
      const { container: t } = this;
      t.classList.add("popupAnnotation"), t.role = "comment";
      const e = this.popup = this.#t(), i = [];
      for (const s of this.elements) s.popup = e, s.container.ariaHasPopup = "dialog", i.push(s.data.id), s.addHighlightArea();
      return this.container.setAttribute("aria-controls", i.map((s) => `${ge}${s}`).join(",")), this.container;
    }
  }
  class ya {
    #t = null;
    #e = this.#U.bind(this);
    #i = this.#B.bind(this);
    #s = this.#v.bind(this);
    #n = this.#_.bind(this);
    #a = null;
    #r = null;
    #o = null;
    #h = null;
    #l = null;
    #u = null;
    #d = null;
    #p = false;
    #m = null;
    #g = null;
    #c = null;
    #f = null;
    #y = null;
    #A = null;
    #b = null;
    #E = null;
    #S = null;
    #w = null;
    #C = false;
    #x = null;
    #T = null;
    constructor({ container: t, color: e, elements: i, titleObj: s, modificationDate: n, contentsObj: r, richText: a, parent: o, rect: l, parentRect: h, open: c, commentManager: d = null }) {
      this.#r = t, this.#S = s, this.#o = r, this.#E = a, this.#u = o, this.#a = e, this.#b = l, this.#d = h, this.#l = i, this.#t = d, this.#x = i[0], this.#h = Ri.toDateObject(n), this.trigger = i.flatMap((p) => p.getElementsToTriggerPopup()), d || (this.#M(), this.#r.hidden = true, c && this.#_());
    }
    #M() {
      if (this.#g) return;
      this.#g = new AbortController();
      const { signal: t } = this.#g;
      for (const e of this.trigger) e.addEventListener("click", this.#n, {
        signal: t
      }), e.addEventListener("pointerenter", this.#s, {
        signal: t
      }), e.addEventListener("pointerleave", this.#i, {
        signal: t
      }), e.classList.add("popupTriggerArea");
      for (const e of this.#l) e.container?.addEventListener("keydown", this.#e, {
        signal: t
      });
    }
    #P() {
      const t = this.#l.find((e) => e.hasCommentButton);
      t && (this.#y = t._normalizePoint(t.commentButtonPosition));
    }
    renderCommentButton() {
      if (this.#f) {
        this.#f.parentNode || this.#x.container.after(this.#f);
        return;
      }
      if (this.#y || this.#P(), !this.#y) return;
      const { signal: t } = this.#g = new AbortController(), e = this.#x.hasOwnCommentButton, i = () => {
        this.#t.toggleCommentPopup(this, true, void 0, !e);
      }, s = () => {
        this.#t.toggleCommentPopup(this, false, true, !e);
      }, n = () => {
        this.#t.toggleCommentPopup(this, false, false);
      };
      if (e) {
        this.#f = this.#x.container;
        for (const r of this.trigger) r.ariaHasPopup = "dialog", r.ariaControls = "commentPopup", r.addEventListener("keydown", this.#e, {
          signal: t
        }), r.addEventListener("click", i, {
          signal: t
        }), r.addEventListener("pointerenter", s, {
          signal: t
        }), r.addEventListener("pointerleave", n, {
          signal: t
        }), r.classList.add("popupTriggerArea");
      } else {
        const r = this.#f = document.createElement("button");
        r.className = "annotationCommentButton";
        const a = this.#x.container;
        r.style.zIndex = parseInt(a.style.zIndex, 10) + 1, r.tabIndex = 0, r.ariaHasPopup = "dialog", r.ariaControls = "commentPopup", r.setAttribute("data-l10n-id", "pdfjs-show-comment-button"), this.#F(), this.#k(), r.addEventListener("keydown", this.#e, {
          signal: t
        }), r.addEventListener("click", i, {
          signal: t
        }), r.addEventListener("pointerenter", s, {
          signal: t
        }), r.addEventListener("pointerleave", n, {
          signal: t
        }), a.after(r);
      }
    }
    #k() {
      if (this.#x.extraPopupElement && !this.#x.editor) return;
      this.#f || this.renderCommentButton();
      const [t, e] = this.#y, { style: i } = this.#f;
      i.left = `calc(${t}%)`, i.top = `calc(${e}% - var(--comment-button-dim))`;
    }
    #F() {
      this.#x.extraPopupElement || (this.#f || this.renderCommentButton(), this.#f.style.backgroundColor = this.commentButtonColor || "");
    }
    get commentButtonColor() {
      const { color: t, opacity: e } = this.#x.commentData;
      return t ? this.#u._commentManager.makeCommentColor(t, e) : null;
    }
    focusCommentButton() {
      setTimeout(() => {
        this.#f?.focus();
      }, 0);
    }
    getData() {
      const { richText: t, color: e, opacity: i, creationDate: s, modificationDate: n } = this.#x.commentData;
      return {
        contentsObj: {
          str: this.comment
        },
        richText: t,
        color: e,
        opacity: i,
        creationDate: s,
        modificationDate: n
      };
    }
    get elementBeforePopup() {
      return this.#f;
    }
    get comment() {
      return this.#T ||= this.#x.commentText, this.#T;
    }
    set comment(t) {
      t !== this.comment && (this.#x.commentText = this.#T = t);
    }
    focus() {
      this.#x.container?.focus();
    }
    get parentBoundingClientRect() {
      return this.#x.layer.getBoundingClientRect();
    }
    setCommentButtonStates({ selected: t, hasPopup: e }) {
      this.#f && (this.#f.classList.toggle("selected", t), this.#f.ariaExpanded = e);
    }
    setSelectedCommentButton(t) {
      this.#f.classList.toggle("selected", t);
    }
    get commentPopupPosition() {
      if (this.#A) return this.#A;
      const { x: t, y: e, height: i } = this.#f.getBoundingClientRect(), { x: s, y: n, width: r, height: a } = this.#x.layer.getBoundingClientRect();
      return [
        (t - s) / r,
        (e + i - n) / a
      ];
    }
    set commentPopupPosition(t) {
      this.#A = t;
    }
    hasDefaultPopupPosition() {
      return this.#A === null;
    }
    get commentButtonPosition() {
      return this.#y;
    }
    get commentButtonWidth() {
      return this.#f.getBoundingClientRect().width / this.parentBoundingClientRect.width;
    }
    editComment(t) {
      const [e, i] = this.#A || this.commentButtonPosition.map((l) => l / 100), s = this.parentBoundingClientRect, { x: n, y: r, width: a, height: o } = s;
      this.#t.showDialog(null, this, n + e * a, r + i * o, {
        ...t,
        parentDimensions: s
      });
    }
    render() {
      if (this.#m) return;
      const t = this.#m = document.createElement("div");
      if (t.className = "popup", this.#a) {
        const i = t.style.outlineColor = D.makeHexColor(...this.#a);
        t.style.backgroundColor = `color-mix(in srgb, ${i} 30%, white)`;
      }
      const e = document.createElement("span");
      if (e.className = "header", this.#S?.str) {
        const i = document.createElement("span");
        i.className = "title", e.append(i), { dir: i.dir, str: i.textContent } = this.#S;
      }
      if (t.append(e), this.#h) {
        const i = document.createElement("time");
        i.className = "popupDate", i.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), i.setAttribute("data-l10n-args", JSON.stringify({
          dateObj: this.#h.valueOf()
        })), i.dateTime = this.#h.toISOString(), e.append(i);
      }
      Vs({
        html: this.#L || this.#o.str,
        dir: this.#o?.dir,
        className: "popupContent"
      }, t), this.#r.append(t);
    }
    get #L() {
      const t = this.#E, e = this.#o;
      return t?.str && (!e?.str || e.str === t.str) && this.#E.html || null;
    }
    get #D() {
      return this.#L?.attributes?.style?.fontSize || 0;
    }
    get #R() {
      return this.#L?.attributes?.style?.color || null;
    }
    #O(t) {
      const e = [], i = {
        str: t,
        html: {
          name: "div",
          attributes: {
            dir: "auto"
          },
          children: [
            {
              name: "p",
              children: e
            }
          ]
        }
      }, s = {
        style: {
          color: this.#R,
          fontSize: this.#D ? `calc(${this.#D}px * var(--total-scale-factor))` : ""
        }
      };
      for (const n of t.split(`
`)) e.push({
        name: "span",
        value: n,
        attributes: s
      });
      return i;
    }
    #U(t) {
      t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && this.#p) && this.#_();
    }
    updateEdited({ rect: t, popup: e, deleted: i }) {
      if (this.#t) {
        i ? (this.remove(), this.#T = null) : e && (e.deleted ? this.remove() : (this.#F(), this.#T = e.text)), t && (this.#y = null, this.#P(), this.#k());
        return;
      }
      if (i || e?.deleted) {
        this.remove();
        return;
      }
      this.#M(), this.#w ||= {
        contentsObj: this.#o,
        richText: this.#E
      }, t && (this.#c = null), e && e.text && (this.#E = this.#O(e.text), this.#h = Ri.toDateObject(e.date), this.#o = null), this.#m?.remove(), this.#m = null;
    }
    resetEdited() {
      this.#w && ({ contentsObj: this.#o, richText: this.#E } = this.#w, this.#w = null, this.#m?.remove(), this.#m = null, this.#c = null);
    }
    remove() {
      if (this.#g?.abort(), this.#g = null, this.#m?.remove(), this.#m = null, this.#C = false, this.#p = false, this.#f?.remove(), this.#f = null, this.trigger) for (const t of this.trigger) t.classList.remove("popupTriggerArea");
    }
    #V() {
      if (this.#c !== null) return;
      const { page: { view: t }, viewport: { rawDims: { pageWidth: e, pageHeight: i, pageX: s, pageY: n } } } = this.#u;
      let r = !!this.#d, a = r ? this.#d : this.#b;
      for (const m of this.#l) if (!a || D.intersect(m.data.rect, a) !== null) {
        a = m.data.rect, r = true;
        break;
      }
      const o = D.normalizeRect([
        a[0],
        t[3] - a[1] + t[1],
        a[2],
        t[3] - a[3] + t[1]
      ]), h = r ? a[2] - a[0] + 5 : 0, c = o[0] + h, d = o[1];
      this.#c = [
        100 * (c - s) / e,
        100 * (d - n) / i
      ];
      const { style: p } = this.#r;
      p.left = `${this.#c[0]}%`, p.top = `${this.#c[1]}%`;
    }
    #_() {
      if (this.#t) {
        this.#t.toggleCommentPopup(this, false);
        return;
      }
      this.#p = !this.#p, this.#p ? (this.#v(), this.#r.addEventListener("click", this.#n), this.#r.addEventListener("keydown", this.#e)) : (this.#B(), this.#r.removeEventListener("click", this.#n), this.#r.removeEventListener("keydown", this.#e));
    }
    #v() {
      this.#m || this.render(), this.isVisible ? this.#p && this.#r.classList.add("focused") : (this.#V(), this.#r.hidden = false, this.#r.style.zIndex = parseInt(this.#r.style.zIndex, 10) + 1e3);
    }
    #B() {
      this.#r.classList.remove("focused"), !(this.#p || !this.isVisible) && (this.#r.hidden = true, this.#r.style.zIndex = parseInt(this.#r.style.zIndex, 10) - 1e3);
    }
    forceHide() {
      this.#C = this.isVisible, this.#C && (this.#r.hidden = true);
    }
    maybeShow() {
      this.#t || (this.#M(), this.#C && (this.#m || this.#v(), this.#C = false, this.#r.hidden = false));
    }
    get isVisible() {
      return this.#t ? false : this.#r.hidden === false;
    }
  }
  class hn extends ot {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = j.FREETEXT;
    }
    render() {
      if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
        const t = this.contentElement = document.createElement("div");
        t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
        for (const e of this.textContent) {
          const i = document.createElement("span");
          i.textContent = e, t.append(i);
        }
        this.container.append(t);
      }
      return !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this._editOnDoubleClick(), this.container;
    }
  }
  class Aa extends ot {
    #t = null;
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
    }
    render() {
      this.container.classList.add("lineAnnotation");
      const { data: t, width: e, height: i } = this, s = this.svgFactory.create(e, i, true), n = this.#t = this.svgFactory.createElement("svg:line");
      return n.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]), n.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]), n.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]), n.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]), n.setAttribute("stroke-width", t.borderStyle.width || 1), n.setAttribute("stroke", "transparent"), n.setAttribute("fill", "transparent"), s.append(n), this.container.append(s), !t.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container;
    }
    getElementsToTriggerPopup() {
      return this.#t;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  class wa extends ot {
    #t = null;
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
    }
    render() {
      this.container.classList.add("squareAnnotation");
      const { data: t, width: e, height: i } = this, s = this.svgFactory.create(e, i, true), n = t.borderStyle.width, r = this.#t = this.svgFactory.createElement("svg:rect");
      return r.setAttribute("x", n / 2), r.setAttribute("y", n / 2), r.setAttribute("width", e - n), r.setAttribute("height", i - n), r.setAttribute("stroke-width", n || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), s.append(r), this.container.append(s), !t.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container;
    }
    getElementsToTriggerPopup() {
      return this.#t;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  class va extends ot {
    #t = null;
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
    }
    render() {
      this.container.classList.add("circleAnnotation");
      const { data: t, width: e, height: i } = this, s = this.svgFactory.create(e, i, true), n = t.borderStyle.width, r = this.#t = this.svgFactory.createElement("svg:ellipse");
      return r.setAttribute("cx", e / 2), r.setAttribute("cy", i / 2), r.setAttribute("rx", e / 2 - n / 2), r.setAttribute("ry", i / 2 - n / 2), r.setAttribute("stroke-width", n || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), s.append(r), this.container.append(s), !t.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container;
    }
    getElementsToTriggerPopup() {
      return this.#t;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  class cn extends ot {
    #t = null;
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const { data: { rect: t, vertices: e, borderStyle: i, popupRef: s }, width: n, height: r } = this;
      if (!e) return this.container;
      const a = this.svgFactory.create(n, r, true);
      let o = [];
      for (let h = 0, c = e.length; h < c; h += 2) {
        const d = e[h] - t[0], p = t[3] - e[h + 1];
        o.push(`${d},${p}`);
      }
      o = o.join(" ");
      const l = this.#t = this.svgFactory.createElement(this.svgElementName);
      return l.setAttribute("points", o), l.setAttribute("stroke-width", i.width || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), a.append(l), this.container.append(a), !s && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container;
    }
    getElementsToTriggerPopup() {
      return this.#t;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  class xa extends cn {
    constructor(t) {
      super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
    }
  }
  class Ea extends ot {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
    }
    render() {
      return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container;
    }
  }
  class ss extends ot {
    #t = null;
    #e = [];
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? j.HIGHLIGHT : j.INK;
    }
    #i(t, e) {
      switch (t) {
        case 90:
          return {
            transform: `rotate(90) translate(${-e[0]},${e[1]}) scale(1,-1)`,
            width: e[3] - e[1],
            height: e[2] - e[0]
          };
        case 180:
          return {
            transform: `rotate(180) translate(${-e[2]},${e[1]}) scale(1,-1)`,
            width: e[2] - e[0],
            height: e[3] - e[1]
          };
        case 270:
          return {
            transform: `rotate(270) translate(${-e[2]},${e[3]}) scale(1,-1)`,
            width: e[3] - e[1],
            height: e[2] - e[0]
          };
        default:
          return {
            transform: `translate(${-e[0]},${e[3]}) scale(1,-1)`,
            width: e[2] - e[0],
            height: e[3] - e[1]
          };
      }
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const { data: { rect: t, rotation: e, inkLists: i, borderStyle: s, popupRef: n } } = this, { transform: r, width: a, height: o } = this.#i(e, t), l = this.svgFactory.create(a, o, true), h = this.#t = this.svgFactory.createElement("svg:g");
      l.append(h), h.setAttribute("stroke-width", s.width || 1), h.setAttribute("stroke-linecap", "round"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", 10), h.setAttribute("stroke", "transparent"), h.setAttribute("fill", "transparent"), h.setAttribute("transform", r);
      for (let c = 0, d = i.length; c < d; c++) {
        const p = this.svgFactory.createElement(this.svgElementName);
        this.#e.push(p), p.setAttribute("points", i[c].join(",")), h.append(p);
      }
      return !n && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container.append(l), this._editOnDoubleClick(), this.container;
    }
    updateEdited(t) {
      super.updateEdited(t);
      const { thickness: e, points: i, rect: s } = t, n = this.#t;
      if (e >= 0 && n.setAttribute("stroke-width", e || 1), i) for (let r = 0, a = this.#e.length; r < a; r++) this.#e[r].setAttribute("points", i[r].join(","));
      if (s) {
        const { transform: r, width: a, height: o } = this.#i(this.data.rotation, s);
        n.parentElement.setAttribute("viewBox", `0 0 ${a} ${o}`), n.setAttribute("transform", r);
      }
    }
    getElementsToTriggerPopup() {
      return this.#e;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  class dn extends ot {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      }), this.annotationEditorType = j.HIGHLIGHT;
    }
    render() {
      const { data: { overlaidText: t, popupRef: e } } = this;
      if (!e && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), t) {
        const i = document.createElement("mark");
        i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
      }
      return this.container;
    }
  }
  class Sa extends ot {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      });
    }
    render() {
      const { data: { overlaidText: t, popupRef: e } } = this;
      if (!e && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container.classList.add("underlineAnnotation"), t) {
        const i = document.createElement("u");
        i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
      }
      return this.container;
    }
  }
  class Ca extends ot {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      });
    }
    render() {
      const { data: { overlaidText: t, popupRef: e } } = this;
      if (!e && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container.classList.add("squigglyAnnotation"), t) {
        const i = document.createElement("u");
        i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
      }
      return this.container;
    }
  }
  class _a extends ot {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      });
    }
    render() {
      const { data: { overlaidText: t, popupRef: e } } = this;
      if (!e && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container.classList.add("strikeoutAnnotation"), t) {
        const i = document.createElement("s");
        i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
      }
      return this.container;
    }
  }
  class un extends ot {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), this.annotationEditorType = j.STAMP;
    }
    render() {
      return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this._editOnDoubleClick(), this.container;
    }
  }
  class Ta extends ot {
    #t = null;
    constructor(t) {
      super(t, {
        isRenderable: true
      });
      const { fileId: e, file: i } = this.data;
      this.filename = i.filename, this.content = i.content, this.fileId = e, this.linkService.eventBus?.dispatch("fileattachmentannotation", {
        source: this,
        attachmentId: this.fileId,
        ...i
      });
    }
    render() {
      this.container.classList.add("fileAttachmentAnnotation");
      const { container: t, data: e } = this;
      let i;
      e.hasAppearance || e.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(e.name) ? "paperclip" : "pushpin"}.svg`, e.fillAlpha && e.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(e.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", this.#e.bind(this)), this.#t = i;
      const { isMac: s } = Z.platform;
      return t.addEventListener("keydown", (n) => {
        n.key === "Enter" && (s ? n.metaKey : n.ctrlKey) && this.#e();
      }), !e.popupRef && this.hasPopupData ? (this.hasOwnCommentButton = true, this._createPopup()) : i.classList.add("popupTriggerArea"), t.append(i), t;
    }
    getElementsToTriggerPopup() {
      return this.#t;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
    async #e() {
      const { fileId: t, filename: e, content: i } = this, s = await this.linkService.getAttachmentContent(t) || i;
      s && this.downloadManager?.openOrDownloadData(s, e);
    }
  }
  class fn extends ot {
    #t = new AbortController();
    #e = null;
    #i = null;
    constructor(t) {
      super(t, {
        isRenderable: !!t.data.richMedia
      });
    }
    render() {
      this.container.classList.add("mediaAnnotation");
      const { filename: t } = this.data.richMedia, e = document.createElement("button");
      return e.className = "mediaPlayButton", e.type = "button", e.title = e.ariaLabel = t, e.addEventListener("click", () => this.#s(e), {
        signal: this.#t.signal
      }), this.container.append(e), this.container;
    }
    async #s(t) {
      const { fileId: e, filename: i, contentType: s } = this.data.richMedia;
      t.disabled = true;
      let n;
      try {
        n = await this.linkService.getAttachmentContent(e);
      } catch {
        return;
      } finally {
        t.disabled = false;
      }
      if (!n || !t.isConnected) return;
      const { signal: r } = this.#t, a = URL.createObjectURL(new Blob([
        n
      ], {
        type: s
      }));
      this.#e = a;
      const o = s.startsWith("audio/"), l = document.createElement(o ? "audio" : "video");
      if (this.#i = l, l.className = "mediaContent", this._setBackgroundColor(l), l.src = a, l.title = i, l.controls = true, l.autoplay = true, l.tabIndex = 0, o) {
        let h = false, c = false;
        const d = () => {
          l.controls = h || c;
        };
        this.container.addEventListener("pointerenter", () => {
          h = true, d();
        }, {
          signal: r
        }), this.container.addEventListener("pointerleave", () => {
          h = false, d();
        }, {
          signal: r
        }), this.container.addEventListener("focusin", () => {
          c = true, d();
        }, {
          signal: r
        }), this.container.addEventListener("focusout", () => {
          c = false, d();
        }, {
          signal: r
        });
      }
      l.addEventListener("emptied", () => this.#n(a), {
        once: true,
        signal: r
      }), t.replaceWith(l), l.play().catch(() => {
      });
    }
    #n(t = this.#e) {
      t && t === this.#e && (URL.revokeObjectURL(t), this.#e = null);
    }
    destroy() {
      this.#t.abort(), this.#i && (this.#i.pause(), this.#i.removeAttribute("src"), this.#i.load(), this.#i = null), this.#n();
    }
  }
  ns = class {
    #t = null;
    #e = null;
    #i = null;
    #s = /* @__PURE__ */ new Map();
    #n = null;
    #a = null;
    #r = [];
    #o = false;
    zIndex = 0;
    constructor({ div: t, accessibilityManager: e, annotationCanvasMap: i, annotationEditorUIManager: s, page: n, viewport: r, structTreeLayer: a, commentManager: o, linkService: l, annotationStorage: h }) {
      this.div = t, this.#t = e, this.#e = i, this.#n = a || null, this.#a = l || null, this.#i = h || new Ji(), this.page = n, this.viewport = r, this._annotationEditorUIManager = s, this._commentManager = o || null;
    }
    hasEditableAnnotations() {
      return this.#s.size > 0;
    }
    async render(t) {
      const { annotations: e, optionalContentConfig: i } = t, s = this.div;
      re(s, this.viewport);
      const n = /* @__PURE__ */ new Map(), r = [], a = {
        data: null,
        layer: s,
        linkService: this.#a,
        downloadManager: t.downloadManager,
        imageResourcesPath: t.imageResourcesPath || "",
        renderForms: t.renderForms !== false,
        svgFactory: new ii(),
        annotationStorage: this.#i,
        enableComment: t.enableComment === true,
        enableScripting: t.enableScripting === true,
        hasJSActions: t.hasJSActions,
        fieldObjects: t.fieldObjects,
        parent: this,
        elements: null
      };
      for (const o of e) {
        if (o.noHTML) continue;
        const l = o.annotationType === ft.POPUP;
        if (l) {
          const d = n.get(o.id);
          if (!d) continue;
          if (!this._commentManager) {
            r.push(o);
            continue;
          }
          a.elements = d;
        } else if (o.rect[2] === o.rect[0] || o.rect[3] === o.rect[1]) continue;
        a.data = o;
        const h = Mi.create(a);
        if (!h.isRenderable) continue;
        l || (this.#r.push(h), o.popupRef && n.getOrInsertComputed(o.popupRef, Re).push(h));
        const c = h.render();
        o.hidden && (c.style.visibility = "hidden"), h.updateOC(i), h._isEditable && (this.#s.set(h.data.id, h), this._annotationEditorUIManager?.renderAnnotationElement(h));
      }
      await this.#h();
      for (const o of r) {
        const l = a.elements = n.get(o.id);
        a.data = o;
        const h = Mi.create(a);
        if (!h.isRenderable) continue;
        const c = h.render();
        h.contentElement.id = `${ge}${o.id}`, o.hidden && (c.style.visibility = "hidden"), l.at(-1).container.after(c);
      }
      this.#l();
    }
    async #h() {
      if (this.#r.length === 0) return;
      this.div.replaceChildren();
      const t = [];
      if (!this.#o) {
        this.#o = true;
        for (const { contentElement: i, data: { id: s } } of this.#r) {
          const n = i.id = `${ge}${s}`;
          t.push(this.#n?.getAriaAttributes(n).then((r) => {
            if (r) for (const [a, o] of r) i.setAttribute(a, o);
          }));
        }
      }
      this.#r.sort(({ data: { rect: [i, s, n, r] } }, { data: { rect: [a, o, l, h] } }) => {
        if (i === n && s === r) return 1;
        if (a === l && o === h) return -1;
        const c = r, d = s, p = (s + r) / 2, m = h, b = o, y = (o + h) / 2;
        if (p >= m && y <= d) return -1;
        if (y >= c && p <= b) return 1;
        const w = (i + n) / 2, v = (a + l) / 2;
        return w - v;
      });
      const e = document.createDocumentFragment();
      for (const i of this.#r) e.append(i.container), this._commentManager ? (i.extraPopupElement?.popup || i.popup)?.renderCommentButton() : i.extraPopupElement && e.append(i.extraPopupElement.render());
      if (this.div.append(e), await Promise.all(t), this.#t) for (const i of this.#r) this.#t.addPointerInTextLayer(i.contentElement, false);
    }
    async addLinkAnnotations(t) {
      const e = {
        data: null,
        layer: this.div,
        linkService: this.#a,
        svgFactory: new ii(),
        parent: this
      };
      for (const i of t) {
        i.borderStyle ||= ns._defaultBorderStyle, e.data = i;
        const s = Mi.create(e);
        s.isRenderable && (s.render(), s.contentElement.id = `${ge}${i.id}`, this.#r.push(s));
      }
      await this.#h();
    }
    update({ viewport: t, optionalContentConfig: e }) {
      const i = this.div;
      this.viewport = t, re(i, {
        rotation: t.rotation
      });
      for (const s of this.#r) s.updateOC(e);
      this.#l(), i.hidden = false;
    }
    destroy() {
      for (const t of this.#r) t.destroy?.(), this.#t?.removePointerInTextLayer(t.contentElement);
      this.#r.length = 0, this.#s.clear(), this.div.replaceChildren();
    }
    #l() {
      if (!this.#e) return;
      const t = this.div;
      for (const [e, i] of this.#e) {
        const s = t.querySelector(`[data-annotation-id="${e}"]`);
        if (!s) continue;
        if (Array.isArray(i)) for (const l of i) l.className = "annotationContent", l.ariaHidden = true;
        else i.className = "annotationContent", i.ariaHidden = true;
        const n = [];
        for (const l of s.children) l.nodeName === "CANVAS" && n.push(l);
        for (const l of n) l.remove();
        const r = Array.isArray(i) ? i[0] : i, { firstChild: a } = s;
        if (a ? a.classList.contains("annotationContent") ? a.after(r) : a.before(r) : s.append(r), Array.isArray(i)) {
          let l = r;
          for (let h = 1, c = i.length; h < c; h++) l.after(i[h]), l = i[h];
        }
        this.#e.delete(e);
        const o = this.#s.get(e);
        o && (o._hasNoCanvas ? (this._annotationEditorUIManager?.setMissingCanvas(e, s.id, i), o._hasNoCanvas = false) : o.canvas = i);
      }
    }
    refreshCanvases() {
      this.#l();
    }
    getEditableAnnotations() {
      return this.#s.values();
    }
    getEditableAnnotation(t) {
      return this.#s.get(t);
    }
    addFakeAnnotation(t) {
      const { div: e } = this, { id: i, rotation: s } = t, n = new ca({
        data: {
          id: i,
          rect: t.getPDFRect(),
          rotation: s
        },
        editor: t,
        layer: e,
        parent: this,
        enableComment: !!this._commentManager,
        linkService: this.#a,
        annotationStorage: this.#i
      });
      return n.render(), n.contentElement.id = `${ge}${i}`, n.createOrUpdatePopup(), this.#r.push(n), n;
    }
    removeAnnotation(t) {
      const e = this.#r.findIndex((s) => s.data.id === t);
      if (e < 0) return;
      const [i] = this.#r.splice(e, 1);
      this.#t?.removePointerInTextLayer(i.contentElement);
    }
    updateFakeAnnotations(t) {
      if (t.length !== 0) {
        for (const e of t) e.updateFakeAnnotationElement(this);
        this.#h();
      }
    }
    togglePointerEvents(t = false) {
      this.div.classList.toggle("disabled", !t);
    }
    static get _defaultBorderStyle() {
      return $(this, "_defaultBorderStyle", Object.freeze({
        width: 1,
        rawWidth: 1,
        style: ue.SOLID,
        dashArray: [
          3
        ],
        horizontalCornerRadius: 0,
        verticalCornerRadius: 0
      }));
    }
  };
  const Ye = /\r\n?|\n/g;
  class At extends O {
    #t = "";
    #e = `${this.id}-editor`;
    #i = null;
    #s;
    _colorPicker = null;
    static _freeTextDefaultContent = "";
    static _internalPadding = 0;
    static _defaultColor = null;
    static _defaultFontSize = 10;
    static get _keyboardManager() {
      const t = At.prototype, e = (n) => n.isEmpty(), i = Qt.TRANSLATE_SMALL, s = Qt.TRANSLATE_BIG;
      return $(this, "_keyboardManager", new kt([
        [
          [
            "ctrl+s",
            "mac+meta+s",
            "ctrl+p",
            "mac+meta+p"
          ],
          t.commitOrRemove,
          {
            bubbles: true
          }
        ],
        [
          [
            "ctrl+Enter",
            "mac+meta+Enter"
          ],
          t.commitOrRemove
        ],
        [
          [
            "Escape"
          ],
          t.commitOrRemove
        ],
        [
          [
            "ArrowLeft"
          ],
          t._translateEmpty,
          {
            args: [
              -i,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowLeft",
            "mac+shift+ArrowLeft"
          ],
          t._translateEmpty,
          {
            args: [
              -s,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowRight"
          ],
          t._translateEmpty,
          {
            args: [
              i,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowRight",
            "mac+shift+ArrowRight"
          ],
          t._translateEmpty,
          {
            args: [
              s,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowUp"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              -i
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowUp",
            "mac+shift+ArrowUp"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              -s
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowDown"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              i
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowDown",
            "mac+shift+ArrowDown"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              s
            ],
            checker: e
          }
        ]
      ]));
    }
    static _type = "freetext";
    static _editorType = j.FREETEXT;
    constructor(t) {
      super({
        ...t,
        name: "freeTextEditor"
      }), this.color = t.color || At._defaultColor || O._defaultLineColor, this.#s = t.fontSize || At._defaultFontSize, this.annotationElementId || this._uiManager.a11yAlert(O._l10nAlert.freetext), this.canAddComment = false;
    }
    static initialize(t, e) {
      O.initialize(t, e);
      const i = getComputedStyle(document.documentElement);
      this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
    }
    static updateDefaultParams(t, e) {
      switch (t) {
        case V.FREETEXT_SIZE:
          At._defaultFontSize = e;
          break;
        case V.FREETEXT_COLOR:
          At._defaultColor = e;
          break;
      }
    }
    updateParams(t, e) {
      switch (t) {
        case V.FREETEXT_SIZE:
          this.#n(e);
          break;
        case V.FREETEXT_COLOR:
          this.#a(e);
          break;
      }
    }
    static get defaultPropertiesToUpdate() {
      return [
        [
          V.FREETEXT_SIZE,
          At._defaultFontSize
        ],
        [
          V.FREETEXT_COLOR,
          At._defaultColor || O._defaultLineColor
        ]
      ];
    }
    get propertiesToUpdate() {
      return [
        [
          V.FREETEXT_SIZE,
          this.#s
        ],
        [
          V.FREETEXT_COLOR,
          this.color
        ]
      ];
    }
    get toolbarButtons() {
      return this._colorPicker ||= new Le(this), [
        [
          "colorPicker",
          this._colorPicker
        ]
      ];
    }
    get colorType() {
      return V.FREETEXT_COLOR;
    }
    #n(t) {
      const e = (s) => {
        this.editorDiv.style.fontSize = `calc(${s}px * var(--total-scale-factor))`, this.translate(0, -(s - this.#s) * this.parentScale), this.#s = s, this.#o();
      }, i = this.#s;
      this.addCommands({
        cmd: e.bind(this, t),
        undo: e.bind(this, i),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: true,
        type: V.FREETEXT_SIZE,
        overwriteIfSameType: true,
        keepUndo: true
      });
    }
    onUpdatedColor() {
      this.editorDiv.style.color = this.color, this._colorPicker?.update(this.color), super.onUpdatedColor();
    }
    #a(t) {
      const e = (s) => {
        this.color = s, this.onUpdatedColor();
      }, i = this.color;
      this.addCommands({
        cmd: e.bind(this, t),
        undo: e.bind(this, i),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: true,
        type: V.FREETEXT_COLOR,
        overwriteIfSameType: true,
        keepUndo: true
      });
    }
    _translateEmpty(t, e) {
      this._uiManager.translateSelectedEditors(t, e, true);
    }
    getInitialTranslation() {
      const t = this.parentScale;
      return [
        -At._internalPadding * t,
        -(At._internalPadding + this.#s) * t
      ];
    }
    rebuild() {
      this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
    }
    enableEditMode() {
      if (!super.enableEditMode()) return false;
      this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = true, this._isDraggable = false, this.div.removeAttribute("aria-activedescendant"), this.#i = new AbortController();
      const t = this._uiManager.combinedSignal(this.#i);
      return this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
        signal: t
      }), true;
    }
    disableEditMode() {
      return super.disableEditMode() ? (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = false, this.div.setAttribute("aria-activedescendant", this.#e), this._isDraggable = true, this.#i?.abort(), this.#i = null, this.div.focus({
        preventScroll: true
      }), this.isEditing = false, this.parent.div.classList.add("freetextEditing"), true) : false;
    }
    focusin(t) {
      this._focusEventsAllowed && (super.focusin(t), t.target !== this.editorDiv && this.editorDiv.focus());
    }
    onceAdded(t) {
      this.width || (this.enableEditMode(), t && this.editorDiv.focus(), this._initialOptions?.isCentered && this.center(), this._initialOptions = null);
    }
    isEmpty() {
      return !this.editorDiv || this.editorDiv.innerText.trim() === "";
    }
    remove() {
      this.isEditing = false, this.parent && (this.parent.setEditingState(true), this.parent.div.classList.add("freetextEditing")), super.remove();
    }
    #r() {
      const t = [];
      this.editorDiv.normalize();
      let e = null;
      for (const i of this.editorDiv.childNodes) e?.nodeType === Node.TEXT_NODE && i.nodeName === "BR" || (t.push(At.#h(i)), e = i);
      return t.join(`
`);
    }
    #o() {
      const [t, e] = this.parentDimensions;
      let i;
      if (this.isAttachedToDOM) i = this.div.getBoundingClientRect();
      else {
        const { currentLayer: s, div: n } = this, r = n.style.display, a = n.classList.contains("hidden");
        n.classList.remove("hidden"), n.style.display = "hidden", s.div.append(this.div), i = n.getBoundingClientRect(), n.remove(), n.style.display = r, n.classList.toggle("hidden", a);
      }
      this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / t, this.height = i.height / e) : (this.width = i.height / t, this.height = i.width / e), this.fixAndSetPosition();
    }
    commit() {
      if (!this.isInEditMode()) return;
      super.commit(), this.disableEditMode();
      const t = this.#t, e = this.#t = this.#r().trimEnd();
      if (t === e) return;
      const i = (s) => {
        if (this.#t = s, !s) {
          this.remove();
          return;
        }
        this.#l(), this._uiManager.rebuild(this), this.#o();
      };
      this.addCommands({
        cmd: () => {
          i(e);
        },
        undo: () => {
          i(t);
        },
        mustExec: false
      }), this.#o();
    }
    shouldGetKeyboardEvents() {
      return this.isInEditMode();
    }
    enterInEditMode() {
      this.enableEditMode(), this.editorDiv.focus();
    }
    keydown(t) {
      t.target === this.div && t.key === "Enter" && (this.enterInEditMode(), t.preventDefault());
    }
    editorDivKeydown(t) {
      At._keyboardManager.exec(this, t);
    }
    editorDivFocus(t) {
      this.isEditing = true;
    }
    editorDivBlur(t) {
      this.isEditing = false;
    }
    editorDivInput(t) {
      this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
    }
    disableEditing() {
      this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
    }
    enableEditing() {
      this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", true);
    }
    get canChangeContent() {
      return true;
    }
    render() {
      if (this.div) return this.div;
      let t, e;
      (this._isCopy || this.annotationElementId) && (t = this.x, e = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", this.#e), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = true;
      const { style: i } = this.editorDiv;
      if (i.fontSize = `calc(${this.#s}px * var(--total-scale-factor))`, i.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
        const [s, n] = this.parentDimensions;
        if (this.annotationElementId) {
          const { position: r } = this._initialData;
          let [a, o] = this.getInitialTranslation();
          [a, o] = this.pageTranslationToScreen(a, o);
          const [l, h] = this.pageDimensions, [c, d] = this.pageTranslation;
          let p, m;
          switch (this.rotation) {
            case 0:
              p = t + (r[0] - c) / l, m = e + this.height - (r[1] - d) / h;
              break;
            case 90:
              p = t + (r[0] - c) / l, m = e - (r[1] - d) / h, [a, o] = [
                o,
                -a
              ];
              break;
            case 180:
              p = t - this.width + (r[0] - c) / l, m = e - (r[1] - d) / h, [a, o] = [
                -a,
                -o
              ];
              break;
            case 270:
              p = t + (r[0] - c - this.height * h) / l, m = e + (r[1] - d - this.width * l) / h, [a, o] = [
                -o,
                a
              ];
              break;
          }
          this.setAt(p * s, m * n, a, o);
        } else this._moveAfterPaste(t, e);
        this.#l(), this._isDraggable = true, this.editorDiv.contentEditable = false;
      } else this._isDraggable = false, this.editorDiv.contentEditable = true;
      return this.div;
    }
    static #h(t) {
      return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(Ye, "");
    }
    editorDivPaste(t) {
      const e = t.clipboardData || window.clipboardData, { types: i } = e;
      if (i.length === 1 && i[0] === "text/plain") return;
      t.preventDefault();
      const s = At.#d(e.getData("text") || "").replaceAll(Ye, `
`);
      if (!s) return;
      const n = window.getSelection();
      if (!n.rangeCount) return;
      this.editorDiv.normalize(), n.deleteFromDocument();
      const r = n.getRangeAt(0);
      if (!s.includes(`
`)) {
        r.insertNode(document.createTextNode(s)), this.editorDiv.normalize(), n.collapseToStart();
        return;
      }
      const { startContainer: a, startOffset: o } = r, l = [], h = [];
      if (a.nodeType === Node.TEXT_NODE) {
        const p = a.parentElement;
        if (h.push(a.nodeValue.slice(o).replaceAll(Ye, "")), p !== this.editorDiv) {
          let m = l;
          for (const b of this.editorDiv.childNodes) {
            if (b === p) {
              m = h;
              continue;
            }
            m.push(At.#h(b));
          }
        }
        l.push(a.nodeValue.slice(0, o).replaceAll(Ye, ""));
      } else if (a === this.editorDiv) {
        let p = l, m = 0;
        for (const b of this.editorDiv.childNodes) m++ === o && (p = h), p.push(At.#h(b));
      }
      this.#t = `${l.join(`
`)}${s}${h.join(`
`)}`, this.#l();
      const c = new Range();
      let d = Math.sumPrecise(l.map((p) => p.length));
      for (const { firstChild: p } of this.editorDiv.childNodes) if (p.nodeType === Node.TEXT_NODE) {
        const m = p.nodeValue.length;
        if (d <= m) {
          c.setStart(p, d), c.setEnd(p, d);
          break;
        }
        d -= m;
      }
      n.removeAllRanges(), n.addRange(c);
    }
    #l() {
      if (this.editorDiv.replaceChildren(), !!this.#t) for (const t of this.#t.split(`
`)) {
        const e = document.createElement("div");
        e.append(t ? document.createTextNode(t) : document.createElement("br")), this.editorDiv.append(e);
      }
    }
    #u() {
      return this.#t.replaceAll("\xA0", " ");
    }
    static #d(t) {
      return t.replaceAll(" ", "\xA0");
    }
    get contentDiv() {
      return this.editorDiv;
    }
    getPDFRect() {
      const t = At._internalPadding * this.parentScale;
      return this.getRect(t, t);
    }
    static async deserialize(t, e, i) {
      let s = null;
      if (t instanceof hn) {
        const { data: { defaultAppearanceData: { fontSize: r, fontColor: a }, rect: o, rotation: l, id: h, popupRef: c, richText: d, contentsObj: p, creationDate: m, modificationDate: b }, textContent: y, textPosition: w, parent: { page: { pageNumber: v } } } = t;
        if (!y?.length) return null;
        s = t = {
          annotationType: j.FREETEXT,
          color: Array.from(a),
          fontSize: r,
          value: y.join(`
`),
          position: w,
          pageIndex: v - 1,
          rect: o.slice(0),
          rotation: l,
          annotationElementId: h,
          id: h,
          deleted: false,
          popupRef: c,
          comment: p?.str || null,
          richText: d,
          creationDate: m,
          modificationDate: b
        };
      }
      const n = await super.deserialize(t, e, i);
      return n.#s = t.fontSize, n.color = D.makeHexColor(...t.color), n.#t = At.#d(t.value), n._initialData = s, t.comment && n.setCommentData(t), n;
    }
    serialize(t = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const e = O._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), i = Object.assign(super.serialize(t), {
        color: e,
        fontSize: this.#s,
        value: this.#u()
      });
      return this.addComment(i), t ? (i.isCopy = true, i) : this.annotationElementId && !this.#p(i) ? null : (i.id = this.annotationElementId, i);
    }
    #p(t) {
      const { value: e, fontSize: i, color: s, pageIndex: n } = this._initialData;
      return this.hasEditedComment || this._hasBeenMoved || t.value !== e || t.fontSize !== i || t.color.some((r, a) => r !== s[a]) || t.pageIndex !== n;
    }
    renderAnnotationElement(t) {
      const e = super.renderAnnotationElement(t);
      if (!e) return null;
      const { style: i } = e;
      i.fontSize = `calc(${this.#s}px * var(--total-scale-factor))`, i.color = this.color, e.replaceChildren();
      for (const s of this.#t.split(`
`)) {
        const n = document.createElement("div");
        n.append(s ? document.createTextNode(s) : document.createElement("br")), e.append(n);
      }
      return t.updateEdited({
        rect: this.getPDFRect(),
        popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
          text: this.#t
        }
      }), e;
    }
    resetAnnotationElement(t) {
      super.resetAnnotationElement(t), t.resetEdited();
    }
  }
  class L {
    static PRECISION = 1e-4;
    toSVGPath() {
      K("Abstract method `toSVGPath` must be implemented.");
    }
    get box() {
      K("Abstract getter `box` must be implemented.");
    }
    serialize(t, e) {
      K("Abstract method `serialize` must be implemented.");
    }
    static _rescale(t, e, i, s, n, r) {
      r ||= new Float32Array(t.length);
      for (let a = 0, o = t.length; a < o; a += 2) r[a] = e + t[a] * s, r[a + 1] = i + t[a + 1] * n;
      return r;
    }
    static _rescaleAndSwap(t, e, i, s, n, r) {
      r ||= new Float32Array(t.length);
      for (let a = 0, o = t.length; a < o; a += 2) r[a] = e + t[a + 1] * s, r[a + 1] = i + t[a] * n;
      return r;
    }
    static _translate(t, e, i, s) {
      s ||= new Float32Array(t.length);
      for (let n = 0, r = t.length; n < r; n += 2) s[n] = e + t[n], s[n + 1] = i + t[n + 1];
      return s;
    }
    static svgRound(t) {
      return Math.round(t * 1e4);
    }
    static _normalizePoint(t, e, i, s, n) {
      switch (n) {
        case 90:
          return [
            1 - e / i,
            t / s
          ];
        case 180:
          return [
            1 - t / i,
            1 - e / s
          ];
        case 270:
          return [
            e / i,
            1 - t / s
          ];
        default:
          return [
            t / i,
            e / s
          ];
      }
    }
    static createBezierPoints(t, e, i, s, n, r) {
      return [
        (t + 5 * i) / 6,
        (e + 5 * s) / 6,
        (5 * i + n) / 6,
        (5 * s + r) / 6,
        (i + n) / 2,
        (s + r) / 2
      ];
    }
  }
  class ne {
    #t;
    #e = [];
    #i;
    #s;
    #n = [];
    #a = new Float32Array(18);
    #r;
    #o;
    #h;
    #l;
    #u;
    #d;
    #p = [];
    static #m = 8;
    static #g = 2;
    static #c = ne.#m + ne.#g;
    constructor({ x: t, y: e }, i, s, n, r, a = 0) {
      this.#t = i, this.#d = n * s, this.#s = r, this.#a.set([
        NaN,
        NaN,
        NaN,
        NaN,
        t,
        e
      ], 6), this.#i = a, this.#l = ne.#m * s, this.#h = ne.#c * s, this.#u = s, this.#p.push(t, e);
    }
    isEmpty() {
      return isNaN(this.#a[8]);
    }
    #f() {
      const t = this.#a.subarray(4, 6), e = this.#a.subarray(16, 18), [i, s, n, r] = this.#t;
      return [
        (this.#r + (t[0] - e[0]) / 2 - i) / n,
        (this.#o + (t[1] - e[1]) / 2 - s) / r,
        (this.#r + (e[0] - t[0]) / 2 - i) / n,
        (this.#o + (e[1] - t[1]) / 2 - s) / r
      ];
    }
    add({ x: t, y: e }) {
      this.#r = t, this.#o = e;
      const [i, s, n, r] = this.#t;
      let [a, o, l, h] = this.#a.subarray(8, 12);
      const c = t - l, d = e - h, p = Math.hypot(c, d);
      if (p < this.#h) return false;
      const m = p - this.#l, b = m / p, y = b * c, w = b * d;
      let v = a, E = o;
      a = l, o = h, l += y, h += w, this.#p?.push(t, e);
      const _ = -w / m, S = y / m, T = _ * this.#d, M = S * this.#d;
      return this.#a.set(this.#a.subarray(2, 8), 0), this.#a.set([
        l + T,
        h + M
      ], 4), this.#a.set(this.#a.subarray(14, 18), 12), this.#a.set([
        l - T,
        h - M
      ], 16), isNaN(this.#a[6]) ? (this.#n.length === 0 && (this.#a.set([
        a + T,
        o + M
      ], 2), this.#n.push(NaN, NaN, NaN, NaN, (a + T - i) / n, (o + M - s) / r), this.#a.set([
        a - T,
        o - M
      ], 14), this.#e.push(NaN, NaN, NaN, NaN, (a - T - i) / n, (o - M - s) / r)), this.#a.set([
        v,
        E,
        a,
        o,
        l,
        h
      ], 6), !this.isEmpty()) : (this.#a.set([
        v,
        E,
        a,
        o,
        l,
        h
      ], 6), Math.abs(Math.atan2(E - o, v - a) - Math.atan2(w, y)) < Math.PI / 2 ? ([a, o, l, h] = this.#a.subarray(2, 6), this.#n.push(NaN, NaN, NaN, NaN, ((a + l) / 2 - i) / n, ((o + h) / 2 - s) / r), [a, o, v, E] = this.#a.subarray(14, 18), this.#e.push(NaN, NaN, NaN, NaN, ((v + a) / 2 - i) / n, ((E + o) / 2 - s) / r), true) : ([v, E, a, o, l, h] = this.#a.subarray(0, 6), this.#n.push(((v + 5 * a) / 6 - i) / n, ((E + 5 * o) / 6 - s) / r, ((5 * a + l) / 6 - i) / n, ((5 * o + h) / 6 - s) / r, ((a + l) / 2 - i) / n, ((o + h) / 2 - s) / r), [l, h, a, o, v, E] = this.#a.subarray(12, 18), this.#e.push(((v + 5 * a) / 6 - i) / n, ((E + 5 * o) / 6 - s) / r, ((5 * a + l) / 6 - i) / n, ((5 * o + h) / 6 - s) / r, ((a + l) / 2 - i) / n, ((o + h) / 2 - s) / r), true));
    }
    toSVGPath() {
      if (this.isEmpty()) return "";
      const t = this.#n, e = this.#e;
      if (isNaN(this.#a[6]) && !this.isEmpty()) return this.#y();
      const i = [];
      i.push(`M${t[4]} ${t[5]}`);
      for (let s = 6; s < t.length; s += 6) isNaN(t[s]) ? i.push(`L${t[s + 4]} ${t[s + 5]}`) : i.push(`C${t[s]} ${t[s + 1]} ${t[s + 2]} ${t[s + 3]} ${t[s + 4]} ${t[s + 5]}`);
      this.#b(i);
      for (let s = e.length - 6; s >= 6; s -= 6) isNaN(e[s]) ? i.push(`L${e[s + 4]} ${e[s + 5]}`) : i.push(`C${e[s]} ${e[s + 1]} ${e[s + 2]} ${e[s + 3]} ${e[s + 4]} ${e[s + 5]}`);
      return this.#A(i), i.join(" ");
    }
    #y() {
      const [t, e, i, s] = this.#t, [n, r, a, o] = this.#f();
      return `M${(this.#a[2] - t) / i} ${(this.#a[3] - e) / s} L${(this.#a[4] - t) / i} ${(this.#a[5] - e) / s} L${n} ${r} L${a} ${o} L${(this.#a[16] - t) / i} ${(this.#a[17] - e) / s} L${(this.#a[14] - t) / i} ${(this.#a[15] - e) / s} Z`;
    }
    #A(t) {
      const e = this.#e;
      t.push(`L${e[4]} ${e[5]} Z`);
    }
    #b(t) {
      const [e, i, s, n] = this.#t, r = this.#a.subarray(4, 6), a = this.#a.subarray(16, 18), [o, l, h, c] = this.#f();
      t.push(`L${(r[0] - e) / s} ${(r[1] - i) / n} L${o} ${l} L${h} ${c} L${(a[0] - e) / s} ${(a[1] - i) / n}`);
    }
    newFreeDrawOutline(t, e, i, s, n, r) {
      return new pn(t, e, i, s, n, r);
    }
    getOutlines() {
      const t = this.#n, e = this.#e, i = this.#a, [s, n, r, a] = this.#t, o = new Float32Array((this.#p?.length ?? 0) + 2);
      for (let c = 0, d = o.length - 2; c < d; c += 2) o[c] = (this.#p[c] - s) / r, o[c + 1] = (this.#p[c + 1] - n) / a;
      if (o[o.length - 2] = (this.#r - s) / r, o[o.length - 1] = (this.#o - n) / a, isNaN(i[6]) && !this.isEmpty()) return this.#E(o);
      const l = new Float32Array(this.#n.length + 24 + this.#e.length);
      let h = t.length;
      for (let c = 0; c < h; c += 2) {
        if (isNaN(t[c])) {
          l[c] = l[c + 1] = NaN;
          continue;
        }
        l[c] = t[c], l[c + 1] = t[c + 1];
      }
      h = this.#w(l, h);
      for (let c = e.length - 6; c >= 6; c -= 6) for (let d = 0; d < 6; d += 2) {
        if (isNaN(e[c + d])) {
          l[h] = l[h + 1] = NaN, h += 2;
          continue;
        }
        l[h] = e[c + d], l[h + 1] = e[c + d + 1], h += 2;
      }
      return this.#S(l, h), this.newFreeDrawOutline(l, o, this.#t, this.#u, this.#i, this.#s);
    }
    #E(t) {
      const e = this.#a, [i, s, n, r] = this.#t, [a, o, l, h] = this.#f(), c = new Float32Array(36);
      return c.set([
        NaN,
        NaN,
        NaN,
        NaN,
        (e[2] - i) / n,
        (e[3] - s) / r,
        NaN,
        NaN,
        NaN,
        NaN,
        (e[4] - i) / n,
        (e[5] - s) / r,
        NaN,
        NaN,
        NaN,
        NaN,
        a,
        o,
        NaN,
        NaN,
        NaN,
        NaN,
        l,
        h,
        NaN,
        NaN,
        NaN,
        NaN,
        (e[16] - i) / n,
        (e[17] - s) / r,
        NaN,
        NaN,
        NaN,
        NaN,
        (e[14] - i) / n,
        (e[15] - s) / r
      ], 0), this.newFreeDrawOutline(c, t, this.#t, this.#u, this.#i, this.#s);
    }
    #S(t, e) {
      const i = this.#e;
      return t.set([
        NaN,
        NaN,
        NaN,
        NaN,
        i[4],
        i[5]
      ], e), e += 6;
    }
    #w(t, e) {
      const i = this.#a.subarray(4, 6), s = this.#a.subarray(16, 18), [n, r, a, o] = this.#t, [l, h, c, d] = this.#f();
      return t.set([
        NaN,
        NaN,
        NaN,
        NaN,
        (i[0] - n) / a,
        (i[1] - r) / o,
        NaN,
        NaN,
        NaN,
        NaN,
        l,
        h,
        NaN,
        NaN,
        NaN,
        NaN,
        c,
        d,
        NaN,
        NaN,
        NaN,
        NaN,
        (s[0] - n) / a,
        (s[1] - r) / o
      ], e), e += 24;
    }
  }
  class pn extends L {
    #t;
    #e = new Float32Array(4);
    #i;
    #s;
    #n;
    #a;
    #r;
    constructor(t, e, i, s, n, r) {
      super(), this.#r = t, this.#n = e, this.#t = i, this.#a = s, this.#i = n, this.#s = r, this.firstPoint = [
        NaN,
        NaN
      ], this.lastPoint = [
        NaN,
        NaN
      ], this.#o(r);
      const [a, o, l, h] = this.#e;
      for (let c = 0, d = t.length; c < d; c += 2) t[c] = (t[c] - a) / l, t[c + 1] = (t[c + 1] - o) / h;
      for (let c = 0, d = e.length; c < d; c += 2) e[c] = (e[c] - a) / l, e[c + 1] = (e[c + 1] - o) / h;
    }
    toSVGPath() {
      const t = [
        `M${this.#r[4]} ${this.#r[5]}`
      ];
      for (let e = 6, i = this.#r.length; e < i; e += 6) {
        if (isNaN(this.#r[e])) {
          t.push(`L${this.#r[e + 4]} ${this.#r[e + 5]}`);
          continue;
        }
        t.push(`C${this.#r[e]} ${this.#r[e + 1]} ${this.#r[e + 2]} ${this.#r[e + 3]} ${this.#r[e + 4]} ${this.#r[e + 5]}`);
      }
      return t.push("Z"), t.join(" ");
    }
    serialize([t, e, i, s], n) {
      const r = i - t, a = s - e;
      let o, l;
      switch (n) {
        case 0:
          o = L._rescale(this.#r, t, s, r, -a), l = L._rescale(this.#n, t, s, r, -a);
          break;
        case 90:
          o = L._rescaleAndSwap(this.#r, t, e, r, a), l = L._rescaleAndSwap(this.#n, t, e, r, a);
          break;
        case 180:
          o = L._rescale(this.#r, i, e, -r, a), l = L._rescale(this.#n, i, e, -r, a);
          break;
        case 270:
          o = L._rescaleAndSwap(this.#r, i, s, -r, -a), l = L._rescaleAndSwap(this.#n, i, s, -r, -a);
          break;
      }
      return {
        outline: Array.from(o),
        points: [
          Array.from(l)
        ]
      };
    }
    #o(t) {
      const e = this.#r;
      let i = e[4], s = e[5];
      const n = [
        i,
        s,
        i,
        s
      ];
      let r = i, a = s, o = i, l = s;
      const h = t ? Math.max : Math.min, c = new Float32Array(4);
      for (let p = 6, m = e.length; p < m; p += 6) {
        const b = e[p + 4], y = e[p + 5];
        isNaN(e[p]) ? (D.pointBoundingBox(b, y, n), a > y ? (r = b, a = y) : a === y && (r = h(r, b)), l < y ? (o = b, l = y) : l === y && (o = h(o, b))) : (c.set(Xt, 0), D.bezierBoundingBox(i, s, ...e.slice(p, p + 6), c), D.rectBoundingBox(...c, n), a > c[1] ? (r = c[0], a = c[1]) : a === c[1] && (r = h(r, c[0])), l < c[3] ? (o = c[2], l = c[3]) : l === c[3] && (o = h(o, c[2]))), i = b, s = y;
      }
      const d = this.#e;
      d[0] = n[0] - this.#i, d[1] = n[1] - this.#i, d[2] = n[2] - n[0] + 2 * this.#i, d[3] = n[3] - n[1] + 2 * this.#i, this.firstPoint = [
        r,
        a
      ], this.lastPoint = [
        o,
        l
      ];
    }
    get box() {
      return this.#e;
    }
    newOutliner(t, e, i, s, n, r = 0) {
      return new ne(t, e, i, s, n, r);
    }
    getNewOutline(t, e) {
      const [i, s, n, r] = this.#e, [a, o, l, h] = this.#t, c = n * l, d = r * h, p = i * l + a, m = s * h + o, b = this.newOutliner({
        x: this.#n[0] * c + p,
        y: this.#n[1] * d + m
      }, this.#t, this.#a, t, this.#s, e ?? this.#i);
      for (let y = 2; y < this.#n.length; y += 2) b.add({
        x: this.#n[y] * c + p,
        y: this.#n[y + 1] * d + m
      });
      return b.getOutlines();
    }
  }
  class $i {
    #t;
    #e;
    #i;
    #s = [];
    #n = [];
    constructor(t, e = 0, i = 0, s = true) {
      const n = Xt.slice(), r = 10 ** -4;
      for (const { x: b, y, width: w, height: v } of t) {
        const E = Math.floor((b - e) / r) * r, _ = Math.ceil((b + w + e) / r) * r, S = Math.floor((y - e) / r) * r, T = Math.ceil((y + v + e) / r) * r, M = [
          E,
          S,
          T,
          true
        ], I = [
          _,
          S,
          T,
          false
        ];
        this.#s.push(M, I), D.rectBoundingBox(E, S, _, T, n);
      }
      const a = n[2] - n[0] + 2 * i, o = n[3] - n[1] + 2 * i, l = n[0] - i, h = n[1] - i;
      let c = s ? -1 / 0 : 1 / 0, d = 1 / 0;
      const p = this.#s.at(s ? -1 : -2), m = [
        p[0],
        p[2]
      ];
      for (const b of this.#s) {
        const [y, w, v, E] = b;
        !E && s ? w < d ? (d = w, c = y) : w === d && (c = Math.max(c, y)) : E && !s && (w < d ? (d = w, c = y) : w === d && (c = Math.min(c, y))), b[0] = (y - l) / a, b[1] = (w - h) / o, b[2] = (v - h) / o;
      }
      this.#t = new Float32Array([
        l,
        h,
        a,
        o
      ]), this.#e = [
        c,
        d
      ], this.#i = m;
    }
    getOutlines() {
      this.#s.sort((e, i) => e[0] - i[0] || e[1] - i[1] || e[2] - i[2]);
      const t = [];
      for (const e of this.#s) e[3] ? (t.push(...this.#l(e)), this.#o(e)) : (this.#h(e), t.push(...this.#l(e)));
      return this.#a(t);
    }
    #a(t) {
      const e = [], i = /* @__PURE__ */ new Set();
      for (const r of t) {
        const [a, o, l] = r;
        e.push([
          a,
          o,
          r
        ], [
          a,
          l,
          r
        ]);
      }
      e.sort((r, a) => r[1] - a[1] || r[0] - a[0]);
      for (let r = 0, a = e.length; r < a; r += 2) {
        const o = e[r][2], l = e[r + 1][2];
        o.push(l), l.push(o), i.add(o), i.add(l);
      }
      const s = [];
      let n;
      for (; i.size > 0; ) {
        const r = i.values().next().value;
        let [a, o, l, h, c] = r;
        i.delete(r);
        let d = a, p = o;
        for (n = [
          a,
          l
        ], s.push(n); ; ) {
          let m;
          if (i.has(h)) m = h;
          else if (i.has(c)) m = c;
          else break;
          i.delete(m), [a, o, l, h, c] = m, d !== a && (n.push(d, p, a, p === o ? o : l), d = a), p = p === o ? l : o;
        }
        n.push(d, p);
      }
      return new ka(s, this.#t, this.#e, this.#i);
    }
    #r(t) {
      const e = this.#n;
      let i = 0, s = e.length - 1;
      for (; i <= s; ) {
        const n = i + s >> 1, r = e[n][0];
        if (r === t) return n;
        r < t ? i = n + 1 : s = n - 1;
      }
      return s + 1;
    }
    #o([, t, e]) {
      const i = this.#r(t);
      this.#n.splice(i, 0, [
        t,
        e
      ]);
    }
    #h([, t, e]) {
      const i = this.#r(t);
      for (let s = i; s < this.#n.length; s++) {
        const [n, r] = this.#n[s];
        if (n !== t) break;
        if (n === t && r === e) {
          this.#n.splice(s, 1);
          return;
        }
      }
      for (let s = i - 1; s >= 0; s--) {
        const [n, r] = this.#n[s];
        if (n !== t) break;
        if (n === t && r === e) {
          this.#n.splice(s, 1);
          return;
        }
      }
    }
    #l(t) {
      const [e, i, s] = t, n = [
        [
          e,
          i,
          s
        ]
      ], r = this.#r(s);
      for (let a = 0; a < r; a++) {
        const [o, l] = this.#n[a];
        for (let h = 0, c = n.length; h < c; h++) {
          const [, d, p] = n[h];
          if (!(l <= d || p <= o)) {
            if (d >= o) {
              if (p > l) n[h][1] = l;
              else {
                if (c === 1) return [];
                n.splice(h, 1), h--, c--;
              }
              continue;
            }
            n[h][2] = o, p > l && n.push([
              e,
              l,
              p
            ]);
          }
        }
      }
      return n;
    }
  }
  class ka extends L {
    #t;
    #e;
    constructor(t, e, i, s) {
      super(), this.#e = t, this.#t = e, this.firstPoint = i, this.lastPoint = s;
    }
    toSVGPath() {
      const t = [];
      for (const e of this.#e) {
        let [i, s] = e;
        t.push(`M${i} ${s}`);
        for (let n = 2; n < e.length; n += 2) {
          const r = e[n], a = e[n + 1];
          r === i ? (t.push(`V${a}`), s = a) : a === s && (t.push(`H${r}`), i = r);
        }
        t.push("Z");
      }
      return t.join(" ");
    }
    serialize([t, e, i, s], n) {
      const r = [], a = i - t, o = s - e;
      for (const l of this.#e) {
        const h = new Array(l.length);
        for (let c = 0; c < l.length; c += 2) h[c] = t + l[c] * a, h[c + 1] = s - l[c + 1] * o;
        r.push(h);
      }
      return r;
    }
    get box() {
      return this.#t;
    }
  }
  class ji extends ne {
    newFreeDrawOutline(t, e, i, s, n, r) {
      return new Ma(t, e, i, s, n, r);
    }
  }
  class Ma extends pn {
    newOutliner(t, e, i, s, n, r = 0) {
      return new ji(t, e, i, s, n, r);
    }
  }
  class pt extends O {
    #t = null;
    #e = 0;
    #i;
    #s = null;
    #n = null;
    #a = null;
    #r = null;
    #o = 0;
    #h = null;
    #l = null;
    #u = null;
    #d = false;
    #p = null;
    #m = null;
    #g = null;
    #c = "";
    #f;
    #y = "";
    static _defaultColor = null;
    static _defaultOpacity = 1;
    static _defaultThickness = 12;
    static _type = "highlight";
    static _editorType = j.HIGHLIGHT;
    static _freeHighlightId = -1;
    static _freeHighlight = null;
    static _freeHighlightClipId = "";
    static get _keyboardManager() {
      const t = pt.prototype;
      return $(this, "_keyboardManager", new kt([
        [
          [
            "ArrowLeft"
          ],
          t._moveCaret,
          {
            args: [
              0
            ]
          }
        ],
        [
          [
            "ArrowRight"
          ],
          t._moveCaret,
          {
            args: [
              1
            ]
          }
        ],
        [
          [
            "ArrowUp"
          ],
          t._moveCaret,
          {
            args: [
              2
            ]
          }
        ],
        [
          [
            "ArrowDown"
          ],
          t._moveCaret,
          {
            args: [
              3
            ]
          }
        ]
      ]));
    }
    constructor(t) {
      super({
        ...t,
        name: "highlightEditor"
      }), this.color = t.color || pt._defaultColor, this.#f = t.thickness || pt._defaultThickness, this.opacity = t.opacity || pt._defaultOpacity, this.#i = t.boxes || null, this.#y = t.methodOfCreation || "", this.#c = t.text || "", this._isDraggable = false, this.defaultL10nId = "pdfjs-editor-highlight-editor", t.highlightId > -1 ? (this.#d = true, this.#b(t), this.#x()) : this.#i && (this.#t = t.anchorNode, this.#e = t.anchorOffset, this.#r = t.focusNode, this.#o = t.focusOffset, this.#A(), this.#x(), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert(O._l10nAlert.highlight);
    }
    get telemetryInitialData() {
      return {
        action: "added",
        type: this.#d ? "free_highlight" : "highlight",
        color: this._uiManager.getNonHCMColorName(this.color),
        thickness: this.#f,
        methodOfCreation: this.#y
      };
    }
    get telemetryFinalData() {
      return {
        type: "highlight",
        color: this._uiManager.getNonHCMColorName(this.color)
      };
    }
    static computeTelemetryFinalData(t) {
      return {
        numberOfColors: t.get("color").size
      };
    }
    #A() {
      const t = new $i(this.#i, 1e-3);
      this.#l = t.getOutlines(), [this.x, this.y, this.width, this.height] = this.#l.box;
      const e = new $i(this.#i, 25e-4, 1e-3, this._uiManager.direction === "ltr");
      this.#a = e.getOutlines();
      const { firstPoint: i } = this.#l;
      this.#p = [
        (i[0] - this.x) / this.width,
        (i[1] - this.y) / this.height
      ];
      const { lastPoint: s } = this.#a;
      this.#m = [
        (s[0] - this.x) / this.width,
        (s[1] - this.y) / this.height
      ];
    }
    #b({ highlightOutlines: t, highlightId: e, clipPathId: i }) {
      this.#l = t;
      const s = 1.5;
      if (this.#a = t.getNewOutline(this.#f / 2 + s, 25e-4), e >= 0) this.#u = e, this.#s = i, this.parent.drawLayer.finalizeDraw(e, {
        bbox: t.box,
        path: {
          d: t.toSVGPath()
        }
      }), this.#g = this.parent.drawLayer.drawOutline({
        rootClass: {
          highlightOutline: true,
          free: true
        },
        bbox: this.#a.box,
        path: {
          d: this.#a.toSVGPath()
        }
      }, true);
      else if (this.parent) {
        const c = this.parent.viewport.rotation;
        this.parent.drawLayer.updateProperties(this.#u, {
          bbox: pt.#T(this.#l.box, (c - this.rotation + 360) % 360),
          path: {
            d: t.toSVGPath()
          }
        }), this.parent.drawLayer.updateProperties(this.#g, {
          bbox: pt.#T(this.#a.box, c),
          path: {
            d: this.#a.toSVGPath()
          }
        });
      }
      const [n, r, a, o] = t.box;
      switch (this.rotation) {
        case 0:
          this.x = n, this.y = r, this.width = a, this.height = o;
          break;
        case 90: {
          const [c, d] = this.parentDimensions;
          this.x = r, this.y = 1 - n, this.width = a * d / c, this.height = o * c / d;
          break;
        }
        case 180:
          this.x = 1 - n, this.y = 1 - r, this.width = a, this.height = o;
          break;
        case 270: {
          const [c, d] = this.parentDimensions;
          this.x = 1 - r, this.y = n, this.width = a * d / c, this.height = o * c / d;
          break;
        }
      }
      const { firstPoint: l } = t;
      this.#p = [
        (l[0] - n) / a,
        (l[1] - r) / o
      ];
      const { lastPoint: h } = this.#a;
      this.#m = [
        (h[0] - n) / a,
        (h[1] - r) / o
      ];
    }
    static initialize(t, e) {
      O.initialize(t, e), pt._defaultColor ||= e.highlightColors?.values().next().value || "#fff066";
    }
    static updateDefaultParams(t, e) {
      switch (t) {
        case V.HIGHLIGHT_COLOR:
          pt._defaultColor = e;
          break;
        case V.HIGHLIGHT_THICKNESS:
          pt._defaultThickness = e;
          break;
      }
    }
    translateInPage(t, e) {
    }
    get toolbarPosition() {
      return this.#m;
    }
    get commentButtonPosition() {
      return this.#p;
    }
    updateParams(t, e) {
      switch (t) {
        case V.HIGHLIGHT_COLOR:
          this.#E(e);
          break;
        case V.HIGHLIGHT_THICKNESS:
          this.#S(e);
          break;
      }
    }
    static get defaultPropertiesToUpdate() {
      return [
        [
          V.HIGHLIGHT_COLOR,
          pt._defaultColor
        ],
        [
          V.HIGHLIGHT_THICKNESS,
          pt._defaultThickness
        ]
      ];
    }
    get propertiesToUpdate() {
      return [
        [
          V.HIGHLIGHT_COLOR,
          this.color || pt._defaultColor
        ],
        [
          V.HIGHLIGHT_THICKNESS,
          this.#f || pt._defaultThickness
        ],
        [
          V.HIGHLIGHT_FREE,
          this.#d
        ]
      ];
    }
    onUpdatedColor() {
      this.parent?.drawLayer.updateProperties(this.#u, {
        root: {
          fill: this.color,
          "fill-opacity": this.opacity
        }
      }), this.#n?.updateColor(this.color), super.onUpdatedColor();
    }
    #E(t) {
      const e = (n, r) => {
        this.color = n, this.opacity = r, this.onUpdatedColor();
      }, i = this.color, s = this.opacity;
      this.addCommands({
        cmd: e.bind(this, t, pt._defaultOpacity),
        undo: e.bind(this, i, s),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: true,
        type: V.HIGHLIGHT_COLOR,
        overwriteIfSameType: true,
        keepUndo: true
      }), this._reportTelemetry({
        action: "color_changed",
        color: this._uiManager.getNonHCMColorName(t)
      }, true);
    }
    #S(t) {
      const e = this.#f, i = (s) => {
        this.#f = s, this.#w(s);
      };
      this.addCommands({
        cmd: i.bind(this, t),
        undo: i.bind(this, e),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: true,
        type: V.INK_THICKNESS,
        overwriteIfSameType: true,
        keepUndo: true
      }), this._reportTelemetry({
        action: "thickness_changed",
        thickness: t
      }, true);
    }
    get toolbarButtons() {
      return this._uiManager.highlightColors ? [
        [
          "colorPicker",
          this.#n = new Dt({
            editor: this
          })
        ]
      ] : super.toolbarButtons;
    }
    disableEditing() {
      super.disableEditing(), this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing(), this.div.classList.toggle("disabled", false);
    }
    fixAndSetPosition() {
      return super.fixAndSetPosition(this.#k());
    }
    getBaseTranslation() {
      return [
        0,
        0
      ];
    }
    getRect(t, e) {
      return super.getRect(t, e, this.#k());
    }
    onceAdded(t) {
      this.annotationElementId || this.parent.addUndoableEditor(this), t && this.div.focus();
    }
    remove() {
      this.#C(), this._reportTelemetry({
        action: "deleted"
      }), super.remove();
    }
    rebuild() {
      this.parent && (super.rebuild(), this.div !== null && (this.#x(), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(t) {
      let e = false;
      this.parent && !t ? this.#C() : t && (this.#x(t), e = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(t), this.show(this._isVisible), e && this.select();
    }
    #w(t) {
      this.#d && (this.#b({
        highlightOutlines: this.#l.getNewOutline(t / 2)
      }), this.fixAndSetPosition(), this.setDims());
    }
    #C() {
      this.#u === null || !this.parent || (this.parent.drawLayer.remove(this.#u), this.#u = null, this.parent.drawLayer.remove(this.#g), this.#g = null);
    }
    #x(t = this.parent) {
      this.#u === null && ({ id: this.#u, clipPathId: this.#s } = t.drawLayer.draw({
        bbox: this.#l.box,
        root: {
          viewBox: "0 0 1 1",
          fill: this.color,
          "fill-opacity": this.opacity
        },
        rootClass: {
          highlight: true,
          free: this.#d
        },
        path: {
          d: this.#l.toSVGPath()
        }
      }, false, true), this.#g = t.drawLayer.drawOutline({
        rootClass: {
          highlightOutline: true,
          free: this.#d
        },
        bbox: this.#a.box,
        path: {
          d: this.#a.toSVGPath()
        }
      }, this.#d), this.#h && (this.#h.style.clipPath = this.#s));
    }
    static #T([t, e, i, s], n) {
      switch (n) {
        case 90:
          return [
            1 - e - s,
            t,
            s,
            i
          ];
        case 180:
          return [
            1 - t - i,
            1 - e - s,
            i,
            s
          ];
        case 270:
          return [
            e,
            1 - t - i,
            s,
            i
          ];
      }
      return [
        t,
        e,
        i,
        s
      ];
    }
    rotate(t) {
      const { drawLayer: e } = this.parent;
      let i;
      this.#d ? (t = (t - this.rotation + 360) % 360, i = pt.#T(this.#l.box, t)) : i = pt.#T([
        this.x,
        this.y,
        this.width,
        this.height
      ], t), e.updateProperties(this.#u, {
        bbox: i,
        root: {
          "data-main-rotation": t
        }
      }), e.updateProperties(this.#g, {
        bbox: pt.#T(this.#a.box, t),
        root: {
          "data-main-rotation": t
        }
      });
    }
    render() {
      if (this.div) return this.div;
      const t = super.render();
      this.#c && (t.setAttribute("aria-label", this.#c), t.setAttribute("role", "mark")), this.#d ? t.classList.add("free") : this.div.addEventListener("keydown", this.#M.bind(this), {
        signal: this._uiManager._signal
      });
      const e = this.#h = document.createElement("div");
      return t.append(e), e.setAttribute("aria-hidden", "true"), e.className = "internal", e.style.clipPath = this.#s, this.setDims(), Xs(this, this.#h, [
        "pointerover",
        "pointerleave"
      ]), this.enableEditing(), t;
    }
    pointerover() {
      this.isSelected || this.parent?.drawLayer.updateProperties(this.#g, {
        rootClass: {
          hovered: true
        }
      });
    }
    pointerleave() {
      this.isSelected || this.parent?.drawLayer.updateProperties(this.#g, {
        rootClass: {
          hovered: false
        }
      });
    }
    #M(t) {
      pt._keyboardManager.exec(this, t);
    }
    _moveCaret(t) {
      switch (this.parent.unselect(this), t) {
        case 0:
        case 2:
          this.#P(true);
          break;
        case 1:
        case 3:
          this.#P(false);
          break;
      }
    }
    #P(t) {
      if (!this.#t) return;
      const e = window.getSelection();
      t ? e.setPosition(this.#t, this.#e) : e.setPosition(this.#r, this.#o);
    }
    select() {
      super.select(), this.#g && this.parent?.drawLayer.updateProperties(this.#g, {
        rootClass: {
          hovered: false,
          selected: true
        }
      });
    }
    unselect() {
      super.unselect(), this.#g && (this.parent?.drawLayer.updateProperties(this.#g, {
        rootClass: {
          selected: false
        }
      }), this.#d || this.#P(false));
    }
    get _mustFixPosition() {
      return !this.#d;
    }
    show(t = this._isVisible) {
      super.show(t), this.parent && (this.parent.drawLayer.updateProperties(this.#u, {
        rootClass: {
          hidden: !t
        }
      }), this.parent.drawLayer.updateProperties(this.#g, {
        rootClass: {
          hidden: !t
        }
      }));
    }
    #k() {
      return this.#d ? this.rotation : 0;
    }
    #F() {
      if (this.#d) return null;
      const [t, e] = this.pageDimensions, [i, s] = this.pageTranslation, n = this.#i, r = new Float32Array(n.length * 8);
      let a = 0;
      for (const { x: o, y: l, width: h, height: c } of n) {
        const d = o * t + i, p = (1 - l) * e + s;
        r[a] = r[a + 4] = d, r[a + 1] = r[a + 3] = p, r[a + 2] = r[a + 6] = d + h * t, r[a + 5] = r[a + 7] = p - c * e, a += 8;
      }
      return r;
    }
    #L(t) {
      return this.#l.serialize(t, this.#k());
    }
    static startHighlighting(t, e, { target: i, x: s, y: n }) {
      const { x: r, y: a, width: o, height: l } = i.getBoundingClientRect(), h = new AbortController(), c = t.combinedSignal(h), d = (p) => {
        h.abort(), this.#R(t, p);
      };
      window.addEventListener("blur", d, {
        signal: c
      }), window.addEventListener("pointerup", d, {
        signal: c
      }), window.addEventListener("pointerdown", lt, {
        capture: true,
        passive: false,
        signal: c
      }), window.addEventListener("contextmenu", Ft, {
        signal: c
      }), i.addEventListener("pointermove", this.#D.bind(this, t), {
        signal: c
      }), this._freeHighlight = new ji({
        x: s,
        y: n
      }, [
        r,
        a,
        o,
        l
      ], t.scale, this._defaultThickness / 2, e, 1e-3), { id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = t.drawLayer.draw({
        bbox: [
          0,
          0,
          1,
          1
        ],
        root: {
          viewBox: "0 0 1 1",
          fill: this._defaultColor,
          "fill-opacity": this._defaultOpacity
        },
        rootClass: {
          highlight: true,
          free: true
        },
        path: {
          d: this._freeHighlight.toSVGPath()
        }
      }, true, true);
    }
    static #D(t, e) {
      this._freeHighlight.add(e) && t.drawLayer.updateProperties(this._freeHighlightId, {
        path: {
          d: this._freeHighlight.toSVGPath()
        }
      });
    }
    static #R(t, e) {
      this._freeHighlight.isEmpty() ? t.drawLayer.remove(this._freeHighlightId) : t.createAndAddNewEditor(e, false, {
        highlightId: this._freeHighlightId,
        highlightOutlines: this._freeHighlight.getOutlines(),
        clipPathId: this._freeHighlightClipId,
        methodOfCreation: "main_toolbar"
      }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
    }
    static async deserialize(t, e, i) {
      let s = null;
      if (t instanceof dn) {
        const { data: { quadPoints: b, rect: y, rotation: w, id: v, color: E, opacity: _, popupRef: S, richText: T, contentsObj: M, creationDate: I, modificationDate: F }, parent: { page: { pageNumber: R } } } = t;
        s = t = {
          annotationType: j.HIGHLIGHT,
          color: Array.from(E),
          opacity: _,
          quadPoints: b,
          boxes: null,
          pageIndex: R - 1,
          rect: y.slice(0),
          rotation: w,
          annotationElementId: v,
          id: v,
          deleted: false,
          popupRef: S,
          richText: T,
          comment: M?.str || null,
          creationDate: I,
          modificationDate: F
        };
      } else if (t instanceof ss) {
        const { data: { inkLists: b, rect: y, rotation: w, id: v, color: E, borderStyle: { rawWidth: _ }, popupRef: S, richText: T, contentsObj: M, creationDate: I, modificationDate: F }, parent: { page: { pageNumber: R } } } = t;
        s = t = {
          annotationType: j.HIGHLIGHT,
          color: Array.from(E),
          thickness: _,
          inkLists: b,
          boxes: null,
          pageIndex: R - 1,
          rect: y.slice(0),
          rotation: w,
          annotationElementId: v,
          id: v,
          deleted: false,
          popupRef: S,
          richText: T,
          comment: M?.str || null,
          creationDate: I,
          modificationDate: F
        };
      }
      const { color: n, quadPoints: r, inkLists: a, outlines: o, opacity: l } = t, h = await super.deserialize(t, e, i);
      h.color = D.makeHexColor(...n), h.opacity = l || 1, a && (h.#f = t.thickness), h._initialData = s, t.comment && h.setCommentData(t);
      const [c, d] = h.pageDimensions, [p, m] = h.pageTranslation;
      if (r) {
        const b = h.#i = [];
        for (let y = 0; y < r.length; y += 8) b.push({
          x: (r[y] - p) / c,
          y: 1 - (r[y + 1] - m) / d,
          width: (r[y + 2] - r[y]) / c,
          height: (r[y + 1] - r[y + 5]) / d
        });
        h.#A(), h.#x(), h.rotate(h.rotation);
      } else if (a || o) {
        h.#d = true;
        const b = (a || o.points)[0], y = {
          x: b[0] - p,
          y: d - (b[1] - m)
        }, w = new ji(y, [
          0,
          0,
          c,
          d
        ], 1, h.#f / 2, true, 1e-3);
        for (let _ = 0, S = b.length; _ < S; _ += 2) y.x = b[_] - p, y.y = d - (b[_ + 1] - m), w.add(y);
        const { id: v, clipPathId: E } = e.drawLayer.draw({
          bbox: [
            0,
            0,
            1,
            1
          ],
          root: {
            viewBox: "0 0 1 1",
            fill: h.color,
            "fill-opacity": h._defaultOpacity
          },
          rootClass: {
            highlight: true,
            free: true
          },
          path: {
            d: w.toSVGPath()
          }
        }, true, true);
        h.#b({
          highlightOutlines: w.getOutlines(),
          highlightId: v,
          clipPathId: E
        }), h.#x(), h.rotate(h.parentRotation);
      }
      return h;
    }
    serialize(t = false) {
      if (this.isEmpty() || t) return null;
      if (this.deleted) return this.serializeDeleted();
      const e = O._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), i = super.serialize(t);
      return Object.assign(i, {
        color: e,
        opacity: this.opacity,
        thickness: this.#f,
        quadPoints: this.#F(),
        outlines: this.#L(i.rect)
      }), this.addComment(i), this.annotationElementId && !this.#O(i) ? null : (i.id = this.annotationElementId, i);
    }
    #O(t) {
      const { color: e } = this._initialData;
      return this.hasEditedComment || t.color.some((i, s) => i !== e[s]);
    }
    renderAnnotationElement(t) {
      return this.deleted ? (t.hide(), null) : (t.updateEdited({
        rect: this.getPDFRect(),
        popup: this.comment
      }), null);
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  }
  class gn {
    #t = /* @__PURE__ */ Object.create(null);
    updateProperty(t, e) {
      this[t] = e, this.updateSVGProperty(t, e);
    }
    updateProperties(t) {
      if (t) for (const [e, i] of Object.entries(t)) e.startsWith("_") || this.updateProperty(e, i);
    }
    updateSVGProperty(t, e) {
      this.#t[t] = e;
    }
    toSVGProperties() {
      const t = this.#t;
      return this.#t = /* @__PURE__ */ Object.create(null), {
        root: t
      };
    }
    reset() {
      this.#t = /* @__PURE__ */ Object.create(null);
    }
    updateAll(t = this) {
      this.updateProperties(t);
    }
    clone() {
      K("Not implemented");
    }
  }
  class J extends O {
    #t = null;
    #e;
    _colorPicker = null;
    _drawId = null;
    static _currentDrawId = -1;
    static _currentParent = null;
    static #i = null;
    static #s = null;
    static #n = null;
    static _INNER_MARGIN = 3;
    constructor(t) {
      super(t), this.#e = t.mustBeCommitted || false, this._addOutlines(t);
    }
    onUpdatedColor() {
      this._colorPicker?.update(this.color), super.onUpdatedColor();
    }
    onUpdatedOpacity() {
      this._colorPicker?.updateOpacity?.(this.opacity);
    }
    _addOutlines(t) {
      t.drawOutlines && (this.#a(t), this.#h());
    }
    #a({ drawOutlines: t, drawId: e, drawingOptions: i }) {
      this.#t = t, this._drawingOptions ||= i, this.annotationElementId || this._uiManager.a11yAlert(O._l10nAlert[this.editorType]), e >= 0 ? (this._drawId = e, this.parent.drawLayer.finalizeDraw(e, t.defaultProperties)) : this._drawId = this.#r(t, this.parent), this.#d(t.box);
    }
    #r(t, e) {
      const { id: i } = e.drawLayer.draw(J._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t.defaultSVGProperties), false, false);
      return i;
    }
    static _mergeSVGProperties(t, e) {
      const i = new Set(Object.keys(t));
      for (const [s, n] of Object.entries(e)) i.has(s) ? Object.assign(t[s], n) : t[s] = n;
      return t;
    }
    static getDefaultDrawingOptions(t) {
      K("Not implemented");
    }
    static get typesMap() {
      K("Not implemented");
    }
    static get isDrawer() {
      return true;
    }
    static get supportMultipleDrawings() {
      return false;
    }
    static updateDefaultParams(t, e) {
      const i = this.typesMap.get(t);
      i && this._defaultDrawingOptions.updateProperty(i, e), this._currentParent && (J.#i.updateProperty(i, e), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
    }
    updateParams(t, e) {
      const i = this.constructor.typesMap.get(t);
      i && this._updateProperty(t, i, e);
    }
    static get defaultPropertiesToUpdate() {
      const t = [], e = this._defaultDrawingOptions;
      for (const [i, s] of this.typesMap) t.push([
        i,
        e[s]
      ]);
      return t;
    }
    get propertiesToUpdate() {
      const t = [], { _drawingOptions: e } = this;
      for (const [i, s] of this.constructor.typesMap) t.push([
        i,
        e[s]
      ]);
      return t;
    }
    _updateProperty(t, e, i) {
      const s = this._drawingOptions, n = s[e], r = (a) => {
        s.updateProperty(e, a);
        const o = this.#t.updateProperty(e, a);
        o && this.#d(o), this.parent?.drawLayer.updateProperties(this._drawId, s.toSVGProperties()), t === this.colorType ? this.onUpdatedColor() : t === this.opacityType && this.onUpdatedOpacity();
      };
      this.addCommands({
        cmd: r.bind(this, i),
        undo: r.bind(this, n),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: true,
        type: t,
        overwriteIfSameType: true,
        keepUndo: true
      });
    }
    _updateColorAndOpacity(t, e) {
      const i = this.constructor.typesMap.get(this.colorType), s = this.constructor.typesMap.get(this.opacityType), n = this._drawingOptions, r = n[i], a = n[s], o = (l, h) => {
        n.updateProperty(i, l), n.updateProperty(s, h), this.#t.updateProperty(i, l), this.#t.updateProperty(s, h), this.parent?.drawLayer.updateProperties(this._drawId, n.toSVGProperties()), this.onUpdatedColor(), this.onUpdatedOpacity();
      };
      this.addCommands({
        cmd: o.bind(this, t, e),
        undo: o.bind(this, r, a),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: true,
        type: V.INK_COLOR_AND_OPACITY,
        overwriteIfSameType: true,
        keepUndo: true
      });
    }
    _onResizing() {
      this.parent?.drawLayer.updateProperties(this._drawId, J._mergeSVGProperties(this.#t.getPathResizingSVGProperties(this.#u()), {
        bbox: this.#p()
      }));
    }
    _onResized() {
      this.parent?.drawLayer.updateProperties(this._drawId, J._mergeSVGProperties(this.#t.getPathResizedSVGProperties(this.#u()), {
        bbox: this.#p()
      }));
    }
    _onTranslating(t, e) {
      this.parent?.drawLayer.updateProperties(this._drawId, {
        bbox: this.#p()
      });
    }
    _onTranslated() {
      this.parent?.drawLayer.updateProperties(this._drawId, J._mergeSVGProperties(this.#t.getPathTranslatedSVGProperties(this.#u(), this.parentDimensions), {
        bbox: this.#p()
      }));
    }
    _onStartDragging() {
      this.parent?.drawLayer.updateProperties(this._drawId, {
        rootClass: {
          moving: true
        }
      });
    }
    _onStopDragging() {
      this.parent?.drawLayer.updateProperties(this._drawId, {
        rootClass: {
          moving: false
        }
      });
    }
    commit() {
      super.commit(), this.disableEditMode(), this.disableEditing();
    }
    disableEditing() {
      super.disableEditing(), this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing(), this.div.classList.toggle("disabled", false);
    }
    getBaseTranslation() {
      return [
        0,
        0
      ];
    }
    get isResizable() {
      return true;
    }
    onceAdded(t) {
      this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = true, this.#e && (this.#e = false, this.commit(), this.parent.setSelected(this), t && this.isOnScreen && this.div.focus());
    }
    remove() {
      this.#o(), super.remove();
    }
    rebuild() {
      this.parent && (super.rebuild(), this.div !== null && (this.#h(), this.#d(this.#t.box), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(t) {
      let e = false;
      this.parent && !t ? (this._uiManager.removeShouldRescale(this), this.#o()) : t && (this._uiManager.addShouldRescale(this), this.#h(t), e = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(t), e && this.select();
    }
    #o() {
      this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
    }
    #h(t = this.parent) {
      if (!(this._drawId !== null && this.parent === t)) {
        if (this._drawId !== null) {
          this.parent.drawLayer.updateParent(this._drawId, t.drawLayer);
          return;
        }
        this._drawingOptions.updateAll(), this._drawId = this.#r(this.#t, t);
      }
    }
    #l([t, e, i, s]) {
      const { parentDimensions: [n, r], rotation: a } = this;
      switch (a) {
        case 90:
          return [
            e,
            1 - t,
            i * (r / n),
            s * (n / r)
          ];
        case 180:
          return [
            1 - t,
            1 - e,
            i,
            s
          ];
        case 270:
          return [
            1 - e,
            t,
            i * (r / n),
            s * (n / r)
          ];
        default:
          return [
            t,
            e,
            i,
            s
          ];
      }
    }
    #u() {
      const { x: t, y: e, width: i, height: s, parentDimensions: [n, r], rotation: a } = this;
      switch (a) {
        case 90:
          return [
            1 - e,
            t,
            i * (n / r),
            s * (r / n)
          ];
        case 180:
          return [
            1 - t,
            1 - e,
            i,
            s
          ];
        case 270:
          return [
            e,
            1 - t,
            i * (n / r),
            s * (r / n)
          ];
        default:
          return [
            t,
            e,
            i,
            s
          ];
      }
    }
    #d(t) {
      [this.x, this.y, this.width, this.height] = this.#l(t), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
    }
    #p() {
      const { x: t, y: e, width: i, height: s, rotation: n, parentRotation: r, parentDimensions: [a, o] } = this;
      switch ((n * 4 + r) / 90) {
        case 1:
          return [
            1 - e - s,
            t,
            s,
            i
          ];
        case 2:
          return [
            1 - t - i,
            1 - e - s,
            i,
            s
          ];
        case 3:
          return [
            e,
            1 - t - i,
            s,
            i
          ];
        case 4:
          return [
            t,
            e - i * (a / o),
            s * (o / a),
            i * (a / o)
          ];
        case 5:
          return [
            1 - e,
            t,
            i * (a / o),
            s * (o / a)
          ];
        case 6:
          return [
            1 - t - s * (o / a),
            1 - e,
            s * (o / a),
            i * (a / o)
          ];
        case 7:
          return [
            e - i * (a / o),
            1 - t - s * (o / a),
            i * (a / o),
            s * (o / a)
          ];
        case 8:
          return [
            t - i,
            e - s,
            i,
            s
          ];
        case 9:
          return [
            1 - e,
            t - i,
            s,
            i
          ];
        case 10:
          return [
            1 - t,
            1 - e,
            i,
            s
          ];
        case 11:
          return [
            e - s,
            1 - t,
            s,
            i
          ];
        case 12:
          return [
            t - s * (o / a),
            e,
            s * (o / a),
            i * (a / o)
          ];
        case 13:
          return [
            1 - e - i * (a / o),
            t - s * (o / a),
            i * (a / o),
            s * (o / a)
          ];
        case 14:
          return [
            1 - t,
            1 - e - i * (a / o),
            s * (o / a),
            i * (a / o)
          ];
        case 15:
          return [
            e,
            1 - t,
            i * (a / o),
            s * (o / a)
          ];
        default:
          return [
            t,
            e,
            i,
            s
          ];
      }
    }
    rotate() {
      this.parent && this.parent.drawLayer.updateProperties(this._drawId, J._mergeSVGProperties({
        bbox: this.#p()
      }, this.#t.updateRotation((this.parentRotation - this.rotation + 360) % 360)));
    }
    onScaleChanging() {
      this.parent && this.#d(this.#t.updateParentDimensions(this.parentDimensions, this.parent.scale));
    }
    static onScaleChangingWhenDrawing() {
    }
    render() {
      if (this.div) return this.div;
      let t, e;
      this._isCopy && (t = this.x, e = this.y);
      const i = super.render();
      i.classList.add("draw");
      const s = document.createElement("div");
      return i.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(t, e), i;
    }
    static createDrawerInstance(t, e, i, s, n) {
      K("Not implemented");
    }
    static startDrawing(t, e, i, s) {
      const { target: n, offsetX: r, offsetY: a, pointerId: o, pointerType: l } = s;
      if (Q.isInitializedAndDifferentPointerType(l)) return;
      const { viewport: { rotation: h } } = t, { width: c, height: d } = n.getBoundingClientRect(), p = J.#s = new AbortController(), m = t.combinedSignal(p);
      if (Q.setPointer(l, o), window.addEventListener("pointerup", (b) => {
        Q.isSamePointerIdOrRemove(b.pointerId) && this._endDraw(b);
      }, {
        signal: m
      }), window.addEventListener("pointercancel", (b) => {
        Q.isSamePointerIdOrRemove(b.pointerId) && this._currentParent.endDrawingSession();
      }, {
        signal: m
      }), window.addEventListener("pointerdown", (b) => {
        Q.isSamePointerType(b.pointerType) && (Q.initializeAndAddPointerId(b.pointerId), J.#i.isCancellable() && (J.#i.removeLastElement(), J.#i.isEmpty() ? this._currentParent.endDrawingSession(true) : this._endDraw(null)));
      }, {
        capture: true,
        passive: false,
        signal: m
      }), window.addEventListener("contextmenu", Ft, {
        signal: m
      }), n.addEventListener("pointermove", this._drawMove.bind(this), {
        signal: m
      }), n.addEventListener("touchmove", (b) => {
        Q.isSameTimeStamp(b.timeStamp) && lt(b);
      }, {
        signal: m
      }), t.toggleDrawing(), e._editorUndoBar?.hide(), J.#i) {
        t.drawLayer.updateProperties(this._currentDrawId, J.#i.startNew(r, a, c, d, h));
        return;
      }
      e.updateUIForDefaultProperties(this), J.#i = this.createDrawerInstance(r, a, c, d, h), J.#n = this.getDefaultDrawingOptions(), this._currentParent = t, { id: this._currentDrawId } = t.drawLayer.draw(this._mergeSVGProperties(J.#n.toSVGProperties(), J.#i.defaultSVGProperties), true, false);
    }
    static _drawMove(t) {
      if (Q.isSameTimeStamp(t.timeStamp), !J.#i) return;
      const { offsetX: e, offsetY: i, pointerId: s } = t;
      if (Q.isSamePointerId(s)) {
        if (Q.isUsingMultiplePointers()) {
          this._endDraw(t);
          return;
        }
        this._currentParent.drawLayer.updateProperties(this._currentDrawId, J.#i.add(e, i)), Q.setTimeStamp(t.timeStamp), lt(t);
      }
    }
    static _cleanup(t) {
      t && (this._currentDrawId = -1, this._currentParent = null, J.#i = null, J.#n = null, Q.clearTimeStamp()), J.#s && (J.#s.abort(), J.#s = null, Q.clearPointerIds());
    }
    static _endDraw(t) {
      const e = this._currentParent;
      if (e) {
        if (e.toggleDrawing(true), this._cleanup(false), t?.target === e.div && e.drawLayer.updateProperties(this._currentDrawId, J.#i.end(t.offsetX, t.offsetY)), this.supportMultipleDrawings) {
          const i = J.#i, s = this._currentDrawId, n = i.getLastElement();
          e.addCommands({
            cmd: () => {
              e.drawLayer.updateProperties(s, i.setLastElement(n));
            },
            undo: () => {
              e.drawLayer.updateProperties(s, i.removeLastElement());
            },
            mustExec: false,
            type: V.DRAW_STEP
          });
          return;
        }
        this.endDrawing(false);
      }
    }
    static endDrawing(t) {
      const e = this._currentParent;
      if (!e) return null;
      if (e.toggleDrawing(true), e.cleanUndoStack(V.DRAW_STEP), !J.#i.isEmpty()) {
        const { pageDimensions: [i, s], scale: n } = e, r = e.createAndAddNewEditor({
          offsetX: 0,
          offsetY: 0
        }, false, {
          drawId: this._currentDrawId,
          drawOutlines: J.#i.getOutlines(i * n, s * n, n, this._INNER_MARGIN),
          drawingOptions: J.#n,
          mustBeCommitted: !t
        });
        return this._cleanup(true), r;
      }
      return e.drawLayer.remove(this._currentDrawId), this._cleanup(true), null;
    }
    createDrawingOptions(t) {
    }
    static deserializeDraw(t, e, i, s, n, r) {
      K("Not implemented");
    }
    static async deserialize(t, e, i) {
      const { rawDims: { pageWidth: s, pageHeight: n, pageX: r, pageY: a } } = e.viewport, o = this.deserializeDraw(r, a, s, n, this._INNER_MARGIN, t), l = await super.deserialize(t, e, i);
      return l.createDrawingOptions(t), l.#a({
        drawOutlines: o
      }), l.#h(), l.onScaleChanging(), l.rotate(), l;
    }
    serializeDraw(t) {
      const [e, i] = this.pageTranslation, [s, n] = this.pageDimensions;
      return this.#t.serialize([
        e,
        i,
        s,
        n
      ], t);
    }
    renderAnnotationElement(t) {
      return t.updateEdited({
        rect: this.getPDFRect()
      }), null;
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  }
  class Pa {
    #t = new Float64Array(6);
    #e;
    #i;
    #s;
    #n;
    #a;
    #r = "";
    #o = 0;
    #h = new Ue();
    #l;
    #u;
    constructor(t, e, i, s, n, r) {
      this.#l = i, this.#u = s, this.#s = n, this.#n = r, [t, e] = this.#d(t, e);
      const a = this.#e = [
        NaN,
        NaN,
        NaN,
        NaN,
        t,
        e
      ];
      this.#a = [
        t,
        e
      ], this.#i = [
        {
          line: a,
          points: this.#a
        }
      ], this.#t.set(a, 0);
    }
    updateProperty(t, e) {
      t === "stroke-width" && (this.#n = e);
    }
    #d(t, e) {
      return L._normalizePoint(t, e, this.#l, this.#u, this.#s);
    }
    isEmpty() {
      return !this.#i?.length;
    }
    isCancellable() {
      return this.#a.length <= 10;
    }
    add(t, e) {
      [t, e] = this.#d(t, e);
      const [i, s, n, r] = this.#t.subarray(2, 6), a = t - n, o = e - r;
      return Math.hypot(this.#l * a, this.#u * o) <= 2 ? null : (this.#a.push(t, e), isNaN(i) ? (this.#t.set([
        n,
        r,
        t,
        e
      ], 2), this.#e.push(NaN, NaN, NaN, NaN, t, e), {
        path: {
          d: this.toSVGPath()
        }
      }) : (isNaN(this.#t[0]) && this.#e.splice(6, 6), this.#t.set([
        i,
        s,
        n,
        r,
        t,
        e
      ], 0), this.#e.push(...L.createBezierPoints(i, s, n, r, t, e)), {
        path: {
          d: this.toSVGPath()
        }
      }));
    }
    end(t, e) {
      const i = this.add(t, e);
      return i || (this.#a.length === 2 ? {
        path: {
          d: this.toSVGPath()
        }
      } : null);
    }
    startNew(t, e, i, s, n) {
      this.#l = i, this.#u = s, this.#s = n, [t, e] = this.#d(t, e);
      const r = this.#e = [
        NaN,
        NaN,
        NaN,
        NaN,
        t,
        e
      ];
      this.#a = [
        t,
        e
      ];
      const a = this.#i.at(-1);
      return a && (a.line = new Float32Array(a.line), a.points = new Float32Array(a.points)), this.#i.push({
        line: r,
        points: this.#a
      }), this.#t.set(r, 0), this.#o = 0, this.toSVGPath(), null;
    }
    getLastElement() {
      return this.#i.at(-1);
    }
    setLastElement(t) {
      return this.#i ? (this.#i.push(t), this.#e = t.line, this.#a = t.points, this.#o = 0, {
        path: {
          d: this.toSVGPath()
        }
      }) : this.#h.setLastElement(t);
    }
    removeLastElement() {
      if (!this.#i) return this.#h.removeLastElement();
      this.#i.pop(), this.#r = "";
      for (let t = 0, e = this.#i.length; t < e; t++) {
        const { line: i, points: s } = this.#i[t];
        this.#e = i, this.#a = s, this.#o = 0, this.toSVGPath();
      }
      return {
        path: {
          d: this.#r
        }
      };
    }
    toSVGPath() {
      const t = L.svgRound(this.#e[4]), e = L.svgRound(this.#e[5]);
      if (this.#a.length === 2) return this.#r = `${this.#r} M ${t} ${e} Z`, this.#r;
      if (this.#a.length <= 6) {
        const s = this.#r.lastIndexOf("M");
        this.#r = `${this.#r.slice(0, s)} M ${t} ${e}`, this.#o = 6;
      }
      if (this.#a.length === 4) {
        const s = L.svgRound(this.#e[10]), n = L.svgRound(this.#e[11]);
        return this.#r = `${this.#r} L ${s} ${n}`, this.#o = 12, this.#r;
      }
      const i = [];
      this.#o === 0 && (i.push(`M ${t} ${e}`), this.#o = 6);
      for (let s = this.#o, n = this.#e.length; s < n; s += 6) {
        const [r, a, o, l, h, c] = this.#e.slice(s, s + 6).map(L.svgRound);
        i.push(`C${r} ${a} ${o} ${l} ${h} ${c}`);
      }
      return this.#r += i.join(" "), this.#o = this.#e.length, this.#r;
    }
    getOutlines(t, e, i, s) {
      const n = this.#i.at(-1);
      return n.line = new Float32Array(n.line), n.points = new Float32Array(n.points), this.#h.build(this.#i, t, e, i, this.#s, this.#n, s), this.#t = null, this.#e = null, this.#i = null, this.#r = null, this.#h;
    }
    get defaultSVGProperties() {
      return {
        root: {
          viewBox: "0 0 10000 10000"
        },
        rootClass: {
          draw: true
        },
        bbox: [
          0,
          0,
          1,
          1
        ]
      };
    }
  }
  class Ue extends L {
    #t;
    #e = 0;
    #i;
    #s;
    #n;
    #a;
    #r;
    #o;
    #h;
    build(t, e, i, s, n, r, a) {
      this.#n = e, this.#a = i, this.#r = s, this.#o = n, this.#h = r, this.#i = a ?? 0, this.#s = t, this.#d();
    }
    get thickness() {
      return this.#h;
    }
    setLastElement(t) {
      return this.#s.push(t), {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    removeLastElement() {
      return this.#s.pop(), {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    toSVGPath() {
      const t = [];
      for (const { line: e } of this.#s) {
        if (t.push(`M${L.svgRound(e[4])} ${L.svgRound(e[5])}`), e.length === 6) {
          t.push("Z");
          continue;
        }
        if (e.length === 12 && isNaN(e[6])) {
          t.push(`L${L.svgRound(e[10])} ${L.svgRound(e[11])}`);
          continue;
        }
        for (let i = 6, s = e.length; i < s; i += 6) {
          const [n, r, a, o, l, h] = e.subarray(i, i + 6).map(L.svgRound);
          t.push(`C${n} ${r} ${a} ${o} ${l} ${h}`);
        }
      }
      return t.join("");
    }
    serialize([t, e, i, s], n) {
      const r = [], a = [], [o, l, h, c] = this.#u();
      let d, p, m, b, y, w, v, E, _;
      switch (this.#o) {
        case 0:
          _ = L._rescale, d = t, p = e + s, m = i, b = -s, y = t + o * i, w = e + (1 - l - c) * s, v = t + (o + h) * i, E = e + (1 - l) * s;
          break;
        case 90:
          _ = L._rescaleAndSwap, d = t, p = e, m = i, b = s, y = t + l * i, w = e + o * s, v = t + (l + c) * i, E = e + (o + h) * s;
          break;
        case 180:
          _ = L._rescale, d = t + i, p = e, m = -i, b = s, y = t + (1 - o - h) * i, w = e + l * s, v = t + (1 - o) * i, E = e + (l + c) * s;
          break;
        case 270:
          _ = L._rescaleAndSwap, d = t + i, p = e + s, m = -i, b = -s, y = t + (1 - l - c) * i, w = e + (1 - o - h) * s, v = t + (1 - l) * i, E = e + (1 - o) * s;
          break;
      }
      for (const { line: S, points: T } of this.#s) r.push(_(S, d, p, m, b, n ? new Array(S.length) : null)), a.push(_(T, d, p, m, b, n ? new Array(T.length) : null));
      return {
        lines: r,
        points: a,
        rect: [
          y,
          w,
          v,
          E
        ]
      };
    }
    static deserialize(t, e, i, s, n, { paths: { lines: r, points: a }, rotation: o, thickness: l }) {
      const h = [];
      let c, d, p, m, b;
      switch (o) {
        case 0:
          b = L._rescale, c = -t / i, d = e / s + 1, p = 1 / i, m = -1 / s;
          break;
        case 90:
          b = L._rescaleAndSwap, c = -e / s, d = -t / i, p = 1 / s, m = 1 / i;
          break;
        case 180:
          b = L._rescale, c = t / i + 1, d = -e / s, p = -1 / i, m = 1 / s;
          break;
        case 270:
          b = L._rescaleAndSwap, c = e / s + 1, d = t / i + 1, p = -1 / s, m = -1 / i;
          break;
      }
      if (!r) {
        r = [];
        for (const w of a) {
          const v = w.length;
          if (v === 2) {
            r.push(new Float32Array([
              NaN,
              NaN,
              NaN,
              NaN,
              w[0],
              w[1]
            ]));
            continue;
          }
          if (v === 4) {
            r.push(new Float32Array([
              NaN,
              NaN,
              NaN,
              NaN,
              w[0],
              w[1],
              NaN,
              NaN,
              NaN,
              NaN,
              w[2],
              w[3]
            ]));
            continue;
          }
          const E = new Float32Array(3 * (v - 2));
          r.push(E);
          let [_, S, T, M] = w.subarray(0, 4);
          E.set([
            NaN,
            NaN,
            NaN,
            NaN,
            _,
            S
          ], 0);
          for (let I = 4; I < v; I += 2) {
            const F = w[I], R = w[I + 1];
            E.set(L.createBezierPoints(_, S, T, M, F, R), (I - 2) * 3), [_, S, T, M] = [
              T,
              M,
              F,
              R
            ];
          }
        }
      }
      for (let w = 0, v = r.length; w < v; w++) h.push({
        line: b(r[w].map((E) => E ?? NaN), c, d, p, m),
        points: b(a[w].map((E) => E ?? NaN), c, d, p, m)
      });
      const y = new this.prototype.constructor();
      return y.build(h, i, s, 1, o, l, n), y;
    }
    #l(t = this.#h) {
      const e = this.#i + t / 2 * this.#r;
      return this.#o % 180 === 0 ? [
        e / this.#n,
        e / this.#a
      ] : [
        e / this.#a,
        e / this.#n
      ];
    }
    #u() {
      const [t, e, i, s] = this.#t, [n, r] = this.#l(0);
      return [
        t + n,
        e + r,
        i - 2 * n,
        s - 2 * r
      ];
    }
    #d() {
      const t = this.#t = se.slice();
      for (const { line: s } of this.#s) {
        if (s.length <= 12) {
          for (let a = 4, o = s.length; a < o; a += 6) D.pointBoundingBox(s[a], s[a + 1], t);
          continue;
        }
        let n = s[4], r = s[5];
        for (let a = 6, o = s.length; a < o; a += 6) {
          const [l, h, c, d, p, m] = s.subarray(a, a + 6);
          D.bezierBoundingBox(n, r, l, h, c, d, p, m, t), n = p, r = m;
        }
      }
      const [e, i] = this.#l();
      t[0] = nt(t[0] - e, 0, 1), t[1] = nt(t[1] - i, 0, 1), t[2] = nt(t[2] + e, 0, 1), t[3] = nt(t[3] + i, 0, 1), t[2] -= t[0], t[3] -= t[1];
    }
    get box() {
      return this.#t;
    }
    updateProperty(t, e) {
      return t === "stroke-width" ? this.#p(e) : null;
    }
    #p(t) {
      const [e, i] = this.#l();
      this.#h = t;
      const [s, n] = this.#l(), [r, a] = [
        s - e,
        n - i
      ], o = this.#t;
      return o[0] -= r, o[1] -= a, o[2] += 2 * r, o[3] += 2 * a, o;
    }
    updateParentDimensions([t, e], i) {
      const [s, n] = this.#l();
      this.#n = t, this.#a = e, this.#r = i;
      const [r, a] = this.#l(), o = r - s, l = a - n, h = this.#t;
      return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
    }
    updateRotation(t) {
      return this.#e = t, {
        path: {
          transform: this.rotationTransform
        }
      };
    }
    get viewBox() {
      return this.#t.map(L.svgRound).join(" ");
    }
    get defaultProperties() {
      const [t, e] = this.#t;
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${L.svgRound(t)} ${L.svgRound(e)}`
        }
      };
    }
    get rotationTransform() {
      const [, , t, e] = this.#t;
      let i = 0, s = 0, n = 0, r = 0, a = 0, o = 0;
      switch (this.#e) {
        case 90:
          s = e / t, n = -t / e, a = t;
          break;
        case 180:
          i = -1, r = -1, a = t, o = e;
          break;
        case 270:
          s = -e / t, n = t / e, o = e;
          break;
        default:
          return "";
      }
      return `matrix(${i} ${s} ${n} ${r} ${L.svgRound(a)} ${L.svgRound(o)})`;
    }
    getPathResizingSVGProperties([t, e, i, s]) {
      const [n, r] = this.#l(), [a, o, l, h] = this.#t;
      if (Math.abs(l - n) <= L.PRECISION || Math.abs(h - r) <= L.PRECISION) {
        const b = t + i / 2 - (a + l / 2), y = e + s / 2 - (o + h / 2);
        return {
          path: {
            "transform-origin": `${L.svgRound(t)} ${L.svgRound(e)}`,
            transform: `${this.rotationTransform} translate(${b} ${y})`
          }
        };
      }
      const c = (i - 2 * n) / (l - 2 * n), d = (s - 2 * r) / (h - 2 * r), p = l / i, m = h / s;
      return {
        path: {
          "transform-origin": `${L.svgRound(a)} ${L.svgRound(o)}`,
          transform: `${this.rotationTransform} scale(${p} ${m}) translate(${L.svgRound(n)} ${L.svgRound(r)}) scale(${c} ${d}) translate(${L.svgRound(-n)} ${L.svgRound(-r)})`
        }
      };
    }
    getPathResizedSVGProperties([t, e, i, s]) {
      const [n, r] = this.#l(), a = this.#t, [o, l, h, c] = a;
      if (a[0] = t, a[1] = e, a[2] = i, a[3] = s, Math.abs(h - n) <= L.PRECISION || Math.abs(c - r) <= L.PRECISION) {
        const y = t + i / 2 - (o + h / 2), w = e + s / 2 - (l + c / 2);
        for (const { line: v, points: E } of this.#s) L._translate(v, y, w, v), L._translate(E, y, w, E);
        return {
          root: {
            viewBox: this.viewBox
          },
          path: {
            "transform-origin": `${L.svgRound(t)} ${L.svgRound(e)}`,
            transform: this.rotationTransform || null,
            d: this.toSVGPath()
          }
        };
      }
      const d = (i - 2 * n) / (h - 2 * n), p = (s - 2 * r) / (c - 2 * r), m = -d * (o + n) + t + n, b = -p * (l + r) + e + r;
      if (d !== 1 || p !== 1 || m !== 0 || b !== 0) for (const { line: y, points: w } of this.#s) L._rescale(y, m, b, d, p, y), L._rescale(w, m, b, d, p, w);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${L.svgRound(t)} ${L.svgRound(e)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    getPathTranslatedSVGProperties([t, e], i) {
      const [s, n] = i, r = this.#t, a = t - r[0], o = e - r[1];
      if (this.#n === s && this.#a === n) for (const { line: l, points: h } of this.#s) L._translate(l, a, o, l), L._translate(h, a, o, h);
      else {
        const l = this.#n / s, h = this.#a / n;
        this.#n = s, this.#a = n;
        for (const { line: c, points: d } of this.#s) L._rescale(c, a, o, l, h, c), L._rescale(d, a, o, l, h, d);
        r[2] *= l, r[3] *= h;
      }
      return r[0] = t, r[1] = e, {
        root: {
          viewBox: this.viewBox
        },
        path: {
          d: this.toSVGPath(),
          "transform-origin": `${L.svgRound(t)} ${L.svgRound(e)}`
        }
      };
    }
    get defaultSVGProperties() {
      const t = this.#t;
      return {
        root: {
          viewBox: this.viewBox
        },
        rootClass: {
          draw: true
        },
        path: {
          d: this.toSVGPath(),
          "transform-origin": `${L.svgRound(t[0])} ${L.svgRound(t[1])}`,
          transform: this.rotationTransform || null
        },
        bbox: t
      };
    }
  }
  class yi extends gn {
    constructor(t) {
      super(), this._viewParameters = t, super.updateProperties({
        fill: "none",
        stroke: O._defaultLineColor,
        "stroke-opacity": 1,
        "stroke-width": 1,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": 10
      });
    }
    updateSVGProperty(t, e) {
      t === "stroke-width" && (e ??= this["stroke-width"], e *= this._viewParameters.realScale), super.updateSVGProperty(t, e);
    }
    clone() {
      const t = new yi(this._viewParameters);
      return t.updateAll(this), t;
    }
  }
  class rs extends J {
    static _type = "ink";
    static _editorType = j.INK;
    static _defaultDrawingOptions = null;
    constructor(t) {
      super({
        ...t,
        name: "inkEditor"
      }), this._willKeepAspectRatio = true, this.defaultL10nId = "pdfjs-editor-ink-editor";
    }
    static initialize(t, e) {
      O.initialize(t, e), this._defaultDrawingOptions = new yi(e.viewParameters);
    }
    static getDefaultDrawingOptions(t) {
      const e = this._defaultDrawingOptions.clone();
      return e.updateProperties(t), e;
    }
    static get supportMultipleDrawings() {
      return true;
    }
    static get typesMap() {
      return $(this, "typesMap", /* @__PURE__ */ new Map([
        [
          V.INK_THICKNESS,
          "stroke-width"
        ],
        [
          V.INK_COLOR,
          "stroke"
        ],
        [
          V.INK_OPACITY,
          "stroke-opacity"
        ]
      ]));
    }
    static createDrawerInstance(t, e, i, s, n) {
      return new Pa(t, e, i, s, n, this._defaultDrawingOptions["stroke-width"]);
    }
    static deserializeDraw(t, e, i, s, n, r) {
      return Ue.deserialize(t, e, i, s, n, r);
    }
    static async deserialize(t, e, i) {
      let s = null;
      if (t instanceof ss) {
        const { data: { inkLists: r, rect: a, rotation: o, id: l, color: h, opacity: c, borderStyle: { rawWidth: d }, popupRef: p, richText: m, contentsObj: b, creationDate: y, modificationDate: w }, parent: { page: { pageNumber: v } } } = t;
        s = t = {
          annotationType: j.INK,
          color: Array.from(h),
          thickness: d,
          opacity: c,
          paths: {
            points: r
          },
          boxes: null,
          pageIndex: v - 1,
          rect: a.slice(0),
          rotation: o,
          annotationElementId: l,
          id: l,
          deleted: false,
          popupRef: p,
          richText: m,
          comment: b?.str || null,
          creationDate: y,
          modificationDate: w
        };
      }
      const n = await super.deserialize(t, e, i);
      return n._initialData = s, t.comment && n.setCommentData(t), n;
    }
    get toolbarButtons() {
      return this._colorPicker ||= new Le(this), [
        [
          "colorPicker",
          this._colorPicker
        ]
      ];
    }
    get colorType() {
      return V.INK_COLOR;
    }
    get colorAndOpacityType() {
      return V.INK_COLOR_AND_OPACITY;
    }
    get opacityType() {
      return V.INK_OPACITY;
    }
    updateParams(t, e) {
      if (t === V.INK_COLOR_AND_OPACITY) {
        this._updateColorAndOpacity(e.color, e.opacity);
        return;
      }
      super.updateParams(t, e);
    }
    static updateDefaultParams(t, e) {
      if (t === V.INK_COLOR_AND_OPACITY) {
        super.updateDefaultParams(V.INK_COLOR, e.color), super.updateDefaultParams(V.INK_OPACITY, e.opacity);
        return;
      }
      super.updateDefaultParams(t, e);
    }
    get color() {
      return this._drawingOptions.stroke;
    }
    get opacity() {
      return this._drawingOptions["stroke-opacity"];
    }
    onScaleChanging() {
      if (!this.parent) return;
      super.onScaleChanging();
      const { _drawId: t, _drawingOptions: e, parent: i } = this;
      e.updateSVGProperty("stroke-width"), i.drawLayer.updateProperties(t, e.toSVGProperties());
    }
    static onScaleChangingWhenDrawing() {
      const t = this._currentParent;
      t && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), t.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
    }
    createDrawingOptions({ color: t, thickness: e, opacity: i }) {
      this._drawingOptions = rs.getDefaultDrawingOptions({
        stroke: D.makeHexColor(...t),
        "stroke-width": e,
        "stroke-opacity": i
      });
    }
    serialize(t = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const { lines: e, points: i } = this.serializeDraw(t), { _drawingOptions: { stroke: s, "stroke-opacity": n, "stroke-width": r } } = this, a = Object.assign(super.serialize(t), {
        color: O._colorManager.convert(s),
        opacity: n,
        thickness: r,
        paths: {
          lines: e,
          points: i
        }
      });
      return this.addComment(a), t ? (a.isCopy = true, a) : this.annotationElementId && !this.#t(a) ? null : (a.id = this.annotationElementId, a);
    }
    #t(t) {
      const { color: e, thickness: i, opacity: s, pageIndex: n } = this._initialData;
      return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || t.color.some((r, a) => r !== e[a]) || t.thickness !== i || t.opacity !== s || t.pageIndex !== n;
    }
    renderAnnotationElement(t) {
      if (this.deleted) return t.hide(), null;
      const { points: e, rect: i } = this.serializeDraw(false);
      return t.updateEdited({
        rect: i,
        thickness: this._drawingOptions["stroke-width"],
        points: e,
        popup: this.comment
      }), null;
    }
  }
  class zi extends Ue {
    toSVGPath() {
      let t = super.toSVGPath();
      return t.endsWith("Z") || (t += "Z"), t;
    }
  }
  const qe = 8, Se = 3;
  pe = class {
    static #t = {
      maxDim: 512,
      sigmaSFactor: 0.02,
      sigmaR: 25,
      kernelSize: 16
    };
    static #e(t, e, i, s) {
      return i -= t, s -= e, i === 0 ? s > 0 ? 0 : 4 : i === 1 ? s + 6 : 2 - s;
    }
    static #i = new Int32Array([
      0,
      1,
      -1,
      1,
      -1,
      0,
      -1,
      -1,
      0,
      -1,
      1,
      -1,
      1,
      0,
      1,
      1
    ]);
    static #s(t, e, i, s, n, r, a) {
      const o = this.#e(i, s, n, r);
      for (let l = 0; l < 8; l++) {
        const h = (-l + o - a + 16) % 8, c = this.#i[2 * h], d = this.#i[2 * h + 1];
        if (t[(i + c) * e + (s + d)] !== 0) return h;
      }
      return -1;
    }
    static #n(t, e, i, s, n, r, a) {
      const o = this.#e(i, s, n, r);
      for (let l = 0; l < 8; l++) {
        const h = (l + o + a + 16) % 8, c = this.#i[2 * h], d = this.#i[2 * h + 1];
        if (t[(i + c) * e + (s + d)] !== 0) return h;
      }
      return -1;
    }
    static #a(t, e, i, s) {
      const n = t.length, r = new Int32Array(n);
      for (let h = 0; h < n; h++) r[h] = t[h] <= s ? 1 : 0;
      for (let h = 1; h < i - 1; h++) r[h * e] = r[h * e + e - 1] = 0;
      for (let h = 0; h < e; h++) r[h] = r[e * i - 1 - h] = 0;
      let a = 1, o;
      const l = [];
      for (let h = 1; h < i - 1; h++) {
        o = 1;
        for (let c = 1; c < e - 1; c++) {
          const d = h * e + c, p = r[d];
          if (p === 0) continue;
          let m = h, b = c;
          if (p === 1 && r[d - 1] === 0) a += 1, b -= 1;
          else if (p >= 1 && r[d + 1] === 0) a += 1, b += 1, p > 1 && (o = p);
          else {
            p !== 1 && (o = Math.abs(p));
            continue;
          }
          const y = [
            c,
            h
          ], w = b === c + 1, v = {
            isHole: w,
            points: y,
            id: a,
            parent: 0
          };
          l.push(v);
          let E;
          for (const B of l) if (B.id === o) {
            E = B;
            break;
          }
          E ? E.isHole ? v.parent = w ? E.parent : o : v.parent = w ? o : E.parent : v.parent = w ? o : 0;
          const _ = this.#s(r, e, h, c, m, b, 0);
          if (_ === -1) {
            r[d] = -a, r[d] !== 1 && (o = Math.abs(r[d]));
            continue;
          }
          let S = this.#i[2 * _], T = this.#i[2 * _ + 1];
          const M = h + S, I = c + T;
          m = M, b = I;
          let F = h, R = c;
          for (; ; ) {
            const B = this.#n(r, e, F, R, m, b, 1);
            S = this.#i[2 * B], T = this.#i[2 * B + 1];
            const H = F + S, X = R + T;
            y.push(X, H);
            const Y = F * e + R;
            if (r[Y + 1] === 0 ? r[Y] = -a : r[Y] === 1 && (r[Y] = a), H === h && X === c && F === M && R === I) {
              r[d] !== 1 && (o = Math.abs(r[d]));
              break;
            } else m = F, b = R, F = H, R = X;
          }
        }
      }
      return l;
    }
    static #r(t, e, i, s) {
      if (i - e <= 4) {
        for (let M = e; M < i - 2; M += 2) s.push(t[M], t[M + 1]);
        return;
      }
      const n = t[e], r = t[e + 1], a = t[i - 4] - n, o = t[i - 3] - r, l = Math.hypot(a, o), h = a / l, c = o / l, d = h * r - c * n, p = o / a, m = 1 / l, b = Math.atan(p), y = Math.cos(b), w = Math.sin(b), v = m * (Math.abs(y) + Math.abs(w)), E = m * (1 - v + v ** 2), _ = Math.max(Math.atan(Math.abs(w + y) * E), Math.atan(Math.abs(w - y) * E));
      let S = 0, T = e;
      for (let M = e + 2; M < i - 2; M += 2) {
        const I = Math.abs(d - h * t[M + 1] + c * t[M]);
        I > S && (T = M, S = I);
      }
      S > (l * _) ** 2 ? (this.#r(t, e, T + 2, s), this.#r(t, T, i, s)) : s.push(n, r);
    }
    static #o(t) {
      const e = [], i = t.length;
      return this.#r(t, 0, i, e), e.push(t[i - 2], t[i - 1]), e.length <= 4 ? null : e;
    }
    static #h(t, e, i, s, n, r) {
      const a = new Float32Array(r ** 2), o = -2 * s ** 2, l = r >> 1;
      for (let b = 0; b < r; b++) {
        const y = (b - l) ** 2;
        for (let w = 0; w < r; w++) a[b * r + w] = Math.exp((y + (w - l) ** 2) / o);
      }
      const h = new Float32Array(256), c = -2 * n ** 2;
      for (let b = 0; b < 256; b++) h[b] = Math.exp(b ** 2 / c);
      const d = t.length, p = new Uint8Array(d), m = new Uint32Array(256);
      for (let b = 0; b < i; b++) for (let y = 0; y < e; y++) {
        const w = b * e + y, v = t[w];
        let E = 0, _ = 0;
        for (let T = 0; T < r; T++) {
          const M = b + T - l;
          if (!(M < 0 || M >= i)) for (let I = 0; I < r; I++) {
            const F = y + I - l;
            if (F < 0 || F >= e) continue;
            const R = t[M * e + F], B = a[T * r + I] * h[Math.abs(R - v)];
            E += R * B, _ += B;
          }
        }
        const S = p[w] = Math.round(E / _);
        m[S]++;
      }
      return [
        p,
        m
      ];
    }
    static #l(t) {
      const e = new Uint32Array(256);
      for (const i of t) e[i]++;
      return e;
    }
    static #u(t) {
      const e = t.length, i = new Uint8ClampedArray(e >> 2);
      let s = -1 / 0, n = 1 / 0;
      for (let a = 0, o = i.length; a < o; a++) {
        const l = i[a] = t[a << 2];
        s = Math.max(s, l), n = Math.min(n, l);
      }
      const r = 255 / (s - n);
      for (let a = 0, o = i.length; a < o; a++) i[a] = (i[a] - n) * r;
      return i;
    }
    static #d(t) {
      let e, i = -1 / 0, s = -1 / 0;
      const n = t.findIndex((o) => o !== 0);
      let r = n, a = n;
      for (e = n; e < 256; e++) {
        const o = t[e];
        o > i && (e - r > s && (s = e - r, a = e - 1), i = o, r = e);
      }
      for (e = a - 1; e >= 0 && !(t[e] > t[e + 1]); e--) ;
      return e;
    }
    static #p(t) {
      const e = t, { width: i, height: s } = t, { maxDim: n } = this.#t;
      let r = i, a = s;
      if (i > n || s > n) {
        let d = i, p = s, m = Math.log2(Math.max(i, s) / n);
        const b = Math.floor(m);
        m = m === b ? b - 1 : b;
        for (let w = 0; w < m; w++) {
          r = Math.ceil(d / 2), a = Math.ceil(p / 2);
          const v = new OffscreenCanvas(r, a);
          v.getContext("2d").drawImage(t, 0, 0, d, p, 0, 0, r, a), d = r, p = a, t !== e && t.close(), t = v.transferToImageBitmap();
        }
        const y = Math.min(n / r, n / a);
        r = Math.round(r * y), a = Math.round(a * y);
      }
      const l = new OffscreenCanvas(r, a).getContext("2d", {
        willReadFrequently: true
      });
      l.fillStyle = "white", l.fillRect(0, 0, r, a), l.filter = "grayscale(1)", l.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, a);
      const h = l.getImageData(0, 0, r, a).data;
      return [
        this.#u(h),
        r,
        a
      ];
    }
    static extractContoursFromText(t, { fontFamily: e, fontStyle: i, fontWeight: s }, n, r, a, o) {
      let l = new OffscreenCanvas(1, 1), h = l.getContext("2d", {
        alpha: false
      });
      const c = 200, d = h.font = `${i} ${s} ${c}px ${e}`, { actualBoundingBoxLeft: p, actualBoundingBoxRight: m, actualBoundingBoxAscent: b, actualBoundingBoxDescent: y, fontBoundingBoxAscent: w, fontBoundingBoxDescent: v, width: E } = h.measureText(t), _ = 1.5, S = Math.ceil(Math.max(Math.abs(p) + Math.abs(m) || 0, E) * _), T = Math.ceil(Math.max(Math.abs(b) + Math.abs(y) || c, Math.abs(w) + Math.abs(v) || c) * _);
      l = new OffscreenCanvas(S, T), h = l.getContext("2d", {
        alpha: true,
        willReadFrequently: true
      }), h.font = d, h.filter = "grayscale(1)", h.fillStyle = "white", h.fillRect(0, 0, S, T), h.fillStyle = "black", h.fillText(t, S * (_ - 1) / 2, T * (3 - _) / 2);
      const M = this.#u(h.getImageData(0, 0, S, T).data), I = this.#l(M), F = this.#d(I), R = this.#a(M, S, T, F);
      return this.processDrawnLines({
        lines: {
          curves: R,
          width: S,
          height: T
        },
        pageWidth: n,
        pageHeight: r,
        rotation: a,
        innerMargin: o,
        mustSmooth: true,
        areContours: true
      });
    }
    static process(t, e, i, s, n) {
      const [r, a, o] = this.#p(t), [l, h] = this.#h(r, a, o, Math.hypot(a, o) * this.#t.sigmaSFactor, this.#t.sigmaR, this.#t.kernelSize), c = this.#d(h), d = this.#a(l, a, o, c);
      return this.processDrawnLines({
        lines: {
          curves: d,
          width: a,
          height: o
        },
        pageWidth: e,
        pageHeight: i,
        rotation: s,
        innerMargin: n,
        mustSmooth: true,
        areContours: true
      });
    }
    static processDrawnLines({ lines: t, pageWidth: e, pageHeight: i, rotation: s, innerMargin: n, mustSmooth: r, areContours: a }) {
      s % 180 !== 0 && ([e, i] = [
        i,
        e
      ]);
      const { curves: o, width: l, height: h } = t, c = t.thickness ?? 0, d = [], p = Math.min(e / l, i / h), m = p / e, b = p / i, y = [];
      for (const { points: v } of o) {
        const E = r ? this.#o(v) : v;
        if (!E) continue;
        y.push(E);
        const _ = E.length, S = new Float32Array(_), T = new Float32Array(3 * (_ === 2 ? 2 : _ - 2));
        if (d.push({
          line: T,
          points: S
        }), _ === 2) {
          S[0] = E[0] * m, S[1] = E[1] * b, T.set([
            NaN,
            NaN,
            NaN,
            NaN,
            S[0],
            S[1]
          ], 0);
          continue;
        }
        let [M, I, F, R] = E;
        M *= m, I *= b, F *= m, R *= b, S.set([
          M,
          I,
          F,
          R
        ], 0), T.set([
          NaN,
          NaN,
          NaN,
          NaN,
          M,
          I
        ], 0);
        for (let B = 4; B < _; B += 2) {
          const H = S[B] = E[B] * m, X = S[B + 1] = E[B + 1] * b;
          T.set(L.createBezierPoints(M, I, F, R, H, X), (B - 2) * 3), [M, I, F, R] = [
            F,
            R,
            H,
            X
          ];
        }
      }
      if (d.length === 0) return null;
      const w = a ? new zi() : new Ue();
      return w.build(d, e, i, 1, s, a ? 0 : c, n), {
        outline: w,
        newCurves: y,
        areContours: a,
        thickness: c,
        width: l,
        height: h
      };
    }
    static async compressSignature({ outlines: t, areContours: e, thickness: i, width: s, height: n }) {
      let r = 1 / 0, a = -1 / 0, o = 0;
      for (const v of t) {
        o += v.length;
        for (let E = 2, _ = v.length; E < _; E++) {
          const S = v[E] - v[E - 2];
          r = Math.min(r, S), a = Math.max(a, S);
        }
      }
      let l;
      r >= -128 && a <= 127 ? l = Int8Array : r >= -32768 && a <= 32767 ? l = Int16Array : l = Int32Array;
      const h = t.length, c = qe + Se * h, d = new Uint32Array(c);
      let p = 0;
      d[p++] = c * Uint32Array.BYTES_PER_ELEMENT + (o - 2 * h) * l.BYTES_PER_ELEMENT, d[p++] = 0, d[p++] = s, d[p++] = n, d[p++] = e ? 0 : 1, d[p++] = Math.max(0, Math.floor(i ?? 0)), d[p++] = h, d[p++] = l.BYTES_PER_ELEMENT;
      for (const v of t) d[p++] = v.length - 2, d[p++] = v[0], d[p++] = v[1];
      const m = new CompressionStream("deflate-raw"), b = m.writable.getWriter();
      await b.ready, b.write(d);
      const y = l.prototype.constructor;
      for (const v of t) {
        const E = new y(v.length - 2);
        for (let _ = 2, S = v.length; _ < S; _++) E[_ - 2] = v[_] - v[_ - 2];
        b.write(E);
      }
      return b.close(), (await new Response(m.readable).bytes()).toBase64();
    }
    static async decompressSignature(t) {
      try {
        const e = Uint8Array.fromBase64(t), { readable: i, writable: s } = new DecompressionStream("deflate-raw"), n = s.getWriter();
        await n.ready, n.write(e).then(async () => {
          await n.ready, await n.close();
        }).catch(() => {
        });
        let r = null, a = 0;
        for await (const E of i) r ||= new Uint8Array(new Uint32Array(E.buffer, 0, 4)[0]), r.set(E, a), a += E.length;
        const o = new Uint32Array(r.buffer, 0, r.length >> 2), l = o[1];
        if (l !== 0) throw new Error(`Invalid version: ${l}`);
        const h = o[2], c = o[3], d = o[4] === 0, p = o[5], m = o[6], b = o[7], y = [], w = (qe + Se * m) * Uint32Array.BYTES_PER_ELEMENT;
        let v;
        switch (b) {
          case Int8Array.BYTES_PER_ELEMENT:
            v = new Int8Array(r.buffer, w);
            break;
          case Int16Array.BYTES_PER_ELEMENT:
            v = new Int16Array(r.buffer, w);
            break;
          case Int32Array.BYTES_PER_ELEMENT:
            v = new Int32Array(r.buffer, w);
            break;
        }
        a = 0;
        for (let E = 0; E < m; E++) {
          const _ = o[Se * E + qe], S = new Float32Array(_ + 2);
          y.push(S);
          for (let T = 0; T < Se - 1; T++) S[T] = o[Se * E + qe + T + 1];
          for (let T = 0; T < _; T++) S[T + 2] = S[T] + v[a++];
        }
        return {
          areContours: d,
          thickness: p,
          outlines: y,
          width: h,
          height: c
        };
      } catch (e) {
        return z(`decompressSignature: ${e}`), null;
      }
    }
  };
  class as extends gn {
    constructor() {
      super(), super.updateProperties({
        fill: O._defaultLineColor,
        "stroke-width": 0
      });
    }
    clone() {
      const t = new as();
      return t.updateAll(this), t;
    }
  }
  class os extends yi {
    constructor(t) {
      super(t), super.updateProperties({
        stroke: O._defaultLineColor,
        "stroke-width": 1
      });
    }
    clone() {
      const t = new os(this._viewParameters);
      return t.updateAll(this), t;
    }
  }
  class Ht extends J {
    #t = false;
    #e = null;
    #i = null;
    #s = null;
    static _type = "signature";
    static _editorType = j.SIGNATURE;
    static _defaultDrawingOptions = null;
    constructor(t) {
      super({
        ...t,
        mustBeCommitted: true,
        name: "signatureEditor"
      }), this._willKeepAspectRatio = true, this.#i = t.signatureData || null, this.#e = null, this.defaultL10nId = "pdfjs-editor-signature-editor1";
    }
    static initialize(t, e) {
      O.initialize(t, e), this._defaultDrawingOptions = new as(), this._defaultDrawnSignatureOptions = new os(e.viewParameters);
    }
    static getDefaultDrawingOptions(t) {
      const e = this._defaultDrawingOptions.clone();
      return e.updateProperties(t), e;
    }
    static get supportMultipleDrawings() {
      return false;
    }
    static get typesMap() {
      return $(this, "typesMap", /* @__PURE__ */ new Map());
    }
    static get isDrawer() {
      return false;
    }
    get telemetryFinalData() {
      return {
        type: "signature",
        hasDescription: !!this.#e
      };
    }
    static computeTelemetryFinalData(t) {
      const e = t.get("hasDescription");
      return {
        hasAltText: e.get(true) ?? 0,
        hasNoAltText: e.get(false) ?? 0
      };
    }
    get isResizable() {
      return true;
    }
    onScaleChanging() {
      this._drawId !== null && super.onScaleChanging();
    }
    render() {
      if (this.div) return this.div;
      let t, e;
      const { _isCopy: i } = this;
      if (i && (this._isCopy = false, t = this.x, e = this.y), super.render(), this._drawId === null) if (this.#i) {
        const { lines: s, mustSmooth: n, areContours: r, description: a, uuid: o, heightInPage: l } = this.#i, { rawDims: { pageWidth: h, pageHeight: c }, rotation: d } = this.parent.viewport, p = pe.processDrawnLines({
          lines: s,
          pageWidth: h,
          pageHeight: c,
          rotation: d,
          innerMargin: Ht._INNER_MARGIN,
          mustSmooth: n,
          areContours: r
        });
        this.addSignature(p, l, a, o);
      } else this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: ""
      })), this.div.hidden = true, this._uiManager.getSignature(this);
      else this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: this.#e || ""
      }));
      return i && (this._isCopy = true, this._moveAfterPaste(t, e)), this.div;
    }
    setUuid(t) {
      this.#s = t, this.addEditToolbar();
    }
    getUuid() {
      return this.#s;
    }
    get description() {
      return this.#e;
    }
    set description(t) {
      this.#e = t, this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: t
      })), super.addEditToolbar().then((e) => {
        e?.updateEditSignatureButton(t);
      }));
    }
    getSignaturePreview() {
      const { newCurves: t, areContours: e, thickness: i, width: s, height: n } = this.#i, r = Math.max(s, n), a = pe.processDrawnLines({
        lines: {
          curves: t.map((o) => ({
            points: o
          })),
          thickness: i,
          width: s,
          height: n
        },
        pageWidth: r,
        pageHeight: r,
        rotation: 0,
        innerMargin: 0,
        mustSmooth: false,
        areContours: e
      });
      return {
        areContours: e,
        outline: a.outline
      };
    }
    get toolbarButtons() {
      return this._uiManager.signatureManager ? [
        [
          "editSignature",
          this._uiManager.signatureManager
        ]
      ] : super.toolbarButtons;
    }
    addSignature(t, e, i, s) {
      const { x: n, y: r } = this, { outline: a } = this.#i = t;
      this.#t = a instanceof zi, this.description = i;
      let o;
      this.#t ? o = Ht.getDefaultDrawingOptions() : (o = Ht._defaultDrawnSignatureOptions.clone(), o.updateProperties({
        "stroke-width": a.thickness
      })), this._addOutlines({
        drawOutlines: a,
        drawingOptions: o
      });
      const [, l] = this.pageDimensions;
      let h = e / l;
      h = h >= 1 ? 0.5 : h, this.width *= h / this.height, this.width >= 1 && (h *= 0.9 / this.width, this.width = 0.9), this.height = h, this.setDims(), this.x = n, this.y = r, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(s), this._reportTelemetry({
        action: "pdfjs.signature.inserted",
        data: {
          hasBeenSaved: !!s,
          hasDescription: !!i
        }
      }), this.div.hidden = false;
    }
    getFromImage(t) {
      const { rawDims: { pageWidth: e, pageHeight: i }, rotation: s } = this.parent.viewport;
      return pe.process(t, e, i, s, Ht._INNER_MARGIN);
    }
    getFromText(t, e) {
      const { rawDims: { pageWidth: i, pageHeight: s }, rotation: n } = this.parent.viewport;
      return pe.extractContoursFromText(t, e, i, s, n, Ht._INNER_MARGIN);
    }
    getDrawnSignature(t) {
      const { rawDims: { pageWidth: e, pageHeight: i }, rotation: s } = this.parent.viewport;
      return pe.processDrawnLines({
        lines: t,
        pageWidth: e,
        pageHeight: i,
        rotation: s,
        innerMargin: Ht._INNER_MARGIN,
        mustSmooth: false,
        areContours: false
      });
    }
    createDrawingOptions({ areContours: t, thickness: e }) {
      t ? this._drawingOptions = Ht.getDefaultDrawingOptions() : (this._drawingOptions = Ht._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
        "stroke-width": e
      }));
    }
    serialize(t = false) {
      if (this.isEmpty()) return null;
      const { lines: e, points: i } = this.serializeDraw(t), { _drawingOptions: { "stroke-width": s } } = this, n = Object.assign(super.serialize(t), {
        isSignature: true,
        areContours: this.#t,
        color: [
          0,
          0,
          0
        ],
        thickness: this.#t ? 0 : s
      });
      return this.addComment(n), t ? (n.paths = {
        lines: e,
        points: i
      }, n.uuid = this.#s, n.isCopy = true) : n.lines = e, this.#e && (n.accessibilityData = {
        type: "Figure",
        alt: this.#e
      }), n;
    }
    static deserializeDraw(t, e, i, s, n, r) {
      return r.areContours ? zi.deserialize(t, e, i, s, n, r) : Ue.deserialize(t, e, i, s, n, r);
    }
    static async deserialize(t, e, i) {
      const s = await super.deserialize(t, e, i);
      return s.#t = t.areContours, s.description = t.accessibilityData?.alt || "", s.#s = t.uuid, s;
    }
  }
  class Ia extends O {
    #t = null;
    #e = null;
    #i = null;
    #s = null;
    #n = null;
    #a = "";
    #r = null;
    #o = false;
    #h = null;
    #l = false;
    #u = false;
    static _type = "stamp";
    static _editorType = j.STAMP;
    constructor(t) {
      super({
        ...t,
        name: "stampEditor"
      }), this.#s = t.bitmapUrl, this.#n = t.bitmapFile, this.defaultL10nId = "pdfjs-editor-stamp-editor";
    }
    static initialize(t, e) {
      O.initialize(t, e);
    }
    static isHandlingMimeForPasting(t) {
      return Bi.includes(t);
    }
    static paste(t, e) {
      e.pasteEditor({
        mode: j.STAMP
      }, {
        bitmapFile: t.getAsFile()
      });
    }
    altTextFinish() {
      this._uiManager.useNewAltTextFlow && (this.div.hidden = false), super.altTextFinish();
    }
    get telemetryFinalData() {
      return {
        type: "stamp",
        hasAltText: !!this.altTextData?.altText
      };
    }
    static computeTelemetryFinalData(t) {
      const e = t.get("hasAltText");
      return {
        hasAltText: e.get(true) ?? 0,
        hasNoAltText: e.get(false) ?? 0
      };
    }
    #d(t, e = false) {
      if (!t) {
        this.remove();
        return;
      }
      this.#t = t.bitmap, e || (this.#e = t.id, this.#l = t.isSvg), t.file && (this.#a = t.file.name), this.#g();
    }
    #p() {
      if (this.#i = null, this._uiManager.enableWaiting(false), !!this.#r) {
        if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#t) {
          this.addEditToolbar().then(() => {
            this._editToolbar.hide(), this._uiManager.editAltText(this, true);
          });
          return;
        }
        if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#t) {
          this._reportTelemetry({
            action: "pdfjs.image.image_added",
            data: {
              alt_text_modal: false,
              alt_text_type: "empty"
            }
          });
          try {
            this.mlGuessAltText();
          } catch {
          }
        }
        this.div.focus();
      }
    }
    async mlGuessAltText(t = null, e = true) {
      if (this.hasAltTextData()) return null;
      const { mlManager: i } = this._uiManager;
      if (!i) throw new Error("No ML.");
      if (!await i.isEnabledFor("altText")) throw new Error("ML isn't enabled for alt text.");
      const { data: s, width: n, height: r } = t || this.copyCanvas(null, null, true).imageData, a = await i.guess({
        name: "altText",
        request: {
          data: s,
          width: n,
          height: r,
          channels: s.length / (n * r)
        }
      });
      if (!a) throw new Error("No response from the AI service.");
      if (a.error) throw new Error("Error from the AI service.");
      if (a.cancel) return null;
      if (!a.output) throw new Error("No valid response from the AI service.");
      const o = a.output;
      return await this.setGuessedAltText(o), e && !this.hasAltTextData() && (this.altTextData = {
        alt: o,
        decorative: false
      }), o;
    }
    #m() {
      if (this.#e) {
        this._uiManager.enableWaiting(true), this._uiManager.imageManager.getFromId(this.#e).then((i) => this.#d(i, true)).finally(() => this.#p());
        return;
      }
      if (this.#s) {
        const i = this.#s;
        this.#s = null, this._uiManager.enableWaiting(true), this.#i = this._uiManager.imageManager.getFromUrl(i).then((s) => this.#d(s)).finally(() => this.#p());
        return;
      }
      if (this.#n) {
        const i = this.#n;
        this.#n = null, this._uiManager.enableWaiting(true), this.#i = this._uiManager.imageManager.getFromFile(i).then((s) => this.#d(s)).finally(() => this.#p());
        return;
      }
      const t = document.createElement("input");
      t.type = "file", t.accept = Bi.join(",");
      const e = this._uiManager._signal;
      this.#i = new Promise((i) => {
        t.addEventListener("change", async () => {
          if (!t.files || t.files.length === 0) this.remove();
          else {
            this._uiManager.enableWaiting(true);
            const s = await this._uiManager.imageManager.getFromFile(t.files[0]);
            this._reportTelemetry({
              action: "pdfjs.image.image_selected",
              data: {
                alt_text_modal: this._uiManager.useNewAltTextFlow
              }
            }), this.#d(s);
          }
          i();
        }, {
          signal: e
        }), t.addEventListener("cancel", () => {
          this.remove(), i();
        }, {
          signal: e
        });
      }).finally(() => this.#p()), t.click();
    }
    remove() {
      this.#e && (this.#t = null, this._uiManager.imageManager.deleteId(this.#e), this.#r?.remove(), this.#r = null, this.#h && (clearTimeout(this.#h), this.#h = null)), super.remove();
    }
    rebuild() {
      if (!this.parent) {
        this.#e && this.#m();
        return;
      }
      super.rebuild(), this.div !== null && (this.#e && this.#r === null && this.#m(), this.isAttachedToDOM || this.parent.add(this));
    }
    onceAdded(t) {
      this._isDraggable = true, t && this.div.focus();
    }
    isEmpty() {
      return !(this.#i || this.#t || this.#s || this.#n || this.#e || this.#o);
    }
    get toolbarButtons() {
      return [
        [
          "altText",
          this.createAltText()
        ]
      ];
    }
    get isResizable() {
      return true;
    }
    render() {
      if (this.div) return this.div;
      let t, e;
      return this._isCopy && (t = this.x, e = this.y), super.render(), this.div.hidden = true, this.createAltText(), this.#o || (this.#t ? this.#g() : this.#m()), this._isCopy && this._moveAfterPaste(t, e), this._uiManager.addShouldRescale(this), this.div;
    }
    setCanvas(t, e) {
      const { id: i, bitmap: s } = this._uiManager.imageManager.getFromCanvas(t, e);
      e.remove(), i && this._uiManager.imageManager.isValidId(i) && (this.#e = i, s && (this.#t = s), this.#o = false, this.#g());
    }
    _onResized() {
      this.onScaleChanging();
    }
    onScaleChanging() {
      if (!this.parent) return;
      this.#h !== null && clearTimeout(this.#h);
      const t = 200;
      this.#h = setTimeout(() => {
        this.#h = null, this.#f();
      }, t);
    }
    #g() {
      const { div: t } = this;
      let { width: e, height: i } = this.#t;
      const [s, n] = this.pageDimensions, r = 0.75;
      if (this.width) e = this.width * s, i = this.height * n;
      else if (e > r * s || i > r * n) {
        const o = Math.min(r * s / e, r * n / i);
        e *= o, i *= o;
      }
      this._uiManager.enableWaiting(false);
      const a = this.#r = document.createElement("canvas");
      a.setAttribute("role", "img"), this.addContainer(a), this.width = e / s, this.height = i / n, this.setDims(), this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (t.hidden = false), this.#f(), this.#u || (this.parent.addUndoableEditor(this), this.#u = true), this._reportTelemetry({
        action: "inserted_image"
      }), this.#a && this.div.setAttribute("aria-description", this.#a), this.annotationElementId || this._uiManager.a11yAlert(O._l10nAlert.stamp);
    }
    copyCanvas(t, e, i = false) {
      t || (t = 224);
      const { width: s, height: n } = this.#t, r = new jt();
      let a = this.#t, o = s, l = n, h = null;
      if (e) {
        if (s > e || n > e) {
          const T = Math.min(e / s, e / n);
          o = Math.floor(s * T), l = Math.floor(n * T);
        }
        h = document.createElement("canvas");
        const d = h.width = Math.ceil(o * r.sx), p = h.height = Math.ceil(l * r.sy);
        this.#l || (a = this.#c(d, p));
        const m = h.getContext("2d");
        m.filter = this._uiManager.hcmFilter;
        let b = "white", y = "#cfcfd8";
        this._uiManager.hcmFilter !== "none" ? y = "black" : Nn.isDarkMode && (b = "#8f8f9d", y = "#42414d");
        const w = 15, v = w * r.sx, E = w * r.sy, _ = new OffscreenCanvas(v * 2, E * 2), S = _.getContext("2d");
        S.fillStyle = b, S.fillRect(0, 0, v * 2, E * 2), S.fillStyle = y, S.fillRect(0, 0, v, E), S.fillRect(v, E, v, E), m.fillStyle = m.createPattern(_, "repeat"), m.fillRect(0, 0, d, p), m.drawImage(a, 0, 0, a.width, a.height, 0, 0, d, p);
      }
      let c = null;
      if (i) {
        let d, p;
        if (r.symmetric && a.width < t && a.height < t) d = a.width, p = a.height;
        else if (a = this.#t, s > t || n > t) {
          const y = Math.min(t / s, t / n);
          d = Math.floor(s * y), p = Math.floor(n * y), this.#l || (a = this.#c(d, p));
        }
        const b = new OffscreenCanvas(d, p).getContext("2d", {
          willReadFrequently: true
        });
        b.drawImage(a, 0, 0, a.width, a.height, 0, 0, d, p), c = {
          width: d,
          height: p,
          data: b.getImageData(0, 0, d, p).data
        };
      }
      return {
        canvas: h,
        width: o,
        height: l,
        imageData: c
      };
    }
    #c(t, e) {
      const { width: i, height: s } = this.#t;
      let n = i, r = s, a = this.#t;
      for (; n > 2 * t || r > 2 * e; ) {
        const o = n, l = r;
        n > 2 * t && (n = Math.ceil(n / 2)), r > 2 * e && (r = Math.ceil(r / 2));
        const h = new OffscreenCanvas(n, r);
        h.getContext("2d").drawImage(a, 0, 0, o, l, 0, 0, n, r), a = h.transferToImageBitmap();
      }
      return a;
    }
    #f() {
      const [t, e] = this.parentDimensions, { width: i, height: s } = this, n = new jt(), r = Math.ceil(i * t * n.sx), a = Math.ceil(s * e * n.sy), o = this.#r;
      if (!o || o.width === r && o.height === a) return;
      o.width = r, o.height = a;
      const l = this.#l ? this.#t : this.#c(r, a), h = o.getContext("2d");
      h.filter = this._uiManager.hcmFilter, h.drawImage(l, 0, 0, l.width, l.height, 0, 0, r, a);
    }
    #y(t) {
      if (t) {
        if (this.#l) {
          const s = this._uiManager.imageManager.getSvgUrl(this.#e);
          if (s) return s;
        }
        const e = document.createElement("canvas");
        return { width: e.width, height: e.height } = this.#t, e.getContext("2d").drawImage(this.#t, 0, 0), e.toDataURL();
      }
      if (this.#l) {
        const [e, i] = this.pageDimensions, s = Math.round(this.width * e * ye.PDF_TO_CSS_UNITS), n = Math.round(this.height * i * ye.PDF_TO_CSS_UNITS), r = new OffscreenCanvas(s, n);
        return r.getContext("2d").drawImage(this.#t, 0, 0, this.#t.width, this.#t.height, 0, 0, s, n), r.transferToImageBitmap();
      }
      return structuredClone(this.#t);
    }
    static async deserialize(t, e, i) {
      let s = null, n = false;
      if (t instanceof un) {
        const { data: { rect: b, rotation: y, id: w, structParent: v, popupRef: E, richText: _, contentsObj: S, creationDate: T, modificationDate: M }, container: I, parent: { page: { pageNumber: F } }, canvas: R } = t;
        let B, H;
        R ? (delete t.canvas, { id: B, bitmap: H } = i.imageManager.getFromCanvas(I.id, R), R.remove()) : (n = true, t._hasNoCanvas = true);
        const X = (await e._structTree.getAriaAttributes(`${ge}${w}`))?.get("aria-label") || "";
        s = t = {
          annotationType: j.STAMP,
          bitmapId: B,
          bitmap: H,
          pageIndex: F - 1,
          rect: b.slice(0),
          rotation: y,
          annotationElementId: w,
          id: w,
          deleted: false,
          accessibilityData: {
            decorative: false,
            altText: X
          },
          isSvg: false,
          structParent: v,
          popupRef: E,
          richText: _,
          comment: S?.str || null,
          creationDate: T,
          modificationDate: M
        };
      }
      const r = await super.deserialize(t, e, i), { rect: a, bitmap: o, bitmapUrl: l, bitmapId: h, isSvg: c, accessibilityData: d } = t;
      n ? (i.addMissingCanvas(t.id, r), r.#o = true) : h && i.imageManager.isValidId(h) ? (r.#e = h, o && (r.#t = o)) : r.#s = l, r.#l = c;
      const [p, m] = r.pageDimensions;
      return r.width = (a[2] - a[0]) / p, r.height = (a[3] - a[1]) / m, d && (r.altTextData = d), r._initialData = s, t.comment && r.setCommentData(t), r.#u = !!s, r;
    }
    serialize(t = false, e = null) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const i = Object.assign(super.serialize(t), {
        bitmapId: this.#e,
        isSvg: this.#l
      });
      if (this.addComment(i), t) return i.bitmapUrl = this.#y(true), i.accessibilityData = this.serializeAltText(true), i.isCopy = true, i;
      const { decorative: s, altText: n } = this.serializeAltText(false);
      if (!s && n && (i.accessibilityData = {
        type: "Figure",
        alt: n
      }), this.annotationElementId) {
        const a = this.#A(i);
        return a.isSame ? null : (a.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1, i.id = this.annotationElementId, delete i.bitmapId, i);
      }
      if (e === null) return i;
      e.stamps ||= /* @__PURE__ */ new Map();
      const r = this.#l ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
      if (!e.stamps.has(this.#e)) e.stamps.set(this.#e, {
        area: r,
        serialized: i
      }), i.bitmap = this.#y(false);
      else if (this.#l) {
        const a = e.stamps.get(this.#e);
        r > a.area && (a.area = r, a.serialized.bitmap.close(), a.serialized.bitmap = this.#y(false));
      }
      return i;
    }
    #A(t) {
      const { pageIndex: e, accessibilityData: { altText: i } } = this._initialData, s = t.pageIndex === e, n = (t.accessibilityData?.alt || "") === i;
      return {
        isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && s && n,
        isSameAltText: n
      };
    }
    renderAnnotationElement(t) {
      return this.deleted ? (t.hide(), null) : (t.updateEdited({
        rect: this.getPDFRect(),
        popup: this.comment
      }), null);
    }
  }
  Wt = class {
    #t;
    #e = false;
    #i = null;
    #s = null;
    #n = null;
    #a = /* @__PURE__ */ new Map();
    #r = false;
    #o = false;
    #h = false;
    #l = null;
    #u = null;
    #d = null;
    #p = null;
    #m = null;
    #g = -1;
    #c;
    static _initialized = false;
    static #f = new Map([
      At,
      rs,
      Ia,
      pt,
      Ht
    ].map((t) => [
      t._editorType,
      t
    ]));
    constructor({ uiManager: t, pageIndex: e, div: i, structTreeLayer: s, accessibilityManager: n, annotationLayer: r, drawLayer: a, textLayer: o, viewport: l, l10n: h }) {
      const c = [
        ...Wt.#f.values()
      ];
      if (!Wt._initialized) {
        Wt._initialized = true;
        for (const d of c) d.initialize(h, t);
      }
      t.registerEditorTypes(c), this.#c = t, this.pageIndex = e, this.div = i, this.#t = n, this.#i = r, this.viewport = l, this.#d = o, this.drawLayer = a, this._structTree = s, this.#c.addLayer(this);
    }
    get isEmpty() {
      return this.#a.size === 0;
    }
    get isInvisible() {
      return this.isEmpty && this.#c.getMode() === j.NONE;
    }
    updateToolbar(t) {
      this.#c.updateToolbar(t);
    }
    updateMode(t = this.#c.getMode()) {
      switch (this.#w(), t) {
        case j.NONE:
          this.div.classList.toggle("nonEditing", true), this.disableTextSelection(), this.togglePointerEvents(false), this.toggleAnnotationLayerPointerEvents(true), this.disableClick();
          return;
        case j.INK:
          this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
          break;
        case j.HIGHLIGHT:
          this.enableTextSelection(), this.togglePointerEvents(false), this.disableClick();
          break;
        default:
          this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
      }
      this.toggleAnnotationLayerPointerEvents(false);
      const { classList: e } = this.div;
      if (e.toggle("nonEditing", false), t === j.POPUP) e.toggle("commentEditing", true);
      else {
        e.toggle("commentEditing", false);
        for (const i of Wt.#f.values()) e.toggle(`${i._type}Editing`, t === i._editorType);
      }
      this.div.hidden = false;
    }
    hasTextLayer(t) {
      return t === this.#d?.div;
    }
    setEditingState(t) {
      this.#c.setEditingState(t);
    }
    addCommands(t) {
      this.#c.addCommands(t);
    }
    cleanUndoStack(t) {
      this.#c.cleanUndoStack(t);
    }
    toggleDrawing(t = false) {
      this.div.classList.toggle("drawing", !t);
    }
    togglePointerEvents(t = false) {
      this.div.classList.toggle("disabled", !t);
    }
    toggleAnnotationLayerPointerEvents(t = false) {
      this.#i?.togglePointerEvents(t);
    }
    get #y() {
      return this.#a.size !== 0 ? this.#a.values() : this.#c.getEditors(this.pageIndex);
    }
    async enable() {
      this.#h = true, this.div.tabIndex = 0, this.togglePointerEvents(true), this.div.classList.toggle("nonEditing", false), this.#m?.abort(), this.#m = null;
      const t = /* @__PURE__ */ new Set();
      for (const i of this.#y) i.enableEditing(), i.show(true), i.annotationElementId && (this.#c.removeChangedExistingAnnotation(i), t.add(i.annotationElementId));
      const e = this.#i;
      if (e) for (const i of e.getEditableAnnotations()) {
        if (i.hide(), this.#c.isDeletedAnnotationElement(i.data.id) || t.has(i.data.id)) continue;
        const s = await this.deserialize(i);
        s && (this.addOrRebuild(s), s.enableEditing());
      }
      this.#h = false, this.#c._eventBus.dispatch("editorsrendered", {
        source: this,
        pageNumber: this.pageIndex + 1
      });
    }
    disable() {
      if (this.#o = true, this.div.tabIndex = -1, this.togglePointerEvents(false), this.div.classList.toggle("nonEditing", true), this.#d && !this.#m) {
        this.#m = new AbortController();
        const s = this.#c.combinedSignal(this.#m);
        this.#d.div.addEventListener("pointerdown", (n) => {
          const { clientX: a, clientY: o, timeStamp: l } = n, h = this.#g;
          if (l - h > 500) {
            this.#g = l;
            return;
          }
          this.#g = -1;
          const { classList: c } = this.div;
          c.toggle("getElements", true);
          const d = document.elementsFromPoint(a, o);
          if (c.toggle("getElements", false), !this.div.contains(d[0])) return;
          let p;
          const m = new RegExp(`^${Pe}[0-9]+$`);
          for (const y of d) if (m.test(y.id)) {
            p = y.id;
            break;
          }
          if (!p) return;
          const b = this.#a.get(p);
          b?.annotationElementId === null && (lt(n), b.dblclick(n));
        }, {
          signal: s,
          capture: true
        });
      }
      const t = this.#i, e = [];
      if (t) {
        const s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
        for (const r of this.#y) {
          if (r.disableEditing(), !r.annotationElementId) {
            e.push(r);
            continue;
          }
          if (r.serialize() !== null) {
            s.set(r.annotationElementId, r);
            continue;
          } else n.set(r.annotationElementId, r);
          this.getEditableAnnotation(r.annotationElementId)?.show(), r.remove();
        }
        for (const r of t.getEditableAnnotations()) {
          const { id: a } = r.data;
          if (this.#c.isDeletedAnnotationElement(a)) {
            r.updateEdited({
              deleted: true
            });
            continue;
          }
          let o = n.get(a);
          if (o) {
            o.resetAnnotationElement(r), o.show(false), r.show();
            continue;
          }
          o = s.get(a), o && (this.#c.addChangedExistingAnnotation(o), o.renderAnnotationElement(r) && o.show(false)), r.show();
        }
      }
      this.#w(), this.isEmpty && (this.div.hidden = true);
      const { classList: i } = this.div;
      for (const s of Wt.#f.values()) i.remove(`${s._type}Editing`);
      this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(true), t?.updateFakeAnnotations(e), this.#o = false;
    }
    getEditableAnnotation(t) {
      return this.#i?.getEditableAnnotation(t) || null;
    }
    setActiveEditor(t) {
      this.#c.getActive() !== t && this.#c.setActiveEditor(t);
    }
    enableTextSelection() {
      if (this.div.tabIndex = -1, this.#d?.div && !this.#p) {
        this.#p = new AbortController();
        const t = this.#c.combinedSignal(this.#p);
        this.#d.div.addEventListener("pointerdown", this.#A.bind(this), {
          signal: t
        }), this.#d.div.classList.add("highlighting");
      }
    }
    disableTextSelection() {
      this.div.tabIndex = 0, this.#d?.div && this.#p && (this.#p.abort(), this.#p = null, this.#d.div.classList.remove("highlighting"));
    }
    #A(t) {
      this.#c.unselectAll();
      const { target: e } = t;
      if (e === this.#d.div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent") || e.classList.contains("textLayerImages") || e.classList.contains("textLayerImagePlaceholder")) && this.#d.div.contains(e)) {
        const { isMac: i } = Z.platform;
        if (t.button !== 0 || t.ctrlKey && i) return;
        this.#c.showAllEditors("highlight", true, true), this.#d.div.classList.add("free"), this.toggleDrawing(), pt.startHighlighting(this, this.#c.direction === "ltr", {
          target: this.#d.div,
          x: t.x,
          y: t.y
        }), this.#d.div.addEventListener("pointerup", () => {
          this.#d.div.classList.remove("free"), this.toggleDrawing(true);
        }, {
          once: true,
          signal: this.#c._signal
        }), t.preventDefault();
      }
    }
    enableClick() {
      if (this.#s) return;
      this.#s = new AbortController();
      const t = this.#c.combinedSignal(this.#s);
      this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
        signal: t
      });
      const e = this.pointerup.bind(this);
      this.div.addEventListener("pointerup", e, {
        signal: t
      }), this.div.addEventListener("pointercancel", e, {
        signal: t
      });
    }
    disableClick() {
      this.#s?.abort(), this.#s = null;
    }
    attach(t) {
      this.#a.set(t.id, t);
      const { annotationElementId: e } = t;
      e && this.#c.isDeletedAnnotationElement(e) && this.#c.removeDeletedAnnotationElement(t);
    }
    detach(t) {
      this.#a.delete(t.id), this.#t?.removePointerInTextLayer(t.contentDiv), !this.#o && t.annotationElementId && this.#c.addDeletedAnnotationElement(t);
    }
    remove(t) {
      this.detach(t), this.#c.removeEditor(t), t.div.remove(), t.isAttachedToDOM = false;
    }
    changeParent(t) {
      t.parent !== this && (t.parent && t.annotationElementId && (this.#c.addDeletedAnnotationElement(t), O.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), t.parent?.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
    }
    add(t) {
      if (!(t.parent === this && t.isAttachedToDOM)) {
        if (this.changeParent(t), this.#c.addEditor(t), this.attach(t), !t.isAttachedToDOM) {
          const e = t.render();
          this.div.append(e), t.isAttachedToDOM = true;
        }
        t.fixAndSetPosition(), t.onceAdded(!this.#h), this.#c.addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
      }
    }
    moveEditorInDOM(t) {
      if (!t.isAttachedToDOM) return;
      const { activeElement: e } = document;
      t.div.contains(e) && !this.#n && (t._focusEventsAllowed = false, this.#n = setTimeout(() => {
        this.#n = null, t.div.contains(document.activeElement) ? t._focusEventsAllowed = true : (t.div.addEventListener("focusin", () => {
          t._focusEventsAllowed = true;
        }, {
          once: true,
          signal: this.#c._signal
        }), e.focus());
      }, 0)), t._structTreeParentId = this.#t?.moveElementInDOM(this.div, t.div, t.contentDiv, true);
    }
    addOrRebuild(t) {
      t.needsToBeRebuilt() ? (t.parent ||= this, t.rebuild(), t.show()) : this.add(t);
    }
    addUndoableEditor(t) {
      const e = () => t._uiManager.rebuild(t), i = () => {
        t.remove();
      };
      this.addCommands({
        cmd: e,
        undo: i,
        mustExec: false
      });
    }
    getEditorByUID(t) {
      for (const e of this.#a.values()) if (e.uid === t) return e;
      return null;
    }
    get #b() {
      return Wt.#f.get(this.#c.getMode());
    }
    combinedSignal(t) {
      return this.#c.combinedSignal(t);
    }
    #E(t) {
      const e = this.#b;
      return e ? new e.prototype.constructor(t) : null;
    }
    canCreateNewEmptyEditor() {
      return this.#b?.canCreateNewEmptyEditor();
    }
    async pasteEditor(t, e) {
      this.updateToolbar(t), await this.#c.updateMode(t.mode);
      const { offsetX: i, offsetY: s } = this.#S(), n = this.#c.getId(), r = this.#E({
        parent: this,
        id: n,
        x: i,
        y: s,
        uiManager: this.#c,
        isCentered: true,
        ...e
      });
      r && this.add(r);
    }
    async deserialize(t) {
      return await Wt.#f.get(t.annotationType ?? t.annotationEditorType)?.deserialize(t, this, this.#c) || null;
    }
    createAndAddNewEditor(t, e, i = {}) {
      const s = this.#c.getId(), n = this.#E({
        parent: this,
        id: s,
        x: t.offsetX,
        y: t.offsetY,
        uiManager: this.#c,
        isCentered: e,
        ...i
      });
      return n && this.add(n), n;
    }
    get boundingClientRect() {
      return this.div.getBoundingClientRect();
    }
    #S() {
      const { x: t, y: e, width: i, height: s } = this.boundingClientRect, n = Math.max(0, t), r = Math.max(0, e), a = Math.min(window.innerWidth, t + i), o = Math.min(window.innerHeight, e + s), l = (n + a) / 2 - t, h = (r + o) / 2 - e, [c, d] = this.viewport.rotation % 180 === 0 ? [
        l,
        h
      ] : [
        h,
        l
      ];
      return {
        offsetX: c,
        offsetY: d
      };
    }
    addNewEditor(t = {}) {
      this.createAndAddNewEditor(this.#S(), true, t);
    }
    setSelected(t) {
      this.#c.setSelected(t);
    }
    toggleSelected(t) {
      this.#c.toggleSelected(t);
    }
    unselect(t) {
      this.#c.unselect(t);
    }
    pointerup(t) {
      const { isMac: e } = Z.platform;
      if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !this.#r || (this.#r = false, this.#b?.isDrawer && this.#b.supportMultipleDrawings)) return;
      if (!this.#e) {
        this.#e = true;
        return;
      }
      const i = this.#c.getMode();
      if (i === j.STAMP || i === j.POPUP || i === j.SIGNATURE) {
        this.#c.unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, false);
    }
    pointerdown(t) {
      if (this.#c.getMode() === j.HIGHLIGHT && this.enableTextSelection(), this.#r) {
        this.#r = false;
        return;
      }
      const { isMac: e } = Z.platform;
      if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div) return;
      if (this.#r = true, this.#b?.isDrawer) {
        this.startDrawingSession(t);
        return;
      }
      const i = this.#c.getActive();
      this.#e = !i || i.isEmpty();
    }
    startDrawingSession(t) {
      if (this.div.focus({
        preventScroll: true
      }), this.#l) {
        this.#b.startDrawing(this, this.#c, false, t);
        return;
      }
      this.#c.setCurrentDrawingSession(this), this.#l = new AbortController();
      const e = this.#c.combinedSignal(this.#l);
      this.div.addEventListener("blur", ({ relatedTarget: i }) => {
        i && !this.div.contains(i) && (this.#u = null, this.commitOrRemove());
      }, {
        signal: e
      }), this.#b.startDrawing(this, this.#c, false, t);
    }
    pause(t) {
      if (t) {
        const { activeElement: e } = document;
        this.div.contains(e) && (this.#u = e);
        return;
      }
      this.#u && setTimeout(() => {
        this.#u?.focus(), this.#u = null;
      }, 0);
    }
    endDrawingSession(t = false) {
      return this.#l ? (this.#c.setCurrentDrawingSession(null), this.#l.abort(), this.#l = null, this.#u = null, this.#b.endDrawing(t)) : null;
    }
    findNewParent(t, e, i) {
      const s = this.#c.findParent(e, i);
      return s === null || s === this ? false : (s.changeParent(t), true);
    }
    commitOrRemove() {
      return this.#l ? (this.endDrawingSession(), true) : false;
    }
    onScaleChanging() {
      this.#l && this.#b.onScaleChangingWhenDrawing(this);
    }
    destroy() {
      this.commitOrRemove(), this.#c.getActive()?.parent === this && (this.#c.commitOrRemove(), this.#c.setActiveEditor(null)), this.#n && (clearTimeout(this.#n), this.#n = null);
      for (const t of this.#a.values()) this.#t?.removePointerInTextLayer(t.contentDiv), t.setParent(null), t.isAttachedToDOM = false, t.div.remove();
      this.div = null, this.#a.clear(), this.#c.removeLayer(this);
    }
    #w() {
      for (const t of this.#a.values()) t.isEmpty() && t.remove();
    }
    async render({ viewport: t }) {
      this.viewport = t, re(this.div, t);
      for (const e of this.#c.getEditors(this.pageIndex)) this.add(e), e.rebuild();
      await this.#c.findClonesForPage(this), this.div.hidden = this.isEmpty, this.updateMode();
    }
    update({ viewport: t }) {
      this.#c.commitOrRemove(), this.#w();
      const e = this.viewport.rotation, i = t.rotation;
      if (this.viewport = t, re(this.div, {
        rotation: i
      }), e !== i) for (const s of this.#a.values()) s.rotate(i);
    }
    get pageDimensions() {
      const { pageWidth: t, pageHeight: e } = this.viewport.rawDims;
      return [
        t,
        e
      ];
    }
    get scale() {
      return this.#c.viewParameters.realScale;
    }
  };
  function Da(u, t) {
    return u === t ? 0 : u.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  }
  function Ke(u) {
    return u ? u.nodeType === Node.ELEMENT_NODE ? u.closest(".textLayer") : u.parentElement?.closest(".textLayer") || null : null;
  }
  function Fa(u, t, e, i) {
    if (u === e) return t <= i;
    const s = u.compareDocumentPosition(e);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? true : s & Node.DOCUMENT_POSITION_PRECEDING ? false : null;
  }
  function Hs(u, t, e) {
    if (u.nodeType !== Node.ELEMENT_NODE || !u.classList.contains("textLayer") || t !== u.childNodes.length) return {
      container: u,
      offset: t
    };
    let i = u.lastChild;
    return i?.nodeType === Node.ELEMENT_NODE && i.classList.contains("endOfContent") && (i = i.previousSibling), !i || !e.contains(i) ? null : i.nodeType === Node.TEXT_NODE ? {
      container: i,
      offset: i.textContent.length
    } : {
      container: i,
      offset: i.childNodes.length
    };
  }
  G = class {
    #t = null;
    #e = /* @__PURE__ */ new Map();
    #i = null;
    #s = null;
    #n = null;
    #a = null;
    #r = /* @__PURE__ */ new Map();
    static #o = 0;
    static #h = 0;
    static #l = null;
    static #u = /* @__PURE__ */ new Set();
    static #d = false;
    static #p = /* @__PURE__ */ new Set();
    static #m = /* @__PURE__ */ new WeakMap();
    constructor({ filterFactory: t = null, pageColors: e = null, pageIndex: i, textLayer: s = null }) {
      if (this.pageIndex = i, this.#s = t, this.#n = e, s) {
        const n = G.#m.get(s);
        if (n?.selectionDiv && (n.selectionDiv.remove(), G.#u.delete(n.selectionDiv)), G.#m.set(s, {
          drawLayer: this
        }), G.#p.add(s), this.#i = s, this.#a = new MutationObserver((r) => {
          if (!(!this.#t || !this.#i?.isConnected || !G.#c())) {
            for (const { addedNodes: a } of r) for (const o of a) if (o.nodeType === Node.ELEMENT_NODE && o.classList.contains("endOfContent")) {
              G.#y();
              return;
            }
          }
        }), this.#a.observe(s, {
          childList: true
        }), G.#l === null) {
          G.#l = new AbortController();
          const { signal: r } = G.#l;
          document.addEventListener("selectionchange", G.#y.bind(G), {
            signal: r
          }), document.addEventListener("pointerdown", () => {
            G.#d = true;
          }, {
            signal: r
          }), document.addEventListener("pointerup", () => {
            G.#d = false;
          }, {
            signal: r
          }), window.addEventListener("blur", () => {
            G.#d = false;
          }, {
            signal: r
          });
        }
      }
    }
    setParent(t) {
      if (!this.#t) {
        this.#t = t, this.#i?.isConnected && G.#c() && G.#y();
        return;
      }
      if (this.#t !== t) {
        if (this.#e.size > 0) for (const e of this.#e.values()) e.remove(), t.append(e);
        this.#t = t;
      }
    }
    static #g(t) {
      const e = this.#m.get(t);
      e?.selectionDiv && (e.selectionDiv.remove(), this.#u.delete(e.selectionDiv), e.selectionDiv = null, e.path = null);
    }
    static #c() {
      const t = document.getSelection();
      return !!t && !t.isCollapsed;
    }
    static #f() {
      return [
        ...this.#p
      ].filter((t) => t.isConnected).sort(Da);
    }
    static #y() {
      const t = document.getSelection();
      if (!t || t.isCollapsed) {
        for (const r of this.#u) r.remove();
        this.#u.clear();
        return;
      }
      const e = /* @__PURE__ */ new WeakMap(), i = this.#f(), s = [];
      for (let r = 0, a = t.rangeCount; r < a; r++) {
        const o = t.getRangeAt(r);
        if (o.collapsed) continue;
        let { startContainer: l, startOffset: h, endContainer: c, endOffset: d } = o, p = Ke(l), m = Ke(c);
        const b = p === null, y = m === null;
        if (this.#d && b !== y) return;
        if (t.rangeCount === 1) {
          const { anchorNode: E, anchorOffset: _, focusNode: S, focusOffset: T } = t, M = Ke(E), I = Ke(S), F = Fa(E, _, S, T);
          M && I && F !== null && (F ? (l = E, h = _, p = M, c = S, d = T, m = I) : (l = S, h = T, p = I, c = E, d = _, m = M));
        }
        const w = i.filter((E) => o.intersectsNode(E));
        if (w.length === 0) continue;
        let v = false;
        if (p || (p = w[0], l = p, h = 0, v = true), m || (m = w.at(-1), c = m, d = m.childNodes.length, v = true), c.nodeType === Node.ELEMENT_NODE) {
          if (c.classList.contains("endOfContent")) {
            const E = c.previousSibling;
            if (!E) continue;
            c = E, d = E.nodeType === Node.TEXT_NODE ? E.textContent.length : E.childNodes.length;
          } else if (c.classList.contains("textLayer") && c.childNodes.length === d) {
            const E = Hs(c, d, m);
            if (!E) continue;
            c = E.container, d = E.offset;
          }
        }
        if (l.nodeType === Node.ELEMENT_NODE) {
          const E = Hs(l, h, p);
          if (!E) continue;
          l = E.container, h = E.offset;
        }
        if (p === m && !v && w.includes(p)) {
          s.push([
            o,
            p
          ]);
          continue;
        }
        for (const E of w) {
          const _ = E.firstChild;
          if (!_) continue;
          const S = document.createRange();
          if (E === p ? S.setStart(l, h) : S.setStartBefore(_), E === m) S.setEnd(c, d);
          else {
            const T = E.lastChild;
            if (!T) continue;
            if (T.nodeType === Node.ELEMENT_NODE && T.classList.contains("endOfContent")) {
              const M = T.previousSibling;
              if (!M) continue;
              S.setEndAfter(M);
            } else S.setEndAfter(T);
          }
          S.collapsed || s.push([
            S,
            E
          ]);
        }
      }
      const n = new Set(s.map((r) => r[1]));
      for (const r of this.#p) n.has(r) || this.#g(r);
      for (const [r, a] of s) {
        const o = G.#m.get(a);
        if (!o) continue;
        let l = e.get(a);
        if (!l) {
          const m = a.getBoundingClientRect();
          l = (b, y, w, v) => ({
            x: (b - m.x) / m.width,
            y: (y - m.y) / m.height,
            width: w / m.width,
            height: v / m.height
          }), e.set(a, l);
        }
        const h = [];
        for (let { x: m, y: b, width: y, height: w } of r.getClientRects()) y === 0 || w === 0 || ({ x: m, y: b, width: y, height: w } = l(m, b, y, w), !(y === 1 && w === 1) && h.push(`M${m} ${b} h${y} v${w} h-${y} Z`));
        if (h.length === 0) continue;
        const c = o.drawLayer;
        let d = o.selectionDiv, p = o.path;
        if (!d) {
          const m = `clip_selection_${G.#h++}`;
          d = document.createElement("div"), d.className = "selection", d.style.clipPath = `url(#${m})`;
          const b = c.#s?.createSelectionStyle(c.#n);
          if (b) for (const [v, E] of Object.entries(b)) d.style.setProperty(v, E);
          const y = G._svgFactory.create(1, 1, true);
          y.setAttribute("aria-hidden", "true"), y.setAttribute("width", "100%"), y.setAttribute("height", "100%");
          const w = G._svgFactory.createElement("clipPath");
          w.setAttribute("id", m), w.setAttribute("clipPathUnits", "objectBoundingBox"), p = G._svgFactory.createElement("path"), w.append(p), y.append(w), d.append(y), o.path = p, o.selectionDiv = d;
        }
        !d.parentNode && c.#t && (c.#t.append(d), this.#u.add(d)), p.setAttribute("d", h.join(" "));
      }
    }
    static get _svgFactory() {
      return $(this, "_svgFactory", new ii());
    }
    static #A(t, [e, i, s, n]) {
      const { style: r } = t;
      r.top = `${100 * i}%`, r.left = `${100 * e}%`, r.width = `${100 * s}%`, r.height = `${100 * n}%`;
    }
    #b() {
      const t = G._svgFactory.create(1, 1, true);
      return this.#t.append(t), t.setAttribute("aria-hidden", "true"), t;
    }
    #E(t, e) {
      const i = G._svgFactory.createElement("clipPath");
      t.append(i);
      const s = `clip_${e}`;
      i.setAttribute("id", s), i.setAttribute("clipPathUnits", "objectBoundingBox");
      const n = G._svgFactory.createElement("use");
      return i.append(n), n.setAttribute("href", `#${e}`), n.classList.add("clip"), s;
    }
    #S(t, e) {
      for (const [i, s] of Object.entries(e)) s === null ? t.removeAttribute(i) : t.setAttribute(i, s);
    }
    draw(t, e = false, i = false) {
      const s = G.#o++, n = this.#b(), r = G._svgFactory.createElement("defs");
      n.append(r);
      const a = G._svgFactory.createElement("path");
      r.append(a);
      const o = `path_${s}`;
      a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke"), e && this.#r.set(s, a);
      const l = i ? this.#E(r, o) : null, h = G._svgFactory.createElement("use");
      return n.append(h), h.setAttribute("href", `#${o}`), this.updateProperties(n, t), this.#e.set(s, n), {
        id: s,
        clipPathId: `url(#${l})`
      };
    }
    drawOutline(t, e) {
      const i = G.#o++, s = this.#b(), n = G._svgFactory.createElement("defs");
      s.append(n);
      const r = G._svgFactory.createElement("path");
      n.append(r);
      const a = `path_${i}`;
      r.setAttribute("id", a), r.setAttribute("vector-effect", "non-scaling-stroke");
      let o;
      if (e) {
        const c = G._svgFactory.createElement("mask");
        n.append(c), o = `mask_${i}`, c.setAttribute("id", o), c.setAttribute("maskUnits", "objectBoundingBox");
        const d = G._svgFactory.createElement("rect");
        c.append(d), d.setAttribute("width", "1"), d.setAttribute("height", "1"), d.setAttribute("fill", "white");
        const p = G._svgFactory.createElement("use");
        c.append(p), p.setAttribute("href", `#${a}`), p.setAttribute("stroke", "none"), p.setAttribute("fill", "black"), p.setAttribute("fill-rule", "nonzero"), p.classList.add("mask");
      }
      const l = G._svgFactory.createElement("use");
      s.append(l), l.setAttribute("href", `#${a}`), o && l.setAttribute("mask", `url(#${o})`);
      const h = l.cloneNode();
      return s.append(h), l.classList.add("mainOutline"), h.classList.add("secondaryOutline"), this.updateProperties(s, t), this.#e.set(i, s), i;
    }
    finalizeDraw(t, e) {
      this.#r.delete(t), this.updateProperties(t, e);
    }
    updateProperties(t, e) {
      if (!e) return;
      const { root: i, bbox: s, rootClass: n, path: r } = e, a = typeof t == "number" ? this.#e.get(t) : t;
      if (a) {
        if (i && this.#S(a, i), s && G.#A(a, s), n) {
          const { classList: o } = a;
          for (const [l, h] of Object.entries(n)) o.toggle(l, h);
        }
        if (r) {
          const l = a.firstElementChild.firstElementChild;
          this.#S(l, r);
        }
      }
    }
    updateParent(t, e) {
      if (e === this) return;
      const i = this.#e.get(t);
      i && (e.#t.append(i), this.#e.delete(t), e.#e.set(t, i));
    }
    remove(t) {
      this.#r.delete(t), this.#t !== null && (this.#e.get(t).remove(), this.#e.delete(t));
    }
    destroy() {
      this.#t = null;
      for (const t of this.#e.values()) t.remove();
      this.#e.clear(), this.#r.clear(), this.#a?.disconnect(), this.#a = null, this.#i && (G.#m.get(this.#i)?.drawLayer === this && (G.#g(this.#i), G.#m.delete(this.#i), G.#p.delete(this.#i), G.#p.size === 0 && (G.#l?.abort(), G.#l = null, G.#d = false)), this.#i = null);
    }
  };
  function Je(u) {
    return `${(u * 100).toFixed(2)}%`;
  }
  si = class {
    #t = [];
    #e = /* @__PURE__ */ new Map();
    #i = null;
    #s = 0;
    #n = 0;
    #a = 0;
    static #r = null;
    constructor(t, e, i, s) {
      this.#s = t, this.#t = e, this.#n = i.rawDims.pageWidth, this.#a = i.rawDims.pageHeight, this.#i = s;
    }
    render() {
      const t = document.createElement("div");
      t.className = "textLayerImages";
      for (let e = 0; e < this.#t.length; e += 6) {
        const i = this.#o(this.#t.subarray(e, e + 6));
        i && t.append(i);
      }
      return t.addEventListener("contextmenu", (e) => {
        if (!(e.target instanceof HTMLCanvasElement)) return;
        const i = e.target, s = this.#e.get(i);
        if (!s) return;
        const n = si.#r?.deref();
        if (n === i) return;
        n && (n.width = 0, n.height = 0), si.#r = new WeakRef(i);
        const { inverseTransform: r, x1: a, y1: o, width: l, height: h } = s, c = this.#i(), d = Math.ceil(a * c.width), p = Math.ceil(o * c.height), m = Math.floor((a + l / this.#n) * c.width), b = Math.floor((o + h / this.#a) * c.height);
        i.width = m - d, i.height = b - p;
        const y = i.getContext("2d");
        y.setTransform(...r), y.translate(-d, -p), y.drawImage(c, 0, 0);
      }), t;
    }
    #o([t, e, i, s, n, r]) {
      const a = Math.hypot((n - t) * this.#n, (r - e) * this.#a), o = Math.hypot((i - t) * this.#n, (s - e) * this.#a);
      if (a < this.#s || o < this.#s) return null;
      const l = [
        (n - t) * this.#n / a,
        (r - e) * this.#a / a,
        (i - t) * this.#n / o,
        (s - e) * this.#a / o,
        0,
        0
      ], h = D.inverseTransform(l), c = document.createElement("canvas");
      return c.className = "textLayerImagePlaceholder", c.width = 0, c.height = 0, Object.assign(c.style, {
        opacity: 0,
        position: "absolute",
        left: Je(t),
        top: Je(e),
        width: Je(a / this.#n),
        height: Je(o / this.#a),
        transformOrigin: "0% 0%",
        transform: `matrix(${l.join(",")})`
      }), this.#e.set(c, {
        inverseTransform: h,
        width: a,
        height: o,
        x1: t,
        y1: e
      }), c;
    }
  };
  globalThis._pdfjsTestingUtils = {
    HighlightOutliner: $i
  };
  globalThis.pdfjsLib = {
    AbortException: Jt,
    AnnotationEditorLayer: Wt,
    AnnotationEditorParamsType: V,
    AnnotationEditorType: j,
    AnnotationEditorUIManager: Qt,
    AnnotationLayer: ns,
    AnnotationMode: Kt,
    AnnotationType: ft,
    applyOpacity: Hn,
    build: aa,
    ColorPicker: Dt,
    createValidAbsoluteUrl: Gs,
    CSSConstants: Un,
    DOMSVGFactory: ii,
    DrawLayer: G,
    FeatureTest: Z,
    fetchData: Wi,
    findContrastColor: Gn,
    getDocument: ea,
    getFilenameFromUrl: Rn,
    getPdfFilenameFromUrl: Bn,
    getRGB: Ne,
    getRGBA: Oe,
    getUuid: js,
    GlobalWorkerOptions: Me,
    ImageKind: Qe,
    InvalidPDFException: Fi,
    isDataScheme: li,
    isPdfFile: Yi,
    isValidExplicitDest: hr,
    makeArr: Re,
    makeMap: Vi,
    makeObj: Li,
    MathClamp: nt,
    noContextMenu: Ft,
    normalizeUnicode: Fn,
    OPS: Gt,
    OutputScale: jt,
    PasswordException: Di,
    PasswordResponses: _n,
    PDFDataRangeTransport: ln,
    PDFDateString: Ri,
    PDFWorker: wt,
    PermissionFlag: Cn,
    PixelsPerInch: ye,
    RenderingCancelledException: Xi,
    renderRichText: Vs,
    ResponseException: ti,
    setLayerDimensions: re,
    shadow: $,
    SignatureExtractor: pe,
    stopEvent: lt,
    SupportedImageMimeTypes: Bi,
    TextLayer: _t,
    TextLayerImages: si,
    TouchManager: hi,
    updateUrlHash: $s,
    Util: D,
    VerbosityLevel: ni,
    version: ra,
    XfaLayer: zs
  };
})();
export {
  Jt as AbortException,
  Wt as AnnotationEditorLayer,
  V as AnnotationEditorParamsType,
  j as AnnotationEditorType,
  Qt as AnnotationEditorUIManager,
  ns as AnnotationLayer,
  Kt as AnnotationMode,
  ft as AnnotationType,
  Un as CSSConstants,
  Dt as ColorPicker,
  ii as DOMSVGFactory,
  G as DrawLayer,
  Z as FeatureTest,
  Me as GlobalWorkerOptions,
  Qe as ImageKind,
  Fi as InvalidPDFException,
  nt as MathClamp,
  Gt as OPS,
  jt as OutputScale,
  ln as PDFDataRangeTransport,
  Ri as PDFDateString,
  wt as PDFWorker,
  Di as PasswordException,
  _n as PasswordResponses,
  Cn as PermissionFlag,
  ye as PixelsPerInch,
  Xi as RenderingCancelledException,
  ti as ResponseException,
  pe as SignatureExtractor,
  Bi as SupportedImageMimeTypes,
  _t as TextLayer,
  si as TextLayerImages,
  hi as TouchManager,
  D as Util,
  ni as VerbosityLevel,
  zs as XfaLayer,
  __tla,
  Hn as applyOpacity,
  aa as build,
  Gs as createValidAbsoluteUrl,
  Wi as fetchData,
  Gn as findContrastColor,
  ea as getDocument,
  Rn as getFilenameFromUrl,
  Bn as getPdfFilenameFromUrl,
  Ne as getRGB,
  Oe as getRGBA,
  js as getUuid,
  li as isDataScheme,
  Yi as isPdfFile,
  hr as isValidExplicitDest,
  Re as makeArr,
  Vi as makeMap,
  Li as makeObj,
  Ft as noContextMenu,
  Fn as normalizeUnicode,
  Vs as renderRichText,
  re as setLayerDimensions,
  $ as shadow,
  lt as stopEvent,
  $s as updateUrlHash,
  ra as version
};
