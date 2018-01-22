/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */
/*tslint:disable:no-unused-expression*/

import { expect } from "chai";
import { randomString } from "./text-random-string";

describe("firebase-key", () => {

    describe("randomString", () => {

        it("should generate a random string", () => {

            const limit = 32;

            for (let i = 1; i < limit; ++i) {

                const text = randomString("ab", i);
                expect(typeof text).to.equal("string");
                expect(text.length).to.equal(i);

                const regExp = new RegExp(`[ab]{${i}}`);
                expect(text).to.match(regExp);
            }
        });
    });
});
