/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/should/should.d.ts" />
//
import {detect_level} from '../challenges/1';
import should = require("should");
var persist = should;

describe('level_calculation', () => {

  it('(()) and ()() should be 0', () => {
    var detected_1:number = detect_level('(())');
    detected_1.should.equal(0);

    var detected_2:number = detect_level('()()');
    detected_2.should.equal(0);
  });
});
