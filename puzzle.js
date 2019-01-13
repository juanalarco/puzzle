
function getNumberPiecesFromUser() {
    
    let numeroPiezas = prompt("Dime un numero de piezas con raiz cuadrada exacta");
    let resultadoRaizCuadrada = Math.sqrt(numeroPiezas);
    let salirBucle = true;
    while (salirBucle) {
        // let numeroPiezas=prompt("Dime un numero de piezas");


        if (numeroPiezas % resultadoRaizCuadrada === 0) {
            window.alert("Bienvenido al Puzzle");
            salirBucle = false;
        } else {

            numeroPiezas = prompt("Dime un numero de piezas con raiz cuadrada exacta");
            resultadoRaizCuadrada = Math.sqrt(numeroPiezas);
        }
    }

    // return window.alert("Tu puzzle va a tener " + numeroPiezas + " piezas, suerte");
return numeroPiezas;

}

let numeroPiezas = getNumberPiecesFromUser();

// alert("Elige un numero con raiz cuadrada");


function getMaxScore(numeroPiezas) {
    return numeroPiezas * 2;

}
// console.log(getMaxScore());



function getScore() {

    let score = document.getElementById('score').textContent;

    sacarResultado = score.split(':');
    return parseInt(sacarResultado[1]);
}

console.log(getScore());


function updateScore(newScore) {

    document.getElementById('score').textContent = 'Score:' + newScore;

}

console.log(updateScore(100));



function decreaseScore(RestarScore) {

    let nuevaPuntuacion = getScore() - RestarScore;
    updateScore(nuevaPuntuacion);
}

console.log(decreaseScore(50));



function getNewSizes(anchura, altura) {

    let NewAltura;
    let NewAnchura;

    if (altura > anchura) {
        NewAltura = 200;
        NewAnchura = (anchura * NewAltura) / altura;
        NewAnchura = parseInt(NewAnchura);
    } else {
        NewAnchura = 200;
        NewAltura = (altura * NewAnchura) / anchura;
        NewAltura = parseInt(NewAltura);
    }
    return [NewAltura, NewAnchura];
}

console.log(getNewSizes(500, 700));

//  Cantidad = Tamaño(Array)  
//  Recorrer con k desde Cantidad-1 hasta 1 Regresivamente
//     az = Random(entre 0 y k)

//     tmp = Array(az)
//     Array(az) = Array(k)
//     Array(k) = tmp

function Suffle(arrayObjetos) {

    for (let i = arrayObjetos.length - 1; i >= 0; i--) {
        let az = Math.floor(Math.random() * i);
        let tmp = arrayObjetos[az];
        arrayObjetos[az] = arrayObjetos[i];
        arrayObjetos[i] = tmp;


    }
    //  solo se pone arrayObjetos porque es un objeto
    return arrayObjetos;
}

arrayObjetos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Suffle(arrayObjetos));

function pieceNumberToRowsColumns(numeroPiezas, numeroTotalPiezas) {

    let raizCuadrada = Math.sqrt(numeroTotalPiezas);
    let fila = parseInt(numeroPiezas/raizCuadrada);
    let columna = numeroPiezas%raizCuadrada;

    return [fila, columna];

}

console.log(pieceNumberToRowsColumns(1, 5));

function createPuzzleLayout(numeroPiezas,anchura,altura,direccion) {

    let tabla = document.createElement('table');
    let contador = 0;
    let raizCuadrada = Math.sqrt(numeroPiezas);

    let ancho = anchura / raizCuadrada;
    console.log(ancho);
    let alto = altura /raizCuadrada;
    // Empezamos a contar desde un numero menos 
    for (let i = 0; i <= raizCuadrada - 1; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j <= raizCuadrada - 1; j++) {
            let columna = document.createElement("td");
            fila.appendChild(columna);
            columna.id = "piece" + contador;
            contador++;

        // Creamos Borde
        columna.style.border="3px solid black";
        columna.style.height=alto+ "px";
        columna.style.width=ancho+ "px";

        // Creamos fondo
        columna.style.backgroundImage='url('+ direccion +')'
        
            
              
        }
        tabla.appendChild(fila);
        
        document.getElementsByTagName("body")[0].insertBefore(tabla,document.getElementsByTagName("script")[0]);

    }
    
}

createPuzzleLayout(numeroPiezas,958,1277,'cat.jpg');

function pieceToOffset(numPieza,anchura,altura,numeroPiezas){

    let numeroColumnas= Math.sqrt(numeroPiezas);

    let desplazamiento = [];
    let posicionPieza = pieceNumberToRowsColumns(numPieza,numeroPiezas);
   
// Subimos al array desplazamiento la clave (PrimerElemento) y su valor, el segundo 
// y dividimos el ancho del puzzle en filas y columnas
    desplazamiento.push(((anchura/numeroColumnas)*posicionPieza[0])*-1,((altura/numeroColumnas)*posicionPieza[1])*-1);
  
    
    return desplazamiento;

}
console.log(pieceToOffset(4,958,1277,9));



function createReferenceSolution(anchura,altura,numeroPiezas) {
let posicionPiezas= [];
// Recorre todas las piezas hasta llegar hasta el numerDePiezas
for (let i = 0; i < numeroPiezas; i++) {
    posicionPiezas.push(pieceToOffset(i,anchura,altura,numeroPiezas))  
}
return posicionPiezas;
}

console.log(createReferenceSolution(958,1277,9));


function drawContentPuzzle(arrayDesplazamientos) {
    
    for (let i = 0; i < arrayDesplazamientos.length; i++) {

      document.getElementById('piece' + i).style.backgroundPosition = arrayDesplazamientos[i][0] + 'px ' + arrayDesplazamientos[i][1] + 'px';
    }
  }

// drawContentPuzzle(shuffle(createReferenceSolution(958,1277,9)));
drawContentPuzzle(createReferenceSolution(958,1277,9));


function checkIfSolution(solucionPuzzle,estadoActual) {
  for (let j = 0; j < solucionPuzzle.length; j++) {
     if (solucionPuzzle[j]!==estadoActual[j]) {
         return true;
         
     }
      
  }
    
    return false;
}

// o	Esta función carga dinámicamente una imagen en JavaScript a partir de una URL. 
// Cuando la imagen está cargada en el objeto, se dispara un evento que ejecuta la lógica del juego.

function initGame(imageURL,numberOfPieces){
    let img = new Image();
    img.addEventListener('load',function(){
        gameLogic(img,numberOfPieces);
    });
    img.src = imageURL;
}

function gameLogic(img,numPiezas) {
    
}






