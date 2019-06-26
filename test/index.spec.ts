import {
  expect
} from 'chai';
import {
  sample1,
  sample2,
  expected
} from './mocks/sample';
import intersectionOf from '../src/index';

describe( "Intersection Of", () => {
  describe( "Should return array of common elements", () => {
    it( "Should return expected result", async function () {
      let result = await intersectionOf( sample1, sample2 );
      await expect( result ).to.members( expected );
    } );
  } )
} );

describe( "Intersection Of", () => {

  describe( "Should return array of common elements", () => {
    let array1: Array<number>;
    let array2: Array<number>;

    before( () => {
       array1 = [1,2,4,3,2, 67, 98];
       array2 = [1,2,4,3,2, 67, 34, 23];
    } );

    it( "Should return expected result", async function () {
      let result = await intersectionOf(array1, array2);
      await expect( result ).to.members( [1,2,4,3, 67] );
    } );
  } )
} );