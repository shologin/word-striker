function _0xca0f(_0x2d1a10, _0x376c52) {
  const _0x2f179f = _0x2f17();
  return (
    (_0xca0f = function (_0xca0f17, _0x9d8afa) {
      _0xca0f17 = _0xca0f17 - 0x13b;
      let _0x42d058 = _0x2f179f[_0xca0f17];
      return _0x42d058;
    }),
    _0xca0f(_0x2d1a10, _0x376c52)
  );
}
const _0x5c0682 = _0xca0f;
(function (_0x108a1c, _0x227d17) {
  const _0x180cad = _0xca0f,
    _0x2d1fe2 = _0x108a1c();
  while (!![]) {
    try {
      const _0x1358f1 =
        -parseInt(_0x180cad(0x1e3)) / 0x1 +
        (parseInt(_0x180cad(0x16a)) / 0x2) * (-parseInt(_0x180cad(0x154)) / 0x3) +
        -parseInt(_0x180cad(0x183)) / 0x4 +
        (parseInt(_0x180cad(0x149)) / 0x5) * (parseInt(_0x180cad(0x186)) / 0x6) +
        -parseInt(_0x180cad(0x1f5)) / 0x7 +
        -parseInt(_0x180cad(0x236)) / 0x8 +
        (parseInt(_0x180cad(0x20f)) / 0x9) * (parseInt(_0x180cad(0x217)) / 0xa);
      if (_0x1358f1 === _0x227d17) break;
      else _0x2d1fe2["push"](_0x2d1fe2["shift"]());
    } catch (_0xa53cb) {
      _0x2d1fe2["push"](_0x2d1fe2["shift"]());
    }
  }
})(_0x2f17, 0xf3d69);
class t {
  constructor({ position: _0x4c1e2f, velocity: _0x29f9b1, text: _0x27f0c3 }) {
    const _0x18f96e = _0xca0f;
    (this[_0x18f96e(0x21b)] = _0x4c1e2f),
      (this[_0x18f96e(0x205)] = _0x29f9b1),
      (this["text"] = _0x27f0c3),
      (this["radius"] = {
        x: l[_0x18f96e(0x1e7)](this[_0x18f96e(0x200)])[_0x18f96e(0x219)] + 0xa,
        y:
          l[_0x18f96e(0x1e7)](this[_0x18f96e(0x200)])["width"] / 1.5 > 0x14
            ? l[_0x18f96e(0x1e7)](this[_0x18f96e(0x200)])[_0x18f96e(0x219)] / 1.5
            : 0x14,
      }),
      (this["letterIndex"] = 0x0),
      (this[_0x18f96e(0x1bf)] = {
        fillStyle: _0x18f96e(0x150),
        shadowColor: _0x18f96e(0x1be),
        shadowOffsetY: 0x2,
        shadowBlur: 0x8,
        strokeStyle: _0x18f96e(0x13f),
        lineWidth: 0x2,
        font: _0x18f96e(0x1fd),
        hitText: _0x18f96e(0x153),
        normalText: _0x18f96e(0x13f),
        normalShadowColor: _0x18f96e(0x1be),
        normalStrokeStyle: "#6da5c0",
        hitShadowColor: _0x18f96e(0x153),
        hitStrokeStyle: _0x18f96e(0x18a),
        destroyedShadowColor: _0x18f96e(0x13d),
        destroyedStrokeStyle: _0x18f96e(0x169),
      });
  }
  [_0x5c0682(0x181)]() {
    const _0x3e70b0 = _0x5c0682;
    l["save"](),
      l[_0x3e70b0(0x1cb)](),
      (l[_0x3e70b0(0x17e)] = this["style"][_0x3e70b0(0x17e)]),
      l[_0x3e70b0(0x1ab)](
        this[_0x3e70b0(0x21b)]["x"],
        this[_0x3e70b0(0x21b)]["y"],
        this["radius"]["x"],
        this["radius"]["y"],
        0x0,
        0x2 * Math["PI"],
        0x168
      ),
      l[_0x3e70b0(0x1b3)](),
      (l[_0x3e70b0(0x1ad)] = this[_0x3e70b0(0x1bf)]["shadowColor"]),
      (l[_0x3e70b0(0x175)] = this["style"][_0x3e70b0(0x175)]),
      (l["shadowBlur"] = this[_0x3e70b0(0x1bf)][_0x3e70b0(0x1f3)]),
      (l[_0x3e70b0(0x182)] = this["style"][_0x3e70b0(0x182)]),
      (l[_0x3e70b0(0x206)] = this[_0x3e70b0(0x1bf)][_0x3e70b0(0x206)]),
      l[_0x3e70b0(0x167)](),
      l[_0x3e70b0(0x1dd)](),
      l["restore"](),
      l[_0x3e70b0(0x180)](),
      (l["font"] = this[_0x3e70b0(0x1bf)]["font"]);
    let _0x1e743f = this[_0x3e70b0(0x21b)]["x"] - this[_0x3e70b0(0x19a)]["x"] + 0xa;
    for (let _0x406c13 = 0x0; _0x406c13 < this[_0x3e70b0(0x200)]["length"]; _0x406c13++) {
      const _0x44785e = this[_0x3e70b0(0x200)][_0x406c13];
      _0x406c13 < this[_0x3e70b0(0x13e)]
        ? (l[_0x3e70b0(0x17e)] = this["style"]["hitText"])
        : (l[_0x3e70b0(0x17e)] = this[_0x3e70b0(0x1bf)]["normalText"]),
        l[_0x3e70b0(0x224)](_0x44785e, _0x1e743f, this["position"]["y"] + 0x5),
        (_0x1e743f += l[_0x3e70b0(0x1e7)](_0x44785e)[_0x3e70b0(0x219)]);
    }
    l[_0x3e70b0(0x20e)]();
  }
  [_0x5c0682(0x18c)]() {
    const _0x82486 = _0x5c0682;
    this[_0x82486(0x181)](),
      (this[_0x82486(0x21b)]["x"] += this[_0x82486(0x205)]["x"]),
      (this[_0x82486(0x21b)]["y"] += this[_0x82486(0x205)]["y"]);
  }
  [_0x5c0682(0x21a)]() {
    this["letterIndex"]++;
  }
  [_0x5c0682(0x218)]() {
    const _0x22016c = _0x5c0682;
    this["letterIndex"] === this[_0x22016c(0x200)][_0x22016c(0x232)]
      ? ((this["style"]["fillStyle"] = _0x22016c(0x184)),
        (this[_0x22016c(0x1bf)][_0x22016c(0x1ad)] = this[_0x22016c(0x1bf)][_0x22016c(0x144)]),
        (this[_0x22016c(0x1bf)][_0x22016c(0x182)] = this[_0x22016c(0x1bf)][_0x22016c(0x1b2)]))
      : ((this[_0x22016c(0x1bf)][_0x22016c(0x1ad)] = this[_0x22016c(0x1bf)][_0x22016c(0x195)]),
        (this[_0x22016c(0x1bf)][_0x22016c(0x182)] = this[_0x22016c(0x1bf)][_0x22016c(0x1e0)])),
      setTimeout(() => {
        const _0x158eaf = _0x22016c;
        (this[_0x158eaf(0x1bf)][_0x158eaf(0x1ad)] = this[_0x158eaf(0x1bf)][_0x158eaf(0x1c7)]),
          (this["style"]["strokeStyle"] = this[_0x158eaf(0x1bf)][_0x158eaf(0x19e)]);
      }, 0x12c);
  }
}
class e {
  constructor() {
    const _0x306c68 = _0x5c0682;
    (this["positionY"] = 0x0), (this[_0x306c68(0x14b)] = 0x2 * n[_0x306c68(0x1d6)]);
  }
  [_0x5c0682(0x181)]() {
    const _0x4af49f = _0x5c0682;
    l[_0x4af49f(0x1cb)](),
      (l[_0x4af49f(0x17e)] = _0x4af49f(0x1fe)),
      l[_0x4af49f(0x193)](0x0, this[_0x4af49f(0x1ef)], n[_0x4af49f(0x219)], n[_0x4af49f(0x1d6)]),
      l[_0x4af49f(0x1dd)]();
  }
  [_0x5c0682(0x18c)]() {
    const _0x234f29 = _0x5c0682;
    this[_0x234f29(0x181)](), this[_0x234f29(0x1ef)] < n[_0x234f29(0x1d6)] && (this[_0x234f29(0x1ef)] += this["velocityY"]);
  }
}
class i {
  constructor({ scores: _0x24ec86, lives: _0xc2fd87, dictionaryName: _0x1a47cc }) {
    const _0x281292 = _0x5c0682;
    (this[_0x281292(0x1bf)] = { fillStyle: _0x281292(0x13d), shadowColor: _0x281292(0x13d) }),
      (this[_0x281292(0x216)] = !0x1),
      (this[_0x281292(0x221)] = _0x24ec86),
      (this["__lives"] = _0xc2fd87),
      (this[_0x281292(0x1d9)] = _0x1a47cc),
      (this["__highScore"] = localStorage["getItem"](this["__dictionaryName"] + "_high_score") || 0x0);
  }
  #t() {
    const _0x3ee487 = _0x5c0682;
    l["save"](),
      l[_0x3ee487(0x1cb)](),
      (l[_0x3ee487(0x182)] = this[_0x3ee487(0x1bf)][_0x3ee487(0x17e)]),
      (l[_0x3ee487(0x206)] = 0x3),
      (l["shadowColor"] = this[_0x3ee487(0x1bf)][_0x3ee487(0x1ad)]),
      (l[_0x3ee487(0x1f3)] = 0x5),
      l["strokeRect"](0x0, 0x0, n[_0x3ee487(0x219)], n[_0x3ee487(0x1d6)]),
      l["stroke"](),
      l[_0x3ee487(0x1dd)](),
      l[_0x3ee487(0x20e)]();
  }
  ["update"]() {
    this.#e();
  }
  #e() {
    this["__isBubbleMissed"] &&
      (this.#t(),
      setTimeout(() => {
        const _0x338cde = _0xca0f;
        this[_0x338cde(0x216)] = !0x1;
      }, 0x1f4));
  }
  [_0x5c0682(0x1a3)]() {
    const _0x3c2a46 = _0x5c0682;
    (this[_0x3c2a46(0x216)] = !0x0), this.#e();
  }
  ["setScores"](_0x1855b5) {
    this["__scores"] += _0x1855b5;
  }
  [_0x5c0682(0x16d)]() {
    return this["__scores"];
  }
  [_0x5c0682(0x233)](_0x51e164) {
    const _0x5738f8 = _0x5c0682;
    this[_0x5738f8(0x223)] += _0x51e164;
  }
  [_0x5c0682(0x17c)]() {
    const _0x25bcf6 = _0x5c0682;
    if (-0x1 === this[_0x25bcf6(0x223)]) return !0x1;
    let _0x726648 = "\x20";
    for (let _0x49a655 = 0x0; _0x49a655 < this[_0x25bcf6(0x223)]; _0x49a655++) _0x726648 += _0x25bcf6(0x160);
    return _0x726648;
  }
  ["getHighScore"]() {
    const _0x555c14 = _0x5c0682;
    return this[_0x555c14(0x221)] > this[_0x555c14(0x20d)]
      ? (this.#i(this["__scores"]), this[_0x555c14(0x20d)] + "\x20<span\x20class=\x22new-record-badge\x22>New\x20record!</span>")
      : this[_0x555c14(0x20d)];
  }
  #i(_0x28188a) {
    const _0x41dfaf = _0x5c0682;
    localStorage[_0x41dfaf(0x1c1)](this[_0x41dfaf(0x1d9)] + _0x41dfaf(0x155), _0x28188a), (this[_0x41dfaf(0x20d)] = _0x28188a);
  }
}
class s {
  constructor({ position: _0xe88ca4, radius: _0x4269f5 }) {
    const _0x5466a9 = _0x5c0682;
    (this[_0x5466a9(0x21b)] = _0xe88ca4),
      (this[_0x5466a9(0x19a)] = _0x4269f5),
      (this[_0x5466a9(0x1bf)] = {
        fillStyle: _0x5466a9(0x168),
        shadowColor: _0x5466a9(0x1a2),
        strokeStyle: "#6da5c0",
        shootShadowColor: _0x5466a9(0x153),
        shootStrokeStyle: _0x5466a9(0x153),
      });
  }
  ["draw"]() {
    const _0xbb683f = _0x5c0682;
    l["save"](),
      l[_0xbb683f(0x1cb)](),
      l[_0xbb683f(0x176)](
        this[_0xbb683f(0x21b)]["x"],
        this[_0xbb683f(0x21b)]["y"] + this[_0xbb683f(0x19a)] / 0x2,
        this[_0xbb683f(0x19a)],
        0x0,
        0x2 * Math["PI"],
        !0x1
      ),
      (l[_0xbb683f(0x17e)] = this[_0xbb683f(0x1bf)][_0xbb683f(0x17e)]),
      l["fill"](),
      (l[_0xbb683f(0x1ad)] = this[_0xbb683f(0x1bf)]["shadowColor"]),
      (l[_0xbb683f(0x196)] = 0x2),
      (l[_0xbb683f(0x1f3)] = 0x10),
      (l[_0xbb683f(0x182)] = this[_0xbb683f(0x1bf)][_0xbb683f(0x182)]),
      (l[_0xbb683f(0x206)] = 0x5),
      l[_0xbb683f(0x167)](),
      l[_0xbb683f(0x1dd)](),
      l[_0xbb683f(0x20e)]();
  }
  [_0x5c0682(0x220)]() {
    const _0x1e62f4 = _0x5c0682;
    l[_0x1e62f4(0x180)](),
      l["beginPath"](),
      l[_0x1e62f4(0x176)](
        this[_0x1e62f4(0x21b)]["x"],
        this[_0x1e62f4(0x21b)]["y"] + this["radius"] / 0x2,
        1.25 * this[_0x1e62f4(0x19a)],
        0x0,
        0x2 * Math["PI"],
        !0x1
      ),
      (l[_0x1e62f4(0x17e)] = this[_0x1e62f4(0x1bf)][_0x1e62f4(0x17e)]),
      l[_0x1e62f4(0x1b3)](),
      (l[_0x1e62f4(0x1ad)] = this[_0x1e62f4(0x1bf)][_0x1e62f4(0x198)]),
      (l[_0x1e62f4(0x196)] = 0x2),
      (l["shadowBlur"] = 0x10),
      (l[_0x1e62f4(0x182)] = this[_0x1e62f4(0x1bf)]["shootStrokeStyle"]),
      (l[_0x1e62f4(0x206)] = 0x5),
      l[_0x1e62f4(0x167)](),
      l[_0x1e62f4(0x1dd)](),
      l[_0x1e62f4(0x20e)]();
  }
}
function _0x2f17() {
  const _0x43e3ee = [
    "Gadget",
    "normalShadowColor",
    "struct",
    "Sword",
    "memory",
    "beginPath",
    "Blaster",
    "HTML",
    "KeyR",
    "addEventListener",
    "getDictionaryName",
    "point",
    "flex",
    "getHighScore",
    "sqrt",
    "Milano",
    "height",
    "includes",
    "industry",
    "__dictionaryName",
    "setScores",
    "Whistle",
    "KeyD",
    "closePath",
    "add",
    "KeyP",
    "hitStrokeStyle",
    "desktop",
    "KeyH",
    "547862ihIEYu",
    "form",
    "floor",
    "Drax",
    "measureText",
    "tideman",
    "Stone",
    "Orb",
    "animation-fade",
    "fiftyville",
    "Star",
    "Kree",
    "positionY",
    "Set\x20wrong\x20dictionary",
    "splice",
    "none",
    "shadowBlur",
    "rotation",
    "1648969cDHIbX",
    "closeAboutBtn",
    "Mask",
    "lives",
    "author",
    "background",
    "setChosenDictionary",
    "array",
    "bold\x2018px\x20Arial",
    "#05161a",
    "aboutBtn",
    "text",
    "enim",
    "fact",
    "flask",
    "gameOverMenuLinkBtn",
    "velocity",
    "lineWidth",
    "SQL",
    "Warlock",
    "Quill",
    "Ipsum",
    "dictionary",
    "</option>",
    "__highScore",
    "restore",
    "27975141ohudkf",
    "Digit0",
    "animation-appear",
    "scratch",
    "translate",
    "duck",
    "django",
    "__isBubbleMissed",
    "10OiPLUd",
    "changeColor",
    "width",
    "increaseLetterIndex",
    "position",
    "Dictionary\x20wasn\x27t\x20set:\x20",
    "KeyE",
    "CS50",
    "Tower",
    "shootEffect",
    "__scores",
    "Sovereign",
    "__lives",
    "fillText",
    "Ship",
    "dictionarySelect",
    "Soul",
    "Cosmo",
    "merge",
    "finance",
    "chunk",
    "year",
    "Rocket",
    "and",
    "book",
    "Knowhere",
    "KeyJ",
    "length",
    "setLives",
    "Love",
    "loop",
    "9925960CAIhoe",
    "git",
    "innerWidth",
    "KeyC",
    "red",
    "letterIndex",
    "#6da5c0",
    "renderDictionariesList",
    "random",
    "<option\x20value=\x22",
    "javascript",
    "destroyedShadowColor",
    "infoTable",
    "KeyZ",
    "classList",
    "code",
    "10ZeUCwa",
    "rotate",
    "velocityY",
    "innerHeight",
    "bootstrap",
    "Mix",
    "elif",
    "#294d61",
    "setInterval",
    "change",
    "#EC9704",
    "33HjAOLu",
    "_high_score",
    "KeyL",
    "KeyF",
    "KeyI",
    "emoji",
    "display",
    "section",
    "Collector",
    "KeyN",
    "day",
    "Bogdan\x20Shologin",
    "<svg\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fill=\x22none\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20viewBox=\x220\x200\x2024\x2024\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-width=\x221.5\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke=\x22#EC9704\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22info-fire-icon\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-linecap=\x22round\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-linejoin=\x22round\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22M15.362\x205.214A8.252\x208.252\x200\x200112\x2021\x208.25\x208.25\x200\x20016.038\x207.048\x208.287\x208.287\x200\x20009\x209.6a8.983\x208.983\x200\x20013.361-6.867\x208.21\x208.21\x200\x20003\x202.48z\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-linecap=\x22round\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-linejoin=\x22round\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22M12\x2018a3.75\x203.75\x200\x2000.495-7.467\x205.99\x205.99\x200\x2000-1.925\x203.546\x205.974\x205.974\x200\x2001-2.133-1A3.75\x203.75\x200\x200012\x2018z\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
    "Dance",
    "Retro",
    "value",
    "ninja",
    "amet",
    "KeyK",
    "stroke",
    "rgba(6,\x2088,\x2047,\x200.02)",
    "#b51a2b",
    "85854YYuZnP",
    "__chosenDictionary",
    "KeyA",
    "getScores",
    "debug",
    "sed",
    "page",
    "Arrow",
    "Ego",
    "querySelector",
    "like",
    "shadowOffsetY",
    "arc",
    "tag",
    "Vengeance",
    "simply",
    "type",
    "KeyT",
    "getLives",
    "push",
    "fillStyle",
    "dracula",
    "save",
    "draw",
    "strokeStyle",
    "3026012tlGmcf",
    "gray",
    "dummy",
    "3429858DZmQlL",
    "Ronan",
    "Xandar",
    "KeyU",
    "#fbe4d8",
    "KeyQ",
    "update",
    "the",
    "Groot",
    "innerHTML",
    "getElementById",
    "cancelAnimationFrame",
    "getDictionary",
    "fillRect",
    "KeyO",
    "hitShadowColor",
    "shadowOffset",
    "pointer",
    "shootShadowColor",
    "heap",
    "radius",
    "gallery",
    "Infinity",
    "target",
    "normalStrokeStyle",
    "long",
    "KeyV",
    "keydown",
    "rgba(6,\x2088,\x2047,\x201)",
    "bubbleMissed",
    "root",
    "toLowerCase",
    "leap",
    "removeEventListener",
    "block",
    "science",
    "click",
    "ellipse",
    "KeyX",
    "shadowColor",
    "Digit5",
    "log",
    "Awesome",
    "getContext",
    "destroyedStrokeStyle",
    "fill",
    "mario",
    "Lord",
    "KeyW",
    "KeyS",
    "Planet",
    "line",
    "Lorem",
    "halloween",
    "Nebula",
    "TCP",
    "white",
    "style",
    "KeyB",
    "setItem",
    "Space",
    "__dictionaries",
    "gameOverHighest",
    "stack",
  ];
  _0x2f17 = function () {
    return _0x43e3ee;
  };
  return _0x2f17();
}
class o {
  constructor({ position: _0x409d7a, velocity: _0x51755a, rotation: _0x290668 }) {
    const _0x351114 = _0x5c0682;
    (this[_0x351114(0x21b)] = _0x409d7a),
      (this[_0x351114(0x205)] = _0x51755a),
      (this[_0x351114(0x1f4)] = _0x290668),
      (this[_0x351114(0x219)] = 0x5),
      (this["style"] = { fillStyle: _0x351114(0x13f) });
  }
  [_0x5c0682(0x181)]() {
    const _0x4dbf9b = _0x5c0682;
    l[_0x4dbf9b(0x180)](),
      l[_0x4dbf9b(0x213)](this[_0x4dbf9b(0x21b)]["x"], this[_0x4dbf9b(0x21b)]["y"]),
      l[_0x4dbf9b(0x14a)](this["rotation"]),
      l["translate"](-this["position"]["x"], -this["position"]["y"]),
      l[_0x4dbf9b(0x1cb)](),
      (l[_0x4dbf9b(0x17e)] = this[_0x4dbf9b(0x1bf)][_0x4dbf9b(0x17e)]),
      l[_0x4dbf9b(0x193)](this[_0x4dbf9b(0x21b)]["x"], this[_0x4dbf9b(0x21b)]["y"], this["width"], n["height"]),
      l["closePath"](),
      l[_0x4dbf9b(0x20e)]();
  }
  [_0x5c0682(0x18c)]() {
    const _0x56febe = _0x5c0682;
    this[_0x56febe(0x21b)]["y"] < n[_0x56febe(0x1d6)] / 0x2 && (this["width"] = 0x2),
      this["draw"](),
      (this["position"]["x"] += this["velocity"]["x"]),
      (this[_0x56febe(0x21b)]["y"] += this["velocity"]["y"]);
  }
}
const n = document[_0x5c0682(0x173)]("canvas"),
  l = n[_0x5c0682(0x1b1)]("2d"),
  r = document[_0x5c0682(0x190)](_0x5c0682(0x1fa)),
  a = document[_0x5c0682(0x190)](_0x5c0682(0x145)),
  h = document["getElementById"]("infoScores"),
  d = document[_0x5c0682(0x190)](_0x5c0682(0x1f8)),
  c = document["getElementById"]("canvasMenuLinkBtn"),
  y = document[_0x5c0682(0x190)]("playBtn"),
  u = document["getElementById"](_0x5c0682(0x1ff)),
  g = document[_0x5c0682(0x190)]("mainMenuTable"),
  p = document[_0x5c0682(0x190)](_0x5c0682(0x1f9)),
  m = document[_0x5c0682(0x190)](_0x5c0682(0x226)),
  w = document[_0x5c0682(0x190)]("aboutBadge"),
  S = document[_0x5c0682(0x190)](_0x5c0682(0x1f6)),
  f = document["getElementById"]("gameOverTable"),
  x = document["getElementById"]("gameOverScore"),
  v = document[_0x5c0682(0x190)](_0x5c0682(0x1c4)),
  _ = document[_0x5c0682(0x190)]("playAgainBtn"),
  k = document[_0x5c0682(0x190)](_0x5c0682(0x204));
