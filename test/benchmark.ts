import Benchmark from 'benchmark';
const suite = new Benchmark.Suite;
import Chalk from 'chalk';

import _intersection from 'lodash.intersection';
import {intersectionOfSync} from '../src/index';
import {
  sample1,
  sample2,
  expected,
  expected2,
  sampleData3,
  sampleData4
} from './mocks/sample';

// add tests
suite.add('Lodash#intersection', function() {
  _intersection(sampleData3, sampleData4);
})
.add('IntersectionOfSync', function() {
  intersectionOfSync(sampleData3, sampleData4);
})
// add listeners
.on('cycle', function(event: Benchmark.Event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log(Chalk.green('Fastest is ' + suite.filter('fastest').map((elm: any )=> elm.name)));
})
// run async
.run({ 'async': true });