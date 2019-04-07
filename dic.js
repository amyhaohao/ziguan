var words = [
	
  ["麻烦，复杂","形","ややこしい"],
["隐藏","动2","隠れる(かくれる)"],
["原形","名","正体(しょうたい)"],
["总是","副","常に(つねに)"],
["觉醒","动2","目覚める(めざめる)"],
["边际","名","果て(はて)"],
["灵魂","名","魂(たましい)"],
["解开","动2","解ける(とける)"],



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
