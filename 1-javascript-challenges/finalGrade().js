// Write your function here:
let finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
     return 'You have entered an invalid grade.'
    } // check that all the grades are valid | checando se todas as notas são válidas
    let result = ((midterm + final + homework)/3);
    if (result < 60) {
      return 'F';
    } else if(result < 70) {
      return 'D';
    } else if(result < 80) {
      return 'C';
    } else if(result < 90) {
      return 'B';
    } else {
      return 'A';
    }
  
  }
  

  // Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(99, 92, 95)) // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!