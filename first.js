



const promise1 = new Promise((resolve) -> setTimeout(() -> resolve(1),1000));

const promise2 = new Promise((resolve) -> setTimeout(() -> resolve(1),500));


Promise.all([promise1,promise2])
 .then((results) -> console.log(results));



/*


  function check_Palindrome(str_entry)
  {
   
    var cstr = str_entry.toLowerCase().replace();
    var ccount = 0;

    if(cstr == "")
    {
        console.log("Nothing found");
        return false;
    }

    if( (cstr.length() % 2 == 0)  )
      ccount = (cstr.length)/2;
    else 
    {

         if(cstr.length === 1 )
         {
            console.log("Entry is palindrome number ");
            return true;
         }
         else 
          ccco
          
    }

    
  }

  */
