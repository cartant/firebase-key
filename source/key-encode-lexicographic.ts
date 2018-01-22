/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */

import { alphabet } from "./key-alphabet";

/**
 * @see https://github.com/firebase/firepad/blob/v1.4.0/lib/firebase-adapter.js#L375-L403
 * @see http://www.zanopha.com/docs/elen.pdf
 */
export function encodeLexicographic(value: number): string {

    let result = "";

    if (value === 0) {
        result = "a-";
    } else if (value > 0) {
        while (value > 0) {
            const digit = (value % alphabet.length);
            result = alphabet.charAt(digit) + result;
            value -= digit;
            value /= alphabet.length;
        }
        const prefix = alphabet.charAt(result.length + 37);
        result = prefix + result;
    } else {
        value = -value;
        while (value > 0) {
            const digit = (value % alphabet.length);
            result = alphabet.charAt(alphabet.length - 1 - digit) + result;
            value -= digit;
            value /= alphabet.length;
        }
        const prefix = alphabet.charAt(37 - result.length);
        result = prefix + result;
    }
    return result;
}
