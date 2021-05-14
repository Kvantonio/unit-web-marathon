describe("checkBrackets",function(){
    it("NaN", function() {
      assert.equal(checkBrackets(NaN), -1);
    });
    it(")))", function() {
        assert.equal(checkBrackets(')))'), 3);
      });
      it("1)(())", function() {
        assert.equal(checkBrackets('1)(())'), 1);
      });
      it("1)()(())2(()", function() {
        assert.equal(checkBrackets('1)()(())2(()'), 2);
      });
      it(")", function() {
        assert.equal(checkBrackets(')'), 1);
      });
      it("(())()()))", function() {
        assert.equal(checkBrackets('(())()()))'), 2);
      });
      it("((sd((fgh))af)", function() {
        assert.equal(checkBrackets('((sd((fgh))af)'), 1);
      });
      it("(((((s))(asd))waf)", function() {
        assert.equal(checkBrackets('(((((s))(asd))waf)'), 1);
      });
      it("((sd)9fddfsd())f)", function() {
        assert.equal(checkBrackets('((sd)9fddfsd())f)'), 1);
      });
      it("((sd))a)()()()(((d))waf)", function() {
        assert.equal(checkBrackets('((sd))a)()()()(((d))waf)'), 1);
      });
      it("((s99((((((((((((((()))af)", function() {
        assert.equal(checkBrackets('((s99((((((((((((((()))af)'), 13);
      });
      it("(ssfsdfdsfdsfdsfsdfdsf))waf)", function() {
        assert.equal(checkBrackets('(ssfsdfdsfdsfdsfsdfdsf))waf)'), 2);
      });
      it("((((((((((((()()())((((((()))))))))))))))))waf)", function() {
        assert.equal(checkBrackets('((((((((((((()()())((((((()))))))))))))))))waf)'), 0);
      });
      it("((     )waf)'", function() {
        assert.equal(checkBrackets('((     )waf)'),0);
      });
      it("((s--------)))))))sd))waf)", function() {
        assert.equal(checkBrackets('((s--------)))))))sd))waf)'), 8);
      });

      it("null", function() {
        assert.equal(checkBrackets(null), -1);
      });
      it("15", function() {
        assert.equal(checkBrackets(15), -1);
      });
      it("54534231``24654332334455", function() {
        assert.equal(checkBrackets('54534231``24654332334455'), -1);
      });
      it("24969624064024062470862n", function() {
        assert.equal(checkBrackets(24969624064024062470862n), -1);
      });
      it("((((((((((((()()())((((((())))))))))", function() {
        assert.equal(checkBrackets('((((((((((((()()())((((((())))))))))'), 8);
      });
      it("(((((((((er(((()()())eesresr(((()))", function() {
        assert.equal(checkBrackets('(((((((((er(((()()())eesresr(((()))'), 12);
      });
      it("((((((((f()2332355(()()())(((ser((())))))))))", function() {
        assert.equal(checkBrackets('((((((((f()2332355(()()())(((ser((())))))))))'), 4);
      });
      it("((((((((((((()()())(((null(((()))))))))", function() {
        assert.equal(checkBrackets('((((((((((((()()())(((null(((()))))))))'), 9);
      });
      
});


