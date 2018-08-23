// // iterator example

function nameIterator(names) {
  let nextIndex = 0;
  return {
    next: function(){
      return nextIndex < names.length ?
      { value: names[nextIndex++], done: false } :
      { done: true}
    }
  }
}

// create an array of names
const namesArray = ['Jack', 'Jill', 'John'];

// initialize iterator and pass in the names array

const names = nameIterator(namesArray);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);


// Generator example

function* sayNames (){
  yield 'jack';
  yield 'jill';
  yield 'john';
}

const name = sayNames();
// console.log(name.next().value);

// ID creator
function* createIds(){
  let index = 0;
  while(true){
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);