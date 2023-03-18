/**  🔒      ÷  **/


//      Array start :-

var Questions = [
    "1 + 1",
    "5^2 + 3^3",
    "2 X 500",
    "10 - 5",
    "2 + 8",
    "100 - 100",
    "15 + 52",
    "4^2",
    "1000 - 11",
    "10 - 1^1"
];

var Answers = [
    "2",
    "52",
    "1000",
    "5",
    "10",
    "0",
    "67",
    "16",
    "989",
    "9"
];

var Option1 = [
    "5",
    "50",
    "200",
    "-5",
    "8",
    "100",
    "53",
    "4",
    "999",
    "8"
];

var Option2 = [
    "3",
    "70",
    "50",
    "10",
    "3",
    "1000",
    "70",
    "8",
    "99",
    "10"
];

var Option3 = [
    "1",
    "27",
    "500",
    "-50",
    "12",
    "-100",
    "29",
    "1",
    "11",
    "1"
];


//      Array end -:

var score = 0;

//          Logic :-



//  calling functions :-

getQues()
getOpts1()
getOpts2()
getOpts3()
getAns()

//  calling functions -:


//      getting data start :-

//  get question start :-

function getQues() {
    window.randomNumber = Math.floor((Math.random() * Questions.length))
    console.log("random number : ", randomNumber)

    window.ques = Questions[randomNumber]
    console.log("question : ", ques)
    document.getElementById("question").innerHTML = " " + ques + " ";

    window.tries = 2;
    document.getElementById("atmpts").innerHTML = "Attempts : " + tries;

    window.Allowed = "false";
};

//  get question end -:

//  get answer start :-

function getAns() {
    window.ans = Answers[randomNumber]
    console.log("answer : ", ans);

    var opt_no = Math.floor((Math.random() * 4) + 1)
    console.log("answer number :", opt_no)

    if (opt_no == 1) {
        document.getElementById("option1").innerHTML = ans;
    } else if (opt_no == 2) {
        document.getElementById("option2").innerHTML = ans;
    } else if (opt_no == 3) {
        document.getElementById("option3").innerHTML = ans;
    } else if (opt_no == 4) {
        document.getElementById("option4").innerHTML = ans;
    }
};

//  get answer end -:

//  get options start :-

function getOpts1() {
    window.optionNumber1 = Option1[randomNumber]
    console.log("optiion1 : ", optionNumber1)

    var opt1_no = Math.floor((Math.random() * 4) + 1)
    console.log("option1 number:", opt1_no)

    if (opt1_no == 1) {
        document.getElementById("option1").innerHTML = optionNumber1;
    } else if (opt1_no == 2) {
        document.getElementById("option2").innerHTML = optionNumber1;
    } else if (opt1_no == 3) {
        document.getElementById("option3").innerHTML = optionNumber1;
    } else if (opt1_no == 4) {
        document.getElementById("option4").innerHTML = optionNumber1;
    }

}

function getOpts2() {
    window.optionNumber2 = Option2[randomNumber]
    console.log("option2 : ", optionNumber2)

    var opt2_no = Math.floor((Math.random() * 4) + 1)
    console.log("option2 number:", opt2_no)

    if (opt2_no == 1) {
        document.getElementById("option1").innerHTML = optionNumber2;
    } else if (opt2_no == 2) {
        document.getElementById("option2").innerHTML = optionNumber2;
    } else if (opt2_no == 3) {
        document.getElementById("option3").innerHTML = optionNumber2;
    } else if (opt2_no == 4) {
        document.getElementById("option4").innerHTML = optionNumber2;
    }

}

function getOpts3() {
    window.optionNumber3 = Option3[randomNumber]
    console.log("option3 : ", optionNumber3)

    var opt3_no = Math.floor((Math.random() * 4) + 1)
    console.log("option3 number:", opt3_no);


    if (opt3_no == 1) {
        document.getElementById("option1").innerHTML = optionNumber3;
    } else if (opt3_no == 2) {
        document.getElementById("option2").innerHTML = optionNumber3;
    } else if (opt3_no == 3) {
        document.getElementById("option3").innerHTML = optionNumber3;
    } else if (opt3_no == 4) {
        document.getElementById("option4").innerHTML = optionNumber3;
    }
}

//  get options end -:

//  check system start :-

function opt1() {
    var opt1val = document.getElementById("option1").innerHTML;
    window.opt1elm = document.getElementById("option1");

    console.info("opt1 Value : ", opt1val);
    console.info("opt1 HTML : ", opt1elm);
    console.info("answer : ", ans);

    if (tries === 0 | tries === "") {
        console.warn("Out Of Tries!");
        window.alert("out of Tries! Continue to next question by pressing the next button.")

        allowNext()
    } else {
        if (opt1val === ans) {
            opt1elm.style.backgroundColor = "rgba(34, 255, 26, 0.699)";

            console.log('%c Correct! ', 'background: #222; color: #bada55');
            updateScore()

            allowNext()
        } else {
            opt1elm.style.backgroundColor = "rgba(255, 26, 26, 0.699)";

            console.warn("Wrong!");

            tries = tries - 1;
            document.getElementById("atmpts").innerHTML = "Attempts : " + tries;
        }
    }
}


