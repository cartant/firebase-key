/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */
/*tslint:disable:no-unused-expression*/

import { expect } from "chai";
import { increment } from "./key";

describe("firebase-key", () => {
  describe("increment", () => {
    it("should increment a key", () => {
      expect(increment("-KKkyYoaSgBLxwg1q1sc")).to.equal(
        "-KKkyYoaSgBLxwg1q1sd"
      );
      expect(increment("-KKkyYoaSgBLxwg1q1sz")).to.equal(
        "-KKkyYoaSgBLxwg1q1t-"
      );
      expect(increment("-KKkyYoaSgBLxwg1q1zz")).to.equal(
        "-KKkyYoaSgBLxwg1q2--"
      );
    });
  });
});
