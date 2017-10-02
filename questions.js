function problem1(){
    var numbers = document.getElementById("input1").value;
    var sum = 0;
    for(var i = 0; i < numbers; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum+= i;
        }
    }
    
    document.getElementById("output1").innerHTML = "The sum of all the multiples of 3 or 5 below " + numbers + " is: " + sum;
}

function problem2(){
    var limit = document.getElementById("input2").value;
    var fibbonaciSequence = [1, 2];
    var next = 0;
    var sum = 0;

    for(var i = 1;fibbonaciSequence[i] <= limit; i++){
        next = fibbonaciSequence[i] + fibbonaciSequence[i-1];
        if(next < limit){
            fibbonaciSequence.push(next);
        }
    }
    for(var i = 0; i < fibbonaciSequence.length; i++){
        if(fibbonaciSequence[i] % 2 === 0){
            sum += fibbonaciSequence[i];
        }
    }
    document.getElementById("output2").innerHTML = "The sum of even values fibonacci numbers below " + limit + " is: " + sum;
}

function problem3(){
    var number = document.getElementById("input3").value;
    var biggestFactor = 0;
    var factors = [];
    var originalNumber = number;

    for(var i = 2; i <= number; i++){
        if((number % i) === 0){
            biggestFactor = i;
            factors.push(i);
            number /= biggestFactor;
            i--;
        }
    }
    document.getElementById("output3").innerHTML = "The biggest prime factor for " + originalNumber + " is: " + biggestFactor;
}
