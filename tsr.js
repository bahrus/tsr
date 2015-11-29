var tsr;
(function (tsr) {
    function repeat(arr, fn) {
        return arr.map(fn).join('');
    }
    tsr.repeat = repeat;
    function when(testExpr, trueExpr, falseExpr) {
        var boolTest = false;
        if (typeof testExpr === 'boolean') {
            boolTest = testExpr;
        }
        else if (typeof testExpr === 'function') {
            boolTest = testExpr();
        }
        if (boolTest) {
            if (typeof trueExpr === 'string') {
                return trueExpr;
            }
            else {
                if (typeof trueExpr === 'function') {
                    return trueExpr();
                }
            }
        }
        else if (falseExpr) {
            if (typeof falseExpr === 'string') {
                return falseExpr;
            }
            else {
                if (typeof falseExpr === 'function') {
                    return falseExpr();
                }
            }
        }
        return '';
    }
    tsr.when = when;
})(tsr || (tsr = {}));
//# sourceMappingURL=tsr.js.map