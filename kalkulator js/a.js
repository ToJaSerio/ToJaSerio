const a = function add() {
  let checkA = 0;

  return function() {
    return checkA = checkA + 2;
  };
};

const i = a()

console.log(i());

// zadanie :)