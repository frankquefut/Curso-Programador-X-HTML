function a() {
    return a.b.c;
}

function b() {
    a();
}


function c() {
    b();
}

c();

// Uncaught TypeError: Cannot read properties of undefined (reading 'c')
//     at a (<anonymous>:2:16)
//     at b (<anonymous>:6:5)
//     at c (<anonymous>:11:5)
//     at <anonymous>:14:1