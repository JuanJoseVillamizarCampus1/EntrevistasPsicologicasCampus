// Ordenar Base de datos (Array Campers)
console.log(campers);
campers.sort((a,b)=>{
    if (a.nombre<b.nombre) {
        return -1
    }
    if(a.nombre>b.nombre){
        return 1
    }
    return 0
})

//1.Llenando dinamicamente el select con los nombres de los campers
campers.forEach((camper)=>{
    const opcion = document.createElement("option")
    opcion.value = camper.nombre
    opcion.textContent=camper.nombre
    document.querySelector('#camper').appendChild(opcion)
})

//2. Selecionando elementos (SELECTORES)

const camperInput = document.querySelector('#camper'), 
      psicologaInput = document.querySelector('#psicologa'),
      fechaInput= document.querySelector("#fecha"),
      horaInput = document.querySelector('#hora'),
      resultadosInput = document.querySelector('#resultados')

//2.1Seleccionando Fomulario

const fomulario=document.querySelector("#nueva-entrevista")

//2.2 seleccionando contenedor

const contenedorEntrevistas=document.querySelector('#entrevistas')

// 12 LIstener Formulario

fomulario.addEventListener('submit',nuevaEntrevista)


//3  Event Listener inputs
eventListeners();
function eventListeners() {
    camperInput.addEventListener('change', datosEntrevista)
    //8
    psicologaInput.addEventListener('change',datosEntrevista)
    fechaInput.addEventListener('change',datosEntrevista)
    horaInput.addEventListener('change',datosEntrevista)
    resultadosInput.addEventListener('change',datosEntrevista)
}
//4 objeto con propiedades 
const entrevistaObjeto ={
    camper:null,
    //9 agregar las demas propiedades equivalentes a los inputs del formulario
    psicologa:'',
    fecha:'',
    hora:'',
    resultados:''
    
}
console.log(entrevistaObjeto);

//5 Funcion inputs
function datosEntrevista(e) {
    console.log(e.target.value);
    //6 Guarda en cada propiedad del objeto del valor del input o click en el formulario
    entrevistaObjeto[e.target.name]=e.target.value
}


//10. CLASES
class Interviews {
//11.1
constructor(){
    this.interviews=[]
}
}

class   Userinterface{

}

//11 instanciar clases --> objeto

const interviewsManager = new Interviews()
const UserInterface = new Userinterface() 

//13 Funcion para el submit de formulario para validar y garegar una unava entrevista psicologica mediante el formulario

function nuevaEntrevista(e) {
    e.preventDefault()
    //14.Extraer informacion del objeto entrevistaObjeto
    const {camper,psicologa,fecha,hora,resultados}=entrevistaObjeto
    console.log(camper);

    //15. VAlidacion
    if (camper===null || psicologa==="" || fecha==='' || hora==="" || resultados==="" ) {
    alert("Diligencie el formulario completamente")
    }
}

