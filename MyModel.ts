module MyModel{
    export interface ITestModel{
        stringVals: string[];
    }
    export const test : ITestModel = {
        stringVals:  ['hello', 'world'],
    };

    export interface IStringGenerator<TObject>{
        (obj: TObject) : string;
    }
}

module MyTest{
    import IStringGenerator = MyModel.IStringGenerator;

    export const test : IStringGenerator<MyModel.ITestModel> = obj => `
        <ul>${
            obj.stringVals.map(s => `
                <li>${s}</li>
            `).join('')
        }
        </ul>
    `;
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
    function repeat<T>(arr: T[], fn: (t: T) => string){
        return arr.map(fn).join('');
    }
    export const test2: IStringGenerator<MyModel.ITestModel> = obj => {
        return `
            <ul>${repeat(obj.stringVals, sV =>`
                <li>
                    ${sV}
                </li>
                `)}
            </ul>
            `;
    }


}
