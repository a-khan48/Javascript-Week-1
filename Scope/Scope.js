function outer(){
  
    let a = "String"
    let b = {Object: "object"}

    // outer:
    // String
    // { Object: 'Object' }

    
    console.log("outer:")
    console.log(a)
    console.log(b)


    function inner(a,b) {
     
        a = "String2"
        b = {Object2: "Object2"}

        // inner:
        // String2
        // { Object2: 'Object2' }

        console.log("inner:")
        console.log(a)
        console.log(b)

    }
  
    inner(a,b);

    console.log("after inner execution:")
    console.log(a)
    console.log(b)

    // inner after execution:
    // String
    // { Object: 'object' }

  }
  
  outer();



