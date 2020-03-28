// tslint:disable-next-line: no-implicit-dependencies
import * as _ from 'lodash';

// tslint:disable-next-line: no-empty
const moreFunctionCode = (text: string) => {}

// tslint:disable-next-line: interface-name
interface BadInterfaceName {
    name: string;
    value: number;
}

export function sampleFunction() {
    // tslint:disable-next-line: no-console
    console.log('Hi everyone');
}

export function interfaceFunction(): BadInterfaceName {
    return {
        name: 'me',
        // tslint:disable-next-line: trailing-comma
        value: 1000
    }
}