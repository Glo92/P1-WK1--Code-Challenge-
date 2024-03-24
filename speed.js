// Speed Detector
function speedDectetor(speed) {
    const speedLimit = 70;
     
    // Since demrit points increases by 1 per every 5km/s above the speed limit;
    const demeritPoints = ((speed - speedLimit) / 5);
    // Using the 'if', 'else if' and 'else'
        if (speed <= 70) {
            console.log('OK'); 
        } else if (demeritPoints > 12) {
            console.log('License suspended');
        }else {
             console.log(`points: ${demeritPoints}`);
        }
    }
    //Results;
    speedDectetor('80');// Enter the speed of the car