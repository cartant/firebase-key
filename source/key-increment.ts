/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */

import { alphabet } from "./key-alphabet";
import { repeat } from "./text-repeat";

export function increment(key: string): string {

    return key.replace(/[^z]z*$/, (match) => {

        const index = alphabet.indexOf(match.charAt(0));
        if (index === -1) {
            throw new Error(`Unexpected character '${match.charAt(0)}'.`);
        }
        return alphabet.charAt(index + 1) + repeat("-", match.length - 1);
    });
}
