// Grade Generator
function studentMarks(marks) {
    // Using the 'if', 'else if', and else' statement and the AND '&&'
     if (marks > 79) {
         console.log('A') 
    }else if (marks >= 60 && marks <= 79) {
         console.log('B')
    }else if (marks >= 49 && marks <= 59) {
        console.log('C')
    }else if (marks >= 40 && marks <= 49) {
        console.log('D')
    }else if (marks >= 0 && marks <= 40) {
        console.log('E')
    } else {
        // If the marks inpyted isn't from 0 to 100
        console.log('invalid input')
    }
 }
 //input marks inside nside the paranthesis below to output the Grade
 studentMarks('')