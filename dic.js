var words = [
	
   ["零花钱", "", "小遣い(こづかい)"],
  
["府上", "名", "お宅(おたく)"],
   
["戏弄", "动1", "からかう"],
   
["迷恋，爱慕", "动2", "ほれる"],
  
 ["乡下", "名", "田舎(いなか)"],
  
 ["凄惨", "名", "惨め(みじめ)"],
   
["媳妇", "名", "嫁(よめ)"],
   
["赚钱", "动1", "稼ぐ(かせぐ)"],
  

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
