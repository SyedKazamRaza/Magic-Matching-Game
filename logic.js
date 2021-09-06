let arr = [];
const startGame = () => {
    const max = 6;
    const min = 1;

    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(num)

    if (num == 1) {
        arr = [1, 2, 4, 3, 2, 4, 1, 3];
    }
    else if (num == 2) {
        arr = [2, 4, 1, 1, 3, 3, 2, 4];
    }
    else if (num == 3) {
        arr = [2, 3, 4, 3, 2, 1, 4, 1];
    }
    else if (num == 4) {
        arr = [4, 1, 2, 3, 2, 4, 3, 1];
    }
    else if (num == 5) {
        arr = [3, 2, 4, 2, 4, 1, 1, 3];
    }
    else {
        arr = [2, 1, 2, 4, 1, 3, 3, 4];
    }
    console.log("-------------------------")
    arr.forEach(e => {
        console.log(e);
    });
}

startGame();

const populateBoard = () => {
    let boxNumber = 1;
    let i = 0;
    while (boxNumber < 9) {
        let image = "";
        let Imgclass = "";

        if (arr[i] == 1) {
            image = "lion.png";
            Imgclass = "lion";
        }
        else if (arr[i] == 2) {
            image = "monkey.png";
            Imgclass = "monkey";
        }
        else if (arr[i] == 3) {
            image = "snake.png";
            Imgclass = "snake";
        }
        else {
            image = "king.png";
            Imgclass = "king";
        }

        let boxid = boxNumber.toString();

        let insert = '<img src=' + image + ' alt="photo" width="140px" height="140px" style="margin-left: 18px; margin-top:9px; display:None" class=' + Imgclass + ' >';
        insert = insert + '<h2 style="color: red; text-align: center; margin-top:20%">Guess the<br> Card</h3>'
        document.getElementById(boxid).innerHTML = insert;

        i += 1;
        boxNumber += 1;
    }

}

populateBoard();

let gameOver = false;
const show = (boxID) => {
    if(gameOver == true){
        return;
    }
    document.getElementById(boxID).getElementsByTagName('img')[0].style.display = "block";
    let boxClass = document.getElementById(boxID).getElementsByTagName('img')[0].className;
    document.getElementById(boxID).getElementsByTagName('h2')[0].style.display = "None";
    checkResult(boxClass,boxID);
}

let choiceNumber = 1;
let firstImage = "";
let starNum = 9;
const checkResult = (image,boxID) => {
    if (choiceNumber == 1 || choiceNumber == 3 || choiceNumber == 5 || choiceNumber == 7) {
        firstImage = image;
        choiceNumber += 1;
    }
    else {
        if (image == firstImage) {
            if (choiceNumber == 8) {
                star = starNum.toString();
                document.getElementById(star).style.display = "block";
                applause.play();
                gameOver = true;
            }
            else {
                star = starNum.toString();
                document.getElementById(star).style.display = "block";
                starNum += 1;
                firstImage = "";
                choiceNumber += 1;
            }
            
        }
        else {

            gameOver = true;
            document.getElementById(boxID).getElementsByTagName('img')[0].style.clas += "shake";
            setTimeout(() => {
                document.getElementById("errorID").style.display = "block";
                document.getElementById("errorID").style.position = "absolute";
            }, 2000);

            setTimeout(() => {
                for (let i = 1; i < 9; i++) {
                    document.getElementById(i).getElementsByTagName('img')[0].style.display = "block";
                    document.getElementById(i).getElementsByTagName('h2')[0].style.display = "None";

                    setTimeout(() => {
                        console.log("..");
                    }, 1000);
                }
            }, 4000);
           
          
        }
    }
}


const resetGame = () => {
    document.getElementById("9").style.display = "None";
    document.getElementById("10").style.display = "None";
    document.getElementById("11").style.display = "None";
    document.getElementById("12").style.display = "None";

    starNum = 9;
    gameOver = false;
    document.getElementById("errorID").style.display = "None";
    choiceNumber = 1;
    firstImage = "";
    arr = [];
    startGame();
    populateBoard();
}