const BinarySearchTree = require('./bst')

const makeBST = () => {
  const bst = new BinarySearchTree()
  bst.insert('E', 'foo')
  bst.insert('A', 'bar')
  bst.insert('S', 'bing')
  bst.insert('Y', 'bang')
  return bst
}

test('bst - breadth first', () => {
  const bst = makeBST()
  const values = bst.bfs()
  console.log(values)
  expect(values).toEqual(['foo', 'bar', 'bing', 'bang'])
})

test('bst - the first node on the right is value bing', () => {
  const bst = makeBST()
  const values = bst.dfs()
  console.log(values)
  expect(values).toBe(['bar', 'bang', 'bing', 'foo'])
})

test('bst - the first node on the right is value bing', () => {
  const bst = makeBST()
  expect(bst.right.value).toBe('bing')
})
