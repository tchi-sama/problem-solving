var inorderTraversal = function*(arr) {
    yield i=0;
    return arr.flat(10)[ i++]
};

  const gen = inorderTraversal([1, [2, 3]]);

  console.log(gen.next().value )
  console.log(gen.next().value )
  console.log(gen.next().value )