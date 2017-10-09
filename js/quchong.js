//数组去重
//1)
Array.prototype.unnum=function(){
    this.sort();
    var res=[this[0]];
    for(var i=0;i<this.length;i++){
        if(this[i]!==res[res.length-1]){
            res.push(this[i]);
        }
    }
    return res;
};


var arr=[1,'w','a','f','f','w',1];
console.log(arr.unnum());


//2)
