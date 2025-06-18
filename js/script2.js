const carta = $(".agg");

const pelicula = {
    nombre: "John Wick",
    imagen: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg",
    imagen_siguiente: "https://media.gq.com.mx/photos/5ede62be799362c9dbb466ff/16:9/w_2560%2Cc_limit/WICK.jpg",
}

carta.click(
    function () {
        const image = $(this).children('img').attr('src');
        localStorage.image = image;
        document.location.href = "./descripcion.html";
    }
)

