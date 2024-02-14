const mainCard = document.getElementById('main-card');
const yesCard = document.getElementById('yes-card');
const mainImage = document.getElementById('main-image');
const mainHeading = document.getElementById('main-heading');

const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');

let noBtnClicked = 0;

function yesBtnClick(){
    mainCard.style.display = "none";
    yesCard.style.display = "flex";
}

function noBtnClick(){
    noBtnClicked++;

    if(noBtnClicked == 1){
        mainImage.src = 'https://media1.tenor.com/m/yEg23XVd13EAAAAC/credits-to-milkmochabear-milk-and-mocha.gif'
        mainHeading.innerHTML = 'Ill bring you some flowers if you say yes🌹🌸'
        mainHeading.style.textAlign = 'center';
        noBtn.style.opacity = "0.8"
    } else if(noBtnClicked == 2){
        mainImage.src = 'https://media1.tenor.com/m/Glql1LPSciQAAAAC/milk-and-mocha-milk-mocha.gif'
        mainHeading.innerHTML = 'Ill give you lots of hugsssss 🥺❤️‍🩹'
        mainHeading.style.textAlign = 'center';
        noBtn.style.opacity = "0.6"
    } else if(noBtnClicked == 3){
        mainImage.src = 'https://media1.tenor.com/m/tYS9bZHRNdgAAAAC/kristigocouple2024.gif'
        mainHeading.innerHTML = 'And kisses tooo 😚'
        mainHeading.style.textAlign = 'center';
        noBtn.style.opacity = "0.4"
    } else if(noBtnClicked == 4){
        mainImage.src = 'https://media1.tenor.com/m/jqTkEH8qWoEAAAAC/credits-to-milkmochabear-showered-with-love.gif'
        mainHeading.innerHTML = 'Say yess naa, i\'l love you lotsssss🤗🥺'
        mainHeading.style.textAlign = 'center';
        noBtn.style.opacity = "0.2"
    } else {
        mainImage.src = 'https://media1.tenor.com/m/5p7fJz0eWUAAAAAC/cute-adorable.gif'
        mainHeading.innerHTML = 'Click Yesssssss na😭'
        mainHeading.style.textAlign = 'center';
        noBtn.style.display = "none"
    }

}

