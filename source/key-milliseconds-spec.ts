/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */
/*tslint:disable:no-unused-expression*/

import { expect } from "chai";
import { milliseconds } from "./key";

describe("firebase-key", () => {

    describe("milliseconds", () => {

        it("should return the key's timestamp portion as an epoch", () => {

            expect(milliseconds("-KKuid1F000000000000")).to.equal(1466642894992);
        });
    });
});
