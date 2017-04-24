/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-key
 */

import { alphabet } from "./key-alphabet";

/**
 * @see https://github.com/firebase/firepad/blob/v1.4.0/lib/firebase-adapter.js#L375-L403
 * @see http://www.zanopha.com/docs/elen.pdf
 */
export function decodeLexicographic(key: string): number {

    let value = 0;

    const lengthChar = key.charAt(0);
    if (lengthChar > "_") {

         for (let k = 1; k < key.length; k++) {
            value *= alphabet.length;
            value += alphabet.indexOf(key.charAt(k));
        }

    } else {

        for (let k = 1; k < key.length; k++) {
            value *= alphabet.length;
            value += alphabet.length - 1 - alphabet.indexOf(key.charAt(k));
        }
        value = -value;
    }
    return value;
}
