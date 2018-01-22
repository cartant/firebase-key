/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */
/*tslint:disable:no-unused-expression*/

import { expect } from "chai";
import { decode } from "./key";

describe("firebase-key", () => {

    describe("decode", () => {

        it("should decode encoded components", () => {

            expect(decode("!2F!2E!24!5B!5D!23")).to.equal("/.$[]#");
        });

        it("should decode the escape character", () => {

            expect(decode("!21")).to.equal("!");
        });
    });
});
