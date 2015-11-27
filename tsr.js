var tsr;
(function (tsr) {
    function repeat(arr, fn) {
        return arr.map(fn).join('');
    }
    tsr.repeat = repeat;
    function when(fnTest, fnTrue, fnFalse) {
        if (fnTest()) {
            return fnTrue();
        }
        else if (fnFalse) {
            return fnFalse();
        }
        else {
            return '';
        }
    }
    tsr.when = when;
})(tsr || (tsr = {}));
//# sourceMappingURL=tsr.js.map