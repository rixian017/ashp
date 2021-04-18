(function(g) {
    var window = this;
    'use strict';
    var CJa = function(a, b) {
            return g.Nb(a, b)
        },
        o4 = function(a, b, c) {
            a.l.set(b, c)
        },
        p4 = function(a) {
            o4(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Ta()).toString(36));
            return a
        },
        q4 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Wm(a.l, b, c)
        },
        DJa = function(a, b) {
            var c = [];
            g.Ti(b, function(d) {
                try {
                    var e = g.Kn.prototype.l.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.Jn(e) && c.push(d)
            }, a);
            return c
        },
        EJa = function(a, b) {
            b = DJa(a, b);
            g.Bb(b, function(c) {
                g.Kn.prototype.remove.call(this, c)
            }, a)
        },
        FJa = function(a) {
            if (a.W) {
                if (a.W.locationOverrideToken) return {
                    locationOverrideToken: a.W.locationOverrideToken
                };
                if (null != a.W.latitudeE7 && null != a.W.longitudeE7) return {
                    latitudeE7: a.W.latitudeE7,
                    longitudeE7: a.W.longitudeE7
                }
            }
            return null
        },
        GJa = function(a, b) {
            g.gb(a, b) || a.push(b)
        },
        r4 = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        HJa = function(a, b) {
            b = b instanceof g.Cc ? b : g.Kc(b, /^data:image\//i.test(b));
            a.src = g.Dc(b)
        },
        IJa = function(a) {
            try {
                return g.A.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        JJa = function(a) {
            if (a.ph && "function" == typeof a.ph) return a.ph();
            if ("string" === typeof a) return a.split("");
            if (g.Na(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.Kb(a)
        },
        KJa = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (g.Na(a) || "string" === typeof a) g.Bb(a, b, void 0);
            else {
                if (a.zi && "function" == typeof a.zi) var c = a.zi();
                else if (a.ph && "function" == typeof a.ph) c = void 0;
                else if (g.Na(a) || "string" === typeof a) {
                    c = [];
                    for (var d = a.length, e = 0; e < d; e++) c.push(e)
                } else c = g.Lb(a);
                d = JJa(a);
                e = d.length;
                for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            }
        },
        LJa = function(a, b, c, d) {
            var e = new g.Km(null, void 0);
            a && g.Lm(e, a);
            b && g.Mm(e, b);
            c && g.Nm(e, c);
            d && (e.J = d);
            return e
        },
        s4 = function() {},
        t4 = function(a, b) {
            g.zq[a] = !0;
            var c = g.xq();
            c && c.publish.apply(c, arguments);
            g.zq[a] = !1
        },
        u4 = function(a) {
            this.app = this.name = this.id = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.Hm;
            a && (this.id = a.id || a.name, this.name = a.name, this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", MJa(this, a.capabilities || ""), NJa(this, a.experiments || ""))
        },
        MJa = function(a, b) {
            a.capabilities.clear();
            g.Ke(b.split(","), g.Ra(CJa, OJa)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        NJa = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        v4 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        w4 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        PJa = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        QJa = function(a) {
            return new v4(a)
        },
        RJa = function(a) {
            return Array.isArray(a) ? g.Pc(a, QJa) : []
        },
        x4 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        y4 = function(a) {
            return Array.isArray(a) ? "[" + g.Pc(a, x4).join(",") + "]" : "null"
        },
        z4 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        SJa = function(a) {
            return g.Pc(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        A4 = function(a, b) {
            return g.db(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        B4 = function(a, b) {
            return g.db(a, function(c) {
                return w4(c, b)
            })
        },
        TJa = function() {
            var a = (0, g.Gu)();
            a && EJa(a, a.i.xl(!0))
        },
        C4 = function() {
            var a = g.Ju("yt-remote-connected-devices") || [];
            g.yb(a);
            return a
        },
        UJa = function(a) {
            if (g.ib(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Pc(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        VJa = function(a) {
            g.Iu("yt-remote-connected-devices", a, 86400)
        },
        E4 = function() {
            if (D4) return D4;
            var a = g.Ju("yt-remote-device-id");
            a || (a = z4(), g.Iu("yt-remote-device-id", a, 31536E3));
            for (var b = C4(), c = 1, d = a; g.gb(b, d);) c++, d = a + "#" + c;
            return D4 = d
        },
        F4 = function() {
            var a = C4(),
                b = E4();
            g.gb(a, b);
            g.Mu() && g.Ab(a, b);
            a = UJa(a);
            if (g.ib(a)) try {
                g.po("remote_sid")
            } catch (c) {} else try {
                g.no("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        WJa = function() {
            return g.Ju("yt-remote-session-browser-channel")
        },
        XJa = function() {
            return g.Ju("yt-remote-local-screens") || []
        },
        YJa = function() {
            g.Iu("yt-remote-lounge-token-expiration", !0, 86400)
        },
        ZJa = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Pc(XJa(), function(d) {
                    return d.loungeToken
                }),
                c = g.Pc(a, function(d) {
                    return d.loungeToken
                });
            g.Zg(c, function(d) {
                return !g.gb(b, d)
            }) && YJa();
            g.Iu("yt-remote-local-screens", a, 31536E3)
        },
        $Ja = function(a, b) {
            g.Iu("yt-remote-session-browser-channel", a);
            g.Iu("yt-remote-session-screen-id", b);
            a = C4();
            b = E4();
            g.gb(a, b) || a.push(b);
            VJa(a);
            F4()
        },
        G4 = function(a) {
            a || (g.Lu("yt-remote-session-screen-id"), g.Lu("yt-remote-session-video-id"));
            F4();
            a = C4();
            g.lb(a, E4());
            VJa(a)
        },
        aKa = function() {
            if (!H4) {
                var a = g.Un();
                a && (H4 = new g.En(a))
            }
        },
        bKa = function() {
            aKa();
            return H4 ? !!H4.get("yt-remote-use-staging-server") : !1
        },
        I4 = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        cKa = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        dKa = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        J4 = function(a) {
            a.length ? eKa(a.shift(), function() {
                J4(a)
            }) : K4()
        },
        fKa = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        eKa = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.jd(d, g.ag(a));
            (document.head || document.documentElement).appendChild(d)
        },
        gKa = function() {
            var a = I4(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        K4 = function() {
            var a = dKa();
            a && a(!1, "No cast extension found")
        },
        L4 = function() {
            if (hKa) {
                var a = 2,
                    b = dKa(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                eKa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", K4, c)
            }
        },
        iKa = function() {
            L4();
            var a = gKa();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            J4(a)
        },
        kKa = function() {
            L4();
            var a = gKa();
            a.push.apply(a, g.ma(jKa.map(fKa)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            J4(a)
        },
        M4 = function(a, b, c) {
            g.F.call(this);
            this.I = null != c ? (0, g.C)(a, c) : a;
            this.zg = b;
            this.C = (0, g.C)(this.PM, this);
            this.i = !1;
            this.l = 0;
            this.u = this.Cb = null;
            this.B = []
        },
        N4 = function(a, b, c) {
            g.F.call(this);
            this.B = null != c ? a.bind(c) : a;
            this.zg = b;
            this.u = null;
            this.i = !1;
            this.l = 0;
            this.Cb = null
        },
        O4 = function(a) {
            a.Cb = g.Fm(function() {
                a.Cb = null;
                a.i && !a.l && (a.i = !1, O4(a))
            }, a.zg);
            var b = a.u;
            a.u = null;
            a.B.apply(null, b)
        },
        P4 = function(a) {
            if (g.A.JSON) try {
                return g.A.JSON.parse(a)
            } catch (b) {}
            return IJa(a)
        },
        Q4 = function() {},
        R4 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.A.setTimeout(function() {
                a()
            }, b)
        },
        T4 = function(a) {
            S4.dispatchEvent(new lKa(S4, a))
        },
        lKa = function(a, b) {
            g.Bl.call(this, "statevent", a);
            this.stat = b
        },
        U4 = function() {},
        mKa = function() {},
        oKa = function(a) {
            return (a = nKa(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        nKa = function(a) {
            if (!a.l && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0",
                        "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"
                    ], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.l = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.l
        },
        V4 = function(a, b, c, d) {
            this.i = a;
            this.l = b;
            this.L = c;
            this.J = d || 1;
            this.C = 45E3;
            this.B = new g.B_(this);
            this.u = new g.Em;
            this.u.setInterval(250)
        },
        qKa = function(a, b, c) {
            a.Xr = 1;
            a.Em = p4(b.clone());
            a.Hp = c;
            a.I = !0;
            pKa(a, null)
        },
        W4 = function(a, b, c, d, e) {
            a.Xr = 1;
            a.Em = p4(b.clone());
            a.Hp = null;
            a.I = c;
            e && (a.VJ = !1);
            pKa(a, d)
        },
        pKa = function(a, b) {
            a.Or = Date.now();
            X4(a);
            a.Ln = a.Em.clone();
            q4(a.Ln, "t", a.J);
            a.Dv = 0;
            a.qf = a.i.vA(a.i.Xu() ? b : null);
            0 < a.Ez && (a.Ux = new N4((0, g.C)(a.MK, a, a.qf), a.Ez));
            a.B.Ma(a.qf, "readystatechange", a.dT);
            b = a.Wn ? g.Vb(a.Wn) : {};
            a.Hp ? (a.Oy = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.qf.send(a.Ln, a.Oy, a.Hp, b)) : (a.Oy = "GET", a.VJ && !g.Ae && (b.Connection = "close"), a.qf.send(a.Ln, a.Oy, null, b));
            a.i.xj(1)
        },
        tKa = function(a, b, c) {
            for (var d = !0; !a.Io && a.Dv < c.length;) {
                var e = rKa(a, c);
                if (e == Y4) {
                    4 == b && (a.zm = 4, T4(15), d = !1);
                    break
                } else if (e == sKa) {
                    a.zm = 4;
                    T4(16);
                    d = !1;
                    break
                } else Z4(a, e)
            }
            4 == b && 0 == c.length && (a.zm = 1, T4(17), d = !1);
            a.Lj = a.Lj && d;
            d || ($4(a), a5(a))
        },
        rKa = function(a, b) {
            var c = a.Dv,
                d = b.indexOf("\n", c);
            if (-1 == d) return Y4;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return sKa;
            d += 1;
            if (d + c > b.length) return Y4;
            b = b.substr(d, c);
            a.Dv = d + c;
            return b
        },
        vKa = function(a, b) {
            a.Or = Date.now();
            X4(a);
            var c = b ? window.location.hostname : "";
            a.Ln = a.Em.clone();
            o4(a.Ln, "DOMAIN", c);
            o4(a.Ln, "t", a.J);
            try {
                a.Oj = new ActiveXObject("htmlfile")
            } catch (m) {
                $4(a);
                a.zm = 7;
                T4(22);
                a5(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in b5) f = b5[f];
                        else if (f in uKa) f = b5[f] = uKa[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                b5[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            c = g.gd(g.fc("b/12014412"), d + "</body></html>");
            a.Oj.open();
            a.Oj.write(g.cd(c));
            a.Oj.close();
            a.Oj.parentWindow.m = (0, g.C)(a.zS, a);
            a.Oj.parentWindow.d = (0, g.C)(a.iJ, a, !0);
            a.Oj.parentWindow.rpcClose = (0, g.C)(a.iJ, a, !1);
            c = a.Oj.createElement("DIV");
            a.Oj.parentWindow.document.body.appendChild(c);
            d = g.Jc(a.Ln.toString());
            d = g.od(g.Dc(d));
            d = g.gd(g.fc("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.hd(c, d);
            a.i.xj(1)
        },
        X4 = function(a) {
            a.ID = Date.now() +
                a.C;
            wKa(a, a.C)
        },
        wKa = function(a, b) {
            if (null != a.hs) throw Error("WatchDog timer not null");
            a.hs = R4((0, g.C)(a.IS, a), b)
        },
        c5 = function(a) {
            a.hs && (g.A.clearTimeout(a.hs), a.hs = null)
        },
        a5 = function(a) {
            a.i.KE() || a.Io || a.i.Rv(a)
        },
        $4 = function(a) {
            c5(a);
            g.ri(a.Ux);
            a.Ux = null;
            a.u.stop();
            g.mEa(a.B);
            if (a.qf) {
                var b = a.qf;
                a.qf = null;
                b.abort();
                b.dispose()
            }
            a.Oj && (a.Oj = null)
        },
        Z4 = function(a, b) {
            try {
                a.i.aJ(a, b), a.i.xj(4)
            } catch (c) {}
        },
        yKa = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                xKa(a, b, function(h) {
                    h ? c(!0) : g.A.setTimeout(function() {
                        yKa(a, b, c, d, f)
                    }, f)
                })
            }
        },
        xKa = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    d5(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    d5(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    d5(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    d5(d), c(!1)
                } catch (e) {}
            };
            g.A.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            HJa(d, a)
        },
        d5 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        e5 = function(a) {
            g.Vl.call(this);
            this.headers = new g.Hm;
            this.va = a || null;
            this.B = !1;
            this.ra = this.i = null;
            this.Na = this.W = "";
            this.I = 0;
            this.u = "";
            this.C = this.Aa = this.L = this.Ca = !1;
            this.J = 0;
            this.X = null;
            this.Sa = "";
            this.Y = this.Ha = !1
        },
        zKa = function(a) {
            return g.ye && g.$d(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
        },
        AKa = function(a) {
            return "content-type" == a.toLowerCase()
        },
        CKa = function(a, b) {
            a.B = !1;
            a.i && (a.C = !0, a.i.abort(), a.C = !1);
            a.u = b;
            a.I = 5;
            BKa(a);
            f5(a)
        },
        BKa = function(a) {
            a.Ca || (a.Ca = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        },
        EKa = function(a) {
            if (a.B && "undefined" != typeof g.F_)
                if (a.ra[1] && 4 == g5(a) && 2 == a.getStatus()) h5(a, "Local request error detected and ignored");
                else if (a.L && 4 == g5(a)) g.Fm(a.XI, 0, a);
            else if (a.dispatchEvent("readystatechange"), a.isComplete()) {
                h5(a, "Request complete");
                a.B = !1;
                try {
                    var b = a.getStatus();
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = g.yd(1, String(a.W));
                            if (!f && g.A.self && g.A.self.location) {
                                var h = g.A.self.location.protocol;
                                f = h.substr(0, h.length - 1)
                            }
                            e = !DKa.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
                    else {
                        a.I = 6;
                        try {
                            var l = 2 < g5(a) ? a.i.statusText : ""
                        } catch (m) {
                            l = ""
                        }
                        a.u = l + " [" + a.getStatus() + "]";
                        BKa(a)
                    }
                } finally {
                    f5(a)
                }
            }
        },
        f5 = function(a, b) {
            if (a.i) {
                FKa(a);
                var c = a.i,
                    d = a.ra[0] ? g.Ka : null;
                a.i = null;
                a.ra = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        FKa = function(a) {
            a.i && a.Y && (a.i.ontimeout = null);
            a.X && (g.A.clearTimeout(a.X), a.X = null)
        },
        g5 = function(a) {
            return a.i ? a.i.readyState : 0
        },
        i5 = function(a) {
            try {
                return a.i ? a.i.responseText : ""
            } catch (b) {
                return ""
            }
        },
        h5 = function(a, b) {
            return b + " [" + a.Na + " " + a.W + " " + a.getStatus() + "]"
        },
        GKa = function(a) {
            this.i = a;
            this.l = new Q4
        },
        HKa = function(a) {
            var b = j5(a.i, a.Us, "/mail/images/cleardot.gif");
            p4(b);
            yKa(b.toString(), 5E3, (0, g.C)(a.MN, a), 3, 2E3);
            a.xj(1)
        },
        l5 = function(a) {
            var b = a.i.L;
            if (null != b) T4(5), b ? (T4(11), k5(a.i, a, !1)) : (T4(12), k5(a.i, a, !0));
            else if (a.Dh = new V4(a, void 0, void 0, void 0), a.Dh.Wn = a.Fz, b = a.i, b = j5(b, b.Xu() ? a.Js : null, a.Gz), T4(5), !g.ye || g.ae(10)) q4(b, "TYPE", "xmlhttp"), W4(a.Dh, b, !1, a.Js, !1);
            else {
                q4(b, "TYPE", "html");
                var c = a.Dh;
                a = !!a.Js;
                c.Xr = 3;
                c.Em = p4(b.clone());
                vKa(c, a)
            }
        },
        m5 = function(a, b, c) {
            this.bb = 1;
            this.i = [];
            this.u = [];
            this.B = new Q4;
            this.J = a || null;
            this.L = null != b ? b : null;
            this.C = c || !1
        },
        IKa = function(a, b) {
            this.i = a;
            this.map = b;
            this.context = null
        },
        JKa = function(a, b, c, d) {
            g.Bl.call(this, "timingevent", a);
            this.size = b;
            this.Qu = d
        },
        KKa = function(a) {
            g.Bl.call(this, "serverreachability", a)
        },
        NKa = function(a) {
            LKa(a);
            if (3 == a.bb) {
                var b = a.tu++,
                    c = a.xw.clone();
                o4(c, "SID", a.l);
                o4(c, "RID", b);
                o4(c, "TYPE", "terminate");
                n5(a, c);
                b = new V4(a, a.l, b, void 0);
                b.Xr = 2;
                b.Em = p4(c.clone());
                HJa(new Image, b.Em.toString());
                b.Or = Date.now();
                X4(b)
            }
            MKa(a)
        },
        OKa = function(a) {
            a.gO(1, 0);
            a.xw = j5(a, null, a.Hz);
            o5(a)
        },
        LKa = function(a) {
            a.Im && (a.Im.abort(), a.Im = null);
            a.Ke && (a.Ke.cancel(), a.Ke = null);
            a.zl && (g.A.clearTimeout(a.zl), a.zl = null);
            p5(a);
            a.nh && (a.nh.cancel(), a.nh = null);
            a.Pm && (g.A.clearTimeout(a.Pm), a.Pm = null)
        },
        PKa = function(a, b) {
            if (0 == a.bb) throw Error("Invalid operation: sending map when state is closed");
            a.i.push(new IKa(a.BP++, b));
            2 != a.bb && 3 != a.bb || o5(a)
        },
        QKa = function(a) {
            var b = 0;
            a.Ke && b++;
            a.nh && b++;
            return b
        },
        o5 = function(a) {
            a.nh || a.Pm || (a.Pm = R4((0, g.C)(a.gJ, a), 0), a.Vq = 0)
        },
        SKa = function(a, b) {
            if (1 == a.bb) {
                if (!b) {
                    a.tu = Math.floor(1E5 * Math.random());
                    b = a.tu++;
                    var c = new V4(a, "", b, void 0);
                    c.Wn = a.gk;
                    var d = q5(a),
                        e = a.xw.clone();
                    o4(e, "RID", b);
                    o4(e, "CVER", "1");
                    n5(a, e);
                    qKa(c, e, d);
                    a.nh = c;
                    a.bb = 2
                }
            } else 3 == a.bb && (b ? RKa(a, b) : 0 == a.i.length || a.nh || RKa(a))
        },
        RKa = function(a, b) {
            if (b)
                if (6 < a.Jo) {
                    a.i = a.u.concat(a.i);
                    a.u.length = 0;
                    var c = a.tu - 1;
                    b = q5(a)
                } else c = b.L, b = b.Hp;
            else c = a.tu++, b = q5(a);
            var d = a.xw.clone();
            o4(d, "SID", a.l);
            o4(d, "RID", c);
            o4(d, "AID", a.Ar);
            n5(a, d);
            c = new V4(a, a.l, c, a.Vq + 1);
            c.Wn = a.gk;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.nh = c;
            qKa(c, d, b)
        },
        n5 = function(a, b) {
            a.pg && (a = a.pg.FG()) && g.Db(a, function(c, d) {
                o4(b, d, c)
            })
        },
        q5 = function(a) {
            var b = Math.min(a.i.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Jo && 0 < b) {
                var d = a.i[0].i;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    eq: e.eq
                }, f++) {
                e.eq = a.i[f].i;
                var h = a.i[f].map;
                e.eq = 6 >= a.Jo ? f : e.eq - d;
                try {
                    g.Db(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.eq + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.eq + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.u = a.u.concat(a.i.splice(0, b));
            return c.join("&")
        },
        TKa = function(a) {
            a.Ke || a.zl || (a.I = 1, a.zl = R4((0, g.C)(a.fJ, a), 0), a.Iq = 0)
        },
        r5 = function(a) {
            if (a.Ke || a.zl || 3 <= a.Iq) return !1;
            a.I++;
            a.zl = R4((0, g.C)(a.fJ, a), UKa(a, a.Iq));
            a.Iq++;
            return !0
        },
        k5 = function(a, b, c) {
            a.My = c;
            a.hk = b.il;
            a.C || OKa(a)
        },
        p5 = function(a) {
            null != a.Ro && (g.A.clearTimeout(a.Ro), a.Ro = null)
        },
        UKa = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        s5 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.pg && (c = null);
                var d = (0, g.C)(a.GT, a);
                c || (c = new g.Km("//www.google.com/images/cleardot.gif"), p4(c));
                xKa(c.toString(), 1E4, d)
            } else T4(2);
            VKa(a, b)
        },
        VKa = function(a, b) {
            a.bb = 0;
            a.pg && a.pg.WF(b);
            MKa(a);
            LKa(a)
        },
        MKa = function(a) {
            a.bb = 0;
            a.hk = -1;
            if (a.pg)
                if (0 == a.u.length && 0 == a.i.length) a.pg.hA();
                else {
                    g.pb(a.u);
                    var b = g.pb(a.i);
                    a.u.length = 0;
                    a.i.length = 0;
                    a.pg.hA(b)
                }
        },
        j5 = function(a, b, c) {
            var d = g.Sm(c);
            if ("" != d.i) b && g.Mm(d, b + "." + d.i), g.Nm(d, d.u);
            else {
                var e = window.location;
                d = LJa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.xt && g.Db(a.xt, function(f, h) {
                o4(d, h, f)
            });
            o4(d, "VER", a.Jo);
            n5(a, d);
            return d
        },
        WKa = function() {},
        XKa = function() {
            this.i = [];
            this.l = []
        },
        YKa = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        t5 = function(a, b) {
            g.F.call(this);
            this.i = new g.J(this.rS, 0, this);
            g.H(this, this.i);
            this.zg = 5E3;
            this.l = 0;
            if ("function" === typeof a) b && (a = (0, g.C)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.C)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.u = a
        },
        u5 = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.ra = a;
            this.I = b;
            this.u = new g.Dn;
            this.l = new t5(this.nT, this);
            this.i = null;
            this.X = !1;
            this.C = null;
            this.W = "";
            this.L = this.B = 0;
            this.J = [];
            this.va = c;
            this.Y = d;
            this.Ca = e
        },
        ZKa = function(a) {
            return {
                firstTestResults: [""],
                secondTestResults: !a.i.My,
                sessionId: a.i.l,
                arrayId: a.i.Ar
            }
        },
        $Ka = function(a, b) {
            a.L = b || 0;
            a.l.stop();
            v5(a);
            a.i && (3 == a.i.getState() && SKa(a.i), NKa(a.i));
            a.L = 0
        },
        w5 = function(a) {
            return !!a.i && 3 == a.i.getState()
        },
        v5 = function(a) {
            if (a.i) {
                var b = a.Y(),
                    c = a.i.gk || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.i.gk = c
            }
        },
        x5 = function(a) {
            this.port = this.domain = "";
            this.i = "/api/lounge";
            this.l = !0;
            a = a || document.location.href;
            var b = Number(g.yd(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.zd(a) || "";
            a = g.Vc;
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.Ac(a, "10.0") && (this.l = !1))
        },
        y5 = function(a, b) {
            var c = a.i;
            a.l && (c = "https://" + a.domain + a.port + a.i);
            return g.Kd(c + b, {})
        },
        z5 = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Ra(a.B, d, !0),
                onError: g.Ra(a.u, e),
                onTimeout: g.Ra(a.C, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.ep(b, a)
        },
        dLa = function() {
            var a = aLa;
            bLa();
            A5.push(a);
            cLa()
        },
        B5 = function(a, b) {
            bLa();
            var c = eLa(a, String(b));
            g.ib(A5) ? fLa(c) : (cLa(), g.Bb(A5, function(d) {
                d(c)
            }))
        },
        bLa = function() {
            A5 || (A5 = g.Ja("yt.mdx.remote.debug.handlers_") || [], g.Fa("yt.mdx.remote.debug.handlers_", A5, void 0))
        },
        fLa = function(a) {
            var b = (C5 + 1) % 50;
            C5 = b;
            D5[b] = a;
            E5 || (E5 = 49 == b)
        },
        cLa = function() {
            var a = A5;
            if (D5[0]) {
                var b = E5 ? C5 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = D5[b];
                    g.Bb(a, function(d) {
                        d(c)
                    })
                } while (b != C5);
                D5 = Array(50);
                C5 = -1;
                E5 = !1
            }
        },
        eLa = function(a, b) {
            var c = (Date.now() - gLa) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        F5 = function(a) {
            g.O.call(this);
            this.I = a;
            this.screens = []
        },
        hLa = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        iLa = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.Ke(a.screens, function(f) {
                return !!A4(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = hLa(a, b[d]) || c;
            return c
        },
        jLa = function(a, b) {
            var c = a.screens.length;
            a.screens = g.Ke(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        G5 = function(a, b, c, d, e) {
            g.O.call(this);
            this.u = a;
            this.J = b;
            this.B = c;
            this.I = d;
            this.C = e;
            this.l = 0;
            this.i = null;
            this.Cb = NaN
        },
        I5 = function(a) {
            F5.call(this, "LocalScreenService");
            this.l = a;
            this.i = NaN;
            H5(this);
            this.info("Initializing with " + y4(this.screens))
        },
        kLa = function(a) {
            if (a.screens.length) {
                var b = g.Pc(a.screens, function(d) {
                        return d.id
                    }),
                    c = y5(a.l, "/pairing/get_lounge_token_batch");
                z5(a.l, c, {
                    screen_ids: b.join(",")
                }, (0, g.C)(a.DO, a), (0, g.C)(a.CO, a))
            }
        },
        H5 = function(a) {
            if (g.yo("deprecate_pair_servlet_enabled")) return iLa(a, []);
            var b = RJa(XJa());
            b = g.Ke(b, function(c) {
                return !c.uuid
            });
            return iLa(a, b)
        },
        J5 = function(a, b) {
            ZJa(g.Pc(a.screens, PJa));
            b && YJa()
        },
        L5 = function(a, b) {
            g.O.call(this);
            this.I = b;
            b = (b = g.Ju("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.I(), e = 0, f = d.length; e < f; ++e) {
                var h = d[e].id;
                c[h] = g.gb(b, h)
            }
            this.i = c;
            this.C = a;
            this.u = this.B = NaN;
            this.l = null;
            K5("Initialized with " + g.vj(this.i))
        },
        M5 = function(a, b, c) {
            var d = y5(a.C, "/pairing/get_screen_availability");
            z5(a.C, d, {
                lounge_token: b.token
            }, (0, g.C)(function(e) {
                e = e.screens || [];
                for (var f = 0, h = e.length; f < h; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.C)(function() {
                c(!1)
            }, a))
        },
        N5 = function(a, b) {
            a: if (r4(b) != r4(a.i)) var c = !1;
                else {
                    c = g.Lb(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.i[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (K5("Updated online screens: " + g.vj(a.i)), a.i = b, a.V("screenChange"));lLa(a)
        },
        O5 = function(a) {
            isNaN(a.u) || g.$o(a.u);
            a.u = g.Yo((0, g.C)(a.HC, a), 0 < a.B && a.B < g.Ta() ? 2E4 : 1E4)
        },
        K5 = function(a) {
            B5("OnlineScreenService", a)
        },
        mLa = function(a) {
            var b = {};
            g.Bb(a.I(), function(c) {
                c.token ? b[c.token] = c.id : this.pe("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        lLa = function(a) {
            a = g.Lb(g.Eb(a.i, function(b) {
                return b
            }));
            g.yb(a);
            a.length ? g.Iu("yt-remote-online-screen-ids", a.join(","), 60) : g.Lu("yt-remote-online-screen-ids")
        },
        P5 = function(a) {
            F5.call(this, "ScreenService");
            this.B = a;
            this.i = this.l = null;
            this.u = [];
            this.C = {};
            nLa(this)
        },
        pLa = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.C[b]);
            var h = a.Oh();
            if (h = (c ? B4(h, c) : null) || B4(h, b)) {
                h.uuid = b;
                var l = Q5(a, h);
                M5(a.i, l, function(m) {
                    e(m ? l : null)
                })
            } else c ? oLa(a, c, (0, g.C)(function(m) {
                var n = Q5(this, new v4({
                    name: d,
                    screenId: c,
                    loungeToken: m,
                    dialId: b || ""
                }));
                M5(this.i, n, function(p) {
                    e(p ? n : null)
                })
            }, a), f) : e(null)
        },
        qLa = function(a, b) {
            for (var c = 0, d = a.screens.length; c < d; ++c)
                if (a.screens[c].name == b) return a.screens[c];
            return null
        },
        rLa = function(a, b, c) {
            M5(a.i, b, c)
        },
        oLa = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.ep(y5(a.B, "/pairing/get_lounge_token_batch"), e)
        },
        sLa = function(a) {
            a.screens = a.l.Oh();
            var b = a.C,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.screens.length; b < d; ++b) {
                var e = a.screens[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + y4(a.screens))
        },
        nLa = function(a) {
            R5(a);
            a.l = new I5(a.B);
            a.l.subscribe("screenChange", (0, g.C)(a.JO, a));
            sLa(a);
            a.u = RJa(g.Ju("yt-remote-automatic-screen-cache") || []);
            R5(a);
            a.info("Initializing automatic screens: " + y4(a.u));
            a.i = new L5(a.B, (0, g.C)(a.Oh, a, !0));
            a.i.subscribe("screenChange", (0, g.C)(function() {
                this.V("onlineScreenChange")
            }, a))
        },
        Q5 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = B4(a.u, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.u.push(b), tLa(a));
            R5(a);
            a.C[b.uuid] = b.id;
            g.Iu("yt-remote-device-id-map", a.C, 31536E3);
            return b
        },
        tLa = function(a) {
            a = g.Ke(a.u, function(b) {
                return "shortLived" != b.idType
            });
            g.Iu("yt-remote-automatic-screen-cache", g.Pc(a, PJa))
        },
        R5 = function(a) {
            a.C = g.Ju("yt-remote-device-id-map") || {}
        },
        S5 = function(a, b, c) {
            g.O.call(this);
            this.Ca = c;
            this.u = a;
            this.i = b;
            this.B = null
        },
        T5 = function(a, b) {
            a.B = b;
            a.V("sessionScreen", a.B)
        },
        uLa = function(a, b) {
            a.B && (a.B.token = b, Q5(a.u, a.B));
            a.V("sessionScreen", a.B)
        },
        U5 = function(a, b) {
            B5(a.Ca, b)
        },
        V5 = function(a, b, c) {
            S5.call(this, a, b, "CastSession");
            var d = this;
            this.Aa = c;
            this.l = null;
            this.Y = (0, g.C)(this.UM, this);
            this.va = (0, g.C)(this.MS, this);
            this.X = g.Yo(function() {
                vLa(d, null)
            }, 12E4);
            this.J = this.C = this.I = this.L = 0;
            this.ra = !1;
            this.W = "unknown"
        },
        W5 = function(a, b) {
            g.$o(a.J);
            a.J = 0;
            0 == b ? wLa(a) : a.J = g.Yo(function() {
                wLa(a)
            }, b)
        },
        wLa = function(a) {
            xLa(a, "getLoungeToken");
            g.$o(a.C);
            a.C = g.Yo(function() {
                yLa(a, null)
            }, 3E4)
        },
        xLa = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.vj(void 0));
            var c = {};
            c.type = b;
            a.l ? a.l.sendMessage("urn:x-cast:com.google.youtube.mdx", c, g.Ka, (0, g.C)(function() {
                U5(this, "Failed to send message: " + b + ".")
            }, a)) : U5(a, "Sending yt message without session: " + g.vj(c))
        },
        X5 = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.VG(b, function(c) {
                T5(a, c)
            }, function() {
                return a.Vg()
            }, 5)) : a.Vg(Error("Waiting for session status timed out."))
        },
        ALa = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new v4(b);
            zLa(a, d, function(e) {
                e ? (a.ra = !0, Q5(a.u, d), T5(a, d), a.W = "unknown", W5(a, c)) : (g.Do(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Vg())
            }, 5)
        },
        vLa = function(a, b) {
            g.$o(a.X);
            a.X = 0;
            b ? a.Aa.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? ALa(a, {
                name: a.i.friendlyName,
                screenId: b.screenId,
                loungeToken: b.loungeToken,
                dialId: b.deviceId,
                screenIdType: "shortLived"
            }, b.loungeTokenRefreshIntervalMs) : (g.Do(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), X5(a, b.screenId))) : (g.Do(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")),
                X5(a, b.screenId)) : X5(a, b.screenId) : a.Vg(Error("Waiting for session status timed out."))
        },
        yLa = function(a, b) {
            g.$o(a.C);
            a.C = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.W = c, W5(a, 3E4)) : (uLa(a, b.loungeToken), a.ra = !1, a.W = "unknown", W5(a, b.loungeTokenRefreshIntervalMs))
        },
        zLa = function(a, b, c, d) {
            g.$o(a.I);
            a.I = 0;
            rLa(a.u, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.Yo(function() {
                    zLa(a, b, c, d - 1)
                }, 300)
            })
        },
        BLa = function(a) {
            g.$o(a.L);
            a.L = 0;
            g.$o(a.I);
            a.I = 0;
            g.$o(a.X);
            a.X = 0;
            g.$o(a.C);
            a.C = 0;
            g.$o(a.J);
            a.J = 0
        },
        Y5 = function(a, b, c, d) {
            S5.call(this, a, b, "DialSession");
            this.Ha = d;
            this.l = this.L = null;
            this.va = "";
            this.Na = c;
            this.Ea = null;
            this.X = g.Ka;
            this.W = NaN;
            this.Aa = (0, g.C)(this.VM, this);
            this.C = g.Ka;
            this.J = this.I = 0;
            this.Y = !1;
            this.ra = "unknown"
        },
        Z5 = function(a) {
            var b;
            return !!(a.Ha.enableDialLoungeToken && (null == (b = a.l) ? 0 : b.getDialAppInfo))
        },
        CLa = function(a) {
            a.C = a.u.ME(a.va, a.i.label, a.i.friendlyName, Z5(a), function(b, c) {
                a.C = g.Ka;
                a.Y = !0;
                T5(a, b);
                "shortLived" == b.idType && 0 < c && $5(a, c)
            }, function(b) {
                a.C = g.Ka;
                a.Vg(b)
            })
        },
        DLa = function(a) {
            var b = {};
            b.pairingCode = a.va;
            b.theme = a.Na;
            bKa() && (b.env_useStageMdx = 1);
            return g.Id(b)
        },
        a6 = function(a) {
            return new Promise(function(b) {
                a.va = z4();
                if (a.Ea) {
                    var c = new chrome.cast.DialLaunchResponse(!0, DLa(a));
                    b(c);
                    CLa(a)
                } else a.X = function() {
                    g.$o(a.W);
                    a.X = function() {};
                    a.W = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, DLa(a));
                    b(d);
                    CLa(a)
                }, a.W = g.Yo(function() {
                    a.X()
                }, 100)
            })
        },
        FLa = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new v4(b);
            return (new Promise(function(e) {
                ELa(a, d, function(f) {
                    f ? (a.Y = !0, Q5(a.u, d), T5(a, d), $5(a, c)) : g.Do(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : a6(a)
            })
        },
        GLa = function(a, b) {
            var c = a.L.receiver.label,
                d = a.i.friendlyName;
            return (new Promise(function(e) {
                pLa(a.u, c, b, d, function(f) {
                    f && f.token && T5(a, f);
                    e(f)
                }, function(f) {
                    U5(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : a6(a)
            })
        },
        ELa = function(a, b, c, d) {
            g.$o(a.I);
            a.I = 0;
            rLa(a.u, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.Yo(function() {
                    ELa(a, b, c, d - 1)
                }, 300)
            })
        },
        $5 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            Z5(a) && (g.$o(a.J), a.J = 0, 0 == b ? HLa(a) : a.J = g.Yo(function() {
                HLa(a)
            }, b))
        },
        HLa = function(a) {
            Z5(a) && a.l.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.ra = c, $5(a, 3E4)) : (a.Y = !1, a.ra = "unknown", uLa(a, b.loungeToken), $5(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.ra = "noLoungeTokenResponse";
                $5(a, 3E4)
            })
        },
        ILa = function(a) {
            g.$o(a.I);
            a.I = 0;
            g.$o(a.J);
            a.J = 0;
            a.C();
            a.C = function() {};
            g.$o(a.W)
        },
        b6 = function(a, b) {
            S5.call(this, a, b, "ManualSession");
            this.l = g.Yo((0, g.C)(this.Br, this, null), 150)
        },
        c6 = function(a, b) {
            g.O.call(this);
            this.B = b;
            this.l = a;
            this.L = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.W = b.disableCastApi || !1;
            this.i = null;
            this.J = !1;
            this.u = [];
            this.I = (0, g.C)(this.HR, this)
        },
        JLa = function(a, b) {
            return b ? g.db(a.u, function(c) {
                return w4(b, c.label)
            }, a) : null
        },
        d6 = function(a) {
            B5("Controller", a)
        },
        aLa = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        e6 = function(a) {
            return a.J || !!a.u.length || !!a.i
        },
        f6 = function(a, b, c) {
            b != a.i && (g.ri(a.i), (a.i = b) ? (c ? a.V("yt-remote-cast2-receiver-resumed",
                b.i) : a.V("yt-remote-cast2-receiver-selected", b.i), b.subscribe("sessionScreen", (0, g.C)(a.dJ, a, b)), b.getScreen() ? a.V("yt-remote-cast2-session-change", b.getScreen()) : c && a.i.Br(null)) : a.V("yt-remote-cast2-session-change", null))
        },
        KLa = function(a) {
            var b = a.l.LE(),
                c = a.i && a.i.i;
            a = g.Pc(b, function(d) {
                c && w4(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = JLa(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        PLa = function(a, b, c, d) {
            d.disableCastApi ? g6("Cannot initialize because disabled by Mdx config.") : LLa() ? MLa(b, d) && (h6(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? NLa(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? NLa(a, c) : (i6("Failed to load cast API: " + f), j6(!1), h6(!1), g.Lu("yt-remote-cast-available"), g.Lu("yt-remote-cast-receiver"),
                    OLa(), c(!1))
            }, d.loadCastApiSetupScript ? g.Nu("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= I4() && iKa() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? K4() : 89 <= I4() ? kKa() : (L4(), J4(jKa.map(fKa))))) : g6("Cannot initialize because not running Chrome")
        },
        OLa = function() {
            g6("dispose");
            var a = k6();
            a && a.dispose();
            g.Fa("yt.mdx.remote.cloudview.instance_", null, void 0);
            QLa(!1);
            g.Cq(l6);
            l6.length = 0
        },
        m6 = function() {
            return !!g.Ju("yt-remote-cast-installed")
        },
        RLa = function() {
            var a = g.Ju("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        SLa = function() {
            g6("clearCurrentReceiver");
            g.Lu("yt-remote-cast-receiver")
        },
        TLa = function() {
            return m6() ? k6() ? k6().getCastSession() : (i6("getCastSelector: Cast is not initialized."), null) : (i6("getCastSelector: Cast API is not installed!"), null)
        },
        o6 = function() {
            m6() ? k6() ? n6() ? (g6("Requesting cast selector."), k6().requestSession()) : (g6("Wait for cast API to be ready to request the session."), l6.push(g.Bq("yt-remote-cast2-api-ready", o6))) : i6("requestCastSelector: Cast is not initialized.") : i6("requestCastSelector: Cast API is not installed!")
        },
        p6 =
        function(a, b) {
            n6() ? k6().setConnectedScreenStatus(a, b) : i6("setConnectedScreenStatus called before ready.")
        },
        LLa = function() {
            var a = 0 <= g.Vc.search(/ (CrMo|Chrome|CriOS)\//);
            return g.DB || a
        },
        ULa = function(a, b) {
            k6().init(a, b)
        },
        MLa = function(a, b) {
            var c = !1;
            k6() || (a = new c6(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.Iu("yt-remote-cast-available", d);
                t4("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                g6("onReceiverSelected: " + d.friendlyName);
                g.Iu("yt-remote-cast-receiver", d);
                t4("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                g6("onReceiverResumed: " + d.friendlyName);
                g.Iu("yt-remote-cast-receiver", d);
                t4("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                g6("onSessionChange: " + x4(d));
                d || g.Lu("yt-remote-cast-receiver");
                t4("yt-remote-cast2-session-change", d)
            }), g.Fa("yt.mdx.remote.cloudview.instance_", a, void 0), c = !0);
            g6("cloudview.createSingleton_: " + c);
            return c
        },
        k6 = function() {
            return g.Ja("yt.mdx.remote.cloudview.instance_")
        },
        NLa = function(a, b) {
            j6(!0);
            h6(!1);
            ULa(a, function(c) {
                c ? (QLa(!0), g.Dq("yt-remote-cast2-api-ready")) : (i6("Failed to initialize cast API."), j6(!1), g.Lu("yt-remote-cast-available"), g.Lu("yt-remote-cast-receiver"), OLa());
                b(c)
            })
        },
        g6 = function(a) {
            B5("cloudview", a)
        },
        i6 = function(a) {
            B5("cloudview", a)
        },
        j6 = function(a) {
            g6("setCastInstalled_ " + a);
            g.Iu("yt-remote-cast-installed", a)
        },
        n6 = function() {
            return !!g.Ja("yt.mdx.remote.cloudview.apiReady_")
        },
        QLa = function(a) {
            g6("setApiReady_ " + a);
            g.Fa("yt.mdx.remote.cloudview.apiReady_", a, void 0)
        },
        h6 = function(a) {
            g.Fa("yt.mdx.remote.cloudview.initializing_", a, void 0)
        },
        q6 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.I = this.J = 0;
            this.trackData = null;
            this.hasNext = this.Fk = !1;
            this.L = this.C = this.i = this.B = 0;
            this.u = NaN;
            this.l = !1;
            this.reset(a)
        },
        r6 = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Fk = !1;
            a.hasNext = !1;
            a.J = 0;
            a.I = g.Ta();
            a.B = 0;
            a.i = 0;
            a.C = 0;
            a.L = 0;
            a.u = NaN;
            a.l = !1
        },
        s6 = function(a) {
            return a.uc() ? (g.Ta() - a.I) / 1E3 : 0
        },
        t6 = function(a, b) {
            a.J = b;
            a.I = g.Ta()
        },
        u6 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Ta() - a.I) / 1E3 + a.J;
                case -1E3:
                    return 0
            }
            return a.J
        },
        v6 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && r6(a)
        },
        w6 = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.Wb(a.trackData);
            b.hasPrevious = a.Fk;
            b.hasNext = a.hasNext;
            b.playerTime = a.J;
            b.playerTimeAt = a.I;
            b.seekableStart = a.B;
            b.seekableEnd = a.i;
            b.duration = a.C;
            b.loadedTime = a.L;
            b.liveIngestionTime = a.u;
            return b
        },
        y6 = function(a, b) {
            g.O.call(this);
            this.bb = 0;
            this.u = a;
            this.C = [];
            this.B = new XKa;
            this.l = this.i = null;
            this.L = (0, g.C)(this.jQ, this);
            this.I = (0, g.C)(this.wu, this);
            this.J = (0, g.C)(this.iQ, this);
            this.W = (0, g.C)(this.qQ, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.TC, this), VLa(this))) : c = 3;
            0 != c && (b ? this.TC(c) : g.Yo((0, g.C)(function() {
                this.TC(c)
            }, this), 0));
            (a = TLa()) && x6(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.W)
        },
        z6 = function(a) {
            return new q6(a.u.getPlayerContextData())
        },
        VLa = function(a) {
            g.Bb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "), function(b) {
                this.C.push(this.u.subscribe(b, g.Ra(this.ER, b), this))
            }, a)
        },
        WLa = function(a) {
            g.Bb(a.C, function(b) {
                this.u.unsubscribeByKey(b)
            }, a);
            a.C.length = 0
        },
        A6 = function(a) {
            return 1 == a.getState()
        },
        B6 = function(a, b) {
            var c = a.B;
            50 > c.i.length + c.l.length && a.B.l.push(b)
        },
        D6 = function(a, b, c) {
            var d = z6(a);
            t6(d, c); - 1E3 != d.playerState && (d.playerState = b);
            C6(a, d)
        },
        E6 = function(a, b, c) {
            a.u.sendMessage(b, c)
        },
        C6 = function(a, b) {
            WLa(a);
            a.u.setPlayerContextData(w6(b));
            VLa(a)
        },
        x6 = function(a, b) {
            a.l && (a.l.removeUpdateListener(a.L), a.l.removeMediaListener(a.I), a.wu(null));
            a.l = b;
            a.l && (B5("CP", "Setting cast session: " + a.l.sessionId), a.l.addUpdateListener(a.L), a.l.addMediaListener(a.I), a.l.media.length && a.wu(a.l.media[0]))
        },
        XLa = function(a) {
            var b = a.i.media,
                c = a.i.customData;
            if (b && c) {
                var d = z6(a);
                b.contentId != d.videoId && B5("CP", "Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                t6(d, a.i.getEstimatedTime());
                C6(a, d)
            } else B5("CP", "No cast media video. Ignoring state update.")
        },
        F6 = function(a, b, c) {
            return (0, g.C)(function(d) {
                this.pe("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.pe("Retrying " + b + " using MDx browser channel."), E6(this, b, c))
            }, a)
        },
        G6 = function(a, b, c) {
            g.O.call(this);
            this.C = NaN;
            this.ra = !1;
            this.L = this.J = this.X = this.Y = NaN;
            this.W = [];
            this.B = this.I = this.u = this.fc = this.i = null;
            this.Ca = a;
            this.W.push(g.Dp(window, "beforeunload", (0, g.C)(this.zO, this)));
            this.l = [];
            this.fc = new q6;
            this.Aa = b.id;
            this.va = b.idType;
            this.i = YLa(this, c);
            this.i.subscribe("handlerOpened", this.nQ, this);
            this.i.subscribe("handlerClosed", this.kQ, this);
            this.i.subscribe("handlerError", this.lQ, this);
            this.i.subscribe("handlerMessage", this.mQ, this);
            this.i.ly(b.token);
            this.subscribe("remoteQueueChange", function() {
                var d =
                    this.fc.videoId;
                g.Mu() && g.Iu("yt-remote-session-video-id", d)
            }, this)
        },
        H6 = function(a) {
            B5("conn", a)
        },
        YLa = function(a, b) {
            return new u5(y5(a.Ca, "/bc"), b, !1, function() {
                return a.QE()
            }, "shortLived" == a.va)
        },
        I6 = function(a, b) {
            a.V("proxyStateChange", b)
        },
        ZLa = function(a) {
            a.C = g.Yo((0, g.C)(function() {
                H6("Connecting timeout");
                this.Rq(1)
            }, a), 2E4)
        },
        J6 = function(a) {
            g.$o(a.C);
            a.C = NaN
        },
        K6 = function(a) {
            g.$o(a.Y);
            a.Y = NaN
        },
        $La = function(a) {
            L6(a);
            a.X = g.Yo((0, g.C)(function() {
                M6(this, "getNowPlaying")
            }, a), 2E4)
        },
        L6 = function(a) {
            g.$o(a.X);
            a.X = NaN
        },
        bMa = function(a, b) {
            b && (J6(a), K6(a));
            var c = w5(a.i) && isNaN(a.C);
            b == c ? b && (I6(a, 1), M6(a, "getSubtitlesTrack")) : b ? (a.UG() && a.fc.reset(), I6(a, 1), M6(a, "getNowPlaying"), aMa(a)) : a.Rq(1)
        },
        cMa = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.fc.videoId && (g.Qb(b.params) ? a.fc.trackData = null : a.fc.trackData = b.params, a.V("remotePlayerChange"))
        },
        dMa = function(a, b) {
            var c = b.params.videoId || b.params.video_id,
                d = parseInt(b.params.currentIndex, 10);
            a.fc.listId = b.params.listId || a.fc.listId;
            v6(a.fc, c, d);
            a.V("remoteQueueChange")
        },
        fMa = function(a, b) {
            b.params = b.params || {};
            dMa(a, b);
            eMa(a, b);
            a.V("autoplayDismissed")
        },
        eMa = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            t6(a.fc, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.fc.playerState && (c = -1E3);
            a.fc.playerState = c;
            c = Number(b.params.loadedTime);
            a.fc.L = isNaN(c) ? 0 : c;
            c = Number(b.params.duration);
            a.fc.C = isNaN(c) ? 0 : c;
            c = a.fc;
            var d = Number(b.params.liveIngestionTime);
            c.u = d;
            c.l = isNaN(d) ? !1 : !0;
            c = a.fc;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.B = isNaN(d) ? 0 : d;
            c.i = isNaN(b) ? 0 : b;
            1 == a.fc.playerState ? $La(a) : L6(a);
            a.V("remotePlayerChange")
        },
        gMa = function(a, b) {
            if (-1E3 != a.fc.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.fc.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                t6(a.fc, isNaN(b) ? 0 : b);
                a.V("remotePlayerChange")
            }
        },
        hMa = function(a, b) {
            var c = "true" == b.params.muted;
            a.fc.volume = parseInt(b.params.volume, 10);
            a.fc.muted = c;
            a.V("remotePlayerChange")
        },
        iMa = function(a, b) {
            a.I = b.params.videoId;
            a.V("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        jMa = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.fc.Fk = "true" == b.params.hasPrevious;
            a.fc.hasNext = c;
            a.V("previousNextChange")
        },
        aMa = function(a) {
            g.$o(a.L);
            a.L = g.Yo((0, g.C)(a.Rq, a, 1), 864E5)
        },
        M6 = function(a, b, c) {
            c ? H6("Sending: action=" + b + ", params=" + g.vj(c)) : H6("Sending: action=" + b);
            a.i.sendMessage(b, c)
        },
        N6 = function(a) {
            F5.call(this, "ScreenServiceProxy");
            this.yg = a;
            this.i = [];
            this.i.push(this.yg.$_s("screenChange", (0, g.C)(this.ZM, this)));
            this.i.push(this.yg.$_s("onlineScreenChange", (0, g.C)(this.lR, this)))
        },
        nMa = function(a, b) {
            aKa();
            if (!H4 || !H4.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.M("MDX_CONFIG") || b;
                TJa();
                F4();
                O6 || (O6 = new x5(b ? b.loungeApiHost : void 0), bKa() && (O6.i = "/api/loungedev"));
                P6 || (P6 = g.Ja("yt.mdx.remote.deferredProxies_") || [], g.Fa("yt.mdx.remote.deferredProxies_", P6, void 0));
                kMa();
                var c = Q6();
                if (!c) {
                    var d = new P5(O6);
                    g.Fa("yt.mdx.remote.screenService_", d, void 0);
                    c = Q6();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken
                    });
                    PLa(a, d, function(f) {
                        f ? R6() && p6(R6(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            t4("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Ja("yt.mdx.remote.initialized_") && (g.Fa("yt.mdx.remote.initialized_", !0, void 0), S6("Initializing: " + g.vj(b)), T6.push(g.Bq("yt-remote-cast2-availability-change", function() {
                    t4("yt-remote-receiver-availability-change")
                })), T6.push(g.Bq("yt-remote-cast2-receiver-selected",
                    function() {
                        U6(null);
                        t4("yt-remote-auto-connect", "cast-selector-receiver")
                    })), T6.push(g.Bq("yt-remote-cast2-receiver-resumed", function() {
                    t4("yt-remote-receiver-resumed", "cast-selector-receiver")
                })), T6.push(g.Bq("yt-remote-cast2-session-change", lMa)), T6.push(g.Bq("yt-remote-connection-change", function(f) {
                    f ? p6(R6(), "YouTube TV") : V6() || (p6(null, null), SLa())
                })), a = W6(), b.isAuto && (a.id += "#dial"), g.yo("desktop_enable_autoplay") && (a.capabilities = ["atp"]), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), S6(" -- with channel params: " +
                    g.vj(a)), a ? (g.Iu("yt-remote-session-app", a.app), g.Iu("yt-remote-session-name", a.name)) : (g.Lu("yt-remote-session-app"), g.Lu("yt-remote-session-name")), g.Fa("yt.mdx.remote.channelParams_", a, void 0), c.start(), R6() || mMa())
            }
        },
        oMa = function() {
            var a = Q6().yg.$_gos();
            var b = X6();
            b && Y6() && (A4(a, b) || a.push(b));
            return SJa(a)
        },
        Z6 = function() {
            var a = pMa();
            !a && m6() && RLa() && (a = {
                key: "cast-selector-receiver",
                name: RLa()
            });
            return a
        },
        pMa = function() {
            var a = oMa(),
                b = X6();
            b || (b = V6());
            return g.db(a, function(c) {
                return b && w4(b, c.key) ? !0 : !1
            })
        },
        X6 = function() {
            var a = R6();
            if (!a) return null;
            var b = Q6().Oh();
            return B4(b, a)
        },
        lMa = function(a) {
            S6("remote.onCastSessionChange_: " + x4(a));
            if (a) {
                var b = X6();
                if (b && b.id == a.id) {
                    if (p6(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) $6 && ($6.token = a), (b = Y6()) && b.ly(a)
                } else b && a7(), b7(a, 1)
            } else Y6() && a7()
        },
        a7 = function() {
            n6() ? k6().stopSession() : i6("stopSession called before API ready.");
            var a = Y6();
            a && (a.disconnect(1), c7(null))
        },
        d7 = function() {
            var a = Y6();
            return !!a && 3 != a.getProxyState()
        },
        S6 = function(a) {
            B5("remote", a)
        },
        Q6 = function() {
            if (!e7) {
                var a = g.Ja("yt.mdx.remote.screenService_");
                e7 = a ? new N6(a) : null
            }
            return e7
        },
        R6 = function() {
            return g.Ja("yt.mdx.remote.currentScreenId_")
        },
        qMa = function(a) {
            g.Fa("yt.mdx.remote.currentScreenId_", a, void 0)
        },
        rMa = function() {
            return g.Ja("yt.mdx.remote.connectData_")
        },
        U6 = function(a) {
            g.Fa("yt.mdx.remote.connectData_", a, void 0)
        },
        Y6 = function() {
            return g.Ja("yt.mdx.remote.connection_")
        },
        c7 = function(a) {
            var b = Y6();
            U6(null);
            a || qMa("");
            g.Fa("yt.mdx.remote.connection_", a, void 0);
            P6 && (g.Bb(P6, function(c) {
                c(a)
            }), P6.length = 0);
            b && !a ? t4("yt-remote-connection-change", !1) : !b && a && t4("yt-remote-connection-change", !0)
        },
        V6 = function() {
            var a = g.Mu();
            if (!a) return null;
            var b = Q6();
            if (!b) return null;
            b = b.Oh();
            return B4(b, a)
        },
        b7 = function(a, b) {
            R6();
            X6() && X6();
            f7 ? $6 = a : (qMa(a.id), a = new G6(O6, a, W6()), a.connect(b, rMa()), a.subscribe("beforeDisconnect", function(c) {
                t4("yt-remote-before-disconnect", c)
            }), a.subscribe("beforeDispose", function() {
                Y6() && (Y6(), c7(null))
            }), a.subscribe("browserChannelAuthError", function() {
                var c = X6();
                c && "shortLived" == c.idType && (n6() ? k6().handleBrowserChannelAuthError() : i6("refreshLoungeToken called before API ready."))
            }), c7(a))
        },
        mMa = function() {
            var a = V6();
            a ? (S6("Resume connection to: " + x4(a)), b7(a, 0)) : (G4(), SLa(), S6("Skipping connecting because no session screen found."))
        },
        kMa = function() {
            var a = W6();
            if (g.Qb(a)) {
                a = E4();
                var b = g.Ju("yt-remote-session-name") || "",
                    c = g.Ju("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Fa("yt.mdx.remote.channelParams_", a, void 0)
            }
        },
        W6 = function() {
            return g.Ja("yt.mdx.remote.channelParams_") || {}
        },
        g7 = function(a, b, c) {
            g.F.call(this);
            var d = this;
            this.l = a;
            this.G = b;
            this.Ob = c;
            this.events = new g.LL(this);
            this.X = this.events.N(this.G, "onVolumeChange", function(e) {
                sMa(d, e)
            });
            this.C = !1;
            this.suggestion = null;
            this.I = new g.OI(64);
            this.i = new g.J(this.dK, 500, this);
            this.u = new g.J(this.eK, 1E3, this);
            this.L = new M4(this.ZT, 0, this);
            this.B = {};
            this.W = new g.J(this.EK, 1E3, this);
            this.J = new N4(this.seekTo, 1E3, this);
            this.Y = g.Ka;
            g.H(this, this.events);
            this.events.N(b, "onCaptionsTrackListChanged", this.UQ);
            this.events.N(b, "captionschanged", this.gQ);
            this.events.N(b, "captionssettingschanged", this.jK);
            this.events.N(b, "videoplayerreset", this.Nx);
            this.events.N(b, "mdxautoplaycancel", function() {
                d.Ob.pG()
            });
            a = this.Ob;
            a.Ga();
            a.subscribe("proxyStateChange", this.ZI, this);
            a.subscribe("remotePlayerChange", this.Cu, this);
            a.subscribe("remoteQueueChange", this.Nx, this);
            a.subscribe("previousNextChange", this.WI, this);
            a.subscribe("nowAutoplaying", this.QI, this);
            a.subscribe("autoplayDismissed", this.mI, this);
            g.H(this, this.i);
            g.H(this, this.u);
            g.H(this, this.L);
            g.H(this, this.W);
            g.H(this, this.J);
            this.jK();
            this.Nx();
            this.Cu()
        },
        sMa = function(a, b) {
            if (h7(a)) {
                a.Ob.unsubscribe("remotePlayerChange", a.Cu, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = z6(a.Ob);
                if (c !== d.volume || b !== d.muted) a.Ob.setVolume(c, b), a.W.start();
                a.Ob.subscribe("remotePlayerChange", a.Cu, a)
            }
        },
        tMa = function(a) {
            a.Sb(0);
            a.i.stop();
            a.Lb(new g.OI(64))
        },
        i7 = function(a, b) {
            if (h7(a) && !a.C) {
                var c = null;
                b && (c = {
                    style: a.G.getSubtitlesUserSettings()
                }, g.Yb(c, b));
                a.Ob.PE(a.G.getVideoData(1).videoId, c);
                a.B = z6(a.Ob).trackData
            }
        },
        j7 = function(a, b) {
            var c = a.G.getPlaylist();
            if (null === c || void 0 === c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.G.getVideoData(1);
            a.Ob.playVideo(c.videoId, b, d, e, c.playerParams, c.Ca, FJa(c));
            a.Lb(new g.OI(1))
        },
        uMa = function(a, b) {
            if (b) {
                var c = a.G.getOption("captions", "tracklist", {
                    mH: 1
                });
                c && c.length ? (a.G.setOption("captions", "track", b), a.C = !1) : (a.G.loadModule("captions"), a.C = !0)
            } else a.G.setOption("captions", "track", {})
        },
        h7 = function(a) {
            return z6(a.Ob).videoId === a.G.getVideoData(1).videoId
        },
        k7 = function() {
            g.V.call(this, {
                D: "div",
                K: "ytp-mdx-manual-pairing-popup-dialog",
                U: {
                    role: "dialog"
                },
                S: [{
                    D: "div",
                    K: "ytp-mdx-manual-pairing-popup-dialog-inner-content",
                    S: [{
                        D: "div",
                        K: "ytp-mdx-manual-pairing-popup-title",
                        ma: "Connecting to your TV on web using a code will be going away soon"
                    }, {
                        D: "div",
                        K: "ytp-mdx-manual-pairing-popup-buttons",
                        S: [{
                            D: "button",
                            Ba: ["ytp-button", "ytp-mdx-manual-pairing-popup-learn-more"],
                            ma: "Learn more"
                        }, {
                            D: "button",
                            Ba: ["ytp-button", "ytp-mdx-manual-pairing-popup-ok"],
                            ma: "OK"
                        }]
                    }]
                }]
            });
            this.i = new g.uK(this, 250);
            this.learnMoreButton =
                this.ya("ytp-mdx-manual-pairing-popup-learn-more");
            this.okButton = this.ya("ytp-mdx-manual-pairing-popup-ok");
            g.H(this, this.i);
            this.N(this.learnMoreButton, "click", this.l);
            this.N(this.okButton, "click", this.u)
        },
        l7 = function() {
            g.V.call(this, {
                D: "div",
                K: "ytp-mdx-popup-dialog",
                U: {
                    role: "dialog"
                },
                S: [{
                    D: "div",
                    K: "ytp-mdx-popup-dialog-inner-content",
                    S: [{
                        D: "div",
                        K: "ytp-mdx-popup-title",
                        ma: "You're signed out"
                    }, {
                        D: "div",
                        K: "ytp-mdx-popup-description",
                        ma: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        D: "div",
                        K: "ytp-mdx-privacy-popup-buttons",
                        S: [{
                            D: "button",
                            Ba: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            ma: "Cancel"
                        }, {
                            D: "button",
                            Ba: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            ma: "Confirm"
                        }]
                    }]
                }]
            });
            this.i = new g.uK(this, 250);
            this.cancelButton = this.ya("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.ya("ytp-mdx-privacy-popup-confirm");
            g.H(this, this.i);
            this.N(this.cancelButton, "click", this.l);
            this.N(this.confirmButton, "click", this.u)
        },
        m7 = function(a) {
            g.V.call(this, {
                D: "div",
                K: "ytp-remote",
                S: [{
                    D: "div",
                    K: "ytp-remote-display-status",
                    S: [{
                        D: "div",
                        K: "ytp-remote-display-status-icon",
                        S: [g.kma()]
                    }, {
                        D: "div",
                        K: "ytp-remote-display-status-text",
                        ma: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.i = new g.uK(this, 250);
            g.H(this, this.i);
            this.N(a, "presentingplayerstatechange", this.l);
            vMa(this, a.rb())
        },
        vMa = function(a, b) {
            if (3 === a.api.getPresentingPlayerType()) {
                var c = {
                    RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name
                };
                b = g.U(b, 128) ? g.jI("Error on $RECEIVER_NAME", c) : b.uc() || g.U(b, 4) ? g.jI("Playing on $RECEIVER_NAME", c) : g.jI("Connected to $RECEIVER_NAME", c);
                a.Oa("statustext", b);
                a.i.show()
            } else a.i.hide()
        },
        n7 = function(a, b) {
            g.EO.call(this, "Play on", 0, a, b);
            this.G = a;
            this.In = {};
            this.N(a, "onMdxReceiversChange", this.C);
            this.N(a, "presentingplayerstatechange", this.C);
            this.C()
        },
        o7 = function(a) {
            g.TL.call(this, a);
            this.uj = {
                key: z4(),
                name: "This computer"
            };
            this.ji = null;
            this.subscriptions = [];
            this.vC = this.Ob = null;
            this.In = [this.uj];
            this.Km = this.uj;
            this.pd = new g.OI(64);
            this.IH = 0;
            this.zf = -1;
            this.Er = null;
            this.Gu = this.ox = !1;
            this.Fp = this.Lr = null;
            if (!g.TD(this.player.T()) && !g.UD(this.player.T())) {
                a = this.player;
                var b = g.zL(a);
                b && (b = b.Ym()) && (b = new n7(a, b), g.H(this, b));
                b = new m7(a);
                g.H(this, b);
                g.JL(a, b.element, 4);
                this.Lr = new l7;
                g.H(this, this.Lr);
                g.JL(a, this.Lr.element, 4);
                g.S(this.player.T().experiments, "pair_servlet_deprecation_warning_enabled") &&
                    !g.S(this.player.T().experiments, "deprecate_pair_servlet_enabled") && (this.Er = new k7, g.H(this, this.Er), g.JL(a, this.Er.element, 4));
                this.Gu = !!V6();
                this.ox = !!g.Ju("yt-remote-manual-pairing-warning-shown")
            }
        },
        p7 = function(a) {
            a.Fp && (a.player.removeEventListener("presentingplayerstatechange", a.Fp), a.Fp = null)
        },
        wMa = function(a, b, c) {
            a.pd = c;
            a.player.V("presentingplayerstatechange", new g.TH(c, b))
        },
        xMa = function(a, b, c) {
            var d = !1;
            1 === b ? d = !a.Gu : 2 === b && (d = !a.ox);
            d && g.VH(c, 8) && (a.player.pauseVideo(), p7(a))
        },
        q7 = function(a, b) {
            if (b.key !== a.Km.key)
                if (b.key === a.uj.key) a7();
                else {
                    if (a.Er && !a.ox && b !== a.uj && "cast-selector-receiver" !== b.key && g.oE(a.player.T())) yMa(a);
                    else {
                        var c;
                        (c = !g.S(a.player.T().experiments, "mdx_enable_privacy_disclosure_ui")) || (c = ((c = g.M("PLAYER_CONFIG")) && c.args && void 0 !== c.args.authuser ? !0 : !(!g.M("SESSION_INDEX") && !g.M("LOGGED_IN"))) || a.Gu || !a.Lr);
                        (c ? 0 : g.oE(a.player.T()) || g.sE(a.player.T())) && zMa(a)
                    }
                    a.Km = b;
                    var d = a.player.getPlaylistId();
                    c = a.player.getVideoData(1);
                    var e = c.videoId;
                    if (!d && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
                        g.S(a.player.T().experiments, "should_clear_video_data_on_player_cued_unstarted")) a = null;
                    else {
                        var f = a.player.getPlaylist();
                        if (f) {
                            var h = [];
                            for (var l = 0; l < f.length; l++) h[l] = f.Za(l).videoId
                        } else h = [e];
                        f = a.player.getCurrentTime(1);
                        a = {
                            videoIds: h,
                            listId: d,
                            videoId: e,
                            playerParams: c.playerParams,
                            clickTrackingParams: c.Ca,
                            index: Math.max(a.player.getPlaylistIndex(), 0),
                            currentTime: 0 === f ? void 0 : f
                        };
                        (c = FJa(c)) && (a.locationInfo = c)
                    }
                    S6("Connecting to: " + g.vj(b));
                    "cast-selector-receiver" == b.key ? (U6(a || null), b = a || null,
                        n6() ? k6().setLaunchParams(b) : i6("setLaunchParams called before ready.")) : !a && d7() && R6() == b.key ? t4("yt-remote-connection-change", !0) : (a7(), U6(a || null), a = Q6().Oh(), (b = B4(a, b.key)) && b7(b, 1))
                }
        },
        zMa = function(a) {
            a.player.rb().uc() ? a.player.pauseVideo() : (a.Fp = function(b) {
                xMa(a, 1, b)
            }, a.player.addEventListener("presentingplayerstatechange", a.Fp));
            a.Lr && a.Lr.bd();
            Y6() || (f7 = !0)
        },
        yMa = function(a) {
            a.player.rb().uc() ? a.player.pauseVideo() : (a.Fp = function(b) {
                xMa(a, 2, b)
            }, a.player.addEventListener("presentingplayerstatechange", a.Fp));
            a.Er && a.Er.bd();
            Y6() || (f7 = !0)
        },
        uKa = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        b5 = {
            "'": "\\'"
        },
        AMa = {},
        OJa = {
            VU: "atp",
            x4: "ska",
            s3: "que",
            D1: "mus",
            w4: "sus",
            PY: "dsp",
            L3: "seq",
            e1: "mic",
            PX: "dpa",
            iV: "cds"
        },
        H4, D4 = "",
        hKa = cKa("loadCastFramework") || cKa("loadCastApplicationFramework"),
        jKa = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    g.Ua(M4, g.F);
    g.k = M4.prototype;
    g.k.lh = function(a) {
        this.B = arguments;
        this.i = !1;
        this.Cb ? this.u = g.Ta() + this.zg : this.Cb = g.Fm(this.C, this.zg)
    };
    g.k.stop = function() {
        this.Cb && (g.A.clearTimeout(this.Cb), this.Cb = null);
        this.u = null;
        this.i = !1;
        this.B = []
    };
    g.k.pause = function() {
        ++this.l
    };
    g.k.resume = function() {
        this.l && (--this.l, !this.l && this.i && (this.i = !1, this.I.apply(null, this.B)))
    };
    g.k.oa = function() {
        this.stop();
        M4.oe.oa.call(this)
    };
    g.k.PM = function() {
        this.Cb && (g.A.clearTimeout(this.Cb), this.Cb = null);
        this.u ? (this.Cb = g.Fm(this.C, this.u - g.Ta()), this.u = null) : this.l ? this.i = !0 : (this.i = !1, this.I.apply(null, this.B))
    };
    g.v(N4, g.F);
    g.k = N4.prototype;
    g.k.lh = function(a) {
        this.u = arguments;
        this.Cb || this.l ? this.i = !0 : O4(this)
    };
    g.k.stop = function() {
        this.Cb && (g.A.clearTimeout(this.Cb), this.Cb = null, this.i = !1, this.u = null)
    };
    g.k.pause = function() {
        this.l++
    };
    g.k.resume = function() {
        this.l--;
        this.l || !this.i || this.Cb || (this.i = !1, O4(this))
    };
    g.k.oa = function() {
        g.F.prototype.oa.call(this);
        this.stop()
    };
    Q4.prototype.stringify = function(a) {
        return g.A.JSON.stringify(a, void 0)
    };
    Q4.prototype.parse = function(a) {
        return g.A.JSON.parse(a, void 0)
    };
    var S4 = new g.Vl;
    g.v(lKa, g.Bl);
    U4.prototype.i = null;
    U4.prototype.getOptions = function() {
        var a;
        (a = this.i) || (a = {}, nKa(this) && (a[0] = !0, a[1] = !0), a = this.i = a);
        return a
    };
    var r7;
    g.Ua(mKa, U4);
    r7 = new mKa;
    g.k = V4.prototype;
    g.k.Wn = null;
    g.k.Lj = !1;
    g.k.hs = null;
    g.k.ID = null;
    g.k.Or = null;
    g.k.Xr = null;
    g.k.Em = null;
    g.k.Ln = null;
    g.k.Hp = null;
    g.k.qf = null;
    g.k.Dv = 0;
    g.k.Oj = null;
    g.k.Oy = null;
    g.k.zm = null;
    g.k.Is = -1;
    g.k.VJ = !0;
    g.k.Io = !1;
    g.k.Ez = 0;
    g.k.Ux = null;
    var sKa = {},
        Y4 = {};
    g.k = V4.prototype;
    g.k.setTimeout = function(a) {
        this.C = a
    };
    g.k.dT = function(a) {
        a = a.target;
        var b = this.Ux;
        b && 3 == g5(a) ? b.lh() : this.MK(a)
    };
    g.k.MK = function(a) {
        try {
            if (a == this.qf) a: {
                var b = g5(this.qf),
                    c = this.qf.I,
                    d = this.qf.getStatus();
                if (g.ye && !g.ae(10) || g.Ae && !g.$d("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.fg && !i5(this.qf)) break a;this.Io || 4 != b || 7 == c || (8 == c || 0 >= d ? this.i.xj(3) : this.i.xj(2));c5(this);
                var e = this.qf.getStatus();this.Is = e;
                var f = i5(this.qf);
                (this.Lj = 200 == e) ? (4 == b && $4(this), this.I ? (tKa(this, b, f), g.fg && this.Lj && 3 == b && (this.B.Ma(this.u, "tick", this.YS), this.u.start())) : Z4(this, f), this.Lj && !this.Io && (4 == b ? this.i.Rv(this) : (this.Lj = !1, X4(this)))) : (400 == e && 0 < f.indexOf("Unknown SID") ? (this.zm = 3, T4(13)) : (this.zm = 0, T4(14)), $4(this), a5(this))
            }
        } catch (h) {
            this.qf && i5(this.qf)
        } finally {}
    };
    g.k.YS = function() {
        var a = g5(this.qf),
            b = i5(this.qf);
        this.Dv < b.length && (c5(this), tKa(this, a, b), this.Lj && 4 != a && X4(this))
    };
    g.k.zS = function(a) {
        R4((0, g.C)(this.yS, this, a), 0)
    };
    g.k.yS = function(a) {
        this.Io || (c5(this), Z4(this, a), X4(this))
    };
    g.k.iJ = function(a) {
        R4((0, g.C)(this.xS, this, a), 0)
    };
    g.k.xS = function(a) {
        this.Io || ($4(this), this.Lj = a, this.i.Rv(this), this.i.xj(4))
    };
    g.k.cancel = function() {
        this.Io = !0;
        $4(this)
    };
    g.k.IS = function() {
        this.hs = null;
        var a = Date.now();
        0 <= a - this.ID ? (2 != this.Xr && this.i.xj(3), $4(this), this.zm = 2, T4(18), a5(this)) : wKa(this, this.ID - a)
    };
    g.k.getLastError = function() {
        return this.zm
    };
    g.Ua(e5, g.Vl);
    var DKa = /^https?$/i,
        BMa = ["POST", "PUT"];
    g.k = e5.prototype;
    g.k.send = function(a, b, c, d) {
        if (this.i) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.W + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.W = a;
        this.u = "";
        this.I = 0;
        this.Na = b;
        this.Ca = !1;
        this.B = !0;
        this.i = this.va ? oKa(this.va) : oKa(r7);
        this.ra = this.va ? this.va.getOptions() : r7.getOptions();
        this.i.onreadystatechange = (0, g.C)(this.XI, this);
        try {
            s4(h5(this, "Opening Xhr")), this.Aa = !0, this.i.open(b, String(a), !0), this.Aa = !1
        } catch (f) {
            s4(h5(this, "Error opening Xhr: " + f.message));
            CKa(this, f);
            return
        }
        a =
            c || "";
        var e = this.headers.clone();
        d && KJa(d, function(f, h) {
            e.set(h, f)
        });
        d = g.db(e.zi(), AKa);
        c = g.A.FormData && a instanceof g.A.FormData;
        !g.gb(BMa, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(f, h) {
            this.i.setRequestHeader(h, f)
        }, this);
        this.Sa && (this.i.responseType = this.Sa);
        "withCredentials" in this.i && this.i.withCredentials !== this.Ha && (this.i.withCredentials = this.Ha);
        try {
            FKa(this), 0 < this.J && (this.Y = zKa(this.i), s4(h5(this, "Will abort after " + this.J + "ms if incomplete, xhr2 " + this.Y)), this.Y ? (this.i.timeout = this.J, this.i.ontimeout = (0, g.C)(this.JE, this)) : this.X = g.Fm(this.JE, this.J, this)), s4(h5(this, "Sending request")), this.L = !0, this.i.send(a), this.L = !1
        } catch (f) {
            s4(h5(this, "Send error: " + f.message)), CKa(this, f)
        }
    };
    g.k.JE = function() {
        "undefined" != typeof g.F_ && this.i && (this.u = "Timed out after " + this.J + "ms, aborting", this.I = 8, h5(this, this.u), this.dispatchEvent("timeout"), this.abort(8))
    };
    g.k.abort = function(a) {
        this.i && this.B && (h5(this, "Aborting"), this.B = !1, this.C = !0, this.i.abort(), this.C = !1, this.I = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), f5(this))
    };
    g.k.oa = function() {
        this.i && (this.B && (this.B = !1, this.C = !0, this.i.abort(), this.C = !1), f5(this, !0));
        e5.oe.oa.call(this)
    };
    g.k.XI = function() {
        this.Ga() || (this.Aa || this.L || this.C ? EKa(this) : this.GR())
    };
    g.k.GR = function() {
        EKa(this)
    };
    g.k.isActive = function() {
        return !!this.i
    };
    g.k.isComplete = function() {
        return 4 == g5(this)
    };
    g.k.getStatus = function() {
        try {
            return 2 < g5(this) ? this.i.status : -1
        } catch (a) {
            return -1
        }
    };
    g.k.getResponseHeader = function(a) {
        if (this.i && this.isComplete()) return a = this.i.getResponseHeader(a), null === a ? void 0 : a
    };
    g.k.getLastError = function() {
        return "string" === typeof this.u ? this.u : String(this.u)
    };
    g.k = GKa.prototype;
    g.k.Fz = null;
    g.k.Dh = null;
    g.k.Vx = !1;
    g.k.fK = null;
    g.k.ww = null;
    g.k.IB = null;
    g.k.Gz = null;
    g.k.bb = null;
    g.k.il = -1;
    g.k.Js = null;
    g.k.Us = null;
    g.k.connect = function(a) {
        this.Gz = a;
        a = j5(this.i, null, this.Gz);
        T4(3);
        this.fK = Date.now();
        var b = this.i.J;
        null != b ? (this.Js = b[0], (this.Us = b[1]) ? (this.bb = 1, HKa(this)) : (this.bb = 2, l5(this))) : (q4(a, "MODE", "init"), this.Dh = new V4(this, void 0, void 0, void 0), this.Dh.Wn = this.Fz, W4(this.Dh, a, !1, null, !0), this.bb = 0)
    };
    g.k.MN = function(a) {
        if (a) this.bb = 2, l5(this);
        else {
            T4(4);
            var b = this.i;
            b.hk = b.Im.il;
            s5(b, 9)
        }
        a && this.xj(2)
    };
    g.k.vA = function(a) {
        return this.i.vA(a)
    };
    g.k.abort = function() {
        this.Dh && (this.Dh.cancel(), this.Dh = null);
        this.il = -1
    };
    g.k.KE = function() {
        return !1
    };
    g.k.aJ = function(a, b) {
        this.il = a.Is;
        if (0 == this.bb)
            if (b) {
                try {
                    var c = this.l.parse(b)
                } catch (d) {
                    a = this.i;
                    a.hk = this.il;
                    s5(a, 2);
                    return
                }
                this.Js = c[0];
                this.Us = c[1]
            } else a = this.i, a.hk = this.il, s5(a, 2);
        else if (2 == this.bb)
            if (this.Vx) T4(7), this.IB = Date.now();
            else if ("11111" == b) {
            if (T4(6), this.Vx = !0, this.ww = Date.now(), a = this.ww - this.fK, !g.ye || g.ae(10) || 500 > a) this.il = 200, this.Dh.cancel(), T4(12), k5(this.i, this, !0)
        } else T4(8), this.ww = this.IB = Date.now(), this.Vx = !1
    };
    g.k.Rv = function() {
        this.il = this.Dh.Is;
        if (this.Dh.Lj) 0 == this.bb ? this.Us ? (this.bb = 1, HKa(this)) : (this.bb = 2, l5(this)) : 2 == this.bb && ((!g.ye || g.ae(10) ? !this.Vx : 200 > this.IB - this.ww) ? (T4(11), k5(this.i, this, !1)) : (T4(12), k5(this.i, this, !0)));
        else {
            0 == this.bb ? T4(9) : 2 == this.bb && T4(10);
            var a = this.i;
            this.Dh.getLastError();
            a.hk = this.il;
            s5(a, 2)
        }
    };
    g.k.Xu = function() {
        return this.i.Xu()
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.xj = function(a) {
        this.i.xj(a)
    };
    g.k = m5.prototype;
    g.k.gk = null;
    g.k.xt = null;
    g.k.nh = null;
    g.k.Ke = null;
    g.k.Hz = null;
    g.k.xw = null;
    g.k.LF = null;
    g.k.Sv = null;
    g.k.tu = 0;
    g.k.BP = 0;
    g.k.pg = null;
    g.k.Pm = null;
    g.k.zl = null;
    g.k.Ro = null;
    g.k.Im = null;
    g.k.My = null;
    g.k.Ar = -1;
    g.k.HH = -1;
    g.k.hk = -1;
    g.k.Vq = 0;
    g.k.Iq = 0;
    g.k.Jo = 8;
    g.Ua(JKa, g.Bl);
    g.Ua(KKa, g.Bl);
    g.k = m5.prototype;
    g.k.connect = function(a, b, c, d, e) {
        T4(0);
        this.Hz = b;
        this.xt = c || {};
        d && void 0 !== e && (this.xt.OSID = d, this.xt.OAID = e);
        this.C ? (R4((0, g.C)(this.cG, this, a), 100), OKa(this)) : this.cG(a)
    };
    g.k.cG = function(a) {
        this.Im = new GKa(this);
        this.Im.Fz = this.gk;
        this.Im.l = this.B;
        this.Im.connect(a)
    };
    g.k.KE = function() {
        return 0 == this.bb
    };
    g.k.getState = function() {
        return this.bb
    };
    g.k.gJ = function(a) {
        this.Pm = null;
        SKa(this, a)
    };
    g.k.fJ = function() {
        this.zl = null;
        this.Ke = new V4(this, this.l, "rpc", this.I);
        this.Ke.Wn = this.gk;
        this.Ke.Ez = 0;
        var a = this.LF.clone();
        o4(a, "RID", "rpc");
        o4(a, "SID", this.l);
        o4(a, "CI", this.My ? "0" : "1");
        o4(a, "AID", this.Ar);
        n5(this, a);
        if (!g.ye || g.ae(10)) o4(a, "TYPE", "xmlhttp"), W4(this.Ke, a, !0, this.Sv, !1);
        else {
            o4(a, "TYPE", "html");
            var b = this.Ke,
                c = !!this.Sv;
            b.Xr = 3;
            b.Em = p4(a.clone());
            vKa(b, c)
        }
    };
    g.k.aJ = function(a, b) {
        if (0 != this.bb && (this.Ke == a || this.nh == a))
            if (this.hk = a.Is, this.nh == a && 3 == this.bb)
                if (7 < this.Jo) {
                    try {
                        var c = this.B.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.zl) {
                                if (this.Ke)
                                    if (this.Ke.Or + 3E3 < this.nh.Or) p5(this), this.Ke.cancel(), this.Ke = null;
                                    else break a;
                                r5(this);
                                T4(19)
                            }
                        }
                    else this.HH = a[1], 0 < this.HH - this.Ar && 37500 > a[2] && this.My && 0 == this.Iq && !this.Ro && (this.Ro = R4((0, g.C)(this.dQ, this), 6E3));
                    else s5(this, 11)
                } else b != AMa.DX.i && s5(this, 11);
        else if (this.Ke ==
            a && p5(this), !g.pc(b))
            for (a = this.B.parse(b), b = 0; b < a.length; b++) c = a[b], this.Ar = c[0], c = c[1], 2 == this.bb ? "c" == c[0] ? (this.l = c[1], this.Sv = c[2], c = c[3], null != c ? this.Jo = c : this.Jo = 6, this.bb = 3, this.pg && this.pg.YF(), this.LF = j5(this, this.Xu() ? this.Sv : null, this.Hz), TKa(this)) : "stop" == c[0] && s5(this, 7) : 3 == this.bb && ("stop" == c[0] ? s5(this, 7) : "noop" != c[0] && this.pg && this.pg.XF(c), this.Iq = 0)
    };
    g.k.dQ = function() {
        null != this.Ro && (this.Ro = null, this.Ke.cancel(), this.Ke = null, r5(this), T4(20))
    };
    g.k.Rv = function(a) {
        if (this.Ke == a) {
            p5(this);
            this.Ke = null;
            var b = 2
        } else if (this.nh == a) this.nh = null, b = 1;
        else return;
        this.hk = a.Is;
        if (0 != this.bb)
            if (a.Lj) 1 == b ? (b = S4, b.dispatchEvent(new JKa(b, a.Hp ? a.Hp.length : 0, Date.now() - a.Or, this.Vq)), o5(this), this.u.length = 0) : TKa(this);
            else {
                var c = a.getLastError(),
                    d;
                if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.hk)) {
                    if (d = 1 == b) this.nh || this.Pm || 1 == this.bb || 2 <= this.Vq ? d = !1 : (this.Pm = R4((0, g.C)(this.gJ, this, a), UKa(this, this.Vq)), this.Vq++, d = !0);
                    d = !(d || 2 == b && r5(this))
                }
                if (d) switch (c) {
                    case 1:
                        s5(this,
                            5);
                        break;
                    case 4:
                        s5(this, 10);
                        break;
                    case 3:
                        s5(this, 6);
                        break;
                    case 7:
                        s5(this, 12);
                        break;
                    default:
                        s5(this, 2)
                }
            }
    };
    g.k.gO = function(a) {
        if (!g.gb(arguments, this.bb)) throw Error("Unexpected channel state: " + this.bb);
    };
    g.k.GT = function(a) {
        a ? T4(2) : (T4(1), VKa(this, 8))
    };
    g.k.vA = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new e5;
        a.Ha = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.pg && this.pg.isActive(this)
    };
    g.k.xj = function(a) {
        var b = S4;
        b.dispatchEvent(new KKa(b, a))
    };
    g.k.Xu = function() {
        return !(!g.ye || g.ae(10))
    };
    g.k = WKa.prototype;
    g.k.YF = function() {};
    g.k.XF = function() {};
    g.k.WF = function() {};
    g.k.hA = function() {};
    g.k.FG = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = XKa.prototype;
    g.k.isEmpty = function() {
        return g.ib(this.i) && g.ib(this.l)
    };
    g.k.clear = function() {
        this.i = [];
        this.l = []
    };
    g.k.contains = function(a) {
        return g.gb(this.i, a) || g.gb(this.l, a)
    };
    g.k.remove = function(a) {
        var b = this.i;
        var c = (0, g.rEa)(b, a);
        0 <= c ? (g.kb(b, c), b = !0) : b = !1;
        return b || g.lb(this.l, a)
    };
    g.k.ph = function() {
        for (var a = [], b = this.i.length - 1; 0 <= b; --b) a.push(this.i[b]);
        var c = this.l.length;
        for (b = 0; b < c; ++b) a.push(this.l[b]);
        return a
    };
    g.Ua(t5, g.F);
    g.k = t5.prototype;
    g.k.rS = function() {
        this.zg = Math.min(3E5, 2 * this.zg);
        this.u();
        this.l && this.start()
    };
    g.k.start = function() {
        var a = this.zg + 15E3 * Math.random();
        g.en(this.i, a);
        this.l = g.Ta() + a
    };
    g.k.stop = function() {
        this.i.stop();
        this.l = 0
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.reset = function() {
        this.i.stop();
        this.zg = 5E3
    };
    g.Ua(u5, WKa);
    g.k = u5.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.u.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.u.unsubscribe(a, b, c)
    };
    g.k.Ig = function(a) {
        return this.u.Ig(a)
    };
    g.k.V = function(a, b) {
        return this.u.V.apply(this.u, arguments)
    };
    g.k.dispose = function() {
        this.X || (this.X = !0, g.ri(this.u), $Ka(this), g.ri(this.l), this.l = null, this.Y = function() {
            return ""
        })
    };
    g.k.Ga = function() {
        return this.X
    };
    g.k.connect = function(a, b, c) {
        if (!this.i || 2 != this.i.getState()) {
            this.W = "";
            this.l.stop();
            this.C = a || null;
            this.B = b || 0;
            a = this.ra + "/test";
            b = this.ra + "/bind";
            var d = new m5(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.va),
                e = this.i;
            e && (e.pg = null);
            d.pg = this;
            this.i = d;
            v5(this);
            if (this.i) {
                d = g.M("ID_TOKEN");
                var f = this.i.gk || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.i.gk = f
            }
            e ? (3 != e.getState() && 0 == QKa(e) || e.getState(), this.i.connect(a, b, this.I, e.l, e.Ar)) : c ? this.i.connect(a,
                b, this.I, c.sessionId, c.arrayId) : this.i.connect(a, b, this.I)
        }
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.Yb(a, b);
        this.l.isActive() || 2 == (this.i ? this.i.getState() : 0) ? this.J.push(a) : w5(this) && (v5(this), PKa(this.i, a))
    };
    g.k.YF = function() {
        this.l.reset();
        this.C = null;
        this.B = 0;
        if (this.J.length) {
            var a = this.J;
            this.J = [];
            for (var b = 0, c = a.length; b < c; ++b) PKa(this.i, a[b])
        }
        this.V("handlerOpened")
    };
    g.k.WF = function(a) {
        var b = 2 == a && 401 == this.i.hk;
        4 == a || b || this.l.start();
        this.V("handlerError", a, b)
    };
    g.k.hA = function(a) {
        if (!this.l.isActive()) this.V("handlerClosed");
        else if (a)
            for (var b = 0, c = a.length; b < c; ++b) {
                var d = a[b].map;
                d && this.J.push(d)
            }
    };
    g.k.FG = function() {
        var a = {
            v: 2
        };
        this.W && (a.gsessionid = this.W);
        0 != this.B && (a.ui = "" + this.B);
        0 != this.L && (a.ui = "" + this.L);
        this.C && g.Yb(a, this.C);
        return a
    };
    g.k.XF = function(a) {
        "S" == a[0] ? this.W = a[1] : "gracefulReconnect" == a[0] ? (this.l.start(), NKa(this.i)) : this.V("handlerMessage", new YKa(a[0], a[1]))
    };
    g.k.ly = function(a) {
        (this.I.loungeIdToken = a) || this.l.stop();
        if (this.Ca && this.i) {
            var b = this.i.gk || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.i.gk = b
        }
    };
    g.k.nT = function() {
        this.l.isActive();
        0 == QKa(this.i) && this.connect(this.C, this.B)
    };
    x5.prototype.B = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    x5.prototype.u = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    x5.prototype.C = function(a) {
        a(Error("request timed out"))
    };
    var gLa = Date.now(),
        A5 = null,
        D5 = Array(50),
        C5 = -1,
        E5 = !1;
    g.Ua(F5, g.O);
    F5.prototype.Oh = function() {
        return this.screens
    };
    F5.prototype.contains = function(a) {
        return !!A4(this.screens, a)
    };
    F5.prototype.get = function(a) {
        return a ? B4(this.screens, a) : null
    };
    F5.prototype.info = function(a) {
        B5(this.I, a)
    };
    g.v(G5, g.O);
    g.k = G5.prototype;
    g.k.start = function() {
        !this.i && isNaN(this.Cb) && this.rJ()
    };
    g.k.stop = function() {
        this.i && (this.i.abort(), this.i = null);
        isNaN(this.Cb) || (g.$o(this.Cb), this.Cb = NaN)
    };
    g.k.oa = function() {
        this.stop();
        g.O.prototype.oa.call(this)
    };
    g.k.rJ = function() {
        this.Cb = NaN;
        this.i = g.ep(y5(this.u, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.J
            },
            timeout: 5E3,
            onSuccess: (0, g.C)(this.RM, this),
            onError: (0, g.C)(this.QM, this),
            onTimeout: (0, g.C)(this.SM, this)
        })
    };
    g.k.RM = function(a, b) {
        this.i = null;
        a = b.screen || {};
        a.dialId = this.B;
        a.name = this.I;
        b = -1;
        this.C && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.V("pairingComplete", new v4(a), b)
    };
    g.k.QM = function(a) {
        this.i = null;
        a.status && 404 == a.status ? this.l >= CMa.length ? this.V("pairingFailed", Error("DIAL polling timed out")) : (a = CMa[this.l], this.Cb = g.Yo((0, g.C)(this.rJ, this), a), this.l++) : this.V("pairingFailed", Error("Server error " + a.status))
    };
    g.k.SM = function() {
        this.i = null;
        this.V("pairingFailed", Error("Server not responding"))
    };
    var CMa = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Ua(I5, F5);
    g.k = I5.prototype;
    g.k.start = function() {
        H5(this) && this.V("screenChange");
        !g.Ju("yt-remote-lounge-token-expiration") && kLa(this);
        g.$o(this.i);
        this.i = g.Yo((0, g.C)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        H5(this);
        hLa(this, a);
        J5(this, !1);
        this.V("screenChange");
        b(a);
        a.token || kLa(this)
    };
    g.k.remove = function(a, b) {
        var c = H5(this);
        jLa(this, a) && (J5(this, !1), c = !0);
        b(a);
        c && this.V("screenChange")
    };
    g.k.Ky = function(a, b, c, d) {
        var e = H5(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, J5(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.V("screenChange")
    };
    g.k.oa = function() {
        g.$o(this.i);
        I5.oe.oa.call(this)
    };
    g.k.DO = function(a) {
        H5(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        J5(this, !b);
        b && B5(this.I, "Missed " + b + " lounge tokens.")
    };
    g.k.CO = function(a) {
        B5(this.I, "Requesting lounge tokens failed: " + a)
    };
    g.v(L5, g.O);
    g.k = L5.prototype;
    g.k.start = function() {
        var a = parseInt(g.Ju("yt-remote-fast-check-period") || "0", 10);
        (this.B = g.Ta() - 144E5 < a ? 0 : a) ? O5(this): (this.B = g.Ta() + 3E5, g.Iu("yt-remote-fast-check-period", this.B), this.HC())
    };
    g.k.isEmpty = function() {
        return g.Qb(this.i)
    };
    g.k.update = function() {
        K5("Updating availability on schedule.");
        var a = this.I(),
            b = g.Eb(this.i, function(c, d) {
                return c && !!B4(a, d)
            }, this);
        N5(this, b)
    };
    g.k.oa = function() {
        g.$o(this.u);
        this.u = NaN;
        this.l && (this.l.abort(), this.l = null);
        g.O.prototype.oa.call(this)
    };
    g.k.HC = function() {
        g.$o(this.u);
        this.u = NaN;
        this.l && this.l.abort();
        var a = mLa(this);
        if (r4(a)) {
            var b = y5(this.C, "/pairing/get_screen_availability");
            this.l = z5(this.C, b, {
                lounge_token: g.Lb(a).join(",")
            }, (0, g.C)(this.aS, this, a), (0, g.C)(this.ZR, this))
        } else N5(this, {}), O5(this)
    };
    g.k.aS = function(a, b) {
        this.l = null;
        var c = g.Lb(mLa(this));
        if (g.zb(c, g.Lb(a))) {
            b = b.screens || [];
            c = {};
            for (var d = 0, e = b.length; d < e; ++d) c[a[b[d].loungeToken]] = "online" == b[d].status;
            N5(this, c);
            O5(this)
        } else this.pe("Changing Screen set during request."), this.HC()
    };
    g.k.ZR = function(a) {
        this.pe("Screen availability failed: " + a);
        this.l = null;
        O5(this)
    };
    g.k.pe = function(a) {
        B5("OnlineScreenService", a)
    };
    g.Ua(P5, F5);
    g.k = P5.prototype;
    g.k.start = function() {
        this.l.start();
        this.i.start();
        this.screens.length && (this.V("screenChange"), this.i.isEmpty() || this.V("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.l.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.l.remove(a, b, c);
        this.i.update()
    };
    g.k.Ky = function(a, b, c, d) {
        this.l.contains(a) ? this.l.Ky(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, B5(this.I, a), d(Error(a)))
    };
    g.k.Oh = function(a) {
        return a ? this.screens : g.ob(this.screens, g.Ke(this.u, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.LE = function() {
        return g.Ke(this.Oh(!0), function(a) {
            return !!this.i.i[a.id]
        }, this)
    };
    g.k.ME = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new G5(this.B, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.ri(l);
            e(Q5(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.ri(l);
            f(m)
        });
        l.start();
        return (0, g.C)(l.stop, l)
    };
    g.k.TM = function(a, b, c, d) {
        g.ep(y5(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.C)(function(e, f) {
                e = new v4(f.screen || {});
                if (!e.name || qLa(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); qLa(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(Q5(this, e))
            }, this),
            onError: (0, g.C)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.C)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.oa = function() {
        g.ri(this.l);
        g.ri(this.i);
        P5.oe.oa.call(this)
    };
    g.k.JO = function() {
        sLa(this);
        this.V("screenChange");
        this.i.update()
    };
    P5.prototype.dispose = P5.prototype.dispose;
    g.Ua(S5, g.O);
    g.k = S5.prototype;
    g.k.getScreen = function() {
        return this.B
    };
    g.k.Vg = function(a) {
        this.Ga() || (a && U5(this, "" + a), this.B = null, this.V("sessionScreen", null))
    };
    g.k.info = function(a) {
        B5(this.Ca, a)
    };
    g.k.NE = function() {
        return null
    };
    g.k.RC = function(a) {
        var b = this.i;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.C)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.C)(function() {
            U5(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.oa = function() {
        this.RC("");
        S5.oe.oa.call(this)
    };
    g.v(V5, S5);
    g.k = V5.prototype;
    g.k.QC = function(a) {
        if (this.l) {
            if (this.l == a) return;
            U5(this, "Overriding cast session with new session object");
            BLa(this);
            this.ra = !1;
            this.W = "unknown";
            this.l.removeUpdateListener(this.Y);
            this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.va)
        }
        this.l = a;
        this.l.addUpdateListener(this.Y);
        this.l.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.va);
        xLa(this, "getMdxSessionStatus")
    };
    g.k.Br = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.vj(a))
    };
    g.k.stop = function() {
        this.l ? this.l.stop((0, g.C)(function() {
            this.Vg()
        }, this), (0, g.C)(function() {
            this.Vg(Error("Failed to stop receiver app."))
        }, this)) : this.Vg(Error("Stopping cast device without session."))
    };
    g.k.RC = function() {};
    g.k.oa = function() {
        this.info("disposeInternal");
        BLa(this);
        this.l && (this.l.removeUpdateListener(this.Y), this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.va));
        this.l = null;
        S5.prototype.oa.call(this)
    };
    g.k.MS = function(a, b) {
        if (!this.Ga())
            if (b)
                if (b = P4(b), g.Oa(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.vj(b)), a) {
                    case "mdxSessionStatus":
                        vLa(this, b);
                        break;
                    case "loungeToken":
                        yLa(this, b);
                        break;
                    default:
                        U5(this, "Unknown youtube message: " + a)
                } else U5(this, "Unable to parse message.");
                else U5(this, "No data in message.")
    };
    g.k.VG = function(a, b, c, d) {
        g.$o(this.L);
        this.L = 0;
        pLa(this.u, this.i.label, a, this.i.friendlyName, (0, g.C)(function(e) {
            e ? b(e) : 0 <= d ? (U5(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.L = g.Yo((0, g.C)(this.VG, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.NE = function() {
        return this.l
    };
    g.k.UM = function(a) {
        this.Ga() || a || (U5(this, "Cast session died."), this.Vg())
    };
    g.v(Y5, S5);
    g.k = Y5.prototype;
    g.k.QC = function(a) {
        this.l = a;
        this.l.addUpdateListener(this.Aa)
    };
    g.k.Br = function(a) {
        this.Ea = a;
        this.X()
    };
    g.k.stop = function() {
        ILa(this);
        this.l ? this.l.stop((0, g.C)(this.Vg, this, null), (0, g.C)(this.Vg, this, "Failed to stop DIAL device.")) : this.Vg()
    };
    g.k.oa = function() {
        ILa(this);
        this.l && this.l.removeUpdateListener(this.Aa);
        this.l = null;
        S5.prototype.oa.call(this)
    };
    g.k.VM = function(a) {
        this.Ga() || a || (U5(this, "DIAL session died."), this.C(), this.C = g.Ka, this.Vg())
    };
    g.v(b6, S5);
    b6.prototype.stop = function() {
        this.Vg()
    };
    b6.prototype.QC = function() {};
    b6.prototype.Br = function() {
        g.$o(this.l);
        this.l = NaN;
        var a = B4(this.u.Oh(), this.i.label);
        a ? T5(this, a) : this.Vg(Error("No such screen"))
    };
    b6.prototype.oa = function() {
        g.$o(this.l);
        this.l = NaN;
        S5.prototype.oa.call(this)
    };
    g.v(c6, g.O);
    g.k = c6.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.L);
        this.W || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.C)(this.KR, this);
        c = new chrome.cast.ApiConfig(c, (0, g.C)(this.bJ, this), e, d, a);
        c.customDialLaunchCallback = (0, g.C)(this.xQ, this);
        chrome.cast.initialize(c, (0, g.C)(function() {
            this.Ga() ||
                (chrome.cast.addReceiverActionListener(this.I), dLa(), this.l.subscribe("onlineScreenChange", (0, g.C)(this.OE, this)), this.u = KLa(this), chrome.cast.setCustomReceivers(this.u, g.Ka, (0, g.C)(function(f) {
                    this.pe("Failed to set initial custom receivers: " + g.vj(f))
                }, this)), this.V("yt-remote-cast2-availability-change", e6(this)), b(!0))
        }, this), (0, g.C)(function(f) {
            this.pe("Failed to initialize API: " + g.vj(f));
            b(!1)
        }, this))
    };
    g.k.sT = function(a, b) {
        d6("Setting connected screen ID: " + a + " -> " + b);
        if (this.i) {
            var c = this.i.getScreen();
            if (!a || c && c.id != a) d6("Unsetting old screen status: " + this.i.i.friendlyName), f6(this, null)
        }
        if (a && b) {
            if (!this.i) {
                c = B4(this.l.Oh(), a);
                if (!c) {
                    d6("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    d6("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = JLa(this, c);
                a || (d6("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.u.push(a), chrome.cast.setCustomReceivers(this.u, g.Ka, (0, g.C)(function(d) {
                    this.pe("Failed to set initial custom receivers: " + g.vj(d))
                }, this)));
                d6("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                f6(this, new b6(this.l, a), !0)
            }
            this.i.RC(b)
        } else d6("setConnectedScreenStatus: no screen.")
    };
    g.k.tT = function(a) {
        this.Ga() ? this.pe("Setting connection data on disposed cast v2") : this.i ? this.i.Br(a) : this.pe("Setting connection data without a session")
    };
    g.k.XM = function() {
        this.Ga() ? this.pe("Stopping session on disposed cast v2") : this.i ? (this.i.stop(), f6(this, null)) : d6("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.C)(this.bJ, this), (0, g.C)(this.dS, this))
    };
    g.k.oa = function() {
        this.l.unsubscribe("onlineScreenChange", (0, g.C)(this.OE, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.I);
        var a = aLa,
            b = g.Ja("yt.mdx.remote.debug.handlers_");
        g.lb(b || [], a);
        g.ri(this.i);
        g.O.prototype.oa.call(this)
    };
    g.k.pe = function(a) {
        B5("Controller", a)
    };
    g.k.dJ = function(a, b) {
        this.i == a && (b || f6(this, null), this.V("yt-remote-cast2-session-change", b))
    };
    g.k.HR = function(a, b) {
        if (!this.Ga())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), d6("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.i)
                        if (this.i.i.label != a.label) d6("onReceiverAction_: Stopping active receiver: " + this.i.i.friendlyName), this.i.stop();
                        else {
                            d6("onReceiverAction_: Casting to active receiver.");
                            this.i.getScreen() && this.V("yt-remote-cast2-session-change", this.i.getScreen());
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            f6(this,
                                new b6(this.l, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            f6(this, new Y5(this.l, a, this.C, this.B));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            f6(this, new V5(this.l, a, this.B));
                            break;
                        default:
                            this.pe("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.i && this.i.i.label == a.label ? this.i.stop() : this.pe("Stopping receiver w/o session: " + a.friendlyName)
            } else this.pe("onReceiverAction_ called without receiver.")
    };
    g.k.xQ = function(a) {
        if (this.Ga()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.pe("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.i ? this.i.i : null;
        if (!c || c.label != b.label) return this.pe("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.i.getScreen()) return d6("Reselecting dial screen."),
                this.V("yt-remote-cast2-session-change", this.i.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.pe('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            f6(this, new Y5(this.l, b, this.C, this.B))
        }
        b = this.i;
        b.L = a;
        b.L.appState == chrome.cast.DialAppState.RUNNING ? (a = b.L.extraData || {}, c = a.screenId || null, Z5(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = FLa(b, {
            name: b.i.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.L.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.Do(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = GLa(b, c)) : a = GLa(b, c)) : a = a6(b);
        return a
    };
    g.k.bJ = function(a) {
        if (!this.Ga()) {
            d6("New cast session ID: " + a.sessionId);
            var b = a.receiver;
            if (b.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.i)
                    if (b.receiverType == chrome.cast.ReceiverType.CAST) d6("Got resumed cast session before resumed mdx connection."), b.friendlyName = chrome.cast.unescape(b.friendlyName), f6(this, new V5(this.l, b, this.B), !0);
                    else {
                        this.pe("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var c = this.i.i,
                    d = B4(this.l.Oh(), c.label);
                d && w4(d, b.label) &&
                    c.receiverType != chrome.cast.ReceiverType.CAST && b.receiverType == chrome.cast.ReceiverType.CAST && (d6("onSessionEstablished_: manual to cast session change " + b.friendlyName), g.ri(this.i), this.i = new V5(this.l, b, this.B), this.i.subscribe("sessionScreen", (0, g.C)(this.dJ, this, this.i)), this.i.Br(null));
                this.i.QC(a)
            }
        }
    };
    g.k.WM = function() {
        return this.i ? this.i.NE() : null
    };
    g.k.dS = function(a) {
        this.Ga() || (this.pe("Failed to estabilish a session: " + g.vj(a)), a.code != chrome.cast.ErrorCode.CANCEL && f6(this, null))
    };
    g.k.KR = function(a) {
        d6("Receiver availability updated: " + a);
        if (!this.Ga()) {
            var b = e6(this);
            this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            e6(this) != b && this.V("yt-remote-cast2-availability-change", e6(this))
        }
    };
    g.k.OE = function() {
        this.Ga() || (this.u = KLa(this), d6("Updating custom receivers: " + g.vj(this.u)), chrome.cast.setCustomReceivers(this.u, g.Ka, (0, g.C)(function() {
            this.pe("Failed to set custom receivers.")
        }, this)), this.V("yt-remote-cast2-availability-change", e6(this)))
    };
    c6.prototype.setLaunchParams = c6.prototype.tT;
    c6.prototype.setConnectedScreenStatus = c6.prototype.sT;
    c6.prototype.stopSession = c6.prototype.XM;
    c6.prototype.getCastSession = c6.prototype.WM;
    c6.prototype.requestSession = c6.prototype.requestSession;
    c6.prototype.init = c6.prototype.init;
    c6.prototype.dispose = c6.prototype.dispose;
    var l6 = [];
    g.k = q6.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        r6(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Fk = a.hasPrevious, this.hasNext = a.hasNext, this.J = a.playerTime, this.I = a.playerTimeAt, this.B = a.seekableStart, this.i = a.seekableEnd, this.C = a.duration, this.L = a.loadedTime, this.u = a.liveIngestionTime, this.l = !isNaN(this.u))
    };
    g.k.uc = function() {
        return 1 == this.playerState
    };
    g.k.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    g.k.getDuration = function() {
        return this.l ? this.C + s6(this) : this.C
    };
    g.k.clone = function() {
        return new q6(w6(this))
    };
    g.v(y6, g.O);
    g.k = y6.prototype;
    g.k.getState = function() {
        return this.bb
    };
    g.k.play = function() {
        A6(this) ? (this.i ? this.i.play(null, g.Ka, F6(this, "play")) : E6(this, "play"), D6(this, 1, u6(z6(this))), this.V("remotePlayerChange")) : B6(this, this.play)
    };
    g.k.pause = function() {
        A6(this) ? (this.i ? this.i.pause(null, g.Ka, F6(this, "pause")) : E6(this, "pause"), D6(this, 2, u6(z6(this))), this.V("remotePlayerChange")) : B6(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (A6(this)) {
            if (this.i) {
                var b = z6(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.uc() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.i.seek(c, g.Ka, F6(this, "seekTo", {
                    newTime: a
                }))
            } else E6(this, "seekTo", {
                newTime: a
            });
            D6(this, 3, a);
            this.V("remotePlayerChange")
        } else B6(this, g.Ra(this.seekTo, a))
    };
    g.k.stop = function() {
        if (A6(this)) {
            this.i ? this.i.stop(null, g.Ka, F6(this, "stopVideo")) : E6(this, "stopVideo");
            var a = z6(this);
            a.index = -1;
            a.videoId = "";
            r6(a);
            C6(this, a);
            this.V("remotePlayerChange")
        } else B6(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (A6(this)) {
            var c = z6(this);
            if (this.l) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.l.setReceiverVolumeLevel(d, (0, g.C)(function() {
                        B5("CP", "set receiver volume: " + d)
                    }, this), (0, g.C)(function() {
                        this.pe("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.l.setReceiverMuted(b, (0, g.C)(function() {
                    B5("CP", "set receiver muted: " + b)
                }, this), (0, g.C)(function() {
                    this.pe("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                E6(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            C6(this, c)
        } else B6(this, g.Ra(this.setVolume, a, b))
    };
    g.k.PE = function(a, b) {
        if (A6(this)) {
            var c = z6(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.vj(b.style), g.Yb(a, c.trackData));
            E6(this, "setSubtitlesTrack", a);
            C6(this, c)
        } else B6(this, g.Ra(this.PE, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        A6(this) ? (b = b.getLanguageInfo().getId(), E6(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = z6(this), a.audioTrackId = b, C6(this, a)) : B6(this, g.Ra(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        var l = z6(this);
        c = c || 0;
        var m = {
            videoId: a,
            currentIndex: c
        };
        v6(l, a, c);
        void 0 !== b && (t6(l, b), m.currentTime = b);
        void 0 !== d && (m.listId = d);
        null != e && (m.playerParams = e);
        null != f && (m.clickTrackingParams = f);
        null != h && (m.locationInfo = g.vj(h));
        E6(this, "setPlaylist", m);
        d || C6(this, l)
    };
    g.k.Qx = function(a, b) {
        if (A6(this)) {
            if (a && b) {
                var c = z6(this);
                v6(c, a, b);
                C6(this, c)
            }
            E6(this, "previous")
        } else B6(this, g.Ra(this.Qx, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (A6(this)) {
            if (a && b) {
                var c = z6(this);
                v6(c, a, b);
                C6(this, c)
            }
            E6(this, "next")
        } else B6(this, g.Ra(this.nextVideo, a, b))
    };
    g.k.pG = function() {
        A6(this) ? E6(this, "dismissAutoplay") : B6(this, this.pG)
    };
    g.k.dispose = function() {
        if (3 != this.bb) {
            var a = this.bb;
            this.bb = 3;
            this.V("proxyStateChange", a, this.bb)
        }
        g.O.prototype.dispose.call(this)
    };
    g.k.oa = function() {
        WLa(this);
        this.u = null;
        this.B.clear();
        x6(this, null);
        g.O.prototype.oa.call(this)
    };
    g.k.TC = function(a) {
        if ((a != this.bb || 2 == a) && 3 != this.bb && 0 != a) {
            var b = this.bb;
            this.bb = a;
            this.V("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.B.isEmpty();) b = a = this.B, g.ib(b.i) && (b.i = b.l, b.i.reverse(), b.l = []), a.i.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.ER = function(a, b) {
        this.V(a, b)
    };
    g.k.jQ = function(a) {
        if (!a) this.wu(null), x6(this, null);
        else if (this.l.receiver.volume) {
            a = this.l.receiver.volume;
            var b = z6(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) B5("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, C6(this, b)
        }
    };
    g.k.wu = function(a) {
        B5("CP", "Cast media: " + !!a);
        this.i && this.i.removeUpdateListener(this.J);
        if (this.i = a) this.i.addUpdateListener(this.J), XLa(this), this.V("remotePlayerChange")
    };
    g.k.iQ = function(a) {
        a ? (XLa(this), this.V("remotePlayerChange")) : this.wu(null)
    };
    g.k.mD = function() {
        E6(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.qQ = function() {
        var a = TLa();
        a && x6(this, a)
    };
    g.k.pe = function(a) {
        B5("CP", a)
    };
    g.v(G6, g.O);
    g.k = G6.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.playerParams,
                f = b.clickTrackingParams,
                h = b.index,
                l = {
                    videoId: d
                },
                m = b.currentTime;
            b = b.locationInfo;
            void 0 !== m && (l.currentTime = 5 >= m ? 0 : m);
            e && (l.playerParams = e);
            b && (l.locationInfo = b);
            f && (l.clickTrackingParams = f);
            c && (l.listId = c);
            void 0 !== h && (l.currentIndex = h);
            c && (this.fc.listId = c);
            this.fc.videoId = d;
            this.fc.index = h || 0;
            this.fc.state = 3;
            t6(this.fc, m);
            this.B = "UNSUPPORTED";
            H6("Connecting with setPlaylist and params: " + g.vj(l));
            this.i.connect({
                method: "setPlaylist",
                params: g.vj(l)
            }, a, WJa())
        } else H6("Connecting without params"), this.i.connect({}, a, WJa());
        ZLa(this)
    };
    g.k.ly = function(a) {
        this.i.ly(a)
    };
    g.k.dispose = function() {
        this.Ga() || (this.V("beforeDispose"), I6(this, 3));
        g.O.prototype.dispose.call(this)
    };
    g.k.oa = function() {
        J6(this);
        L6(this);
        K6(this);
        g.$o(this.J);
        this.J = NaN;
        g.$o(this.L);
        this.L = NaN;
        this.u = null;
        g.Ep(this.W);
        this.W.length = 0;
        this.i.dispose();
        g.O.prototype.oa.call(this);
        this.B = this.I = this.l = this.fc = this.i = null
    };
    g.k.zO = function() {
        this.Rq(2)
    };
    g.k.nQ = function() {
        H6("Channel opened");
        this.ra && (this.ra = !1, K6(this), this.Y = g.Yo((0, g.C)(function() {
            H6("Timing out waiting for a screen.");
            this.Rq(1)
        }, this), 15E3));
        $Ja(ZKa(this.i), this.Aa)
    };
    g.k.kQ = function() {
        H6("Channel closed");
        isNaN(this.C) ? G4(!0) : G4();
        this.dispose()
    };
    g.k.lQ = function(a, b) {
        G4();
        isNaN(this.Mt()) ? (b && "shortLived" == this.va && this.V("browserChannelAuthError", a), H6("Channel error: " + a + " without reconnection"), this.dispose()) : (this.ra = !0, H6("Channel error: " + a + " with reconnection in " + this.Mt() + " ms"), I6(this, 2))
    };
    g.k.mQ = function(a) {
        a.params ? H6("Received: action=" + a.action + ", params=" + g.vj(a.params)) : H6("Received: action=" + a.action + " {}");
        switch (a.action) {
            case "loungeStatus":
                a = P4(a.params.devices);
                this.l = g.Pc(a, function(c) {
                    return new u4(c)
                });
                a = !!g.db(this.l, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                bMa(this, a);
                break;
            case "loungeScreenDisconnected":
                g.nb(this.l, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                bMa(this, !1);
                break;
            case "remoteConnected":
                var b = new u4(P4(a.params.device));
                g.db(this.l, function(c) {
                    return b ? c.id == b.id : !1
                }) || GJa(this.l, b);
                break;
            case "remoteDisconnected":
                b = new u4(P4(a.params.device));
                g.nb(this.l, function(c) {
                    return b ? c.id == b.id : !1
                });
                break;
            case "gracefulDisconnect":
                break;
            case "playlistModified":
                dMa(this, a);
                break;
            case "nowPlaying":
                fMa(this, a);
                break;
            case "onStateChange":
                eMa(this, a);
                break;
            case "onAdStateChange":
                gMa(this, a);
                break;
            case "onVolumeChanged":
                hMa(this, a);
                break;
            case "onSubtitlesTrackChanged":
                cMa(this, a);
                break;
            case "nowAutoplaying":
                iMa(this, a);
                break;
            case "autoplayDismissed":
                this.V("autoplayDismissed");
                break;
            case "autoplayUpNext":
                this.I = a.params.videoId || null;
                this.V("autoplayUpNext", this.I);
                break;
            case "onAutoplayModeChanged":
                this.B =
                    a.params.autoplayMode;
                this.V("autoplayModeChange", this.B);
                "DISABLED" == this.B && this.V("autoplayDismissed");
                break;
            case "onHasPreviousNextChanged":
                jMa(this, a);
                break;
            case "requestAssistedSignIn":
                this.V("assistedSignInRequested", a.params.authCode);
                break;
            default:
                H6("Unrecognized action: " + a.action)
        }
    };
    g.k.jT = function() {
        if (this.u) {
            var a = this.u;
            this.u = null;
            this.fc.videoId != a && M6(this, "getNowPlaying")
        }
    };
    g.k.uO = function() {
        var a = 3;
        this.Ga() || (a = 0, isNaN(this.Mt()) ? w5(this.i) && isNaN(this.C) && (a = 1) : a = 2);
        return a
    };
    g.k.Rq = function(a) {
        H6("Disconnecting with " + a);
        J6(this);
        this.V("beforeDisconnect", a);
        1 == a && G4();
        $Ka(this.i, a);
        this.dispose()
    };
    g.k.sO = function() {
        var a = this.fc;
        this.u && (a = this.fc.clone(), v6(a, this.u, a.index));
        return w6(a)
    };
    g.k.uT = function(a) {
        var b = new q6(a);
        b.videoId && b.videoId != this.fc.videoId && (this.u = b.videoId, g.$o(this.J), this.J = g.Yo((0, g.C)(this.jT, this), 5E3));
        var c = [];
        this.fc.listId == b.listId && this.fc.videoId == b.videoId && this.fc.index == b.index || c.push("remoteQueueChange");
        this.fc.playerState == b.playerState && this.fc.volume == b.volume && this.fc.muted == b.muted && u6(this.fc) == u6(b) && g.vj(this.fc.trackData) == g.vj(b.trackData) || c.push("remotePlayerChange");
        this.fc.reset(a);
        g.Bb(c, function(d) {
            this.V(d)
        }, this)
    };
    g.k.UG = function() {
        var a = this.i.I.id,
            b = g.db(this.l, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.Mt = function() {
        var a = this.i;
        return a.l.isActive() ? a.l.l - g.Ta() : NaN
    };
    g.k.qO = function() {
        return this.B || "UNSUPPORTED"
    };
    g.k.rO = function() {
        return this.I || ""
    };
    g.k.YM = function() {
        if (!isNaN(this.Mt())) {
            var a = this.i.l;
            a.i.lh();
            a.start()
        }
    };
    g.k.rT = function(a, b) {
        M6(this, a, b);
        aMa(this)
    };
    g.k.QE = function() {
        var a = g.oo("SID", "") || "",
            b = g.oo("SAPISID", "") || "",
            c = g.oo("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.qf(g.Ue(a), 2);
        b = g.qf(g.Ue(b), 2);
        c = g.qf(g.Ue(c), 2);
        return g.qf(g.Ue(a + "," + b + "," + c), 2)
    };
    G6.prototype.subscribe = G6.prototype.subscribe;
    G6.prototype.unsubscribeByKey = G6.prototype.Ig;
    G6.prototype.getProxyState = G6.prototype.uO;
    G6.prototype.disconnect = G6.prototype.Rq;
    G6.prototype.getPlayerContextData = G6.prototype.sO;
    G6.prototype.setPlayerContextData = G6.prototype.uT;
    G6.prototype.getOtherConnectedRemoteId = G6.prototype.UG;
    G6.prototype.getReconnectTimeout = G6.prototype.Mt;
    G6.prototype.getAutoplayMode = G6.prototype.qO;
    G6.prototype.getAutoplayVideoId = G6.prototype.rO;
    G6.prototype.reconnect = G6.prototype.YM;
    G6.prototype.sendMessage = G6.prototype.rT;
    G6.prototype.getXsrfToken = G6.prototype.QE;
    g.v(N6, F5);
    g.k = N6.prototype;
    g.k.Oh = function(a) {
        return this.yg.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.yg.$_c(a)
    };
    g.k.get = function(a) {
        return this.yg.$_g(a)
    };
    g.k.start = function() {
        this.yg.$_st()
    };
    g.k.add = function(a, b, c) {
        this.yg.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.yg.$_r(a, b, c)
    };
    g.k.Ky = function(a, b, c, d) {
        this.yg.$_un(a, b, c, d)
    };
    g.k.oa = function() {
        for (var a = 0, b = this.i.length; a < b; ++a) this.yg.$_ubk(this.i[a]);
        this.i.length = 0;
        this.yg = null;
        F5.prototype.oa.call(this)
    };
    g.k.ZM = function() {
        this.V("screenChange")
    };
    g.k.lR = function() {
        this.V("onlineScreenChange")
    };
    P5.prototype.$_st = P5.prototype.start;
    P5.prototype.$_gspc = P5.prototype.TM;
    P5.prototype.$_gsppc = P5.prototype.ME;
    P5.prototype.$_c = P5.prototype.contains;
    P5.prototype.$_g = P5.prototype.get;
    P5.prototype.$_a = P5.prototype.add;
    P5.prototype.$_un = P5.prototype.Ky;
    P5.prototype.$_r = P5.prototype.remove;
    P5.prototype.$_gs = P5.prototype.Oh;
    P5.prototype.$_gos = P5.prototype.LE;
    P5.prototype.$_s = P5.prototype.subscribe;
    P5.prototype.$_ubk = P5.prototype.Ig;
    var $6 = null,
        f7 = !1,
        O6 = null,
        P6 = null,
        e7 = null,
        T6 = [];
    g.v(g7, g.F);
    g.k = g7.prototype;
    g.k.oa = function() {
        g.F.prototype.oa.call(this);
        this.i.stop();
        this.u.stop();
        this.L.stop();
        this.Y();
        var a = this.Ob;
        a.unsubscribe("proxyStateChange", this.ZI, this);
        a.unsubscribe("remotePlayerChange", this.Cu, this);
        a.unsubscribe("remoteQueueChange", this.Nx, this);
        a.unsubscribe("previousNextChange", this.WI, this);
        a.unsubscribe("nowAutoplaying", this.QI, this);
        a.unsubscribe("autoplayDismissed", this.mI, this);
        this.Ob = this.l = null
    };
    g.k.RE = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (2 != this.Ob.bb)
            if (h7(this)) {
                if (!z6(this.Ob).isAdPlaying() || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        z6(this.Ob).uc() ? this.Ob.pause() : this.Ob.play();
                        break;
                    case "control_play":
                        this.Ob.play();
                        break;
                    case "control_pause":
                        this.Ob.pause();
                        break;
                    case "control_seek":
                        this.J.lh(c[0], c[1]);
                        break;
                    case "control_subtitles_set_track":
                        i7(this, c[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(c[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    c =
                        this.G.getCurrentTime();
                    j7(this, 0 === c ? void 0 : c);
                    break;
                case "control_seek":
                    j7(this, c[0]);
                    break;
                case "control_subtitles_set_track":
                    i7(this, c[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(c[0])
            }
    };
    g.k.gQ = function(a) {
        this.L.lh(a)
    };
    g.k.ZT = function(a) {
        this.RE("control_subtitles_set_track", g.Qb(a) ? null : a)
    };
    g.k.jK = function() {
        var a = this.G.getOption("captions", "track");
        g.Qb(a) || i7(this, a)
    };
    g.k.Sb = function(a) {
        this.l.Sb(a, this.G.getVideoData().lengthSeconds)
    };
    g.k.UQ = function() {
        g.Qb(this.B) || uMa(this, this.B);
        this.C = !1
    };
    g.k.ZI = function(a, b) {
        this.u.stop();
        2 === b && this.eK()
    };
    g.k.Cu = function() {
        if (h7(this)) {
            this.i.stop();
            var a = z6(this.Ob);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.l.zf = 1;
                    break;
                case 1082:
                case 1083:
                    this.l.zf = 0;
                    break;
                default:
                    this.l.zf = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Lb(new g.OI(8));
                    this.dK();
                    break;
                case 1085:
                case 3:
                    this.Lb(new g.OI(9));
                    break;
                case 1083:
                case 0:
                    this.Lb(new g.OI(2));
                    this.J.stop();
                    this.Sb(this.G.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Lb(new g.OI(4));
                    break;
                case 2:
                    this.Lb(new g.OI(4));
                    this.Sb(u6(a));
                    break;
                case -1:
                    this.Lb(new g.OI(64));
                    break;
                case -1E3:
                    this.Lb(new g.OI(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback."
                    }))
            }
            a = z6(this.Ob).trackData;
            var b = this.B;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.B = a, uMa(this, a));
            a = z6(this.Ob); - 1 === a.volume || Math.round(this.G.getVolume()) === a.volume && this.G.isMuted() === a.muted || this.W.isActive() || this.EK()
        } else tMa(this)
    };
    g.k.WI = function() {
        this.G.V("mdxpreviousnextchange")
    };
    g.k.Nx = function() {
        h7(this) || tMa(this)
    };
    g.k.QI = function(a) {
        isNaN(a) || this.G.V("mdxnowautoplaying", a)
    };
    g.k.mI = function() {
        this.G.V("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        h7(this) && this.Ob.setAudioTrack(this.G.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === z6(this.Ob).playerState ? j7(this, a) : b && this.Ob.seekTo(a)
    };
    g.k.EK = function() {
        var a = this;
        if (h7(this)) {
            var b = z6(this.Ob);
            this.events.hc(this.X);
            b.muted ? this.G.mute() : this.G.unMute();
            this.G.setVolume(b.volume);
            this.X = this.events.N(this.G, "onVolumeChange", function(c) {
                sMa(a, c)
            })
        }
    };
    g.k.dK = function() {
        this.i.stop();
        if (!this.Ob.Ga()) {
            var a = z6(this.Ob);
            a.uc() && this.Lb(new g.OI(8));
            this.Sb(u6(a));
            this.i.start()
        }
    };
    g.k.eK = function() {
        this.u.stop();
        this.i.stop();
        var a = this.Ob.u.getReconnectTimeout();
        2 == this.Ob.bb && !isNaN(a) && this.u.start()
    };
    g.k.Lb = function(a) {
        this.u.stop();
        var b = this.I;
        if (!g.TI(b, a)) {
            var c = g.U(a, 2);
            c !== g.U(this.I, 2) && this.G.Kp(c);
            this.I = a;
            wMa(this.l, b, a)
        }
    };
    g.v(k7, g.V);
    k7.prototype.bd = function() {
        this.i.show()
    };
    k7.prototype.Db = function() {
        this.i.hide()
    };
    k7.prototype.l = function() {
        g.uI("https://support.google.com/youtube/answer/7640706")
    };
    k7.prototype.u = function() {
        t4("mdx-manual-pairing-popup-ok");
        this.Db()
    };
    g.v(l7, g.V);
    l7.prototype.bd = function() {
        this.i.show()
    };
    l7.prototype.Db = function() {
        this.i.hide()
    };
    l7.prototype.l = function() {
        t4("mdx-privacy-popup-cancel");
        this.Db()
    };
    l7.prototype.u = function() {
        t4("mdx-privacy-popup-confirm");
        this.Db()
    };
    g.v(m7, g.V);
    m7.prototype.l = function(a) {
        vMa(this, a.state)
    };
    g.v(n7, g.EO);
    n7.prototype.C = function() {
        var a = this.G.getOption("remote", "receivers");
        a && 1 < a.length && !this.G.getOption("remote", "quickCast") ? (this.In = g.Cb(a, this.i, this), g.FO(this, g.Pc(a, this.i)), a = this.G.getOption("remote", "currentReceiver"), a = this.i(a), this.options[a] && this.ci(a), this.enable(!0)) : this.enable(!1)
    };
    n7.prototype.i = function(a) {
        return a.key
    };
    n7.prototype.cj = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.In[a].name
    };
    n7.prototype.Hf = function(a) {
        g.EO.prototype.Hf.call(this, a);
        this.G.setOption("remote", "currentReceiver", this.In[a]);
        this.xb.Db()
    };
    g.v(o7, g.TL);
    g.k = o7.prototype;
    g.k.create = function() {
        var a = this.player.T(),
            b = g.RD(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: g.S(a.experiments, "mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: g.S(a.experiments, "enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: g.S(a.experiments, "enable_cast_short_lived_lounge_token")
        };
        nMa(b, a);
        this.subscriptions.push(g.Bq("yt-remote-before-disconnect", this.fQ, this));
        this.subscriptions.push(g.Bq("yt-remote-connection-change", this.LR, this));
        this.subscriptions.push(g.Bq("yt-remote-receiver-availability-change",
            this.YI, this));
        this.subscriptions.push(g.Bq("yt-remote-auto-connect", this.JR, this));
        this.subscriptions.push(g.Bq("yt-remote-receiver-resumed", this.IR, this));
        this.subscriptions.push(g.Bq("mdx-privacy-popup-confirm", this.bT, this));
        this.subscriptions.push(g.Bq("mdx-privacy-popup-cancel", this.aT, this));
        this.subscriptions.push(g.Bq("mdx-manual-pairing-popup-ok", this.qP, this));
        this.YI()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.TL.prototype.load.call(this);
        this.ji = new g7(this, this.player, this.Ob);
        var a = (a = rMa()) ? a.currentTime : 0;
        var b = d7() ? new y6(Y6(), void 0) : null;
        0 == a && b && (a = u6(z6(b)));
        0 !== a && this.Sb(a);
        wMa(this, this.pd, this.pd);
        this.player.Tk(6)
    };
    g.k.unload = function() {
        this.player.V("mdxautoplaycanceled");
        this.Km = this.uj;
        g.wi(this.ji, this.Ob);
        this.Ob = this.ji = null;
        g.TL.prototype.unload.call(this);
        this.player.Tk(5);
        p7(this)
    };
    g.k.oa = function() {
        g.Cq(this.subscriptions);
        g.TL.prototype.oa.call(this)
    };
    g.k.Qk = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.loaded && this.ji.RE.apply(this.ji, [a].concat(g.ma(c)))
    };
    g.k.getAdState = function() {
        return this.zf
    };
    g.k.vO = function() {
        return this.loaded ? this.ji.suggestion : null
    };
    g.k.Fk = function() {
        return this.Ob ? z6(this.Ob).Fk : !1
    };
    g.k.hasNext = function() {
        return this.Ob ? z6(this.Ob).hasNext : !1
    };
    g.k.Sb = function(a, b) {
        this.IH = a || 0;
        this.player.V("progresssync", a, b)
    };
    g.k.getCurrentTime = function() {
        return this.IH
    };
    g.k.getProgressState = function() {
        var a = z6(this.Ob),
            b = this.player.getVideoData();
        return {
            allowSeeking: g.S(this.player.T().experiments, "web_player_mdx_allow_seeking_change_killswitch") ? this.player.yf() : !a.isAdPlaying() && this.player.yf(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.l ? a.u + s6(a) : a.u,
            isAtLiveHead: 1 >= (a.l ? a.i + s6(a) : a.i) - this.getCurrentTime(),
            loaded: a.L,
            seekableEnd: a.l ? a.i + s6(a) : a.i,
            seekableStart: 0 < a.B ? a.B +
                s6(a) : a.B
        }
    };
    g.k.nextVideo = function() {
        this.Ob && this.Ob.nextVideo()
    };
    g.k.Qx = function() {
        this.Ob && this.Ob.Qx()
    };
    g.k.fQ = function(a) {
        1 === a && (this.vC = this.Ob ? z6(this.Ob) : null)
    };
    g.k.LR = function() {
        var a = d7() ? new y6(Y6(), void 0) : null;
        if (a) {
            var b = this.Km;
            this.loaded && this.unload();
            this.Ob = a;
            this.vC = null;
            b.key !== this.uj.key && (this.Km = b, this.load())
        } else g.ri(this.Ob), this.Ob = null, this.loaded && (this.unload(), (a = this.vC) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, u6(a)));
        this.player.V("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.YI = function() {
        var a = [this.uj],
            b = a.concat,
            c = oMa();
        m6() && g.Ju("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.In = b.call(a, c);
        a = Z6() || this.uj;
        q7(this, a);
        this.player.Ka("onMdxReceiversChange")
    };
    g.k.JR = function() {
        var a = Z6();
        q7(this, a)
    };
    g.k.IR = function() {
        this.Km = Z6()
    };
    g.k.bT = function() {
        this.Gu = !0;
        p7(this);
        f7 = !1;
        $6 && b7($6, 1);
        $6 = null
    };
    g.k.aT = function() {
        this.Gu = !1;
        p7(this);
        q7(this, this.uj);
        this.Km = this.uj;
        f7 = !1;
        $6 = null;
        this.player.playVideo()
    };
    g.k.qP = function() {
        this.ox = !0;
        p7(this);
        g.Iu("yt-remote-manual-pairing-warning-shown", !0, 2592E3);
        f7 = !1;
        $6 && b7($6, 1);
        $6 = null
    };
    g.k.uf = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.In;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? o6() : q7(this, b)), this.loaded ? this.Km : this.uj;
            case "quickCast":
                return 2 === this.In.length && "cast-selector-receiver" === this.In[1].key ? (b && o6(), !0) : !1
        }
    };
    g.k.mD = function() {
        this.Ob.mD()
    };
    g.k.Ti = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.ZL.remote = o7;
})(_yt_player);