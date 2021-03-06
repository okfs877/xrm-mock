"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attribute_mock_1 = require("../attribute/attribute.mock");
var DateAttributeMock = /** @class */ (function (_super) {
    __extends(DateAttributeMock, _super);
    function DateAttributeMock(components) {
        return _super.call(this, DateAttributeMock.defaultComponents(components)) || this;
    }
    DateAttributeMock.create = function (name, value) {
        return new DateAttributeMock({ name: name, value: value });
    };
    DateAttributeMock.defaultComponents = function (components) {
        if (!components.format) {
            components.format = "date";
        }
        return components;
    };
    DateAttributeMock.prototype.getFormat = function () {
        return _super.prototype.getFormat.call(this);
    };
    return DateAttributeMock;
}(attribute_mock_1.AttributeMock));
exports.DateAttributeMock = DateAttributeMock;
//# sourceMappingURL=dateattribute.mock.js.map