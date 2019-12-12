var mapa = new Phaser.Game(940, 410, Phaser.CANVAS, "mapa-interactivo");

var fondo;

//Estilos

var style1 = { fontSize: " 2.5em", fontFamily: "Franklin Gothic Medium, Arial Narrow", fill: "#000000", backgroundColor: "rgb(240, 248, 255,0.9)", padding: "5%" };
var style2 = { fontSize: " 1.5em", fontFamily: "Franklin Gothic Medium, Arial Narrow", fill: "#000000", backgroundColor: "rgb(240, 248, 255,0.9)", padding: "5%" };

//Lugares fotografias 
var lugares;
var estadio;
var conservatorio;
var aeropuerto;
var museo;
var orquidiario



//Botons

var buttons;

var button1;     //estadio
var button2;     //conseervatorio
var button3;     //aeropuerto
var button4;     //museo
var button5;     //orquidiario
var closeButton;

//Textos

//Titulos

var aeropuerto_titulo;
var estadio_titulo;
var conservatorio_titulo;
var museo_titulo;
var orquidiario_titulo;


// descripcion

var estadio_descripcion;
var conservatorio_descripcion;
var aeropuerto_descripcion;
var museo_descripcion;
var orquidiario_descripcion;

var mapaAct = {
    // Se precarga las imagenes que se usarán.
    preload: function () {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // Se carga la imagen del mapa
        mapa.load.image("fondo", "./Imagenes/Mapa-interactivo/mapa-ibague-interactivo.jpg");

        // Se cargan imagenes de los lugares
        mapa.load.image("estadio", "./Imagenes/Mapa-interactivo/estadio.jpg")
        mapa.load.image("conservatorio", "./Imagenes/Mapa-interactivo/conservatorio.jpg")
        mapa.load.image("aeropuerto", "./Imagenes/Mapa-interactivo/aeropuerto.jpg")
        mapa.load.image("museo", "./Imagenes/Mapa-interactivo/museo.jpg")
        mapa.load.image("orquidiario", "./Imagenes/Mapa-interactivo/orquidiario.jpg")


        // Se carga la imagen de para mas informacion - para los botones

        mapa.load.image("pin", "./imagenes/Mapa-interactivo/pin.png");

        //Se carga la imagen de para cerrar - para las imagenes
        mapa.load.image("close", "./imagenes/Mapa-interactivo/close-btn.jpg")
    },

    // Funcion donde se crean los elementos del mapa
    create: function () {

        // Creacion fondo
        fondo = mapa.add.tileSprite(0, 0, 940, 410, "fondo");


        //Botones

        //Estadio
        button1 = mapa.add.button(405, 195, "pin", actionOnClick1, this);
        button1.scale.setTo(0.12);

        //Conservatorio
        button2 = mapa.add.button(150, 100, "pin", actionOnClick2, this);
        button2.scale.setTo(0.12);

        //Aeropuerto
        button3 = mapa.add.button(860, 150, "pin", actionOnClick3, this);
        button3.scale.setTo(0.12);

        //Museo
        button4 = mapa.add.button(560, 0, "pin", actionOnClick4, this);
        button4.scale.setTo(0.12);

        //Oriquidiario
        button5 = mapa.add.button(70, 270, "pin", actionOnClick5, this);
        button5.scale.setTo(0.12);

        // Close button

        closeButton = mapa.add.button(170, 100, "close",actionOnClick_close,this);
        closeButton.visible=false;
        closeButton.scale.setTo(0.12);

        //Creacion grupo de imagenes para mostrar-ocultar facilmente
        lugares = mapa.add.group();
        lugares.createMultiple(6, 'lugar');
        estadio = lugares.create(200, 100, 'estadio');
        conservatorio = lugares.create(200, 100, "conservatorio");
        aeropuerto = lugares.create(200, 100, "aeropuerto");
        museo = lugares.create(200, 100, "museo");
        orquidiario = lugares.create(200, 100, "orquidiario");
        

        //Ocultar lugares 
        lugares.setAll('visible', false);


        //Textos

        //******tiulos
        //Aeropuerto
        aeropuerto_titulo = mapa.add.text(940, 190, "Aeropuerto Perales", style1);
        aeropuerto_titulo.anchor.setTo(1);
        aeropuerto_titulo.visible = false;

        //Museo
        museo_titulo = mapa.add.text(560, 20, "Museo de arte del Tolima", style1);
        museo_titulo.anchor.setTo(0.5);
        museo_titulo.visible = false;

        //Estadio
        estadio_titulo = mapa.add.text(405, 215, "Estadio Manuel Murrillo Toro", style1);
        estadio_titulo.anchor.setTo(0.5);
        estadio_titulo.visible = false;

        //Conservatorio
        conservatorio_titulo = mapa.add.text(150, 120, "Conservatorio de Musica", style1);
        conservatorio_titulo.anchor.setTo(0.5);
        conservatorio_titulo.visible = false;

        //Oriquidiario
        orquidiario_titulo = mapa.add.text(0, 275, "Orquidiario Reserva Natural", style1);
        orquidiario_titulo.visible = false;




        //****** Descripciones

        //Aeropuerto
        aeropuerto_descripcion = mapa.add.text(460, 100, "Aeropuerto Perales\n\nAeropuerto Nacional Perales es un aeropuerto \nubicado en el oriente de la ciudad de Ibagué en \nColombia a 11 kilómetros del distrito financiero de \nla misma, en la comuna número 8. Es el principal\n aeropuerto de Tolima", style2);
        aeropuerto_descripcion.visible = false;

        //Museo
        museo_descripcion = mapa.add.text(460, 100, "Museo de arte del Tolima\n\nEl Museo de Arte del Tolima, es un museo ubicado en \nIbagué, Colombia, y es uno de los más activos museos \nregionales de Colombia.\n\nEl proyecto del Museo de Arte del Tolima fue liderado \npor los artistas Darío Ortiz Robledo, Julio Cesar Cuitiva \nRiveros, durante la Gobernación del doctor Guillermo \nAlfonso Jaramillo Martínez", style2);
        museo_descripcion.visible = false;

        //Estadio
        estadio_descripcion = mapa.add.text(460, 100, "Estadio Manuel Murrillo Toro \n\nEl Estadio Manuel Murillo Toro es un escenario \ndeportivo, ubicado en la comuna número 10, en el sur  \nde la Ciudad colombiana de Ibagué, ​ capital del \ndepartamento de Tolima, ​ a solo 3.6 Kilómetros del\n Distrito financiero de esa Ciudad. ", style2);
        estadio_descripcion.visible = false;

        //Conservatorio
        conservatorio_descripcion = mapa.add.text(460, 100, "Conservatorio de Musica\n\n El Conservatorio del Tolima, se inició con la propuesta \ndel Maestro Alberto Castilla de formar una Escuela \nde Música en 1906. Esta propuesta tuvo como \nprecedentes la formación musical que se impartía en \nel Colegio San Simón y los intereses comunes de los \nhabitantes de Ibagué que tenían buena disposición para \n interpretar los aires musicales de la región", style2);
        conservatorio_descripcion.visible = false;

        //Oriquidiario
        orquidiario_descripcion = mapa.add.text(460, 100, "Orquidiario Reserva Natural\n\nEl Orquidiario del Tolima, fundado en 1990, y más tarde \nconvertido en Reserva de la Sociedad Civil. Con un poco \nmás de veintidós hectáreas ubicadas en el barrio Darío \nEchandía, (parte suroccidental de la ciudad, antigua vía \narmenia) dedicadas inicialmente a la caficultura, el \nmédico Germán Molina, junto a familiares y amigos, \nemprendieron la recuperación de los bosques \n“primigenios” del lugar, con el propósito de conformar \nun refugio para la biodiversidad.", style2);
        orquidiario_descripcion.visible = false;


    },

    update: function () {
        //Aeroperto
        if (button3.input.pointerOver()) {
            aeropuerto_titulo.visible = true;
        } else {
            aeropuerto_titulo.visible = false;
        }
        //Museo
        if (button4.input.pointerOver()) {
            museo_titulo.visible = true;
        } else {
            museo_titulo.visible = false;
        }
        //Estadio

        if (button1.input.pointerOver()) {
            estadio_titulo.visible = true;
        } else {
            estadio_titulo.visible = false;
        }
        //Conservaorio
        if (button2.input.pointerOver()) {
            conservatorio_titulo.visible = true;
        } else {
            conservatorio_titulo.visible = false;
        }
        //Orquidiario
        if (button5.input.pointerOver()) {
            orquidiario_titulo.visible = true;
        } else {
            orquidiario_titulo.visible = false;
        }

    }
}


