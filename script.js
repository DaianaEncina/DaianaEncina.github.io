const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    console.log('dato ingresado: ', DATO)

    if (DATO > 0){
        if (DATO => 30 )
        ERROR.style.display = 'none'
        let flujo = Holliday(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } 
    if (DATO <30) {
        
        let aux = SuperCorpo (DATO)
        let resultado1 = aux*1500
        let resultado2 = aux*2000

    }
    else
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        
        console.log ()
})

function Holliday(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}

function SuperCorpo(peso){
    ( (peso * 4) + 7) / (peso + 90)

}