const first_player_img = document.querySelector('.first_player')
const second_player_img = document.querySelector('.second_player')
const result = document.querySelector('.result')
const btn = document.querySelector('.btn')

result.textContent = "you are first player, click the button to start the game!"

function getRandomNumber(num){
    return Math.round(Math.random() * num);
}

function setImageAttribute(random_num, img) {
    if(random_num == 0){
        img.setAttribute('src', './img/paper.jpg');
    }else if(random_num == 1){
        img.setAttribute('src', './img/rock.jpg');
    }else{
        img.setAttribute('src', './img/scissors.jpg');
    }
}

// btn elementiga hodisa qoshish
btn.addEventListener('click', () => {
    // tasodifiy sonlar genetratsiya qilish
    const first_random_number = getRandomNumber(2);
    const second_random_number = getRandomNumber(2);


    // 0 - paper                                                                            
    // 1 - rock                                                                            
    // 2 - scissors                                                                            

    // birinchi o'yinchi yutadigan kombinatsiyalar                                                                            
    if(first_random_number == 0 && second_random_number == 1){                                                                            
        result.textContent = "siz yutdingiz!";                                                                            
        result.style.color = "green";                                                                            
    }else if(first_random_number == 1 && second_random_number == 2){                                                                            
        result.textContent = "siz yutdingiz!";                                                                            
        result.style.color = "green";                                                                            
    }else if(first_random_number == 2 && second_random_number == 0){                                                                            
        result.textContent = "siz yutdingiz!";                                         
        result.style.color = "green";                                         
    }                                                    
    // durang bo'ladigan kombinatsiyalar                                         
    else if(first_random_number == second_random_number){                                         
        result.textContent = "durang!";                                         
        result.style.color = "blue";                                         
    }                                                    
    // ikkinchi o'yinchi yutadigan kombinatsiyalar                                         
    else{                                                
        result.textContent = "siz yutqizdingiz!";                                         
        result.style.color = "red";                                                                                  
    }


});

