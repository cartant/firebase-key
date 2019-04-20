/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */

export function encode(component: string): string {
  // Note that exclamation marks are used. The standard encoding mechansim
  // that uses percentage characters doesn't play nice with the REST URLs
  // and the Firebase console (at least) breaks.

  return component.replace(
    /[\/\.\$\[\]#!]/g,
    match =>
      `!${match
        .charCodeAt(0)
        .toString(16)
        .toUpperCase()}`
  );
}
