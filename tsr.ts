module tsr{

    export interface IStringGenerator<TObject>{
        (obj: TObject) : string;
    }

    export function repeat<T>(arr: T[], fn: (t: T) => string){
        return arr.map(fn).join('');
    }
}
