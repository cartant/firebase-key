/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/firebase-key
 */
/*tslint:disable:no-unused-expression*/

import { expect } from "chai";
import { repeat } from "./text-repeat";

describe("firebase-key", () => {
  describe("repeat", () => {
    it("should repeat a string", () => {
      expect(repeat("ab", 0)).to.equal("");
      expect(repeat("ab", 1)).to.equal("ab");
      expect(repeat("ab", 2)).to.equal("abab");
      expect(repeat("ab", 3)).to.equal("ababab");
    });
  });
});
