function partOne(input) {
    if(input[0].toUpperCase() == input[input.length - 1].toUpperCase()) {
        return input.split("").reverse().join("");
    } else {
        let buf = input.split("");
        buf.shift();
        buf.pop();
        input = buf.join("");
        return input;
    }
}
console.log(partOne("Triscuit"));
console.log(partOne("Cracker"));

function partTwo(arr) {
    if(arr.length === 0) return 0;
    let maxStreak = 0;
    let curStreak = 0;
    let curSum = 0;
    let bestSum = 0;
    for(let i = 0; i < arr.length; i++) {
        curSum = arr[i];
        for(let j = i; j < arr.length; j++) {
            if(arr[j] == arr[(j + 1)] - 1) {
                curStreak++;
                curSum += arr[j + 1];
            } else {
                if(curStreak > maxStreak) {
                    maxStreak = curStreak;
                    bestSum = curSum;
                } else if (curStreak == maxStreak && curSum > bestSum) {
                    maxStreak = curStreak;
                    bestSum = curSum;
                }
                curStreak = 0;
                break;
            }
        }
    }
    return bestSum;
}
console.log(partTwo([1, 2, 3, 6, 9, 34, 2, 6]));
console.log(partTwo([3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3]));
console.log(partTwo([100, 101, 102, 3, 4, 5, 6, 9]));


function partThree(dateStr) {
    var myBirthDay = new Date(dateStr);
    var now = new Date();
    var msTillBDay = myBirthDay.getTime() - now.getTime();
    var weeks = Math.floor(msTillBDay / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor(msTillBDay / (1000 * 60 * 60 * 24)) - (weeks * 7);
    var hours = Math.floor(msTillBDay / (1000 * 60 * 60)) - ((weeks * 7 * 24) + (days * 24));
    var minutes = Math.floor(msTillBDay / (1000 * 60)) - ((weeks * 7 * 24 * 60) + (days * 24 * 60) + (hours * 60));
    var seconds = Math.floor(msTillBDay / 1000) - ((weeks * 7 * 24 * 60 * 60) + (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
    return [weeks, days, hours, minutes, seconds];
}

var time = partThree("Jan 20, 2025 00:00:00");
console.log(
  `There are ${time[0]} weeks, ${time[1]} days, ${time[2]} hours, ${time[3]} minutes, and ${time[4]} seconds until my next birthday!`
);


function partFour() {
    var outArr = [];
    var randInt;
    for(let i = 0; i < 10; i++) {
        randInt = Math.floor(Math.random() * 101);
        outArr.push(randInt);
        for(let j = 2, s = Math.sqrt(randInt); j <= s; j++) {
            if(randInt % j === 0 || randInt <= 1) {
                outArr.push(" is not prime, ");
                break;
            }
        }
        if (outArr.length % 2 != 0) {
          outArr.push(" is prime, ");
        }
    }
    var outStr = outArr.join("");
    outStr = outStr.slice(0, -2);
    return outStr;
}

console.log(partFour());