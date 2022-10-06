/* const pasises =["Francia", "España", "Portugal", "México", "Argentina"]
//async

function nuevoPais(pais, callback){
    setTimeout(()=>{
        pasises.push(pais)
        callback()
    },3000)
}


//programcion asincrona:requiere algo de tiempo o que sucede en el futuro
//calback es funcion que llama a otra fuancion
function mostrarPaises(){
    setTimeout(()=>{
        pasises.forEach(pais=>{
            console.log(pais)
        })
    },2000)
} */

//mostrarPaises()
//nuevoPais('Alemania', mostrarPaises)

//___________________________________



const paises=[]

function nuevoPais(pais, callback){
    paises.push(pais)
    console.log(`Agregando: ${pais}`)
    callback()
}

function mostrarPaises(){
    console.log(paises)
}

function iniciarCallbackHell(){
    setTimeout(()=>{
        nuevoPais('Alemania', mostrarPaises)
        setTimeout(()=>{
            nuevoPais('Mexico', mostrarPaises)
            setTimeout(()=>{
                nuevoPais('Francia', mostrarPaises)
        },3000)
    },3000)
}, 3000)
}
iniciarCallbackHell()