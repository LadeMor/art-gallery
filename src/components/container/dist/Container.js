"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Container.scss");
var Container = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: "container" },
        react_1["default"].createElement("div", { className: "main-wrapper" }, children)));
};
exports["default"] = Container;
