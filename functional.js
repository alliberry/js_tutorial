let states = ['Kansas', 'Nebraska', 'North Dakota', 'South Dakota'];

// remove upper casing and spacing
const urlify = (string) => {
  return string.toLowerCase().split(/\s+/).join('-');
};

// urls: imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  })
  return urls;
};
console.log(imperativeUrls(states));

// urls: functional version
const functionalUrls = (elements) => {
  return elements.map(element => urlify(element));
};
console.log(functionalUrls(states));

// return an array of urls
const makeUrls = (elements) => {
  return elements.map(element => `https://example.com/${urlify(element)}`);
};
console.log(makeUrls(states));

// single words: imperative version
function imperativeSingles(elements) {
  let singles = []
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    };
  })
  return singles;ß
};
console.log(imperativeSingles(states));

// single words: functional version
const functionalSingles = (elements) => {
  return elements.filter( element => element.split(/\s+/).length === 1 );
};
console.log(functionalSingles(states));

const findDakotas = (elements) => {
  return elements.filter( element => element.toLowerCase().includes('dakota') );
};
console.log(findDakotas(states));

const findDoubleWords = (elements) => {
  return elements.filter( element => element.split(/\s+/).length === 2 );
};
console.log(findDoubleWords(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: imperative version
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
};
console.log(imperativeSum(numbers));

// sum: functional version
const functionalSum = (elements) => {
  return elements.reduce((total, n) => { return total += n }, 0);
};
console.log(functionalSum(numbers));

// product: functional version
const getProduct = (elements) => {
  return elements.reduce((product, element) => {
    product *= element;
    return product;
  }, 1);
};
console.log(getProduct(numbers));

function functionalLengths2(elements) { return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {})}
console.log("no lines" + functionalLengths2(states));

// lengths: imperative version
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
};
console.log(imperativeLengths(states));

// lengths: functional version
const functionalLengths = (elements) => {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
};
console.log(functionalLengths(states));




