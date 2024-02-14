const mainCard = document.getElementById('main-card')
const yesCard = document.getElementById('yes-card')

const yesBtn = document.getElementById('yes')

function yesBtnClick(){
    mainCard.style.display = "none";
    yesCard.style.display = "flex"
}