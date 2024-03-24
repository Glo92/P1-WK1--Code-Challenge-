// Calculate gross Salary
let grossSalary = basicSalary + benefits
// Calculate Tax
let taxRate; 
if ( taxablePay <= 24000 ) {
    taxRate ='10%'
} else if (taxablePay >= 24001 && taxablePay <= 32333) {
    taxRate ='25%'
} else if (taxablePay >= 32334 && taxablePay <= 500000) {
    taxRate ='30%'
}else if (taxablePay >= 5000001 && taxablePay <= 800000) {
    taxRate ='32.5%'
} else {
    taxRate ='35%'
}
    let taxableIncome = grossSalary - 24000

    //calculate NHIF Deductions
    let nhifDeduction = 0
    