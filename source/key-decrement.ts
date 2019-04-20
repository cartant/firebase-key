/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */

import { alphabet } from "./key-alphabet";
import { repeat } from "./text-repeat";

export function decrement(key: string): string {
  return key.replace(/[^-]-*$/, match => {
    const index = alphabet.indexOf(match.charAt(0));
    if (index === -1) {
      throw new Error(`Unexpected character '${match.charAt(0)}'.`);
    }
    return alphabet.charAt(index - 1) + repeat("z", match.length - 1);
  });
}
