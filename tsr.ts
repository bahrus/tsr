module tsr{
    type stringFn = () => string;
    type boolFn = () => boolean;
    type stringOrStringFn = string | stringFn;
    type boolOrBoolFn = boolean | boolFn;
    export interface IStringGenerator<TObject>{
        (obj: TObject) : string;
    }

    export function repeat<T>(arr: T[], fn: (t: T) => string){
        return arr.map(fn).join('');
    }

    export function when(testExpr: boolOrBoolFn, trueExpr: stringOrStringFn, falseExpr?: stringOrStringFn) : string{
        let boolTest = false;
        if(typeof testExpr === 'boolean'){
            boolTest = testExpr;
        }else if(typeof testExpr === 'function'){
            boolTest = testExpr();
        }
        if(boolTest){
            if(typeof trueExpr === 'string'){
                return trueExpr;
            }else{
                if(typeof trueExpr === 'function'){
                    return trueExpr();
                }

            }

        }else if(falseExpr){
            if(typeof falseExpr === 'string'){
                return falseExpr;
            }else{
                if(typeof falseExpr === 'function'){
                    return falseExpr();
                }
            }
        }
        return '';
    }


}
