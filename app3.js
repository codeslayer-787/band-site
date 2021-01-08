
let correctAnswer = 1;

function bandMembers(){
    let userAnswer = prompt ('How many guitars does a band need?');
    while (userAnswer < 0 || userAnswer > 10){
        userAnswer = prompt('Too What?  Please select a number 1 - 10');
    }
    let numberOfGuesses = 4
    for(let i = 0; i <numberOfGuesses; i++){
        if (userAnswer == correctAnswer){
            alert('Great Job!  You got it right.');
            break;            
        } else if (userAnswer < correctAnswer){
            alert('Too Few.  Please select a number 1 - 10');
            userAnswer = prompt('Please select a number 1 - 10');
        } else if (userAnswer > correctAnswer){
            alert('Too Many!  Do you want to make music or just a lot of noise?');
            userAnswer = prompt('Please select a number 1 - 10');
        }
    }
}
let link = document.getElementById('members');
link.addEventListener('click', bandMembers);
