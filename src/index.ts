import _intersection from 'lodash.intersection';
import _intersectionBy from 'lodash.intersectionby';
import _intersectionWith from 'lodash.intersectionwith';
const memoize = require('fast-memoize');
import SlimCache from 'slim-cache';

 /**
  *
  *
  * @template T
  * @param {...Array < Array < T >>} arrays
  * @returns {Promise < Array < T >>}
  */
 async function $intersectionOf < T > ( ...arrays: Array < Array < T >> ): Promise < Array < T >>;

/**
 *
 *
 * @template T
 * @param {...Array < Array < T >>} arrays
 * @returns {Promise < Array < T >>}
 */
 async function $intersectionOf < T > ( ...arrays: Array < Array < T >> ): Promise < Array < T >> {
  return $intersectionOfSync(...arrays);
}



/**
 *
 *
 * @export
 * @template T
 * @param {...Array < Array < T >>} arrays
 * @returns {Array < T >}
 */
 function $intersectionOfFunctionalSync < T > ( ...arrays: Array < Array < T >> ): Array < T > {
  return arrays.reduce( ( previousArray: Array < T > , currentArray: Array < T > ) => {
    const intersection = new Set( [ ...( new Set( previousArray ) ) ].filter( x => new Set( currentArray ).has( x ) ) );
    return Array.from( intersection );
  } )

}


 /**
  *
  *
  * @template T
  * @param {...Array < Array < T >>} arrays
  * @returns {Promise<Array < T >>}
  */
 async function $intersectionOfFunctional < T > ( ...arrays: Array < Array < T >> ): Promise<Array < T >> {
  const cache = [];
  return arrays.reduce( ( previousArray: Array < T > , currentArray: Array < T > ) => {
    const intersection = new Set( [ ...( new Set( previousArray ) ) ].filter( x => new Set( currentArray ).has( x ) ) );
    return Array.from( intersection );
  } )

}

  /**
   *
   *
   * @template T
   * @param {...Array < Array < T >>} arrays
   * @returns {Array < T >}
   */
  function $intersectionOfSync < T > ( ...arrays: Array < Array < T >> ): Array < T >;

/**
 *
 *
 * @export
 * @template T
 * @param {...Array < Array < T >>} arrays
 * @returns {Array < T >},
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 */
 function $intersectionOfSync < T > ( ...arrays: Array < Array < T >> ): Array < T > {
  return _intersection(...arrays) as Array<T>;
}

const cache = { create: () => new SlimCache() };

export const intersectionOfSync = memoize($intersectionOfSync, {cache}) as typeof $intersectionOfSync;
export const intersectionOf = memoize($intersectionOf, {cache}) as typeof $intersectionOf;
export const intersectionOfFunctional = memoize($intersectionOfFunctional, {cache}) as typeof $intersectionOfFunctional;

export const intersectionOfFunctionalSync = memoize($intersectionOfFunctionalSync, {cache}) as typeof $intersectionOfFunctionalSync;

export default  {
  intersectionOf,
  intersectionOfSync,
  intersectionOfFunctional,
  intersectionOfFunctionalSync
};