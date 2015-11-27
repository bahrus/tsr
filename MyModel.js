///<reference path='tsr.ts'/>
var MyModel;
(function (MyModel) {
    MyModel.test = {
        stringVals: ['hello', 'world'],
        boolVal: false
    };
})(MyModel || (MyModel = {}));
var MyTest;
(function (MyTest) {
    MyTest.test = function (obj) { return ("\n        <ul>" + obj.stringVals.map(function (s) { return ("\n                <li>" + s + "</li>\n            "); }).join('') + "\n        </ul>\n    "); };
    MyTest.test2 = function (obj) {
        return "\n            <ul>                    " + tsr.repeat(obj.stringVals, function (sV) { return ("\n                <li>" + sV + "</li>      "); }) + "\n            </ul>\n            <table>\n                <tr>                " + tsr.when(function () { return obj.boolVal; }, function () { return "\n                    <td>iah</td>    "; }, function () { return "\n                    <td>yat</td>    "; }) + "\n                </tr>\n            </table>\n            ";
    };
})(MyTest || (MyTest = {}));
//# sourceMappingURL=MyModel.js.map