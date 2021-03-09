function fizzbuzz(){
	var debut=1;

	   while (debut!=151) 
        {

          if (debut %3==0){
          console.log("Fizz");
          }
          
          if (debut %5==0){
          console.log("Buzz");
          }

          if (debut %5==0 && debut %3==0){
          console.log("FizzBuzz");
          }

         debut=debut+1;
          console.log(debut);
     }
          
	}
	fizzbuzz();