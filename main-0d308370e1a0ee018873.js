!function (e) {
    function t(t) {
        for (var l, r, o = t[0], c = t[1], d = t[2], u = 0, p = []; u < o.length; u++)
            r = o[u], Object.prototype.hasOwnProperty.call(i, r) && i[r] && p.push(i[r][0]), i[r] = 0;
        for (l in c)
            Object.prototype.hasOwnProperty.call(c, l) && (e[l] = c[l]);
        for (s && s(t); p.length; )
            p.shift()();
        return n.push.apply(n, d || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < n.length; t++) {
            for (var a = n[t], l = !0, o = 1; o < a.length; o++) {
                var c = a[o];
                0 !== i[c] && (l = !1)
            }
            l && (n.splice(t--, 1), e = r(r.s = a[0]))
        }
        return e
    }
    var l = {},
    i = {
        main: 0
    },
    n = [];
    function r(t) {
        if (l[t])
            return l[t].exports;
        var a = l[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, r),
        a.l = !0,
        a.exports
    }
    r.m = e,
    r.c = l,
    r.d = function (e, t, a) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    },
    r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var l in e)
                r.d(a, l, function (t) {
                    return e[t]
                }
                    .bind(null, l));
        return a
    },
    r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        }
         : function () {
            return e
        };
        return r.d(t, "a", t),
        t
    },
    r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    r.p = "";
    var o = window.webpackJsonp = window.webpackJsonp || [],
    c = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var d = 0; d < o.length; d++)
        t(o[d]);
    var s = c;
    n.push([67, "vendor"]),
    a()
}
({
    133: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var l = t[a];
                    l.enumerable = l.enumerable || !1,
                    l.configurable = !0,
                    "value" in l && (l.writable = !0),
                    Object.defineProperty(e, l.key, l)
                }
            }
            return function (t, a, l) {
                return a && e(t.prototype, a),
                l && e(t, l),
                t
            }
        }
        (),
        i = c(a(1)),
        n = c(a(134)),
        r = c(a(142)),
        o = c(a(147));
        function c(e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }
        var d = function (e) {
            function t(e) {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                (this, t);
                var a = function (e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }
                (this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.updateChapter = function (e) { // chapter setting
                    var t = a.state.layer;
                    "hotspots" === e && (t = "BDI_inform_risk"),
                    "conflict" === e && (t = "BDI_conflict_UCDP_pol"),
                    "climate_current" === e && (t = "BDI_climate_cdd"),
                    "climate_projections" === e && (t = "BDI_climate_cdd_proj"),
                    "vulnerability" === e && (t = "BDI_inform_vuln"),
                    "lack_of_coping_capacity" === e && (t = "BDI_inform_lack"),
                    "hazard_exposure" === e && (t = "BDI_inform_he"),
                    "hazard_projections_2030_rcp45" === e && (t = "BDI_inform_he_proj_30_rcp45"),
                    "hazard_projections_2030_rcp85" === e && (t = "BDI_inform_he_proj_30_rcp85"),
                    "hazard_projections_2050_rcp45" === e && (t = "BDI_inform_he_proj_50_rcp45"),
                    "hazard_projections_2050_rcp85" === e && (t = "BDI_inform_he_proj_50_rcp85"),
                    a.setState({
                        chapterName: e,
                        layer: t
                    })
                },
                a.updateDisasterType = function (e) {
                    a.setState({
                        disasterType: e.target.value
                    })
                },
                a.updateLayer = function (e) {
                    a.setState({
                        layer: e.target.value
                    })
                },
                a.updateClimateYear = function (e) {
                    a.setState({
                        climateYear: e.target.value
                    })
                },
                a.updateLayerVuln = function (e) {
                    a.setState({
                        layerVuln: e.target.value
                    })
                },
                a.updateLayerLOCC = function (e) {
                    a.setState({
                        layerLOCC: e.target.value
                    })
                },
                a.updateLayerHe = function (e) {
                    a.setState({
                        layerHe: e.target.value
                    })
                },
                a.updateLayerHe30_45 = function (e) {
                    a.setState({
                        layerHe30_45: e.target.value
                    })
                },
                a.updateLayerHe30_85 = function (e) {
                    a.setState({
                        layerHe30_85: e.target.value
                    })
                },
                a.updateLayerHe50_45 = function (e) {
                    a.setState({
                        layerHe50_45: e.target.value
                    })
                },
                a.updateLayerHe50_85 = function (e) {
                    a.setState({
                        layerHe50_85: e.target.value
                    })
                },
                a.updateLayerRisk = function (e) {
                    a.setState({
                        layerRisk: e.target.value
                    })
                },
                a.state = {
                    chapterName: "climate_current",
                    disasterType: "all",
                    layer: "BDI_climate_cdd",
                    climateYear: "change_2030_mean",
                    layerVuln: "VULNERABILITY",
                    layerLOCC: "LACK OF COPING CAPACITY",
                    layerHe: "HAZARD & EXPOSURE",
                    layerRisk: "INFORM RISK INDEX SCORE",
                    layerHe30_45: "proj_hazard_rcp45_2030",
                    layerHe30_85: "proj_hazard_rcp85_2030",
                    layerHe50_45: "proj_hazard_rcp45_2050",
                    layerHe50_85: "proj_hazard_rcp85_2050"
                },
                a.updateChapter = a.updateChapter.bind(a),
                a.updateDisasterType = a.updateDisasterType.bind(a),
                a.updateLayer = a.updateLayer.bind(a),
                a.updateClimateYear = a.updateClimateYear.bind(a),
                a.updateLayerVuln = a.updateLayerVuln.bind(a),
                a.updateLayerLOCC = a.updateLayerLOCC.bind(a),
                a.updateLayerHe = a.updateLayerHe.bind(a),
                a.updateLayerHe30_45 = a.updateLayerHe30_45.bind(a),
                a.updateLayerHe30_85 = a.updateLayerHe30_85.bind(a),
                a.updateLayerHe50_45 = a.updateLayerHe50_45.bind(a),
                a.updateLayerHe50_85 = a.updateLayerHe50_85.bind(a),
                a.updateLayerRisk = a.updateLayerRisk.bind(a),
                a
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            (t, e),
            l(t, [{
                        key: "render",
                        value: function () {
                            var e = this.state,
                            t = e.chapterName,
                            a = e.disasterType,
                            l = e.layer,
                            c = e.stops,
                            d = e.climateYear,
                            s = e.layerVuln,
                            u = e.layerLOCC,
                            p = e.layerHe,
                            f0 = e.layerHe30_45,
                            f1 = e.layerHe30_85,
                            m0 = e.layerHe50_45,
                            m1 = e.layerHe50_85,
                            _ = e.layerRisk;
                            return i.default.createElement("div", null, i.default.createElement(r.default, {
                                    chapterName: t,
                                    disasterType: a,
                                    layer: l,
                                    stops: c,
                                    climateYear: d,
                                    layerVuln: s,
                                    layerLOCC: u,
                                    layerHe: p,
                                    layerHe30_45: f0,
                                    layerHe30_85: f1,
                                    layerHe50_45: m0,
                                    layerHe50_85: m1,
                                    layerRisk: _
                                }), i.default.createElement(n.default, {
                                    chapterName: t,
                                    updateChapter: this.updateChapter
                                }), i.default.createElement(o.default, {
                                    chapterName: t,
                                    disasterType: a,
                                    layer: l,
                                    layerVuln: s,
                                    layerLOCC: u,
                                    layerHe: p,
                                    layerHe30_45: f0,
                                    layerHe30_85: f1,
                                    layerHe50_45: m0,
                                    layerHe50_85: m1,
                                    layerRisk: _,
                                    stops: c,
                                    climateYear: d,
                                    updateDisasterType: this.updateDisasterType,
                                    updateLayer: this.updateLayer,
                                    updateClimateYear: this.updateClimateYear,
                                    updateLayerVuln: this.updateLayerVuln,
                                    updateLayerLOCC: this.updateLayerLOCC,
                                    updateLayerHe: this.updateLayerHe,
                                    updateLayerHe30_45: this.updateLayerHe30_45,
                                    updateLayerHe30_85: this.updateLayerHe30_85,
                                    updateLayerHe50_45: this.updateLayerHe50_45,
                                    updateLayerHe50_85: this.updateLayerHe50_85,
                                    updateLayerRisk: this.updateLayerRisk
                                }))
                        }
                    }
                ]),
            t
        }
        (i.default.Component);
        t.default = d
    },
    134: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var l = t[a];
                    l.enumerable = l.enumerable || !1,
                    l.configurable = !0,
                    "value" in l && (l.writable = !0),
                    Object.defineProperty(e, l.key, l)
                }
            }
            return function (t, a, l) {
                return a && e(t.prototype, a),
                l && e(t, l),
                t
            }
        }
        (),
        i = m(a(1)),
        n = m(a(3)),
        r = m(a(27)),
        o = a(21),
        c = m(a(136)),
        d = m(a(137)),
        s = m(a(138)),
        u = m(a(139)),
        p = m(a(140)),
        f = m(a(141));
        function m(e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }
        var _ = function (e) {
            function t(e) {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                (this, t);
                var a = function (e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }
                (this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.setActiveChapter = function (e) {
                    var t = a.props,
                    l = t.chapterName,
                    i = t.updateChapter;
                    e !== l && (document.getElementById(e).setAttribute("class", "active"), document.getElementById(l).setAttribute("class", ""), i(e))
                },
                a.isElementOnScreen = function (e) {
                    var t = document.getElementById(e).getBoundingClientRect();
                    return t.top < window.innerHeight && t.bottom > 0
                },
                a.handleScroll = function (e) {
                    var t = Object.keys(o.chapters),
                    l = void 0;
                    for (l = 0; l < t.length; l += 1) {
                        var i = t[l];
                        if (a.isElementOnScreen(i)) {
                            a.setActiveChapter(i);
                            break
                        }
                    }
                },
                a.handleScroll = a.handleScroll.bind(a),
                a
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            (t, e),
            l(t, [{
                        key: "componentDidMount",
                        value: function () {
                            window.addEventListener("scroll", this.handleScroll, !0)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            window.removeEventListener("scroll", this.handleScroll, !0)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return i.default.createElement("div", {
                                id: "features",
                                onScroll: this.handleScroll
                            }, i.default.createElement("section", {
                                    id: "climate_current",
                                    className: "active"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "Burundi hotspots mapping: climate and conflict"), i.default.createElement("br", null), i.default.createElement(r.default, null, i.default.createElement("b", null, "Diagnosing Drivers of Climate and Environmental Fragility in Burundi’s Colline Landscapes – Climate & Conflict Risks"), i.default.createElement("br", null), i.default.createElement("b", null, "Authors:"), " Red Cros Red Crescent Climate Centre, 510 of the Netherlands Red Cross and University of Cape Town.", i.default.createElement("br", null), i.default.createElement("br", null), "This story map shows the interactions among different indicators of risks across climate, migration and conflict. It uses the INFORM index framework to represent a compound risk analysis at different time scales: now, 2030 and 2050.", i.default.createElement("br", null), i.default.createElement("b", null, "Map usage: "), " the map is interactive, you can zoom, scroll, hover for additional information and filter layers.", i.default.createElement("br", null), i.default.createElement("br", null), i.default.createElement("span", {
                                            class: "highlight"
                                        }, "Commisioned by World Bank"), i.default.createElement("br", null), i.default.createElement("br", null)), i.default.createElement(r.default, {
                                        variant: "h4"
                                    }, "Background"), i.default.createElement(r.default, null, i.default.createElement(r.default, null, "Burundi is a small land-locked country in East Africa, in between Rwanda, Tanzania and the Democratic Republic of the Congo. It is ", i.default.createElement("b", null, "one of the most densely populated"), " countries in Africa, with a population of around 11.6 million people (", i.default.createElement("i", null, i.default.createElement("a", {
                                                    href: "https://www.worldbank.org/en/country/burundi/overview",
                                                    target: "_blank"
                                                }, "Source: World Bank, n.d.")), "). In 2013, 71.8% of the population was living under the international poverty line of 1.90 US dollars a day (", i.default.createElement("i", null, i.default.createElement("a", {
                                                    href: "https://www.worldbank.org/en/topic/poverty/overview",
                                                    target: "_blank"
                                                }, "Source: World Bank Group, 2021")), "), and in 2019, Burundi was estimated to be one of the poorest countries in the world (", i.default.createElement("i", null, i.default.createElement("a", {
                                                    href: "https://www.wfp.org/countries/burundi",
                                                    target: "_blank"
                                                }, "Source: WFP, n.d.")), "). Around 92% of the workforce is occupied in agriculture and only 7% of the population has access to electricity. As a result, Burundi has a Human Development Index of 0.40, one of the lowest in Africa (", i.default.createElement("i", null, i.default.createElement("a", {
                                                    href: "https://www.afdb.org/en/documents/burundi-national-climate-change-profile",
                                                    target: "_blank"
                                                }, "Source: African Development Bank, 2019")), ")."), i.default.createElement("br", null), i.default.createElement("br", null)), i.default.createElement(r.default, {
                                        variant: "h4"
                                    }, "Current climate"), i.default.createElement(r.default, null, i.default.createElement("ul", null, i.default.createElement("li", null, "The region has seen a general warming trend in mean annual temperatures since 1979,  with a trend of 0.31[0.18-0.41] °C per decade;"), i.default.createElement("li", null, "Coldest night and hottest day temperature have decreased/increased since 1979"), i.default.createElement("li", null, "Rainfall  throughout Burundi watershed region has been substantially dominated by natural variability with no long term significant changes;"), i.default.createElement("li", null, "The region has been subject to more intense rainfall events."))), i.default.createElement("img", {
                                        class: "figure",
                                        src: c.default,
                                        alt: "Current climate Burundi"
                                    }), i.default.createElement("br", null), i.default.createElement(r.default, null), i.default.createElement("img", {
                                        class: "figure",
                                        src: d.default,
                                        alt: "Current climate Burundi"
                                    }), i.default.createElement("i", {
                                        class: "fig-caption"
                                    }, "Seasonal cycle of rainfall and temperature"), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "Data"), i.default.createElement(r.default, null, i.default.createElement("b", null, "CDD"), " - Maximum number of consecutive days with RR less than 1 mm.", i.default.createElement("br", null), i.default.createElement("b", null, "PRCPTOT"), " - Mean annual total precipitation.", i.default.createElement("br", null), i.default.createElement("b", null, "RX5day"), " - Maximum 5-day precipitation total.", i.default.createElement("br", null), i.default.createElement("b", null, "TXx"), " - Maximum value of daily maximum temperature.", i.default.createElement("br", null), i.default.createElement("br", null), "Rainfall climatology from The Climate Hazards Group InfraRed Precipitation with Stations data (CHIRPS) over 1981-2020 Temperature climatology from WATCH forcing data (WFDEI-CRU) over 1979-2019.", i.default.createElement("br", null), "For the full report on climate projections as well as RCP 4.5 and RCP 8.5 scenarios, please click here (to add link when the report is published).")), i.default.createElement("section", {
                                    id: "hotspots"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "Hotspots maps"), i.default.createElement(r.default, null, "We have used INFORM index in order to identify the fragility hotspots in Burundi. INFORM index has three dimensions - vulnerability, lack of coping capacity and hazard exposure. It gives an overall risk score out of 10 for each colline, and for each of the dimensions, categories, and components of risk (see ", i.default.createElement("a", {
                                            href: "https://drmkc.jrc.ec.europa.eu/inform-index/Portals/0/InfoRM/INFORM%20Concept%20and%20Methodology%20Version%202017%20Pdf%20FINAL.pdf"
                                        }, "INFORM methodology"), " for more information).", i.default.createElement("br", null), i.default.createElement("br", null)), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "COLLINES AT RISK"), i.default.createElement(r.default, null, "The most fragile collines in Burundi are (according to INFORM score):", i.default.createElement("ol", null, i.default.createElement("li", null, "Gasenyi, Bweru (Ruyigi province) - 7.52"), i.default.createElement("li", null, "Gisenyi, Buhiga (Karuzi province) - 7.47"), i.default.createElement("li", null, "Bukinanyana, Bukinanyana (Cibitoke province) - 7.41"), i.default.createElement("li", null, "Ndava, Buraza (Gitega province) - 7.4"), i.default.createElement("li", null, "Rtyazo, Bukinanyana (Cibitoke province) - 7.36")), i.default.createElement("br", null)), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "HOTSPOTS CLASSES"), i.default.createElement(r.default, null, i.default.createElement("ul", null, i.default.createElement("li", null, i.default.createElement("b", null, "Very high:  "), "347 collines, 15.6% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "High:  "), "1780 collines, 70.5% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "Medium:  "), "489 collines, 13.9% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "Low:  "), "0 collines."), i.default.createElement("li", null, i.default.createElement("b", null, "Very low:  "), "0 collines.")))), i.default.createElement("section", {
                                    id: "climate_projections"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "Climate projections"), i.default.createElement("br", null), i.default.createElement(r.default, null, " For the full report on climate projections as well as RCP 4.5 and RCP 8.5 scenarios, please click here (to add link when the report is published)."), i.default.createElement("br", null), i.default.createElement(r.default, null, i.default.createElement("ul", null, i.default.createElement("li", null, "Coldest night and hottest day temperatures are projected to increase in the region. Relatively high increases are more likely under a higher greenhouse gas emissions scenario. "), i.default.createElement("li", null, "Future projections of annual total rainfall changes show both potential increases and decreases dominated by natural variability. "), i.default.createElement("li", null, "Heavy rainfall events are projected to increase in the future with high confidence in northern regions of the country."))), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h5"
                                    }, "Sectoral impact analysis"), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "HEALTH"), i.default.createElement(r.default, null, "Malaria transmission is likely to increase as a result of increased day and night-time temperatures. There is high confidence that Burundi will go from 0 days to 5-10 days of heat stress a year by the end of the century under RCP 8.5."), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "AGRICULTURE"), i.default.createElement(r.default, null, "Despite lack of confidence in rainfall trends, higher temperatures will cause more evapotranspiration and consequently yields of Maize will reduce without technological improvements and lake productivity will be reduced."), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "INFRASTRUCTURE"), i.default.createElement(r.default, null, "The lack of agreement in rainfall projections, as well as strong natural variability do not point to any firm conclusions as to the influence that climate change will have on flood and landslide hazards,  which in turn could potentially damage infrastructure. Flooding from Lake Tanganyika can have its impact on infrastructure, though lake levels have a lagged response compared to rainfall."), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "ENERGY"), i.default.createElement(r.default, null, "Hydropower capacity will likely be reduced with 11% and 16% by 2050 over the Rwegura catchment under RCP 4.5 and RCP 8.5 respectively (", i.default.createElement("i", null, i.default.createElement("a", {
                                                href: "https://www.journaljenrr.com/index.php/JENRR/article/view/30184",
                                                target: "_blank"
                                            }, "Source: Manirakiza et al., 2021")), ")."), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "LIMITATIONS"), i.default.createElement(r.default, null, "These results were obtained from the ensemble of CORDEX-Africa, which nevertheless depict a simplified, hence imperfect representation of the evolution of the climate systems in response to natural and anthropogenic forcings. For more details on the projections, models used, scenarios and representation of uncertainties in the projections please click here (to add link when the report is published).")), i.default.createElement("section", {
                                    id: "disasters"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "CASCADING AND COMPOUNDING HAZARDS"), i.default.createElement(r.default, null, "People in highly expose to a multitude of hazards (see Figure; Source: World Bank Group, 2021). The results of a historical hazard analysis for the period 2010-2021 is depicted in the map. The map shows how those hazards interact either by their cascading nature, one hazards triggering other hazards or by the compound of several hazards occurring at similar times. In the map it is possible to observe when and where such hazards occurred and their interactions.", i.default.createElement("br", null), i.default.createElement("br", null)), i.default.createElement("img", {
                                        class: "figure",
                                        src: u.default,
                                        alt: "Disasters in Burundi"
                                    }), i.default.createElement("i", {
                                        class: "fig-caption"
                                    }, "Occurrence of climate driven hazards in Burundi showed as a histogram of the number of affected people"), i.default.createElement("br", null), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "HEAVY RAINFALL"), i.default.createElement(r.default, null, "Heavy rainfall has caused various types of flooding on multiple occasions since 2010. Especially flash floods have had disastrous consequences in Burundi. Heavy rainfall increases the probability of flooding, as groundwater levels and water levels in rivers and lakes rise and subsequently increases the likeliness of flooding over time. Additionally, heavy rainfall has caused landslides on multiple occasions in Burundi, identified as having both a triggering and increased probability relation.", i.default.createElement("br", null)), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "VIOLENT WIND"), i.default.createElement(r.default, null, "Heavy rainfall and lightning have been identified as potential secondary hazards from Violent winds. Note, that in this case it is less of a triggering situation, but more related to the type of Violent wind. In Burundi, Violent winds are often accompanied by heavy rainfall. Therefore, the secondary hazards that are identified for heavy rainfall are also included for Violent winds."), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "HAILSTORM"), i.default.createElement(r.default, null, "In Burundi, between 2010 and 2021 hailstorms have been accompanied by heavy rainfall at least twice. No reports on hailstorms containing lightning were found. However, it is a known hazard interaction. Therefore, both heavy rain and lightning have been classified as potential secondary hazards."), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "LIGHTNING"), i.default.createElement(r.default, null, "Lightning causes most of the natural induced wildfires  (", i.default.createElement("i", null, i.default.createElement("a", {
                                                href: "https://www.sciencedirect.com/science/article/abs/pii/S0168192320300927",
                                                target: "_blank"
                                            }, "Source: Moris et al., 2020")), "). Although, for Burundi it has not been reported that lightning has triggered wildfires, it remains a potential hazard and has therefore been included."), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "DROUGHT"), i.default.createElement(r.default, null, "Droughts increase the probability of wildfires  (", i.default.createElement("i", null, i.default.createElement("a", {
                                                href: "https://www.researchgate.net/publication/264792169_Reviewing_and_visualizing_the_interactions_of_natural_hazards",
                                                target: "_blank"
                                            }, "Source: Gil & Galamud, 2014")), "), especially when compounding with extreme heat. Furthermore, extended drought can damage vegetation numbers, which leads to runoff increases compared the pre-drought conditions. This increases the probability of flooding."), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "FLOODS"), i.default.createElement(r.default, null, "Landslides and flooding are often closely related because both are triggered by heavy rainfall. However, besides the presence of heavy rainfall, flooding can both trigger and increase the probability of landslides through moving floodwaters. If floodwaters move fast, they regularly undercut slopes. This reduces the strength of the slope, which can trigger or increase the probability of slope failure  (", i.default.createElement("i", null, i.default.createElement("a", {
                                                href: "https://www.preventionweb.net/files/25233_25102landslidesenglish1.pdf",
                                                target: "_blank"
                                            }, "Source:  Weerasinghe et al., 2008")), "). Flooding also increases the probability of disease outbreaks. This can happen through cross contaminated water sources or by a proliferated number of mosquitos."), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "WILDFIRES"), i.default.createElement(r.default, null, "Wildfires are likely to trigger further wildfires, as fire spreads quickly and can ignite fire in other areas. Wildfires can ‘jump’ rivers and roads as firebrands are carried by wind and vertical convection columns. Furthermore, wildfires increase the probability of flooding by destruction of vegetation, which leads to faster runoff times. Destroyed vegetation also leads to an increased probability of landslides."), i.default.createElement(r.default, null, i.default.createElement(r.default, {
                                            variant: "h6"
                                        }, "LANDSLIDES"), i.default.createElement(r.default, null, "Landslides can increase the probability or trigger flooding if it for example blocks a river or increases the amount of sediment in a fluvial system  (", i.default.createElement("i", null, i.default.createElement("a", {
                                                    href: "https://www.researchgate.net/publication/264792169_Reviewing_and_visualizing_the_interactions_of_natural_hazards",
                                                    target: "_blank"
                                                }, "Source: Gil & Galamud, 2014")), ").  On some occasions landslides can increase the probability or even trigger further landslides. This is the case because a pre-existing landslide slope generally has less vegetation and roots (", i.default.createElement("i", null, i.default.createElement("a", {
                                                    href: "https://www.usgs.gov/natural-hazards/landslide-hazards/science/landslides-can-cause-more-landslides?qt-science_center_objects=0#qt-science_center_objects",
                                                    target: "_blank"
                                                }, "Source: USGS, 2018")), ")."), i.default.createElement("br", null)), i.default.createElement("a", {
                                        href: "../../data/assets/BDI_multi_hazard.png",
                                        target: "_blank"
                                    }, i.default.createElement("img", {
                                            class: "figure",
                                            src: p.default,
                                            alt: "Burundi Multi-Hazard interactions"
                                        })), i.default.createElement("i", null, "This is a hazard interaction framework for Burundi based on a historical data. Click on the image to open it in full size")), i.default.createElement("section", {
                                    id: "migration"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "Migration"), i.default.createElement(r.default, null, "There are currently ", i.default.createElement("b", null, "125 339"), " internally displaced people in Burundi ", i.default.createElement("a", {
                                            href: "https://dtm.iom.int/reports/burundi-%E2%80%93-tableau-de-bord-des-d%C3%A9placements-internes-juin-2021",
                                            target: "_blank"
                                        }, "(Source: IOM baseline June 2021)"), ". The three main driver of displacement in Burundi are (in order of importance in 2021):", i.default.createElement("ol", null, i.default.createElement("li", null, i.default.createElement("b", null, "destruction of shelter"), " due to sudden onset climate driven disasters (torrential rains, Violent winds, landslide and flooding)"), i.default.createElement("li", null, i.default.createElement("b", null, "lack of (agricultural) activities"), " due to decline in crop productivity and increase in population density (Source: Groundswell Report)"), i.default.createElement("li", null, i.default.createElement("b", null, "violence and conflict."), " Most of the current displacements are due to climate driven events (100% according to IOM data and 76% according to IDMC/NRC data) while data show that violence and conflict is currently not a major driver."))), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "CLIMATE TRENDS AND MIGRATION"), i.default.createElement(r.default, null, "Climate trends as the increase of temperatures and the intensification of rainfall events, together with the projected increase in population density are going to drive more climate related migration in the future."), i.default.createElement("br", null), i.default.createElement(r.default, null, "Climate-induced internal migrants are projected to ramp up across all scenarios in Burundi reaching 600,000 by 2050 and will see an emergence of climate migration hotspots coinciding with the poorest areas and the areas of economic growth.", i.default.createElement("br", null), "Collines with high current and projected risk of flooding and landslide as well as those with decreasing crop productivity will be hotspots for climate driven migration (Source: Groundswell report)."), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "RETURNEES"), i.default.createElement(r.default, null, i.default.createElement("span", {
                                            class: "highlight"
                                        }, "“In 2021, Burundi is expected to receive returning refugees from the United Republic of Tanzania, Rwanda, the Democratic Republic of Congo and Uganda, continuing the trend of increased numbers of voluntary returns following the relatively peaceful political transition in 2020. “"), i.default.createElement("i", null, i.default.createElement("a", {
                                                href: "https://reporting.unhcr.org/node/29777",
                                                target: "_blank"
                                            }, " Source: UNCHR, 2021")), i.default.createElement("br", null), "The potential instability created by the expected influx of burundian returnees due to land-rights conflict can be cause for more future displacement in the next years."), i.default.createElement("br", null), i.default.createElement("a", {
                                        href: "https://app.powerbi.com/view?r=eyJrIjoiNDMyMmY2YTAtNTJjMy00ODE3LWFkNDUtYTNhMmNiZjYzYzUyIiwidCI6ImU1YzM3OTgxLTY2NjQtNDEzNC04YTBjLTY1NDNkMmFmODBiZSIsImMiOjh9",
                                        target: "_blank"
                                    }, i.default.createElement("img", {
                                            class: "figure",
                                            src: s.default,
                                            alt: "Returnees in Burundi"
                                        })), i.default.createElement("i", null, "Refugees and returnees in Burundi. ", i.default.createElement("a", {
                                            class: "fig-caption",
                                            href: "https://app.powerbi.com/view?r=eyJrIjoiNDMyMmY2YTAtNTJjMy00ODE3LWFkNDUtYTNhMmNiZjYzYzUyIiwidCI6ImU1YzM3OTgxLTY2NjQtNDEzNC04YTBjLTY1NDNkMmFmODBiZSIsImMiOjh9",
                                            target: "_blank"
                                        }, "Source: UNCHR, 2021"))), i.default.createElement("section", {
                                    id: "conflict"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "Conflict"), i.default.createElement(r.default, null, "While Burundi is officially not a country in conflict at the moment, violence and conflict situations are present throughout the country. Burundi knows periods of more violence and conflict than in other periods, but conflict situations have never really disappeared.", i.default.createElement("br", null), i.default.createElement("br", null)), i.default.createElement("img", {
                                        class: "figure",
                                        src: f.default,
                                        alt: "Conflict timeline"
                                    }), i.default.createElement(r.default, null, i.default.createElement("br", null), "Impacts of fragility, conflict, and violence exacerbate existing vulnerabilities of people to climate hazards as well as decreasing coping capacities. Continued tensions over land rights compounded by the impacts of climate extremes are expected to be a risk multiplier of future conflict in Burundi. The most prominent driver of conflict is a crisis of governance closely connected to resources control. In particular, control over land is a critical factor since land is essential to the livelihoods of a majority of Burundians. However, land is scarce and hence the impacts of weather events and other social dynamics are causing tension and conflict.  An analysis of locations of people affected by conflict has shown that hot spot areas of conflict and vulnerability are especially located within the Capital City Bujumbura and the provinces Bujumbura Rural, Cibitoke, Rumonge, and Mwaro.", i.default.createElement("br", null), i.default.createElement("br", null)), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "MAP EXPLANATION"), i.default.createElement(r.default, null, "Past conflict is represented using UCDP data from 1989 to 2019. Number of fatalities are summed per event per colline. Collines where UCDP has not recorded a fatality are not represented on the map.")), i.default.createElement("section", {
                                    id: "vulnerability"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "Vulnerability"), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "VULNERABILITY INDICATORS"), i.default.createElement(r.default, null, "For vulnerability dimension following indicators were used:", i.default.createElement("ul", null, i.default.createElement("li", null, "Multidimensional Poverty Index (Oxford Poverty and Human Development Initiative, 2020)"), i.default.createElement("li", null, "Deaths due to malaria (per 100 000 population) (WHO, 2019)"), i.default.createElement("li", null, "Percentage of population over 60 (Facebook, 2020)"), i.default.createElement("li", null, "Percentage of population under 5 (Facebook, 2020)"), i.default.createElement("li", null, "Percentage of pregnent women (WorldPop, 2017)"), i.default.createElement("li", null, "Percentage of people in need (OCHA, 2021)"), i.default.createElement("li", null, "Percentage of people that experience food stress, crisis or emergency (IPS, 2020)"), i.default.createElement("li", null, "Food insecurity (categories) (WFP, 2014)"))), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "VULNERABLE COLLINES"), i.default.createElement(r.default, null, "The most vulnerable collines in Burundi are (according to INFORM vulnerability score):", i.default.createElement("ol", null, i.default.createElement("li", null, "Centre-Urbain, Cankuzo (Cankuzo province) - 7.9"), i.default.createElement("li", null, "Maramvya, Butihinda (Muyinga province) - 7.88"), i.default.createElement("li", null, "Kibimba, Mishiha (Cankuzo province) - 7.84"), i.default.createElement("li", null, "Maramvya, Gitaramuka (Karuzi province) - 7.84"), i.default.createElement("li", null, "Rusagara, Kigamba (Cankuzo province) - 7.82"))), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "VULNERABILITY CLASSES"), i.default.createElement(r.default, null, "The 2616 collines of Burundi are classified into following vulnerability classes:", i.default.createElement("ul", null, i.default.createElement("li", null, i.default.createElement("b", null, "Very high: "), "1296 collines, 52.2% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "High: "), "1200 collines, 43.2% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "Medium: "), "120 collines, 4.6% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "Low: "), "0 collines."), i.default.createElement("li", null, i.default.createElement("b", null, "Very low: "), "0 collines.")))), i.default.createElement("section", {
                                    id: "lack_of_coping_capacity"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "Lack of coping capacity"), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "LACK OF COPING CAPACITY INDICATORS"), i.default.createElement(r.default, null, "For lack of coping capacity dimension following indicators were used:", i.default.createElement("ul", null, i.default.createElement("li", null, "Number of health facilities per 10,000 people (Global Healthsites Mapping Project, 2021)"), i.default.createElement("li", null, "Number of education facilities per 10,000 people (OSM, 2019)"), i.default.createElement("li", null, "Access to electricity (Earth Observation Group, 2017)"), i.default.createElement("li", null, "Access to cities (Malaria Atlas, 2015)"))), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "COLLINES WITH LOW COPING CAPACITY"), i.default.createElement(r.default, null, "Collines with the lowest coping capacity in Burundi are (according to INFORM lack of coping capacity score):", i.default.createElement("ol", null, i.default.createElement("li", null, "Musenga, Mwakiro (Muyinga province) - 9.58"), i.default.createElement("li", null, "Kivumu, Butezi (Ruyigi province) - 8.82"), i.default.createElement("li", null, "Nyarumanga, Matongo (Kayanza province) - 8.69"), i.default.createElement("li", null, "Nyamugongo, Mpinga-Kayove (Rutana province) - 8.65"), i.default.createElement("li", null, "Kagege, Vugizo (Makamba province) - 8.62"))), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "LACK OF COPING CAPACITY CLASSES"), i.default.createElement(r.default, null, i.default.createElement("ul", null, i.default.createElement("li", null, i.default.createElement("b", null, "Very high: "), "2367 collines, 89.3% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "High: "), "216 collines, 8.9% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "Medium: "), "27 collines, 1.1% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "Low: "), "5 collines, 0.3% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "Very low: "), "1 colline, 0.5% of total area.")))), i.default.createElement("section", {
                                    id: "hazard_exposure"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "Hazard exposure"), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "HAZARD AND EXPOSURE INDICATORS"), i.default.createElement(r.default, null, "For hazard and exposure dimension we have considered the folowing hazards:", i.default.createElement("ul", null, i.default.createElement("li", null, "Flooods (Source: World Bank, 2021)"), i.default.createElement("li", null, "Drought (Source: UNEP/GRID-Europe, 2014)"), i.default.createElement("li", null, "Landslides (Source: World Bank, 2021)"), i.default.createElement("li", null, "Conflict (Source: UCDP, 2020)"))), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "COLLINES EXPOSED TO HAZARDS"), i.default.createElement(r.default, null, "The most exposed to hazards collines in Burundi are (according to INFORM hazard & exposure score):", i.default.createElement("ol", null, i.default.createElement("li", null, "Bujumbura Mairie - 8.13"), i.default.createElement("li", null, "Bukinanyana, Bukinanyana (Cibitoke province) - 8.05"), i.default.createElement("li", null, "Nyamaboko, Kanyosha (Bujumbura Rural province) - 7.76"), i.default.createElement("li", null, "Gitaza, Muhuta (Rumonge province) - 7.72"), i.default.createElement("li", null, "Gasenyi, Bururi (Bururi province) - 7.7"))), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "HAZARD EXPOSURE CLASSES"), i.default.createElement(r.default, null, i.default.createElement("ul", null, i.default.createElement("li", null, i.default.createElement("b", null, "Very high: "), "178 collines, 9.0% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "High: "), "888 collines, 34.5% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "Medium: "), "749 collines, 29.7% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "Low: "), "801 collines, 26.8% of total area."), i.default.createElement("li", null, i.default.createElement("b", null, "Very low: "), "0 collines.")))), i.default.createElement("section", {
                                    id: "land_erosion"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "Land erosion"), i.default.createElement("br", null), i.default.createElement(r.default, null, "Erosion and soil loss in productive landscapes is an ongoing issue for Burundi, where erosion rates in the highlands can reach 100 tons ha−1 ", i.default.createElement("a", {
                                            href: "https://onlinelibrary.wiley.com/doi/10.1002/ldr.3231",
                                            target: "_blank"
                                        }, "(Source: Ndagijimana, Kessler, & Asseldonk, 2019)"), ". Without proper land management, land degradation can result in increasing loss of fertile soils, with impacts on food security and livelihoods. Mean erosion rate (tons/ha/year) was estimated using the ", i.default.createElement("a", {
                                            href: "https://naturalcapitalproject.stanford.edu/software/invest",
                                            target: "_blank"
                                        }, "InVEST Sediment Delivery Ratio model"), ", which considers soil type, slope, rainfall, land cover and management practices.")), i.default.createElement("section", {
                                    id: "nbs"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "NBS potential index"), i.default.createElement("br", null), i.default.createElement(r.default, null, "Nature-based solutions refers to a broad range of land management practices that aim to protect and restore natural ecosystems and implement best management practices on croplands and grazing lands. Through their impacts on vegetation and soils, NBS can help to improve food security while stabilizing slopes, maintaining healthy soils, and reducing the risk of small to medium landslides. NBS include activities such as conservation agriculture, agroforestry, sustainable forestry, rotational grazing, silvopasture, revegetating denuded slopes and along riparian corridors, and protecting existing natural ecosystems in good condition. This index reflects the potential for protecting and restoring vegetation to play a role in reducing erosion and/or landslide hazard.")), i.default.createElement("section", {
                                    id: "hazard_projections_2030_rcp45"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "Hazards projections: climate 2030 under RCP 4.5"), i.default.createElement("br", null), i.default.createElement(r.default, null, "Using climate projections of RCP 4.5 for Burundi, we have made an estimation how hazard exposure will change in 2030 under this scenario."), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "FLOODS"), i.default.createElement(r.default, null, "Changes in Maximum 5-day precipitation total (RX5day) were used to calculate how flood exposure will change in the future."), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "DROUGHTS"), i.default.createElement(r.default, null, "Changes in Maximum number of consecutive dry days with RR less than 1 mm (CDD) were used to calculate how drought exposure will change in the future."), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "LANDSLIDES"), i.default.createElement(r.default, null, "Changes in Maximum 5-day precipitation total (RX5day) were used to calculate how landslide exposure will change in the future.")), i.default.createElement("section", {
                                    id: "hazard_projections_2030_rcp85"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "Hazards projections: climate 2030 under RCP 8.5"), i.default.createElement("br", null), i.default.createElement(r.default, null, "Using climate projections of RCP 8.5 for Burundi, we have made an estimation how hazard exposure will change in 2030 under this scenario."), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "FLOODS"), i.default.createElement(r.default, null, "Changes in Maximum 5-day precipitation total (RX5day) were used to calculate how flood exposure will change in the future."), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "DROUGHTS"), i.default.createElement(r.default, null, "Changes in Maximum number of consecutive dry days with RR less than 1 mm (CDD) were used to calculate how drought exposure will change in the future."), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "LANDSLIDES"), i.default.createElement(r.default, null, "Changes in Maximum 5-day precipitation total (RX5day) were used to calculate how landslide exposure will change in the future.")), i.default.createElement("section", {
                                    id: "hazard_projections_2050_rcp45"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "Hazards projections: climate 2050 under RCP 4.5"), i.default.createElement("br", null), i.default.createElement(r.default, null, "Using climate projections of RCP 4.5 for Burundi, we have made an estimation how hazard exposure will change in 2050 under this scenario."), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "FLOODS"), i.default.createElement(r.default, null, "Changes in Maximum 5-day precipitation total (RX5day) were used to calculate how flood exposure will change in the future."), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "DROUGHTS"), i.default.createElement(r.default, null, "Changes in Maximum number of consecutive dry days with RR less than 1 mm (CDD) were used to calculate how drought exposure will change in the future."), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "LANDSLIDES"), i.default.createElement(r.default, null, "Changes in Maximum 5-day precipitation total (RX5day) were used to calculate how landslide exposure will change in the future.")), i.default.createElement("section", {
                                    id: "hazard_projections_2050_rcp85"
                                }, i.default.createElement(r.default, {
                                        variant: "h3"
                                    }, "Hazards projections: climate 2050 under RCP 8.5"), i.default.createElement("br", null), i.default.createElement(r.default, null, "Using climate projections of RCP 8.5 for Burundi, we have made an estimation how hazard exposure will change in 2050 under this scenario."), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "FLOODS"), i.default.createElement(r.default, null, "Changes in Maximum 5-day precipitation total (RX5day) were used to calculate how flood exposure will change in the future."), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "DROUGHTS"), i.default.createElement(r.default, null, "Changes in Maximum number of consecutive dry days with RR less than 1 mm (CDD) were used to calculate how drought exposure will change in the future."), i.default.createElement("br", null), i.default.createElement(r.default, {
                                        variant: "h6"
                                    }, "LANDSLIDES"), i.default.createElement(r.default, null, "Changes in Maximum 5-day precipitation total (RX5day) were used to calculate how landslide exposure will change in the future.")))
                        }
                    }
                ]),
            t
        }
        (i.default.Component);
        t.default = _,
        _.propTypes = {
            chapterName: n.default.string.isRequired,
            updateChapter: n.default.func.isRequired
        }
    },
    136: function (e, t, a) {
        e.exports = a.p + "data/assets/TG_monthly_mean_wfdei-cru.png"
    },
    137: function (e, t, a) {
        e.exports = a.p + "data/assets/pr_TG_seasonal_cycle_chirps_wfdei-cru.png"
    },
    138: function (e, t, a) {
        e.exports = a.p + "data/assets/BDI_migration_returnees.png"
    },
    139: function (e, t, a) {
        e.exports = a.p + "data/assets/burundi_disasters.png"
    },
    140: function (e, t, a) {
        e.exports = a.p + "data/assets/BDI_multi_hazard.png"
    },
    141: function (e, t, a) {
        e.exports = a.p + "data/assets/BDI_UCDP.png"
    },
    142: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var l = t[a];
                    l.enumerable = l.enumerable || !1,
                    l.configurable = !0,
                    "value" in l && (l.writable = !0),
                    Object.defineProperty(e, l.key, l)
                }
            }
            return function (t, a, l) {
                return a && e(t.prototype, a),
                l && e(t, l),
                t
            }
        }
        (),
        i = u(a(1)),
        n = u(a(18)),
        r = u(a(3)),
        o = u(a(143)),
        c = u(a(144)),
        d = u(a(146)),
        s = a(21);
        function u(e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }
        o.default.accessToken = "pk.eyJ1IjoiYW5nZWxpbmFyYyIsImEiOiJja3E5aGwwZDUwMW1rMm5tcmFyM29wenppIn0.q1v_7ZrLoGQ1slFxpmm8UA";
        var p = function (e) {
            function t(e) {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                (this, t);
                var a = function (e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }
                (this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.state = {
                    lat: -3.384146,
                    lng: 29.913635,
                    zoom: 7.8
                },
                a
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            (t, e),
            l(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this,
                            t = this.state,
                            a = t.lng,
                            l = t.lat;
                            t.zoom;
                            this.tooltipContainer = document.createElement("div"),
                            this.map = new o.default.Map({
                                container: this.mapContainer,
                                style: "mapbox://styles/angelinarc/ckqc89p9k0nwe17p1n4xm0pzi",
                                center: [a, l],
                                zoom: 7.8,
                                minZoom: 7.5,
                                maxZoom: 10,
                                pitch: 0,
                                bearing: 0
                            }),
                            this.map.addControl(new o.default.NavigationControl, "top-right"),
                            this.map.on("style.load", (function () {
                                    e.map.addSource("BDI_historical_disasters", {
                                        type: "geojson",
                                        data: "data/BDI_historical_disaster.geojson"
                                    }),
                                    e.map.addSource("BDI_migration", {
                                        type: "geojson",
                                        data: "data/BDI_migration_new.geojson"
                                    }),
                                    e.map.addSource("BDI_conflict_UCDP_pol", {
                                        type: "geojson",
                                        data: "data/BDI_conflict_UCDP_pol.geojson"
                                    }),
                                    e.map.addSource("BDI_conflict_trends", {
                                        type: "geojson",
                                        data: "data/BDI_conflict_trends.geojson"
                                    }),
                                    e.map.addSource("BDI_climate", {
                                        type: "geojson",
                                        data: "data/BDI_climate_v2.geojson"
                                    }),
                                    e.map.addSource("BDI_inform", {
                                        type: "geojson",
                                        data: "data/BDI_INFORM_RISK_ALL_PROJ_v3.geojson"
                                    }),
                                    e.map.addLayer({
                                        id: "BDI_climate_cdd",
                                        type: "fill",
                                        source: "BDI_climate",
                                        filter: ["==", "indicator", "CDD"],
                                        paint: {
                                            "fill-opacity": 1,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "obs_mean",
                                                stops: [[46.2, "#081d58"], [58.4, "#225ea8"], [70.6, "#41b6c4"], [82.8, "#c7e9b4"], [96, "#ffffd9"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_climate_cdd_proj",
                                        type: "fill",
                                        source: "BDI_climate",
                                        filter: ["==", "indicator", "CDD"],
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "change_2030_mean",
                                                stops: [[-20, "#01564d"], [-15, "#2f9189"], [-10, "#8ad1c6"], [-5, "#d9eeeb"], [0, "#f6edd5"], [5, "#e1c684"], [10, "#b77928"], [15, "#754308"], [20, "#543005"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_climate_prcptot",
                                        type: "fill",
                                        source: "BDI_climate",
                                        filter: ["==", "indicator", "PRCPTOT"],
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "obs_mean",
                                                stops: [[750, "#ffffd9"], [1e3, "#c7e9b4"], [1250, "#41b6c4"], [1500, "#225ea8"], [2e3, "#081d58"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_climate_prcptot_proj",
                                        type: "fill",
                                        source: "BDI_climate",
                                        filter: ["==", "indicator", "PRCPTOT"],
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "change_2030_mean",
                                                stops: [[-20, "#774508"], [-15, "#b97b29"], [-10, "#e2c787"], [-5, "#f6edd7"], [0, "#d7eeeb"], [5, "#87d0c5"], [10, "#2d8f87"], [15, "#01564d"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_climate_rx5",
                                        type: "fill",
                                        source: "BDI_climate",
                                        filter: ["==", "indicator", "RX5"],
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "obs_mean",
                                                stops: [[65, "#ffffd9"], [80, "#c7e9b4"], [95, "#41b6c4"], [110, "#225ea8"], [125, "#081d58"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_climate_rx5_proj",
                                        type: "fill",
                                        source: "BDI_climate",
                                        filter: ["==", "indicator", "RX5"],
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "change_2030_mean",
                                                stops: [[-20, "#774508"], [-15, "#b97b29"], [-10, "#e2c787"], [-5, "#f6edd7"], [0, "#d7eeeb"], [5, "#87d0c5"], [10, "#2d8f87"], [15, "#01564d"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_climate_txx",
                                        type: "fill",
                                        source: "BDI_climate",
                                        filter: ["==", "indicator", "TXX"],
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "obs_mean",
                                                stops: [[32.2, "#dddcdc"], [33.4, "#f3c8b2"], [34.6, "#f6a586"], [35.8, "#e7745b"], [37, "#c83836"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_climate_txx_proj",
                                        type: "fill",
                                        source: "BDI_climate",
                                        filter: ["==", "indicator", "TXX"],
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "change_2030_mean",
                                                stops: [[.5, "#fff0dc"], [1, "#fee2bb"], [1.5, "#fdce98"], [2, "#fdb67f"], [2.5, "#fc8c59"], [3, "#f0694a"], [3.5, "#dc3c28"], [4, "#be0f0a"], [4.5, "#960000"], [5, "#7f0000"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_migration",
                                        type: "fill",
                                        source: "BDI_migration",
                                        filter: [">", "individus_int", 0],
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "individus_int",
                                                stops: [[50, "#f3ffff"], [150, "#d6fff3"], [500, "#baefd6"], [1e3, "#84b7a0"], [2e3, "#51826c"], [3e4, "#20503d"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_historical_disasters_heat",
                                        type: "heatmap",
                                        source: "BDI_historical_disasters",
                                        maxzoom: 15,
                                        paint: {
                                            "heatmap-color": ["interpolate", ["linear"], ["heatmap-density"], 0, "rgba(254,240,217,0)", .2, "rgb(253,204,138)", .4, "rgb(252,141,89)", .6, "rgb(227,74,51)", .8, "rgb(179,0,0)"],
                                            "heatmap-radius": 50,
                                            "heatmap-opacity": 0,
                                            "heatmap-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_historical_disasters_point",
                                        type: "circle",
                                        source: "BDI_historical_disasters",
                                        paint: {
                                            "circle-radius": 7,
                                            "circle-color": {
                                                property: "main_hazard",
                                                type: "categorical",
                                                stops: [["Drought", "#fbb03b"], ["Heavy rainfall", "#223b53"], ["Epidemic", "#e55e5e"], ["Wildfire", "#168C04"], ["Violent wind", "#3bb2d0"]]
                                            },
                                            "circle-opacity": 0
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_conflict_UCDP_pol",
                                        type: "fill",
                                        source: "BDI_conflict_UCDP_pol",
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "fat",
                                                stops: [[37, "#feebe2"], [132, "#fbb4b9"], [282, "#f768a1"], [478, "#c51b8a"], [2377, "#ae017e"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_conflict_trends",
                                        type: "fill",
                                        source: "BDI_conflict_trends",
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "Con_type",
                                                type: "categorical",
                                                stops: [["Violence against civilians", "#5e91b2"], ["Riots", "#ca7934"], ["Other", "#6e8a64"], ["Battles", "#ffd945"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_inform_lack",
                                        type: "fill",
                                        source: "BDI_inform",
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "LACK OF COPING CAPACITY",
                                                stops: [[3.1, "#e1e9d7"], [4.6, "#c4d3b0"], [5.9, "#a7bd89"], [7.3, "#4f6236"], [10, "#354124"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_inform_vuln",
                                        type: "fill",
                                        source: "BDI_inform",
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "VULNERABILITY",
                                                stops: [[1.9, "#ccd9ed"], [3.2, "#99b3dc"], [4.7, "#668ecb"], [6.3, "#20385e"], [10, "#15263f"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_inform_he",
                                        type: "fill",
                                        source: "BDI_inform",
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "HAZARD & EXPOSURE",
                                                stops: [[1.4, "#fce6d8"], [2.6, "#facdb2"], [4, "#f8b48b"], [6, "#d9580c"], [10, "#913b08"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_inform_risk",
                                        type: "fill",
                                        source: "BDI_inform",
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "INFORM RISK INDEX SCORE",
                                                stops: [[1.9, "#fec8c0"], [3.4, "#fe9181"], [4.9, "#fe5b42"], [6.4, "#911300"], [10, "#610d00"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_erosion",
                                        type: "fill",
                                        source: "BDI_inform",
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "Average erosion rate by colline, tons/ha/year",
                                                stops: [[365, "#404040"], [582, "#767676"], [774, "#acacac"], [987, "#d1d2d1"], [1220, "#f0f0f0"], [1490, "#f9eae4"], [1832, "#f2c0b1"], [2244, "#e58f80"], [2956, "#dc4650"], [7700, "#c60b27"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_nbs",
                                        type: "fill",
                                        source: "BDI_inform",
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "NBS Potential Index",
                                                stops: [[.12, "#a5601c"], [.15, "#b98e59"], [.19, "#d5b47a"], [.25, "#e4cda7"], [.31, "#f2e9d8"], [.39, "#dce9e8"], [.5, "#acd5d1"], [.63, "#7cbdb3"], [.79, "#469b8c"], [1, "#0f7c69"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_inform_he_proj_30_rcp45",
                                        type: "fill",
                                        source: "BDI_inform",
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "proj_hazard_rcp45_2030",
                                                stops: [[1.4, "#fce6d8"], [2.6, "#facdb2"], [4, "#f8b48b"], [6, "#d9580c"], [10, "#913b08"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_inform_he_proj_30_rcp85",
                                        type: "fill",
                                        source: "BDI_inform",
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "proj_hazard_rcp85_2030",
                                                stops: [[1.4, "#fce6d8"], [2.6, "#facdb2"], [4, "#f8b48b"], [6, "#d9580c"], [10, "#913b08"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_inform_he_proj_50_rcp45",
                                        type: "fill",
                                        source: "BDI_inform",
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "proj_hazard_rcp45_2050",
                                                stops: [[1.4, "#fce6d8"], [2.6, "#facdb2"], [4, "#f8b48b"], [6, "#d9580c"], [10, "#913b08"]]
                                            }
                                        }
                                    }, "waterway-label"),
                                    e.map.addLayer({
                                        id: "BDI_inform_he_proj_50_rcp85",
                                        type: "fill",
                                        source: "BDI_inform",
                                        paint: {
                                            "fill-opacity": 0,
                                            "fill-opacity-transition": {
                                                duration: 800,
                                                delay: 0
                                            },
                                            "fill-outline-color": "#505050",
                                            "fill-color": {
                                                property: "proj_hazard_rcp85_2050",
                                                stops: [[1.4, "#fce6d8"], [2.6, "#facdb2"], [4, "#f8b48b"], [6, "#d9580c"], [10, "#913b08"]]
                                            }
                                        }
                                    }, "waterway-label")
                                })),
                            this.tooltipContainer = document.createElement("div");
                            var i = new o.default.Marker(this.tooltipContainer, {
                                offset: [-110, 0]
                            }).setLngLat([0, 0]).addTo(this.map);
                            this.map.on("mousemove", (function (t) {
                                    var a = e.props,
                                    l = a.chapterName,
                                    n = a.layer,
                                    r = s.tooltipLayers[l],
                                    o = void 0,
                                    c = void 0;
                                    if (r.length > 1 ? (o = s.tooltipConfig[n], c = n) : (o = s.tooltipConfig[r[0]], c = r[0]), void 0 !== o) {
                                        var d = e.map.queryRenderedFeatures(t.point, {
                                            layers: [c]
                                        });
                                        if (d.length > 0)
                                            void 0 !== d[0].properties && (e.map.getCanvas().style.cursor = d.length ? "default" : "");
                                        i.setLngLat(t.lngLat),
                                        e.setTooltip(d, o)
                                    }
                                }))
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function (e) {
                            var t = this,
                            a = this.props,
                            l = a.chapterName,
                            i = a.disasterType,
                            n = a.layer,
                            r = (a.stops, a.climateYear),
                            o = a.layerVuln,
                            c = a.layerLOCC,
                            d = a.layerHe,
                            u0 = a.layerHe30_45,
                            u1 = a.layerHe30_85,
                            p0 = a.layerHe50_45,
                            p1 = a.layerHe50_85,
                            f = a.layerRisk;
                            if (this.map.isStyleLoaded()) {
                                if (e.chapterName !== l) {
                                    var m = s.chapters[e.chapterName],
                                    _ = m.paint,
                                    y = m.layout,
                                    h = m.position;
                                    _.forEach((function (e) {
                                            var a = t.map.getLayer(e.id);
                                            if (void 0 !== a) {
                                                var l = a.type;
                                                t.map.setPaintProperty(e.id, l + "-opacity", e.opacity)
                                            }
                                        })),
                                    y.forEach((function (e) {
                                            t.map.setLayoutProperty(e.id, "visibility", e.visibility)
                                        })),
                                    this.map.easeTo(h)
                                }
                                if (e.disasterType && e.disasterType !== i && ("all" !== e.disasterType ? (this.map.setFilter("BDI_historical_disasters_heat", ["==", "main_hazard", e.disasterType]), this.map.setFilter("BDI_historical_disasters_point", ["==", "main_hazard", e.disasterType])) : (this.map.setFilter("BDI_historical_disasters_heat", void 0), this.map.setFilter("BDI_historical_disasters_point", void 0))), e.layer && e.layer !== n) {
                                    var b = this.map.getLayer(n),
                                    g = this.map.getLayer(e.layer);
                                    if (void 0 !== b) {
                                        var I = b.type;
                                        this.map.setPaintProperty(n, I + "-opacity", 0)
                                    }
                                    if (void 0 !== b) {
                                        var D = g.type;
                                        this.map.setPaintProperty(e.layer, D + "-opacity", 1)
                                    }
                                }
                                if (e.climateYear && e.climateYear !== r) {
                                    var v = this.map.getPaintProperty(e.layer, "fill-color").stops;
                                    this.map.setPaintProperty(e.layer, "fill-color", {
                                        property: e.climateYear,
                                        stops: v
                                    })
                                }
                                e.layerVuln && e.layerVuln !== o && this.map.setPaintProperty("BDI_inform_vuln", "fill-color", {
                                    property: e.layerVuln,
                                    stops: s.vulnerabilityStops
                                }),
                                e.layerLOCC && e.layerLOCC !== c && this.map.setPaintProperty("BDI_inform_lack", "fill-color", {
                                    property: e.layerLOCC,
                                    stops: s.loccStops
                                }),
                                e.layerHe && e.layerHe !== d && this.map.setPaintProperty("BDI_inform_he", "fill-color", {
                                    property: e.layerHe,
                                    stops: s.heStops
                                }),
                                e.layerHe30_45 && e.layerHe30_45 !== u0 && this.map.setPaintProperty("BDI_inform_he_proj_30_rcp45", "fill-color", {
                                    property: e.layerHe30_45,
                                    stops: s.heStops
                                }),
                                e.layerHe30_85 && e.layerHe30_85 !== u1 && this.map.setPaintProperty("BDI_inform_he_proj_30_rcp85", "fill-color", {
                                    property: e.layerHe30_85,
                                    stops: s.heStops
                                }),
                                e.layerHe50_45 && e.layerHe50_45 !== p0 && this.map.setPaintProperty("BDI_inform_he_proj_50_rcp45", "fill-color", {
                                    property: e.layerHe50_45,
                                    stops: s.heStops
                                }),
                                e.layerHe50_85 && e.layerHe50_85 !== p1 && this.map.setPaintProperty("BDI_inform_he_proj_50_rcp85", "fill-color", {
                                    property: e.layerHe50_85,
                                    stops: s.heStops
                                }),
                                e.layerRisk && e.layerRisk !== f && this.map.setPaintProperty("BDI_inform_risk", "fill-color", {
                                    property: e.layerRisk,
                                    stops: s.riskStops
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            this.map.remove()
                        }
                    }, {
                        key: "setTooltip",
                        value: function (e, t) {
                            e.length ? n.default.render(i.default.createElement(d.default, {
                                    features: e,
                                    tooltipOptions: t
                                }), this.tooltipContainer) : n.default.unmountComponentAtNode(this.tooltipContainer)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                            t = this.props,
                            a = t.chapterName,
                            l = t.layer;
                            return i.default.createElement("div", null, i.default.createElement("div", {
                                    style: {
                                        position: "fixed",
                                        width: "70%",
                                        left: "30%",
                                        top: 0,
                                        bottom: 0
                                    },
                                    ref: function (t) {
                                        e.mapContainer = t
                                    }
                                }), i.default.createElement(c.default, {
                                    chapterName: a,
                                    layer: l
                                }))
                        }
                    }
                ]),
            t
        }
        (i.default.Component);
        t.default = p,
        p.propTypes = {
            chapterName: r.default.string.isRequired,
            disasterType: r.default.string.isRequired,
            layer: r.default.string.isRequired,
            stops: r.default.string.isRequired
        }
    },
    144: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = d(a(1)),
        i = d(a(3)),
        n = a(22),
        r = d(a(36)),
        o = d(a(27)),
        c = a(21);
        function d(e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }
        var s = function (e) {
            var t = e.classes,
            a = e.chapterName,
            i = e.layer;
            if (void 0 === c.chapterLayers[a])
                return null;
            var n = c.chapterLayers[a],
            d = void 0;
            return (d = n.length > 1 ? c.legendOptions[i] : c.legendOptions[n[0]]).range ? l.default.createElement(r.default, {
                className: t.container
            }, l.default.createElement(o.default, {
                    variant: "caption",
                    className: t.labelStyle
                }, d.name), l.default.createElement("ul", null, l.default.createElement("li", {
                        className: "min"
                    }, l.default.createElement(o.default, {
                            variant: "overline"
                        }, d.range, d.min)), l.default.createElement("li", {
                        className: "max"
                    }, l.default.createElement(o.default, {
                            variant: "overline"
                        }, d.max, d.range)), l.default.createElement("li", {
                        className: "graph"
                    }, l.default.createElement("div", {
                            className: "colors"
                        }, l.default.createElement("div", {
                                style: {
                                    width: "100%",
                                    background: "linear-gradient(to right, " + d.colors.join(",") + ")"
                                }
                            }))))) : d.range ? void 0 : l.default.createElement(r.default, {
                className: t.category
            }, l.default.createElement(o.default, {
                    variant: "caption",
                    className: t.labelStyle
                }, d.name), l.default.createElement("ul", null, d.colors.map((function (e) {
                            return l.default.createElement("li", null, l.default.createElement("span", {
                                    style: {
                                        backgroundColor: e.color
                                    }
                                }), l.default.createElement(o.default, {
                                    className: t.categorylabel
                                }, e.label))
                        }))))
        };
        s.propTypes = {
            classes: i.default.object.isRequired,
            chapterName: i.default.string.isRequired,
            layer: i.default.string.isRequired
        },
        t.default = (0, n.withStyles)((function (e) {
                return {
                    labelStyle: {
                        margin: "0 0 5px",
                        color: "#666",
                        textAlign: "left"
                    },
                    container: {
                        position: "fixed",
                        bottom: 3 * e.spacing.unit,
                        left: "30%",
                        marginLeft: 2 * e.spacing.unit,
                        marginBottom: 2 * e.spacing.unit,
                        zIndex: 105,
                        width: "250px",
                        paddingLeft: 2 * e.spacing.unit,
                        paddingRight: 2 * e.spacing.unit,
                        paddingTop: e.spacing.unit,
                        paddingBottom: e.spacing.unit,
                        "& ul": {
                            padding: 0,
                            margin: 0,
                            listStyle: "none"
                        },
                        "& ul li": {
                            padding: 0,
                            margin: 0,
                            fontSize: "10px",
                            color: "#666",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            lineHeight: "normal"
                        },
                        "& li.graph": {
                            clear: "both",
                            overflow: "hidden",
                            display: "table",
                            width: "100%",
                            height: "18px",
                            borderRadius: "3px",
                            border: "1px solid #b3b3b3",
                            "& .colors": {
                                display: "table-row"
                            },
                            "& div": {
                                height: "18px"
                            },
                            "& .quartile": {
                                display: "table-cell"
                            }
                        },
                        "& li.min": {
                            float: "left"
                        },
                        "& li.max": {
                            float: "right"
                        }
                    },
                    category: {
                        position: "fixed",
                        bottom: 3 * e.spacing.unit,
                        left: "30%",
                        marginLeft: 2 * e.spacing.unit,
                        marginBottom: 2 * e.spacing.unit,
                        zIndex: 105,
                        paddingLeft: 2 * e.spacing.unit,
                        paddingRight: 2 * e.spacing.unit,
                        paddingTop: e.spacing.unit,
                        paddingBottom: e.spacing.unit,
                        "& ul": {
                            padding: 0,
                            margin: 0,
                            listStyle: "none"
                        },
                        "& ul li": {
                            padding: 0,
                            margin: 0,
                            fontSize: "10px",
                            color: "#666",
                            fontWeight: 700,
                            lineHeight: "normal"
                        },
                        "& li span": {
                            width: "18px",
                            height: "18px",
                            borderRadius: "3px",
                            border: "1px solid #b3b3b3",
                            display: "inline-block"
                        }
                    },
                    categorylabel: {
                        display: "inline-block",
                        verticalAlign: "top",
                        lineHeight: "22px",
                        paddingLeft: "10px"
                    }
                }
            }))(s)
    },
    146: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a(1)),
        i = o(a(3)),
        n = a(22),
        r = o(a(36));
        a(21);
        function o(e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }
        var c = function (e) {
            var t = e.classes,
            a = e.features,
            i = e.tooltipOptions,
            n = a[0].properties;
            return l.default.createElement(r.default, {
                className: t.tooltip
            }, i.features.map((function (e) {
                        switch (e.type) {
                        case "title":
                            return l.default.createElement("div", {
                                className: t.item
                            }, l.default.createElement("span", {
                                    className: t.title
                                }, n[e.value]));
                        case "inline":
                            return l.default.createElement("div", {
                                className: t.item
                            }, l.default.createElement("span", {
                                    className: t.subtitle
                                }, n[e.value], " ", e.label));
                        default:
                            return l.default.createElement("div", {
                                className: t.item
                            }, l.default.createElement("div", {
                                    className: t.caption
                                }, e.label), l.default.createElement("div", {
                                    className: t.subtitle
                                }, n[e.value]))
                        }
                    })))
        };
        c.propTypes = {
            classes: i.default.object.isRequired,
            features: i.default.array.isRequired,
            tooltipOptions: i.default.object.isRequired
        },
        t.default = (0, n.withStyles)((function (e) {
                return {
                    tooltip: {
                        paddingLeft: 2 * e.spacing.unit,
                        paddingRight: 2 * e.spacing.unit,
                        paddingTop: e.spacing.unit,
                        backgroundColor: "rgba(255, 255, 255, 0.8)"
                    },
                    caption: {
                        fontFamily: ["Open Sans Condensed", "sans-serif"].join(","),
                        fontWeight: 700,
                        fontSize: 12,
                        textTransform: "uppercase",
                        color: "#666"
                    },
                    subtitle: {
                        fontFamily: ["Rubik", "Arial", "sans-serif"].join(","),
                        fontSize: 14,
                        color: "#000"
                    },
                    item: {
                        paddingBottom: e.spacing.unit
                    },
                    title: {
                        fontFamily: ["Open Sans Condensed", "sans-serif"].join(","),
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#333"
                    }
                }
            }))(c)
    },
    147: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = m(a(1)),
        i = m(a(3)),
        n = a(22),
        r = m(a(36)),
        o = m(a(148)),
        c = m(a(180)),
        d = m(a(184)),
        s = m(a(186)),
        u = m(a(190)),
        p = m(a(27)),
        f = a(21);
        function m(e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }
        var _ = function (e) {
            var t = e.classes,
            a = e.chapterName;
            if (void 0 === f.filters[a])
                return null;
            var i = f.filters[a];
            return l.default.createElement("div", {
                className: t.switch
            }, i.map((function (a) {
                        return l.default.createElement(r.default, {
                            className: t.paper
                        }, l.default.createElement(s.default, {
                                component: "fieldset"
                            }, l.default.createElement(u.default, {
                                    component: "legend",
                                    className: t.legend
                                }, l.default.createElement(p.default, {
                                        variant: "caption"
                                    }, a.label)), l.default.createElement(c.default, {
                                    "aria-label": a.label,
                                    name: a.value,
                                    value: e[a.value],
                                    onChange: e[a.onChange]
                                }, a.hasAll && l.default.createElement(d.default, {
                                        value: "all",
                                        style: {
                                            height: 36
                                        },
                                        control: l.default.createElement(o.default, null),
                                        label: "All"
                                    }), a.options.map((function (e) {
                                            return l.default.createElement(d.default, {
                                                value: e.value,
                                                style: {
                                                    height: 32
                                                },
                                                control: l.default.createElement(o.default, null),
                                                label: e.label
                                            })
                                        })))))
                    })))
        };
        _.propTypes = {
            classes: i.default.object.isRequired,
            chapterName: i.default.string.isRequired
        },
        t.default = (0, n.withStyles)((function (e) {
                return {
                    switch : {
                        position: "fixed",
                        bottom: 3 * e.spacing.unit,
                        right: 2 * e.spacing.unit,
                        zIndex: "100"
                    }, paper: {
                        paddingTop: e.spacing.unit,
                        paddingBottom: 0,
                        paddingLeft: 2 * e.spacing.unit,
                        paddingRight: 2 * e.spacing.unit,
                        marginBottom: 2 * e.spacing.unit
                    }, legend: {
                        textTransform: "uppercase",
                        textAlign: "center",
                        fontWeight: 700,
                        fontSize: 12
                    }
            }
        }))(_)
},
196: function (e, t, a) {
    var l = a(197);
    "string" == typeof l && (l = [[e.i, l, ""]]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    a(65)(l, i);
    l.locals && (e.exports = l.locals)
},
197: function (e, t, a) {
    (e.exports = a(64)(!1)).push([e.i, "body {\n  margin: 0;\n  background-color: #fafafa;\n}\n\n#features {\n  width: 30%;\n  margin-right: 70%;\n  font-family: sans-serif;\n  overflow-y: scroll;\n  background-color: #fafafa;\n}\nsection {\n  padding: 100px 25px;\n  line-height: 25px;\n  border-bottom: 1px solid #ddd;\n  opacity: 0.5;\n  font-size: 13px;\n  min-height: 90vh;\n}\nsection.active {\n  opacity: 1;\n}\nsection:last-child {\n  border-bottom: none;\n  margin-bottom: 200px;\n}\n\na {\n  text-decoration: none;\n  color: olivedrab;\n}\n\n.fig-caption {\n  text-decoration: none;\n}\n\n.mapLegend {\n  position: absolute;\n  bottom: 25px;\n  right: 5px;\n  z-index: 105;\n  width: 300px;\n  background: #ffffff;\n  padding: 10px 15px;\n  border-radius: 4px;\n  border: 1px solid #999;\n}\n.mapLegend ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.mapLegend ul li {\n  padding: 0;\n  margin: 0;\n  font-size: 10px;\n  color: #666;\n  font-weight: 700;\n  text-transform: uppercase;\n  line-height: normal;\n}\n\n.mapLegend li.graph {\n  clear: both;\n  overflow: hidden;\n  display: table;\n  width: 100%;\n  height: 18px;\n  border-radius: 3px;\n  border: 1px solid #b3b3b3;\n}\n\n.mapLegend li.graph .colors {\n  display: table-row;\n}\n\n.mapLegend li.graph div {\n  width: 100%;\n  height: 18px;\n}\n\n.mapLegend li.graph .quartile {\n  display: table-cell;\n}\n\n.mapLegend li.min {\n  float: left;\n  margin: 0 0 5px;\n}\n\n.mapLegend li.max {\n  float: right;\n  margin: 0 0 5px;\n}\n\n.figure {\n  object-fit: contain; \n  margin: 0px;\n  width: 100%; \n}\n\n.highlight {\n  color: tomato;\n}", ""])
},
21: function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = [29.913635, -3.384146],
    i = {
        climate_current: {
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 1
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 0
                }, {
                    id: "BDI_nbs",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                pitch: 0,
                bearing: 0,
                zoom: 7.8,
                center: l,
                duration: 800
            }
        },
        hotspots: {
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 1
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 0
                }, {
                    id: "BDI_nbs",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                center: l,
                zoom: 7.8,
                bearing: 0,
                pitch: 0,
                duration: 800
            }
        },
        climate_projections: {
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 1
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 0
                }, {
                    id: "BDI_nbs",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                pitch: 0,
                bearing: 0,
                zoom: 7.8,
                center: l,
                duration: 800
            }
        },
        disasters: {
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: {
                        stops: [[8.5, 1], [9, 0]]
                    }
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: {
                        stops: [[8.5, 0], [9, 1]]
                    }
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 0
                }, {
                    id: "BDI_nbs",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                pitch: 0,
                bearing: 0,
                zoom: 7.8,
                center: l,
                duration: 800
            }
        },
        migration: {
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 1
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                pitch: 0,
                bearing: 0,
                maxZoom: 11,
                center: l,
                duration: 800
            }
        },
        conflict: {
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 1
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 0
                }, {
                    id: "BDI_nbs",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                center: l,
                zoom: 7.8,
                bearing: 0,
                pitch: 0,
                duration: 800
            }
        },
        vulnerability: {
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 1
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 0
                }, {
                    id: "BDI_nbs",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                center: l,
                zoom: 7.8,
                bearing: 0,
                pitch: 0,
                duration: 800
            }
        },
        lack_of_coping_capacity: {
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 1
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 0
                }, {
                    id: "BDI_nbs",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                center: l,
                zoom: 7.8,
                bearing: 0,
                pitch: 0,
                duration: 800
            }
        },
        hazard_exposure: {
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 1
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 0
                }, {
                    id: "BDI_nbs",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                center: l,
                zoom: 7.8,
                bearing: 0,
                pitch: 0,
                duration: 800
            }
        },
        land_erosion: {
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 1
                }, {
                    id: "BDI_nbs",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                center: l,
                zoom: 7.8,
                bearing: 0,
                pitch: 0,
                duration: 800
            }
        },
        nbs: {
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 0
                }, {
                    id: "BDI_nbs",
                    opacity: 1
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                center: l,
                zoom: 7.8,
                bearing: 0,
                pitch: 0,
                duration: 800
            }
        },
        hazard_projections_2030_rcp45: { // RIGHT LEGENDS
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 0
                }, {
                    id: "BDI_nbs",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 1
                }, {
					id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                center: l,
                zoom: 7.8,
                bearing: 0,
                pitch: 0,
                duration: 800
            }
        },
        hazard_projections_2030_rcp85: { // RIGHT LEGENDS
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 0
                }, {
                    id: "BDI_nbs",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 1
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                center: l,
                zoom: 7.8,
                bearing: 0,
                pitch: 0,
                duration: 800
            }
        },
        hazard_projections_2050_rcp45: {
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 0
                }, {
                    id: "BDI_nbs",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 1
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 0
                }
            ],
            layout: [],
            position: {
                center: l,
                zoom: 7.8,
                bearing: 0,
                pitch: 0,
                duration: 800
            }
        },
        hazard_projections_2050_rcp85: {
            paint: [{
                    id: "BDI_climate_cdd",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx",
                    opacity: 0
                }, {
                    id: "BDI_climate_cdd_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_prcptot_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_rx5_proj",
                    opacity: 0
                }, {
                    id: "BDI_climate_txx_proj",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_heat",
                    opacity: 0
                }, {
                    id: "BDI_historical_disasters_point",
                    opacity: 0
                }, {
                    id: "BDI_migration",
                    opacity: 0
                }, {
                    id: "BDI_conflict_UCDP_pol",
                    opacity: 0
                }, {
                    id: "BDI_conflict_trends",
                    opacity: 0
                }, {
                    id: "BDI_inform_vuln",
                    opacity: 0
                }, {
                    id: "BDI_inform_lack",
                    opacity: 0
                }, {
                    id: "BDI_inform_he",
                    opacity: 0
                }, {
                    id: "BDI_inform_risk",
                    opacity: 0
                }, {
                    id: "BDI_erosion",
                    opacity: 0
                }, {
                    id: "BDI_nbs",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_30_rcp85",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp45",
                    opacity: 0
                }, {
                    id: "BDI_inform_he_proj_50_rcp85",
                    opacity: 1
                }
            ],
            layout: [],
            position: {
                center: l,
                zoom: 7.8,
                bearing: 0,
                pitch: 0,
                duration: 800
            }
        }
    };
    t.chapters = i,
    t.filters = {
        climate_current: [{
                hasAll: !1,
                value: "layer",
                label: "Layers",
                onChange: "updateLayer",
                options: [{
                        label: "CDD",
                        value: "BDI_climate_cdd",
                        stops: [[46.2, "#081d58"], [58.4, "#225ea8"], [70.6, "#41b6c4"], [82.8, "#c7e9b4"], [96, "#ffffd9"]]
                    }, {
                        label: "PRCPTOT",
                        value: "BDI_climate_prcptot",
                        stops: [[750, "#ffffd9"], [1e3, "#c7e9b4"], [1250, "#41b6c4"], [1500, "#225ea8"], [2e3, "#081d58"]]
                    }, {
                        label: "RX5day",
                        value: "BDI_climate_rx5",
                        stops: [[65, "#ffffd9"], [80, "#c7e9b4"], [95, "#41b6c4"], [110, "#225ea8"], [125, "#081d58"]]
                    }, {
                        label: "TXx",
                        value: "BDI_climate_txx",
                        stops: [[32.2, "#dddcdc"], [33.4, "#f3c8b2"], [34.6, "#f6a586"], [35.8, "#e7745b"], [37, "#c83836"]]
                    }
                ]
            }
        ],
        hotspots: [{
                hasAll: !1,
                value: "layer",
                label: "Final inform risk",
                onChange: "updateLayer",
                options: [{
                        label: "INFORM risk",
                        value: "BDI_inform_risk",
                        stops: [[1.9, "#fec8c0"], [3.4, "#fe9181"], [4.9, "#fe5b42"], [6.4, "#911300"], [10, "#610d00"]]
                    }, {
                        label: "Hazard Exposure",
                        value: "BDI_inform_he",
                        stops: [[1.4, "#fce6d8"], [2.6, "#facdb2"], [4, "#f8b48b"], [6, "#d9580c"], [10, "#913b08"]]
                    }, {
                        label: "Vulnerability",
                        value: "BDI_inform_vuln",
                        stops: [[1.9, "#ccd9ed"], [3.2, "#99b3dc"], [4.7, "#668ecb"], [6.3, "#20385e"], [10, "#15263f"]]
                    }, {
                        label: "Lack of Coping Capacity",
                        value: "BDI_inform_lack",
                        stops: [[3.1, "#e1e9d7"], [4.6, "#c4d3b0"], [5.9, "#a7bd89"], [7.3, "#4f6236"], [10, "#354124"]]
                    }
                ]
            }
        ],
        climate_projections: [{
                hasAll: !1,
                value: "layer",
                label: "Layers",
                onChange: "updateLayer",
                options: [{
                        label: "CDD change RCP45",
                        value: "BDI_climate_cdd_proj",
                        stops: [[-20, "#01564d"], [-15, "#2f9189"], [-10, "#8ad1c6"], [-5, "#d9eeeb"], [0, "#f6edd5"], [5, "#e1c684"], [10, "#b77928"], [15, "#754308"], [20, "#543005"]]
                    }, {
                        label: "PRCPTOT change RCP45",
                        value: "BDI_climate_prcptot_proj",
                        stops: [[-20, "#774508"], [-15, "#b97b29"], [-10, "#e2c787"], [-5, "#f6edd7"], [0, "#d7eeeb"], [5, "#87d0c5"], [10, "#2d8f87"], [15, "#01564d"]]
                    }, {
                        label: "RX5day change RCP45",
                        value: "BDI_climate_rx5_proj",
                        stops: [[-20, "#774508"], [-15, "#b97b29"], [-10, "#e2c787"], [-5, "#f6edd7"], [0, "#d7eeeb"], [5, "#87d0c5"], [10, "#2d8f87"], [15, "#01564d"]]
                    }, {
                        label: "TXx change RCP45",
                        value: "BDI_climate_txx_proj",
                        stops: [[.5, "#fff0dc"], [1, "#fee2bb"], [1.5, "#fdce98"], [2, "#fdb67f"], [2.5, "#fc8c59"], [3, "#f0694a"], [3.5, "#dc3c28"], [4, "#be0f0a"], [4.5, "#960000"], [5, "#7f0000"]]
                    }
                ]
            }, {
                hasAll: !1,
                value: "climateYear",
                label: "Timespan",
                onChange: "updateClimateYear",
                options: [{
                        label: "2020-2040 w.r.t 1981-2000",
                        value: "change_2030_mean"
                    }, {
                        label: "2030-2050 w.r.t 1981-2000",
                        value: "change_2050_mean"
                    }
                ]
            }
        ],
        disasters: [{
                hasAll: !0,
                value: "disasterType",
                label: "Hazard Type",
                onChange: "updateDisasterType",
                options: [{
                        label: "Drought",
                        value: "Drought"
                    }, {
                        label: "Heavy rainfall",
                        value: "Heavy rainfall"
                    }, {
                        label: "Epidemic",
                        value: "Epidemic"
                    }, {
                        label: "Wildfire",
                        value: "Wildfire"
                    }, {
                        label: "Violent wind",
                        value: "Violent wind"
                    }
                ]
            }
        ],
        conflict: [{
                hasAll: !1,
                value: "layer",
                label: "Conflict hotspots",
                onChange: "updateLayer",
                options: [{
                        label: "Past (1989 - 2020)",
                        value: "BDI_conflict_UCDP_pol"
                    }, {
                        label: "Future trends",
                        value: "BDI_conflict_trends"
                    }
                ]
            }
        ],
        vulnerability: [{
                hasAll: !1,
                value: "layerVuln",
                label: "Vulnerability indicators",
                onChange: "updateLayerVuln",
                options: [{
                        label: "Composite vulnerability score",
                        value: "VULNERABILITY"
                    }, {
                        label: "Multidimensional Poverty Index",
                        value: "Multidimensional Poverty Index INDEX"
                    }, {
                        label: "Malaria Mortality rate",
                        value: "Malaria Mortality rate INDEX"
                    }, {
                        label: "Food insecurity",
                        value: "Food insecurity (categories) INDEX"
                    }, {
                        label: "People in need",
                        value: "People in need FINAL INDEX"
                    }, {
                        label: "Elderly over 60",
                        value: "Elderly over 60 FINAL INDEX"
                    }, {
                        label: "Children under 5",
                        value: "Children under 5 FINAL INDEX"
                    }, {
                        label: "Pregnant women ",
                        value: "Pregnant women FINAL INDEX"
                    }, {
                        label: "IDPs",
                        value: "IDPs FINAL INDEX"
                    }
                ]
            }
        ],
        lack_of_coping_capacity: [{
                hasAll: !1,
                value: "layerLOCC",
                label: "Lack of coping capacity indicators",
                onChange: "updateLayerLOCC",
                options: [{
                        label: "Lack of coping capacity score",
                        value: "LACK OF COPING CAPACITY"
                    }, {
                        label: "Lack of access to healthcare",
                        value: "Access to healthcare INDEX FINAL"
                    }, {
                        label: "Lack of access to education",
                        value: "Access to education INDEX FINAL"
                    }, {
                        label: "Lack of access to electricity",
                        value: "Access to electricity Relative INDEX"
                    }, {
                        label: "Lack of access to cities",
                        value: "Access to cities INDEX"
                    }
                ]
            }
        ],
        hazard_exposure: [{
                hasAll: !1,
                value: "layerHe",
                label: "Hazard exposure indicators",
                onChange: "updateLayerHe",
                options: [{
                        label: "Hazard exposure score",
                        value: "HAZARD & EXPOSURE"
                    }, {
                        label: "Flood exposure",
                        value: "Flood exposure FINAL INDEX"
                    }, {
                        label: "Drought exposure",
                        value: "Drought exposure FINAL INDEX"
                    }, {
                        label: "Landslide exposure",
                        value: "Landslide exposure  FINAL INDEX"
                    }, {
                        label: "Conflict trends",
                        value: "Conflict FINAL INDEX"
                    }
                ]
            }
        ],
        hazard_projections_2030_rcp45: [{
                hasAll: !1,
                value: "layerHe30_45",
                label: "Hazard exposure indicators",
                onChange: "updateLayerHe30_45",
                options: [{
                        label: "Hazard exposure",
                        value: "proj_hazard_rcp45_2030"
                    }, {
                        label: "Flood exposure",
                        value: "proj_flood_rcp45_2030"
                    }, {
                        label: "Drought exposure",
                        value: "proj_drought_rcp45_2030"
                    }, {
                        label: "Landslide exposure",
                        value: "proj_landslide_rcp45_2030"
                    }
                ]
            }
        ],
        hazard_projections_2030_rcp85: [{
                hasAll: !1,
                value: "layerHe30_85",
                label: "Hazard exposure indicators",
                onChange: "updateLayerHe30_85",
                options: [{
                        label: "Hazard exposure",
                        value: "proj_hazard_rcp85_2030"
                    }, {
                        label: "Flood exposure",
                        value: "proj_flood_rcp85_2030"
                    }, {
                        label: "Drought exposure",
                        value: "proj_drought_rcp85_2030"
                    }, {
                        label: "Landslide exposure",
                        value: "proj_landslide_rcp85_2030"
                    }
                ]
            }
        ],
        hazard_projections_2050_rcp45: [{
                hasAll: !1,
                value: "layerHe50_45",
                label: "Hazard exposure indicators",
                onChange: "updateLayerHe50_45",
                options: [{
                        label: "Hazard exposure",
                        value: "proj_hazard_rcp45_2050"
                    }, {
                        label: "Flood exposure",
                        value: "proj_flood_rcp45_2050"
                    }, {
                        label: "Drought exposure",
                        value: "proj_drought_rcp45_2050"
                    }, {
                        label: "Landslide exposure",
                        value: "proj_landslide_rcp45_2050"
                    }
                ]
            }
        ],
        hazard_projections_2050_rcp85: [{
                hasAll: !1,
                value: "layerHe50_85",
                label: "Hazard exposure indicators",
                onChange: "updateLayerHe50_85",
                options: [{
                        label: "Hazard exposure",
                        value: "proj_hazard_rcp85_2050"
                    }, {
                        label: "Flood exposure",
                        value: "proj_flood_rcp85_2050"
                    }, {
                        label: "Drought exposure",
                        value: "proj_drought_rcp85_2050"
                    }, {
                        label: "Landslide exposure",
                        value: "proj_landslide_rcp85_2050"
                    }
                ]
            }
        ]
    },
    t.legendOptions = {
        BDI_climate_cdd: {
            name: "MAXIMUM NUMBER OF CONSECUTIVE DRY DAYS WITH RR<1 MM (days)",
            colors: ["#081d58", "#225ea8", "#41b6c4", "#c7e9b4", "#ffffd9"],
            min: 35,
            max: 95,
            range: !0
        },
        BDI_climate_prcptot: {
            name: "MEAN ANNUAL TOTAL PRECIPITATION (mm)",
            colors: ["#ffffd9", "#c7e9b4", "#41b6c4", "#225ea8", "#081d58"],
            min: 820,
            max: 1240,
            range: !0
        },
        BDI_climate_rx5: {
            name: "MAXIMUM 5-DAY PRECIPITATION TOTAL (mm)",
            colors: ["#ffffd9", "#c7e9b4", "#41b6c4", "#225ea8", "#081d58"],
            min: 50,
            max: 125,
            range: !0
        },
        BDI_climate_txx: {
            name: "MAXIMUM OF MAXIMUM TEMPERATURE (°C)",
            colors: ["#dddcdc", "#f3c8b2", "#f6a586", "#e7745b", "#c83836"],
            min: 30,
            max: 37,
            range: !0
        },
        BDI_climate_cdd_proj: {
            name: "MAXIMUM NUMBER OF CONSECUTIVE DRY DAYS CHANGE (%)",
            colors: ["#01564d", "#2f9189", "#8ad1c6", "#d9eeeb", "#f6edd5", "#e1c684", "#b77928", "#754308", "#543005"],
            min: -20,
            max: 20,
            range: !0
        },
        BDI_climate_prcptot_proj: {
            name: "MEAN ANNUAL TOTAL PRECIPITATION CHANGE (%)",
            colors: ["#774508", "#b97b29", "#e2c787", "#f6edd7", "#d7eeeb", "#87d0c5", "#2d8f87", "#01564d"],
            min: -20,
            max: 20,
            range: !0
        },
        BDI_climate_rx5_proj: {
            name: "MAXIMUM 5-DAY PRECIPITATION TOTAL CHANGE (%)",
            colors: ["#774508", "#b97b29", "#e2c787", "#f6edd7", "#d7eeeb", "#87d0c5", "#2d8f87", "#01564d"],
            min: -20,
            max: 20,
            range: !0
        },
        BDI_climate_txx_proj: {
            name: "MAXIMUM OF MAXIMUM TEMPERATURE (°C) CHANGE (%)",
            colors: ["#fff0dc", "#fee2bb", "#fdce98", "#fdb67f", "#fc8c59", "#f0694a", "#dc3c28", "#be0f0a", "#960000", "#7f0000"],
            min: 0,
            max: 5,
            range: !0
        },
        BDI_historical_disasters: {
            name: "Hazard type",
            colors: [{
                    label: "Drought",
                    color: "#fbb03b"
                }, {
                    label: "Heavy rainfall",
                    color: "#223b53"
                }, {
                    label: "Epidemic",
                    color: "#e55e5e"
                }, {
                    label: "Wildfire",
                    color: "#168C04"
                }, {
                    label: "Violent wind",
                    color: "#3bb2d0"
                }
            ],
            range: !1
        },
        BDI_migration: {
            name: "Number of IDPs",
            colors: ["#f3ffff", "#d6fff3", "#baefd6", "#84b7a0", "#51826c"],
            min: "< 10",
            max: "1000 +",
            range: !0
        },
        BDI_conflict_UCDP_pol: {
            name: "Number of fatalities",
            colors: ["#feebe2", "#fbb4b9"],
            min: "< 1",
            max: "100+",
            range: !0
        },
        BDI_conflict_trends: {
            name: "Type of conflict",
            colors: [{
                    label: "Violence against civilians",
                    color: "#5e91b2"
                }, {
                    label: "Riots",
                    color: "#ca7934"
                }, {
                    label: "Battles",
                    color: "#ffd945"
                }, {
                    label: "Other",
                    color: "#6e8a64"
                }
            ],
            range: !1
        },
        BDI_inform_vuln: {
            name: "Vulnerability Index",
            colors: [{
                    label: "Very low",
                    color: "#ccd9ed"
                }, {
                    label: "Low",
                    color: "#99b3dc"
                }, {
                    label: "Medium",
                    color: "#668ecb"
                }, {
                    label: "High",
                    color: "#20385e"
                }, {
                    label: "Very high",
                    color: "#15263f"
                }
            ],
            range: !1
        },
        BDI_inform_lack: {
            name: "Lack of coping capacity",
            colors: [{
                    label: "Very low",
                    color: "#e1e9d7"
                }, {
                    label: "Low",
                    color: "#c4d3b0"
                }, {
                    label: "Medium",
                    color: "#a7bd89"
                }, {
                    label: "High",
                    color: "#4f6236"
                }, {
                    label: "Very high",
                    color: "#354124"
                }
            ],
            range: !1
        },
        BDI_inform_he: {
            name: "Hazard exposure levels",
            colors: [{
                    label: "Very low",
                    color: "#fce6d8"
                }, {
                    label: "Low",
                    color: "#facdb2"
                }, {
                    label: "Medium",
                    color: "#f8b48b"
                }, {
                    label: "High",
                    color: "#d9580c"
                }, {
                    label: "Very high",
                    color: "#913b08"
                }
            ],
            range: !1
        },
        BDI_inform_risk: {
            name: "Inform risk",
            colors: [{
                    label: "Very low",
                    color: "#fec8c0"
                }, {
                    label: "Low",
                    color: "#fe9181"
                }, {
                    label: "Medium",
                    color: "#fe5b42"
                }, {
                    label: "High",
                    color: "#911300"
                }, {
                    label: "Very high",
                    color: "#610d00"
                }
            ],
            range: !1
        },
        BDI_erosion: {
            name: "Mean erosion rate (tons/ha/year)",
            colors: ["#404040", "#767676", "#acacac", "#d1d2d1", "#f0f0f0", "#f9eae4", "#f2c0b1", "#e58f80", "#dc4650", "#c60b27"],
            min: 13,
            max: 7770,
            range: !0
        },
        BDI_nbs: {
            name: "NBS potential index",
            colors: ["#a5601c", "#b98e59", "#d5b47a", "#e4cda7", "#f2e9d8", "#dce9e8", "#acd5d1", "#7cbdb3", "#469b8c", "#0f7c69"],
            min: 0,
            max: 1,
            range: !0
        },
        BDI_inform_he_proj_30_rcp45: {
            name: "Hazard exposure levels", // LEGENDS ON THE LEFT
            colors: [{
                    label: "Very low",
                    color: "#fce6d8"
                }, {
                    label: "Low",
                    color: "#facdb2"
                }, {
                    label: "Medium",
                    color: "#f8b48b"
                }, {
                    label: "High",
                    color: "#d9580c"
                }, {
                    label: "Very high",
                    color: "#913b08"
                }
            ],
            range: !1
        },
        BDI_inform_he_proj_30_rcp85: {
            name: "Hazard exposure levels", // LEGENDS ON THE LEFT
            colors: [{
                    label: "Very low",
                    color: "#fce6d8"
                }, {
                    label: "Low",
                    color: "#facdb2"
                }, {
                    label: "Medium",
                    color: "#f8b48b"
                }, {
                    label: "High",
                    color: "#d9580c"
                }, {
                    label: "Very high",
                    color: "#913b08"
                }
            ],
            range: !1
        },
        BDI_inform_he_proj_50_rcp45: {
            name: "Hazard exposure levels",
            colors: [{
                    label: "Very low",
                    color: "#fce6d8"
                }, {
                    label: "Low",
                    color: "#facdb2"
                }, {
                    label: "Medium",
                    color: "#f8b48b"
                }, {
                    label: "High",
                    color: "#d9580c"
                }, {
                    label: "Very high",
                    color: "#913b08"
                }
            ],
            range: !1
        },
        BDI_inform_he_proj_50_rcp85: {
            name: "Hazard exposure levels",
            colors: [{
                    label: "Very low",
                    color: "#fce6d8"
                }, {
                    label: "Low",
                    color: "#facdb2"
                }, {
                    label: "Medium",
                    color: "#f8b48b"
                }, {
                    label: "High",
                    color: "#d9580c"
                }, {
                    label: "Very high",
                    color: "#913b08"
                }
            ],
            range: !1
        }
    },
    t.chapterLayers = {
        climate_current: ["BDI_climate_cdd", "BDI_climate_prcptot", "BDI_climate_rx5", "BDI_climate_txx"],
        hotspots: ["BDI_inform_risk", "BDI_inform_he", "BDI_inform_vuln", "BDI_inform_lack"],
        climate_projections: ["BDI_climate_cdd_proj", "BDI_climate_prcptot_proj", "BDI_climate_rx5_proj", "BDI_climate_txx_proj"],
        disasters: ["BDI_historical_disasters"],
        migration: ["BDI_migration"],
        conflict: ["BDI_conflict_UCDP_pol", "BDI_conflict_trends"],
        vulnerability: ["BDI_inform_vuln"],
        lack_of_coping_capacity: ["BDI_inform_lack"],
        hazard_exposure: ["BDI_inform_he"],
        land_erosion: ["BDI_erosion"],
        nbs: ["BDI_nbs"],
        hazard_projections_2030_rcp45: ["BDI_inform_he_proj_30_rcp45"],
        hazard_projections_2030_rcp85: ["BDI_inform_he_proj_30_rcp85"],
        hazard_projections_2050_rcp45: ["BDI_inform_he_proj_50_rcp45"],
        hazard_projections_2050_rcp85: ["BDI_inform_he_proj_50_rcp85"]
    },
    t.tooltipConfig = {
        BDI_climate_cdd: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Current climatology",
                    value: "obs_mean"
                }
            ]
        },
        BDI_climate_prcptot: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Current climatology",
                    value: "obs_mean"
                }
            ]
        },
        BDI_climate_rx5: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Current climatology",
                    value: "obs_mean"
                }
            ]
        },
        BDI_climate_txx: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Current climatology",
                    value: "obs_mean"
                }
            ]
        },
        BDI_historical_disasters_point: {
            features: [{
                    label: "Main hazard: ",
                    value: "main_hazard"
                }, {
                    label: "Cascading/compounding disasters: ",
                    value: "second_disaster"
                }, {
                    label: "Date: ",
                    value: "Date"
                }
            ]
        },
        BDI_climate_cdd_proj: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Projections RCP45 for 2030",
                    value: "change_2030_mean"
                }, {
                    label: "Projections RCP45 for 2050",
                    value: "change_2050_mean"
                }
            ]
        },
        BDI_climate_prcptot_proj: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Projections RCP45 for 2030",
                    value: "change_2030_mean"
                }, {
                    label: "Projections RCP45 for 2050",
                    value: "change_2050_mean"
                }
            ]
        },
        BDI_climate_rx5_proj: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Projections RCP45 for 2030",
                    value: "change_2030_mean"
                }, {
                    label: "Projections RCP45 for 2050",
                    value: "change_2050_mean"
                }
            ]
        },
        BDI_climate_txx_proj: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Projections RCP45 for 2030",
                    value: "change_2030_mean"
                }, {
                    label: "Projections RCP45 for 2050",
                    value: "change_2050_mean"
                }
            ]
        },
        BDI_migration: {
            features: [{
                    label: "IDPs",
                    value: "individus_int",
                    type: "inline"
                }
            ]
        },
        BDI_conflict_UCDP_pol: {
            features: [{
                    label: "NAME",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "fatalities",
                    value: "fat",
                    type: "inline"
                }
            ]
        },
        BDI_conflict_trends: {
            features: [{
                    label: " ",
                    value: "Con_type",
                    type: "inline"
                }
            ]
        },
        BDI_inform_vuln: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Vulnerability index",
                    value: "VULNERABILITY"
                }, {
                    label: "Multidimensional Poverty Index",
                    value: "Multidimensional Poverty Index INDEX"
                }, {
                    label: "Malaria Mortality rate",
                    value: "Malaria Mortality rate INDEX"
                }, {
                    label: "Food insecurity (categories) INDEX",
                    value: "Food insecurity (categories) INDEX"
                }, {
                    label: "People in need FINAL INDEX",
                    value: "People in need FINAL INDEX"
                }, {
                    label: "Elderly over 60 FINAL INDEX",
                    value: "Elderly over 60 FINAL INDEX"
                }, {
                    label: "Children under 5 FINAL INDEX",
                    value: "Children under 5 FINAL INDEX"
                }, {
                    label: "Pregnant women FINAL INDEX",
                    value: "Pregnant women FINAL INDEX"
                }, {
                    label: "IDPs FINAL INDEX",
                    value: "IDPs FINAL INDEX"
                }
            ]
        },
        BDI_inform_lack: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Lack of coping capacity score",
                    value: "LACK OF COPING CAPACITY"
                }, {
                    label: "Access to healthcare",
                    value: "Access to healthcare INDEX FINAL"
                }, {
                    label: "Access to education",
                    value: "Access to education INDEX FINAL"
                }, {
                    label: "Access to electricity",
                    value: "Access to electricity Relative INDEX"
                }, {
                    label: "Access to cities",
                    value: "Access to cities INDEX"
                }
            ]
        },
        BDI_inform_he: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Hazard exposure score",
                    value: "HAZARD & EXPOSURE"
                }, {
                    label: "Flood exposure",
                    value: "Flood exposure FINAL INDEX"
                }, {
                    label: "Drought exposure",
                    value: "Drought exposure FINAL INDEX"
                }, {
                    label: "Landslide exposure",
                    value: "Landslide exposure  FINAL INDEX"
                }, {
                    label: "Conflict trends",
                    value: "Conflict FINAL INDEX"
                }
            ]
        },
        BDI_inform_risk: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "INFORM index",
                    value: "INFORM RISK INDEX SCORE"
                }, {
                    label: "Hazard exposure",
                    value: "HAZARD & EXPOSURE"
                }, {
                    label: "Lack of coping capacity",
                    value: "LACK OF COPING CAPACITY"
                }, {
                    label: "Vulnerability",
                    value: "VULNERABILITY"
                }
            ]
        },
        BDI_erosion: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Erosion rate, tons/ha/year",
                    value: "Average erosion rate by colline, tons/ha/year"
                }
            ]
        },
        BDI_nbs: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "NBS Potential Index",
                    value: "NBS Potential Index"
                }
            ]
        },
        BDI_inform_he_proj_30_rcp45: { // values on map
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Hazard exposure 2030 RCP 4.5",
                    value: "proj_hazard_rcp45_2030"
                }, {
                    label: "Flood exposure 2030 RCP 4.5",
                    value: "proj_flood_rcp45_2030"
                }, {
                    label: "Drought exposure 2030 RCP 4.5",
                    value: "proj_drought_rcp45_2030"
                }, {
                    label: "Landslide exposure 2030 RCP 4.5",
                    value: "proj_landslide_rcp45_2030"
                }
            ]
        },
		BDI_inform_he_proj_30_rcp85: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Hazard exposure 2030 RCP 8.5",
                    value: "proj_hazard_rcp85_2030"
                }, {
                    label: "Flood exposure 2030 RCP 8.5",
                    value: "proj_flood_rcp85_2030"
                }, {
                    label: "Drought exposure 2030 RCP 8.5",
                    value: "proj_drought_rcp85_2030"
                }, {
                    label: "Landslide exposure 2030 RCP 8.5",
                    value: "proj_landslide_rcp85_2030"
                }
            ]
        },
        BDI_inform_he_proj_50_rcp45: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Hazard exposure 2050 RCP 4.5",
                    value: "proj_hazard_rcp45_2050"
                }, {
                    label: "Flood exposure 2050 RCP 4.5",
                    value: "proj_flood_rcp45_2050"
                }, {
                    label: "Drought exposure 2050 RCP 4.5",
                    value: "proj_drought_rcp45_2050"
                }, {
                    label: "Landslide exposure 2050 RCP 4.5",
                    value: "proj_landslide_rcp45_2050"
                }
            ]
        },
        BDI_inform_he_proj_50_rcp85: {
            features: [{
                    label: "Name",
                    value: "NAME_ADM3",
                    type: "title"
                }, {
                    label: "Hazard exposure 2050 RCP 8.5",
                    value: "proj_hazard_rcp85_2050"
                }, {
                    label: "Flood exposure 2050 RCP 8.5",
                    value: "proj_flood_rcp85_2050"
                }, {
                    label: "Drought exposure 2050 RCP 8.5",
                    value: "proj_drought_rcp85_2050"
                }, {
                    label: "Landslide exposure 2050 RCP 8.5",
                    value: "proj_landslide_rcp85_2050"
                }
            ]
        }
    },
    t.tooltipLayers = {
        climate_current: ["BDI_climate_cdd", "BDI_climate_prcptot", "BDI_climate_rx5", "BDI_climate_txx"],
        climate_projections: ["BDI_climate_cdd_proj", "BDI_climate_prcptot_proj", "BDI_climate_rx5_proj", "BDI_climate_txx_proj"],
        disasters: ["BDI_historical_disasters_point"],
        migration: ["BDI_migration"],
        conflict: ["BDI_conflict_UCDP_pol", "BDI_conflict_trends"],
        vulnerability: ["BDI_inform_vuln"],
        lack_of_coping_capacity: ["BDI_inform_lack"],
        hazard_exposure: ["BDI_inform_he"],
        hotspots: ["BDI_inform_risk"],
        land_erosion: ["BDI_erosion"],
        nbs: ["BDI_nbs"],
        hazard_projections_2030_rcp45: ["BDI_inform_he_proj_30_rcp45"],
        hazard_projections_2030_rcp85: ["BDI_inform_he_proj_30_rcp85"],
        hazard_projections_2050_rcp45: ["BDI_inform_he_proj_50_rcp45"],
        hazard_projections_2050_rcp85: ["BDI_inform_he_proj_50_rcp85"]
    },
    t.vulnerabilityStops = [[1.9, "#ccd9ed"], [3.2, "#99b3dc"], [4.7, "#668ecb"], [6.3, "#20385e"], [10, "#15263f"]],
    t.loccStops = [[3.1, "#e1e9d7"], [4.6, "#c4d3b0"], [5.9, "#a7bd89"], [7.3, "#4f6236"], [10, "#354124"]],
    t.heStops = [[1.4, "#fce6d8"], [2.6, "#facdb2"], [4, "#f8b48b"], [6, "#d9580c"], [10, "#913b08"]],
    t.riskStops = [[1.9, "#fec8c0"], [3.4, "#fe9181"], [4.9, "#fe5b42"], [6.4, "#911300"], [10, "#610d00"]]
},
67: function (e, t, a) {
    "use strict";
    var l = c(a(1)),
    i = a(18),
    n = a(22),
    r = c(a(40)),
    o = c(a(133));
    a(193),
    a(196);
    a(198);
    function c(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    var d = (0, n.createMuiTheme)({
        palette: {
            primary: {
                main: "#2e7d32"
            },
            secondary: r.default
        },
        typography: {
            fontFamily: ["Rubik", "Arial", "sans-serif"].join(","),
            h1: {
                fontFamily: ["DM Serif Display", "serif"].join(",")
            },
            h2: {
                fontFamily: ["DM Serif Display", "serif"].join(",")
            },
            h3: {
                fontFamily: ["DM Serif Display", "serif"].join(","),
                marginBottom: 10
            },
            h4: {
                fontFamily: ["DM Serif Display", "serif"].join(",")
            },
            h5: {
                fontFamily: ["DM Serif Display", "serif"].join(",")
            },
            h6: {
                fontFamily: ["Rubik", "Arial", "sans-serif"].join(","),
                fontSize: 14,
                fontWeight: "fontWeightMedium",
                letterSpacing: 2,
                marginTop: 5,
                marginBottom: 5
            },
            caption: {
                fontFamily: ["Open Sans Condensed", "sans-serif"].join(","),
                fontWeight: 700
            }
        }
    });
    (0, i.render)(l.default.createElement((function () {
                return l.default.createElement(n.MuiThemeProvider, {
                    theme: d
                }, l.default.createElement(o.default, null))
            }), null), document.getElementById("root"))
}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi0wZDMwODM3MGUxYTBlZTAxODg3My5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9tYWluLTBkMzA4MzcwZTFhMGVlMDE4ODczLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe2Zvcih2YXIgbCxyLG89dFswXSxjPXRbMV0sZD10WzJdLHU9MCxwPVtdO3U8by5sZW5ndGg7dSsrKXI9b1t1XSxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaSxyKSYmaVtyXSYmcC5wdXNoKGlbcl1bMF0pLGlbcl09MDtmb3IobCBpbiBjKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjLGwpJiYoZVtsXT1jW2xdKTtmb3IocyYmcyh0KTtwLmxlbmd0aDspcC5zaGlmdCgpKCk7cmV0dXJuIG4ucHVzaC5hcHBseShuLGR8fFtdKSxhKCl9ZnVuY3Rpb24gYSgpe2Zvcih2YXIgZSx0PTA7dDxuLmxlbmd0aDt0Kyspe2Zvcih2YXIgYT1uW3RdLGw9ITAsbz0xO288YS5sZW5ndGg7bysrKXt2YXIgYz1hW29dOzAhPT1pW2NdJiYobD0hMSl9bCYmKG4uc3BsaWNlKHQtLSwxKSxlPXIoci5zPWFbMF0pKX1yZXR1cm4gZX12YXIgbD17fSxpPXttYWluOjB9LG49W107ZnVuY3Rpb24gcih0KXtpZihsW3RdKXJldHVybiBsW3RdLmV4cG9ydHM7dmFyIGE9bFt0XT17aTp0LGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbdF0uY2FsbChhLmV4cG9ydHMsYSxhLmV4cG9ydHMsciksYS5sPSEwLGEuZXhwb3J0c31yLm09ZSxyLmM9bCxyLmQ9ZnVuY3Rpb24oZSx0LGEpe3IubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDphfSl9LHIucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPXIoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIGE9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIoYSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBsIGluIGUpci5kKGEsbCxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLGwpKTtyZXR1cm4gYX0sci5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiByLmQodCxcImFcIix0KSx0fSxyLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHIucD1cIlwiO3ZhciBvPXdpbmRvdy53ZWJwYWNrSnNvbnA9d2luZG93LndlYnBhY2tKc29ucHx8W10sYz1vLnB1c2guYmluZChvKTtvLnB1c2g9dCxvPW8uc2xpY2UoKTtmb3IodmFyIGQ9MDtkPG8ubGVuZ3RoO2QrKyl0KG9bZF0pO3ZhciBzPWM7bi5wdXNoKFs2NyxcInZlbmRvclwiXSksYSgpfSh7MTMzOmZ1bmN0aW9uKGUsdCxhKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIGE9MDthPHQubGVuZ3RoO2ErKyl7dmFyIGw9dFthXTtsLmVudW1lcmFibGU9bC5lbnVtZXJhYmxlfHwhMSxsLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBsJiYobC53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbC5rZXksbCl9fXJldHVybiBmdW5jdGlvbih0LGEsbCl7cmV0dXJuIGEmJmUodC5wcm90b3R5cGUsYSksbCYmZSh0LGwpLHR9fSgpLGk9YyhhKDEpKSxuPWMoYSgxMzQpKSxyPWMoYSgxNDIpKSxvPWMoYSgxNDcpKTtmdW5jdGlvbiBjKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX12YXIgZD1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpeyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsdCk7dmFyIGE9ZnVuY3Rpb24oZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH0odGhpcywodC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLGUpKTtyZXR1cm4gYS51cGRhdGVDaGFwdGVyPWZ1bmN0aW9uKGUpe3ZhciB0PWEuc3RhdGUubGF5ZXI7XCJob3RzcG90c1wiPT09ZSYmKHQ9XCJCRElfaW5mb3JtX3Jpc2tcIiksXCJjb25mbGljdFwiPT09ZSYmKHQ9XCJCRElfY29uZmxpY3RfVUNEUF9wb2xcIiksXCJjbGltYXRlX2N1cnJlbnRcIj09PWUmJih0PVwiQkRJX2NsaW1hdGVfY2RkXCIpLFwiY2xpbWF0ZV9wcm9qZWN0aW9uc1wiPT09ZSYmKHQ9XCJCRElfY2xpbWF0ZV9jZGRfcHJvalwiKSxcInZ1bG5lcmFiaWxpdHlcIj09PWUmJih0PVwiQkRJX2luZm9ybV92dWxuXCIpLFwibGFja19vZl9jb3BpbmdfY2FwYWNpdHlcIj09PWUmJih0PVwiQkRJX2luZm9ybV9sYWNrXCIpLFwiaGF6YXJkX2V4cG9zdXJlXCI9PT1lJiYodD1cIkJESV9pbmZvcm1faGVcIiksXCJoYXphcmRfcHJvamVjdGlvbnNfMjAzMFwiPT09ZSYmKHQ9XCJCRElfaW5mb3JtX2hlX3Byb2pfMzBcIiksXCJoYXphcmRfcHJvamVjdGlvbnNfMjA1MFwiPT09ZSYmKHQ9XCJCRElfaW5mb3JtX2hlX3Byb2pfNTBcIiksYS5zZXRTdGF0ZSh7Y2hhcHRlck5hbWU6ZSxsYXllcjp0fSl9LGEudXBkYXRlRGlzYXN0ZXJUeXBlPWZ1bmN0aW9uKGUpe2Euc2V0U3RhdGUoe2Rpc2FzdGVyVHlwZTplLnRhcmdldC52YWx1ZX0pfSxhLnVwZGF0ZUxheWVyPWZ1bmN0aW9uKGUpe2Euc2V0U3RhdGUoe2xheWVyOmUudGFyZ2V0LnZhbHVlfSl9LGEudXBkYXRlQ2xpbWF0ZVllYXI9ZnVuY3Rpb24oZSl7YS5zZXRTdGF0ZSh7Y2xpbWF0ZVllYXI6ZS50YXJnZXQudmFsdWV9KX0sYS51cGRhdGVMYXllclZ1bG49ZnVuY3Rpb24oZSl7YS5zZXRTdGF0ZSh7bGF5ZXJWdWxuOmUudGFyZ2V0LnZhbHVlfSl9LGEudXBkYXRlTGF5ZXJMT0NDPWZ1bmN0aW9uKGUpe2Euc2V0U3RhdGUoe2xheWVyTE9DQzplLnRhcmdldC52YWx1ZX0pfSxhLnVwZGF0ZUxheWVySGU9ZnVuY3Rpb24oZSl7YS5zZXRTdGF0ZSh7bGF5ZXJIZTplLnRhcmdldC52YWx1ZX0pfSxhLnVwZGF0ZUxheWVySGUzMD1mdW5jdGlvbihlKXthLnNldFN0YXRlKHtsYXllckhlMzA6ZS50YXJnZXQudmFsdWV9KX0sYS51cGRhdGVMYXllckhlNTA9ZnVuY3Rpb24oZSl7YS5zZXRTdGF0ZSh7bGF5ZXJIZTUwOmUudGFyZ2V0LnZhbHVlfSl9LGEudXBkYXRlTGF5ZXJSaXNrPWZ1bmN0aW9uKGUpe2Euc2V0U3RhdGUoe2xheWVyUmlzazplLnRhcmdldC52YWx1ZX0pfSxhLnN0YXRlPXtjaGFwdGVyTmFtZTpcImNsaW1hdGVfY3VycmVudFwiLGRpc2FzdGVyVHlwZTpcImFsbFwiLGxheWVyOlwiQkRJX2NsaW1hdGVfY2RkXCIsY2xpbWF0ZVllYXI6XCJjaGFuZ2VfMjAzMF9tZWFuXCIsbGF5ZXJWdWxuOlwiVlVMTkVSQUJJTElUWVwiLGxheWVyTE9DQzpcIkxBQ0sgT0YgQ09QSU5HIENBUEFDSVRZXCIsbGF5ZXJIZTpcIkhBWkFSRCAmIEVYUE9TVVJFXCIsbGF5ZXJSaXNrOlwiSU5GT1JNIFJJU0sgSU5ERVggU0NPUkVcIixsYXllckhlMzA6XCJwcm9qX2hhemFyZF8yMDMwXCIsbGF5ZXJIZTUwOlwicHJval9oYXphcmRfMjA1MFwifSxhLnVwZGF0ZUNoYXB0ZXI9YS51cGRhdGVDaGFwdGVyLmJpbmQoYSksYS51cGRhdGVEaXNhc3RlclR5cGU9YS51cGRhdGVEaXNhc3RlclR5cGUuYmluZChhKSxhLnVwZGF0ZUxheWVyPWEudXBkYXRlTGF5ZXIuYmluZChhKSxhLnVwZGF0ZUNsaW1hdGVZZWFyPWEudXBkYXRlQ2xpbWF0ZVllYXIuYmluZChhKSxhLnVwZGF0ZUxheWVyVnVsbj1hLnVwZGF0ZUxheWVyVnVsbi5iaW5kKGEpLGEudXBkYXRlTGF5ZXJMT0NDPWEudXBkYXRlTGF5ZXJMT0NDLmJpbmQoYSksYS51cGRhdGVMYXllckhlPWEudXBkYXRlTGF5ZXJIZS5iaW5kKGEpLGEudXBkYXRlTGF5ZXJIZTMwPWEudXBkYXRlTGF5ZXJIZTMwLmJpbmQoYSksYS51cGRhdGVMYXllckhlNTA9YS51cGRhdGVMYXllckhlNTAuYmluZChhKSxhLnVwZGF0ZUxheWVyUmlzaz1hLnVwZGF0ZUxheWVyUmlzay5iaW5kKGEpLGF9cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9KHQsZSksbCh0LFt7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnN0YXRlLHQ9ZS5jaGFwdGVyTmFtZSxhPWUuZGlzYXN0ZXJUeXBlLGw9ZS5sYXllcixjPWUuc3RvcHMsZD1lLmNsaW1hdGVZZWFyLHM9ZS5sYXllclZ1bG4sdT1lLmxheWVyTE9DQyxwPWUubGF5ZXJIZSxmPWUubGF5ZXJIZTMwLG09ZS5sYXllckhlNTAsXz1lLmxheWVyUmlzaztyZXR1cm4gaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7Y2hhcHRlck5hbWU6dCxkaXNhc3RlclR5cGU6YSxsYXllcjpsLHN0b3BzOmMsY2xpbWF0ZVllYXI6ZCxsYXllclZ1bG46cyxsYXllckxPQ0M6dSxsYXllckhlOnAsbGF5ZXJIZTMwOmYsbGF5ZXJIZTUwOm0sbGF5ZXJSaXNrOl99KSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChuLmRlZmF1bHQse2NoYXB0ZXJOYW1lOnQsdXBkYXRlQ2hhcHRlcjp0aGlzLnVwZGF0ZUNoYXB0ZXJ9KSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChvLmRlZmF1bHQse2NoYXB0ZXJOYW1lOnQsZGlzYXN0ZXJUeXBlOmEsbGF5ZXI6bCxsYXllclZ1bG46cyxsYXllckxPQ0M6dSxsYXllckhlOnAsbGF5ZXJIZTMwOmYsbGF5ZXJIZTUwOm0sbGF5ZXJSaXNrOl8sc3RvcHM6YyxjbGltYXRlWWVhcjpkLHVwZGF0ZURpc2FzdGVyVHlwZTp0aGlzLnVwZGF0ZURpc2FzdGVyVHlwZSx1cGRhdGVMYXllcjp0aGlzLnVwZGF0ZUxheWVyLHVwZGF0ZUNsaW1hdGVZZWFyOnRoaXMudXBkYXRlQ2xpbWF0ZVllYXIsdXBkYXRlTGF5ZXJWdWxuOnRoaXMudXBkYXRlTGF5ZXJWdWxuLHVwZGF0ZUxheWVyTE9DQzp0aGlzLnVwZGF0ZUxheWVyTE9DQyx1cGRhdGVMYXllckhlOnRoaXMudXBkYXRlTGF5ZXJIZSx1cGRhdGVMYXllckhlMzA6dGhpcy51cGRhdGVMYXllckhlMzAsdXBkYXRlTGF5ZXJIZTUwOnRoaXMudXBkYXRlTGF5ZXJIZTUwLHVwZGF0ZUxheWVyUmlzazp0aGlzLnVwZGF0ZUxheWVyUmlza30pKX19XSksdH0oaS5kZWZhdWx0LkNvbXBvbmVudCk7dC5kZWZhdWx0PWR9LDEzNDpmdW5jdGlvbihlLHQsYSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBhPTA7YTx0Lmxlbmd0aDthKyspe3ZhciBsPXRbYV07bC5lbnVtZXJhYmxlPWwuZW51bWVyYWJsZXx8ITEsbC5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbCYmKGwud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGwua2V5LGwpfX1yZXR1cm4gZnVuY3Rpb24odCxhLGwpe3JldHVybiBhJiZlKHQucHJvdG90eXBlLGEpLGwmJmUodCxsKSx0fX0oKSxpPW0oYSgxKSksbj1tKGEoMykpLHI9bShhKDI3KSksbz1hKDIxKSxjPW0oYSgxMzYpKSxkPW0oYSgxMzcpKSxzPW0oYSgxMzgpKSx1PW0oYSgxMzkpKSxwPW0oYSgxNDApKSxmPW0oYSgxNDEpKTtmdW5jdGlvbiBtKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX12YXIgXz1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpeyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsdCk7dmFyIGE9ZnVuY3Rpb24oZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH0odGhpcywodC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLGUpKTtyZXR1cm4gYS5zZXRBY3RpdmVDaGFwdGVyPWZ1bmN0aW9uKGUpe3ZhciB0PWEucHJvcHMsbD10LmNoYXB0ZXJOYW1lLGk9dC51cGRhdGVDaGFwdGVyO2UhPT1sJiYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImFjdGl2ZVwiKSxkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiXCIpLGkoZSkpfSxhLmlzRWxlbWVudE9uU2NyZWVuPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3JldHVybiB0LnRvcDx3aW5kb3cuaW5uZXJIZWlnaHQmJnQuYm90dG9tPjB9LGEuaGFuZGxlU2Nyb2xsPWZ1bmN0aW9uKGUpe3ZhciB0PU9iamVjdC5rZXlzKG8uY2hhcHRlcnMpLGw9dm9pZCAwO2ZvcihsPTA7bDx0Lmxlbmd0aDtsKz0xKXt2YXIgaT10W2xdO2lmKGEuaXNFbGVtZW50T25TY3JlZW4oaSkpe2Euc2V0QWN0aXZlQ2hhcHRlcihpKTticmVha319fSxhLmhhbmRsZVNjcm9sbD1hLmhhbmRsZVNjcm9sbC5iaW5kKGEpLGF9cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9KHQsZSksbCh0LFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5oYW5kbGVTY3JvbGwsITApfX0se2tleTpcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMuaGFuZGxlU2Nyb2xsLCEwKX19LHtrZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtpZDpcImZlYXR1cmVzXCIsb25TY3JvbGw6dGhpcy5oYW5kbGVTY3JvbGx9LGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLHtpZDpcImNsaW1hdGVfY3VycmVudFwiLGNsYXNzTmFtZTpcImFjdGl2ZVwifSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse3ZhcmlhbnQ6XCJoM1wifSxcIkJ1cnVuZGkgaG90c3BvdHMgbWFwcGluZzogY2xpbWF0ZSBhbmQgY29uZmxpY3RcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYlwiLG51bGwsXCJEaWFnbm9zaW5nIERyaXZlcnMgb2YgQ2xpbWF0ZSBhbmQgRW52aXJvbm1lbnRhbCBGcmFnaWxpdHkgaW4gQnVydW5kaeKAmXMgQ29sbGluZSBMYW5kc2NhcGVzIOKAkyBDbGltYXRlICYgQ29uZmxpY3QgUmlza3NcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYlwiLG51bGwsXCJBdXRob3JzOlwiKSxcIiBSZWQgQ3JvcyBSZWQgQ3Jlc2NlbnQgQ2xpbWF0ZSBDZW50cmUsIDUxMCBvZiB0aGUgTmV0aGVybGFuZHMgUmVkIENyb3NzIGFuZCBVbml2ZXJzaXR5IG9mIENhcGUgVG93bi5cIixpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLFwiVGhpcyBzdG9yeSBtYXAgc2hvd3MgdGhlIGludGVyYWN0aW9ucyBhbW9uZyBkaWZmZXJlbnQgaW5kaWNhdG9ycyBvZiByaXNrcyBhY3Jvc3MgY2xpbWF0ZSwgbWlncmF0aW9uIGFuZCBjb25mbGljdC4gSXQgdXNlcyB0aGUgSU5GT1JNIGluZGV4IGZyYW1ld29yayB0byByZXByZXNlbnQgYSBjb21wb3VuZCByaXNrIGFuYWx5c2lzIGF0IGRpZmZlcmVudCB0aW1lIHNjYWxlczogbm93LCAyMDMwIGFuZCAyMDUwLlwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwiTWFwIHVzYWdlOiBcIiksXCIgdGhlIG1hcCBpcyBpbnRlcmFjdGl2ZSwgeW91IGNhbiB6b29tLCBzY3JvbGwsIGhvdmVyIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFuZCBmaWx0ZXIgbGF5ZXJzLlwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzOlwiaGlnaGxpZ2h0XCJ9LFwiQ29tbWlzaW9uZWQgYnkgV29ybGQgQmFua1wiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse3ZhcmlhbnQ6XCJoNFwifSxcIkJhY2tncm91bmRcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJCdXJ1bmRpIGlzIGEgc21hbGwgbGFuZC1sb2NrZWQgY291bnRyeSBpbiBFYXN0IEFmcmljYSwgaW4gYmV0d2VlbiBSd2FuZGEsIFRhbnphbmlhIGFuZCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUgQ29uZ28uIEl0IGlzIFwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYlwiLG51bGwsXCJvbmUgb2YgdGhlIG1vc3QgZGVuc2VseSBwb3B1bGF0ZWRcIiksXCIgY291bnRyaWVzIGluIEFmcmljYSwgd2l0aCBhIHBvcHVsYXRpb24gb2YgYXJvdW5kIDExLjYgbWlsbGlvbiBwZW9wbGUgKFwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaVwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2hyZWY6XCJodHRwczovL3d3dy53b3JsZGJhbmsub3JnL2VuL2NvdW50cnkvYnVydW5kaS9vdmVydmlld1wiLHRhcmdldDpcIl9ibGFua1wifSxcIlNvdXJjZTogV29ybGQgQmFuaywgbi5kLlwiKSksXCIpLiBJbiAyMDEzLCA3MS44JSBvZiB0aGUgcG9wdWxhdGlvbiB3YXMgbGl2aW5nIHVuZGVyIHRoZSBpbnRlcm5hdGlvbmFsIHBvdmVydHkgbGluZSBvZiAxLjkwIFVTIGRvbGxhcnMgYSBkYXkgKFwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaVwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2hyZWY6XCJodHRwczovL3d3dy53b3JsZGJhbmsub3JnL2VuL3RvcGljL3BvdmVydHkvb3ZlcnZpZXdcIix0YXJnZXQ6XCJfYmxhbmtcIn0sXCJTb3VyY2U6IFdvcmxkIEJhbmsgR3JvdXAsIDIwMjFcIikpLFwiKSwgYW5kIGluIDIwMTksIEJ1cnVuZGkgd2FzIGVzdGltYXRlZCB0byBiZSBvbmUgb2YgdGhlIHBvb3Jlc3QgY291bnRyaWVzIGluIHRoZSB3b3JsZCAoXCIsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIix7aHJlZjpcImh0dHBzOi8vd3d3LndmcC5vcmcvY291bnRyaWVzL2J1cnVuZGlcIix0YXJnZXQ6XCJfYmxhbmtcIn0sXCJTb3VyY2U6IFdGUCwgbi5kLlwiKSksXCIpLiBBcm91bmQgOTIlIG9mIHRoZSB3b3JrZm9yY2UgaXMgb2NjdXBpZWQgaW4gYWdyaWN1bHR1cmUgYW5kIG9ubHkgNyUgb2YgdGhlIHBvcHVsYXRpb24gaGFzIGFjY2VzcyB0byBlbGVjdHJpY2l0eS4gQXMgYSByZXN1bHQsIEJ1cnVuZGkgaGFzIGEgSHVtYW4gRGV2ZWxvcG1lbnQgSW5kZXggb2YgMC40MCwgb25lIG9mIHRoZSBsb3dlc3QgaW4gQWZyaWNhIChcIixpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLHtocmVmOlwiaHR0cHM6Ly93d3cuYWZkYi5vcmcvZW4vZG9jdW1lbnRzL2J1cnVuZGktbmF0aW9uYWwtY2xpbWF0ZS1jaGFuZ2UtcHJvZmlsZVwiLHRhcmdldDpcIl9ibGFua1wifSxcIlNvdXJjZTogQWZyaWNhbiBEZXZlbG9wbWVudCBCYW5rLCAyMDE5XCIpKSxcIikuXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCkpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg0XCJ9LFwiQ3VycmVudCBjbGltYXRlXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiVGhlIHJlZ2lvbiBoYXMgc2VlbiBhIGdlbmVyYWwgd2FybWluZyB0cmVuZCBpbiBtZWFuIGFubnVhbCB0ZW1wZXJhdHVyZXMgc2luY2UgMTk3OSwgIHdpdGggYSB0cmVuZCBvZiAwLjMxWzAuMTgtMC40MV0gwrBDIHBlciBkZWNhZGU7XCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiQ29sZGVzdCBuaWdodCBhbmQgaG90dGVzdCBkYXkgdGVtcGVyYXR1cmUgaGF2ZSBkZWNyZWFzZWQvaW5jcmVhc2VkIHNpbmNlIDE5NzlcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJSYWluZmFsbCAgdGhyb3VnaG91dCBCdXJ1bmRpIHdhdGVyc2hlZCByZWdpb24gaGFzIGJlZW4gc3Vic3RhbnRpYWxseSBkb21pbmF0ZWQgYnkgbmF0dXJhbCB2YXJpYWJpbGl0eSB3aXRoIG5vIGxvbmcgdGVybSBzaWduaWZpY2FudCBjaGFuZ2VzO1wiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIlRoZSByZWdpb24gaGFzIGJlZW4gc3ViamVjdCB0byBtb3JlIGludGVuc2UgcmFpbmZhbGwgZXZlbnRzLlwiKSkpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse2NsYXNzOlwiZmlndXJlXCIsc3JjOmMuZGVmYXVsdCxhbHQ6XCJDdXJyZW50IGNsaW1hdGUgQnVydW5kaVwifSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtjbGFzczpcImZpZ3VyZVwiLHNyYzpkLmRlZmF1bHQsYWx0OlwiQ3VycmVudCBjbGltYXRlIEJ1cnVuZGlcIn0pLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaVwiLHtjbGFzczpcImZpZy1jYXB0aW9uXCJ9LFwiU2Vhc29uYWwgY3ljbGUgb2YgcmFpbmZhbGwgYW5kIHRlbXBlcmF0dXJlXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse3ZhcmlhbnQ6XCJoNlwifSxcIkRhdGFcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsbnVsbCxcIkNERFwiKSxcIiAtIE1heGltdW0gbnVtYmVyIG9mIGNvbnNlY3V0aXZlIGRheXMgd2l0aCBSUiBsZXNzIHRoYW4gMSBtbS5cIixpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsbnVsbCxcIlBSQ1BUT1RcIiksXCIgLSBNZWFuIGFubnVhbCB0b3RhbCBwcmVjaXBpdGF0aW9uLlwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwiUlg1ZGF5XCIpLFwiIC0gTWF4aW11bSA1LWRheSBwcmVjaXBpdGF0aW9uIHRvdGFsLlwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwiVFh4XCIpLFwiIC0gTWF4aW11bSB2YWx1ZSBvZiBkYWlseSBtYXhpbXVtIHRlbXBlcmF0dXJlLlwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCksXCJSYWluZmFsbCBjbGltYXRvbG9neSBmcm9tIFRoZSBDbGltYXRlIEhhemFyZHMgR3JvdXAgSW5mcmFSZWQgUHJlY2lwaXRhdGlvbiB3aXRoIFN0YXRpb25zIGRhdGEgKENISVJQUykgb3ZlciAxOTgxLTIwMjAgVGVtcGVyYXR1cmUgY2xpbWF0b2xvZ3kgZnJvbSBXQVRDSCBmb3JjaW5nIGRhdGEgKFdGREVJLUNSVSkgb3ZlciAxOTc5LTIwMTkuXCIsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLFwiRm9yIHRoZSBmdWxsIHJlcG9ydCBvbiBjbGltYXRlIHByb2plY3Rpb25zIGFzIHdlbGwgYXMgUkM4NSBzY2VtYXJpbywgcGxlYXNlIGNsaWNrIGhlcmUgKHRvIGFkZCBsaW5rIHdoZW4gdGhlIHJlcG9ydCBpcyBwdWJsaXNoZWQpLlwiKSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIse2lkOlwiaG90c3BvdHNcIn0saS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDNcIn0sXCJIb3RzcG90cyBtYXBzXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiV2UgaGF2ZSB1c2VkIElORk9STSBpbmRleCBpbiBvcmRlciB0byBpZGVudGlmeSB0aGUgZnJhZ2lsaXR5IGhvdHNwb3RzIGluIEJ1cnVuZGkuIElORk9STSBpbmRleCBoYXMgdGhyZWUgZGltZW5zaW9ucyAtIHZ1bG5lcmFiaWxpdHksIGxhY2sgb2YgY29waW5nIGNhcGFjaXR5IGFuZCBoYXphcmQgZXhwb3N1cmUuIEl0IGdpdmVzIGFuIG92ZXJhbGwgcmlzayBzY29yZSBvdXQgb2YgMTAgZm9yIGVhY2ggY29sbGluZSwgYW5kIGZvciBlYWNoIG9mIHRoZSBkaW1lbnNpb25zLCBjYXRlZ29yaWVzLCBhbmQgY29tcG9uZW50cyBvZiByaXNrIChzZWUgXCIsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2hyZWY6XCJodHRwczovL2RybWtjLmpyYy5lYy5ldXJvcGEuZXUvaW5mb3JtLWluZGV4L1BvcnRhbHMvMC9JbmZvUk0vSU5GT1JNJTIwQ29uY2VwdCUyMGFuZCUyME1ldGhvZG9sb2d5JTIwVmVyc2lvbiUyMDIwMTclMjBQZGYlMjBGSU5BTC5wZGZcIn0sXCJJTkZPUk0gbWV0aG9kb2xvZ3lcIiksXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24pLlwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCkpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiQ09MTElORVMgQVQgUklTS1wiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQsbnVsbCxcIlRoZSBtb3N0IGZyYWdpbGUgY29sbGluZXMgaW4gQnVydW5kaSBhcmUgKGFjY29yZGluZyB0byBJTkZPUk0gc2NvcmUpOlwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwib2xcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiR2FzZW55aSwgQndlcnUgKFJ1eWlnaSBwcm92aW5jZSkgLSA3LjUyXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiR2lzZW55aSwgQnVoaWdhIChLYXJ1emkgcHJvdmluY2UpIC0gNy40N1wiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIkJ1a2luYW55YW5hLCBCdWtpbmFueWFuYSAoQ2liaXRva2UgcHJvdmluY2UpIC0gNy40MVwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIk5kYXZhLCBCdXJhemEgKEdpdGVnYSBwcm92aW5jZSkgLSA3LjRcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJSdHlhem8sIEJ1a2luYW55YW5hIChDaWJpdG9rZSBwcm92aW5jZSkgLSA3LjM2XCIpKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCkpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiSE9UU1BPVFMgQ0xBU1NFU1wiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVsXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwiVmVyeSBoaWdoOiAgXCIpLFwiMzQ3IGNvbGxpbmVzLCAxNS42JSBvZiB0b3RhbCBhcmVhLlwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwiSGlnaDogIFwiKSxcIjE3ODAgY29sbGluZXMsIDcwLjUlIG9mIHRvdGFsIGFyZWEuXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYlwiLG51bGwsXCJNZWRpdW06ICBcIiksXCI0ODkgY29sbGluZXMsIDEzLjklIG9mIHRvdGFsIGFyZWEuXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYlwiLG51bGwsXCJMb3c6ICBcIiksXCIwIGNvbGxpbmVzLlwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwiVmVyeSBsb3c6ICBcIiksXCIwIGNvbGxpbmVzLlwiKSkpKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIix7aWQ6XCJjbGltYXRlX3Byb2plY3Rpb25zXCJ9LGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImgzXCJ9LFwiQ2xpbWF0ZSBwcm9qZWN0aW9uc1wiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCIgRm9yIHRoZSBmdWxsIHJlcG9ydCBvbiBjbGltYXRlIHByb2plY3Rpb25zIGFzIHdlbGwgYXMgUkM4NSBzY2VtYXJpbywgcGxlYXNlIGNsaWNrIGhlcmUgKHRvIGFkZCBsaW5rIHdoZW4gdGhlIHJlcG9ydCBpcyBwdWJsaXNoZWQpLlwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJDb2xkZXN0IG5pZ2h0IGFuZCBob3R0ZXN0IGRheSB0ZW1wZXJhdHVyZXMgYXJlIHByb2plY3RlZCB0byBpbmNyZWFzZSBpbiB0aGUgcmVnaW9uLiBSZWxhdGl2ZWx5IGhpZ2ggaW5jcmVhc2VzIGFyZSBtb3JlIGxpa2VseSB1bmRlciBhIGhpZ2hlciBncmVlbmhvdXNlIGdhcyBlbWlzc2lvbnMgc2NlbmFyaW8uIFwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIkZ1dHVyZSBwcm9qZWN0aW9ucyBvZiBhbm51YWwgdG90YWwgcmFpbmZhbGwgY2hhbmdlcyBzaG93IGJvdGggcG90ZW50aWFsIGluY3JlYXNlcyBhbmQgZGVjcmVhc2VzIGRvbWluYXRlZCBieSBuYXR1cmFsIHZhcmlhYmlsaXR5LiBcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJIZWF2eSByYWluZmFsbCBldmVudHMgYXJlIHByb2plY3RlZCB0byBpbmNyZWFzZSBpbiB0aGUgZnV0dXJlIHdpdGggaGlnaCBjb25maWRlbmNlIGluIG5vcnRoZXJuIHJlZ2lvbnMgb2YgdGhlIGNvdW50cnkuXCIpKSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg1XCJ9LFwiU2VjdG9yYWwgaW1wYWN0IGFuYWx5c2lzXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiSEVBTFRIXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiTWFsYXJpYSB0cmFuc21pc3Npb24gaXMgbGlrZWx5IHRvIGluY3JlYXNlIGFzIGEgcmVzdWx0IG9mIGluY3JlYXNlZCBkYXkgYW5kIG5pZ2h0LXRpbWUgdGVtcGVyYXR1cmVzLiBUaGVyZSBpcyBoaWdoIGNvbmZpZGVuY2UgdGhhdCBCdXJ1bmRpIHdpbGwgZ28gZnJvbSAwIGRheXMgdG8gNS0xMCBkYXlzIG9mIGhlYXQgc3RyZXNzIGEgeWVhciBieSB0aGUgZW5kIG9mIHRoZSBjZW50dXJ5IHVuZGVyIFJDUCA4LjUuXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiQUdSSUNVTFRVUkVcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJEZXNwaXRlIGxhY2sgb2YgY29uZmlkZW5jZSBpbiByYWluZmFsbCB0cmVuZHMsIGhpZ2hlciB0ZW1wZXJhdHVyZXMgd2lsbCBjYXVzZSBtb3JlIGV2YXBvdHJhbnNwaXJhdGlvbiBhbmQgY29uc2VxdWVudGx5IHlpZWxkcyBvZiBNYWl6ZSB3aWxsIHJlZHVjZSB3aXRob3V0IHRlY2hub2xvZ2ljYWwgaW1wcm92ZW1lbnRzIGFuZCBsYWtlIHByb2R1Y3Rpdml0eSB3aWxsIGJlIHJlZHVjZWQuXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiSU5GUkFTVFJVQ1RVUkVcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJUaGUgbGFjayBvZiBhZ3JlZW1lbnQgaW4gcmFpbmZhbGwgcHJvamVjdGlvbnMsIGFzIHdlbGwgYXMgc3Ryb25nIG5hdHVyYWwgdmFyaWFiaWxpdHkgZG8gbm90IHBvaW50IHRvIGFueSBmaXJtIGNvbmNsdXNpb25zIGFzIHRvIHRoZSBpbmZsdWVuY2UgdGhhdCBjbGltYXRlIGNoYW5nZSB3aWxsIGhhdmUgb24gZmxvb2QgYW5kIGxhbmRzbGlkZSBoYXphcmRzLCAgd2hpY2ggaW4gdHVybiBjb3VsZCBwb3RlbnRpYWxseSBkYW1hZ2UgaW5mcmFzdHJ1Y3R1cmUuIEZsb29kaW5nIGZyb20gTGFrZSBUYW5nYW55aWthIGNhbiBoYXZlIGl0cyBpbXBhY3Qgb24gaW5mcmFzdHJ1Y3R1cmUsIHRob3VnaCBsYWtlIGxldmVscyBoYXZlIGEgbGFnZ2VkIHJlc3BvbnNlIGNvbXBhcmVkIHRvIHJhaW5mYWxsLlwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse3ZhcmlhbnQ6XCJoNlwifSxcIkVORVJHWVwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQsbnVsbCxcIkh5ZHJvcG93ZXIgY2FwYWNpdHkgd2lsbCBsaWtlbHkgYmUgcmVkdWNlZCB3aXRoIDExJSBhbmQgMTYlIGJ5IDIwNTAgb3ZlciB0aGUgUndlZ3VyYSBjYXRjaG1lbnQgdW5kZXIgUkNQIDQuNSBhbmQgUkNQIDguNSByZXNwZWN0aXZlbHkgKFwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaVwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2hyZWY6XCJodHRwczovL3d3dy5qb3VybmFsamVucnIuY29tL2luZGV4LnBocC9KRU5SUi9hcnRpY2xlL3ZpZXcvMzAxODRcIix0YXJnZXQ6XCJfYmxhbmtcIn0sXCJTb3VyY2U6IE1hbmlyYWtpemEgZXQgYWwuLCAyMDIxXCIpKSxcIikuXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiTElNSVRBVElPTlNcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJUaGVzZSByZXN1bHRzIHdlcmUgb2J0YWluZWQgZnJvbSB0aGUgZW5zZW1ibGUgb2YgQ09SREVYLUFmcmljYSwgd2hpY2ggbmV2ZXJ0aGVsZXNzIGRlcGljdCBhIHNpbXBsaWZpZWQsIGhlbmNlIGltcGVyZmVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXZvbHV0aW9uIG9mIHRoZSBjbGltYXRlIHN5c3RlbXMgaW4gcmVzcG9uc2UgdG8gbmF0dXJhbCBhbmQgYW50aHJvcG9nZW5pYyBmb3JjaW5ncy4gRm9yIG1vcmUgZGV0YWlscyBvbiB0aGUgcHJvamVjdGlvbnMsIG1vZGVscyB1c2VkLCBzY2VuYXJpb3MgYW5kIHJlcHJlc2VudGF0aW9uIG9mIHVuY2VydGFpbnRpZXMgaW4gdGhlIHByb2plY3Rpb25zIHBsZWFzZSBjbGljayBoZXJlICh0byBhZGQgbGluayB3aGVuIHRoZSByZXBvcnQgaXMgcHVibGlzaGVkKS5cIikpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLHtpZDpcImRpc2FzdGVyc1wifSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse3ZhcmlhbnQ6XCJoM1wifSxcIkNBU0NBRElORyBBTkQgQ09NUE9VTkRJTkcgSEFaQVJEU1wiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQsbnVsbCxcIlBlb3BsZSBpbiBoaWdobHkgZXhwb3NlIHRvIGEgbXVsdGl0dWRlIG9mIGhhemFyZHMgKHNlZSBGaWd1cmU7IFNvdXJjZTogV29ybGQgQmFuayBHcm91cCwgMjAyMSkuIFRoZSByZXN1bHRzIG9mIGEgaGlzdG9yaWNhbCBoYXphcmQgYW5hbHlzaXMgZm9yIHRoZSBwZXJpb2QgMjAxMC0yMDIxIGlzIGRlcGljdGVkIGluIHRoZSBtYXAuIFRoZSBtYXAgc2hvd3MgaG93IHRob3NlIGhhemFyZHMgaW50ZXJhY3QgZWl0aGVyIGJ5IHRoZWlyIGNhc2NhZGluZyBuYXR1cmUsIG9uZSBoYXphcmRzIHRyaWdnZXJpbmcgb3RoZXIgaGF6YXJkcyBvciBieSB0aGUgY29tcG91bmQgb2Ygc2V2ZXJhbCBoYXphcmRzIG9jY3VycmluZyBhdCBzaW1pbGFyIHRpbWVzLiBJbiB0aGUgbWFwIGl0IGlzIHBvc3NpYmxlIHRvIG9ic2VydmUgd2hlbiBhbmQgd2hlcmUgc3VjaCBoYXphcmRzIG9jY3VycmVkIGFuZCB0aGVpciBpbnRlcmFjdGlvbnMuXCIsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7Y2xhc3M6XCJmaWd1cmVcIixzcmM6dS5kZWZhdWx0LGFsdDpcIkRpc2FzdGVycyBpbiBCdXJ1bmRpXCJ9KSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlcIix7Y2xhc3M6XCJmaWctY2FwdGlvblwifSxcIk9jY3VycmVuY2Ugb2YgY2xpbWF0ZSBkcml2ZW4gaGF6YXJkcyBpbiBCdXJ1bmRpIHNob3dlZCBhcyBhIGhpc3RvZ3JhbSBvZiB0aGUgbnVtYmVyIG9mIGFmZmVjdGVkIHBlb3BsZVwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiSEVBVlkgUkFJTkZBTExcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJIZWF2eSByYWluZmFsbCBoYXMgY2F1c2VkIHZhcmlvdXMgdHlwZXMgb2YgZmxvb2Rpbmcgb24gbXVsdGlwbGUgb2NjYXNpb25zIHNpbmNlIDIwMTAuIEVzcGVjaWFsbHkgZmxhc2ggZmxvb2RzIGhhdmUgaGFkIGRpc2FzdHJvdXMgY29uc2VxdWVuY2VzIGluIEJ1cnVuZGkuIEhlYXZ5IHJhaW5mYWxsIGluY3JlYXNlcyB0aGUgcHJvYmFiaWxpdHkgb2YgZmxvb2RpbmcsIGFzIGdyb3VuZHdhdGVyIGxldmVscyBhbmQgd2F0ZXIgbGV2ZWxzIGluIHJpdmVycyBhbmQgbGFrZXMgcmlzZSBhbmQgc3Vic2VxdWVudGx5IGluY3JlYXNlcyB0aGUgbGlrZWxpbmVzcyBvZiBmbG9vZGluZyBvdmVyIHRpbWUuIEFkZGl0aW9uYWxseSwgaGVhdnkgcmFpbmZhbGwgaGFzIGNhdXNlZCBsYW5kc2xpZGVzIG9uIG11bHRpcGxlIG9jY2FzaW9ucyBpbiBCdXJ1bmRpLCBpZGVudGlmaWVkIGFzIGhhdmluZyBib3RoIGEgdHJpZ2dlcmluZyBhbmQgaW5jcmVhc2VkIHByb2JhYmlsaXR5IHJlbGF0aW9uLlwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDZcIn0sXCJWSU9MRU5UIFdJTkRcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJIZWF2eSByYWluZmFsbCBhbmQgbGlnaHRuaW5nIGhhdmUgYmVlbiBpZGVudGlmaWVkIGFzIHBvdGVudGlhbCBzZWNvbmRhcnkgaGF6YXJkcyBmcm9tIFZpb2xlbnQgd2luZHMuIE5vdGUsIHRoYXQgaW4gdGhpcyBjYXNlIGl0IGlzIGxlc3Mgb2YgYSB0cmlnZ2VyaW5nIHNpdHVhdGlvbiwgYnV0IG1vcmUgcmVsYXRlZCB0byB0aGUgdHlwZSBvZiBWaW9sZW50IHdpbmQuIEluIEJ1cnVuZGksIFZpb2xlbnQgd2luZHMgYXJlIG9mdGVuIGFjY29tcGFuaWVkIGJ5IGhlYXZ5IHJhaW5mYWxsLiBUaGVyZWZvcmUsIHRoZSBzZWNvbmRhcnkgaGF6YXJkcyB0aGF0IGFyZSBpZGVudGlmaWVkIGZvciBoZWF2eSByYWluZmFsbCBhcmUgYWxzbyBpbmNsdWRlZCBmb3IgVmlvbGVudCB3aW5kcy5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDZcIn0sXCJIQUlMU1RPUk1cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJJbiBCdXJ1bmRpLCBiZXR3ZWVuIDIwMTAgYW5kIDIwMjEgaGFpbHN0b3JtcyBoYXZlIGJlZW4gYWNjb21wYW5pZWQgYnkgaGVhdnkgcmFpbmZhbGwgYXQgbGVhc3QgdHdpY2UuIE5vIHJlcG9ydHMgb24gaGFpbHN0b3JtcyBjb250YWluaW5nIGxpZ2h0bmluZyB3ZXJlIGZvdW5kLiBIb3dldmVyLCBpdCBpcyBhIGtub3duIGhhemFyZCBpbnRlcmFjdGlvbi4gVGhlcmVmb3JlLCBib3RoIGhlYXZ5IHJhaW4gYW5kIGxpZ2h0bmluZyBoYXZlIGJlZW4gY2xhc3NpZmllZCBhcyBwb3RlbnRpYWwgc2Vjb25kYXJ5IGhhemFyZHMuXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiTElHSFROSU5HXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiTGlnaHRuaW5nIGNhdXNlcyBtb3N0IG9mIHRoZSBuYXR1cmFsIGluZHVjZWQgd2lsZGZpcmVzICAoXCIsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIix7aHJlZjpcImh0dHBzOi8vd3d3LnNjaWVuY2VkaXJlY3QuY29tL3NjaWVuY2UvYXJ0aWNsZS9hYnMvcGlpL1MwMTY4MTkyMzIwMzAwOTI3XCIsdGFyZ2V0OlwiX2JsYW5rXCJ9LFwiU291cmNlOiBNb3JpcyBldCBhbC4sIDIwMjBcIikpLFwiKS4gQWx0aG91Z2gsIGZvciBCdXJ1bmRpIGl0IGhhcyBub3QgYmVlbiByZXBvcnRlZCB0aGF0IGxpZ2h0bmluZyBoYXMgdHJpZ2dlcmVkIHdpbGRmaXJlcywgaXQgcmVtYWlucyBhIHBvdGVudGlhbCBoYXphcmQgYW5kIGhhcyB0aGVyZWZvcmUgYmVlbiBpbmNsdWRlZC5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDZcIn0sXCJEUk9VR0hUXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiRHJvdWdodHMgaW5jcmVhc2UgdGhlIHByb2JhYmlsaXR5IG9mIHdpbGRmaXJlcyAgKFwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaVwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2hyZWY6XCJodHRwczovL3d3dy5yZXNlYXJjaGdhdGUubmV0L3B1YmxpY2F0aW9uLzI2NDc5MjE2OV9SZXZpZXdpbmdfYW5kX3Zpc3VhbGl6aW5nX3RoZV9pbnRlcmFjdGlvbnNfb2ZfbmF0dXJhbF9oYXphcmRzXCIsdGFyZ2V0OlwiX2JsYW5rXCJ9LFwiU291cmNlOiBHaWwgJiBHYWxhbXVkLCAyMDE0XCIpKSxcIiksIGVzcGVjaWFsbHkgd2hlbiBjb21wb3VuZGluZyB3aXRoIGV4dHJlbWUgaGVhdC4gRnVydGhlcm1vcmUsIGV4dGVuZGVkIGRyb3VnaHQgY2FuIGRhbWFnZSB2ZWdldGF0aW9uIG51bWJlcnMsIHdoaWNoIGxlYWRzIHRvIHJ1bm9mZiBpbmNyZWFzZXMgY29tcGFyZWQgdGhlIHByZS1kcm91Z2h0IGNvbmRpdGlvbnMuIFRoaXMgaW5jcmVhc2VzIHRoZSBwcm9iYWJpbGl0eSBvZiBmbG9vZGluZy5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDZcIn0sXCJGTE9PRFNcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJMYW5kc2xpZGVzIGFuZCBmbG9vZGluZyBhcmUgb2Z0ZW4gY2xvc2VseSByZWxhdGVkIGJlY2F1c2UgYm90aCBhcmUgdHJpZ2dlcmVkIGJ5IGhlYXZ5IHJhaW5mYWxsLiBIb3dldmVyLCBiZXNpZGVzIHRoZSBwcmVzZW5jZSBvZiBoZWF2eSByYWluZmFsbCwgZmxvb2RpbmcgY2FuIGJvdGggdHJpZ2dlciBhbmQgaW5jcmVhc2UgdGhlIHByb2JhYmlsaXR5IG9mIGxhbmRzbGlkZXMgdGhyb3VnaCBtb3ZpbmcgZmxvb2R3YXRlcnMuIElmIGZsb29kd2F0ZXJzIG1vdmUgZmFzdCwgdGhleSByZWd1bGFybHkgdW5kZXJjdXQgc2xvcGVzLiBUaGlzIHJlZHVjZXMgdGhlIHN0cmVuZ3RoIG9mIHRoZSBzbG9wZSwgd2hpY2ggY2FuIHRyaWdnZXIgb3IgaW5jcmVhc2UgdGhlIHByb2JhYmlsaXR5IG9mIHNsb3BlIGZhaWx1cmUgIChcIixpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLHtocmVmOlwiaHR0cHM6Ly93d3cucHJldmVudGlvbndlYi5uZXQvZmlsZXMvMjUyMzNfMjUxMDJsYW5kc2xpZGVzZW5nbGlzaDEucGRmXCIsdGFyZ2V0OlwiX2JsYW5rXCJ9LFwiU291cmNlOiAgV2VlcmFzaW5naGUgZXQgYWwuLCAyMDA4XCIpKSxcIikuIEZsb29kaW5nIGFsc28gaW5jcmVhc2VzIHRoZSBwcm9iYWJpbGl0eSBvZiBkaXNlYXNlIG91dGJyZWFrcy4gVGhpcyBjYW4gaGFwcGVuIHRocm91Z2ggY3Jvc3MgY29udGFtaW5hdGVkIHdhdGVyIHNvdXJjZXMgb3IgYnkgYSBwcm9saWZlcmF0ZWQgbnVtYmVyIG9mIG1vc3F1aXRvcy5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDZcIn0sXCJXSUxERklSRVNcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJXaWxkZmlyZXMgYXJlIGxpa2VseSB0byB0cmlnZ2VyIGZ1cnRoZXIgd2lsZGZpcmVzLCBhcyBmaXJlIHNwcmVhZHMgcXVpY2tseSBhbmQgY2FuIGlnbml0ZSBmaXJlIGluIG90aGVyIGFyZWFzLiBXaWxkZmlyZXMgY2FuIOKAmGp1bXDigJkgcml2ZXJzIGFuZCByb2FkcyBhcyBmaXJlYnJhbmRzIGFyZSBjYXJyaWVkIGJ5IHdpbmQgYW5kIHZlcnRpY2FsIGNvbnZlY3Rpb24gY29sdW1ucy4gRnVydGhlcm1vcmUsIHdpbGRmaXJlcyBpbmNyZWFzZSB0aGUgcHJvYmFiaWxpdHkgb2YgZmxvb2RpbmcgYnkgZGVzdHJ1Y3Rpb24gb2YgdmVnZXRhdGlvbiwgd2hpY2ggbGVhZHMgdG8gZmFzdGVyIHJ1bm9mZiB0aW1lcy4gRGVzdHJveWVkIHZlZ2V0YXRpb24gYWxzbyBsZWFkcyB0byBhbiBpbmNyZWFzZWQgcHJvYmFiaWxpdHkgb2YgbGFuZHNsaWRlcy5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDZcIn0sXCJMQU5EU0xJREVTXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiTGFuZHNsaWRlcyBjYW4gaW5jcmVhc2UgdGhlIHByb2JhYmlsaXR5IG9yIHRyaWdnZXIgZmxvb2RpbmcgaWYgaXQgZm9yIGV4YW1wbGUgYmxvY2tzIGEgcml2ZXIgb3IgaW5jcmVhc2VzIHRoZSBhbW91bnQgb2Ygc2VkaW1lbnQgaW4gYSBmbHV2aWFsIHN5c3RlbSAgKFwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaVwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2hyZWY6XCJodHRwczovL3d3dy5yZXNlYXJjaGdhdGUubmV0L3B1YmxpY2F0aW9uLzI2NDc5MjE2OV9SZXZpZXdpbmdfYW5kX3Zpc3VhbGl6aW5nX3RoZV9pbnRlcmFjdGlvbnNfb2ZfbmF0dXJhbF9oYXphcmRzXCIsdGFyZ2V0OlwiX2JsYW5rXCJ9LFwiU291cmNlOiBHaWwgJiBHYWxhbXVkLCAyMDE0XCIpKSxcIikuICBPbiBzb21lIG9jY2FzaW9ucyBsYW5kc2xpZGVzIGNhbiBpbmNyZWFzZSB0aGUgcHJvYmFiaWxpdHkgb3IgZXZlbiB0cmlnZ2VyIGZ1cnRoZXIgbGFuZHNsaWRlcy4gVGhpcyBpcyB0aGUgY2FzZSBiZWNhdXNlIGEgcHJlLWV4aXN0aW5nIGxhbmRzbGlkZSBzbG9wZSBnZW5lcmFsbHkgaGFzIGxlc3MgdmVnZXRhdGlvbiBhbmQgcm9vdHMgKFwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaVwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2hyZWY6XCJodHRwczovL3d3dy51c2dzLmdvdi9uYXR1cmFsLWhhemFyZHMvbGFuZHNsaWRlLWhhemFyZHMvc2NpZW5jZS9sYW5kc2xpZGVzLWNhbi1jYXVzZS1tb3JlLWxhbmRzbGlkZXM/cXQtc2NpZW5jZV9jZW50ZXJfb2JqZWN0cz0wI3F0LXNjaWVuY2VfY2VudGVyX29iamVjdHNcIix0YXJnZXQ6XCJfYmxhbmtcIn0sXCJTb3VyY2U6IFVTR1MsIDIwMThcIikpLFwiKS5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIix7aHJlZjpcIi4uLy4uL2RhdGEvYXNzZXRzL0JESV9tdWx0aV9oYXphcmQucG5nXCIsdGFyZ2V0OlwiX2JsYW5rXCJ9LGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse2NsYXNzOlwiZmlndXJlXCIsc3JjOnAuZGVmYXVsdCxhbHQ6XCJCdXJ1bmRpIE11bHRpLUhhemFyZCBpbnRlcmFjdGlvbnNcIn0pKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlcIixudWxsLFwiVGhpcyBpcyBhIGhhemFyZCBpbnRlcmFjdGlvbiBmcmFtZXdvcmsgZm9yIEJ1cnVuZGkgYmFzZWQgb24gYSBoaXN0b3JpY2FsIGRhdGEuIENsaWNrIG9uIHRoZSBpbWFnZSB0byBvcGVuIGl0IGluIGZ1bGwgc2l6ZVwiKSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIse2lkOlwibWlncmF0aW9uXCJ9LGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImgzXCJ9LFwiTWlncmF0aW9uXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiVGhlcmUgYXJlIGN1cnJlbnRseSBcIixpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwiMTI1IDMzOVwiKSxcIiBpbnRlcm5hbGx5IGRpc3BsYWNlZCBwZW9wbGUgaW4gQnVydW5kaSBcIixpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIix7aHJlZjpcImh0dHBzOi8vZHRtLmlvbS5pbnQvcmVwb3J0cy9idXJ1bmRpLSVFMiU4MCU5My10YWJsZWF1LWRlLWJvcmQtZGVzLWQlQzMlQTlwbGFjZW1lbnRzLWludGVybmVzLWp1aW4tMjAyMVwiLHRhcmdldDpcIl9ibGFua1wifSxcIihTb3VyY2U6IElPTSBiYXNlbGluZSBKdW5lIDIwMjEpXCIpLFwiLiBUaGUgdGhyZWUgbWFpbiBkcml2ZXIgb2YgZGlzcGxhY2VtZW50IGluIEJ1cnVuZGkgYXJlIChpbiBvcmRlciBvZiBpbXBvcnRhbmNlIGluIDIwMjEpOlwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwib2xcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYlwiLG51bGwsXCJkZXN0cnVjdGlvbiBvZiBzaGVsdGVyXCIpLFwiIGR1ZSB0byBzdWRkZW4gb25zZXQgY2xpbWF0ZSBkcml2ZW4gZGlzYXN0ZXJzICh0b3JyZW50aWFsIHJhaW5zLCBWaW9sZW50IHdpbmRzLCBsYW5kc2xpZGUgYW5kIGZsb29kaW5nKVwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwibGFjayBvZiAoYWdyaWN1bHR1cmFsKSBhY3Rpdml0aWVzXCIpLFwiIGR1ZSB0byBkZWNsaW5lIGluIGNyb3AgcHJvZHVjdGl2aXR5IGFuZCBpbmNyZWFzZSBpbiBwb3B1bGF0aW9uIGRlbnNpdHkgKFNvdXJjZTogR3JvdW5kc3dlbGwgUmVwb3J0KVwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwidmlvbGVuY2UgYW5kIGNvbmZsaWN0LlwiKSxcIiBNb3N0IG9mIHRoZSBjdXJyZW50IGRpc3BsYWNlbWVudHMgYXJlIGR1ZSB0byBjbGltYXRlIGRyaXZlbiBldmVudHMgKDEwMCUgYWNjb3JkaW5nIHRvIElPTSBkYXRhIGFuZCA3NiUgYWNjb3JkaW5nIHRvIElETUMvTlJDIGRhdGEpIHdoaWxlIGRhdGEgc2hvdyB0aGF0IHZpb2xlbmNlIGFuZCBjb25mbGljdCBpcyBjdXJyZW50bHkgbm90IGEgbWFqb3IgZHJpdmVyLlwiKSkpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse3ZhcmlhbnQ6XCJoNlwifSxcIkNMSU1BVEUgVFJFTkRTIEFORCBNSUdSQVRJT05cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJDbGltYXRlIHRyZW5kcyBhcyB0aGUgaW5jcmVhc2Ugb2YgdGVtcGVyYXR1cmVzIGFuZCB0aGUgaW50ZW5zaWZpY2F0aW9uIG9mIHJhaW5mYWxsIGV2ZW50cywgdG9nZXRoZXIgd2l0aCB0aGUgcHJvamVjdGVkIGluY3JlYXNlIGluIHBvcHVsYXRpb24gZGVuc2l0eSBhcmUgZ29pbmcgdG8gZHJpdmUgbW9yZSBjbGltYXRlIHJlbGF0ZWQgbWlncmF0aW9uIGluIHRoZSBmdXR1cmUuXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQsbnVsbCxcIkNsaW1hdGUtaW5kdWNlZCBpbnRlcm5hbCBtaWdyYW50cyBhcmUgcHJvamVjdGVkIHRvIHJhbXAgdXAgYWNyb3NzIGFsbCBzY2VuYXJpb3MgaW4gQnVydW5kaSByZWFjaGluZyA2MDAsMDAwIGJ5IDIwNTAgYW5kIHdpbGwgc2VlIGFuIGVtZXJnZW5jZSBvZiBjbGltYXRlIG1pZ3JhdGlvbiBob3RzcG90cyBjb2luY2lkaW5nIHdpdGggdGhlIHBvb3Jlc3QgYXJlYXMgYW5kIHRoZSBhcmVhcyBvZiBlY29ub21pYyBncm93dGguXCIsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLFwiQ29sbGluZXMgd2l0aCBoaWdoIGN1cnJlbnQgYW5kIHByb2plY3RlZCByaXNrIG9mIGZsb29kaW5nIGFuZCBsYW5kc2xpZGUgYXMgd2VsbCBhcyB0aG9zZSB3aXRoIGRlY3JlYXNpbmcgY3JvcCBwcm9kdWN0aXZpdHkgd2lsbCBiZSBob3RzcG90cyBmb3IgY2xpbWF0ZSBkcml2ZW4gbWlncmF0aW9uIChTb3VyY2U6IEdyb3VuZHN3ZWxsIHJlcG9ydCkuXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse3ZhcmlhbnQ6XCJoNlwifSxcIlJFVFVSTkVFU1wiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3M6XCJoaWdobGlnaHRcIn0sXCLigJxJbiAyMDIxLCBCdXJ1bmRpIGlzIGV4cGVjdGVkIHRvIHJlY2VpdmUgcmV0dXJuaW5nIHJlZnVnZWVzIGZyb20gdGhlIFVuaXRlZCBSZXB1YmxpYyBvZiBUYW56YW5pYSwgUndhbmRhLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiBDb25nbyBhbmQgVWdhbmRhLCBjb250aW51aW5nIHRoZSB0cmVuZCBvZiBpbmNyZWFzZWQgbnVtYmVycyBvZiB2b2x1bnRhcnkgcmV0dXJucyBmb2xsb3dpbmcgdGhlIHJlbGF0aXZlbHkgcGVhY2VmdWwgcG9saXRpY2FsIHRyYW5zaXRpb24gaW4gMjAyMC4g4oCcXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaVwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2hyZWY6XCJodHRwczovL3JlcG9ydGluZy51bmhjci5vcmcvbm9kZS8yOTc3N1wiLHRhcmdldDpcIl9ibGFua1wifSxcIiBTb3VyY2U6IFVOQ0hSLCAyMDIxXCIpKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCksXCJUaGUgcG90ZW50aWFsIGluc3RhYmlsaXR5IGNyZWF0ZWQgYnkgdGhlIGV4cGVjdGVkIGluZmx1eCBvZiBidXJ1bmRpYW4gcmV0dXJuZWVzIGR1ZSB0byBsYW5kLXJpZ2h0cyBjb25mbGljdCBjYW4gYmUgY2F1c2UgZm9yIG1vcmUgZnV0dXJlIGRpc3BsYWNlbWVudCBpbiB0aGUgbmV4dCB5ZWFycy5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLHtocmVmOlwiaHR0cHM6Ly9hcHAucG93ZXJiaS5jb20vdmlldz9yPWV5SnJJam9pTkRNeU1tWTJZVEF0TlRKak15MDBPREUzTFdGa05EVXRZVE5oTW1OaVpqWXpZelV5SWl3aWRDSTZJbVUxWXpNM09UZ3hMVFkyTmpRdE5ERXpOQzA0WVRCakxUWTFORE5rTW1GbU9EQmlaU0lzSW1NaU9qaDlcIix0YXJnZXQ6XCJfYmxhbmtcIn0saS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7Y2xhc3M6XCJmaWd1cmVcIixzcmM6cy5kZWZhdWx0LGFsdDpcIlJldHVybmVlcyBpbiBCdXJ1bmRpXCJ9KSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsbnVsbCxcIlJlZnVnZWVzIGFuZCByZXR1cm5lZXMgaW4gQnVydW5kaS4gXCIsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2NsYXNzOlwiZmlnLWNhcHRpb25cIixocmVmOlwiaHR0cHM6Ly9hcHAucG93ZXJiaS5jb20vdmlldz9yPWV5SnJJam9pTkRNeU1tWTJZVEF0TlRKak15MDBPREUzTFdGa05EVXRZVE5oTW1OaVpqWXpZelV5SWl3aWRDSTZJbVUxWXpNM09UZ3hMVFkyTmpRdE5ERXpOQzA0WVRCakxUWTFORE5rTW1GbU9EQmlaU0lzSW1NaU9qaDlcIix0YXJnZXQ6XCJfYmxhbmtcIn0sXCJTb3VyY2U6IFVOQ0hSLCAyMDIxXCIpKSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIse2lkOlwiY29uZmxpY3RcIn0saS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDNcIn0sXCJDb25mbGljdFwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQsbnVsbCxcIldoaWxlIEJ1cnVuZGkgaXMgb2ZmaWNpYWxseSBub3QgYSBjb3VudHJ5IGluIGNvbmZsaWN0IGF0IHRoZSBtb21lbnQsIHZpb2xlbmNlIGFuZCBjb25mbGljdCBzaXR1YXRpb25zIGFyZSBwcmVzZW50IHRocm91Z2hvdXQgdGhlIGNvdW50cnkuIEJ1cnVuZGkga25vd3MgcGVyaW9kcyBvZiBtb3JlIHZpb2xlbmNlIGFuZCBjb25mbGljdCB0aGFuIGluIG90aGVyIHBlcmlvZHMsIGJ1dCBjb25mbGljdCBzaXR1YXRpb25zIGhhdmUgbmV2ZXIgcmVhbGx5IGRpc2FwcGVhcmVkLlwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCkpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse2NsYXNzOlwiZmlndXJlXCIsc3JjOmYuZGVmYXVsdCxhbHQ6XCJDb25mbGljdCB0aW1lbGluZVwifSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLFwiSW1wYWN0cyBvZiBmcmFnaWxpdHksIGNvbmZsaWN0LCBhbmQgdmlvbGVuY2UgZXhhY2VyYmF0ZSBleGlzdGluZyB2dWxuZXJhYmlsaXRpZXMgb2YgcGVvcGxlIHRvIGNsaW1hdGUgaGF6YXJkcyBhcyB3ZWxsIGFzIGRlY3JlYXNpbmcgY29waW5nIGNhcGFjaXRpZXMuIENvbnRpbnVlZCB0ZW5zaW9ucyBvdmVyIGxhbmQgcmlnaHRzIGNvbXBvdW5kZWQgYnkgdGhlIGltcGFjdHMgb2YgY2xpbWF0ZSBleHRyZW1lcyBhcmUgZXhwZWN0ZWQgdG8gYmUgYSByaXNrIG11bHRpcGxpZXIgb2YgZnV0dXJlIGNvbmZsaWN0IGluIEJ1cnVuZGkuIFRoZSBtb3N0IHByb21pbmVudCBkcml2ZXIgb2YgY29uZmxpY3QgaXMgYSBjcmlzaXMgb2YgZ292ZXJuYW5jZSBjbG9zZWx5IGNvbm5lY3RlZCB0byByZXNvdXJjZXMgY29udHJvbC4gSW4gcGFydGljdWxhciwgY29udHJvbCBvdmVyIGxhbmQgaXMgYSBjcml0aWNhbCBmYWN0b3Igc2luY2UgbGFuZCBpcyBlc3NlbnRpYWwgdG8gdGhlIGxpdmVsaWhvb2RzIG9mIGEgbWFqb3JpdHkgb2YgQnVydW5kaWFucy4gSG93ZXZlciwgbGFuZCBpcyBzY2FyY2UgYW5kIGhlbmNlIHRoZSBpbXBhY3RzIG9mIHdlYXRoZXIgZXZlbnRzIGFuZCBvdGhlciBzb2NpYWwgZHluYW1pY3MgYXJlIGNhdXNpbmcgdGVuc2lvbiBhbmQgY29uZmxpY3QuICBBbiBhbmFseXNpcyBvZiBsb2NhdGlvbnMgb2YgcGVvcGxlIGFmZmVjdGVkIGJ5IGNvbmZsaWN0IGhhcyBzaG93biB0aGF0IGhvdCBzcG90IGFyZWFzIG9mIGNvbmZsaWN0IGFuZCB2dWxuZXJhYmlsaXR5IGFyZSBlc3BlY2lhbGx5IGxvY2F0ZWQgd2l0aGluIHRoZSBDYXBpdGFsIENpdHkgQnVqdW1idXJhIGFuZCB0aGUgcHJvdmluY2VzIEJ1anVtYnVyYSBSdXJhbCwgQ2liaXRva2UsIFJ1bW9uZ2UsIGFuZCBNd2Fyby5cIixpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse3ZhcmlhbnQ6XCJoNlwifSxcIk1BUCBFWFBMQU5BVElPTlwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQsbnVsbCxcIlBhc3QgY29uZmxpY3QgaXMgcmVwcmVzZW50ZWQgdXNpbmcgVUNEUCBkYXRhIGZyb20gMTk4OSB0byAyMDE5LiBOdW1iZXIgb2YgZmF0YWxpdGllcyBhcmUgc3VtbWVkIHBlciBldmVudCBwZXIgY29sbGluZS4gQ29sbGluZXMgd2hlcmUgVUNEUCBoYXMgbm90IHJlY29yZGVkIGEgZmF0YWxpdHkgYXJlIG5vdCByZXByZXNlbnRlZCBvbiB0aGUgbWFwLlwiKSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIse2lkOlwidnVsbmVyYWJpbGl0eVwifSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse3ZhcmlhbnQ6XCJoM1wifSxcIlZ1bG5lcmFiaWxpdHlcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiVlVMTkVSQUJJTElUWSBJTkRJQ0FUT1JTXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiRm9yIHZ1bG5lcmFiaWxpdHkgZGltZW5zaW9uIGZvbGxvd2luZyBpbmRpY2F0b3JzIHdlcmUgdXNlZDpcIixpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVsXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIk11bHRpZGltZW5zaW9uYWwgUG92ZXJ0eSBJbmRleCAoT3hmb3JkIFBvdmVydHkgYW5kIEh1bWFuIERldmVsb3BtZW50IEluaXRpYXRpdmUsIDIwMjApXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiRGVhdGhzIGR1ZSB0byBtYWxhcmlhIChwZXIgMTAwIDAwMCBwb3B1bGF0aW9uKSAoV0hPLCAyMDE5KVwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIlBlcmNlbnRhZ2Ugb2YgcG9wdWxhdGlvbiBvdmVyIDYwIChGYWNlYm9vaywgMjAyMClcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJQZXJjZW50YWdlIG9mIHBvcHVsYXRpb24gdW5kZXIgNSAoRmFjZWJvb2ssIDIwMjApXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiUGVyY2VudGFnZSBvZiBwcmVnbmVudCB3b21lbiAoV29ybGRQb3AsIDIwMTcpXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiUGVyY2VudGFnZSBvZiBwZW9wbGUgaW4gbmVlZCAoT0NIQSwgMjAyMSlcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJQZXJjZW50YWdlIG9mIHBlb3BsZSB0aGF0IGV4cGVyaWVuY2UgZm9vZCBzdHJlc3MsIGNyaXNpcyBvciBlbWVyZ2VuY3kgKElQUywgMjAyMClcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJGb29kIGluc2VjdXJpdHkgKGNhdGVnb3JpZXMpIChXRlAsIDIwMTQpXCIpKSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDZcIn0sXCJWVUxORVJBQkxFIENPTExJTkVTXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiVGhlIG1vc3QgdnVsbmVyYWJsZSBjb2xsaW5lcyBpbiBCdXJ1bmRpIGFyZSAoYWNjb3JkaW5nIHRvIElORk9STSB2dWxuZXJhYmlsaXR5IHNjb3JlKTpcIixpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm9sXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIkNlbnRyZS1VcmJhaW4sIENhbmt1em8gKENhbmt1em8gcHJvdmluY2UpIC0gNy45XCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiTWFyYW12eWEsIEJ1dGloaW5kYSAoTXV5aW5nYSBwcm92aW5jZSkgLSA3Ljg4XCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiS2liaW1iYSwgTWlzaGloYSAoQ2Fua3V6byBwcm92aW5jZSkgLSA3Ljg0XCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiTWFyYW12eWEsIEdpdGFyYW11a2EgKEthcnV6aSBwcm92aW5jZSkgLSA3Ljg0XCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiUnVzYWdhcmEsIEtpZ2FtYmEgKENhbmt1em8gcHJvdmluY2UpIC0gNy44MlwiKSkpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiVlVMTkVSQUJJTElUWSBDTEFTU0VTXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiVGhlIDI2MTYgY29sbGluZXMgb2YgQnVydW5kaSBhcmUgY2xhc3NpZmllZCBpbnRvIGZvbGxvd2luZyB2dWxuZXJhYmlsaXR5IGNsYXNzZXM6XCIsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsbnVsbCxcIlZlcnkgaGlnaDogXCIpLFwiMTI5NiBjb2xsaW5lcywgNTIuMiUgb2YgdG90YWwgYXJlYS5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsbnVsbCxcIkhpZ2g6IFwiKSxcIjEyMDAgY29sbGluZXMsIDQzLjIlIG9mIHRvdGFsIGFyZWEuXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYlwiLG51bGwsXCJNZWRpdW06IFwiKSxcIjEyMCBjb2xsaW5lcywgNC42JSBvZiB0b3RhbCBhcmVhLlwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwiTG93OiBcIiksXCIwIGNvbGxpbmVzLlwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwiVmVyeSBsb3c6IFwiKSxcIjAgY29sbGluZXMuXCIpKSkpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLHtpZDpcImxhY2tfb2ZfY29waW5nX2NhcGFjaXR5XCJ9LGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImgzXCJ9LFwiTGFjayBvZiBjb3BpbmcgY2FwYWNpdHlcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiTEFDSyBPRiBDT1BJTkcgQ0FQQUNJVFkgSU5ESUNBVE9SU1wiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQsbnVsbCxcIkZvciBsYWNrIG9mIGNvcGluZyBjYXBhY2l0eSBkaW1lbnNpb24gZm9sbG93aW5nIGluZGljYXRvcnMgd2VyZSB1c2VkOlwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiTnVtYmVyIG9mIGhlYWx0aCBmYWNpbGl0aWVzIHBlciAxMCwwMDAgcGVvcGxlIChHbG9iYWwgSGVhbHRoc2l0ZXMgTWFwcGluZyBQcm9qZWN0LCAyMDIxKVwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIk51bWJlciBvZiBlZHVjYXRpb24gZmFjaWxpdGllcyBwZXIgMTAsMDAwIHBlb3BsZSAoT1NNLCAyMDE5KVwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIkFjY2VzcyB0byBlbGVjdHJpY2l0eSAoRWFydGggT2JzZXJ2YXRpb24gR3JvdXAsIDIwMTcpXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiQWNjZXNzIHRvIGNpdGllcyAoTWFsYXJpYSBBdGxhcywgMjAxNSlcIikpKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse3ZhcmlhbnQ6XCJoNlwifSxcIkNPTExJTkVTIFdJVEggTE9XIENPUElORyBDQVBBQ0lUWVwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQsbnVsbCxcIkNvbGxpbmVzIHdpdGggdGhlIGxvd2VzdCBjb3BpbmcgY2FwYWNpdHkgaW4gQnVydW5kaSBhcmUgKGFjY29yZGluZyB0byBJTkZPUk0gbGFjayBvZiBjb3BpbmcgY2FwYWNpdHkgc2NvcmUpOlwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwib2xcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiTXVzZW5nYSwgTXdha2lybyAoTXV5aW5nYSBwcm92aW5jZSkgLSA5LjU4XCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiS2l2dW11LCBCdXRlemkgKFJ1eWlnaSBwcm92aW5jZSkgLSA4LjgyXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiTnlhcnVtYW5nYSwgTWF0b25nbyAoS2F5YW56YSBwcm92aW5jZSkgLSA4LjY5XCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiTnlhbXVnb25nbywgTXBpbmdhLUtheW92ZSAoUnV0YW5hIHByb3ZpbmNlKSAtIDguNjVcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJLYWdlZ2UsIFZ1Z2l6byAoTWFrYW1iYSBwcm92aW5jZSkgLSA4LjYyXCIpKSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDZcIn0sXCJMQUNLIE9GIENPUElORyBDQVBBQ0lUWSBDTEFTU0VTXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYlwiLG51bGwsXCJWZXJ5IGhpZ2g6IFwiKSxcIjIzNjcgY29sbGluZXMsIDg5LjMlIG9mIHRvdGFsIGFyZWEuXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYlwiLG51bGwsXCJIaWdoOiBcIiksXCIyMTYgY29sbGluZXMsIDguOSUgb2YgdG90YWwgYXJlYS5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsbnVsbCxcIk1lZGl1bTogXCIpLFwiMjcgY29sbGluZXMsIDEuMSUgb2YgdG90YWwgYXJlYS5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsbnVsbCxcIkxvdzogXCIpLFwiNSBjb2xsaW5lcywgMC4zJSBvZiB0b3RhbCBhcmVhLlwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwiVmVyeSBsb3c6IFwiKSxcIjEgY29sbGluZSwgMC41JSBvZiB0b3RhbCBhcmVhLlwiKSkpKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIix7aWQ6XCJoYXphcmRfZXhwb3N1cmVcIn0saS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDNcIn0sXCJIYXphcmQgZXhwb3N1cmVcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiSEFaQVJEIEFORCBFWFBPU1VSRSBJTkRJQ0FUT1JTXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiRm9yIGhhemFyZCBhbmQgZXhwb3N1cmUgZGltZW5zaW9uIHdlIGhhdmUgY29uc2lkZXJlZCB0aGUgZm9sb3dpbmcgaGF6YXJkczpcIixpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVsXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIkZsb29vZHMgKFNvdXJjZTogV29ybGQgQmFuaywgMjAyMSlcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJEcm91Z2h0IChTb3VyY2U6IFVORVAvR1JJRC1FdXJvcGUsIDIwMTQpXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiTGFuZHNsaWRlcyAoU291cmNlOiBXb3JsZCBCYW5rLCAyMDIxKVwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIkNvbmZsaWN0IChTb3VyY2U6IFVDRFAsIDIwMjApXCIpKSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDZcIn0sXCJDT0xMSU5FUyBFWFBPU0VEIFRPIEhBWkFSRFNcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJUaGUgbW9zdCBleHBvc2VkIHRvIGhhemFyZHMgY29sbGluZXMgaW4gQnVydW5kaSBhcmUgKGFjY29yZGluZyB0byBJTkZPUk0gaGF6YXJkICYgZXhwb3N1cmUgc2NvcmUpOlwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwib2xcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiQnVqdW1idXJhIE1haXJpZSAtIDguMTNcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJCdWtpbmFueWFuYSwgQnVraW5hbnlhbmEgKENpYml0b2tlIHByb3ZpbmNlKSAtIDguMDVcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJOeWFtYWJva28sIEthbnlvc2hhIChCdWp1bWJ1cmEgUnVyYWwgcHJvdmluY2UpIC0gNy43NlwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIkdpdGF6YSwgTXVodXRhIChSdW1vbmdlIHByb3ZpbmNlKSAtIDcuNzJcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJHYXNlbnlpLCBCdXJ1cmkgKEJ1cnVyaSBwcm92aW5jZSkgLSA3LjdcIikpKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse3ZhcmlhbnQ6XCJoNlwifSxcIkhBWkFSRCBFWFBPU1VSRSBDTEFTU0VTXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYlwiLG51bGwsXCJWZXJ5IGhpZ2g6IFwiKSxcIjE3OCBjb2xsaW5lcywgOS4wJSBvZiB0b3RhbCBhcmVhLlwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwiSGlnaDogXCIpLFwiODg4IGNvbGxpbmVzLCAzNC41JSBvZiB0b3RhbCBhcmVhLlwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIixudWxsLFwiTWVkaXVtOiBcIiksXCI3NDkgY29sbGluZXMsIDI5LjclIG9mIHRvdGFsIGFyZWEuXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYlwiLG51bGwsXCJMb3c6IFwiKSxcIjgwMSBjb2xsaW5lcywgMjYuOCUgb2YgdG90YWwgYXJlYS5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsbnVsbCxcIlZlcnkgbG93OiBcIiksXCIwIGNvbGxpbmVzLlwiKSkpKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIix7aWQ6XCJsYW5kX2Vyb3Npb25cIn0saS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDNcIn0sXCJMYW5kIGVyb3Npb25cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiRXJvc2lvbiBhbmQgc29pbCBsb3NzIGluIHByb2R1Y3RpdmUgbGFuZHNjYXBlcyBpcyBhbiBvbmdvaW5nIGlzc3VlIGZvciBCdXJ1bmRpLCB3aGVyZSBlcm9zaW9uIHJhdGVzIGluIHRoZSBoaWdobGFuZHMgY2FuIHJlYWNoIDEwMCB0b25z4oCJaGHiiJIxIFwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLHtocmVmOlwiaHR0cHM6Ly9vbmxpbmVsaWJyYXJ5LndpbGV5LmNvbS9kb2kvMTAuMTAwMi9sZHIuMzIzMVwiLHRhcmdldDpcIl9ibGFua1wifSxcIihTb3VyY2U6IE5kYWdpamltYW5hLCBLZXNzbGVyLCAmIEFzc2VsZG9uaywgMjAxOSlcIiksXCIuIFdpdGhvdXQgcHJvcGVyIGxhbmQgbWFuYWdlbWVudCwgbGFuZCBkZWdyYWRhdGlvbiBjYW4gcmVzdWx0IGluIGluY3JlYXNpbmcgbG9zcyBvZiBmZXJ0aWxlIHNvaWxzLCB3aXRoIGltcGFjdHMgb24gZm9vZCBzZWN1cml0eSBhbmQgbGl2ZWxpaG9vZHMuIE1lYW4gZXJvc2lvbiByYXRlICh0b25zL2hhL3llYXIpIHdhcyBlc3RpbWF0ZWQgdXNpbmcgdGhlIFwiLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLHtocmVmOlwiaHR0cHM6Ly9uYXR1cmFsY2FwaXRhbHByb2plY3Quc3RhbmZvcmQuZWR1L3NvZnR3YXJlL2ludmVzdFwiLHRhcmdldDpcIl9ibGFua1wifSxcIkluVkVTVCBTZWRpbWVudCBEZWxpdmVyeSBSYXRpbyBtb2RlbFwiKSxcIiwgd2hpY2ggY29uc2lkZXJzIHNvaWwgdHlwZSwgc2xvcGUsIHJhaW5mYWxsLCBsYW5kIGNvdmVyIGFuZCBtYW5hZ2VtZW50IHByYWN0aWNlcy5cIikpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLHtpZDpcIm5ic1wifSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse3ZhcmlhbnQ6XCJoM1wifSxcIk5CUyBwb3RlbnRpYWwgaW5kZXhcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiTmF0dXJlLWJhc2VkIHNvbHV0aW9ucyByZWZlcnMgdG8gYSBicm9hZCByYW5nZSBvZiBsYW5kIG1hbmFnZW1lbnQgcHJhY3RpY2VzIHRoYXQgYWltIHRvIHByb3RlY3QgYW5kIHJlc3RvcmUgbmF0dXJhbCBlY29zeXN0ZW1zIGFuZCBpbXBsZW1lbnQgYmVzdCBtYW5hZ2VtZW50IHByYWN0aWNlcyBvbiBjcm9wbGFuZHMgYW5kIGdyYXppbmcgbGFuZHMuIFRocm91Z2ggdGhlaXIgaW1wYWN0cyBvbiB2ZWdldGF0aW9uIGFuZCBzb2lscywgTkJTIGNhbiBoZWxwIHRvIGltcHJvdmUgZm9vZCBzZWN1cml0eSB3aGlsZSBzdGFiaWxpemluZyBzbG9wZXMsIG1haW50YWluaW5nIGhlYWx0aHkgc29pbHMsIGFuZCByZWR1Y2luZyB0aGUgcmlzayBvZiBzbWFsbCB0byBtZWRpdW0gbGFuZHNsaWRlcy4gTkJTIGluY2x1ZGUgYWN0aXZpdGllcyBzdWNoIGFzIGNvbnNlcnZhdGlvbiBhZ3JpY3VsdHVyZSwgYWdyb2ZvcmVzdHJ5LCBzdXN0YWluYWJsZSBmb3Jlc3RyeSwgcm90YXRpb25hbCBncmF6aW5nLCBzaWx2b3Bhc3R1cmUsIHJldmVnZXRhdGluZyBkZW51ZGVkIHNsb3BlcyBhbmQgYWxvbmcgcmlwYXJpYW4gY29ycmlkb3JzLCBhbmQgcHJvdGVjdGluZyBleGlzdGluZyBuYXR1cmFsIGVjb3N5c3RlbXMgaW4gZ29vZCBjb25kaXRpb24uIFRoaXMgaW5kZXggcmVmbGVjdHMgdGhlIHBvdGVudGlhbCBmb3IgcHJvdGVjdGluZyBhbmQgcmVzdG9yaW5nIHZlZ2V0YXRpb24gdG8gcGxheSBhIHJvbGUgaW4gcmVkdWNpbmcgZXJvc2lvbiBhbmQvb3IgbGFuZHNsaWRlIGhhemFyZC5cIikpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLHtpZDpcImhhemFyZF9wcm9qZWN0aW9uc18yMDMwXCJ9LGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImgzXCJ9LFwiSGF6YXJkcyBwcm9qZWN0aW9uczogY2xpbWF0ZSAyMDMwXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQsbnVsbCxcIlVzaW5nIGNsaW1hdGUgcHJvamVjdGlvbnMgZm9yIEJ1cnVuZGksIHdlIGhhdmUgbWFkZSBhbiBlc3RpbWF0aW9uIGhvdyBoYXphcmQgZXhwb3N1cmUgd2lsbCBjaGFuZ2UgaW4gMjAzMC5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiRkxPT0RTXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiQ2hhbmdlcyBpbiBNYXhpbXVtIDUtZGF5IHByZWNpcGl0YXRpb24gdG90YWwgKFJYNWRheSkgd2VyZSB1c2VkIHRvIGNhbGN1bGF0ZSBob3cgZmxvb2QgZXhwb3N1cmUgd2lsbCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiRFJPVUdIVFNcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJDaGFuZXMgaW4gTWF4aW11bSBudW1iZXIgb2YgY29uc2VjdXRpdmUgZHJ5IGRheXMgd2l0aCBSUiBsZXNzIHRoYW4gMSBtbSAoQ0REKSB3ZXJlIHVzZWQgdG8gY2FsY3VsYXRlIGhvdyBkcm91Z2h0IGV4cG9zdXJlIHdpbGwgY2hhbmdlIGluIHRoZSBmdXR1cmUuXCIpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse3ZhcmlhbnQ6XCJoNlwifSxcIkxBTkRTTElERVNcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJDaGFuZ2VzIGluIE1heGltdW0gNS1kYXkgcHJlY2lwaXRhdGlvbiB0b3RhbCAoUlg1ZGF5KSB3ZXJlIHVzZWQgdG8gY2FsY3VsYXRlIGhvdyBmbG9vZCBleHBvc3VyZSB3aWxsIGNoYW5nZSBpbiB0aGUgZnV0dXJlLlwiKSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIse2lkOlwiaGF6YXJkX3Byb2plY3Rpb25zXzIwNTBcIn0saS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDNcIn0sXCJIYXphcmRzIHByb2plY3Rpb25zOiBjbGltYXRlIDIwNTBcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCxudWxsLFwiVXNpbmcgY2xpbWF0ZSBwcm9qZWN0aW9ucyBmb3IgQnVydW5kaSwgd2UgaGF2ZSBtYWRlIGFuIGVzdGltYXRpb24gaG93IGhhemFyZCBleHBvc3VyZSB3aWxsIGNoYW5nZSBpbiAyMDUwLlwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDZcIn0sXCJGTE9PRFNcIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LG51bGwsXCJDaGFuZ2VzIGluIE1heGltdW0gNS1kYXkgcHJlY2lwaXRhdGlvbiB0b3RhbCAoUlg1ZGF5KSB3ZXJlIHVzZWQgdG8gY2FsY3VsYXRlIGhvdyBmbG9vZCBleHBvc3VyZSB3aWxsIGNoYW5nZSBpbiB0aGUgZnV0dXJlLlwiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsbnVsbCksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoci5kZWZhdWx0LHt2YXJpYW50OlwiaDZcIn0sXCJEUk9VR0hUU1wiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQsbnVsbCxcIkNoYW5lcyBpbiBNYXhpbXVtIG51bWJlciBvZiBjb25zZWN1dGl2ZSBkcnkgZGF5cyB3aXRoIFJSIGxlc3MgdGhhbiAxIG1tIChDREQpIHdlcmUgdXNlZCB0byBjYWxjdWxhdGUgaG93IGRyb3VnaHQgZXhwb3N1cmUgd2lsbCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cIiksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7dmFyaWFudDpcImg2XCJ9LFwiTEFORFNMSURFU1wiKSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQsbnVsbCxcIkNoYW5nZXMgaW4gTWF4aW11bSA1LWRheSBwcmVjaXBpdGF0aW9uIHRvdGFsIChSWDVkYXkpIHdlcmUgdXNlZCB0byBjYWxjdWxhdGUgaG93IGZsb29kIGV4cG9zdXJlIHdpbGwgY2hhbmdlIGluIHRoZSBmdXR1cmUuXCIpKSl9fV0pLHR9KGkuZGVmYXVsdC5Db21wb25lbnQpO3QuZGVmYXVsdD1fLF8ucHJvcFR5cGVzPXtjaGFwdGVyTmFtZTpuLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsdXBkYXRlQ2hhcHRlcjpuLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkfX0sMTM2OmZ1bmN0aW9uKGUsdCxhKXtlLmV4cG9ydHM9YS5wK1wiZGF0YS9hc3NldHMvVEdfbW9udGhseV9tZWFuX3dmZGVpLWNydS5wbmdcIn0sMTM3OmZ1bmN0aW9uKGUsdCxhKXtlLmV4cG9ydHM9YS5wK1wiZGF0YS9hc3NldHMvcHJfVEdfc2Vhc29uYWxfY3ljbGVfY2hpcnBzX3dmZGVpLWNydS5wbmdcIn0sMTM4OmZ1bmN0aW9uKGUsdCxhKXtlLmV4cG9ydHM9YS5wK1wiZGF0YS9hc3NldHMvQkRJX21pZ3JhdGlvbl9yZXR1cm5lZXMucG5nXCJ9LDEzOTpmdW5jdGlvbihlLHQsYSl7ZS5leHBvcnRzPWEucCtcImRhdGEvYXNzZXRzL2J1cnVuZGlfZGlzYXN0ZXJzLnBuZ1wifSwxNDA6ZnVuY3Rpb24oZSx0LGEpe2UuZXhwb3J0cz1hLnArXCJkYXRhL2Fzc2V0cy9CRElfbXVsdGlfaGF6YXJkLnBuZ1wifSwxNDE6ZnVuY3Rpb24oZSx0LGEpe2UuZXhwb3J0cz1hLnArXCJkYXRhL2Fzc2V0cy9CRElfVUNEUC5wbmdcIn0sMTQyOmZ1bmN0aW9uKGUsdCxhKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIGE9MDthPHQubGVuZ3RoO2ErKyl7dmFyIGw9dFthXTtsLmVudW1lcmFibGU9bC5lbnVtZXJhYmxlfHwhMSxsLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBsJiYobC53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbC5rZXksbCl9fXJldHVybiBmdW5jdGlvbih0LGEsbCl7cmV0dXJuIGEmJmUodC5wcm90b3R5cGUsYSksbCYmZSh0LGwpLHR9fSgpLGk9dShhKDEpKSxuPXUoYSgxOCkpLHI9dShhKDMpKSxvPXUoYSgxNDMpKSxjPXUoYSgxNDQpKSxkPXUoYSgxNDYpKSxzPWEoMjEpO2Z1bmN0aW9uIHUoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fW8uZGVmYXVsdC5hY2Nlc3NUb2tlbj1cInBrLmV5SjFJam9pWVc1blpXeHBibUZ5WXlJc0ltRWlPaUpqYTNFNWFHd3daRFV3TVcxck1tNXRjbUZ5TTI5d2VucHBJbjAucTF2XzdackxvR1Exc2xGeHBtbThVQVwiO3ZhciBwPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSl7IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyx0KTt2YXIgYT1mdW5jdGlvbihlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fSh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsKHRoaXMsZSkpO3JldHVybiBhLnN0YXRlPXtsYXQ6LTMuMzg0MTQ2LGxuZzoyOS45MTM2MzUsem9vbTo3Ljh9LGF9cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9KHQsZSksbCh0LFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLnN0YXRlLGE9dC5sbmcsbD10LmxhdDt0Lnpvb207dGhpcy50b29sdGlwQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5tYXA9bmV3IG8uZGVmYXVsdC5NYXAoe2NvbnRhaW5lcjp0aGlzLm1hcENvbnRhaW5lcixzdHlsZTpcIm1hcGJveDovL3N0eWxlcy9hbmdlbGluYXJjL2NrcWM4OXA5azBud2UxN3AxbjR4bTBwemlcIixjZW50ZXI6W2EsbF0sem9vbTo3LjgsbWluWm9vbTo3LjUsbWF4Wm9vbToxMCxwaXRjaDowLGJlYXJpbmc6MH0pLHRoaXMubWFwLmFkZENvbnRyb2wobmV3IG8uZGVmYXVsdC5OYXZpZ2F0aW9uQ29udHJvbCxcInRvcC1yaWdodFwiKSx0aGlzLm1hcC5vbihcInN0eWxlLmxvYWRcIiwoZnVuY3Rpb24oKXtlLm1hcC5hZGRTb3VyY2UoXCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNcIix7dHlwZTpcImdlb2pzb25cIixkYXRhOlwiZGF0YS9CRElfaGlzdG9yaWNhbF9kaXNhc3Rlci5nZW9qc29uXCJ9KSxlLm1hcC5hZGRTb3VyY2UoXCJCRElfbWlncmF0aW9uXCIse3R5cGU6XCJnZW9qc29uXCIsZGF0YTpcImRhdGEvQkRJX21pZ3JhdGlvbl9uZXcuZ2VvanNvblwifSksZS5tYXAuYWRkU291cmNlKFwiQkRJX2NvbmZsaWN0X1VDRFBfcG9sXCIse3R5cGU6XCJnZW9qc29uXCIsZGF0YTpcImRhdGEvQkRJX2NvbmZsaWN0X1VDRFBfcG9sLmdlb2pzb25cIn0pLGUubWFwLmFkZFNvdXJjZShcIkJESV9jb25mbGljdF90cmVuZHNcIix7dHlwZTpcImdlb2pzb25cIixkYXRhOlwiZGF0YS9CRElfY29uZmxpY3RfdHJlbmRzLmdlb2pzb25cIn0pLGUubWFwLmFkZFNvdXJjZShcIkJESV9jbGltYXRlXCIse3R5cGU6XCJnZW9qc29uXCIsZGF0YTpcImRhdGEvQkRJX2NsaW1hdGUuZ2VvanNvblwifSksZS5tYXAuYWRkU291cmNlKFwiQkRJX2luZm9ybVwiLHt0eXBlOlwiZ2VvanNvblwiLGRhdGE6XCJkYXRhL0JESV9JTkZPUk1fUklTS19BTExfUFJPSl92Mi5nZW9qc29uXCJ9KSxlLm1hcC5hZGRMYXllcih7aWQ6XCJCRElfY2xpbWF0ZV9jZGRcIix0eXBlOlwiZmlsbFwiLHNvdXJjZTpcIkJESV9jbGltYXRlXCIsZmlsdGVyOltcIj09XCIsXCJpbmRpY2F0b3JcIixcIkNERFwiXSxwYWludDp7XCJmaWxsLW9wYWNpdHlcIjoxLFwiZmlsbC1vcGFjaXR5LXRyYW5zaXRpb25cIjp7ZHVyYXRpb246ODAwLGRlbGF5OjB9LFwiZmlsbC1vdXRsaW5lLWNvbG9yXCI6XCIjNTA1MDUwXCIsXCJmaWxsLWNvbG9yXCI6e3Byb3BlcnR5Olwib2JzX21lYW5cIixzdG9wczpbWzQ2LjIsXCIjMDgxZDU4XCJdLFs1OC40LFwiIzIyNWVhOFwiXSxbNzAuNixcIiM0MWI2YzRcIl0sWzgyLjgsXCIjYzdlOWI0XCJdLFs5NixcIiNmZmZmZDlcIl1dfX19LFwid2F0ZXJ3YXktbGFiZWxcIiksZS5tYXAuYWRkTGF5ZXIoe2lkOlwiQkRJX2NsaW1hdGVfY2RkX3Byb2pcIix0eXBlOlwiZmlsbFwiLHNvdXJjZTpcIkJESV9jbGltYXRlXCIsZmlsdGVyOltcIj09XCIsXCJpbmRpY2F0b3JcIixcIkNERFwiXSxwYWludDp7XCJmaWxsLW9wYWNpdHlcIjowLFwiZmlsbC1vcGFjaXR5LXRyYW5zaXRpb25cIjp7ZHVyYXRpb246ODAwLGRlbGF5OjB9LFwiZmlsbC1vdXRsaW5lLWNvbG9yXCI6XCIjNTA1MDUwXCIsXCJmaWxsLWNvbG9yXCI6e3Byb3BlcnR5OlwiY2hhbmdlXzIwMzBfbWVhblwiLHN0b3BzOltbLTIwLFwiIzAxNTY0ZFwiXSxbLTE1LFwiIzJmOTE4OVwiXSxbLTEwLFwiIzhhZDFjNlwiXSxbLTUsXCIjZDllZWViXCJdLFswLFwiI2Y2ZWRkNVwiXSxbNSxcIiNlMWM2ODRcIl0sWzEwLFwiI2I3NzkyOFwiXSxbMTUsXCIjNzU0MzA4XCJdLFsyMCxcIiM1NDMwMDVcIl1dfX19LFwid2F0ZXJ3YXktbGFiZWxcIiksZS5tYXAuYWRkTGF5ZXIoe2lkOlwiQkRJX2NsaW1hdGVfcHJjcHRvdFwiLHR5cGU6XCJmaWxsXCIsc291cmNlOlwiQkRJX2NsaW1hdGVcIixmaWx0ZXI6W1wiPT1cIixcImluZGljYXRvclwiLFwiUFJDUFRPVFwiXSxwYWludDp7XCJmaWxsLW9wYWNpdHlcIjowLFwiZmlsbC1vcGFjaXR5LXRyYW5zaXRpb25cIjp7ZHVyYXRpb246ODAwLGRlbGF5OjB9LFwiZmlsbC1vdXRsaW5lLWNvbG9yXCI6XCIjNTA1MDUwXCIsXCJmaWxsLWNvbG9yXCI6e3Byb3BlcnR5Olwib2JzX21lYW5cIixzdG9wczpbWzc1MCxcIiNmZmZmZDlcIl0sWzFlMyxcIiNjN2U5YjRcIl0sWzEyNTAsXCIjNDFiNmM0XCJdLFsxNTAwLFwiIzIyNWVhOFwiXSxbMmUzLFwiIzA4MWQ1OFwiXV19fX0sXCJ3YXRlcndheS1sYWJlbFwiKSxlLm1hcC5hZGRMYXllcih7aWQ6XCJCRElfY2xpbWF0ZV9wcmNwdG90X3Byb2pcIix0eXBlOlwiZmlsbFwiLHNvdXJjZTpcIkJESV9jbGltYXRlXCIsZmlsdGVyOltcIj09XCIsXCJpbmRpY2F0b3JcIixcIlBSQ1BUT1RcIl0scGFpbnQ6e1wiZmlsbC1vcGFjaXR5XCI6MCxcImZpbGwtb3BhY2l0eS10cmFuc2l0aW9uXCI6e2R1cmF0aW9uOjgwMCxkZWxheTowfSxcImZpbGwtb3V0bGluZS1jb2xvclwiOlwiIzUwNTA1MFwiLFwiZmlsbC1jb2xvclwiOntwcm9wZXJ0eTpcImNoYW5nZV8yMDMwX21lYW5cIixzdG9wczpbWy0yMCxcIiM3NzQ1MDhcIl0sWy0xNSxcIiNiOTdiMjlcIl0sWy0xMCxcIiNlMmM3ODdcIl0sWy01LFwiI2Y2ZWRkN1wiXSxbMCxcIiNkN2VlZWJcIl0sWzUsXCIjODdkMGM1XCJdLFsxMCxcIiMyZDhmODdcIl0sWzE1LFwiIzAxNTY0ZFwiXV19fX0sXCJ3YXRlcndheS1sYWJlbFwiKSxlLm1hcC5hZGRMYXllcih7aWQ6XCJCRElfY2xpbWF0ZV9yeDVcIix0eXBlOlwiZmlsbFwiLHNvdXJjZTpcIkJESV9jbGltYXRlXCIsZmlsdGVyOltcIj09XCIsXCJpbmRpY2F0b3JcIixcIlJYNVwiXSxwYWludDp7XCJmaWxsLW9wYWNpdHlcIjowLFwiZmlsbC1vcGFjaXR5LXRyYW5zaXRpb25cIjp7ZHVyYXRpb246ODAwLGRlbGF5OjB9LFwiZmlsbC1vdXRsaW5lLWNvbG9yXCI6XCIjNTA1MDUwXCIsXCJmaWxsLWNvbG9yXCI6e3Byb3BlcnR5Olwib2JzX21lYW5cIixzdG9wczpbWzY1LFwiI2ZmZmZkOVwiXSxbODAsXCIjYzdlOWI0XCJdLFs5NSxcIiM0MWI2YzRcIl0sWzExMCxcIiMyMjVlYThcIl0sWzEyNSxcIiMwODFkNThcIl1dfX19LFwid2F0ZXJ3YXktbGFiZWxcIiksZS5tYXAuYWRkTGF5ZXIoe2lkOlwiQkRJX2NsaW1hdGVfcng1X3Byb2pcIix0eXBlOlwiZmlsbFwiLHNvdXJjZTpcIkJESV9jbGltYXRlXCIsZmlsdGVyOltcIj09XCIsXCJpbmRpY2F0b3JcIixcIlJYNVwiXSxwYWludDp7XCJmaWxsLW9wYWNpdHlcIjowLFwiZmlsbC1vcGFjaXR5LXRyYW5zaXRpb25cIjp7ZHVyYXRpb246ODAwLGRlbGF5OjB9LFwiZmlsbC1vdXRsaW5lLWNvbG9yXCI6XCIjNTA1MDUwXCIsXCJmaWxsLWNvbG9yXCI6e3Byb3BlcnR5OlwiY2hhbmdlXzIwMzBfbWVhblwiLHN0b3BzOltbLTIwLFwiIzc3NDUwOFwiXSxbLTE1LFwiI2I5N2IyOVwiXSxbLTEwLFwiI2UyYzc4N1wiXSxbLTUsXCIjZjZlZGQ3XCJdLFswLFwiI2Q3ZWVlYlwiXSxbNSxcIiM4N2QwYzVcIl0sWzEwLFwiIzJkOGY4N1wiXSxbMTUsXCIjMDE1NjRkXCJdXX19fSxcIndhdGVyd2F5LWxhYmVsXCIpLGUubWFwLmFkZExheWVyKHtpZDpcIkJESV9jbGltYXRlX3R4eFwiLHR5cGU6XCJmaWxsXCIsc291cmNlOlwiQkRJX2NsaW1hdGVcIixmaWx0ZXI6W1wiPT1cIixcImluZGljYXRvclwiLFwiVFhYXCJdLHBhaW50OntcImZpbGwtb3BhY2l0eVwiOjAsXCJmaWxsLW9wYWNpdHktdHJhbnNpdGlvblwiOntkdXJhdGlvbjo4MDAsZGVsYXk6MH0sXCJmaWxsLW91dGxpbmUtY29sb3JcIjpcIiM1MDUwNTBcIixcImZpbGwtY29sb3JcIjp7cHJvcGVydHk6XCJvYnNfbWVhblwiLHN0b3BzOltbMzIuMixcIiNkZGRjZGNcIl0sWzMzLjQsXCIjZjNjOGIyXCJdLFszNC42LFwiI2Y2YTU4NlwiXSxbMzUuOCxcIiNlNzc0NWJcIl0sWzM3LFwiI2M4MzgzNlwiXV19fX0sXCJ3YXRlcndheS1sYWJlbFwiKSxlLm1hcC5hZGRMYXllcih7aWQ6XCJCRElfY2xpbWF0ZV90eHhfcHJvalwiLHR5cGU6XCJmaWxsXCIsc291cmNlOlwiQkRJX2NsaW1hdGVcIixmaWx0ZXI6W1wiPT1cIixcImluZGljYXRvclwiLFwiVFhYXCJdLHBhaW50OntcImZpbGwtb3BhY2l0eVwiOjAsXCJmaWxsLW9wYWNpdHktdHJhbnNpdGlvblwiOntkdXJhdGlvbjo4MDAsZGVsYXk6MH0sXCJmaWxsLW91dGxpbmUtY29sb3JcIjpcIiM1MDUwNTBcIixcImZpbGwtY29sb3JcIjp7cHJvcGVydHk6XCJjaGFuZ2VfMjAzMF9tZWFuXCIsc3RvcHM6W1suNSxcIiNmZmYwZGNcIl0sWzEsXCIjZmVlMmJiXCJdLFsxLjUsXCIjZmRjZTk4XCJdLFsyLFwiI2ZkYjY3ZlwiXSxbMi41LFwiI2ZjOGM1OVwiXSxbMyxcIiNmMDY5NGFcIl0sWzMuNSxcIiNkYzNjMjhcIl0sWzQsXCIjYmUwZjBhXCJdLFs0LjUsXCIjOTYwMDAwXCJdLFs1LFwiIzdmMDAwMFwiXV19fX0sXCJ3YXRlcndheS1sYWJlbFwiKSxlLm1hcC5hZGRMYXllcih7aWQ6XCJCRElfbWlncmF0aW9uXCIsdHlwZTpcImZpbGxcIixzb3VyY2U6XCJCRElfbWlncmF0aW9uXCIsZmlsdGVyOltcIj5cIixcImluZGl2aWR1c19pbnRcIiwwXSxwYWludDp7XCJmaWxsLW9wYWNpdHlcIjowLFwiZmlsbC1vcGFjaXR5LXRyYW5zaXRpb25cIjp7ZHVyYXRpb246ODAwLGRlbGF5OjB9LFwiZmlsbC1vdXRsaW5lLWNvbG9yXCI6XCIjNTA1MDUwXCIsXCJmaWxsLWNvbG9yXCI6e3Byb3BlcnR5OlwiaW5kaXZpZHVzX2ludFwiLHN0b3BzOltbNTAsXCIjZjNmZmZmXCJdLFsxNTAsXCIjZDZmZmYzXCJdLFs1MDAsXCIjYmFlZmQ2XCJdLFsxZTMsXCIjODRiN2EwXCJdLFsyZTMsXCIjNTE4MjZjXCJdLFszZTQsXCIjMjA1MDNkXCJdXX19fSxcIndhdGVyd2F5LWxhYmVsXCIpLGUubWFwLmFkZExheWVyKHtpZDpcIkJESV9oaXN0b3JpY2FsX2Rpc2FzdGVyc19oZWF0XCIsdHlwZTpcImhlYXRtYXBcIixzb3VyY2U6XCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNcIixtYXh6b29tOjE1LHBhaW50OntcImhlYXRtYXAtY29sb3JcIjpbXCJpbnRlcnBvbGF0ZVwiLFtcImxpbmVhclwiXSxbXCJoZWF0bWFwLWRlbnNpdHlcIl0sMCxcInJnYmEoMjU0LDI0MCwyMTcsMClcIiwuMixcInJnYigyNTMsMjA0LDEzOClcIiwuNCxcInJnYigyNTIsMTQxLDg5KVwiLC42LFwicmdiKDIyNyw3NCw1MSlcIiwuOCxcInJnYigxNzksMCwwKVwiXSxcImhlYXRtYXAtcmFkaXVzXCI6NTAsXCJoZWF0bWFwLW9wYWNpdHlcIjowLFwiaGVhdG1hcC1vcGFjaXR5LXRyYW5zaXRpb25cIjp7ZHVyYXRpb246ODAwLGRlbGF5OjB9fX0sXCJ3YXRlcndheS1sYWJlbFwiKSxlLm1hcC5hZGRMYXllcih7aWQ6XCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNfcG9pbnRcIix0eXBlOlwiY2lyY2xlXCIsc291cmNlOlwiQkRJX2hpc3RvcmljYWxfZGlzYXN0ZXJzXCIscGFpbnQ6e1wiY2lyY2xlLXJhZGl1c1wiOjcsXCJjaXJjbGUtY29sb3JcIjp7cHJvcGVydHk6XCJtYWluX2hhemFyZFwiLHR5cGU6XCJjYXRlZ29yaWNhbFwiLHN0b3BzOltbXCJEcm91Z2h0XCIsXCIjZmJiMDNiXCJdLFtcIkhlYXZ5IHJhaW5mYWxsXCIsXCIjMjIzYjUzXCJdLFtcIkVwaWRlbWljXCIsXCIjZTU1ZTVlXCJdLFtcIldpbGRmaXJlXCIsXCIjMTY4QzA0XCJdLFtcIlZpb2xlbnQgd2luZFwiLFwiIzNiYjJkMFwiXV19LFwiY2lyY2xlLW9wYWNpdHlcIjowfX0sXCJ3YXRlcndheS1sYWJlbFwiKSxlLm1hcC5hZGRMYXllcih7aWQ6XCJCRElfY29uZmxpY3RfVUNEUF9wb2xcIix0eXBlOlwiZmlsbFwiLHNvdXJjZTpcIkJESV9jb25mbGljdF9VQ0RQX3BvbFwiLHBhaW50OntcImZpbGwtb3BhY2l0eVwiOjAsXCJmaWxsLW9wYWNpdHktdHJhbnNpdGlvblwiOntkdXJhdGlvbjo4MDAsZGVsYXk6MH0sXCJmaWxsLW91dGxpbmUtY29sb3JcIjpcIiM1MDUwNTBcIixcImZpbGwtY29sb3JcIjp7cHJvcGVydHk6XCJmYXRcIixzdG9wczpbWzM3LFwiI2ZlZWJlMlwiXSxbMTMyLFwiI2ZiYjRiOVwiXSxbMjgyLFwiI2Y3NjhhMVwiXSxbNDc4LFwiI2M1MWI4YVwiXSxbMjM3NyxcIiNhZTAxN2VcIl1dfX19LFwid2F0ZXJ3YXktbGFiZWxcIiksZS5tYXAuYWRkTGF5ZXIoe2lkOlwiQkRJX2NvbmZsaWN0X3RyZW5kc1wiLHR5cGU6XCJmaWxsXCIsc291cmNlOlwiQkRJX2NvbmZsaWN0X3RyZW5kc1wiLHBhaW50OntcImZpbGwtb3BhY2l0eVwiOjAsXCJmaWxsLW9wYWNpdHktdHJhbnNpdGlvblwiOntkdXJhdGlvbjo4MDAsZGVsYXk6MH0sXCJmaWxsLW91dGxpbmUtY29sb3JcIjpcIiM1MDUwNTBcIixcImZpbGwtY29sb3JcIjp7cHJvcGVydHk6XCJDb25fdHlwZVwiLHR5cGU6XCJjYXRlZ29yaWNhbFwiLHN0b3BzOltbXCJWaW9sZW5jZSBhZ2FpbnN0IGNpdmlsaWFuc1wiLFwiIzVlOTFiMlwiXSxbXCJSaW90c1wiLFwiI2NhNzkzNFwiXSxbXCJPdGhlclwiLFwiIzZlOGE2NFwiXSxbXCJCYXR0bGVzXCIsXCIjZmZkOTQ1XCJdXX19fSxcIndhdGVyd2F5LWxhYmVsXCIpLGUubWFwLmFkZExheWVyKHtpZDpcIkJESV9pbmZvcm1fbGFja1wiLHR5cGU6XCJmaWxsXCIsc291cmNlOlwiQkRJX2luZm9ybVwiLHBhaW50OntcImZpbGwtb3BhY2l0eVwiOjAsXCJmaWxsLW9wYWNpdHktdHJhbnNpdGlvblwiOntkdXJhdGlvbjo4MDAsZGVsYXk6MH0sXCJmaWxsLW91dGxpbmUtY29sb3JcIjpcIiM1MDUwNTBcIixcImZpbGwtY29sb3JcIjp7cHJvcGVydHk6XCJMQUNLIE9GIENPUElORyBDQVBBQ0lUWVwiLHN0b3BzOltbMy4xLFwiI2UxZTlkN1wiXSxbNC42LFwiI2M0ZDNiMFwiXSxbNS45LFwiI2E3YmQ4OVwiXSxbNy4zLFwiIzRmNjIzNlwiXSxbMTAsXCIjMzU0MTI0XCJdXX19fSxcIndhdGVyd2F5LWxhYmVsXCIpLGUubWFwLmFkZExheWVyKHtpZDpcIkJESV9pbmZvcm1fdnVsblwiLHR5cGU6XCJmaWxsXCIsc291cmNlOlwiQkRJX2luZm9ybVwiLHBhaW50OntcImZpbGwtb3BhY2l0eVwiOjAsXCJmaWxsLW9wYWNpdHktdHJhbnNpdGlvblwiOntkdXJhdGlvbjo4MDAsZGVsYXk6MH0sXCJmaWxsLW91dGxpbmUtY29sb3JcIjpcIiM1MDUwNTBcIixcImZpbGwtY29sb3JcIjp7cHJvcGVydHk6XCJWVUxORVJBQklMSVRZXCIsc3RvcHM6W1sxLjksXCIjY2NkOWVkXCJdLFszLjIsXCIjOTliM2RjXCJdLFs0LjcsXCIjNjY4ZWNiXCJdLFs2LjMsXCIjMjAzODVlXCJdLFsxMCxcIiMxNTI2M2ZcIl1dfX19LFwid2F0ZXJ3YXktbGFiZWxcIiksZS5tYXAuYWRkTGF5ZXIoe2lkOlwiQkRJX2luZm9ybV9oZVwiLHR5cGU6XCJmaWxsXCIsc291cmNlOlwiQkRJX2luZm9ybVwiLHBhaW50OntcImZpbGwtb3BhY2l0eVwiOjAsXCJmaWxsLW9wYWNpdHktdHJhbnNpdGlvblwiOntkdXJhdGlvbjo4MDAsZGVsYXk6MH0sXCJmaWxsLW91dGxpbmUtY29sb3JcIjpcIiM1MDUwNTBcIixcImZpbGwtY29sb3JcIjp7cHJvcGVydHk6XCJIQVpBUkQgJiBFWFBPU1VSRVwiLHN0b3BzOltbMS40LFwiI2ZjZTZkOFwiXSxbMi42LFwiI2ZhY2RiMlwiXSxbNCxcIiNmOGI0OGJcIl0sWzYsXCIjZDk1ODBjXCJdLFsxMCxcIiM5MTNiMDhcIl1dfX19LFwid2F0ZXJ3YXktbGFiZWxcIiksZS5tYXAuYWRkTGF5ZXIoe2lkOlwiQkRJX2luZm9ybV9yaXNrXCIsdHlwZTpcImZpbGxcIixzb3VyY2U6XCJCRElfaW5mb3JtXCIscGFpbnQ6e1wiZmlsbC1vcGFjaXR5XCI6MCxcImZpbGwtb3BhY2l0eS10cmFuc2l0aW9uXCI6e2R1cmF0aW9uOjgwMCxkZWxheTowfSxcImZpbGwtb3V0bGluZS1jb2xvclwiOlwiIzUwNTA1MFwiLFwiZmlsbC1jb2xvclwiOntwcm9wZXJ0eTpcIklORk9STSBSSVNLIElOREVYIFNDT1JFXCIsc3RvcHM6W1sxLjksXCIjZmVjOGMwXCJdLFszLjQsXCIjZmU5MTgxXCJdLFs0LjksXCIjZmU1YjQyXCJdLFs2LjQsXCIjOTExMzAwXCJdLFsxMCxcIiM2MTBkMDBcIl1dfX19LFwid2F0ZXJ3YXktbGFiZWxcIiksZS5tYXAuYWRkTGF5ZXIoe2lkOlwiQkRJX2Vyb3Npb25cIix0eXBlOlwiZmlsbFwiLHNvdXJjZTpcIkJESV9pbmZvcm1cIixwYWludDp7XCJmaWxsLW9wYWNpdHlcIjowLFwiZmlsbC1vcGFjaXR5LXRyYW5zaXRpb25cIjp7ZHVyYXRpb246ODAwLGRlbGF5OjB9LFwiZmlsbC1vdXRsaW5lLWNvbG9yXCI6XCIjNTA1MDUwXCIsXCJmaWxsLWNvbG9yXCI6e3Byb3BlcnR5OlwiQXZlcmFnZSBlcm9zaW9uIHJhdGUgYnkgY29sbGluZSwgdG9ucy9oYS95ZWFyXCIsc3RvcHM6W1szNjUsXCIjNDA0MDQwXCJdLFs1ODIsXCIjNzY3Njc2XCJdLFs3NzQsXCIjYWNhY2FjXCJdLFs5ODcsXCIjZDFkMmQxXCJdLFsxMjIwLFwiI2YwZjBmMFwiXSxbMTQ5MCxcIiNmOWVhZTRcIl0sWzE4MzIsXCIjZjJjMGIxXCJdLFsyMjQ0LFwiI2U1OGY4MFwiXSxbMjk1NixcIiNkYzQ2NTBcIl0sWzc3MDAsXCIjYzYwYjI3XCJdXX19fSxcIndhdGVyd2F5LWxhYmVsXCIpLGUubWFwLmFkZExheWVyKHtpZDpcIkJESV9uYnNcIix0eXBlOlwiZmlsbFwiLHNvdXJjZTpcIkJESV9pbmZvcm1cIixwYWludDp7XCJmaWxsLW9wYWNpdHlcIjowLFwiZmlsbC1vcGFjaXR5LXRyYW5zaXRpb25cIjp7ZHVyYXRpb246ODAwLGRlbGF5OjB9LFwiZmlsbC1vdXRsaW5lLWNvbG9yXCI6XCIjNTA1MDUwXCIsXCJmaWxsLWNvbG9yXCI6e3Byb3BlcnR5OlwiTkJTIFBvdGVudGlhbCBJbmRleFwiLHN0b3BzOltbLjEyLFwiI2E1NjAxY1wiXSxbLjE1LFwiI2I5OGU1OVwiXSxbLjE5LFwiI2Q1YjQ3YVwiXSxbLjI1LFwiI2U0Y2RhN1wiXSxbLjMxLFwiI2YyZTlkOFwiXSxbLjM5LFwiI2RjZTllOFwiXSxbLjUsXCIjYWNkNWQxXCJdLFsuNjMsXCIjN2NiZGIzXCJdLFsuNzksXCIjNDY5YjhjXCJdLFsxLFwiIzBmN2M2OVwiXV19fX0sXCJ3YXRlcndheS1sYWJlbFwiKSxlLm1hcC5hZGRMYXllcih7aWQ6XCJCRElfaW5mb3JtX2hlX3Byb2pfMzBcIix0eXBlOlwiZmlsbFwiLHNvdXJjZTpcIkJESV9pbmZvcm1cIixwYWludDp7XCJmaWxsLW9wYWNpdHlcIjowLFwiZmlsbC1vcGFjaXR5LXRyYW5zaXRpb25cIjp7ZHVyYXRpb246ODAwLGRlbGF5OjB9LFwiZmlsbC1vdXRsaW5lLWNvbG9yXCI6XCIjNTA1MDUwXCIsXCJmaWxsLWNvbG9yXCI6e3Byb3BlcnR5OlwicHJval9oYXphcmRfMjAzMFwiLHN0b3BzOltbMS40LFwiI2ZjZTZkOFwiXSxbMi42LFwiI2ZhY2RiMlwiXSxbNCxcIiNmOGI0OGJcIl0sWzYsXCIjZDk1ODBjXCJdLFsxMCxcIiM5MTNiMDhcIl1dfX19LFwid2F0ZXJ3YXktbGFiZWxcIiksZS5tYXAuYWRkTGF5ZXIoe2lkOlwiQkRJX2luZm9ybV9oZV9wcm9qXzUwXCIsdHlwZTpcImZpbGxcIixzb3VyY2U6XCJCRElfaW5mb3JtXCIscGFpbnQ6e1wiZmlsbC1vcGFjaXR5XCI6MCxcImZpbGwtb3BhY2l0eS10cmFuc2l0aW9uXCI6e2R1cmF0aW9uOjgwMCxkZWxheTowfSxcImZpbGwtb3V0bGluZS1jb2xvclwiOlwiIzUwNTA1MFwiLFwiZmlsbC1jb2xvclwiOntwcm9wZXJ0eTpcInByb2pfaGF6YXJkXzIwNTBcIixzdG9wczpbWzEuNCxcIiNmY2U2ZDhcIl0sWzIuNixcIiNmYWNkYjJcIl0sWzQsXCIjZjhiNDhiXCJdLFs2LFwiI2Q5NTgwY1wiXSxbMTAsXCIjOTEzYjA4XCJdXX19fSxcIndhdGVyd2F5LWxhYmVsXCIpfSkpLHRoaXMudG9vbHRpcENvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3ZhciBpPW5ldyBvLmRlZmF1bHQuTWFya2VyKHRoaXMudG9vbHRpcENvbnRhaW5lcix7b2Zmc2V0OlstMTEwLDBdfSkuc2V0TG5nTGF0KFswLDBdKS5hZGRUbyh0aGlzLm1hcCk7dGhpcy5tYXAub24oXCJtb3VzZW1vdmVcIiwoZnVuY3Rpb24odCl7dmFyIGE9ZS5wcm9wcyxsPWEuY2hhcHRlck5hbWUsbj1hLmxheWVyLHI9cy50b29sdGlwTGF5ZXJzW2xdLG89dm9pZCAwLGM9dm9pZCAwO2lmKHIubGVuZ3RoPjE/KG89cy50b29sdGlwQ29uZmlnW25dLGM9bik6KG89cy50b29sdGlwQ29uZmlnW3JbMF1dLGM9clswXSksdm9pZCAwIT09byl7dmFyIGQ9ZS5tYXAucXVlcnlSZW5kZXJlZEZlYXR1cmVzKHQucG9pbnQse2xheWVyczpbY119KTtpZihkLmxlbmd0aD4wKXZvaWQgMCE9PWRbMF0ucHJvcGVydGllcyYmKGUubWFwLmdldENhbnZhcygpLnN0eWxlLmN1cnNvcj1kLmxlbmd0aD9cImRlZmF1bHRcIjpcIlwiKTtpLnNldExuZ0xhdCh0LmxuZ0xhdCksZS5zZXRUb29sdGlwKGQsbyl9fSkpfX0se2tleTpcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGE9dGhpcy5wcm9wcyxsPWEuY2hhcHRlck5hbWUsaT1hLmRpc2FzdGVyVHlwZSxuPWEubGF5ZXIscj0oYS5zdG9wcyxhLmNsaW1hdGVZZWFyKSxvPWEubGF5ZXJWdWxuLGM9YS5sYXllckxPQ0MsZD1hLmxheWVySGUsdT1hLmxheWVySGUzMCxwPWEubGF5ZXJIZTUwLGY9YS5sYXllclJpc2s7aWYodGhpcy5tYXAuaXNTdHlsZUxvYWRlZCgpKXtpZihlLmNoYXB0ZXJOYW1lIT09bCl7dmFyIG09cy5jaGFwdGVyc1tlLmNoYXB0ZXJOYW1lXSxfPW0ucGFpbnQseT1tLmxheW91dCxoPW0ucG9zaXRpb247Xy5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgYT10Lm1hcC5nZXRMYXllcihlLmlkKTtpZih2b2lkIDAhPT1hKXt2YXIgbD1hLnR5cGU7dC5tYXAuc2V0UGFpbnRQcm9wZXJ0eShlLmlkLGwrXCItb3BhY2l0eVwiLGUub3BhY2l0eSl9fSkpLHkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC5tYXAuc2V0TGF5b3V0UHJvcGVydHkoZS5pZCxcInZpc2liaWxpdHlcIixlLnZpc2liaWxpdHkpfSkpLHRoaXMubWFwLmVhc2VUbyhoKX1pZihlLmRpc2FzdGVyVHlwZSYmZS5kaXNhc3RlclR5cGUhPT1pJiYoXCJhbGxcIiE9PWUuZGlzYXN0ZXJUeXBlPyh0aGlzLm1hcC5zZXRGaWx0ZXIoXCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNfaGVhdFwiLFtcIj09XCIsXCJtYWluX2hhemFyZFwiLGUuZGlzYXN0ZXJUeXBlXSksdGhpcy5tYXAuc2V0RmlsdGVyKFwiQkRJX2hpc3RvcmljYWxfZGlzYXN0ZXJzX3BvaW50XCIsW1wiPT1cIixcIm1haW5faGF6YXJkXCIsZS5kaXNhc3RlclR5cGVdKSk6KHRoaXMubWFwLnNldEZpbHRlcihcIkJESV9oaXN0b3JpY2FsX2Rpc2FzdGVyc19oZWF0XCIsdm9pZCAwKSx0aGlzLm1hcC5zZXRGaWx0ZXIoXCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNfcG9pbnRcIix2b2lkIDApKSksZS5sYXllciYmZS5sYXllciE9PW4pe3ZhciBiPXRoaXMubWFwLmdldExheWVyKG4pLGc9dGhpcy5tYXAuZ2V0TGF5ZXIoZS5sYXllcik7aWYodm9pZCAwIT09Yil7dmFyIEk9Yi50eXBlO3RoaXMubWFwLnNldFBhaW50UHJvcGVydHkobixJK1wiLW9wYWNpdHlcIiwwKX1pZih2b2lkIDAhPT1iKXt2YXIgRD1nLnR5cGU7dGhpcy5tYXAuc2V0UGFpbnRQcm9wZXJ0eShlLmxheWVyLEQrXCItb3BhY2l0eVwiLDEpfX1pZihlLmNsaW1hdGVZZWFyJiZlLmNsaW1hdGVZZWFyIT09cil7dmFyIHY9dGhpcy5tYXAuZ2V0UGFpbnRQcm9wZXJ0eShlLmxheWVyLFwiZmlsbC1jb2xvclwiKS5zdG9wczt0aGlzLm1hcC5zZXRQYWludFByb3BlcnR5KGUubGF5ZXIsXCJmaWxsLWNvbG9yXCIse3Byb3BlcnR5OmUuY2xpbWF0ZVllYXIsc3RvcHM6dn0pfWUubGF5ZXJWdWxuJiZlLmxheWVyVnVsbiE9PW8mJnRoaXMubWFwLnNldFBhaW50UHJvcGVydHkoXCJCRElfaW5mb3JtX3Z1bG5cIixcImZpbGwtY29sb3JcIix7cHJvcGVydHk6ZS5sYXllclZ1bG4sc3RvcHM6cy52dWxuZXJhYmlsaXR5U3RvcHN9KSxlLmxheWVyTE9DQyYmZS5sYXllckxPQ0MhPT1jJiZ0aGlzLm1hcC5zZXRQYWludFByb3BlcnR5KFwiQkRJX2luZm9ybV9sYWNrXCIsXCJmaWxsLWNvbG9yXCIse3Byb3BlcnR5OmUubGF5ZXJMT0NDLHN0b3BzOnMubG9jY1N0b3BzfSksZS5sYXllckhlJiZlLmxheWVySGUhPT1kJiZ0aGlzLm1hcC5zZXRQYWludFByb3BlcnR5KFwiQkRJX2luZm9ybV9oZVwiLFwiZmlsbC1jb2xvclwiLHtwcm9wZXJ0eTplLmxheWVySGUsc3RvcHM6cy5oZVN0b3BzfSksZS5sYXllckhlMzAmJmUubGF5ZXJIZTMwIT09dSYmdGhpcy5tYXAuc2V0UGFpbnRQcm9wZXJ0eShcIkJESV9pbmZvcm1faGVfcHJval8zMFwiLFwiZmlsbC1jb2xvclwiLHtwcm9wZXJ0eTplLmxheWVySGUzMCxzdG9wczpzLmhlU3RvcHN9KSxlLmxheWVySGU1MCYmZS5sYXllckhlNTAhPT1wJiZ0aGlzLm1hcC5zZXRQYWludFByb3BlcnR5KFwiQkRJX2luZm9ybV9oZV9wcm9qXzUwXCIsXCJmaWxsLWNvbG9yXCIse3Byb3BlcnR5OmUubGF5ZXJIZTUwLHN0b3BzOnMuaGVTdG9wc30pLGUubGF5ZXJSaXNrJiZlLmxheWVyUmlzayE9PWYmJnRoaXMubWFwLnNldFBhaW50UHJvcGVydHkoXCJCRElfaW5mb3JtX3Jpc2tcIixcImZpbGwtY29sb3JcIix7cHJvcGVydHk6ZS5sYXllclJpc2ssc3RvcHM6cy5yaXNrU3RvcHN9KX19fSx7a2V5OlwiY29tcG9uZW50V2lsbFVubW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMubWFwLnJlbW92ZSgpfX0se2tleTpcInNldFRvb2x0aXBcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2UubGVuZ3RoP24uZGVmYXVsdC5yZW5kZXIoaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoZC5kZWZhdWx0LHtmZWF0dXJlczplLHRvb2x0aXBPcHRpb25zOnR9KSx0aGlzLnRvb2x0aXBDb250YWluZXIpOm4uZGVmYXVsdC51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMudG9vbHRpcENvbnRhaW5lcil9fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy5wcm9wcyxhPXQuY2hhcHRlck5hbWUsbD10LmxheWVyO3JldHVybiBpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLG51bGwsaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6e3Bvc2l0aW9uOlwiZml4ZWRcIix3aWR0aDpcIjcwJVwiLGxlZnQ6XCIzMCVcIix0b3A6MCxib3R0b206MH0scmVmOmZ1bmN0aW9uKHQpe2UubWFwQ29udGFpbmVyPXR9fSksaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoYy5kZWZhdWx0LHtjaGFwdGVyTmFtZTphLGxheWVyOmx9KSl9fV0pLHR9KGkuZGVmYXVsdC5Db21wb25lbnQpO3QuZGVmYXVsdD1wLHAucHJvcFR5cGVzPXtjaGFwdGVyTmFtZTpyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsZGlzYXN0ZXJUeXBlOnIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxsYXllcjpyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsc3RvcHM6ci5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkfX0sMTQ0OmZ1bmN0aW9uKGUsdCxhKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbD1kKGEoMSkpLGk9ZChhKDMpKSxuPWEoMjIpLHI9ZChhKDM2KSksbz1kKGEoMjcpKSxjPWEoMjEpO2Z1bmN0aW9uIGQoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fXZhciBzPWZ1bmN0aW9uKGUpe3ZhciB0PWUuY2xhc3NlcyxhPWUuY2hhcHRlck5hbWUsaT1lLmxheWVyO2lmKHZvaWQgMD09PWMuY2hhcHRlckxheWVyc1thXSlyZXR1cm4gbnVsbDt2YXIgbj1jLmNoYXB0ZXJMYXllcnNbYV0sZD12b2lkIDA7cmV0dXJuKGQ9bi5sZW5ndGg+MT9jLmxlZ2VuZE9wdGlvbnNbaV06Yy5sZWdlbmRPcHRpb25zW25bMF1dKS5yYW5nZT9sLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse2NsYXNzTmFtZTp0LmNvbnRhaW5lcn0sbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoby5kZWZhdWx0LHt2YXJpYW50OlwiY2FwdGlvblwiLGNsYXNzTmFtZTp0LmxhYmVsU3R5bGV9LGQubmFtZSksbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLG51bGwsbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLHtjbGFzc05hbWU6XCJtaW5cIn0sbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoby5kZWZhdWx0LHt2YXJpYW50Olwib3ZlcmxpbmVcIn0sZC5yYW5nZSxkLm1pbikpLGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIix7Y2xhc3NOYW1lOlwibWF4XCJ9LGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG8uZGVmYXVsdCx7dmFyaWFudDpcIm92ZXJsaW5lXCJ9LGQubWF4LGQucmFuZ2UpKSxsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIse2NsYXNzTmFtZTpcImdyYXBoXCJ9LGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImNvbG9yc1wifSxsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp7d2lkdGg6XCIxMDAlXCIsYmFja2dyb3VuZDpcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgXCIrZC5jb2xvcnMuam9pbihcIixcIikrXCIpXCJ9fSkpKSkpOmQucmFuZ2U/dm9pZCAwOmwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7Y2xhc3NOYW1lOnQuY2F0ZWdvcnl9LGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG8uZGVmYXVsdCx7dmFyaWFudDpcImNhcHRpb25cIixjbGFzc05hbWU6dC5sYWJlbFN0eWxlfSxkLm5hbWUpLGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIixudWxsLGQuY29sb3JzLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtzdHlsZTp7YmFja2dyb3VuZENvbG9yOmUuY29sb3J9fSksbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoby5kZWZhdWx0LHtjbGFzc05hbWU6dC5jYXRlZ29yeWxhYmVsfSxlLmxhYmVsKSl9KSkpKX07cy5wcm9wVHlwZXM9e2NsYXNzZXM6aS5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLGNoYXB0ZXJOYW1lOmkuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxsYXllcjppLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWR9LHQuZGVmYXVsdD0oMCxuLndpdGhTdHlsZXMpKChmdW5jdGlvbihlKXtyZXR1cm57bGFiZWxTdHlsZTp7bWFyZ2luOlwiMCAwIDVweFwiLGNvbG9yOlwiIzY2NlwiLHRleHRBbGlnbjpcImxlZnRcIn0sY29udGFpbmVyOntwb3NpdGlvbjpcImZpeGVkXCIsYm90dG9tOjMqZS5zcGFjaW5nLnVuaXQsbGVmdDpcIjMwJVwiLG1hcmdpbkxlZnQ6MiplLnNwYWNpbmcudW5pdCxtYXJnaW5Cb3R0b206MiplLnNwYWNpbmcudW5pdCx6SW5kZXg6MTA1LHdpZHRoOlwiMjUwcHhcIixwYWRkaW5nTGVmdDoyKmUuc3BhY2luZy51bml0LHBhZGRpbmdSaWdodDoyKmUuc3BhY2luZy51bml0LHBhZGRpbmdUb3A6ZS5zcGFjaW5nLnVuaXQscGFkZGluZ0JvdHRvbTplLnNwYWNpbmcudW5pdCxcIiYgdWxcIjp7cGFkZGluZzowLG1hcmdpbjowLGxpc3RTdHlsZTpcIm5vbmVcIn0sXCImIHVsIGxpXCI6e3BhZGRpbmc6MCxtYXJnaW46MCxmb250U2l6ZTpcIjEwcHhcIixjb2xvcjpcIiM2NjZcIixmb250V2VpZ2h0OjcwMCx0ZXh0VHJhbnNmb3JtOlwidXBwZXJjYXNlXCIsbGluZUhlaWdodDpcIm5vcm1hbFwifSxcIiYgbGkuZ3JhcGhcIjp7Y2xlYXI6XCJib3RoXCIsb3ZlcmZsb3c6XCJoaWRkZW5cIixkaXNwbGF5OlwidGFibGVcIix3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxOHB4XCIsYm9yZGVyUmFkaXVzOlwiM3B4XCIsYm9yZGVyOlwiMXB4IHNvbGlkICNiM2IzYjNcIixcIiYgLmNvbG9yc1wiOntkaXNwbGF5OlwidGFibGUtcm93XCJ9LFwiJiBkaXZcIjp7aGVpZ2h0OlwiMThweFwifSxcIiYgLnF1YXJ0aWxlXCI6e2Rpc3BsYXk6XCJ0YWJsZS1jZWxsXCJ9fSxcIiYgbGkubWluXCI6e2Zsb2F0OlwibGVmdFwifSxcIiYgbGkubWF4XCI6e2Zsb2F0OlwicmlnaHRcIn19LGNhdGVnb3J5Ontwb3NpdGlvbjpcImZpeGVkXCIsYm90dG9tOjMqZS5zcGFjaW5nLnVuaXQsbGVmdDpcIjMwJVwiLG1hcmdpbkxlZnQ6MiplLnNwYWNpbmcudW5pdCxtYXJnaW5Cb3R0b206MiplLnNwYWNpbmcudW5pdCx6SW5kZXg6MTA1LHBhZGRpbmdMZWZ0OjIqZS5zcGFjaW5nLnVuaXQscGFkZGluZ1JpZ2h0OjIqZS5zcGFjaW5nLnVuaXQscGFkZGluZ1RvcDplLnNwYWNpbmcudW5pdCxwYWRkaW5nQm90dG9tOmUuc3BhY2luZy51bml0LFwiJiB1bFwiOntwYWRkaW5nOjAsbWFyZ2luOjAsbGlzdFN0eWxlOlwibm9uZVwifSxcIiYgdWwgbGlcIjp7cGFkZGluZzowLG1hcmdpbjowLGZvbnRTaXplOlwiMTBweFwiLGNvbG9yOlwiIzY2NlwiLGZvbnRXZWlnaHQ6NzAwLGxpbmVIZWlnaHQ6XCJub3JtYWxcIn0sXCImIGxpIHNwYW5cIjp7d2lkdGg6XCIxOHB4XCIsaGVpZ2h0OlwiMThweFwiLGJvcmRlclJhZGl1czpcIjNweFwiLGJvcmRlcjpcIjFweCBzb2xpZCAjYjNiM2IzXCIsZGlzcGxheTpcImlubGluZS1ibG9ja1wifX0sY2F0ZWdvcnlsYWJlbDp7ZGlzcGxheTpcImlubGluZS1ibG9ja1wiLHZlcnRpY2FsQWxpZ246XCJ0b3BcIixsaW5lSGVpZ2h0OlwiMjJweFwiLHBhZGRpbmdMZWZ0OlwiMTBweFwifX19KSkocyl9LDE0NjpmdW5jdGlvbihlLHQsYSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGw9byhhKDEpKSxpPW8oYSgzKSksbj1hKDIyKSxyPW8oYSgzNikpO2EoMjEpO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fXZhciBjPWZ1bmN0aW9uKGUpe3ZhciB0PWUuY2xhc3NlcyxhPWUuZmVhdHVyZXMsaT1lLnRvb2x0aXBPcHRpb25zLG49YVswXS5wcm9wZXJ0aWVzO3JldHVybiBsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLmRlZmF1bHQse2NsYXNzTmFtZTp0LnRvb2x0aXB9LGkuZmVhdHVyZXMubWFwKChmdW5jdGlvbihlKXtzd2l0Y2goZS50eXBlKXtjYXNlXCJ0aXRsZVwiOnJldHVybiBsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dC5pdGVtfSxsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOnQudGl0bGV9LG5bZS52YWx1ZV0pKTtjYXNlXCJpbmxpbmVcIjpyZXR1cm4gbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnQuaXRlbX0sbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTp0LnN1YnRpdGxlfSxuW2UudmFsdWVdLFwiIFwiLGUubGFiZWwpKTtkZWZhdWx0OnJldHVybiBsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dC5pdGVtfSxsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dC5jYXB0aW9ufSxlLmxhYmVsKSxsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dC5zdWJ0aXRsZX0sbltlLnZhbHVlXSkpfX0pKSl9O2MucHJvcFR5cGVzPXtjbGFzc2VzOmkuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxmZWF0dXJlczppLmRlZmF1bHQuYXJyYXkuaXNSZXF1aXJlZCx0b29sdGlwT3B0aW9uczppLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWR9LHQuZGVmYXVsdD0oMCxuLndpdGhTdHlsZXMpKChmdW5jdGlvbihlKXtyZXR1cm57dG9vbHRpcDp7cGFkZGluZ0xlZnQ6MiplLnNwYWNpbmcudW5pdCxwYWRkaW5nUmlnaHQ6MiplLnNwYWNpbmcudW5pdCxwYWRkaW5nVG9wOmUuc3BhY2luZy51bml0LGJhY2tncm91bmRDb2xvcjpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVwifSxjYXB0aW9uOntmb250RmFtaWx5OltcIk9wZW4gU2FucyBDb25kZW5zZWRcIixcInNhbnMtc2VyaWZcIl0uam9pbihcIixcIiksZm9udFdlaWdodDo3MDAsZm9udFNpemU6MTIsdGV4dFRyYW5zZm9ybTpcInVwcGVyY2FzZVwiLGNvbG9yOlwiIzY2NlwifSxzdWJ0aXRsZTp7Zm9udEZhbWlseTpbXCJSdWJpa1wiLFwiQXJpYWxcIixcInNhbnMtc2VyaWZcIl0uam9pbihcIixcIiksZm9udFNpemU6MTQsY29sb3I6XCIjMDAwXCJ9LGl0ZW06e3BhZGRpbmdCb3R0b206ZS5zcGFjaW5nLnVuaXR9LHRpdGxlOntmb250RmFtaWx5OltcIk9wZW4gU2FucyBDb25kZW5zZWRcIixcInNhbnMtc2VyaWZcIl0uam9pbihcIixcIiksZm9udFNpemU6MTYsZm9udFdlaWdodDo3MDAsY29sb3I6XCIjMzMzXCJ9fX0pKShjKX0sMTQ3OmZ1bmN0aW9uKGUsdCxhKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbD1tKGEoMSkpLGk9bShhKDMpKSxuPWEoMjIpLHI9bShhKDM2KSksbz1tKGEoMTQ4KSksYz1tKGEoMTgwKSksZD1tKGEoMTg0KSkscz1tKGEoMTg2KSksdT1tKGEoMTkwKSkscD1tKGEoMjcpKSxmPWEoMjEpO2Z1bmN0aW9uIG0oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fXZhciBfPWZ1bmN0aW9uKGUpe3ZhciB0PWUuY2xhc3NlcyxhPWUuY2hhcHRlck5hbWU7aWYodm9pZCAwPT09Zi5maWx0ZXJzW2FdKXJldHVybiBudWxsO3ZhciBpPWYuZmlsdGVyc1thXTtyZXR1cm4gbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnQuc3dpdGNofSxpLm1hcCgoZnVuY3Rpb24oYSl7cmV0dXJuIGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHIuZGVmYXVsdCx7Y2xhc3NOYW1lOnQucGFwZXJ9LGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHMuZGVmYXVsdCx7Y29tcG9uZW50OlwiZmllbGRzZXRcIn0sbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodS5kZWZhdWx0LHtjb21wb25lbnQ6XCJsZWdlbmRcIixjbGFzc05hbWU6dC5sZWdlbmR9LGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHAuZGVmYXVsdCx7dmFyaWFudDpcImNhcHRpb25cIn0sYS5sYWJlbCkpLGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGMuZGVmYXVsdCx7XCJhcmlhLWxhYmVsXCI6YS5sYWJlbCxuYW1lOmEudmFsdWUsdmFsdWU6ZVthLnZhbHVlXSxvbkNoYW5nZTplW2Eub25DaGFuZ2VdfSxhLmhhc0FsbCYmbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoZC5kZWZhdWx0LHt2YWx1ZTpcImFsbFwiLHN0eWxlOntoZWlnaHQ6MzZ9LGNvbnRyb2w6bC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoby5kZWZhdWx0LG51bGwpLGxhYmVsOlwiQWxsXCJ9KSxhLm9wdGlvbnMubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoZC5kZWZhdWx0LHt2YWx1ZTplLnZhbHVlLHN0eWxlOntoZWlnaHQ6MzJ9LGNvbnRyb2w6bC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoby5kZWZhdWx0LG51bGwpLGxhYmVsOmUubGFiZWx9KX0pKSkpKX0pKSl9O18ucHJvcFR5cGVzPXtjbGFzc2VzOmkuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxjaGFwdGVyTmFtZTppLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWR9LHQuZGVmYXVsdD0oMCxuLndpdGhTdHlsZXMpKChmdW5jdGlvbihlKXtyZXR1cm57c3dpdGNoOntwb3NpdGlvbjpcImZpeGVkXCIsYm90dG9tOjMqZS5zcGFjaW5nLnVuaXQscmlnaHQ6MiplLnNwYWNpbmcudW5pdCx6SW5kZXg6XCIxMDBcIn0scGFwZXI6e3BhZGRpbmdUb3A6ZS5zcGFjaW5nLnVuaXQscGFkZGluZ0JvdHRvbTowLHBhZGRpbmdMZWZ0OjIqZS5zcGFjaW5nLnVuaXQscGFkZGluZ1JpZ2h0OjIqZS5zcGFjaW5nLnVuaXQsbWFyZ2luQm90dG9tOjIqZS5zcGFjaW5nLnVuaXR9LGxlZ2VuZDp7dGV4dFRyYW5zZm9ybTpcInVwcGVyY2FzZVwiLHRleHRBbGlnbjpcImNlbnRlclwiLGZvbnRXZWlnaHQ6NzAwLGZvbnRTaXplOjEyfX19KSkoXyl9LDE5NjpmdW5jdGlvbihlLHQsYSl7dmFyIGw9YSgxOTcpO1wic3RyaW5nXCI9PXR5cGVvZiBsJiYobD1bW2UuaSxsLFwiXCJdXSk7dmFyIGk9e2htcjohMCx0cmFuc2Zvcm06dm9pZCAwLGluc2VydEludG86dm9pZCAwfTthKDY1KShsLGkpO2wubG9jYWxzJiYoZS5leHBvcnRzPWwubG9jYWxzKX0sMTk3OmZ1bmN0aW9uKGUsdCxhKXsoZS5leHBvcnRzPWEoNjQpKCExKSkucHVzaChbZS5pLFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbn1cXG5cXG4jZmVhdHVyZXMge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbi1yaWdodDogNzAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbn1cXG5zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbWluLWhlaWdodDogOTB2aDtcXG59XFxuc2VjdGlvbi5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuc2VjdGlvbjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogb2xpdmVkcmFiO1xcbn1cXG5cXG4uZmlnLWNhcHRpb24ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubWFwTGVnZW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMjVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICB6LWluZGV4OiAxMDU7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG59XFxuLm1hcExlZ2VuZCB1bCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1hcExlZ2VuZCB1bCBsaSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgY29sb3I6ICM2NjY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5tYXBMZWdlbmQgbGkuZ3JhcGgge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2IzYjM7XFxufVxcblxcbi5tYXBMZWdlbmQgbGkuZ3JhcGggLmNvbG9ycyB7XFxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcblxcbi5tYXBMZWdlbmQgbGkuZ3JhcGggZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4ubWFwTGVnZW5kIGxpLmdyYXBoIC5xdWFydGlsZSB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbn1cXG5cXG4ubWFwTGVnZW5kIGxpLm1pbiB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbjogMCAwIDVweDtcXG59XFxuXFxuLm1hcExlZ2VuZCBsaS5tYXgge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgbWFyZ2luOiAwIDAgNXB4O1xcbn1cXG5cXG4uZmlndXJlIHtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47IFxcbiAgbWFyZ2luOiAwcHg7XFxuICB3aWR0aDogMTAwJTsgXFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgY29sb3I6IHRvbWF0bztcXG59XCIsXCJcIl0pfSwyMTpmdW5jdGlvbihlLHQsYSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGw9WzI5LjkxMzYzNSwtMy4zODQxNDZdLGk9e2NsaW1hdGVfY3VycmVudDp7cGFpbnQ6W3tpZDpcIkJESV9jbGltYXRlX2NkZFwiLG9wYWNpdHk6MX0se2lkOlwiQkRJX2NsaW1hdGVfcHJjcHRvdFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcng1XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV90eHhcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX2NkZF9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9wcmNwdG90X3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3J4NV9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV90eHhfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2hpc3RvcmljYWxfZGlzYXN0ZXJzX2hlYXRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9oaXN0b3JpY2FsX2Rpc2FzdGVyc19wb2ludFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX21pZ3JhdGlvblwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NvbmZsaWN0X1VDRFBfcG9sXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY29uZmxpY3RfdHJlbmRzXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2xhY2tcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1fdnVsblwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9oZVwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9yaXNrXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfZXJvc2lvblwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX25ic1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9oZV9wcm9qXzMwXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2hlX3Byb2pfNTBcIixvcGFjaXR5OjB9XSxsYXlvdXQ6W10scG9zaXRpb246e3BpdGNoOjAsYmVhcmluZzowLHpvb206Ny44LGNlbnRlcjpsLGR1cmF0aW9uOjgwMH19LGhvdHNwb3RzOntwYWludDpbe2lkOlwiQkRJX2NsaW1hdGVfY2RkXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9wcmNwdG90XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9yeDVcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3R4eFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9yaXNrXCIsb3BhY2l0eToxfSx7aWQ6XCJCRElfY2xpbWF0ZV9jZGRfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcHJjcHRvdF9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9yeDVfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfdHh4X3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9oaXN0b3JpY2FsX2Rpc2FzdGVyc19oZWF0XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNfcG9pbnRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9taWdyYXRpb25cIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jb25mbGljdF9VQ0RQX3BvbFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NvbmZsaWN0X3RyZW5kc1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV92dWxuXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2xhY2tcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1faGVcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9lcm9zaW9uXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfbmJzXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2hlX3Byb2pfMzBcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1faGVfcHJval81MFwiLG9wYWNpdHk6MH1dLGxheW91dDpbXSxwb3NpdGlvbjp7Y2VudGVyOmwsem9vbTo3LjgsYmVhcmluZzowLHBpdGNoOjAsZHVyYXRpb246ODAwfX0sY2xpbWF0ZV9wcm9qZWN0aW9uczp7cGFpbnQ6W3tpZDpcIkJESV9jbGltYXRlX2NkZFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcHJjcHRvdFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcng1XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV90eHhcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX2NkZF9wcm9qXCIsb3BhY2l0eToxfSx7aWQ6XCJCRElfY2xpbWF0ZV9wcmNwdG90X3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3J4NV9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV90eHhfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2hpc3RvcmljYWxfZGlzYXN0ZXJzX2hlYXRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9oaXN0b3JpY2FsX2Rpc2FzdGVyc19wb2ludFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX21pZ3JhdGlvblwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NvbmZsaWN0X1VDRFBfcG9sXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY29uZmxpY3RfdHJlbmRzXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2xhY2tcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1fdnVsblwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9oZVwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9yaXNrXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfZXJvc2lvblwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX25ic1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9oZV9wcm9qXzMwXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2hlX3Byb2pfNTBcIixvcGFjaXR5OjB9XSxsYXlvdXQ6W10scG9zaXRpb246e3BpdGNoOjAsYmVhcmluZzowLHpvb206Ny44LGNlbnRlcjpsLGR1cmF0aW9uOjgwMH19LGRpc2FzdGVyczp7cGFpbnQ6W3tpZDpcIkJESV9jbGltYXRlX2NkZFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcHJjcHRvdFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcng1XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV90eHhcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX2NkZF9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9wcmNwdG90X3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3J4NV9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV90eHhfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2hpc3RvcmljYWxfZGlzYXN0ZXJzX2hlYXRcIixvcGFjaXR5OntzdG9wczpbWzguNSwxXSxbOSwwXV19fSx7aWQ6XCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNfcG9pbnRcIixvcGFjaXR5OntzdG9wczpbWzguNSwwXSxbOSwxXV19fSx7aWQ6XCJCRElfbWlncmF0aW9uXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY29uZmxpY3RfVUNEUF9wb2xcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jb25mbGljdF90cmVuZHNcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1fbGFja1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV92dWxuXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2hlXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX3Jpc2tcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9lcm9zaW9uXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfbmJzXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2hlX3Byb2pfMzBcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1faGVfcHJval81MFwiLG9wYWNpdHk6MH1dLGxheW91dDpbXSxwb3NpdGlvbjp7cGl0Y2g6MCxiZWFyaW5nOjAsem9vbTo3LjgsY2VudGVyOmwsZHVyYXRpb246ODAwfX0sbWlncmF0aW9uOntwYWludDpbe2lkOlwiQkRJX2NsaW1hdGVfY2RkXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9wcmNwdG90XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9yeDVcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3R4eFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfY2RkX3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3ByY3B0b3RfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcng1X3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3R4eF9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNfaGVhdFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2hpc3RvcmljYWxfZGlzYXN0ZXJzX3BvaW50XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfbWlncmF0aW9uXCIsb3BhY2l0eToxfSx7aWQ6XCJCRElfY29uZmxpY3RfVUNEUF9wb2xcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jb25mbGljdF90cmVuZHNcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1fbGFja1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV92dWxuXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2hlXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX3Jpc2tcIixvcGFjaXR5OjB9XSxsYXlvdXQ6W10scG9zaXRpb246e3BpdGNoOjAsYmVhcmluZzowLG1heFpvb206MTEsY2VudGVyOmwsZHVyYXRpb246ODAwfX0sY29uZmxpY3Q6e3BhaW50Olt7aWQ6XCJCRElfY2xpbWF0ZV9jZGRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3ByY3B0b3RcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3J4NVwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfdHh4XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9jZGRfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcHJjcHRvdF9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9yeDVfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfdHh4X3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9oaXN0b3JpY2FsX2Rpc2FzdGVyc19oZWF0XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNfcG9pbnRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9taWdyYXRpb25cIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jb25mbGljdF9VQ0RQX3BvbFwiLG9wYWNpdHk6MX0se2lkOlwiQkRJX2NvbmZsaWN0X3RyZW5kc1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9sYWNrXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX3Z1bG5cIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1faGVcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1fcmlza1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2Vyb3Npb25cIixvcGFjaXR5OjB9LHtpZDpcIkJESV9uYnNcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1faGVfcHJval8zMFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9oZV9wcm9qXzUwXCIsb3BhY2l0eTowfV0sbGF5b3V0OltdLHBvc2l0aW9uOntjZW50ZXI6bCx6b29tOjcuOCxiZWFyaW5nOjAscGl0Y2g6MCxkdXJhdGlvbjo4MDB9fSx2dWxuZXJhYmlsaXR5OntwYWludDpbe2lkOlwiQkRJX2NsaW1hdGVfY2RkXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9wcmNwdG90XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9yeDVcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3R4eFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfY2RkX3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3ByY3B0b3RfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcng1X3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3R4eF9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNfaGVhdFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2hpc3RvcmljYWxfZGlzYXN0ZXJzX3BvaW50XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfbWlncmF0aW9uXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY29uZmxpY3RfVUNEUF9wb2xcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jb25mbGljdF90cmVuZHNcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1fdnVsblwiLG9wYWNpdHk6MX0se2lkOlwiQkRJX2luZm9ybV9sYWNrXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2hlXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX3Jpc2tcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9lcm9zaW9uXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfbmJzXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2hlX3Byb2pfMzBcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1faGVfcHJval81MFwiLG9wYWNpdHk6MH1dLGxheW91dDpbXSxwb3NpdGlvbjp7Y2VudGVyOmwsem9vbTo3LjgsYmVhcmluZzowLHBpdGNoOjAsZHVyYXRpb246ODAwfX0sbGFja19vZl9jb3BpbmdfY2FwYWNpdHk6e3BhaW50Olt7aWQ6XCJCRElfY2xpbWF0ZV9jZGRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3ByY3B0b3RcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3J4NVwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfdHh4XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9jZGRfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcHJjcHRvdF9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9yeDVfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfdHh4X3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9oaXN0b3JpY2FsX2Rpc2FzdGVyc19oZWF0XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNfcG9pbnRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9taWdyYXRpb25cIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jb25mbGljdF9VQ0RQX3BvbFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NvbmZsaWN0X3RyZW5kc1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV92dWxuXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2xhY2tcIixvcGFjaXR5OjF9LHtpZDpcIkJESV9pbmZvcm1faGVcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1fcmlza1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2Vyb3Npb25cIixvcGFjaXR5OjB9LHtpZDpcIkJESV9uYnNcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1faGVfcHJval8zMFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9oZV9wcm9qXzUwXCIsb3BhY2l0eTowfV0sbGF5b3V0OltdLHBvc2l0aW9uOntjZW50ZXI6bCx6b29tOjcuOCxiZWFyaW5nOjAscGl0Y2g6MCxkdXJhdGlvbjo4MDB9fSxoYXphcmRfZXhwb3N1cmU6e3BhaW50Olt7aWQ6XCJCRElfY2xpbWF0ZV9jZGRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3ByY3B0b3RcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3J4NVwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfdHh4XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9jZGRfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcHJjcHRvdF9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9yeDVfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfdHh4X3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9oaXN0b3JpY2FsX2Rpc2FzdGVyc19oZWF0XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNfcG9pbnRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9taWdyYXRpb25cIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jb25mbGljdF9VQ0RQX3BvbFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NvbmZsaWN0X3RyZW5kc1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV92dWxuXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2xhY2tcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1faGVcIixvcGFjaXR5OjF9LHtpZDpcIkJESV9pbmZvcm1fcmlza1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2Vyb3Npb25cIixvcGFjaXR5OjB9LHtpZDpcIkJESV9uYnNcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1faGVfcHJval8zMFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9oZV9wcm9qXzUwXCIsb3BhY2l0eTowfV0sbGF5b3V0OltdLHBvc2l0aW9uOntjZW50ZXI6bCx6b29tOjcuOCxiZWFyaW5nOjAscGl0Y2g6MCxkdXJhdGlvbjo4MDB9fSxsYW5kX2Vyb3Npb246e3BhaW50Olt7aWQ6XCJCRElfY2xpbWF0ZV9jZGRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3ByY3B0b3RcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3J4NVwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfdHh4XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9jZGRfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcHJjcHRvdF9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9yeDVfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfdHh4X3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9oaXN0b3JpY2FsX2Rpc2FzdGVyc19oZWF0XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNfcG9pbnRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9taWdyYXRpb25cIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jb25mbGljdF9VQ0RQX3BvbFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NvbmZsaWN0X3RyZW5kc1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV92dWxuXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2xhY2tcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1faGVcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1fcmlza1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2Vyb3Npb25cIixvcGFjaXR5OjF9LHtpZDpcIkJESV9uYnNcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1faGVfcHJval8zMFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9oZV9wcm9qXzUwXCIsb3BhY2l0eTowfV0sbGF5b3V0OltdLHBvc2l0aW9uOntjZW50ZXI6bCx6b29tOjcuOCxiZWFyaW5nOjAscGl0Y2g6MCxkdXJhdGlvbjo4MDB9fSxuYnM6e3BhaW50Olt7aWQ6XCJCRElfY2xpbWF0ZV9jZGRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3ByY3B0b3RcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3J4NVwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfdHh4XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9jZGRfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcHJjcHRvdF9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9yeDVfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfdHh4X3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9oaXN0b3JpY2FsX2Rpc2FzdGVyc19oZWF0XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNfcG9pbnRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9taWdyYXRpb25cIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jb25mbGljdF9VQ0RQX3BvbFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NvbmZsaWN0X3RyZW5kc1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV92dWxuXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2xhY2tcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1faGVcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1fcmlza1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2Vyb3Npb25cIixvcGFjaXR5OjB9LHtpZDpcIkJESV9uYnNcIixvcGFjaXR5OjF9LHtpZDpcIkJESV9pbmZvcm1faGVfcHJval8zMFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9oZV9wcm9qXzUwXCIsb3BhY2l0eTowfV0sbGF5b3V0OltdLHBvc2l0aW9uOntjZW50ZXI6bCx6b29tOjcuOCxiZWFyaW5nOjAscGl0Y2g6MCxkdXJhdGlvbjo4MDB9fSxoYXphcmRfcHJvamVjdGlvbnNfMjAzMDp7cGFpbnQ6W3tpZDpcIkJESV9jbGltYXRlX2NkZFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcHJjcHRvdFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcng1XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV90eHhcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX2NkZF9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9wcmNwdG90X3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3J4NV9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV90eHhfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2hpc3RvcmljYWxfZGlzYXN0ZXJzX2hlYXRcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9oaXN0b3JpY2FsX2Rpc2FzdGVyc19wb2ludFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX21pZ3JhdGlvblwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NvbmZsaWN0X1VDRFBfcG9sXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY29uZmxpY3RfdHJlbmRzXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX3Z1bG5cIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1fbGFja1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9oZVwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9yaXNrXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfZXJvc2lvblwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX25ic1wiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9oZV9wcm9qXzMwXCIsb3BhY2l0eToxfSx7aWQ6XCJCRElfaW5mb3JtX2hlX3Byb2pfNTBcIixvcGFjaXR5OjB9XSxsYXlvdXQ6W10scG9zaXRpb246e2NlbnRlcjpsLHpvb206Ny44LGJlYXJpbmc6MCxwaXRjaDowLGR1cmF0aW9uOjgwMH19LGhhemFyZF9wcm9qZWN0aW9uc18yMDUwOntwYWludDpbe2lkOlwiQkRJX2NsaW1hdGVfY2RkXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9wcmNwdG90XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY2xpbWF0ZV9yeDVcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3R4eFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfY2RkX3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3ByY3B0b3RfcHJvalwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2NsaW1hdGVfcng1X3Byb2pcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jbGltYXRlX3R4eF9wcm9qXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaGlzdG9yaWNhbF9kaXNhc3RlcnNfaGVhdFwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2hpc3RvcmljYWxfZGlzYXN0ZXJzX3BvaW50XCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfbWlncmF0aW9uXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfY29uZmxpY3RfVUNEUF9wb2xcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9jb25mbGljdF90cmVuZHNcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1fdnVsblwiLG9wYWNpdHk6MH0se2lkOlwiQkRJX2luZm9ybV9sYWNrXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2hlXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX3Jpc2tcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9lcm9zaW9uXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfbmJzXCIsb3BhY2l0eTowfSx7aWQ6XCJCRElfaW5mb3JtX2hlX3Byb2pfMzBcIixvcGFjaXR5OjB9LHtpZDpcIkJESV9pbmZvcm1faGVfcHJval81MFwiLG9wYWNpdHk6MX1dLGxheW91dDpbXSxwb3NpdGlvbjp7Y2VudGVyOmwsem9vbTo3LjgsYmVhcmluZzowLHBpdGNoOjAsZHVyYXRpb246ODAwfX19O3QuY2hhcHRlcnM9aSx0LmZpbHRlcnM9e2NsaW1hdGVfY3VycmVudDpbe2hhc0FsbDohMSx2YWx1ZTpcImxheWVyXCIsbGFiZWw6XCJMYXllcnNcIixvbkNoYW5nZTpcInVwZGF0ZUxheWVyXCIsb3B0aW9uczpbe2xhYmVsOlwiQ0REXCIsdmFsdWU6XCJCRElfY2xpbWF0ZV9jZGRcIixzdG9wczpbWzQ2LjIsXCIjMDgxZDU4XCJdLFs1OC40LFwiIzIyNWVhOFwiXSxbNzAuNixcIiM0MWI2YzRcIl0sWzgyLjgsXCIjYzdlOWI0XCJdLFs5NixcIiNmZmZmZDlcIl1dfSx7bGFiZWw6XCJQUkNQVE9UXCIsdmFsdWU6XCJCRElfY2xpbWF0ZV9wcmNwdG90XCIsc3RvcHM6W1s3NTAsXCIjZmZmZmQ5XCJdLFsxZTMsXCIjYzdlOWI0XCJdLFsxMjUwLFwiIzQxYjZjNFwiXSxbMTUwMCxcIiMyMjVlYThcIl0sWzJlMyxcIiMwODFkNThcIl1dfSx7bGFiZWw6XCJSWDVkYXlcIix2YWx1ZTpcIkJESV9jbGltYXRlX3J4NVwiLHN0b3BzOltbNjUsXCIjZmZmZmQ5XCJdLFs4MCxcIiNjN2U5YjRcIl0sWzk1LFwiIzQxYjZjNFwiXSxbMTEwLFwiIzIyNWVhOFwiXSxbMTI1LFwiIzA4MWQ1OFwiXV19LHtsYWJlbDpcIlRYeFwiLHZhbHVlOlwiQkRJX2NsaW1hdGVfdHh4XCIsc3RvcHM6W1szMi4yLFwiI2RkZGNkY1wiXSxbMzMuNCxcIiNmM2M4YjJcIl0sWzM0LjYsXCIjZjZhNTg2XCJdLFszNS44LFwiI2U3NzQ1YlwiXSxbMzcsXCIjYzgzODM2XCJdXX1dfV0saG90c3BvdHM6W3toYXNBbGw6ITEsdmFsdWU6XCJsYXllclwiLGxhYmVsOlwiRmluYWwgaW5mb3JtIHJpc2tcIixvbkNoYW5nZTpcInVwZGF0ZUxheWVyXCIsb3B0aW9uczpbe2xhYmVsOlwiSU5GT1JNIHJpc2tcIix2YWx1ZTpcIkJESV9pbmZvcm1fcmlza1wiLHN0b3BzOltbMS45LFwiI2ZlYzhjMFwiXSxbMy40LFwiI2ZlOTE4MVwiXSxbNC45LFwiI2ZlNWI0MlwiXSxbNi40LFwiIzkxMTMwMFwiXSxbMTAsXCIjNjEwZDAwXCJdXX0se2xhYmVsOlwiSGF6YXJkIEV4cG9zdXJlXCIsdmFsdWU6XCJCRElfaW5mb3JtX2hlXCIsc3RvcHM6W1sxLjQsXCIjZmNlNmQ4XCJdLFsyLjYsXCIjZmFjZGIyXCJdLFs0LFwiI2Y4YjQ4YlwiXSxbNixcIiNkOTU4MGNcIl0sWzEwLFwiIzkxM2IwOFwiXV19LHtsYWJlbDpcIlZ1bG5lcmFiaWxpdHlcIix2YWx1ZTpcIkJESV9pbmZvcm1fdnVsblwiLHN0b3BzOltbMS45LFwiI2NjZDllZFwiXSxbMy4yLFwiIzk5YjNkY1wiXSxbNC43LFwiIzY2OGVjYlwiXSxbNi4zLFwiIzIwMzg1ZVwiXSxbMTAsXCIjMTUyNjNmXCJdXX0se2xhYmVsOlwiTGFjayBvZiBDb3BpbmcgQ2FwYWNpdHlcIix2YWx1ZTpcIkJESV9pbmZvcm1fbGFja1wiLHN0b3BzOltbMy4xLFwiI2UxZTlkN1wiXSxbNC42LFwiI2M0ZDNiMFwiXSxbNS45LFwiI2E3YmQ4OVwiXSxbNy4zLFwiIzRmNjIzNlwiXSxbMTAsXCIjMzU0MTI0XCJdXX1dfV0sY2xpbWF0ZV9wcm9qZWN0aW9uczpbe2hhc0FsbDohMSx2YWx1ZTpcImxheWVyXCIsbGFiZWw6XCJMYXllcnNcIixvbkNoYW5nZTpcInVwZGF0ZUxheWVyXCIsb3B0aW9uczpbe2xhYmVsOlwiQ0REIGNoYW5nZSBSQ1A0NVwiLHZhbHVlOlwiQkRJX2NsaW1hdGVfY2RkX3Byb2pcIixzdG9wczpbWy0yMCxcIiMwMTU2NGRcIl0sWy0xNSxcIiMyZjkxODlcIl0sWy0xMCxcIiM4YWQxYzZcIl0sWy01LFwiI2Q5ZWVlYlwiXSxbMCxcIiNmNmVkZDVcIl0sWzUsXCIjZTFjNjg0XCJdLFsxMCxcIiNiNzc5MjhcIl0sWzE1LFwiIzc1NDMwOFwiXSxbMjAsXCIjNTQzMDA1XCJdXX0se2xhYmVsOlwiUFJDUFRPVCBjaGFuZ2UgUkNQNDVcIix2YWx1ZTpcIkJESV9jbGltYXRlX3ByY3B0b3RfcHJvalwiLHN0b3BzOltbLTIwLFwiIzc3NDUwOFwiXSxbLTE1LFwiI2I5N2IyOVwiXSxbLTEwLFwiI2UyYzc4N1wiXSxbLTUsXCIjZjZlZGQ3XCJdLFswLFwiI2Q3ZWVlYlwiXSxbNSxcIiM4N2QwYzVcIl0sWzEwLFwiIzJkOGY4N1wiXSxbMTUsXCIjMDE1NjRkXCJdXX0se2xhYmVsOlwiUlg1ZGF5IGNoYW5nZSBSQ1A0NVwiLHZhbHVlOlwiQkRJX2NsaW1hdGVfcng1X3Byb2pcIixzdG9wczpbWy0yMCxcIiM3NzQ1MDhcIl0sWy0xNSxcIiNiOTdiMjlcIl0sWy0xMCxcIiNlMmM3ODdcIl0sWy01LFwiI2Y2ZWRkN1wiXSxbMCxcIiNkN2VlZWJcIl0sWzUsXCIjODdkMGM1XCJdLFsxMCxcIiMyZDhmODdcIl0sWzE1LFwiIzAxNTY0ZFwiXV19LHtsYWJlbDpcIlRYeCBjaGFuZ2UgUkNQNDVcIix2YWx1ZTpcIkJESV9jbGltYXRlX3R4eF9wcm9qXCIsc3RvcHM6W1suNSxcIiNmZmYwZGNcIl0sWzEsXCIjZmVlMmJiXCJdLFsxLjUsXCIjZmRjZTk4XCJdLFsyLFwiI2ZkYjY3ZlwiXSxbMi41LFwiI2ZjOGM1OVwiXSxbMyxcIiNmMDY5NGFcIl0sWzMuNSxcIiNkYzNjMjhcIl0sWzQsXCIjYmUwZjBhXCJdLFs0LjUsXCIjOTYwMDAwXCJdLFs1LFwiIzdmMDAwMFwiXV19XX0se2hhc0FsbDohMSx2YWx1ZTpcImNsaW1hdGVZZWFyXCIsbGFiZWw6XCJUaW1lc3BhblwiLG9uQ2hhbmdlOlwidXBkYXRlQ2xpbWF0ZVllYXJcIixvcHRpb25zOlt7bGFiZWw6XCIyMDIwLTIwNDAgdy5yLnQgMTk4MS0yMDAwXCIsdmFsdWU6XCJjaGFuZ2VfMjAzMF9tZWFuXCJ9LHtsYWJlbDpcIjIwMzAtMjA1MCB3LnIudCAxOTgxLTIwMDBcIix2YWx1ZTpcImNoYW5nZV8yMDUwX21lYW5cIn1dfV0sZGlzYXN0ZXJzOlt7aGFzQWxsOiEwLHZhbHVlOlwiZGlzYXN0ZXJUeXBlXCIsbGFiZWw6XCJIYXphcmQgVHlwZVwiLG9uQ2hhbmdlOlwidXBkYXRlRGlzYXN0ZXJUeXBlXCIsb3B0aW9uczpbe2xhYmVsOlwiRHJvdWdodFwiLHZhbHVlOlwiRHJvdWdodFwifSx7bGFiZWw6XCJIZWF2eSByYWluZmFsbFwiLHZhbHVlOlwiSGVhdnkgcmFpbmZhbGxcIn0se2xhYmVsOlwiRXBpZGVtaWNcIix2YWx1ZTpcIkVwaWRlbWljXCJ9LHtsYWJlbDpcIldpbGRmaXJlXCIsdmFsdWU6XCJXaWxkZmlyZVwifSx7bGFiZWw6XCJWaW9sZW50IHdpbmRcIix2YWx1ZTpcIlZpb2xlbnQgd2luZFwifV19XSxjb25mbGljdDpbe2hhc0FsbDohMSx2YWx1ZTpcImxheWVyXCIsbGFiZWw6XCJDb25mbGljdCBob3RzcG90c1wiLG9uQ2hhbmdlOlwidXBkYXRlTGF5ZXJcIixvcHRpb25zOlt7bGFiZWw6XCJQYXN0ICgxOTg5IC0gMjAyMClcIix2YWx1ZTpcIkJESV9jb25mbGljdF9VQ0RQX3BvbFwifSx7bGFiZWw6XCJGdXR1cmUgdHJlbmRzXCIsdmFsdWU6XCJCRElfY29uZmxpY3RfdHJlbmRzXCJ9XX1dLHZ1bG5lcmFiaWxpdHk6W3toYXNBbGw6ITEsdmFsdWU6XCJsYXllclZ1bG5cIixsYWJlbDpcIlZ1bG5lcmFiaWxpdHkgaW5kaWNhdG9yc1wiLG9uQ2hhbmdlOlwidXBkYXRlTGF5ZXJWdWxuXCIsb3B0aW9uczpbe2xhYmVsOlwiQ29tcG9zaXRlIHZ1bG5lcmFiaWxpdHkgc2NvcmVcIix2YWx1ZTpcIlZVTE5FUkFCSUxJVFlcIn0se2xhYmVsOlwiTXVsdGlkaW1lbnNpb25hbCBQb3ZlcnR5IEluZGV4XCIsdmFsdWU6XCJNdWx0aWRpbWVuc2lvbmFsIFBvdmVydHkgSW5kZXggSU5ERVhcIn0se2xhYmVsOlwiTWFsYXJpYSBNb3J0YWxpdHkgcmF0ZVwiLHZhbHVlOlwiTWFsYXJpYSBNb3J0YWxpdHkgcmF0ZSBJTkRFWFwifSx7bGFiZWw6XCJGb29kIGluc2VjdXJpdHlcIix2YWx1ZTpcIkZvb2QgaW5zZWN1cml0eSAoY2F0ZWdvcmllcykgSU5ERVhcIn0se2xhYmVsOlwiUGVvcGxlIGluIG5lZWRcIix2YWx1ZTpcIlBlb3BsZSBpbiBuZWVkIEZJTkFMIElOREVYXCJ9LHtsYWJlbDpcIkVsZGVybHkgb3ZlciA2MFwiLHZhbHVlOlwiRWxkZXJseSBvdmVyIDYwIEZJTkFMIElOREVYXCJ9LHtsYWJlbDpcIkNoaWxkcmVuIHVuZGVyIDVcIix2YWx1ZTpcIkNoaWxkcmVuIHVuZGVyIDUgRklOQUwgSU5ERVhcIn0se2xhYmVsOlwiUHJlZ25hbnQgd29tZW4gXCIsdmFsdWU6XCJQcmVnbmFudCB3b21lbiBGSU5BTCBJTkRFWFwifSx7bGFiZWw6XCJJRFBzXCIsdmFsdWU6XCJJRFBzIEZJTkFMIElOREVYXCJ9XX1dLGxhY2tfb2ZfY29waW5nX2NhcGFjaXR5Olt7aGFzQWxsOiExLHZhbHVlOlwibGF5ZXJMT0NDXCIsbGFiZWw6XCJMYWNrIG9mIGNvcGluZyBjYXBhY2l0eSBpbmRpY2F0b3JzXCIsb25DaGFuZ2U6XCJ1cGRhdGVMYXllckxPQ0NcIixvcHRpb25zOlt7bGFiZWw6XCJMYWNrIG9mIGNvcGluZyBjYXBhY2l0eSBzY29yZVwiLHZhbHVlOlwiTEFDSyBPRiBDT1BJTkcgQ0FQQUNJVFlcIn0se2xhYmVsOlwiQWNjZXNzIHRvIGhlYWx0aGNhcmVcIix2YWx1ZTpcIkFjY2VzcyB0byBoZWFsdGhjYXJlIElOREVYIEZJTkFMXCJ9LHtsYWJlbDpcIkFjY2VzcyB0byBlZHVjYXRpb25cIix2YWx1ZTpcIkFjY2VzcyB0byBlZHVjYXRpb24gSU5ERVggRklOQUxcIn0se2xhYmVsOlwiQWNjZXNzIHRvIGVsZWN0cmljaXR5XCIsdmFsdWU6XCJBY2Nlc3MgdG8gZWxlY3RyaWNpdHkgUmVsYXRpdmUgSU5ERVhcIn0se2xhYmVsOlwiQWNjZXNzIHRvIGNpdGllc1wiLHZhbHVlOlwiQWNjZXNzIHRvIGNpdGllcyBJTkRFWFwifV19XSxoYXphcmRfZXhwb3N1cmU6W3toYXNBbGw6ITEsdmFsdWU6XCJsYXllckhlXCIsbGFiZWw6XCJIYXphcmQgZXhwb3N1cmUgaW5kaWNhdG9yc1wiLG9uQ2hhbmdlOlwidXBkYXRlTGF5ZXJIZVwiLG9wdGlvbnM6W3tsYWJlbDpcIkhhemFyZCBleHBvc3VyZSBzY29yZVwiLHZhbHVlOlwiSEFaQVJEICYgRVhQT1NVUkVcIn0se2xhYmVsOlwiRmxvb2QgZXhwb3N1cmVcIix2YWx1ZTpcIkZsb29kIGV4cG9zdXJlIEZJTkFMIElOREVYXCJ9LHtsYWJlbDpcIkRyb3VnaHQgZXhwb3N1cmVcIix2YWx1ZTpcIkRyb3VnaHQgZXhwb3N1cmUgRklOQUwgSU5ERVhcIn0se2xhYmVsOlwiTGFuZHNsaWRlIGV4cG9zdXJlXCIsdmFsdWU6XCJMYW5kc2xpZGUgZXhwb3N1cmUgIEZJTkFMIElOREVYXCJ9LHtsYWJlbDpcIkNvbmZsaWN0IHRyZW5kc1wiLHZhbHVlOlwiQ29uZmxpY3QgRklOQUwgSU5ERVhcIn1dfV0saGF6YXJkX3Byb2plY3Rpb25zXzIwMzA6W3toYXNBbGw6ITEsdmFsdWU6XCJsYXllckhlMzBcIixsYWJlbDpcIkhhemFyZHNcIixvbkNoYW5nZTpcInVwZGF0ZUxheWVySGUzMFwiLG9wdGlvbnM6W3tsYWJlbDpcIkhhemFyZCBleHBvc3VyZSAyMDMwXCIsdmFsdWU6XCJwcm9qX2hhemFyZF8yMDMwXCJ9LHtsYWJlbDpcIkZsb29kIGV4cG9zdXJlIDIwMzBcIix2YWx1ZTpcInByb2pfZmxvb2RfMjAzMFwifSx7bGFiZWw6XCJEcm91Z2h0IGV4cG9zdXJlIDIwMzBcIix2YWx1ZTpcInByb2pfZHJvdWdodF8yMDMwXCJ9LHtsYWJlbDpcIkxhbmRzbGlkZSBleHBvc3VyZVwiLHZhbHVlOlwicHJval9sYW5kc2xpZGVfMjAzMFwifV19XSxoYXphcmRfcHJvamVjdGlvbnNfMjA1MDpbe2hhc0FsbDohMSx2YWx1ZTpcImxheWVySGU1MFwiLGxhYmVsOlwiSGF6YXJkc1wiLG9uQ2hhbmdlOlwidXBkYXRlTGF5ZXJIZTUwXCIsb3B0aW9uczpbe2xhYmVsOlwiSGF6YXJkIGV4cG9zdXJlIDIwNTBcIix2YWx1ZTpcInByb2pfaGF6YXJkXzIwNTBcIn0se2xhYmVsOlwiRmxvb2QgZXhwb3N1cmUgMjA1MFwiLHZhbHVlOlwicHJval9mbG9vZF8yMDUwXCJ9LHtsYWJlbDpcIkRyb3VnaHQgZXhwb3N1cmUgMjA1MFwiLHZhbHVlOlwicHJval9kcm91Z2h0XzIwNTBcIn0se2xhYmVsOlwiTGFuZHNsaWRlIGV4cG9zdXJlXCIsdmFsdWU6XCJwcm9qX2xhbmRzbGlkZV8yMDUwXCJ9XX1dfSx0LmxlZ2VuZE9wdGlvbnM9e0JESV9jbGltYXRlX2NkZDp7bmFtZTpcIk1BWElNVU0gTlVNQkVSIE9GIENPTlNFQ1VUSVZFIERSWSBEQVlTIFdJVEggUlI8MSBNTSAoZGF5cylcIixjb2xvcnM6W1wiIzA4MWQ1OFwiLFwiIzIyNWVhOFwiLFwiIzQxYjZjNFwiLFwiI2M3ZTliNFwiLFwiI2ZmZmZkOVwiXSxtaW46MzUsbWF4Ojk1LHJhbmdlOiEwfSxCRElfY2xpbWF0ZV9wcmNwdG90OntuYW1lOlwiTUVBTiBBTk5VQUwgVE9UQUwgUFJFQ0lQSVRBVElPTiAobW0pXCIsY29sb3JzOltcIiNmZmZmZDlcIixcIiNjN2U5YjRcIixcIiM0MWI2YzRcIixcIiMyMjVlYThcIixcIiMwODFkNThcIl0sbWluOjgyMCxtYXg6MTI0MCxyYW5nZTohMH0sQkRJX2NsaW1hdGVfcng1OntuYW1lOlwiTUFYSU1VTSA1LURBWSBQUkVDSVBJVEFUSU9OIFRPVEFMIChtbSlcIixjb2xvcnM6W1wiI2ZmZmZkOVwiLFwiI2M3ZTliNFwiLFwiIzQxYjZjNFwiLFwiIzIyNWVhOFwiLFwiIzA4MWQ1OFwiXSxtaW46NTAsbWF4OjEyNSxyYW5nZTohMH0sQkRJX2NsaW1hdGVfdHh4OntuYW1lOlwiTUFYSU1VTSBPRiBNQVhJTVVNIFRFTVBFUkFUVVJFICjCsEMpXCIsY29sb3JzOltcIiNkZGRjZGNcIixcIiNmM2M4YjJcIixcIiNmNmE1ODZcIixcIiNlNzc0NWJcIixcIiNjODM4MzZcIl0sbWluOjMwLG1heDozNyxyYW5nZTohMH0sQkRJX2NsaW1hdGVfY2RkX3Byb2o6e25hbWU6XCJNQVhJTVVNIE5VTUJFUiBPRiBDT05TRUNVVElWRSBEUlkgREFZUyBDSEFOR0UgKCUpXCIsY29sb3JzOltcIiMwMTU2NGRcIixcIiMyZjkxODlcIixcIiM4YWQxYzZcIixcIiNkOWVlZWJcIixcIiNmNmVkZDVcIixcIiNlMWM2ODRcIixcIiNiNzc5MjhcIixcIiM3NTQzMDhcIixcIiM1NDMwMDVcIl0sbWluOi0yMCxtYXg6MjAscmFuZ2U6ITB9LEJESV9jbGltYXRlX3ByY3B0b3RfcHJvajp7bmFtZTpcIk1FQU4gQU5OVUFMIFRPVEFMIFBSRUNJUElUQVRJT04gQ0hBTkdFICglKVwiLGNvbG9yczpbXCIjNzc0NTA4XCIsXCIjYjk3YjI5XCIsXCIjZTJjNzg3XCIsXCIjZjZlZGQ3XCIsXCIjZDdlZWViXCIsXCIjODdkMGM1XCIsXCIjMmQ4Zjg3XCIsXCIjMDE1NjRkXCJdLG1pbjotMjAsbWF4OjIwLHJhbmdlOiEwfSxCRElfY2xpbWF0ZV9yeDVfcHJvajp7bmFtZTpcIk1BWElNVU0gNS1EQVkgUFJFQ0lQSVRBVElPTiBUT1RBTCBDSEFOR0UgKCUpXCIsY29sb3JzOltcIiM3NzQ1MDhcIixcIiNiOTdiMjlcIixcIiNlMmM3ODdcIixcIiNmNmVkZDdcIixcIiNkN2VlZWJcIixcIiM4N2QwYzVcIixcIiMyZDhmODdcIixcIiMwMTU2NGRcIl0sbWluOi0yMCxtYXg6MjAscmFuZ2U6ITB9LEJESV9jbGltYXRlX3R4eF9wcm9qOntuYW1lOlwiTUFYSU1VTSBPRiBNQVhJTVVNIFRFTVBFUkFUVVJFICjCsEMpIENIQU5HRSAoJSlcIixjb2xvcnM6W1wiI2ZmZjBkY1wiLFwiI2ZlZTJiYlwiLFwiI2ZkY2U5OFwiLFwiI2ZkYjY3ZlwiLFwiI2ZjOGM1OVwiLFwiI2YwNjk0YVwiLFwiI2RjM2MyOFwiLFwiI2JlMGYwYVwiLFwiIzk2MDAwMFwiLFwiIzdmMDAwMFwiXSxtaW46MCxtYXg6NSxyYW5nZTohMH0sQkRJX2hpc3RvcmljYWxfZGlzYXN0ZXJzOntuYW1lOlwiSGF6YXJkIHR5cGVcIixjb2xvcnM6W3tsYWJlbDpcIkRyb3VnaHRcIixjb2xvcjpcIiNmYmIwM2JcIn0se2xhYmVsOlwiSGVhdnkgcmFpbmZhbGxcIixjb2xvcjpcIiMyMjNiNTNcIn0se2xhYmVsOlwiRXBpZGVtaWNcIixjb2xvcjpcIiNlNTVlNWVcIn0se2xhYmVsOlwiV2lsZGZpcmVcIixjb2xvcjpcIiMxNjhDMDRcIn0se2xhYmVsOlwiVmlvbGVudCB3aW5kXCIsY29sb3I6XCIjM2JiMmQwXCJ9XSxyYW5nZTohMX0sQkRJX21pZ3JhdGlvbjp7bmFtZTpcIk51bWJlciBvZiBJRFBzXCIsY29sb3JzOltcIiNmM2ZmZmZcIixcIiNkNmZmZjNcIixcIiNiYWVmZDZcIixcIiM4NGI3YTBcIixcIiM1MTgyNmNcIl0sbWluOlwiPCAxMFwiLG1heDpcIjEwMDAgK1wiLHJhbmdlOiEwfSxCRElfY29uZmxpY3RfVUNEUF9wb2w6e25hbWU6XCJOdW1iZXIgb2YgZmF0YWxpdGllc1wiLGNvbG9yczpbXCIjZmVlYmUyXCIsXCIjZmJiNGI5XCJdLG1pbjpcIjwgMVwiLG1heDpcIjEwMCtcIixyYW5nZTohMH0sQkRJX2NvbmZsaWN0X3RyZW5kczp7bmFtZTpcIlR5cGUgb2YgY29uZmxpY3RcIixjb2xvcnM6W3tsYWJlbDpcIlZpb2xlbmNlIGFnYWluc3QgY2l2aWxpYW5zXCIsY29sb3I6XCIjNWU5MWIyXCJ9LHtsYWJlbDpcIlJpb3RzXCIsY29sb3I6XCIjY2E3OTM0XCJ9LHtsYWJlbDpcIkJhdHRsZXNcIixjb2xvcjpcIiNmZmQ5NDVcIn0se2xhYmVsOlwiT3RoZXJcIixjb2xvcjpcIiM2ZThhNjRcIn1dLHJhbmdlOiExfSxCRElfaW5mb3JtX3Z1bG46e25hbWU6XCJWdWxuZXJhYmlsaXR5IEluZGV4XCIsY29sb3JzOlt7bGFiZWw6XCJWZXJ5IGxvd1wiLGNvbG9yOlwiI2NjZDllZFwifSx7bGFiZWw6XCJMb3dcIixjb2xvcjpcIiM5OWIzZGNcIn0se2xhYmVsOlwiTWVkaXVtXCIsY29sb3I6XCIjNjY4ZWNiXCJ9LHtsYWJlbDpcIkhpZ2hcIixjb2xvcjpcIiMyMDM4NWVcIn0se2xhYmVsOlwiVmVyeSBoaWdoXCIsY29sb3I6XCIjMTUyNjNmXCJ9XSxyYW5nZTohMX0sQkRJX2luZm9ybV9sYWNrOntuYW1lOlwiTGFjayBvZiBjb3BpbmcgY2FwYWNpdHlcIixjb2xvcnM6W3tsYWJlbDpcIlZlcnkgbG93XCIsY29sb3I6XCIjZTFlOWQ3XCJ9LHtsYWJlbDpcIkxvd1wiLGNvbG9yOlwiI2M0ZDNiMFwifSx7bGFiZWw6XCJNZWRpdW1cIixjb2xvcjpcIiNhN2JkODlcIn0se2xhYmVsOlwiSGlnaFwiLGNvbG9yOlwiIzRmNjIzNlwifSx7bGFiZWw6XCJWZXJ5IGhpZ2hcIixjb2xvcjpcIiMzNTQxMjRcIn1dLHJhbmdlOiExfSxCRElfaW5mb3JtX2hlOntuYW1lOlwiSGF6YXJkIGV4cG9zdXJlXCIsY29sb3JzOlt7bGFiZWw6XCJWZXJ5IGxvd1wiLGNvbG9yOlwiI2ZjZTZkOFwifSx7bGFiZWw6XCJMb3dcIixjb2xvcjpcIiNmYWNkYjJcIn0se2xhYmVsOlwiTWVkaXVtXCIsY29sb3I6XCIjZjhiNDhiXCJ9LHtsYWJlbDpcIkhpZ2hcIixjb2xvcjpcIiNkOTU4MGNcIn0se2xhYmVsOlwiVmVyeSBoaWdoXCIsY29sb3I6XCIjOTEzYjA4XCJ9XSxyYW5nZTohMX0sQkRJX2luZm9ybV9yaXNrOntuYW1lOlwiSW5mb3JtIHJpc2tcIixjb2xvcnM6W3tsYWJlbDpcIlZlcnkgbG93XCIsY29sb3I6XCIjZmVjOGMwXCJ9LHtsYWJlbDpcIkxvd1wiLGNvbG9yOlwiI2ZlOTE4MVwifSx7bGFiZWw6XCJNZWRpdW1cIixjb2xvcjpcIiNmZTViNDJcIn0se2xhYmVsOlwiSGlnaFwiLGNvbG9yOlwiIzkxMTMwMFwifSx7bGFiZWw6XCJWZXJ5IGhpZ2hcIixjb2xvcjpcIiM2MTBkMDBcIn1dLHJhbmdlOiExfSxCRElfZXJvc2lvbjp7bmFtZTpcIk1lYW4gZXJvc2lvbiByYXRlICh0b25zL2hhL3llYXIpXCIsY29sb3JzOltcIiM0MDQwNDBcIixcIiM3Njc2NzZcIixcIiNhY2FjYWNcIixcIiNkMWQyZDFcIixcIiNmMGYwZjBcIixcIiNmOWVhZTRcIixcIiNmMmMwYjFcIixcIiNlNThmODBcIixcIiNkYzQ2NTBcIixcIiNjNjBiMjdcIl0sbWluOjEzLG1heDo3NzcwLHJhbmdlOiEwfSxCRElfbmJzOntuYW1lOlwiTkJTIHBvdGVudGlhbCBpbmRleFwiLGNvbG9yczpbXCIjYTU2MDFjXCIsXCIjYjk4ZTU5XCIsXCIjZDViNDdhXCIsXCIjZTRjZGE3XCIsXCIjZjJlOWQ4XCIsXCIjZGNlOWU4XCIsXCIjYWNkNWQxXCIsXCIjN2NiZGIzXCIsXCIjNDY5YjhjXCIsXCIjMGY3YzY5XCJdLG1pbjowLG1heDoxLHJhbmdlOiEwfSxCRElfaW5mb3JtX2hlX3Byb2pfMzA6e25hbWU6XCJIYXphcmQgZXhwb3N1cmUgMjAzMFwiLGNvbG9yczpbe2xhYmVsOlwiVmVyeSBsb3dcIixjb2xvcjpcIiNmY2U2ZDhcIn0se2xhYmVsOlwiTG93XCIsY29sb3I6XCIjZmFjZGIyXCJ9LHtsYWJlbDpcIk1lZGl1bVwiLGNvbG9yOlwiI2Y4YjQ4YlwifSx7bGFiZWw6XCJIaWdoXCIsY29sb3I6XCIjZDk1ODBjXCJ9LHtsYWJlbDpcIlZlcnkgaGlnaFwiLGNvbG9yOlwiIzkxM2IwOFwifV0scmFuZ2U6ITF9LEJESV9pbmZvcm1faGVfcHJval81MDp7bmFtZTpcIkhhemFyZCBleHBvc3VyZSAyMDUwXCIsY29sb3JzOlt7bGFiZWw6XCJWZXJ5IGxvd1wiLGNvbG9yOlwiI2ZjZTZkOFwifSx7bGFiZWw6XCJMb3dcIixjb2xvcjpcIiNmYWNkYjJcIn0se2xhYmVsOlwiTWVkaXVtXCIsY29sb3I6XCIjZjhiNDhiXCJ9LHtsYWJlbDpcIkhpZ2hcIixjb2xvcjpcIiNkOTU4MGNcIn0se2xhYmVsOlwiVmVyeSBoaWdoXCIsY29sb3I6XCIjOTEzYjA4XCJ9XSxyYW5nZTohMX19LHQuY2hhcHRlckxheWVycz17Y2xpbWF0ZV9jdXJyZW50OltcIkJESV9jbGltYXRlX2NkZFwiLFwiQkRJX2NsaW1hdGVfcHJjcHRvdFwiLFwiQkRJX2NsaW1hdGVfcng1XCIsXCJCRElfY2xpbWF0ZV90eHhcIl0saG90c3BvdHM6W1wiQkRJX2luZm9ybV9yaXNrXCIsXCJCRElfaW5mb3JtX2hlXCIsXCJCRElfaW5mb3JtX3Z1bG5cIixcIkJESV9pbmZvcm1fbGFja1wiXSxjbGltYXRlX3Byb2plY3Rpb25zOltcIkJESV9jbGltYXRlX2NkZF9wcm9qXCIsXCJCRElfY2xpbWF0ZV9wcmNwdG90X3Byb2pcIixcIkJESV9jbGltYXRlX3J4NV9wcm9qXCIsXCJCRElfY2xpbWF0ZV90eHhfcHJvalwiXSxkaXNhc3RlcnM6W1wiQkRJX2hpc3RvcmljYWxfZGlzYXN0ZXJzXCJdLG1pZ3JhdGlvbjpbXCJCRElfbWlncmF0aW9uXCJdLGNvbmZsaWN0OltcIkJESV9jb25mbGljdF9VQ0RQX3BvbFwiLFwiQkRJX2NvbmZsaWN0X3RyZW5kc1wiXSx2dWxuZXJhYmlsaXR5OltcIkJESV9pbmZvcm1fdnVsblwiXSxsYWNrX29mX2NvcGluZ19jYXBhY2l0eTpbXCJCRElfaW5mb3JtX2xhY2tcIl0saGF6YXJkX2V4cG9zdXJlOltcIkJESV9pbmZvcm1faGVcIl0sbGFuZF9lcm9zaW9uOltcIkJESV9lcm9zaW9uXCJdLG5iczpbXCJCRElfbmJzXCJdLGhhemFyZF9wcm9qZWN0aW9uc18yMDMwOltcIkJESV9pbmZvcm1faGVfcHJval8zMFwiXSxoYXphcmRfcHJvamVjdGlvbnNfMjA1MDpbXCJCRElfaW5mb3JtX2hlX3Byb2pfNTBcIl19LHQudG9vbHRpcENvbmZpZz17QkRJX2NsaW1hdGVfY2RkOntmZWF0dXJlczpbe2xhYmVsOlwiTmFtZVwiLHZhbHVlOlwiTkFNRV9BRE0zXCIsdHlwZTpcInRpdGxlXCJ9LHtsYWJlbDpcIkN1cnJlbnQgY2xpbWF0b2xvZ3lcIix2YWx1ZTpcIm9ic19tZWFuXCJ9XX0sQkRJX2NsaW1hdGVfcHJjcHRvdDp7ZmVhdHVyZXM6W3tsYWJlbDpcIk5hbWVcIix2YWx1ZTpcIk5BTUVfQURNM1wiLHR5cGU6XCJ0aXRsZVwifSx7bGFiZWw6XCJDdXJyZW50IGNsaW1hdG9sb2d5XCIsdmFsdWU6XCJvYnNfbWVhblwifV19LEJESV9jbGltYXRlX3J4NTp7ZmVhdHVyZXM6W3tsYWJlbDpcIk5hbWVcIix2YWx1ZTpcIk5BTUVfQURNM1wiLHR5cGU6XCJ0aXRsZVwifSx7bGFiZWw6XCJDdXJyZW50IGNsaW1hdG9sb2d5XCIsdmFsdWU6XCJvYnNfbWVhblwifV19LEJESV9jbGltYXRlX3R4eDp7ZmVhdHVyZXM6W3tsYWJlbDpcIk5hbWVcIix2YWx1ZTpcIk5BTUVfQURNM1wiLHR5cGU6XCJ0aXRsZVwifSx7bGFiZWw6XCJDdXJyZW50IGNsaW1hdG9sb2d5XCIsdmFsdWU6XCJvYnNfbWVhblwifV19LEJESV9oaXN0b3JpY2FsX2Rpc2FzdGVyc19wb2ludDp7ZmVhdHVyZXM6W3tsYWJlbDpcIk1haW4gaGF6YXJkOiBcIix2YWx1ZTpcIm1haW5faGF6YXJkXCJ9LHtsYWJlbDpcIkNhc2NhZGluZy9jb21wb3VuZGluZyBkaXNhc3RlcnM6IFwiLHZhbHVlOlwic2Vjb25kX2Rpc2FzdGVyXCJ9LHtsYWJlbDpcIkRhdGU6IFwiLHZhbHVlOlwiRGF0ZVwifV19LEJESV9jbGltYXRlX2NkZF9wcm9qOntmZWF0dXJlczpbe2xhYmVsOlwiTmFtZVwiLHZhbHVlOlwiTkFNRV9BRE0zXCIsdHlwZTpcInRpdGxlXCJ9LHtsYWJlbDpcIlByb2plY3Rpb25zIFJDUDQ1IGZvciAyMDMwXCIsdmFsdWU6XCJjaGFuZ2VfMjAzMF9tZWFuXCJ9LHtsYWJlbDpcIlByb2plY3Rpb25zIFJDUDQ1IGZvciAyMDUwXCIsdmFsdWU6XCJjaGFuZ2VfMjA1MF9tZWFuXCJ9XX0sQkRJX2NsaW1hdGVfcHJjcHRvdF9wcm9qOntmZWF0dXJlczpbe2xhYmVsOlwiTmFtZVwiLHZhbHVlOlwiTkFNRV9BRE0zXCIsdHlwZTpcInRpdGxlXCJ9LHtsYWJlbDpcIlByb2plY3Rpb25zIFJDUDQ1IGZvciAyMDMwXCIsdmFsdWU6XCJjaGFuZ2VfMjAzMF9tZWFuXCJ9LHtsYWJlbDpcIlByb2plY3Rpb25zIFJDUDQ1IGZvciAyMDUwXCIsdmFsdWU6XCJjaGFuZ2VfMjA1MF9tZWFuXCJ9XX0sQkRJX2NsaW1hdGVfcng1X3Byb2o6e2ZlYXR1cmVzOlt7bGFiZWw6XCJOYW1lXCIsdmFsdWU6XCJOQU1FX0FETTNcIix0eXBlOlwidGl0bGVcIn0se2xhYmVsOlwiUHJvamVjdGlvbnMgUkNQNDUgZm9yIDIwMzBcIix2YWx1ZTpcImNoYW5nZV8yMDMwX21lYW5cIn0se2xhYmVsOlwiUHJvamVjdGlvbnMgUkNQNDUgZm9yIDIwNTBcIix2YWx1ZTpcImNoYW5nZV8yMDUwX21lYW5cIn1dfSxCRElfY2xpbWF0ZV90eHhfcHJvajp7ZmVhdHVyZXM6W3tsYWJlbDpcIk5hbWVcIix2YWx1ZTpcIk5BTUVfQURNM1wiLHR5cGU6XCJ0aXRsZVwifSx7bGFiZWw6XCJQcm9qZWN0aW9ucyBSQ1A0NSBmb3IgMjAzMFwiLHZhbHVlOlwiY2hhbmdlXzIwMzBfbWVhblwifSx7bGFiZWw6XCJQcm9qZWN0aW9ucyBSQ1A0NSBmb3IgMjA1MFwiLHZhbHVlOlwiY2hhbmdlXzIwNTBfbWVhblwifV19LEJESV9taWdyYXRpb246e2ZlYXR1cmVzOlt7bGFiZWw6XCJJRFBzXCIsdmFsdWU6XCJpbmRpdmlkdXNfaW50XCIsdHlwZTpcImlubGluZVwifV19LEJESV9jb25mbGljdF9VQ0RQX3BvbDp7ZmVhdHVyZXM6W3tsYWJlbDpcIk5BTUVcIix2YWx1ZTpcIk5BTUVfQURNM1wiLHR5cGU6XCJ0aXRsZVwifSx7bGFiZWw6XCJmYXRhbGl0aWVzXCIsdmFsdWU6XCJmYXRcIix0eXBlOlwiaW5saW5lXCJ9XX0sQkRJX2NvbmZsaWN0X3RyZW5kczp7ZmVhdHVyZXM6W3tsYWJlbDpcIiBcIix2YWx1ZTpcIkNvbl90eXBlXCIsdHlwZTpcImlubGluZVwifV19LEJESV9pbmZvcm1fdnVsbjp7ZmVhdHVyZXM6W3tsYWJlbDpcIk5hbWVcIix2YWx1ZTpcIk5BTUVfQURNM1wiLHR5cGU6XCJ0aXRsZVwifSx7bGFiZWw6XCJWdWxuZXJhYmlsaXR5IGluZGV4XCIsdmFsdWU6XCJWVUxORVJBQklMSVRZXCJ9LHtsYWJlbDpcIk11bHRpZGltZW5zaW9uYWwgUG92ZXJ0eSBJbmRleFwiLHZhbHVlOlwiTXVsdGlkaW1lbnNpb25hbCBQb3ZlcnR5IEluZGV4IElOREVYXCJ9LHtsYWJlbDpcIk1hbGFyaWEgTW9ydGFsaXR5IHJhdGVcIix2YWx1ZTpcIk1hbGFyaWEgTW9ydGFsaXR5IHJhdGUgSU5ERVhcIn0se2xhYmVsOlwiRm9vZCBpbnNlY3VyaXR5IChjYXRlZ29yaWVzKSBJTkRFWFwiLHZhbHVlOlwiRm9vZCBpbnNlY3VyaXR5IChjYXRlZ29yaWVzKSBJTkRFWFwifSx7bGFiZWw6XCJQZW9wbGUgaW4gbmVlZCBGSU5BTCBJTkRFWFwiLHZhbHVlOlwiUGVvcGxlIGluIG5lZWQgRklOQUwgSU5ERVhcIn0se2xhYmVsOlwiRWxkZXJseSBvdmVyIDYwIEZJTkFMIElOREVYXCIsdmFsdWU6XCJFbGRlcmx5IG92ZXIgNjAgRklOQUwgSU5ERVhcIn0se2xhYmVsOlwiQ2hpbGRyZW4gdW5kZXIgNSBGSU5BTCBJTkRFWFwiLHZhbHVlOlwiQ2hpbGRyZW4gdW5kZXIgNSBGSU5BTCBJTkRFWFwifSx7bGFiZWw6XCJQcmVnbmFudCB3b21lbiBGSU5BTCBJTkRFWFwiLHZhbHVlOlwiUHJlZ25hbnQgd29tZW4gRklOQUwgSU5ERVhcIn0se2xhYmVsOlwiSURQcyBGSU5BTCBJTkRFWFwiLHZhbHVlOlwiSURQcyBGSU5BTCBJTkRFWFwifV19LEJESV9pbmZvcm1fbGFjazp7ZmVhdHVyZXM6W3tsYWJlbDpcIk5hbWVcIix2YWx1ZTpcIk5BTUVfQURNM1wiLHR5cGU6XCJ0aXRsZVwifSx7bGFiZWw6XCJMYWNrIG9mIGNvcGluZyBjYXBhY2l0eSBzY29yZVwiLHZhbHVlOlwiTEFDSyBPRiBDT1BJTkcgQ0FQQUNJVFlcIn0se2xhYmVsOlwiQWNjZXNzIHRvIGhlYWx0aGNhcmVcIix2YWx1ZTpcIkFjY2VzcyB0byBoZWFsdGhjYXJlIElOREVYIEZJTkFMXCJ9LHtsYWJlbDpcIkFjY2VzcyB0byBlZHVjYXRpb25cIix2YWx1ZTpcIkFjY2VzcyB0byBlZHVjYXRpb24gSU5ERVggRklOQUxcIn0se2xhYmVsOlwiQWNjZXNzIHRvIGVsZWN0cmljaXR5XCIsdmFsdWU6XCJBY2Nlc3MgdG8gZWxlY3RyaWNpdHkgUmVsYXRpdmUgSU5ERVhcIn0se2xhYmVsOlwiQWNjZXNzIHRvIGNpdGllc1wiLHZhbHVlOlwiQWNjZXNzIHRvIGNpdGllcyBJTkRFWFwifV19LEJESV9pbmZvcm1faGU6e2ZlYXR1cmVzOlt7bGFiZWw6XCJOYW1lXCIsdmFsdWU6XCJOQU1FX0FETTNcIix0eXBlOlwidGl0bGVcIn0se2xhYmVsOlwiSGF6YXJkIGV4cG9zdXJlIHNjb3JlXCIsdmFsdWU6XCJIQVpBUkQgJiBFWFBPU1VSRVwifSx7bGFiZWw6XCJGbG9vZCBleHBvc3VyZVwiLHZhbHVlOlwiRmxvb2QgZXhwb3N1cmUgRklOQUwgSU5ERVhcIn0se2xhYmVsOlwiRHJvdWdodCBleHBvc3VyZVwiLHZhbHVlOlwiRHJvdWdodCBleHBvc3VyZSBGSU5BTCBJTkRFWFwifSx7bGFiZWw6XCJMYW5kc2xpZGUgZXhwb3N1cmVcIix2YWx1ZTpcIkxhbmRzbGlkZSBleHBvc3VyZSAgRklOQUwgSU5ERVhcIn0se2xhYmVsOlwiQ29uZmxpY3QgdHJlbmRzXCIsdmFsdWU6XCJDb25mbGljdCBGSU5BTCBJTkRFWFwifV19LEJESV9pbmZvcm1fcmlzazp7ZmVhdHVyZXM6W3tsYWJlbDpcIk5hbWVcIix2YWx1ZTpcIk5BTUVfQURNM1wiLHR5cGU6XCJ0aXRsZVwifSx7bGFiZWw6XCJJTkZPUk0gaW5kZXhcIix2YWx1ZTpcIklORk9STSBSSVNLIElOREVYIFNDT1JFXCJ9LHtsYWJlbDpcIkhhemFyZCBleHBvc3VyZVwiLHZhbHVlOlwiSEFaQVJEICYgRVhQT1NVUkVcIn0se2xhYmVsOlwiTGFjayBvZiBjb3BpbmcgY2FwYWNpdHlcIix2YWx1ZTpcIkxBQ0sgT0YgQ09QSU5HIENBUEFDSVRZXCJ9LHtsYWJlbDpcIlZ1bG5lcmFiaWxpdHlcIix2YWx1ZTpcIlZVTE5FUkFCSUxJVFlcIn1dfSxCRElfZXJvc2lvbjp7ZmVhdHVyZXM6W3tsYWJlbDpcIk5hbWVcIix2YWx1ZTpcIk5BTUVfQURNM1wiLHR5cGU6XCJ0aXRsZVwifSx7bGFiZWw6XCJFcm9zaW9uIHJhdGUsIHRvbnMvaGEveWVhclwiLHZhbHVlOlwiQXZlcmFnZSBlcm9zaW9uIHJhdGUgYnkgY29sbGluZSwgdG9ucy9oYS95ZWFyXCJ9XX0sQkRJX25iczp7ZmVhdHVyZXM6W3tsYWJlbDpcIk5hbWVcIix2YWx1ZTpcIk5BTUVfQURNM1wiLHR5cGU6XCJ0aXRsZVwifSx7bGFiZWw6XCJOQlMgUG90ZW50aWFsIEluZGV4XCIsdmFsdWU6XCJOQlMgUG90ZW50aWFsIEluZGV4XCJ9XX0sQkRJX2luZm9ybV9oZV9wcm9qXzMwOntmZWF0dXJlczpbe2xhYmVsOlwiTmFtZVwiLHZhbHVlOlwiTkFNRV9BRE0zXCIsdHlwZTpcInRpdGxlXCJ9LHtsYWJlbDpcIkhhemFyZCBleHBvc3VyZSAyMDMwXCIsdmFsdWU6XCJwcm9qX2hhemFyZF8yMDMwXCJ9LHtsYWJlbDpcIkZsb29kIGV4cG9zdXJlIDIwMzBcIix2YWx1ZTpcInByb2pfZmxvb2RfMjAzMFwifSx7bGFiZWw6XCJEcm91Z2h0IGV4cG9zdXJlIDIwMzBcIix2YWx1ZTpcInByb2pfZHJvdWdodF8yMDMwXCJ9LHtsYWJlbDpcIkxhbmRzbGlkZSBleHBvc3VyZSAyMDMwXCIsdmFsdWU6XCJwcm9qX2xhbmRzbGlkZV8yMDMwXCJ9XX0sQkRJX2luZm9ybV9oZV9wcm9qXzUwOntmZWF0dXJlczpbe2xhYmVsOlwiTmFtZVwiLHZhbHVlOlwiTkFNRV9BRE0zXCIsdHlwZTpcInRpdGxlXCJ9LHtsYWJlbDpcIkhhemFyZCBleHBvc3VyZSAyMDUwXCIsdmFsdWU6XCJwcm9qX2hhemFyZF8yMDUwXCJ9LHtsYWJlbDpcIkZsb29kIGV4cG9zdXJlIDIwNTBcIix2YWx1ZTpcInByb2pfZmxvb2RfMjA1MFwifSx7bGFiZWw6XCJEcm91Z2h0IGV4cG9zdXJlIDIwNTBcIix2YWx1ZTpcInByb2pfZHJvdWdodF8yMDUwXCJ9LHtsYWJlbDpcIkxhbmRzbGlkZSBleHBvc3VyZSAyMDUwXCIsdmFsdWU6XCJwcm9qX2xhbmRzbGlkZV8yMDUwXCJ9XX19LHQudG9vbHRpcExheWVycz17Y2xpbWF0ZV9jdXJyZW50OltcIkJESV9jbGltYXRlX2NkZFwiLFwiQkRJX2NsaW1hdGVfcHJjcHRvdFwiLFwiQkRJX2NsaW1hdGVfcng1XCIsXCJCRElfY2xpbWF0ZV90eHhcIl0sY2xpbWF0ZV9wcm9qZWN0aW9uczpbXCJCRElfY2xpbWF0ZV9jZGRfcHJvalwiLFwiQkRJX2NsaW1hdGVfcHJjcHRvdF9wcm9qXCIsXCJCRElfY2xpbWF0ZV9yeDVfcHJvalwiLFwiQkRJX2NsaW1hdGVfdHh4X3Byb2pcIl0sZGlzYXN0ZXJzOltcIkJESV9oaXN0b3JpY2FsX2Rpc2FzdGVyc19wb2ludFwiXSxtaWdyYXRpb246W1wiQkRJX21pZ3JhdGlvblwiXSxjb25mbGljdDpbXCJCRElfY29uZmxpY3RfVUNEUF9wb2xcIixcIkJESV9jb25mbGljdF90cmVuZHNcIl0sdnVsbmVyYWJpbGl0eTpbXCJCRElfaW5mb3JtX3Z1bG5cIl0sbGFja19vZl9jb3BpbmdfY2FwYWNpdHk6W1wiQkRJX2luZm9ybV9sYWNrXCJdLGhhemFyZF9leHBvc3VyZTpbXCJCRElfaW5mb3JtX2hlXCJdLGhvdHNwb3RzOltcIkJESV9pbmZvcm1fcmlza1wiXSxsYW5kX2Vyb3Npb246W1wiQkRJX2Vyb3Npb25cIl0sbmJzOltcIkJESV9uYnNcIl0saGF6YXJkX3Byb2plY3Rpb25zXzIwMzA6W1wiQkRJX2luZm9ybV9oZV9wcm9qXzMwXCJdLGhhemFyZF9wcm9qZWN0aW9uc18yMDUwOltcIkJESV9pbmZvcm1faGVfcHJval81MFwiXX0sdC52dWxuZXJhYmlsaXR5U3RvcHM9W1sxLjksXCIjY2NkOWVkXCJdLFszLjIsXCIjOTliM2RjXCJdLFs0LjcsXCIjNjY4ZWNiXCJdLFs2LjMsXCIjMjAzODVlXCJdLFsxMCxcIiMxNTI2M2ZcIl1dLHQubG9jY1N0b3BzPVtbMy4xLFwiI2UxZTlkN1wiXSxbNC42LFwiI2M0ZDNiMFwiXSxbNS45LFwiI2E3YmQ4OVwiXSxbNy4zLFwiIzRmNjIzNlwiXSxbMTAsXCIjMzU0MTI0XCJdXSx0LmhlU3RvcHM9W1sxLjQsXCIjZmNlNmQ4XCJdLFsyLjYsXCIjZmFjZGIyXCJdLFs0LFwiI2Y4YjQ4YlwiXSxbNixcIiNkOTU4MGNcIl0sWzEwLFwiIzkxM2IwOFwiXV0sdC5yaXNrU3RvcHM9W1sxLjksXCIjZmVjOGMwXCJdLFszLjQsXCIjZmU5MTgxXCJdLFs0LjksXCIjZmU1YjQyXCJdLFs2LjQsXCIjOTExMzAwXCJdLFsxMCxcIiM2MTBkMDBcIl1dfSw2NzpmdW5jdGlvbihlLHQsYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGw9YyhhKDEpKSxpPWEoMTgpLG49YSgyMikscj1jKGEoNDApKSxvPWMoYSgxMzMpKTthKDE5MyksYSgxOTYpO2EoMTk4KTtmdW5jdGlvbiBjKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX12YXIgZD0oMCxuLmNyZWF0ZU11aVRoZW1lKSh7cGFsZXR0ZTp7cHJpbWFyeTp7bWFpbjpcIiMyZTdkMzJcIn0sc2Vjb25kYXJ5OnIuZGVmYXVsdH0sdHlwb2dyYXBoeTp7Zm9udEZhbWlseTpbXCJSdWJpa1wiLFwiQXJpYWxcIixcInNhbnMtc2VyaWZcIl0uam9pbihcIixcIiksaDE6e2ZvbnRGYW1pbHk6W1wiRE0gU2VyaWYgRGlzcGxheVwiLFwic2VyaWZcIl0uam9pbihcIixcIil9LGgyOntmb250RmFtaWx5OltcIkRNIFNlcmlmIERpc3BsYXlcIixcInNlcmlmXCJdLmpvaW4oXCIsXCIpfSxoMzp7Zm9udEZhbWlseTpbXCJETSBTZXJpZiBEaXNwbGF5XCIsXCJzZXJpZlwiXS5qb2luKFwiLFwiKSxtYXJnaW5Cb3R0b206MTB9LGg0Ontmb250RmFtaWx5OltcIkRNIFNlcmlmIERpc3BsYXlcIixcInNlcmlmXCJdLmpvaW4oXCIsXCIpfSxoNTp7Zm9udEZhbWlseTpbXCJETSBTZXJpZiBEaXNwbGF5XCIsXCJzZXJpZlwiXS5qb2luKFwiLFwiKX0saDY6e2ZvbnRGYW1pbHk6W1wiUnViaWtcIixcIkFyaWFsXCIsXCJzYW5zLXNlcmlmXCJdLmpvaW4oXCIsXCIpLGZvbnRTaXplOjE0LGZvbnRXZWlnaHQ6XCJmb250V2VpZ2h0TWVkaXVtXCIsbGV0dGVyU3BhY2luZzoyLG1hcmdpblRvcDo1LG1hcmdpbkJvdHRvbTo1fSxjYXB0aW9uOntmb250RmFtaWx5OltcIk9wZW4gU2FucyBDb25kZW5zZWRcIixcInNhbnMtc2VyaWZcIl0uam9pbihcIixcIiksZm9udFdlaWdodDo3MDB9fX0pOygwLGkucmVuZGVyKShsLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgoZnVuY3Rpb24oKXtyZXR1cm4gbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQobi5NdWlUaGVtZVByb3ZpZGVyLHt0aGVtZTpkfSxsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChvLmRlZmF1bHQsbnVsbCkpfSksbnVsbCksZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKX19KTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9
