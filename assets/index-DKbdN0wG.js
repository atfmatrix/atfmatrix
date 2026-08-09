import { h as s, x as U } from "./index-BkkCC0vW.js";
import "./matrix-05hIIFCf.js";
function q(r, e) {
  (e?.checkSignalEarly ?? true) && b(e?.signal);
  const a = r.read, n = r.release;
  let i = null, l = null, c = null;
  function u(f, o) {
    return c === null && (c = (async () => {
      l = null, e?.signal != null && i != null && (e.signal.removeEventListener("abort", i), i = null), n != null && await n(f, o);
    })()), c;
  }
  return (e?.__internal_useByteStream__ !== void 0 ? e.__internal_useByteStream__ : K()) ? new ReadableStream({ type: "bytes", start(f) {
    e?.signal && (i = () => {
      const o = e?.signal?.reason ?? P();
      u("SignalAbort", o).catch(() => {
      }), f.error(o);
    }, e?.signal.addEventListener("abort", i));
  }, async pull(f) {
    try {
      if (b(e?.signal), (l == null || l.byteLength === 0) && (l = await a() ?? null, b(e?.signal)), l == null || l.byteLength === 0) {
        await u("Close"), f.close(), f.byobRequest?.respond(0);
        return;
      }
      const o = f.byobRequest;
      if (o != null) {
        const d = o.view, y = new Uint8Array(d.buffer, d.byteOffset, d.byteLength), m = Math.min(l.byteLength, y.byteLength);
        y.set(l.subarray(0, m)), l = l.subarray(m), b(e?.signal), o.respond(m);
      } else b(e?.signal), f.enqueue(l), l = null;
    } catch (o) {
      const d = O(o, e?.signal);
      throw await u(d ? "SignalAbort" : "Error", o).catch(() => {
      }), o;
    }
  }, async cancel(f) {
    await u("Cancel", f);
  } }) : new ReadableStream({ start(f) {
    e?.signal != null && (i = () => {
      const o = e?.signal?.reason ?? P();
      u("SignalAbort", o).catch(() => {
      }), f.error(o);
    }, e?.signal?.addEventListener("abort", i));
  }, async pull(f) {
    try {
      b(e?.signal);
      const o = await a();
      if (b(e?.signal), o == null || o.byteLength === 0) {
        await u("Close"), f.close();
        return;
      }
      f.enqueue(o);
    } catch (o) {
      const d = O(o, e?.signal);
      throw await u(d ? "SignalAbort" : "Error", o).catch(() => {
      }), o;
    }
  }, async cancel(f) {
    await u("Cancel", f);
  } });
}
function z(r, e) {
  (e?.checkSignalEarly ?? true) && b(e?.signal);
  const a = r.write, n = r.release, i = e?.bufferSize ?? 0;
  W(i, "bufferSize");
  let l = null, c = null, u = 0, g = null;
  function f(o, d) {
    return g === null && (g = (async () => {
      c = null, e?.signal != null && l != null && (e?.signal?.removeEventListener("abort", l), l = null), n != null && await n(o, d);
    })()), g;
  }
  return new WritableStream({ start(o) {
    e?.signal != null && (l = () => {
      const d = e?.signal?.reason ?? P();
      f("SignalAbort", d).catch(() => {
      }), o.error(d);
    }, e?.signal.addEventListener("abort", l));
  }, async write(o) {
    try {
      if (b(e?.signal), i <= 0 || i <= o.byteLength && e?.strictBufferSize !== true) {
        if (c !== null && 0 < u) {
          const y = e?.useBufferView === true ? c.subarray(0, u) : c.slice(0, u);
          b(e?.signal), await a(y), u = 0;
        }
        b(e?.signal), await a(G(o));
        return;
      }
      let d = 0;
      for (; d < o.byteLength; ) {
        b(e?.signal), c === null && (c = new Uint8Array(i));
        const y = Math.min(i - u, o.byteLength - d);
        if (c.set(o.subarray(d, d + y), u), u += y, d += y, u === i) {
          b(e?.signal);
          const m = c;
          e?.useBufferView, await a(m), u = 0;
        }
      }
    } catch (d) {
      const y = O(d, e?.signal);
      throw await f(y ? "SignalAbort" : "Error", d).catch(() => {
      }), d;
    }
  }, async close() {
    try {
      if (0 < u && c != null) {
        const o = c.subarray(0, u);
        c = null, await a(o);
      }
      await f("Close");
    } catch (o) {
      throw await f("Error", o).catch(() => {
      }), o;
    }
  }, async abort(o) {
    await f("Abort", o);
  } });
}
let S = null;
function K() {
  if (S === null) try {
    new ReadableStream({ type: "bytes" }), S = true;
  } catch {
    S = false;
  }
  return S;
}
function b(r) {
  if (r?.aborted === true) throw r?.reason ?? P();
}
function P() {
  return new DOMException("The operation was aborted.", "AbortError");
}
function O(r, e) {
  return e?.aborted === true && (r === e.reason || r instanceof DOMException && r.name === "AbortError");
}
function G(r) {
  return r.buffer instanceof ArrayBuffer ? r : new Uint8Array(r);
}
function W(r, e) {
  const t = e;
  if (!Number.isSafeInteger(r)) throw new TypeError(`${t} must be a safe integer.`);
  if (r < 0) throw new RangeError(`${t} must be a positive integer.`);
}
function w(r) {
  return r instanceof URL ? r.toString() : r;
}
const ce = Object.freeze({ Documents: "Documents", Download: "Download" });
function B(r) {
  return r == null ? null : r.type === "PublicDir" ? { type: "PublicDir", baseDir: r.baseDir, relativePath: r.relativePath ?? null, volumeId: r.volumeId ?? null } : r.type === "VolumeTop" ? { type: "VolumeTop", volumeId: r.volumeId ?? null } : r;
}
const T = Object.freeze({ App: "App", Download: "Download", Upload: "Upload", Save: "Save" });
Object.freeze({ Default: Object.freeze({ icon: T.App, title: "{{fileName}}", subTextProgress: "{{progress}}", subTextCompletion: "{{progress}}" }), DefaultDownload: Object.freeze({ icon: T.Download, title: "{{fileName}}", subTextProgress: "{{progress}}", subTextCompletion: "{{progress}}" }), DefaultUpload: Object.freeze({ icon: T.Upload, title: "{{fileName}}", subTextProgress: "{{progress}}", subTextCompletion: "{{progress}}" }), DefaultSave: Object.freeze({ icon: T.Save, title: "{{fileName}}", subTextProgress: "{{progress}}", subTextCompletion: "{{progress}}" }) });
class oe {
  constructor() {
  }
  static async getName(e) {
    return await s("plugin:android-fs|get_name", { uri: w(e) });
  }
  static async getByteLength(e) {
    return await s("plugin:android-fs|get_byte_length", { uri: w(e) });
  }
  static async getType(e) {
    return await s("plugin:android-fs|get_type", { uri: w(e) });
  }
  static async getMimeType(e) {
    return await s("plugin:android-fs|get_mime_type", { uri: w(e) });
  }
  static async getMetadata(e) {
    let t = await s("plugin:android-fs|get_metadata", { uri: w(e) });
    const a = new Date(t.lastModified);
    return t.type === "Dir" ? { type: "Dir", name: t.name, lastModified: a } : { type: "File", name: t.name, lastModified: a, byteLength: t.byteLength, mimeType: t.mimeType };
  }
  static async getThumbnailAsDataURL(e, t, a, n) {
    const i = n?.format ?? "jpeg", l = await s("plugin:android-fs|get_thumbnail_as_data_url", { uri: w(e), width: t, height: a, format: i });
    return l.byteLength === 0 ? null : p(l);
  }
  static async getThumbnailAsBase64(e, t, a, n) {
    const i = n?.format ?? "jpeg", l = await s("plugin:android-fs|get_thumbnail_as_base64", { uri: w(e), width: t, height: a, format: i });
    return l.byteLength === 0 ? null : p(l);
  }
  static async getThumbnailAsBytes(e, t, a, n) {
    const i = n?.format ?? "jpeg", l = await s("plugin:android-fs|get_thumbnail_as_bytes", { uri: w(e), width: t, height: a, format: i });
    return l.byteLength === 0 ? null : new Uint8Array(l);
  }
  static async getThumbnail(e, t, a, n) {
    const i = n?.format ?? "jpeg", l = await s("plugin:android-fs|get_thumbnail", { uri: w(e), width: t, height: a, format: i });
    return l.byteLength === 0 ? null : l;
  }
  static async getFsPath(e) {
    return await s("plugin:android-fs|get_fs_path", { uri: w(e) });
  }
  static convertThumbnailSrc(e, t) {
    let a = U(JSON.stringify(w(e)), "android-fs-thumbnail"), n = "?";
    return t?.width != null && (a += n + "w=" + t.width, n = "&"), t?.height != null && (a += n + "h=" + t.height, n = "&"), t?.format != null && (a += n + "f=" + t?.format, n = "&"), a;
  }
  static convertFileSrc(e) {
    return U(JSON.stringify(w(e)), "android-fs-content");
  }
  static async listVolumes(e) {
    const t = e?.purpose, a = await s("plugin:android-fs|list_volumes");
    return t == null || t === "CreatePublicFile" ? a.filter((n) => !n.isReadOnly).filter((n) => n.isAvailableForPublicFiles) : a;
  }
  static async requestPublicFilesPermission() {
    return await s("plugin:android-fs|request_public_files_permission");
  }
  static async checkPublicFilesPermission() {
    return await s("plugin:android-fs|check_public_files_permission");
  }
  static async scanPublicFile(e) {
    return await s("plugin:android-fs|scan_public_file", { uri: e });
  }
  static async setPublicFilePending(e, t) {
    return await s("plugin:android-fs|set_public_file_pending", { uri: e, isPending: t });
  }
  static async createNewPublicFile(e, t, a, n) {
    const i = n?.requestPermission ?? true, l = n?.volumeId ?? null, c = n?.isPending ?? false;
    return await s("plugin:android-fs|create_new_public_file", { volumeId: l, baseDir: e, relativePath: t, mimeType: a, requestPermission: i, isPending: c });
  }
  static async createNewPublicImageFile(e, t, a, n) {
    const i = n?.requestPermission ?? true, l = n?.volumeId ?? null, c = n?.isPending ?? false;
    return await s("plugin:android-fs|create_new_public_image_file", { volumeId: l, baseDir: e, relativePath: t, mimeType: a, requestPermission: i, isPending: c });
  }
  static async createNewPublicVideoFile(e, t, a, n) {
    const i = n?.requestPermission ?? true, l = n?.volumeId ?? null, c = n?.isPending ?? false;
    return await s("plugin:android-fs|create_new_public_video_file", { volumeId: l, baseDir: e, relativePath: t, mimeType: a, requestPermission: i, isPending: c });
  }
  static async createNewPublicAudioFile(e, t, a, n) {
    const i = n?.requestPermission ?? true, l = n?.volumeId ?? null, c = n?.isPending ?? false;
    return await s("plugin:android-fs|create_new_public_audio_file", { volumeId: l, baseDir: e, relativePath: t, mimeType: a, requestPermission: i, isPending: c });
  }
  static async createNewFile(e, t, a) {
    return await s("plugin:android-fs|create_new_file", { baseDirUri: e, relativePath: t, mimeType: a });
  }
  static async createNewDir(e, t) {
    return await s("plugin:android-fs|create_new_dir", { baseDirUri: e, relativePath: t });
  }
  static async createDir(e, t) {
    return await s("plugin:android-fs|create_dir", { baseDirUri: e, relativePath: t });
  }
  static async openReadFileStream(e, t) {
    h(t?.signal);
    const a = v(t?.bufferByteLength), { open: n, read: i, close: l } = k("plugin:android-fs|open_read_file_stream");
    try {
      return await n({ uri: w(e) }), q({ read: () => i(a), release: () => l() }, { signal: t?.signal });
    } catch (c) {
      throw await l().catch(() => {
      }), c;
    }
  }
  static async openReadTextFileLinesStream(e, t) {
    h(t?.signal);
    const a = Y(t?.maxLineByteLength), n = v(t?.bufferByteLength), i = j(t?.encoding), l = t?.fatal ?? false, c = t?.ignoreBOM ?? false, { open: u, read: g, close: f } = k("plugin:android-fs|open_read_text_file_lines_stream");
    try {
      return await u({ uri: w(e), label: i, maxLineByteLength: a, ignoreBOM: c }), H({ read: () => g(n), release: f }, { label: i, fatal: l }, t?.signal);
    } catch (o) {
      throw await f().catch(() => {
      }), o;
    }
  }
  static async openWriteFileStream(e, t) {
    h(t?.signal);
    const a = v(t?.bufferByteLength), { open: n, write: i, close: l } = R("plugin:android-fs|open_write_file_stream");
    try {
      return await n({ uri: w(e), append: t?.append ?? false, create: t?.create ?? true, notification: t?.notification ?? null }), z({ write: i, release: (c) => l(c === "Close" ? "Ok" : "Err") }, { signal: t?.signal, bufferSize: a, strictBufferSize: false, useBufferView: true });
    } catch (c) {
      throw await l("Err").catch(() => {
      }), c;
    }
  }
  static async closeAllFileStreams() {
    await s("plugin:android-fs|close_all_file_streams");
  }
  static async countAllFileStreams() {
    return await s("plugin:android-fs|count_all_file_streams");
  }
  static async readFile(e) {
    const t = await s("plugin:android-fs|read_file", { uri: w(e) });
    return new Uint8Array(t);
  }
  static async readFileAsBase64(e) {
    const t = await s("plugin:android-fs|read_file_as_base64", { uri: w(e) });
    return p(t);
  }
  static async readFileAsDataURL(e, t) {
    const a = t?.mimeType ?? null, n = await s("plugin:android-fs|read_file_as_data_url", { uri: w(e), mimeType: a });
    return p(n);
  }
  static async readTextFile(e, t) {
    const a = await s("plugin:android-fs|read_text_file", { uri: w(e) });
    return new TextDecoder(t?.encoding ?? "utf-8", { fatal: t?.fatal, ignoreBOM: t?.ignoreBOM }).decode(a);
  }
  static async writeFile(e, t, a) {
    const n = a?.notification, i = n != null ? { ...n, forceIndeterminateProgressBar: true } : null, { open: l, write: c, close: u } = R("plugin:android-fs|write_file");
    try {
      await l({ uri: w(e), append: a?.append ?? false, create: a?.create ?? true, notification: i }), await c(t), await u("Ok");
    } catch (g) {
      throw await u("Err").catch(() => {
      }), g;
    }
  }
  static async writeTextFile(e, t, a) {
    const n = a?.notification, i = n != null ? { ...n, forceIndeterminateProgressBar: true } : null, { open: l, write: c, close: u } = R("plugin:android-fs|write_text_file");
    try {
      await l({ uri: w(e), append: a?.append ?? false, create: a?.create ?? true, notification: i }), await c(t), await u("Ok");
    } catch (g) {
      throw await u("Err").catch(() => {
      }), g;
    }
  }
  static async copyFile(e, t, a) {
    const n = a?.create ?? true, i = a?.notification ?? null;
    return await s("plugin:android-fs|copy_file", { srcUri: w(e), destUri: w(t), create: n, notification: i });
  }
  static async truncateFile(e) {
    return await s("plugin:android-fs|truncate_file", { uri: e });
  }
  static async renameFile(e, t) {
    return await s("plugin:android-fs|rename_file", { uri: e, name: t });
  }
  static async renameDir(e, t) {
    return await s("plugin:android-fs|rename_dir", { uri: e, name: t });
  }
  static async removeFile(e) {
    return await s("plugin:android-fs|remove_file", { uri: e });
  }
  static async removeDirAll(e) {
    return await s("plugin:android-fs|remove_dir_all", { uri: e });
  }
  static async removeEmptyDir(e) {
    return await s("plugin:android-fs|remove_empty_dir", { uri: e });
  }
  static async readDir(e, t) {
    const a = t?.offset ?? null, n = t?.limit ?? null, i = await s("plugin:android-fs|read_dir", { uri: e, offset: a, limit: n }), l = new Array(i.length);
    for (let c = 0; c < i.length; c++) {
      const u = i[c], g = new Date(u.lastModified);
      l[c] = u.type === "Dir" ? { type: "Dir", name: u.name, uri: u.uri, lastModified: g } : { type: "File", name: u.name, uri: u.uri, lastModified: g, byteLength: u.byteLength, mimeType: u.mimeType };
    }
    return l;
  }
  static async showOpenFilePicker(e) {
    const t = e?.mimeTypes ?? [], a = Array.isArray(t) ? t : [t], n = e?.multiple ?? false, i = e?.pickerType ?? null, l = e?.needWritePermission ?? false, c = e?.localOnly ?? false, u = B(e?.initialLocation);
    return await s("plugin:android-fs|show_open_file_picker", { mimeTypes: a, multiple: n, pickerType: i, needWritePermission: l, localOnly: c, initialLocation: u });
  }
  static async showOpenDirPicker(e) {
    const t = e?.localOnly ?? false, a = B(e?.initialLocation);
    return await s("plugin:android-fs|show_open_dir_picker", { localOnly: t, initialLocation: a });
  }
  static async showSaveFilePicker(e, t, a) {
    const n = a?.localOnly ?? false, i = B(a?.initialLocation);
    return await s("plugin:android-fs|show_save_file_picker", { defaultFileName: e, mimeType: t, localOnly: n, initialLocation: i });
  }
  static async showShareFileDialog(e) {
    return await s("plugin:android-fs|show_share_file_dialog", { uris: Array.isArray(e) ? e : [e] });
  }
  static async showViewFileDialog(e) {
    return await s("plugin:android-fs|show_view_file_dialog", { uri: e });
  }
  static async showViewDirDialog(e) {
    return await s("plugin:android-fs|show_view_dir_dialog", { uri: e });
  }
  static async showEditFileDialog(e) {
    return await s("plugin:android-fs|show_edit_file_dialog", { uri: e });
  }
  static async checkPickerUriPermission(e, t) {
    return await s("plugin:android-fs|check_picker_uri_permission", { uri: e, state: t });
  }
  static async persistPickerUriPermission(e) {
    return await s("plugin:android-fs|persist_picker_uri_permission", { uri: e });
  }
  static async checkPersistedPickerUriPermission(e, t) {
    return await s("plugin:android-fs|check_persisted_picker_uri_permission", { uri: e, state: t });
  }
  static async releasePersistedPickerUriPermission(e) {
    return await s("plugin:android-fs|release_persisted_picker_uri_permission", { uri: e });
  }
  static async releaseAllPersistedPickerUriPermissions() {
    return await s("plugin:android-fs|release_all_persisted_picker_uri_permissions");
  }
}
const V = 512 * 1024;
function v(r) {
  const e = r ?? V;
  if (!ee(e)) throw new Error("Invalid bufferByteLength: expected a non-zero safe unsigned integer (1..Number.MAX_SAFE_INTEGER)");
  return e;
}
function j(r) {
  try {
    return new TextDecoder(r).encoding;
  } catch {
    throw new RangeError("Bad encoding label");
  }
}
function Y(r) {
  if (r == null) return 0;
  if (!Number.isSafeInteger(r) || r < 0) throw new Error("Invalid maxLineByteLength: expected a safe unsigned integer");
  return r;
}
const J = new TextDecoder(), X = new TextEncoder();
function p(r) {
  return J.decode(r);
}
function $(r) {
  return X.encode(r);
}
function k(r) {
  function e(a, n) {
    return s(r, { event: { type: a, args: n } });
  }
  let t = null;
  return { open: async (a) => {
    if (t !== null) throw new Error("File already opened");
    t = e("Open", a).then(re), await t;
  }, read: async (a) => {
    if (t === null) throw new Error("File not opened");
    const n = await e("Read", { id: await t, len: a });
    return n.byteLength === 0 ? null : new Uint8Array(n);
  }, close: async () => {
    t !== null && await e("Close", { id: await t });
  } };
}
function R(r) {
  function e(n, i, l) {
    return s(r, i, { headers: { "tpafs-cmd-type": n, "tpafs-cmd-args": encodeURIComponent(JSON.stringify(l)) } });
  }
  const t = new Uint8Array([0]);
  let a = null;
  return { open: async (n) => {
    if (a !== null) throw new Error("File already opened");
    a = e("Open", t, n), await a;
  }, write: async (n) => {
    if (a === null) throw new Error("File not opened");
    const { id: i, supportsRawIpcRequestBody: l } = await a;
    if (l) {
      const c = typeof n == "string" ? $(n) : n;
      await e("Write", c, { id: i });
    } else typeof n == "string" ? await e("Write", { data: n, format: "textToUtf8" }, { id: i }) : await e("Write", { data: await Q(n), format: "dataUrlToDecodedData" }, { id: i });
  }, close: async (n) => {
    if (a === null) return;
    const { id: i } = await a;
    await e("Close", {}, { id: i, error: n === "Err" });
  } };
}
function H(r, e, t) {
  let y = null, m = null, _ = null, I = null;
  function L() {
    return I === null && (I = (async () => {
      _ = null, m = null, t != null && y != null && (t.removeEventListener("abort", y), y = null), r.release && await r.release();
    })()), I;
  }
  return new ReadableStream({ start(F) {
    t && (y = () => {
      L().catch(() => {
      }), F.error(t.reason ?? x());
    }, t.addEventListener("abort", y));
  }, async pull(F) {
    try {
      if (h(t), (_ == null || _.byteLength === 0) && (_ = await r.read(), h(t)), _ == null || _.byteLength === 0) {
        await L(), F.close();
        return;
      }
      if (_.byteLength < 10) throw new Error("Invalid data: Chunk ended with partial header.");
      const E = ie(_.subarray(2, 10), "bigEndian");
      if (_.byteLength < 10 + E) throw new Error("Invalid data: Line split detected.");
      const D = _.subarray(10, 10 + E), C = _[0];
      if (ne(C)) throw new Error(p(D));
      const N = _[1];
      let A = null;
      if (N === 1) A = `
`;
      else if (N === 2) A = `\r
`;
      else if (N === 0) A = null;
      else throw new Error("Invalid lineBreakType");
      m == null && (m = new TextDecoder(e?.label, { fatal: e?.fatal, ignoreBOM: true }));
      const M = m.decode(D);
      h(t), F.enqueue({ line: M, lineBreak: A }), _ = _.subarray(10 + E);
    } catch (E) {
      throw await L().catch(() => {
      }), E;
    }
  }, async cancel() {
    await L();
  } });
}
function h(r) {
  if (r?.aborted === true) throw r?.reason ?? x();
}
function x() {
  return new DOMException("The operation was aborted.", "AbortError");
}
async function Q(r) {
  const e = r.buffer instanceof ArrayBuffer ? r : new Uint8Array(r), t = new Blob([e], { type: "application/octet-stream" });
  return await Z(t);
}
async function Z(r) {
  return new Promise((e, t) => {
    const a = new FileReader();
    a.onload = () => {
      const i = a.result;
      n(), typeof i == "string" ? e(i) : t(new Error("FileReader result is not a string"));
    }, a.onerror = () => {
      n(), t(a.error ?? new Error("FileReader failed"));
    }, a.onabort = () => {
      n(), t(new Error("FileReader aborted"));
    };
    function n() {
      a.onload = null, a.onerror = null, a.onabort = null;
    }
    try {
      a.readAsDataURL(r);
    } catch (i) {
      n(), t(i);
    }
  });
}
function ee(r) {
  return te(r) && r !== 0;
}
function te(r) {
  return Number.isSafeInteger(r) && 0 <= r && r <= Number.MAX_SAFE_INTEGER;
}
function re(r) {
  return ae(r);
}
function ae(r, e) {
  const t = r instanceof Uint8Array ? r : r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  if (t.length !== 4) throw new Error("Expected 4 bytes for u32");
  return (t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3]) >>> 0;
}
function ne(r) {
  if (r === 1) return true;
  if (r === 0) return false;
  throw new Error("Invalid flag value");
}
function ie(r, e) {
  const t = r instanceof Uint8Array ? r : r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  if (t.length !== 8) throw new Error("Expected 8 bytes for u64");
  {
    if (t[0] !== 0 || (t[1] & 224) !== 0) throw new Error("u64 exceeds Number.MAX_SAFE_INTEGER");
    return t[0] * 2 ** 56 + t[1] * 2 ** 48 + t[2] * 2 ** 40 + t[3] * 2 ** 32 + t[4] * 2 ** 24 + t[5] * 2 ** 16 + t[6] * 2 ** 8 + t[7];
  }
}
export {
  oe as AndroidFs,
  T as AndroidProgressNotificationIconType,
  ce as AndroidPublicGeneralPurposeDir
};
