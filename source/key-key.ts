/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */

import { alphabet } from "./key-alphabet";
import { randomString } from "./text-random-string";

let lastTimestamp = 0;

export type KeyAs = "max" | "min" | "random";

/**
 * @see https://gist.github.com/mikelehen/3596a30bd69384624c11
 */
export function key(timestamp?: number | Date, as?: KeyAs): string {

    if (timestamp === undefined) {
        timestamp = Date.now();
        if (timestamp <= lastTimestamp) {
            timestamp = lastTimestamp + 1;
        }
        lastTimestamp = timestamp;
    }

    if (timestamp instanceof Date) {
        timestamp = timestamp.getTime();
    }

    let result = new Array(9);
    for (let i = 7; i >= 0; --i) {
        result[i] = alphabet.charAt(timestamp % 64);
        timestamp = Math.floor(timestamp / 64);
    }
    if (timestamp !== 0) {
        throw new Error("Unexpected timestamp.");
    }

    switch (as) {
    case "max":
        result[8] = "zzzzzzzzzzzz";
        break;
    case "min":
        result[8] = "------------";
        break;
    default:
        result[8] = randomString(alphabet, 12);
    }
    return result.join("");
}

export function resetLastTimestamp(): void {

    lastTimestamp = 0;
}
