/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */
/*tslint:disable:no-unused-expression*/

import { expect } from "chai";
import { decrement, encodeLexicographic, increment } from "./key";

describe("firebase-key", () => {

    describe("encodeLexicographic", () => {

        it("should encode positive values", () => {

            expect(encodeLexicographic(0)).to.equal("a-");
            expect(encodeLexicographic(1)).to.equal("a0");
            expect(encodeLexicographic(10)).to.equal("a9");
            expect(encodeLexicographic(100)).to.equal("b0Z");
            expect(encodeLexicographic(1000)).to.equal("bEc");
        });

        it("should order positive values", () => {

            expect(encodeLexicographic(0) < encodeLexicographic(1)).to.be.true;
            expect(encodeLexicographic(1) < encodeLexicographic(10)).to.be.true;
            expect(encodeLexicographic(10) < encodeLexicographic(100)).to.be.true;
            expect(encodeLexicographic(100) < encodeLexicographic(1000)).to.be.true;
        });

        it("should encode negative values", () => {

            expect(encodeLexicographic(-1)).to.equal("Zy");
            expect(encodeLexicographic(-10)).to.equal("Zp");
            expect(encodeLexicographic(-100)).to.equal("YyQ");
            expect(encodeLexicographic(-1000)).to.equal("YkM");
        });

        it("should order negative values", () => {

            expect(encodeLexicographic(-1000) < encodeLexicographic(-100)).to.be.true;
            expect(encodeLexicographic(-10) < encodeLexicographic(-1)).to.be.true;
            expect(encodeLexicographic(-1) < encodeLexicographic(0)).to.be.true;
        });

        it("should be decrementable", () => {

            const key = encodeLexicographic(1);
            expect(decrement(key) < key).to.be.true;
        });

        it("should be incrementable", () => {

            const key = encodeLexicographic(1);
            expect(increment(key) > key).to.be.true;
        });
    });
});
