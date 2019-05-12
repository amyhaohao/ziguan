var words = [
	
  ["无可替代","","かけがえのない"],
["单相思","名","片思い(かたおもい)"],
["撒娇","动2","甘える(あまえる)"],
["行动","名","行動(こうどう)"],
["气息","名","息(いき)"],
["诅咒","名","呪い(のろい)"],
["头绪","名","心あたり"],


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
