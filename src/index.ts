import intersection from 'lodash/intersection';
import {sample1, sample2} from '../test/mocks/sample';


/**
 *
 *
 * @template T
 * @param {...Array < Array < T >>} arrays
 * @returns {Promise < Array < T >>}
 */
async function intersectionOf < T > ( ...arrays: Array < Array < T >> ): Promise < Array < T >> {
  return await intersectionOfSync(...arrays);

}



export default intersectionOf;

/**
 *
 *
 * @export
 * @template T
 * @param {...Array < Array < T >>} arrays
 * @returns {Array < T >}
 */
export function intersectionOfFunctional < T > ( ...arrays: Array < Array < T >> ): Array < T > {
  const cache = [];
  return arrays.reduce( ( previousArray: Array < T > , currentArray: Array < T > ) => {
    const intersection = new Set( [ ...( new Set( previousArray ) ) ].filter( x => new Set( currentArray ).has( x ) ) );
    return Array.from( intersection );
  } )

}

/**
 *
 *
 * @export
 * @template T
 * @param {...Array < Array < T >>} arrays
 * @returns {Array < T >}
 */
export function intersectionOfSync < T > ( ...arrays: Array < Array < T >> ): Array < T > {
  let result: Array < T >= [];
  let length = arrays[ 0 ].length;
  let arrLength = arrays.length;
  let lastIndex = arrLength;
  let caches: Array<Set<T>> = Array( arrLength );
  let maxLength = Infinity;

  // Max length will be the smallest arrayLength we need to traverse
  while ( lastIndex-- ) {
    var array = arrays[ lastIndex ];
    maxLength = Math.min( array.length, maxLength );
    if ( array.length >= 120 && array.length >= 120 ) {
      caches[ lastIndex ] = new Set( array )
    }
  }

    array = arrays[ 0 ];
    let seen = caches[ 0 ],
    index = -1;

  outer: while ( ++index < length && result.length < maxLength ) {
    let value = array[ index ];

    if ( !(seen
      ? seen.has(value)
      : result.includes(value)
    ) ) {
      lastIndex = arrLength;


      while ( --lastIndex ) {
        var cache = caches[ lastIndex ];
        if ( !( cache ?
            cache.has( value ) :
            arrays[ lastIndex ].includes( value ) ) ) {
          continue outer;
        }
      }

      if ( seen ) {
        seen.add( value );
      }
      result.push( value );
    }
  }

  return result;

}