// Adds reverse to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join('');
};

// // return true if a string is empty or consists solely
// // of whitespace characters
// String.prototype.blank = function() {
//   return !!this.match(/^\s*$/g);
// };

// return the last element of an array
Array.prototype.last = function() {
  return this[this.length-1];
};

// breaks an email into parts
const emailParts = (email) => {
  return email.toLowerCase().split('@');
};

// defines a phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function processor(string) {
    return string.toLowerCase();
  };

  // returns content ready for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  };
  
  // returns true if the phrase is a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };

  this.louder = function louder() {
    return this.content.toUpperCase();
  };
};

// // defines a TranslatedPhrase object
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;

//   // returns content ready for palindrome testing
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   };
// };

// // Set the prototype of the seconde object equal to the first
// // so it can inherit its properties
// TranslatedPhrase.prototype = new Phrase();
