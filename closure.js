const  x = 10
function print(){
    console.log(x)
}
print()


function print1(){
    let x1 = 30
    function print2(){
    console.log(x1)
    }
    print2()
}
print1()


function print3(){
    let x1 = 30
    return function print4(){
    console.log(x1)
    }
    
}
const test = print3()
test()