//Funciones 

//Función para mostrar en pantalla únicamente el cuadro deseado sin que aparezcan los botones que no están siendo usados
function ocultarBotones() {
    button1.visible = false;
    button2.visible = false;
    button3.visible = false;
    button4.visible = false;
    button5.visible = false;
    closeButton.visible=true;
}
//Volver a mostrar botones
function mostrarBotones() {
    button1.visible = true;
    button2.visible = true;
    button3.visible = true;
    button4.visible = true;
    button5.visible = true;
    closeButton.visible=false;
}
//Funcion ocultar los textos
function ocularTextos() {
    estadio_descripcion.visible = false;
    conservatorio_descripcion.visible = false;
    aeropuerto_descripcion.visible = false;
    museo_descripcion.visible = false;
    orquidiario_descripcion.visible = false;
}

////Funcion ocultar los lugares
function ocultarLugares() {
    lugares.setAll('visible', false);
}

//Aciones De los botones

//Dar click en la imagen de (X) para cerrar la informacion

function actionOnClick_close(){
    mostrarBotones();
    ocularTextos() ;
    ocultarLugares(); 
}


//Boton Estadio, Visualiza la informacion del estadio 
function actionOnClick1() {
    ocultarBotones();
    estadio.scale.setTo(0.5);
    estadio.visible = true;
    estadio_descripcion.visible = true;
}

//Boton Conservatorio, Visualiza la informacion del conservatorio 
function actionOnClick2() {
    ocultarBotones();
    conservatorio.scale.setTo(0.5);
    conservatorio.visible = true;
    conservatorio_descripcion.visible = true;
}

//Boton Aeropuerto, Visualiza la informacion del aeropuerto 
function actionOnClick3() {
    ocultarBotones();
    aeropuerto.scale.setTo(0.5);
    aeropuerto.visible = true;
    aeropuerto_descripcion.visible = true;
}

//Boton Museo, Visualiza la informacion del museo 
function actionOnClick4() {
    ocultarBotones();
    museo.scale.setTo(0.5);
    museo.visible = true;
    museo_descripcion.visible = true;
}

//Boton Orquidiario, Visualiza la informacion del oriquidiario 
function actionOnClick5() {
    ocultarBotones();
    orquidiario.scale.setTo(0.5);
    orquidiario.visible = true;
    orquidiario_descripcion.visible = true;
}

//Inicializacion del juego
mapa.state.add("active", mapaAct);
mapa.state.start("active");
