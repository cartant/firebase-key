/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */
/*tslint:disable:no-unused-expression*/

import { expect } from "chai";
import { encode } from "./key";

describe("firebase-key", () => {
  describe("encode", () => {
    it("should encode components", () => {
      expect(encode("/.$[]#")).to.equal("!2F!2E!24!5B!5D!23");
    });

    it("should encode the escape character", () => {
      expect(encode("!")).to.equal("!21");
    });
  });
});
