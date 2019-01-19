var words = [
	
   ["", "", ""],
   ["", "", ""],
   ["渴", "", "喉が渇く(のどがかわく)"],
   ["第二天", "名", "翌日(よくじつ)"],
   ["突然，冷不防", "副", "いきなり"],
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
