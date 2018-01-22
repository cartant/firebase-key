/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */
/*tslint:disable:no-unused-expression*/

import { expect } from "chai";
import { decrement } from "./key";

describe("firebase-key", () => {

    describe("decrement", () => {

        it("should decrement a key", () => {

            expect(decrement("-KKkyYoaSgBLxwg1q1sc")).to.equal("-KKkyYoaSgBLxwg1q1sb");
            expect(decrement("-KKkyYoaSgBLxwg1q1s-")).to.equal("-KKkyYoaSgBLxwg1q1rz");
            expect(decrement("-KKkyYoaSgBLxwg1q1--")).to.equal("-KKkyYoaSgBLxwg1q0zz");
        });
    });
});
