/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */

/**
 * @see http://stackoverflow.com/a/5450113/6680611
 */
export function repeat(text: string, count: number): string {
  let result = "";

  if (typeof text.repeat === "function") {
    result = text.repeat(count);
  } else {
    /*tslint:disable:no-bitwise*/
    if (count > 0) {
      while (count > 1) {
        if (count & 1) {
          result += text;
        }
        count >>= 1;
        text += text;
      }
      result = result + text;
    }
    /*tslint:enable:no-bitwise*/
  }
  return result;
}
