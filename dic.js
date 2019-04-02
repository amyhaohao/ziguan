var words = [
	
  ["独当一面","","一人前になる(いちにんまえになる)"],
["应该做的事","","すべきこと/やるべきこと"],
["已经","副","すでに"],


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
