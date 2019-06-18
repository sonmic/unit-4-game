// Default macarons animation
$(document).ready(function() {
    $(".mac1").effect("bounce", { times: 2 }, 1000);

    window.setTimeout(function() {
        $(".mac2").effect("bounce", { times: 2 }, 1000);
    }, 100); // 1 seconds

    window.setTimeout(function() {
        $(".mac3").effect("bounce", { times: 2 }, 1000);
    }, 200); // 1 seconds

    window.setTimeout(function() {
        $(".mac4").effect("bounce", { times: 2 }, 1000);
    }, 300); // 1 seconds
});


// global variables
let win = 0;
document.getElementById("wins").innerText = win;
let loss = 0;
document.getElementById("losses").innerText = loss;
let score = 0;
document.getElementById("score").innerText = score;

const sound = new Audio("../assets/cash.mov");


function getRandInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));;
}
// computer picks a random number
let goalNum = getRandInt(19, 120);
console.log(goalNum);
// display and log the computer picked number
$('#goal').text('\$' + goalNum);

// macaron #1  gets a number assinged
let macOne = getRandInt(1, 12);
console.log(macOne);
$('.mac1').attr('data', macOne);


// macaron #2  gets a number assinged
let macTwo = getRandInt(1, 12);
console.log(macTwo);
$('.mac2').attr('data', macTwo);

// macaron #3  gets a number assinged
let macThree = getRandInt(1, 12);
console.log(macThree);
$('.mac3').attr('data', macThree);

// macaron #4  gets a number assinged
let macFour = getRandInt(1, 12);
console.log(macFour);
$('.mac4').attr('data', macFour);


// add macaron #1 num to total
$('.mac1').on('click', function() {
    $('.mac1').each(function() {
        let value = $('.mac1').attr('data');
        score = score + parseInt(value, 10);
        $("#score").text(score);
        $('.mac1').click(e => sound.play());
    });
});

// add macaron #2 num to total
$('.mac2').on('click', function() {
    $('.mac2').each(function() {
        let value = $('.mac2').attr('data');
        score = score + parseInt(value, 10);
        $("#score").text(score);
        $('.mac2').click(e => sound.play());
    });
});

// add macaron #3 num to total
$('.mac3').on('click', function() {
    $('.mac3').each(function() {
        let value = $('.mac3').attr('data');
        score = score + parseInt(value, 10);
        $("#score").text(score);
        $('.mac3').click(e => sound.play());
    });
});

// add macaron #4 num to total
$('.mac4').on('click', function() {
    let value = $('.mac4').attr('data');
    score = score + parseInt(value, 10);
    $("#score").text(score);
    $('.mac4').click(e => sound.play());

});