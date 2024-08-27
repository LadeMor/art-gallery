"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.PrevArrow = exports.NextArrow = void 0;
var next_svg_1 = require("../../assets/icons/slider-controll/next.svg");
var prev_svg_1 = require("../../assets/icons/slider-controll/prev.svg");
exports.NextArrow = function (props) {
    var className = props.className, style = props.style, onClick = props.onClick;
    return (React.createElement("img", { className: className, style: __assign({}, style), onClick: onClick, src: next_svg_1["default"] }));
};
exports.PrevArrow = function (props) {
    var className = props.className, style = props.style, onClick = props.onClick;
    return (React.createElement("img", { className: className, style: __assign({}, style), onClick: onClick, src: prev_svg_1["default"] }));
};
