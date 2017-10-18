const assert = require('assert')

const p = require('.')

{
  const result = p([[[1,2], [3,4]], [[5,6], [7,8]]])
  assert.deepStrictEqual(result, {
    points: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ],
    edges: [ [ 0, 1 ], [ 2, 3 ] ]
  })
}
