let nave=document.querySelector('.nave');
let body=document.querySelector('body');
let laser=document.getElementById('laser');
let live=document.querySelector('i');
let times=document.getElementById('times');
let lives = 5;
let second=60;
setInterval(()=>{
    second--;
    times.textContent=second;
    if(second==0){
        alert('You Win');
        location.reload();
    }
},1000);
document.addEventListener('mousemove',(e)=>{
    nave.style.left=(e.clientX-40)+'px';
})
//GENERAR DISPAROS
document.addEventListener('click',()=>{
    let bala=document.createElement('div');
    bala.classList.add('bala');
    bala.style.bottom=70+'px';
    bala.style.left=(nave.getBoundingClientRect().left+100)+'px';
    body.append(bala);
    laser.play();
})
//MOVIMIENTO DE DISPARO
setInterval(()=>{
    let balas=document.querySelectorAll('.bala');
    balas.forEach(bala =>{
        bala.style.top=(bala.getBoundingClientRect().top-20)+'px';
        if(bala.getBoundingClientRect().top<=0){
            bala.remove();
        }
        //DETECTAMOS LA COLISION
        let enemigos=document.querySelectorAll('.enemigo');
        enemigos.forEach(enemigo =>{
            if(bala.getBoundingClientRect().top<=enemigo.
            getBoundingClientRect().top+80){
                if(bala.getBoundingClientRect().left>=enemigo.
                getBoundingClientRect().left && bala.
                getBoundingClientRect().left<=enemigo.
                getBoundingClientRect().left+100){
                    laser.play();
                    enemigo.style.backgroundImage='url("./pngwing.com (3).png';
                    setTimeout(()=>{
                        enemigo.remove();
                        laser.stop();
                    })
                }
            }
        })
    })
},15);
//GENERAR DISPAROS
document.addEventListener('click',()=>{
    let bala1=document.createElement('div');
    bala1.classList.add('bala1');
    bala1.style.bottom=70+'px';
    bala1.style.left=(nave.getBoundingClientRect().left+65)+'px';
    body.append(bala1);
    laser.play();
})
//MOVIMIENTO DE DISPARO
setInterval(()=>{
    let balas=document.querySelectorAll('.bala1');
    balas.forEach(bala1 =>{
        bala1.style.top=(bala1.getBoundingClientRect().top-20)+'px';
        if(bala1.getBoundingClientRect().top<=-20){
            bala1.remove();
        }
         //DETECTAMOS LA COLISION
        let enemigos=document.querySelectorAll('.enemigo');
        enemigos.forEach(enemigo =>{
            if(bala1.getBoundingClientRect().top<=enemigo.
            getBoundingClientRect().top+80){
                if(bala1.getBoundingClientRect().left>=enemigo.
                getBoundingClientRect().left && bala1.
                getBoundingClientRect().left<=enemigo.
                getBoundingClientRect().left+100){
                    laser.play();
                    enemigo.style.backgroundImage='url("./pngwing.com (3).png';
                }
            }
        })
    })
},15);
//GENERAR METEORIORITOS
let aparecer=0;
setInterval(()=>{
    aparecer++;
    if(aparecer%10==0){
        let enemigo=document.createElement('div');
        enemigo.classList.add('enemigo');
        body.append(enemigo);
        enemigo.style.left=(Math.random()*window.innerWidth-100)+'px';
    }
        let enemigos=document.querySelectorAll('.enemigo');
        enemigos.forEach(element =>{
            element.style.top=(element.getBoundingClientRect().top+10)+'px';
                if(element.getBoundingClientRect().top>nave.getBoundingClientRect().top){
                    lives--;
                    live.textContent=lives
                    element.remove();
                }
        })
},100);