const carta = $(".agg");
const divObjetos = $(".objetos")

carta.click(
    function () {
        const image = $(this).children('img').atrr('src');
        localStorage.image = image;
        document.location.href = "./descripcion.html";
    }
)

const peliculas = [{
    nombre: "John Wick",
    imagen: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg",
    imagen_siguiente: "https://media.gq.com.mx/photos/5ede62be799362c9dbb466ff/16:9/w_2560%2Cc_limit/WICK.jpg",
    },
    {
    nombre: "Hombres de negro",
    imagen: "https://static.wikia.nocookie.net/marvelpeliculas/images/6/60/280px-MIB1_Poster.jpg/revision/latest?cb=20121007002001&path-prefix=es",
    imagen_siguiente: "https://media.ambito.com/p/db6002b19b7164db41e97bbaabafdb1e/adjuntos/239/imagenes/039/972/0039972000/hombres-negrojpg.jpg",
    },
    {
    nombre: "Volver al futuro",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuVvd8yahD-VoRYT__hJhCZd9LhPto0rHmA&s",
    imagen_siguiente: "https://i0.wp.com/tomatazos.buscafs.com/2020/10/volver-futuro-regresa-cines-35-aniversario.jpg?quality=75&strip=all",
    },
    {
    nombre: "Rapidos y furiosos 5",
    imagen: "https://es.web.img3.acsta.net/medias/nmedia/18/83/53/62/19695928.jpg",
    imagen_siguiente: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXpVd8AUGRaeV1onSRu9Fa8upj5OsRu0Zdg&s",
    },
    {
    nombre: "Casa fantamas",
    imagen: "https://es.web.img3.acsta.net/pictures/210/107/21010781_20130606181905758.jpg",
    imagen_siguiente: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15DB8/production/_90382598_1e176898-7d27-4bb8-83d4-966e8fde26b4.jpg.webp",
    },

]

carta.click(
    function () {
        const image = $(this).children('img').attr('src');
        localStorage.image = image;
        document.location.href = "./descripcion.html";
    }
)

for (let i = 0; i < peliculas.length; i++) {
    divObjetos.append(
        `
        <div class='carta-prueba'>
            <img src='${peliculas[i].imagen}'>
            <input type='hidden' value='${peliculas[i].imagen_siguiente}'>
        </div>
        `
    )
}

const cartaPrueba = $(".carta-prueba")
cartaPrueba.click(
    function () {
        localStorage.image = $(this).children("input").val();
        document.location.href = "./descripcion.html";
    }
)

