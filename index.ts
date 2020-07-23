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

export function hashInt(x: number) {
    // tslint:disable:no-bitwise
    const HASH = new Uint32Array(1);
    HASH[0] = x | 0;
    HASH[0] -= HASH[0] << 6;
    HASH[0] ^= HASH[0] >>> 17;
    HASH[0] -= HASH[0] << 9;
    HASH[0] ^= HASH[0] << 4;
    HASH[0] -= HASH[0] << 3;
    HASH[0] ^= HASH[0] << 10;
    HASH[0] ^= HASH[0] >>> 15;
    return HASH[0];
    // tslint:enable
  }