/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-key
 */
/*tslint:disable:no-unused-expression*/

import { expect } from "chai";
import { key, resetLastTimestamp } from "./key";

describe("firebase-key", () => {

    describe("key", () => {

        beforeEach(() => {

            // Reset the internal guard that prevents identical, consecutive
            // keys from being generated.

            resetLastTimestamp();
        });

        it("should return the key for a Date", () => {

            expect(key(new Date(1466642894992), "min")).to.equal("-KKuid1F------------");
        });

        it("should return the key for an epoch", () => {

            expect(key(1466642894992, "min")).to.equal("-KKuid1F------------");
        });

        it("should support 'max'", () => {

            expect(key(1466642894992, "max")).to.equal("-KKuid1Fzzzzzzzzzzzz");
        });

        it("should support 'random'", () => {

            expect(key(1466642894992)).to.match(/^-KKuid1F[-_0-9A-Za-z]{12}$/);
            expect(key(1466642894992)).to.not.match(/^-KKuid1F(------------|zzzzzzzzzzzz)$/);

            expect(key(1466642894992, "random")).to.match(/^-KKuid1F[-_0-9A-Za-z]{12}$/);
            expect(key(1466642894992, "random")).to.not.match(/^-KKuid1F(------------|zzzzzzzzzzzz)$/);
        });

        it("should default to the current time", () => {

            expect(key()).to.match(/^[-_0-9A-Za-z]{20}$/);
        });

        it("should not repeat keys", () => {

            const first = key();
            const second = key();
            const third = key();

            expect(first < second).to.be.true;
            expect(first < third).to.be.true;
            expect(second < third).to.be.true;
        });
    });
});
