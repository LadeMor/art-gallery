"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Footer.scss");
var Container_1 = require("../container/Container");
var Footer = function () {
    var _a = react_1.useState(null), currentIndex = _a[0], setCurrentIndex = _a[1];
    var onFooterMouseOver = function (index) {
        setCurrentIndex(index);
    };
    var onFooterMouseOut = function () {
        setCurrentIndex(null);
    };
    var footerLinksList = [
        {
            title: "Follow",
            links: [
                { label: "Instagram", href: "#" },
                { label: "LinkedIn", href: "#" },
            ]
        },
        {
            title: "Help",
            links: [
                { label: "Terms of use", href: "#" },
                { label: "Support", href: "#" },
            ]
        },
        {
            title: "Contact",
            links: [
                { label: "sergpyatko@gmail.com", href: "#" },
                { label: "LinkedIn", href: "#" },
            ]
        },
    ];
    return (react_1["default"].createElement(Container_1["default"], null,
        react_1["default"].createElement("footer", null,
            react_1["default"].createElement("div", { className: "contacts-wrapper" }, footerLinksList.map(function (item, index) { return (react_1["default"].createElement("div", { className: "footer-block", key: index, onMouseOver: function () { return onFooterMouseOver(index); }, onMouseOut: onFooterMouseOut },
                react_1["default"].createElement("h1", null, item.title),
                item.links.map(function (linkItem) { return (react_1["default"].createElement("a", { href: linkItem.href }, linkItem.label)); }),
                react_1["default"].createElement("div", { className: "cover-block " + (index === currentIndex ? "footer-anim-fade-in" : "footer-anim-fade-out") }))); })),
            react_1["default"].createElement("div", { className: "footer-mark" },
                react_1["default"].createElement("h2", null,
                    " Piatko Serhii | ",
                    new Date().getFullYear())))));
};
exports["default"] = Footer;
