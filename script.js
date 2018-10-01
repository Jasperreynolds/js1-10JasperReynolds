//Code problem 1.
function sleep_in(weekday, vacation) {
    if(weekday==true && vacation==false){
         return false;
    }else{
         return true;
    }
}

//Code problem 2.
function monkey_trouble(a_smile, b_smile) {
    if (a_smile == true && b_smile == true){
        return true;
    }
    if (a_smile == false && b_smile == false){
        return true;
    } else {
        return false;
    }
}

//Code problem 3.
function string_times(string, n){
    if (n == 0){
        return "";
    }
    var result = string;
    for( var i = 0; i < n-1; i++){
        result += string;
    }
    return result;
}


//Code problem 4.
function front_times(string, n){
    if ( n == 0){
        return "";
    }
    var text = string.substr(0,3);
    for ( var i = 0; i < n - 1; i++){
        text += string.substr(0,3);
    }
    return text;
}

//Code problem 5.
function string_bits(string){
    if(string.length == 0){
        return "";
    }
    var ans = "";
    for ( var i = 0; i < string.length - 1; i+=2){
        ans = ans + string[i];
    }
    return ans;
}

//Code problem 6.
function caughtSpeeding(speed, birthday){
    if(speed >= 86){
        return 2;
    }
    if(speed <= 60){
        return 0;
    }
    if(speed >= 66 && speed <= 86 && birthday == true){
        return 1;
    }
    if(speed >= 61 && speed <=81 && birthday == false){
        return 1;
    }
    if(speed >= 81 && birthday == false){
        return 2;
    }
    if(speed <= 65 && birthday == true){
        return 0;
    }
}

//Code problem 7.
function fizz_buzz(n){
    var number = n;
    if (number % 3 == 0 && number % 5 != 0){
        return "Fizz";
    }
    if (number % 5 == 0 && number % 3 != 0){
        return "Buzz";
    }
    if (number % 3 == 0 && number % 5 == 0){
        return "FizzBuzz";
    }
    if (number % 3 != 0 && number % 5 != 0){
        return number + "!";
    }
}

//Code problem 8.
function teaParty(n, m){
    var tea = n;
    var candy = m;
    if(tea < 5 || candy < 5){
        return 0;
    }
    if(tea >= 5 && candy >= 5 && tea < 2*candy && candy < 2*tea){
        return 1;
    }
    if(tea >= 5 && candy >= 5 && tea >= 2*candy || candy >= 2*tea){
        return 2;
    }
}

//Code problem 9.
function blackjack(n, m){
    var one = n;
    var two = m;
    if(one >= two && one <= 21){
        return one;
    }
    if(two >= one && two <= 21){
        return two;
    }
    if(two > 21 && one <= 21){
        return one;
    }
    if(one > 21 && two <= 21){
        return two;
    }
    if(two > 21 && one > 21){
        return 0;
    }
}

//Code problem 10.
function loneSum(a, b, c){
    var sum = a + b + c;
    if(a != b && a != c && b != c){
        return sum;
    } else if(a == b && a != c) {
        return c;
    } else if(a != b && b == c){
        return a;
    } else if(b != c && a == c) {
        return b;
    } else if(a == b && b == c){
        return 0;
    }
}


//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(true, false);
    document.getElementById("output").innerHTML += front_times(true, false);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(true, false);
    document.getElementById("output").innerHTML += fizz_buzz(true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
}
