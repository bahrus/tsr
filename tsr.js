var tsr;
(function (tsr) {
    function repeat(arr, fn) {
        return arr.map(fn).join('');
    }
    tsr.repeat = repeat;
})(tsr || (tsr = {}));
//# sourceMappingURL=tsr.js.map