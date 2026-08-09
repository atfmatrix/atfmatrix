import { _ as x } from "./matrix-05hIIFCf.js";
let q, z, F, V, b, S, N, B, G, M, E, W, D;
let __tla = (async () => {
  const L = [
    [
      /^#!.*\bpython[23]?\b/,
      "python"
    ],
    [
      /^#!.*\bnode\b/,
      "javascript"
    ],
    [
      /^#!.*\bdeno\b/,
      "typescript"
    ],
    [
      /^#!.*\bbun\b/,
      "typescript"
    ],
    [
      /^#!.*\bruby\b/,
      "ruby"
    ],
    [
      /^#!.*\bperl\b/,
      "perl"
    ],
    [
      /^#!.*\bphp\b/,
      "php"
    ],
    [
      /^#!.*\bbash\b/,
      "bash"
    ],
    [
      /^#!.*\bzsh\b/,
      "zsh"
    ],
    [
      /^#!.*\bsh\b/,
      "bash"
    ],
    [
      /^#!.*\blua\b/,
      "lua"
    ],
    [
      /^#!.*\bawk\b/,
      "awk"
    ]
  ], U = [
    [
      /\b(fn|impl|trait|pub\s+fn|let\s+mut|&mut|->)\b/,
      "rust"
    ],
    [
      /\b(func|package\s+\w+|import\s+\(|go\s+func|chan\s+\w+)\b/,
      "go"
    ],
    [
      /\b(def\s+\w+\s*\(|import\s+\w+|from\s+\w+\s+import|class\s+\w+:)\b/,
      "python"
    ],
    [
      /:\s*(string|number|boolean|void)\b|\binterface\s+\w+\s*\{/,
      "typescript"
    ],
    [
      /\b(const|let|var)\s+\w+\s*=|function\s+\w+\s*\(|=>\s*\{/,
      "javascript"
    ],
    [
      /\b(def\s+\w+|end\b|do\s*\|.*\||puts\s+|require\s+['"])\b/,
      "ruby"
    ],
    [
      /\b(public\s+class|private\s+\w+|System\.out\.println)\b/,
      "java"
    ],
    [
      /\b(#include\s*<|std::|template\s*<|nullptr|cout\s*<<)\b/,
      "cpp"
    ],
    [
      /\b(#include\s*[<"]|printf\s*\(|int\s+main\s*\(|void\s+\w+\s*\()\b/,
      "c"
    ],
    [
      /\b(namespace\s+\w+|using\s+System|public\s+static\s+void)\b/,
      "c-sharp"
    ],
    [
      /<\?php|\$\w+\s*=/,
      "php"
    ],
    [
      /\b(func\s+\w+|var\s+\w+:\s*\w+|let\s+\w+:\s*\w+|@objc)\b/,
      "swift"
    ],
    [
      /\b(fun\s+\w+|val\s+\w+|var\s+\w+:|data\s+class)\b/,
      "kotlin"
    ],
    [
      /\b(def\s+\w+|val\s+\w+|var\s+\w+|object\s+\w+|case\s+class)\b/,
      "scala"
    ],
    [
      /\b(module\s+\w+|import\s+qualified|data\s+\w+\s*=|::\s*\w+\s*->)\b/,
      "haskell"
    ],
    [
      /\b(defmodule\s+\w+|def\s+\w+|defp\s+\w+|\|>)\b/,
      "elixir"
    ],
    [
      /\b(local\s+\w+\s*=|function\s+\w+\.\w+|require\s*\()\b/,
      "lua"
    ],
    [
      /\b(SELECT\s+.*\s+FROM|INSERT\s+INTO|CREATE\s+TABLE|ALTER\s+TABLE)\b/i,
      "sql"
    ],
    [
      /\b(if\s+\[\s*|then\b|fi\b|echo\s+["']|export\s+\w+=)\b/,
      "bash"
    ],
    [
      /^\s*[\w-]+:\s*[\w\-"'[{]|^---\s*$/,
      "yaml"
    ],
    [
      /^\s*\{[\s\S]*"[\w-]+":\s*/,
      "json"
    ],
    [
      /^\s*\[[\w.-]+\]\s*$|^\s*\w+\s*=\s*["'\d\[]/,
      "toml"
    ],
    [
      /<(!DOCTYPE|html|head|body|div|span|p|a\s)/i,
      "html"
    ],
    [
      /^\s*[\w.#@][\w\s,#.:>+~-]*\{[^}]*\}|@media\s|@import\s/,
      "css"
    ],
    [
      /^#{1,6}\s+\w|^\s*[-*+]\s+\w|^\s*\d+\.\s+\w|```\w*\n/,
      "markdown"
    ],
    [
      /<\?xml|<[\w:-]+\s+xmlns/,
      "xml"
    ],
    [
      /^FROM\s+\w+|^RUN\s+|^COPY\s+|^ENTRYPOINT\s+/m,
      "dockerfile"
    ],
    [
      /\b(server\s*\{|location\s+[\/~]|proxy_pass\s+)\b/,
      "nginx"
    ],
    [
      /\b(pub\s+fn|const\s+\w+\s*=|@import\(|comptime)\b/,
      "zig"
    ]
  ];
  z = function(a) {
    const e = a.split(`
`)[0];
    for (const [t, r] of L) if (t.test(e)) return r;
    for (const [t, r] of U) if (t.test(a)) return r;
    return null;
  };
  F = function(a) {
    const e = a.match(/\blanguage-(\w+)\b/);
    if (e) return e[1];
    const t = a.match(/\blang-(\w+)\b/);
    if (t) return t[1];
    const r = /* @__PURE__ */ new Set([
      "rust",
      "javascript",
      "typescript",
      "python",
      "ruby",
      "go",
      "java",
      "c",
      "cpp",
      "csharp",
      "php",
      "swift",
      "kotlin",
      "scala",
      "haskell",
      "elixir",
      "lua",
      "sql",
      "bash",
      "shell",
      "yaml",
      "json",
      "toml",
      "html",
      "css",
      "xml",
      "markdown",
      "dockerfile",
      "nginx",
      "zig",
      "text",
      "plaintext",
      "console",
      "sh"
    ]);
    for (const n of a.split(/\s+/)) if (r.has(n.toLowerCase())) return n.toLowerCase();
    return null;
  };
  M = function(a) {
    const e = {
      js: "javascript",
      ts: "typescript",
      py: "python",
      rb: "ruby",
      rs: "rust",
      sh: "bash",
      shell: "bash",
      yml: "yaml",
      bat: "batch",
      cs: "c-sharp",
      csharp: "c-sharp",
      "c++": "cpp",
      "c#": "c-sharp",
      "f#": "fsharp",
      dockerfile: "dockerfile",
      docker: "dockerfile",
      makefile: "make",
      plaintext: "text",
      plain: "text",
      txt: "text"
    }, t = a.toLowerCase();
    return e[t] || t;
  };
  E = "2.18.1";
  q = [
    "ada",
    "agda",
    "asciidoc",
    "asm",
    "awk",
    "bash",
    "batch",
    "c",
    "c-sharp",
    "caddy",
    "capnp",
    "cedar",
    "cedarschema",
    "clojure",
    "cmake",
    "cobol",
    "commonlisp",
    "cpp",
    "css",
    "d",
    "dart",
    "devicetree",
    "diff",
    "dockerfile",
    "dot",
    "elisp",
    "elixir",
    "elm",
    "erlang",
    "fish",
    "fsharp",
    "gitattributes",
    "gleam",
    "glsl",
    "go",
    "graphql",
    "groovy",
    "haskell",
    "hcl",
    "hlsl",
    "html",
    "idris",
    "ini",
    "java",
    "javascript",
    "jinja2",
    "jq",
    "jsdoc",
    "json",
    "julia",
    "just",
    "kconfig",
    "kdl",
    "kotlin",
    "lean",
    "lua",
    "make",
    "markdown",
    "matlab",
    "meson",
    "nginx",
    "ninja",
    "nix",
    "objc",
    "ocaml",
    "odin",
    "perl",
    "php",
    "postscript",
    "powershell",
    "prolog",
    "proto",
    "python",
    "query",
    "r",
    "regex",
    "rego",
    "rescript",
    "ron",
    "ruby",
    "rust",
    "scala",
    "scheme",
    "scss",
    "solidity",
    "sparql",
    "sql",
    "ssh-config",
    "starlark",
    "styx",
    "svelte",
    "swift",
    "textproto",
    "thrift",
    "tlaplus",
    "toml",
    "tsx",
    "typescript",
    "typst",
    "uiua",
    "vb",
    "verilog",
    "vhdl",
    "vim",
    "vue",
    "wit",
    "x86asm",
    "xml",
    "yaml",
    "yuri",
    "zig",
    "zsh"
  ];
  N = [
    {
      name: "attribute",
      tag: "at"
    },
    {
      name: "constant",
      tag: "co"
    },
    {
      name: "constant.builtin",
      tag: "cb",
      parentTag: "constant"
    },
    {
      name: "constructor",
      tag: "cr"
    },
    {
      name: "function.builtin",
      tag: "fb",
      parentTag: "function"
    },
    {
      name: "function",
      tag: "f"
    },
    {
      name: "function.method",
      tag: "fm",
      parentTag: "function"
    },
    {
      name: "keyword",
      tag: "k"
    },
    {
      name: "keyword.conditional",
      tag: "kc",
      parentTag: "keyword"
    },
    {
      name: "keyword.coroutine",
      tag: "ko",
      parentTag: "keyword"
    },
    {
      name: "keyword.debug",
      tag: "kd",
      parentTag: "keyword"
    },
    {
      name: "keyword.exception",
      tag: "ke",
      parentTag: "keyword"
    },
    {
      name: "keyword.function",
      tag: "kf",
      parentTag: "keyword"
    },
    {
      name: "keyword.import",
      tag: "ki",
      parentTag: "keyword"
    },
    {
      name: "keyword.operator",
      tag: "kp",
      parentTag: "keyword"
    },
    {
      name: "keyword.repeat",
      tag: "kr",
      parentTag: "keyword"
    },
    {
      name: "keyword.return",
      tag: "kt",
      parentTag: "keyword"
    },
    {
      name: "keyword.type",
      tag: "ky",
      parentTag: "keyword"
    },
    {
      name: "operator",
      tag: "o"
    },
    {
      name: "property",
      tag: "pr"
    },
    {
      name: "punctuation",
      tag: "p"
    },
    {
      name: "punctuation.bracket",
      tag: "pb",
      parentTag: "punctuation"
    },
    {
      name: "punctuation.delimiter",
      tag: "pd",
      parentTag: "punctuation"
    },
    {
      name: "punctuation.special",
      tag: "ps",
      parentTag: "punctuation"
    },
    {
      name: "string",
      tag: "s"
    },
    {
      name: "string.special",
      tag: "ss",
      parentTag: "string"
    },
    {
      name: "tag",
      tag: "tg"
    },
    {
      name: "tag.delimiter",
      tag: "td",
      parentTag: "tag"
    },
    {
      name: "tag.error",
      tag: "te",
      parentTag: "tag"
    },
    {
      name: "type",
      tag: "t"
    },
    {
      name: "type.builtin",
      tag: "tb",
      parentTag: "type"
    },
    {
      name: "type.qualifier",
      tag: "tq",
      parentTag: "type"
    },
    {
      name: "variable",
      tag: "v"
    },
    {
      name: "variable.builtin",
      tag: "vb",
      parentTag: "variable"
    },
    {
      name: "variable.parameter",
      tag: "vp",
      parentTag: "variable"
    },
    {
      name: "comment",
      tag: "c"
    },
    {
      name: "comment.documentation",
      tag: "cd",
      parentTag: "comment"
    },
    {
      name: "macro",
      tag: "m"
    },
    {
      name: "label",
      tag: "l"
    },
    {
      name: "diff.addition",
      tag: "da"
    },
    {
      name: "diff.deletion",
      tag: "dd"
    },
    {
      name: "number",
      tag: "n"
    },
    {
      name: "text.literal",
      tag: "tl"
    },
    {
      name: "text.emphasis",
      tag: "em"
    },
    {
      name: "text.strong",
      tag: "st"
    },
    {
      name: "text.uri",
      tag: "tu"
    },
    {
      name: "text.reference",
      tag: "tr"
    },
    {
      name: "string.escape",
      tag: "se",
      parentTag: "string"
    },
    {
      name: "text.title",
      tag: "tt"
    },
    {
      name: "text.strikethrough",
      tag: "tx"
    },
    {
      name: "spell",
      tag: "sp"
    },
    {
      name: "embedded",
      tag: "eb"
    },
    {
      name: "error",
      tag: "er"
    },
    {
      name: "namespace",
      tag: "ns"
    },
    {
      name: "include",
      tag: "in",
      parentTag: "keyword"
    },
    {
      name: "storageclass",
      tag: "sc",
      parentTag: "keyword"
    },
    {
      name: "repeat",
      tag: "rp",
      parentTag: "keyword"
    },
    {
      name: "conditional",
      tag: "cn",
      parentTag: "keyword"
    },
    {
      name: "exception",
      tag: "ex",
      parentTag: "keyword"
    },
    {
      name: "preproc",
      tag: "pp",
      parentTag: "keyword"
    },
    {
      name: "none",
      tag: ""
    },
    {
      name: "character",
      tag: "ch",
      parentTag: "string"
    },
    {
      name: "character.special",
      tag: "cs",
      parentTag: "string"
    },
    {
      name: "variable.member",
      tag: "vm",
      parentTag: "variable"
    },
    {
      name: "function.definition",
      tag: "fd",
      parentTag: "function"
    },
    {
      name: "type.definition",
      tag: "tf",
      parentTag: "type"
    },
    {
      name: "function.call",
      tag: "fc",
      parentTag: "function"
    },
    {
      name: "keyword.modifier",
      tag: "km",
      parentTag: "keyword"
    },
    {
      name: "keyword.directive",
      tag: "dr",
      parentTag: "keyword"
    },
    {
      name: "string.regexp",
      tag: "rx",
      parentTag: "string"
    },
    {
      name: "nospell",
      tag: ""
    },
    {
      name: "float",
      tag: "n"
    },
    {
      name: "boolean",
      tag: "cb"
    }
  ];
  function A(a) {
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  const T = {
    manual: false,
    theme: "one-dark",
    selector: "pre code",
    cdn: "jsdelivr",
    version: E,
    pluginsUrl: "",
    hostUrl: "",
    logger: console,
    resolveHostJs: ({ baseUrl: a, path: e }) => x(() => import(`${a}/${e}`).then(async (m) => {
      await m.__tla;
      return m;
    }), []),
    resolveHostWasm: ({ baseUrl: a, path: e }) => fetch(`${a}/${e}`),
    resolveJs: ({ baseUrl: a, path: e }) => x(() => import(`${a}/${e}`).then(async (m) => {
      await m.__tla;
      return m;
    }), []),
    resolveWasm: ({ baseUrl: a, path: e }) => fetch(`${a}/${e}`)
  };
  let w = null, y = null, f = {
    ...T
  };
  const h = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), d = new Set(q);
  let p = null, v = null;
  async function _(a) {
    if (a.pluginsUrl) return v || (v = (async () => {
      a.logger.debug(`[arborium] Loading local plugins manifest from: ${a.pluginsUrl}`);
      const e = await fetch(a.pluginsUrl);
      if (!e.ok) throw new Error(`Failed to load plugins.json: ${e.status}`);
      p = await e.json(), a.logger.debug(`[arborium] Loaded local manifest with ${p?.entries.length} entries`);
    })(), v);
  }
  function I(a, e) {
    if (p) {
      const s = p.entries.find((c) => c.language === a);
      if (s) return s.local_js.substring(0, s.local_js.lastIndexOf("/"));
    }
    const t = e.cdn, r = e.version;
    let n;
    return t === "jsdelivr" ? n = "https://cdn.jsdelivr.net/npm" : t === "unpkg" ? n = "https://unpkg.com" : n = t, `${n}/@arborium/${a}@${r}`;
  }
  async function $(a, e) {
    const t = h.get(a);
    if (t) return e.logger.debug(`[arborium] Grammar '${a}' found in cache`), t;
    const r = k.get(a);
    if (r) return e.logger.debug(`[arborium] Grammar '${a}' already loading, waiting...`), r;
    const n = C(a, e);
    k.set(a, n);
    try {
      return await n;
    } finally {
      k.delete(a);
    }
  }
  async function C(a, e) {
    if (await _(e), !d.has(a) && !p?.entries.some((t) => t.language === a)) return e.logger.debug(`[arborium] Grammar '${a}' not available`), null;
    try {
      const t = e.version, r = I(a, e), n = e.resolveJs === T.resolveJs ? ` from ${r}/grammar.js` : "";
      e.logger.debug(`[arborium] Loading grammar '${a}'${n}`);
      const s = await e.resolveJs({
        language: a,
        baseUrl: r,
        version: t,
        path: "grammar.js"
      }), c = await e.resolveWasm({
        language: a,
        baseUrl: r,
        version: t,
        path: "grammar_bg.wasm"
      });
      await s.default({
        module_or_path: c
      });
      const o = s.language_id();
      o !== a && e.logger.warn(`[arborium] Language ID mismatch: expected '${a}', got '${o}'`);
      const u = s.injection_languages(), l = {
        languageId: a,
        injectionLanguages: u,
        module: s,
        parseUtf8: (i) => {
          const m = s.create_session();
          try {
            s.set_text(m, i);
            const g = s.parse(m);
            return {
              spans: g.spans || [],
              injections: g.injections || []
            };
          } catch (g) {
            return e.logger.error("[arborium] Parse error:", g), {
              spans: [],
              injections: []
            };
          } finally {
            s.free_session(m);
          }
        },
        parseUtf16: (i) => {
          const m = s.create_session();
          try {
            s.set_text(m, i);
            const g = s.parse_utf16(m);
            return {
              spans: g.spans || [],
              injections: g.injections || []
            };
          } catch (g) {
            return e.logger.error("[arborium] Parse error:", g), {
              spans: [],
              injections: []
            };
          } finally {
            s.free_session(m);
          }
        }
      };
      return h.set(a, l), e.logger.debug(`[arborium] Grammar '${a}' loaded successfully`), l;
    } catch (t) {
      return e.logger.error(`[arborium] Failed to load grammar '${a}':`, t), null;
    }
  }
  const j = /* @__PURE__ */ new Map();
  let P = 1;
  function H(a) {
    globalThis.arboriumHost = {
      isLanguageAvailable(e) {
        return d.has(e) || h.has(e);
      },
      async loadGrammar(e) {
        const t = await $(e, a);
        if (!t) return 0;
        for (const [n, s] of j) if (s === t) return n;
        const r = P++;
        return j.set(r, t), r;
      },
      parse(e, t) {
        const r = j.get(e);
        return r ? r.parseUtf8(t) : {
          spans: [],
          injections: []
        };
      }
    };
  }
  function O(a) {
    if (a.hostUrl) return a.hostUrl;
    const e = a.cdn, t = a.version;
    let r;
    e === "jsdelivr" ? r = "https://cdn.jsdelivr.net/npm" : e === "unpkg" ? r = "https://unpkg.com" : r = e;
    const n = t === "latest" ? "" : `@${t}`;
    return `${r}/@arborium/arborium${n}/dist`;
  }
  async function R(a) {
    return w || y || (y = (async () => {
      H(a);
      const e = O(a), t = a.resolveHostJs === T.resolveHostJs ? ` from ${e}/arborium_host.js` : "";
      a.logger.debug(`[arborium] Loading host${t}`);
      try {
        const r = await a.resolveHostJs({
          baseUrl: e,
          path: "arborium_host.js"
        }), n = await a.resolveHostWasm({
          baseUrl: e,
          path: "arborium_host_bg.wasm"
        });
        return await r.default({
          module_or_path: n
        }), w = {
          highlight: r.highlight,
          isLanguageAvailable: r.isLanguageAvailable
        }, a.logger.debug("[arborium] Host loaded successfully"), w;
      } catch (r) {
        return a.logger.error("[arborium] Failed to load host:", r), null;
      }
    })(), y);
  }
  S = async function(a, e, t) {
    const r = b(t), n = await R(r);
    if (n) try {
      return n.highlight(a, e);
    } catch (s) {
      r.logger.error("[arborium] Host highlight failed:", s);
    }
    return A(e);
  };
  G = async function(a, e) {
    const t = b(e), r = await $(a, t);
    if (!r) return null;
    const { module: n } = r;
    return {
      languageId: () => r.languageId,
      injectionLanguages: () => r.injectionLanguages,
      highlight: async (s) => S(a, s, e),
      parse: (s) => r.parseUtf16(s),
      createSession: () => {
        const s = n.create_session(), c = () => {
          try {
            const o = n.parse_utf16(s);
            return {
              spans: o.spans || [],
              injections: o.injections || []
            };
          } catch (o) {
            return t.logger.error("[arborium] Session parse error:", o), {
              spans: [],
              injections: []
            };
          }
        };
        return {
          setText: (o) => n.set_text(s, o),
          applyEdit: (o, u) => (n.apply_edit(s, o, u), c()),
          parse: c,
          cancel: () => n.cancel(s),
          free: () => n.free_session(s)
        };
      },
      dispose: () => {
      }
    };
  };
  W = async function(a, e, t) {
    const r = b(t), n = a;
    await n.default({
      module_or_path: e
    });
    const s = n.language_id(), c = n.injection_languages(), o = {
      languageId: s,
      injectionLanguages: c,
      module: n,
      parseUtf8: (u) => {
        const l = n.create_session();
        try {
          n.set_text(l, u);
          const i = n.parse(l);
          return {
            spans: i.spans || [],
            injections: i.injections || []
          };
        } catch (i) {
          return r.logger.error("[arborium] Parse error:", i), {
            spans: [],
            injections: []
          };
        } finally {
          n.free_session(l);
        }
      },
      parseUtf16: (u) => {
        const l = n.create_session();
        try {
          n.set_text(l, u);
          const i = n.parse_utf16(l);
          return {
            spans: i.spans || [],
            injections: i.injections || []
          };
        } catch (i) {
          return r.logger.error("[arborium] Parse error:", i), {
            spans: [],
            injections: []
          };
        } finally {
          n.free_session(l);
        }
      }
    };
    return h.set(s, o), d.add(s), r.logger.debug(`[arborium] Grammar '${s}' registered`), await G(s, t);
  };
  b = function(a) {
    return a ? {
      ...f,
      ...a
    } : {
      ...f
    };
  };
  D = function(a) {
    f = {
      ...f,
      ...a
    };
  };
  B = async function(a, e) {
    const t = b(e);
    return await _(t), d.has(a) || (p?.entries.some((r) => r.language === a) ?? false);
  };
  V = async function(a) {
    const e = b(a);
    return await _(e), p ? p.entries.map((t) => t.language) : Array.from(d);
  };
})();
export {
  __tla,
  q as availableLanguages,
  z as detectLanguage,
  F as extractLanguageFromClass,
  V as getAvailableLanguages,
  b as getConfig,
  S as highlight,
  N as highlights,
  B as isLanguageAvailable,
  G as loadGrammar,
  M as normalizeLanguage,
  E as pluginVersion,
  W as registerGrammar,
  D as setConfig
};
