/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */
/*tslint:disable:no-unused-expression*/

import { expect } from "chai";
import { decodeLexicographic } from "./key";

describe("firebase-key", () => {
  describe("decodeLexicographic", () => {
    it("should decode positive values", () => {
      expect(decodeLexicographic("a-")).to.equal(0);
      expect(decodeLexicographic("a0")).to.equal(1);
      expect(decodeLexicographic("a9")).to.equal(10);
      expect(decodeLexicographic("b0Z")).to.equal(100);
      expect(decodeLexicographic("bEc")).to.equal(1000);
    });

    it("should decode negative values", () => {
      expect(decodeLexicographic("Zy")).to.equal(-1);
      expect(decodeLexicographic("Zp")).to.equal(-10);
      expect(decodeLexicographic("YyQ")).to.equal(-100);
      expect(decodeLexicographic("YkM")).to.equal(-1000);
    });
  });
});
