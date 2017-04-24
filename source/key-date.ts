/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-key
 */

import { milliseconds } from "./key-milliseconds";

export function date(key: string): Date {

    return new Date(milliseconds(key));
}
