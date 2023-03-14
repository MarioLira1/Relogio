function Criasegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('PT-BR',{
        hour12 : false, timeZone: 'UTC'
        
    });
}
const Relogio = document.querySelector('.Rlg');
const Iniciar = document.querySelector('.Iniciar');
const Pausar = document.querySelector('.Pausar');
const Zerar = document.querySelector('.Zerar');
let segundo = 0
let timer; 

function  iniciaRelogio(){
    timer = setInterval(function() {
        segundo++;
        Relogio.innerHTML = Criasegundos(segundo);
    }, 1000);    
}      
Iniciar.addEventListener('click',function(event){
    Relogio.classList.remove('Pintei')
    clearInterval(timer)
    iniciaRelogio()
})
//  segunda
    Pausar.addEventListener('click', function(event){
        Relogio.classList.add('Pintei')
        clearInterval(timer)

    })
        


//  terceiro
Zerar.addEventListener('click', function(event){
    clearInterval(timer)
    Relogio.innerHTML = '00:00:00'
    segundo = 0
})