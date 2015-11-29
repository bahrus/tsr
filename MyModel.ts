///<reference path='tsr.ts'/>

module MyModel{
    export interface ITestModel{
        stringVals?: string[];
        boolVal?: boolean;
    }
    export const test : ITestModel = {
        stringVals:  ['hello', 'world'],
        boolVal: true,
    };


}

module MyTest{


    export const test : tsr.IStringGenerator<MyModel.ITestModel> = obj => `
        <ul>${
            obj.stringVals.map(s => `
                <li>${s}</li>
            `).join('')
        }
        </ul>
    `;


    export const test2: tsr.IStringGenerator<MyModel.ITestModel> = obj => {
        return `
            <ul>                    ${tsr.repeat(obj.stringVals, sV =>`
                <li>${sV}</li>      `)}
            </ul>
            <table>
                <tr>                ${tsr.when(() => obj.boolVal, () => `
                    <td>iah</td>    `, () => `
                    <td>yat</td>    `)}
                </tr>
            </table>
            <table>
                <tr>                ${tsr.when(obj.boolVal, `
                    <td>foo</td>    `, `
                    <td>bar</td>    `)}
                </tr>
            </table>

            `;
    }



}
