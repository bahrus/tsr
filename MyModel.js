var MyModel;
(function (MyModel) {
    MyModel.test = {
        stringVals: ['hello', 'world']
    };
})(MyModel || (MyModel = {}));
var MyTest;
(function (MyTest) {
    MyTest.test = function (obj) { return ("\n        <ul>" + obj.stringVals.map(function (s) { return ("\n                <li>" + s + "</li>\n            "); }).join('') + "\n        </ul>\n    "); };
    //interface Function extends FunctionConstructor{
    //    method(name, func);
    //}
    //Function.prototype['method'] = function(name, func){
    //    this.prototype[name] = func;
    //    return this;
    //}
    //Array.prototype['repeat'] = function(a, b, c){
    //    const _this = this;
    //    debugger;
    //};
    function repeat(arr, fn) {
        return arr.map(fn).join('');
    }
    MyTest.test2 = function (obj) {
        return "\n            <ul>" + repeat(obj.stringVals, function (sV) { return ("\n                <li>\n                    " + sV + "\n                </li>\n                "); }) + "\n            </ul>\n            ";
    };
})(MyTest || (MyTest = {}));
//# sourceMappingURL=MyModel.js.map