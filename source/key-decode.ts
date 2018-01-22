/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */

export function decode(component: string): string {

    return component.replace(/!([0-9a-f]{2})/gi, (match, code) => String.fromCharCode(parseInt(code, 16)));
}
