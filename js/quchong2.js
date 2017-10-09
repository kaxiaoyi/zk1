/**
 * Created by Administrator on 2017/10/9.
 */
Array.prototype.unnum2=function(){
    var res=[this[0]];
    for(var i=0;i<this.length;i++){
        var repeat=false;
        for(var j=0;j<res.length;j++){
            if(this[i]==res[j]){
                repeat=true;
                break;
            }
        }
        if(!repeat){
            res.push(this[i]);
        }
    }
    return res;
};


var arr2=[1,'w','a','f','f','w',1];
console.log(arr2.unnum2());