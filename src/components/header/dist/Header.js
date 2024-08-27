"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Header.scss");
var arrow_right_1_svg_1 = require("../../assets/icons/arrow-right-1.svg");
var react_router_dom_1 = require("react-router-dom");
var Container_1 = require("../container/Container");
var Header = function () {
    var _a = react_1.useState(null), activeIndex = _a[0], setActiveIndex = _a[1];
    var onLinkMouseOver = function (index) {
        setActiveIndex(index);
    };
    var onLinkMouseOut = function () {
        setActiveIndex(null);
    };
    var links = [
        { label: "Gallery", to: "/" },
        { label: "Artists", to: "/artists" },
        { label: "About me", to: "/about-me" },
    ];
    return (react_1["default"].createElement(Container_1["default"], null,
        react_1["default"].createElement("header", null,
            react_1["default"].createElement("h1", null, "Art | Gallery"),
            react_1["default"].createElement("div", { className: "header-links" }, links.map(function (item, index) { return (react_1["default"].createElement("div", { className: "header-link-wrapper", onMouseOver: function () { return onLinkMouseOver(index); }, onMouseOut: onLinkMouseOut, key: index },
                react_1["default"].createElement("span", { className: "header-link-item" },
                    react_1["default"].createElement("h1", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: item.to }, item.label)),
                    react_1["default"].createElement("img", { src: arrow_right_1_svg_1["default"] })),
                react_1["default"].createElement("div", { className: "header-underline " + (index === activeIndex ? "underline-animation" : null) }))); })),
            react_1["default"].createElement("h1", null,
                react_1["default"].createElement("a", { href: "#" }, "Menu")))));
};
exports["default"] = Header;
