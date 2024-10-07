// function add(a,b) {
//     console.log(a+b);
// }

// function multi(a,b) {
//     console.log(a*b);
    
// }

// function calc(a,b,callback) {
//     callback(a,b)
// }

// calc(2,5,add)
// calc(2,5,multi)


//sync

// console.log('Ram')
// console.log(Shiv)
// console.log('SIYARAM')

//async

// console.log(1)
// setTimeout(() => {
//     console.log('RAM')
// }, 2000);
// console.log(3)

// setTimeout(() => {
//     console.log('username')
// }, 1000);
// setTimeout(() => {
//     console.log('password')
// }, 1000);
console.log('fatching data1..')
setTimeout(() => {
    console.log(1)
    console.log('fatching data2..')
    setTimeout(() => {
        console.log(2)
        console.log('fatching data3.')
        setTimeout(() => {
            console.log(3)
            console.log('fatching data4.')
            setTimeout(() => {
                console.log(4)
                
            }, 2000);
        }, 2000);    
    }, 2000);
}, 2000);