(n[_0x5c0682(0x219)] = window[_0x5c0682(0x13b)]), (n[_0x5c0682(0x1d6)] = window[_0x5c0682(0x14c)]);
const b = new (class {
  constructor(_0x447b86) {
    const _0x18ee6e = _0x5c0682;
    (this["__dictionaries"] = _0x447b86),
      (this[_0x18ee6e(0x16b)] = localStorage["getItem"](_0x18ee6e(0x20b)) || _0x18ee6e(0x21e));
  }
  ["renderDictionariesList"]() {
    const _0x459e3a = _0x5c0682;
    let _0x38c153 = "";
    for (let _0x2c3b53 in this[_0x459e3a(0x1c3)])
      _0x38c153 += _0x459e3a(0x142) + _0x2c3b53 + "\x22>" + _0x2c3b53 + _0x459e3a(0x20c);
    return _0x38c153;
  }
  [_0x5c0682(0x1fb)](_0x2ba7db) {
    const _0x4d3064 = _0x5c0682;
    for (let _0x452bd4 in this[_0x4d3064(0x1c3)])
      if (_0x452bd4 === _0x2ba7db)
        return (this["__chosenDictionary"] = _0x2ba7db), localStorage["setItem"](_0x4d3064(0x20b), _0x2ba7db), !0x0;
    return console[_0x4d3064(0x1af)](_0x4d3064(0x21c), _0x2ba7db), !0x1;
  }
  [_0x5c0682(0x192)]() {
    const _0x1041ec = _0x5c0682;
    return this[_0x1041ec(0x1c3)][this["__chosenDictionary"]];
  }
  [_0x5c0682(0x1d0)]() {
    const _0x4e0ad3 = _0x5c0682;
    return this[_0x4e0ad3(0x16b)];
  }
})({
  CS50: [
    "cs50",
    _0x5c0682(0x1fc),
    _0x5c0682(0x148),
    "C",
    "python",
    "HTTP",
    _0x5c0682(0x1bd),
    "IP",
    _0x5c0682(0x203),
    _0x5c0682(0x1ca),
    _0x5c0682(0x212),
    _0x5c0682(0x1ec),
    _0x5c0682(0x1b4),
    _0x5c0682(0x215),
    "AI",
    "queue",
    _0x5c0682(0x1c5),
    _0x5c0682(0x199),
    "sort",
    "bubble",
    _0x5c0682(0x229),
    _0x5c0682(0x237),
    _0x5c0682(0x14d),
    _0x5c0682(0x1cd),
    "CSS",
    _0x5c0682(0x143),
    _0x5c0682(0x1a9),
    _0x5c0682(0x197),
    _0x5c0682(0x1bb),
    _0x5c0682(0x17f),
    _0x5c0682(0x214),
    _0x5c0682(0x16e),
    _0x5c0682(0x22a),
    _0x5c0682(0x1e8),
    _0x5c0682(0x207),
    _0x5c0682(0x164),
    _0x5c0682(0x159),
    "data",
    _0x5c0682(0x1c8),
    _0x5c0682(0x170),
    _0x5c0682(0x235),
    "if",
    "else",
    _0x5c0682(0x14f),
    _0x5c0682(0x17a),
    "form",
    _0x5c0682(0x177),
  ],
  Lorem: [
    _0x5c0682(0x1ba),
    _0x5c0682(0x20a),
    "is",
    _0x5c0682(0x179),
    _0x5c0682(0x185),
    _0x5c0682(0x200),
    "of",
    _0x5c0682(0x18d),
    _0x5c0682(0x22e),
    _0x5c0682(0x1d8),
    _0x5c0682(0x22f),
    "ever",
    "since",
    _0x5c0682(0x1e1),
    _0x5c0682(0x174),
    _0x5c0682(0x202),
    _0x5c0682(0x19f),
    _0x5c0682(0x19b),
    _0x5c0682(0x170),
    _0x5c0682(0x1a6),
    _0x5c0682(0x1d1),
    "site",
    _0x5c0682(0x22c),
    _0x5c0682(0x1a4),
    _0x5c0682(0x15e),
    _0x5c0682(0x1b9),
    _0x5c0682(0x22b),
    _0x5c0682(0x15b),
    _0x5c0682(0x1e4),
    "tag",
    _0x5c0682(0x165),
    _0x5c0682(0x16f),
    "et",
    "do",
    "ut",
    _0x5c0682(0x201),
  ],
  "Guardians\x20of\x20Galaxy": [
    _0x5c0682(0x1ed),
    _0x5c0682(0x1b5),
    "Gamora",
    _0x5c0682(0x1e6),
    _0x5c0682(0x22d),
    _0x5c0682(0x18e),
    _0x5c0682(0x1b0),
    _0x5c0682(0x14e),
    _0x5c0682(0x1d5),
    _0x5c0682(0x19c),
    _0x5c0682(0x234),
    _0x5c0682(0x1e9),
    _0x5c0682(0x209),
    "Yondu",
    _0x5c0682(0x1bc),
    _0x5c0682(0x187),
    "Ego",
    "Ravager",
    _0x5c0682(0x1ea),
    "Nova",
    _0x5c0682(0x161),
    "Guardians",
    _0x5c0682(0x21f),
    _0x5c0682(0x222),
    _0x5c0682(0x15c),
    _0x5c0682(0x230),
    _0x5c0682(0x1ee),
    _0x5c0682(0x1cc),
    _0x5c0682(0x1f7),
    _0x5c0682(0x178),
    _0x5c0682(0x1c9),
    _0x5c0682(0x188),
    _0x5c0682(0x1c6),
    _0x5c0682(0x172),
    _0x5c0682(0x1b8),
    _0x5c0682(0x171),
    _0x5c0682(0x227),
    _0x5c0682(0x228),
    _0x5c0682(0x225),
    _0x5c0682(0x208),
    _0x5c0682(0x162),
    _0x5c0682(0x161),
    _0x5c0682(0x1db),
  ],
});
function L() {
  const _0x189de1 = _0x5c0682;
  (n[_0x189de1(0x1bf)]["display"] = _0x189de1(0x1f2)),
    (f[_0x189de1(0x1bf)][_0x189de1(0x15a)] = _0x189de1(0x1f2)),
    (a[_0x189de1(0x1bf)][_0x189de1(0x15a)] = _0x189de1(0x1f2)),
    (c[_0x189de1(0x1bf)][_0x189de1(0x15a)] = _0x189de1(0x1f2)),
    (r[_0x189de1(0x1bf)][_0x189de1(0x15a)] = _0x189de1(0x1a8)),
    (g[_0x189de1(0x1bf)][_0x189de1(0x15a)] = _0x189de1(0x1d2)),
    (m["innerHTML"] = b[_0x189de1(0x140)]()),
    (m["value"] = b[_0x189de1(0x1d0)]());
}
function C() {
  const _0x28b1e8 = _0x5c0682;
  if (_0x28b1e8(0x15f) !== p[_0x28b1e8(0x18f)]) return;
  (n[_0x28b1e8(0x1bf)][_0x28b1e8(0x15a)] = "block"),
    (r[_0x28b1e8(0x1bf)]["display"] = _0x28b1e8(0x1f2)),
    (g[_0x28b1e8(0x1bf)]["display"] = _0x28b1e8(0x1f2)),
    (f[_0x28b1e8(0x1bf)][_0x28b1e8(0x15a)] = "none"),
    (a[_0x28b1e8(0x1bf)][_0x28b1e8(0x15a)] = "block"),
    (c[_0x28b1e8(0x1bf)]["display"] = _0x28b1e8(0x1a8));
  const _0x59d35f = new i({ scores: 0x0, lives: 0x3, dictionaryName: b["getDictionaryName"]() }),
    _0x2c5cda = new s({ position: { x: n[_0x28b1e8(0x219)] / 0x2, y: n[_0x28b1e8(0x1d6)] }, radius: 0x7d }),
    _0x54c05f = new e(),
    _0x3bd87c = b[_0x28b1e8(0x192)]();
  (h[_0x28b1e8(0x18f)] = _0x59d35f[_0x28b1e8(0x16d)]()), (d["innerHTML"] = _0x59d35f[_0x28b1e8(0x17c)]());
  const _0x172300 = [],
    _0x5aefa5 = [];
  let _0x324f36;
  const _0x12aa76 = window[_0x28b1e8(0x151)](() => {
    const _0x41ad5a = _0x28b1e8,
      _0x496253 = Math[_0x41ad5a(0x141)]() * n[_0x41ad5a(0x219)],
      _0x41c20f = Math[_0x41ad5a(0x1e5)](Math[_0x41ad5a(0x141)]() * _0x3bd87c[_0x41ad5a(0x232)]),
      _0x2d22c0 = [];
    for (let _0x4c48ed = _0x172300[_0x41ad5a(0x232)] - 0x1; _0x4c48ed >= 0x0; _0x4c48ed--) {
      const _0x459629 = _0x172300[_0x4c48ed];
      _0x2d22c0["includes"](_0x459629["text"]) || _0x2d22c0["push"](_0x459629[_0x41ad5a(0x200)]);
    }
    !_0x2d22c0[_0x41ad5a(0x1d7)](_0x3bd87c[_0x41c20f]) &&
      _0x496253 > 0x32 &&
      _0x496253 < n["width"] - 0x46 &&
      _0x172300[_0x41ad5a(0x17d)](
        new t({ position: { x: _0x496253, y: -0x32 }, velocity: { x: 0x0, y: 0x1 }, text: _0x3bd87c[_0x41c20f] })
      );
  }, 0x3e8);
  function _0x23b9f3(_0x27cc7a) {
    const _0x281f8d = _0x28b1e8;
    for (let _0x2530a1 = _0x172300[_0x281f8d(0x232)] - 0x1; _0x2530a1 >= 0x0; _0x2530a1--) {
      const _0x415062 = _0x172300[_0x2530a1];
      _0x415062[_0x281f8d(0x200)][_0x415062[_0x281f8d(0x13e)]][_0x281f8d(0x1a5)]() === _0x27cc7a["toLowerCase"]() &&
        ((_0xafabff = _0x415062),
        _0x5aefa5[_0x281f8d(0x17d)](
          new o({
            position: { x: _0x2c5cda["position"]["x"], y: _0x2c5cda[_0x281f8d(0x21b)]["y"] },
            velocity: {
              x: 0x2bc * _0x4d8742({ x: _0x2c5cda[_0x281f8d(0x21b)]["x"], y: _0x2c5cda[_0x281f8d(0x21b)]["y"] }, _0xafabff),
              y: 0x2bc * _0x389bac({ x: _0x2c5cda[_0x281f8d(0x21b)]["x"], y: _0x2c5cda[_0x281f8d(0x21b)]["y"] }, _0xafabff),
            },
            rotation: _0x4d8742({ x: _0x2c5cda[_0x281f8d(0x21b)]["x"], y: _0x2c5cda[_0x281f8d(0x21b)]["y"] }, _0xafabff),
          })
        ),
        _0x415062[_0x281f8d(0x21a)](),
        _0x415062[_0x281f8d(0x218)]());
    }
    var _0xafabff;
  }
  function _0x4d8742(_0x4630a1, _0xe00bb5) {
    const _0x201519 = _0x28b1e8,
      _0x3237a3 = _0xe00bb5[_0x201519(0x21b)]["x"] - _0x4630a1["x"],
      _0x2b43e0 = _0xe00bb5[_0x201519(0x21b)]["y"] - _0x4630a1["y"];
    return _0x3237a3 / Math[_0x201519(0x1d4)](_0x3237a3 * _0x3237a3 + _0x2b43e0 * _0x2b43e0);
  }
  function _0x389bac(_0x3f75ac, _0x1b9971) {
    const _0x2ec705 = _0x28b1e8,
      _0x12c02a = _0x1b9971[_0x2ec705(0x21b)]["x"] - _0x3f75ac["x"],
      _0x2d3fb7 = _0x1b9971[_0x2ec705(0x21b)]["y"] - _0x3f75ac["y"];
    return _0x2d3fb7 / Math["sqrt"](_0x12c02a * _0x12c02a + _0x2d3fb7 * _0x2d3fb7);
  }
  !(function _0x56030d() {
    const _0x18ea79 = _0x28b1e8;
    (_0x324f36 = window["requestAnimationFrame"](_0x56030d)),
      (l["fillStyle"] = "rgba(5,\x2022,\x2026,\x200.2)"),
      l["fillRect"](0x0, 0x0, n[_0x18ea79(0x219)], n[_0x18ea79(0x1d6)]),
      _0x2c5cda[_0x18ea79(0x181)](),
      _0x59d35f[_0x18ea79(0x18c)]();
    for (let _0xcca6f8 = _0x5aefa5["length"] - 0x1; _0xcca6f8 >= 0x0; _0xcca6f8--) {
      const _0x2fec46 = _0x5aefa5[_0xcca6f8];
      _0x2fec46[_0x18ea79(0x18c)](),
        _0x2c5cda["draw"](),
        _0x2c5cda[_0x18ea79(0x220)](),
        _0x2fec46[_0x18ea79(0x21b)]["y"] < 0x0 && _0x5aefa5[_0x18ea79(0x1f1)](_0xcca6f8, 0x1);
    }
    for (let _0x55f794 = _0x172300[_0x18ea79(0x232)] - 0x1; _0x55f794 >= 0x0; _0x55f794--) {
      const _0x1d0384 = _0x172300[_0x55f794];
      _0x1d0384["update"](),
        _0x54c05f["update"](),
        _0x1d0384[_0x18ea79(0x21b)]["y"] > n[_0x18ea79(0x1d6)] - 0x1e &&
          (_0x59d35f[_0x18ea79(0x1a3)](),
          _0x172300[_0x18ea79(0x1f1)](_0x55f794, 0x1),
          _0x59d35f[_0x18ea79(0x233)](-0x1),
          _0x59d35f[_0x18ea79(0x17c)]()
            ? (d[_0x18ea79(0x18f)] = _0x59d35f[_0x18ea79(0x17c)]())
            : I(_0x324f36, _0x12aa76, _0x59d35f)),
        _0x1d0384[_0x18ea79(0x13e)] === _0x1d0384[_0x18ea79(0x200)][_0x18ea79(0x232)] &&
          (_0x172300["splice"](_0x55f794, 0x1),
          _0x59d35f[_0x18ea79(0x1da)](_0x1d0384[_0x18ea79(0x200)]["length"]),
          (h[_0x18ea79(0x18f)] = _0x59d35f[_0x18ea79(0x16d)]()));
    }
  })();
  const _0x4582d7 = [
    _0x28b1e8(0x18b),
    _0x28b1e8(0x1b6),
    _0x28b1e8(0x21d),
    _0x28b1e8(0x1ce),
    _0x28b1e8(0x17b),
    "KeyY",
    _0x28b1e8(0x189),
    _0x28b1e8(0x158),
    _0x28b1e8(0x194),
    _0x28b1e8(0x1df),
    _0x28b1e8(0x16c),
    _0x28b1e8(0x1b7),
    _0x28b1e8(0x1dc),
    _0x28b1e8(0x157),
    "KeyG",
    _0x28b1e8(0x1e2),
    _0x28b1e8(0x231),
    _0x28b1e8(0x166),
    _0x28b1e8(0x156),
    _0x28b1e8(0x146),
    _0x28b1e8(0x1ac),
    _0x28b1e8(0x13c),
    _0x28b1e8(0x1a0),
    _0x28b1e8(0x1c0),
    _0x28b1e8(0x15d),
    "KeyM",
  ];
  window[_0x28b1e8(0x1cf)](_0x28b1e8(0x1a1), (_0x2ff046) => {
    const _0x422a2d = _0x28b1e8;
    switch (
      (_0x4582d7[_0x422a2d(0x1d7)](_0x2ff046[_0x422a2d(0x148)]) && _0x23b9f3(_0x2ff046[_0x422a2d(0x148)][0x3]), _0x2ff046["code"])
    ) {
      case _0x422a2d(0x210):
        _0x23b9f3("0");
        break;
      case _0x422a2d(0x1ae):
        _0x23b9f3("5");
        break;
      case _0x422a2d(0x1c2):
        console[_0x422a2d(0x1af)]("Hello\x20there!");
    }
  }),
    c[_0x28b1e8(0x1cf)](_0x28b1e8(0x1aa), function _0x49ea5a() {
      const _0x968e06 = _0x28b1e8;
      return window[_0x968e06(0x191)](_0x324f36), clearInterval(_0x12aa76), L(), c[_0x968e06(0x1a7)](_0x968e06(0x1aa), _0x49ea5a);
    });
}
function I(_0x9c1d9a, _0x182ab7, _0x278f15) {
  const _0x4bdc2a = _0x5c0682;
  window[_0x4bdc2a(0x191)](_0x9c1d9a),
    clearInterval(_0x182ab7),
    (f[_0x4bdc2a(0x1bf)]["display"] = "flex"),
    (x[_0x4bdc2a(0x18f)] = _0x278f15[_0x4bdc2a(0x16d)]()),
    (v["innerHTML"] = _0x278f15[_0x4bdc2a(0x1d3)]()),
    (a[_0x4bdc2a(0x1bf)][_0x4bdc2a(0x15a)] = _0x4bdc2a(0x1f2)),
    (c[_0x4bdc2a(0x1bf)][_0x4bdc2a(0x15a)] = _0x4bdc2a(0x1f2));
}
function B(_0x464592, _0x3d5019, _0x5ce077) {
  const _0x55d4ff = _0x5c0682;
  _0x464592[_0x55d4ff(0x147)][_0x55d4ff(0x1de)]("animation-fade"),
    setTimeout(() => {
      const _0x58ff49 = _0x55d4ff;
      _0x464592["classList"]["remove"](_0x58ff49(0x1eb)),
        (_0x464592["style"][_0x58ff49(0x15a)] = _0x58ff49(0x1f2)),
        (_0x3d5019[_0x58ff49(0x1bf)][_0x58ff49(0x15a)] = "flex"),
        _0x3d5019["classList"]["add"](_0x58ff49(0x211)),
        setTimeout(() => {
          const _0x215ca7 = _0x58ff49;
          _0x3d5019["classList"]["remove"](_0x215ca7(0x211));
        }, _0x5ce077);
    }, _0x5ce077);
}
m[_0x5c0682(0x1cf)](_0x5c0682(0x152), (_0x2414ce) => {
  const _0x50c51e = _0x5c0682;
  b["setChosenDictionary"](_0x2414ce[_0x50c51e(0x19d)][_0x50c51e(0x163)]) || console[_0x50c51e(0x1af)](_0x50c51e(0x1f0));
}),
  L(),
  y[_0x5c0682(0x1cf)](_0x5c0682(0x1aa), C),
  _[_0x5c0682(0x1cf)]("click", C),
  k[_0x5c0682(0x1cf)](_0x5c0682(0x1aa), L),
  u[_0x5c0682(0x1cf)](_0x5c0682(0x1aa), () => B(g, w, 0x12c)),
  S[_0x5c0682(0x1cf)]("click", () => B(w, g, 0x12c));
