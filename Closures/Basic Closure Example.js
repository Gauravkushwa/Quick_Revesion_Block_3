function outerFuntion(){
    var message = "Hello Developer..!"
    
    return function (){
        console.log(message)
    }
}

var innerFunction = outerFuntion();
innerFunction()