function opt2() {
    var opt2val = document.getElementById("option2").innerHTML;
    window.opt2elm = document.getElementById("option2");

    console.info("opt2 Value : ", opt2val);
    console.info("opt2 HTML : ", opt2elm);
    console.info("answer : ", ans);

    if (tries === 0 | tries === "") {
        console.warn("Out Of Tries!");
        window.alert("out of Tries! Continue to next question by pressing the next button.")

        allowNext()
    } else {
        if (opt2val === ans) {
            opt2elm.style.backgroundColor = "rgba(34, 255, 26, 0.699)";

            console.log('%c Correct! ', 'background: #222; color: #bada55');
            updateScore()

            allowNext()
        } else {
            opt2elm.style.backgroundColor = "rgba(255, 26, 26, 0.699)";
            opt2elm.style.borderStyle = "solid";
            opt2elm.style.borderWidth = "1px";

            console.warn("Wrong!");

            tries = tries - 1;
            document.getElementById("atmpts").innerHTML = "Attempts : " + tries;
        }
    }
}


function opt3() {
    var opt3val = document.getElementById("option3").innerHTML;
    window.opt3elm = document.getElementById("option3");

    console.info("opt3 Value : ", opt3val);
    console.info("opt3 HTML : ", opt3elm);
    console.info("answer : ", ans);

    if (tries === 0 | tries === "") {
        console.warn("Out Of Tries!");
        window.alert("out of Tries! Continue to next question by pressing the next button.")

        allowNext()
    } else {
        if (opt3val === ans) {
            opt3elm.style.backgroundColor = "rgba(34, 255, 26, 0.699)";

            console.log('%c Correct! ', 'background: #222; color: #bada55');
            updateScore()

            allowNext()
        } else {
            opt3elm.style.backgroundColor = "rgba(255, 26, 26, 0.699)";
            opt3elm.style.borderStyle = "solid";
            opt3elm.style.borderWidth = "1px";

            console.warn("Wrong!");

            tries = tries - 1;
            document.getElementById("atmpts").innerHTML = "Attempts : " + tries;
        }
    }
}


function opt4() {
    var opt4val = document.getElementById("option4").innerHTML;
    window.opt4elm = document.getElementById("option4");

    console.info("opt4 Value : ", opt4val);
    console.info("opt4 HTML : ", opt4elm);
    console.info("answer : ", ans);


    if (tries === 0 | tries === "") {
        console.warn("Out Of Tries!");
        window.alert("out of Tries! Continue to next question by pressing the next button.")

        allowNext()
    } else {
        if (opt4val === ans) {
            opt4elm.style.backgroundColor = "rgba(34, 255, 26, 0.699)";

            console.log('%c Correct! ', 'background: #222; color: #bada55');
            updateScore()

            allowNext()
        } else {
            opt4elm.style.backgroundColor = "rgba(255, 26, 26, 0.699)";
            opt4elm.style.borderStyle = "solid";
            opt4elm.style.borderWidth = "1px";

            console.warn("Wrong!");

            tries = tries - 1;
            document.getElementById("atmpts").innerHTML = "Attempts : " + tries;
        }
    }



}


function allowNext() {
    console.log("go to next question?");
    var btnNext = document.getElementById("next");
    btnNext.style.backgroundColor = "rgb(201, 24, 224, 0.800)";
    btnNext.style.color = "black";
    btnNext.innerHTML = "Next";
    Allowed = "true";
}

function next() {
    if (Allowed === "true") {
        getQues()
        getOpts1()
        getOpts2()
        getOpts3()
        getAns()

        Allowed = "false";

        document.getElementById("option1").style.backgroundColor = "rgba(20, 23, 220, 0.493)";


        document.getElementById("option2").style.backgroundColor = "rgba(20, 23, 220, 0.493)";


        document.getElementById("option3").style.backgroundColor = "rgba(20, 23, 220, 0.493)";


        document.getElementById("option4").style.backgroundColor = "rgba(20, 23, 220, 0.493)";

    } else if (Allowed === "false") {
        console.warn("Cannot Proceed to the next question!");
        window.alert("Cannot Procees to next question yet! please answer the current question.");
    }

}

function checkTries() {
    if (tries === 0 | tries === "") {
        allowNext()
    }

    if (Allowed === "false") {
        document.getElementById("next").innerHTML = "NEXT🔒";
        document.getElementById("next").style.backgroundColor = "rgba(145, 145, 145, 0.589)";
        document.getElementById("next").style.color = "rgba(0, 0, 0)";
    }
}

setInterval(checkTries, 200)


function updateScore() {
    score++;
    console.log("score: ", score);
    document.getElementById("score").innerHTML = "Score : " + score + "";
}



//  check system end -:

//          logic -:
