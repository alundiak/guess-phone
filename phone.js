console.clear()
var a=0, s = 20, i=0, s_local=0;
while (s_local != s){
    i++;
    var r1=Math.floor((Math.random()*10));
    var r2=Math.floor((Math.random()*10));
    var r3=Math.floor((Math.random()*10));
    var r4=Math.floor((Math.random()*10));
    s_local=r1+r2+r3+r4;
    //console.log(s_local);
    if (s_local == s){
        console.log("Phone: 093-11"+r1+"-"+r2+r3+"-"+r3+r4);
        console.log("Iterations: "+i);
    }
}
/*
for (i=0; i<=9; i++){
    a += i;
}
console.log("123467890_SUM"+ a );
*/
