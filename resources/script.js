let jogador = 1
let htmljogador = document.querySelector('.jogador')
let telajogo = document.querySelector('.jogo')
let ganhador = false;
function bloco_p1(){
    let elemento = event.target;
   
    elemento.querySelector('.marcador').innerHTML=  marcar(elemento);
    verificarGanhador()
    verificarVez()
}
function bloco_p2(){
    let elemento = event.target;
    elemento.querySelector('.marcador').innerHTML=  marcar(elemento);
    verificarGanhador()
    verificarVez()
    
}
function bloco_p3(){
    let elemento = event.target;
    elemento.querySelector('.marcador').innerHTML=  marcar(elemento);    
    verificarGanhador()
    verificarVez()

}
function bloco_p4(){
    let elemento = event.target;
    elemento.querySelector('.marcador').innerHTML=  marcar(elemento);    
    verificarGanhador()
    verificarVez()

}
function bloco_p5(){
    let elemento = event.target;
    elemento.querySelector('.marcador').innerHTML=  marcar(elemento);    
    verificarGanhador()
    verificarVez()

}
function bloco_p6(){
    let elemento = event.target;
    elemento.querySelector('.marcador').innerHTML=  marcar(elemento);    
    verificarGanhador()
    verificarVez()

}
function bloco_p7(){
    let elemento = event.target;
    elemento.querySelector('.marcador').innerHTML=  marcar(elemento);    
    verificarGanhador()
    verificarVez()

}
function bloco_p8(){
    let elemento = event.target;
    elemento.querySelector('.marcador').innerHTML=  marcar(elemento);    
    verificarGanhador()
    verificarVez()

}
function bloco_p9(){
    let elemento = event.target;
    elemento.querySelector('.marcador').innerHTML=  marcar(elemento);
    verificarGanhador()
    verificarVez()

}

function marcar(context){
    
    
    if(context.querySelector('.marcador').innerHTML == ''){
        if(jogador == 1 && ganhador== false){
            //jogador =2
            //htmljogador.textContent = jogador
            return 'X'
            
        }
        else if(jogador == 2 && ganhador== false){
            //jogador = 1
            //htmljogador.textContent = jogador
            return 'O'
        }
        else{
            return ''
        }
       
    }
    
    
    
    
    
}

function verificarGanhador(){
   
    let p1 = document.querySelector('.p1').querySelector('.marcador')
    let p2 = document.querySelector('.p2').querySelector('.marcador')
    let p3 = document.querySelector('.p3').querySelector('.marcador')
    
    let p4 = document.querySelector('.p4').querySelector('.marcador')
    let p5 = document.querySelector('.p5').querySelector('.marcador')
    let p6 = document.querySelector('.p6').querySelector('.marcador')
    
    let p7 = document.querySelector('.p7').querySelector('.marcador')
    let p8 = document.querySelector('.p8').querySelector('.marcador')
    let p9 = document.querySelector('.p9').querySelector('.marcador')

    if(ganhador == false){
        if((p1.innerHTML == p2.innerHTML && p2.innerHTML == p3.innerHTML)&& p1.innerHTML!= ''){
            telajogo.innerHTML += '<h1>jogador '+jogador+' venceu!!</h1>'
            ganhador =true
            
        }
        else if((p4.innerHTML == p5.innerHTML && p5.innerHTML == p6.innerHTML)&&p6.innerHTML!=''){
            telajogo.innerHTML += '<h1>jogador '+jogador+' venceu!!</h1>'
            ganhador =true
            
        }
        else if((p7.innerHTML == p8.innerHTML && p8.innerHTML == p9.innerHTML)&&p9.innerHTML!=''){
            telajogo.innerHTML += '<h1>jogador '+jogador+' venceu!!</h1>'
            ganhador =true
            
        }
        else if((p1.innerHTML == p5.innerHTML && p5.innerHTML == p9.innerHTML)&&p9.innerHTML!=''){
            telajogo.innerHTML += '<h1>jogador '+jogador+' venceu!!</h1>'
            ganhador =true
            
        }
        else if((p3.innerHTML == p5.innerHTML && p5.innerHTML == p7.innerHTML)&&p7.innerHTML!=''){
            telajogo.innerHTML += '<h1>jogador '+jogador+' venceu!!</h1>'
            ganhador =true
            
        }
        else if((p1.innerHTML == p4.innerHTML && p4.innerHTML == p7.innerHTML)&&p7.innerHTML!=''){
            telajogo.innerHTML += '<h1>jogador '+jogador+' venceu!!</h1>'
            ganhador =true
            
        }
        else if((p2.innerHTML == p5.innerHTML && p5.innerHTML == p8.innerHTML)&&p8.innerHTML!=''){
            telajogo.innerHTML += '<h1>jogador '+jogador+' venceu!!</h1>'
            ganhador =true
            
        }
        else if((p3.innerHTML == p6.innerHTML && p6.innerHTML == p9.innerHTML)&&p9.innerHTML!=''){
            telajogo.innerHTML += '<h1>jogador '+jogador+' venceu!!</h1>'
            ganhador =true
            
        }
        else if(p1.innerHTML != ''&& p2.innerHTML != ''&&p3.innerHTML != ''&& p4.innerHTML != ''&&
        p5.innerHTML != ''&& p6.innerHTML != ''&&p7.innerHTML != ''&& p8.innerHTML != ''&&p9.innerHTML != ''){
            telajogo.innerHTML += '<h1>Empate</h1>'
            ganhador =true

        }
    }
        
    /*
    else if(p4.innerHTML == p5.innerHTML && p5.innerHTML == p6.innerHTML){
        telajogo.innerHTML += '<h1>jogador '+jogador+' venceu!!</h1>'

    }
    */
    
    
}

function limpar(){
    let p1 = document.querySelector('.p1').querySelector('.marcador').innerHTML=''
    let p2 = document.querySelector('.p2').querySelector('.marcador').innerHTML=''
    let p3 = document.querySelector('.p3').querySelector('.marcador').innerHTML=''
    
    let p4 = document.querySelector('.p4').querySelector('.marcador').innerHTML=''
    let p5 = document.querySelector('.p5').querySelector('.marcador').innerHTML=''
    let p6 = document.querySelector('.p6').querySelector('.marcador').innerHTML=''
    
    let p7 = document.querySelector('.p7').querySelector('.marcador').innerHTML=''
    let p8 = document.querySelector('.p8').querySelector('.marcador').innerHTML=''
    let p9 = document.querySelector('.p9').querySelector('.marcador').innerHTML=''
}
function verificarVez(){
    if(jogador == 1){
        jogador =2 
    }
    else{
        jogador = 1
    }
    htmljogador.textContent = jogador
}



