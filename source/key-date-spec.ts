/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-key
 */
/*tslint:disable:no-unused-expression*/

import { expect } from "chai";
import { date } from "./key";

describe("firebase-key", () => {

    describe("date", () => {

        it("should return the key's timestamp portion as a Date", () => {

            expect(date("-KKuid1F000000000000").getTime()).to.equal(1466642894992);
        });
    });
});
