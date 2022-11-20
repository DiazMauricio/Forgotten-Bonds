var place_number = 0;
var place_title = document.getElementById('place_title');
var place_text = document.getElementById('place_text');
var place_img = document.getElementById('place_img');
var svg_map = document.getElementById('mapasvg');

var places = [
    {
        "titulo":"Brumaría",
        "text":"También conocida como “la primera ciudad”, Brumaria es una colosal ciudad costera con una basta carga histórica. Un enclave comercial en expansión de artesanos, mercaderes y contrabandistas donde 2 facciones llevan una guerra fría por sus territorios. Esta ciudad es famosa por un extraño fenómeno meteorológico recurrente en la zona que causa que cada noche la ciudad se quede inundada por un densa niebla. En el pasado esta niebla sirvió para defender la zona de asedios pero hoy en día la niebla sirve de refugio para las personas del bajo mundo.",
        "viewbox": "1200 250 1266 512",
        "imgsrc": "src/Brumaria.png"
    },
    {
        "titulo":"Islas Carmesí",
        "text":"La cuna de exploradores. Las Islas Carmesí son un punto clave para el Reino de Laiss y su dominio sobre el mar, pese a esto, este lugar aparenta todo lo contrario a una ciudad militar. Siendo gobernadas por ex piratas, estas islas son uno de los lugares más caóticos del reino donde nunca faltan peleas, alcohol, y fiestas que duran semanas. ",
        "viewbox": "1350 50 1266 512",
        "imgsrc": "src/IslasCarmesi.png"
    }
    ,
    {
        "titulo":"Farwood",
        "text":"Donde todas las fábulas empiezan. Localizada en la ladera del bosque, Farwood creció alrededor de un gran lago de agua dulce. Se dice que hace mucho tiempo un antiguo dragón obligó a muchas tribus de enanos y gnomos a emigrar de las montañas hacia Farwood y lo cual le dio a la ciudad su aura de júbilo y tradición.",
        "viewbox": "1000 800 1266 512",
        "imgsrc": "src/Farwood.png"
    }
    ,
    {
        "titulo":"Paso Pesado",
        "text":"Paso pesado más que una ciudad es una extensa red de comunidades desperdigadas en una gigantesca ciénaga. Su habitantes son conocidos por ser calmados y amigables, disfrutando de los vastos recursos del pantano y se enorgullecen de vivir en comunión con su ambiente.",
        "viewbox": "1800 700 1266 512",
        "imgsrc": "src/PasoPesado.png"
    }
    ,
    {
        "titulo":"Farkas",
        "text":"Afiladas rejas negras decoran los grises y lúgubres hogares de los desconfiados habitantes de Farkas.<br>Esta es una ciudad marcada por la guerra y la traición donde el olor a acero y muerte está presente en los sótanos de cada edificio en la ciudad.<br>Entre otras cosas Farkas es conocida por sus fieros guerreros y su siniestros brujos, ya que en esta ciudad se permiten muchas practicas que otras culturas considerarian taboo en orden de protegerse de sus invasores y de las amenazas del Bosque Negro.",
        "viewbox": "2000 960 1266 512",
        "imgsrc": "src/Farkas.png"
    }
    ,
    {
        "titulo":"Easel",
        "text":"Bien conocida por sus fértiles campos de flores y su grandilocuentes exhibiciones de arte, Easel es la más exuberante y bella ciudad del reino, cada rincón de esta ciudad parece salida del cuadro del más minucioso pintor, y los habitantes de Easel no temen presumir estas cualidades.<br>Es conocimiento general que, con el suficiente talento, nunca te va a faltar un noble que contrate tus servicios en Easel.",
        "viewbox": "1400 960 1266 512",
        "imgsrc": "src/Easel.png"
    }
    ,
    {
        "titulo":"Owlgrave",
        "text":"La capital de la magia, fundada alrededor de un inexplicable fenómeno arcano, ganó su nombre por los cientos de magos y eruditos que fueron demasiado lejos intentando desentrañar los secretos del “ojo de Utena”.<br>Hoy en día la ciudad posee las más importantes universidades y las más avanzadas industrias del reino, miles de personas de todo tipo viven en la ciudad pero sus raíces siguen dejando marca en el lugar y sus habitantes.",
        "viewbox": "1460 1260 1266 512",
        "imgsrc": "src/OwlGrave.png"
    },
    {
        "titulo":"BendRock",
        "text":"Una tierra que parece otro continente, Bendrock es una ciudad que siempre fue un punto de conflicto para el reino, siendo conquistada y re-conquistada varias veces por numerosas civilizaciones y siendo la ciudad más aislada del Reino Laiss, Bendrock desarrolló su propia identidad y cultura ajena al patriotismo de otras ciudades del reino.<br>Por esta razón, sus habitantes, aunque leales a la corona tienden a no ser muy amigables con los extranjeros.",
        "viewbox": "400 1100 1266 512",
        "imgsrc": "src/Bendrock.png"
    },
    {
        "titulo":"Gray Woods",
        "text":"El Gray Woods es la sombra que acecha al sur de Farkas, la leyenda dice que las raíces de sus árboles llevan cientos de años alimentándose de cadáveres de víctimas inocentes y su odio deformó su naturaleza del bosque.<br>Los exploradores que se han adentrado en lo más profundo y retornar, han reportado avistamientos de distintos tipos de no-muertos, hags y aberraciones así como residuos de rituales y ceremonias paganas.",
        "viewbox": "2060 1200 1266 512",
        "imgsrc": "src/Graywoods.png"
    },
    {
        "titulo":"Green Stone",
        "text":"Siendo el bosque más grande en el reino, Green Stone alberga la mayor cantidad de especies salvajes. Entre su follaje se encuentran distintas tribus que se consideran autónomas del reino así como innumerables bestias y elementales de todos los tamaños.",
        "viewbox": "660 950 1519 614",
        "imgsrc": "src/Greenstone.png"
    },
    {
        "titulo":"Gizem Forest",
        "text":"Hogar de la Orden Lanza Roble, el bosque de Gizem se diferencia del resto por su alta cantidad de criaturas del Féricas, y aunque muchas se consideran inofensivas y prefieren no interactuar con los visitantes, si deciden agregarte a sus “juegos” es posible que nunca logres salir de este bosque sin ayuda.",
        "viewbox": "1360 1450 1266 512",
        "imgsrc": "src/Gizem.png"
    }
    // {
    //     "titulo":"Las afueras",
    //     "text":"BendRockBendRock",
    //     "viewbox": "600 660 2532 1024",
    //     "imgsrc": "src/Afueras.png"
    // }
]
setPlace(place_number);

function setPlace (i){
    place_title.innerHTML = places[i].titulo;
    place_text.innerHTML = places[i].text;
    place_img.setAttribute('src', places[i].imgsrc);
    animateViewBox(i);
}

function nextPlace () {
    place_number ++;
    if (place_number > places.length-1){
        place_number -= places.length;
    }
    setPlace (place_number)
}
function previousPlace () {
    place_number --;
    if (place_number < 0){
        place_number += places.length;
    }
    setPlace (place_number)
}

function animateViewBox(i) {
    const tl = gsap.timeline({default:{duration:0.5}})
    .to(svg_map, {attr:{viewBox: places[i].viewbox}})

    GSDevTools.create({animation:tl});

    // svg_map.setAttribute('viewBox', places[i].viewbox)
}