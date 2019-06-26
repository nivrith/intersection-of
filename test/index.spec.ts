import {
  expect
} from 'chai';
import {
  sample1,
  sample2,
  expected
} from './mocks/sample';
import {intersectionOf, intersectionOfSync, intersectionOfFunctional, intersectionOfFunctionalSync } from '../src/index';

describe( "Intersection Of", () => {
  describe( "Should return an empty array for deep object identity inequality", () => {
    it( "Should return empty array", async function () {
      let result = await intersectionOf( sample1, sample2 );
      await expect( result ).to.members( expected );
    } );
  } )

  describe( "Should return array of common elements", () => {
    let array1: Array<number>;
    let array2: Array<number>;

    before( () => {
       array1 = [1,2,4,3,2, 67, 98];
       array2 = [1,2,4,3,2, 67, 34, 23];
    } );

    it( "Should return [1,2,4,3,67]", async function () {
      let result = await intersectionOf(array1, array2);
      await expect( result ).to.members( [1,2,4,3, 67] );
    } );
  } )

  describe( "Should return Promise", () => {
    let array1: Array<number>;
    let array2: Array<number>;

    before( () => {
       array1 = [1,2,4,3,2, 67, 98];
       array2 = [1,2,4,3,2, 67, 34, 23];
    } );

    it( "Should return [1,2,4,3,67]", function (done) {
      intersectionOf(array1, array2)
      .then((result)=>{
        expect( result ).to.members([1,2,4,3,67]);
        done()
      }).catch((error) => console.error(error))
      .finally();
    } );
  } )

} );

describe( "Intersection Of Sync", () => {
  describe( "Should return an empty array for deep object identity inequality", () => {
    it( "Should return empty array", function () {
      let result = intersectionOfSync( sample1, sample2 );
      expect( result ).to.members( expected );
    } );
  } )

  describe( "Should return array of common elements", () => {
    let array1: Array<number>;
    let array2: Array<number>;

    before( () => {
       array1 = [1,2,4,3,2, 67, 98];
       array2 = [1,2,4,3,2, 67, 34, 23];
    } );

    it( "Should return [1,2,4,3,67]", async function () {
      let result = intersectionOfSync(array1, array2);
      expect( result ).to.members( [1,2,4,3, 67] );
    } );
  } )
} );

describe( "Intersection Of Functional", () => {
  describe( "Should return an empty array for deep object identity inequality", () => {
    it( "Should return empty array", async function () {
      let result = await intersectionOfFunctional( sample1, sample2 );
      expect( result ).to.members( expected );
    } );
  } )

  describe( "Should return array of common elements", () => {
    let array1: Array<number>;
    let array2: Array<number>;

    before( () => {
       array1 = [1,2,4,3,2, 67, 98];
       array2 = [1,2,4,3,2, 67, 34, 23];
    } );

    it( "Should return [1,2,4,3,67]", async function () {
      let result = await intersectionOfFunctional(array1, array2);
      expect( result ).to.members( [1,2,4,3, 67] );
    } );
  } )
} );

describe( "Intersection Of Functional Sync", () => {
  describe( "Should return an empty array for deep object identity inequality", () => {
    it( "Should return empty array", function () {
      let result = intersectionOfFunctionalSync( sample1, sample2 );
      expect( result ).to.members( expected );
    } );
  } )

  describe( "Should return array of common elements", () => {
    let array1: Array<number>;
    let array2: Array<number>;

    before( () => {
       array1 = [1,2,4,3,2, 67, 98];
       array2 = [1,2,4,3,2, 67, 34, 23];
    } );

    it( "Should return [1,2,4,3,67]", function () {
      let result = intersectionOfFunctionalSync(array1, array2);
      expect( result ).to.members( [1,2,4,3, 67] );
    } );
  } )
} );