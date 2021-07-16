const a = [60, 40, 55, 75, 64];
var b = 0;
var c = 0;
    for(let i = 0; i<a.length;i++){
        if (i % 2 == 0 ){
            b+= a[i];
        }else{
            c+= a[i];
        }
    }
console.log(b);
console.log(c);
