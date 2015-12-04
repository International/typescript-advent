/// <reference path="../typings/mocha/mocha.d.ts" />
import {detect_level} from '../challenges/1';

describe('level_calculation', () => {

  it('(()) and ()() should be 0', () => {
    var detected_1:number = detect_level('(())');
    if(detected_1 != 0) {
      throw new Error("expected detection to be 1");
    }
  });
});
