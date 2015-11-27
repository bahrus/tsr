module tsr{

    export interface IStringGenerator<TObject>{
        (obj: TObject) : string;
    }

    export function repeat<T>(arr: T[], fn: (t: T) => string){
        return arr.map(fn).join('');
    }

    export function when<T>(fnTest: () => boolean, fnTrue: () => string, fnFalse?: () => string){
        if(fnTest()){
            return fnTrue();
        }else if(fnFalse){
            return fnFalse();
        }else{
            return '';
        }
    }
}
