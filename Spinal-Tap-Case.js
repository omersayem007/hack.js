function spinalCase(str) {
  
  var newstr=str.split("").map( (x)=> x===" " || x==="_"  ? "-" :x ); 
 //return newstr.map( (x)=> x.charCodeAt() >= 65 &&  x.charCodeAt() <= 90 ? x.toLowerCase():x).join("");
 return newstr.join("");
 
}

spinalCase("AllThe-small Things");

// Lodash implimentation 

var _ = require('lodash');

function kababCase(str) {
  
  return _.kebabCase(str);
  
}

kababCase("AllThe-small Things");
