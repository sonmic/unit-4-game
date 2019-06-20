// global variables
let wins = 0;
$('#wins').text(wins);
let losses = 0;
$('#losses').text(losses);
let score = 0;
$('#score').text(score);

// Default macarons animation

var cashSound;

$(document).ready(function() {

    cashSound = new Audio();
    cashSound.src = 'assets/cash.mp3';

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



function getRandInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

let targetNum;
// computer picks a random number
function goalNum() {
    targetNum = getRandInt(19, 120);
    console.log(targetNum);
    // display and log the computer picked number
    $('#goal').text('\$' + targetNum);
}
goalNum();



function macNum() {
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
}
macNum();

// add macaron #1 num to total
$('.mac1').on('click', function() {
    let value = $('.mac1').attr('data');
    score = score + parseInt(value, 10);
    $("#score").text(score);
    cashSound.play();
});

// add macaron #2 num to total
$('.mac2').on('click', function() {
    let value = $('.mac2').attr('data');
    score = score + parseInt(value, 10);
    $("#score").text(score);
    cashSound.play();
});

// add macaron #3 num to total
$('.mac3').on('click', function() {
    let value = $('.mac3').attr('data');
    score = score + parseInt(value, 10);
    $("#score").text(score);
    cashSound.play();
});

// add macaron #4 num to total
$('.mac4').on('click', function() {
    let value = $('.mac4').attr('data');
    score = score + parseInt(value, 10);
    $("#score").text(score);
    cashSound.play();
});

$("#mute").click(function() {
    if (cashSound.muted == false) {
        cashSound.muted = true;
        $(this).prop("src", "assets/images/soundoff.png");
    } else {
        cashSound.muted = false;
        $(this).prop("src", "assets/images/soundon.png");
    }
});



$('.yum').on('click', function() {
    let totalScore = parseInt($("#score").text(), 10);
    console.log($("#score").text());
    if (totalScore === targetNum) {
        $("#wins").text(++wins);
        reset();
    } else if (totalScore > targetNum) {
        $("#losses").text(++losses);
        reset();
    }
});

//reset 
function reset() {
    goalNum();
    macNum();
    score = 0;
    $("#score").text(score);
}