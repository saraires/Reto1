var hojas = "a";
var i = 0;
var x = "";
var ht = 0;
var m = 0;
document.querySelector('h2').innerHTML = arbolito();

Math.random[0, 1];

function arbolito() {

    for (let row = 0; row <= 1; row++) {
        console.log("m" + m);
        i = 0;
        while (i <= m) {                           // i = 1 2 3 4 5 6 
            console.log("i"+i);
            l = 0;
            while ( l < m) {           // l = 
                hojas = Math.round(Math.random());
                x = x + hojas + "";
                l++;                           // l = 4 4 4 4 5 9 9
            }      
            console.log("x" +x);
            
            ht = x
            x = 0
            i++;
            
            
            /* Math.round(Math.random());
            Math.round(Math.random());
            
            */
           //hojas = a 1 1 1 
           /* for (let s = 0; s <= i; s++) {           // s = 0 0 1 2 3 0 1 2 3 0646457465467  
            hojas = hojas + Math.round(Math.random());             //hojas = 1 1 1 1 1 1 1 1 1 
            // x = 010 01010  0101010 10101010 1010101010 101010101010 10101010101010 1010101010101010 101010101010101010 
            console.log (x);
        } */
        // i = 3 6 9
    }
    m = m + 3
}
return ht
}

/* 
while ( l <= m) {           // l = 
    hojas = Math.round(Math.random());
    x = x + hojas + "";
    l++;                           // l = 4 4 4 4 5 9 9
} */