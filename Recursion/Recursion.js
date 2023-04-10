let exponent = function (number,exp){

    if(exp===0){
        return 1;
    }
    else{
        return number * exponent(number,exp-1);
    }
    }

    console.log(exponent(2, 5))
    console.log(exponent(7, 3))
    console.log(exponent(12, 2))
    console.log(exponent(9, 4))
