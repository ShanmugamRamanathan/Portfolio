window.addEventListener('scroll', headReveal);

function headReveal(){
    let reveal1 = document.querySelectorAll('.subHead');
    let reveal2 = document.querySelectorAll('.subMainHead');
    for( let i=0; i<reveal1.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop1 = reveal1[i].getBoundingClientRect().top;
        let revealTop2 = reveal2[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if(revealTop1 < windowHeight - revealPoint){
            reveal1[i].classList.add('active');
            reveal2[i].classList.add('active');
        }
        else{
            reveal1[i].classList.remove('active');
            reveal2[i].classList.remove('active');
        }
    }

    let matter = document.querySelectorAll('.matter');
    for( let i=0; i<matter.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop1 = matter[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if(revealTop1 < windowHeight - revealPoint){
            matter[i].classList.add('active');
        }
        else{
            matter[i].classList.remove('active');
        }
    }

    let AI = document.querySelector('.AIimg');
    let ML = document.querySelector('.MLimg');
    let DL = document.querySelector('.DLimg');
    let WD = document.querySelector('.WDimg');
    let windowHeight = window.innerHeight;
    let revealTop1 = AI.getBoundingClientRect().top;
    let revealPoint = 150;
    if(revealTop1 < windowHeight - revealPoint){
        AI.classList.add('active');
        ML.classList.add('active');
        DL.classList.add('active');
        WD.classList.add('active');
    }
    else{
        AI.classList.remove('active');
        ML.classList.remove('active');
        DL.classList.remove('active');
        WD.classList.remove('active');
    }

    let containerL = document.querySelectorAll('.CL');
    let containerR = document.querySelectorAll('.RL');
    for( let i=0; i<containerL.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop1 = containerL[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if(revealTop1 < windowHeight - revealPoint){
            containerL[i].classList.add('active');
            containerR[i].classList.add('active');
        }
        else{
            containerL[i].classList.remove('active');
            containerR[i].classList.remove('active');
        }
    }

    let detL = document.querySelectorAll('.detL');
    let detR = document.querySelector('.detR');
    for( let i=0; i<detL.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop1 = detL[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if(revealTop1 < windowHeight - revealPoint){
            detL[i].classList.add('active');
            detR.classList.add('active');
        }
        else{
            detL[i].classList.remove('active');
            detR.classList.remove('active');
        }
    }

    let TL = document.querySelectorAll('.TL');
    let TR = document.querySelectorAll('.TR');
    for( let i=0; i<TL.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop1 = TL[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if(revealTop1 < windowHeight - revealPoint){
            TL[i].classList.add('active');
            TR[i].classList.add('active');
        }
        else{
            TL[i].classList.remove('active');
            TR[i].classList.remove('active');
        }
    }

    let certL = document.querySelectorAll('.certL');
    let certM = document.querySelectorAll('.certM');
    let certR = document.querySelectorAll('.certR');
    for( let i=0; i<certL.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop1 = certL[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if(revealTop1 < windowHeight - revealPoint){
            certL[i].classList.add('active');
            certM[i].classList.add('active');
            certR[i].classList.add('active');
        }
        else{
            certL[i].classList.remove('active');
            certM[i].classList.remove('active');
            certR[i].classList.remove('active');
        }
    }

    let photoHead = document.querySelectorAll('.photoHead');
    for( let i=0; i<photoHead.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop1 = photoHead[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if(revealTop1 < windowHeight - revealPoint){
            photoHead[i].classList.add('active');
        }
        else{
            photoHead[i].classList.remove('active');
        }
    }

    let photoL = document.querySelectorAll('.photoL');
    for( let i=0; i<photoL.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop1 = photoL[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if(revealTop1 < windowHeight - revealPoint){
            photoL[i].classList.add('active');
        }
        else{
            photoL[i].classList.remove('active');
        }
    }

    let photoR = document.querySelectorAll('.photoR');
    for( let i=0; i<photoR.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop1 = photoR[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if(revealTop1 < windowHeight - revealPoint){
            photoR[i].classList.add('active');
        }
        else{
            photoR[i].classList.remove('active');
        }
    }

    let landL = document.querySelectorAll('.landL');
    let landR = document.querySelectorAll('.landR');
    for( let i=0; i<landL.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop1 = landL[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if(revealTop1 < windowHeight - revealPoint){
            landL[i].classList.add('active');
            landR[i].classList.add('active');
        }
        else{
            landL[i].classList.remove('active');
            landR[i].classList.remove('active');
        }
    }

    let social = document.querySelector('.socialMediaContact');
    let conclusion = document.querySelector('.conclusion');
    let revealTop2 = social.getBoundingClientRect().top;
    if(revealTop2 < windowHeight - revealPoint){
        social.classList.add('active');
        conclusion.classList.add('active');
    }
    else{
        social.classList.remove('active');
        conclusion.classList.remove('active');
    }
}