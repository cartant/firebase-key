/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-key
 */

import { alphabet } from "./key-alphabet";

export function milliseconds(key: string): number {

    let result = 0;

    for (let i = 0; i < 8; ++i) {
        const index = alphabet.indexOf(key.charAt(i));
        if (index === -1) {
            throw new Error(`Unexpected character '${key.charAt(i)}'.`);
        }
        result = (result * 64) + index;
    }
    return result;
}
