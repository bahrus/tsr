///<reference path='tsr.ts'/>
var MyModel;
(function (MyModel) {
    MyModel.test = {
        stringVals: ['hello', 'world']
    };
})(MyModel || (MyModel = {}));
var MyTest;
(function (MyTest) {
    MyTest.test = function (obj) { return ("\n        <ul>" + obj.stringVals.map(function (s) { return ("\n                <li>" + s + "</li>\n            "); }).join('') + "\n        </ul>\n    "); };
    MyTest.test2 = function (obj) {
        return "\n            <ul>" + tsr.repeat(obj.stringVals, function (sV) { return ("\n                <li>\n                    " + sV + "\n                </li>\n                "); }) + "\n            </ul>\n            ";
    };
})(MyTest || (MyTest = {}));
//# sourceMappingURL=MyModel.js.map