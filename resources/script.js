let player1 = document.querySelector('#player1')
let player2 = document.querySelector('#player2')
let jogador = 1
let htmljogador = document.querySelector('.jogador')
let click = false
let player1win ='<div class="base_win"><div class="win"><h1>Ganhador</h1> <p style="--color: red;"  class="active">Jogador 1</p><button click="replay()">Jogar</button>'
+'</div></div>';
let player2win = '<div class="base_win"><div class="win"><h1>Ganhador</h1>  <p style="--color: rgb(30, 255, 0); " class="active">Jogador 2</p><button click="replay()">Jogar</button>'
+'</div></div>';
let empate = '<div class="base_win"><div class="win"><h1>Empate</h1>'
+'</div></div>'
let ganhador = false;
const screen_replay = document.querySelector('.game_screen')
player1.classList.add('active')
// =================================================================
let game_screen = document.querySelector('.game_screen');
//game_screen.innerHTML = '<div class="base_win"><div class="win"><h1>Ganhador</h1> <p style="--color: red;"  class="active">Jogador 1</p> <button click="replay()">Jogar</button>'
//+'</div></div>';

function bloco_p1(){
    let elemento = event.target;
    elemento.innerHTML=  marcar(elemento);
    verificarGanhador()
    verificarVez()
    
}
function bloco_p2(){
    let elemento = event.target;
    elemento.innerHTML=  marcar(elemento);
    
    verificarGanhador()
    verificarVez()
    
}
function bloco_p3(){
    let elemento = event.target;
    elemento.innerHTML=  marcar(elemento);
    verificarGanhador()
    verificarVez()

}
function bloco_p4(){
    let elemento = event.target;
    elemento.innerHTML=  marcar(elemento);
    verificarGanhador()
    verificarVez()

}
function bloco_p5(){
    let elemento = event.target;
    elemento.innerHTML=  marcar(elemento);
    verificarGanhador()
    verificarVez()

}
function bloco_p6(){
    let elemento = event.target;
    elemento.innerHTML=  marcar(elemento);
    verificarGanhador()
    verificarVez()

}
function bloco_p7(){
    let elemento = event.target;
    elemento.innerHTML=  marcar(elemento);
    verificarGanhador()
    verificarVez()

}
function bloco_p8(){
    let elemento = event.target;
    elemento.innerHTML=  marcar(elemento);
    verificarGanhador()
    verificarVez()

}
function bloco_p9(){
    let elemento = event.target;
    elemento.innerHTML=  marcar(elemento);
    verificarVez()
    verificarGanhador()
    

}
function replay(){
    alert()
    limpar();
    game_screen = screen_replay
}

function marcar(context){
    
    if(context.innerHTML == ''){
        click = false
        if(jogador == 1 && ganhador== false){
            //jogador =2
            //htmljogador.textContent = jogador      
            
            return '<h1 class="mark"  id="x" style="--color: red;">X</h1>'
            
        }
        else if(jogador == 2 && ganhador== false){
            //jogador = 1
            //htmljogador.textContent = jogador
            
            
            return '<h1 class="mark" id="o" style="--color: rgb(30, 255, 0);">O</h1>'
        }
        
       
    }
    else{
        click = true
        return context.innerHTML
        
    }

}

function verificarGanhador(){
   
    let p1 = document.querySelector('.p1')
    let p2 = document.querySelector('.p2')
    let p3 = document.querySelector('.p3')
    
    let p4 = document.querySelector('.p4')
    let p5 = document.querySelector('.p5')
    let p6 = document.querySelector('.p6')
    
    let p7 = document.querySelector('.p7')
    let p8 = document.querySelector('.p8')
    let p9 = document.querySelector('.p9')

    if(ganhador == false){
        if((p1.innerHTML == p2.innerHTML && p2.innerHTML == p3.innerHTML)&& p1.innerHTML!= ''){
            
            ganhador =true
            if(jogador == 1){
                game_screen.innerHTML = player1win
            }
            else{
                game_screen.innerHTML = player2win
            }
            
        }
        else if((p4.innerHTML == p5.innerHTML && p5.innerHTML == p6.innerHTML)&&p6.innerHTML!=''){
            if(jogador == 1){
                game_screen.innerHTML = player1win
            }
            else{
                game_screen.innerHTML = player2win
            }
            ganhador =true
            
        }
        else if((p7.innerHTML == p8.innerHTML && p8.innerHTML == p9.innerHTML)&&p9.innerHTML!=''){
            if(jogador == 1){
                game_screen.innerHTML = player1win
            }
            else{
                game_screen.innerHTML = player2win
            }
            ganhador =true
            
        }
        else if((p1.innerHTML == p5.innerHTML && p5.innerHTML == p9.innerHTML)&&p9.innerHTML!=''){
            if(jogador == 1){
                game_screen.innerHTML = player1win
            }
            else{
                game_screen.innerHTML = player2win
            }
            ganhador =true
            
        }
        else if((p3.innerHTML == p5.innerHTML && p5.innerHTML == p7.innerHTML)&&p7.innerHTML!=''){
            if(jogador == 1){
                game_screen.innerHTML = player1win
            }
            else{
                game_screen.innerHTML = player2win
            }
            ganhador =true
            
        }
        else if((p1.innerHTML == p4.innerHTML && p4.innerHTML == p7.innerHTML)&&p7.innerHTML!=''){
            if(jogador == 1){
                game_screen.innerHTML = player1win
            }
            else{
                game_screen.innerHTML = player2win
            }
            ganhador =true
            
        }
        else if((p2.innerHTML == p5.innerHTML && p5.innerHTML == p8.innerHTML)&&p8.innerHTML!=''){
            if(jogador == 1){
                game_screen.innerHTML = player1win
            }
            else{
                game_screen.innerHTML = player2win
            }
            ganhador =true
            
        }
        else if((p3.innerHTML == p6.innerHTML && p6.innerHTML == p9.innerHTML)&&p9.innerHTML!=''){
            if(jogador == 1){
                game_screen.innerHTML = player1win
            }
            else{
                game_screen.innerHTML = player2win
            }
            ganhador =true
            
        }
        else if(p1.innerHTML != ''&& p2.innerHTML != ''&&p3.innerHTML != ''&& p4.innerHTML != ''&&
        p5.innerHTML != ''&& p6.innerHTML != ''&&p7.innerHTML != ''&& p8.innerHTML != ''&&p9.innerHTML != ''){
            game_screen.innerHTML= empate
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
    let p1 = document.querySelector('.p1')=''
    let p2 = document.querySelector('.p2')=''
    let p3 = document.querySelector('.p3')=''
    
    let p4 = document.querySelector('.p4')=''
    let p5 = document.querySelector('.p5')=''
    let p6 = document.querySelector('.p6')=''
    
    let p7 = document.querySelector('.p7')=''
    let p8 = document.querySelector('.p8')=''
    let p9 = document.querySelector('.p9')=''

    ganhador = false;
    jogador = 1
    
}
function verificarVez(){
    alert(click)
    if(jogador == 1 && click == false){
        player1.classList.remove('active')
        player2.classList.add('active')
        jogador =2 
    }
    else if(click == false){
        player2.classList.remove('active')
        player1.classList.add('active')
        jogador = 1
    }
    //htmljogador.textContent = jogador
}



