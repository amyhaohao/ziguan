var words = [
	
   ["", "", ""],
   ["", "", ""],
   ["渴", "", "喉が渇く(のどがかわく)"],
    //    ["", "", ""],
//    ["", "", ""],
//    ["", "", ""],
//    ["", "", ""],
    //    ["", "", ""],
//    ["", "", ""],
//    ["", "", ""],
//    ["", "", ""],

]

var cats = {};
words.forEach(function(a){
    var c = a[1];
    if(!cats[c])
        cats[c] = [];
    cats[c].push(a);
})

try {
    module.exports = {
  length: words.length,
  words,
  cats
}
}catch(e){
    
}
