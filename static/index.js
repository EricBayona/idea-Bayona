const header = document.querySelector("#header");
header.innerHTML=`
<div class="contenedor">
    <div class="logo">
        <h2 class="imagen-logo">Obras de Arte</h2>
    </div>
        <nav class="navegacion">
            <a class="btn-menu" href="../index.html">Inicio</a>
            <a class="btn-menu" href="#contenedor-nosotros">Sobre Nosotros</a>
            <a class="btn-menu" href="../pages/favoritos.html">Favoritos</a>
            <a class="btn-menu" href="#contenedor-actividadades">Contacto</a>
        </nav>
</div>`

const main = document.querySelector('#main');
const contendorTarjetas= document.querySelector('#contenedor-tarjetas-pinturas')
const ObrasDeArte = [
    {
        id:1,
        nombre:"La gran ola de Kanagawa",
        autor:'Katsushika Hokusai',
    },
    {
        id:2,
        nombre:"Creación de Adán en la Capilla Sixtina",
        autor:'Miguel Ángel Buonarroti',
    },
    {
        id:3,
        nombre:"El jardín de las Delicias",
        autor:'El Bosco',
    },
    {
        id:4,
        nombre:"El Guernica",
        autor:'Pablo Picasso',
    },
    {
        id:5,
        nombre:"La Gioconda",
        autor:'Leonardo da Vinci',
    },
    {
        id:6,
        nombre:"La sorpresa del trigo",
        autor:'Maruja Mallo',
    },
]

function crearTarjetasPinturas() {
    contendorTarjetas.innerHTML =""
    ObrasDeArte.forEach(ObrasDeArte => {
            const nuevaPintura = document.createElement("div");
            nuevaPintura.classList = "tarjeta-ObrasDeArte";
            nuevaPintura.innerHTML = `
            <img src="./img/${ObrasDeArte.id}.jpg">
            <h3>${ObrasDeArte.nombre}</h3>
            <p>${ObrasDeArte.autor}</p>
            <div>
                <button id="favoritos">Agregar a Favoritos</button>
            </div>
        `;
            contendorTarjetas.appendChild(nuevaPintura);
        });
    }


crearTarjetasPinturas(ObrasDeArte)

const btnFavoritos = document.querySelectorAll('#favoritos');
const contenedorFavoritosAgregados = JSON.parse(localStorage.getItem('favoritosGuardados')) || [];
btnFavoritos.forEach(favorito => {
    favorito.addEventListener('click', () => {
      const cajaContenedora = favorito.parentNode;
      const contenedorPrincipal = cajaContenedora.parentNode;
      const contenidoHTML = contenedorPrincipal.outerHTML;

      const obraExistente = contenedorFavoritosAgregados.find(obra => obra.contenidoHTML === contenidoHTML);
      if (!obraExistente) {
        const imagen = contenedorPrincipal.querySelector('img').src;
        const rutaImagen = imagen.replace('http://127.0.0.1:5501', '..');
        const titulo = contenedorPrincipal.querySelector('h3').textContent;
        const autor = contenedorPrincipal.querySelector('p').textContent;
  
        const obra = {
          rutaImagen,
          titulo,
          autor,
          contenidoHTML
        };
  
        contenedorFavoritosAgregados.push(obra);
        localStorage.setItem('favoritosGuardados', JSON.stringify(contenedorFavoritosAgregados));
      }
    });
  });
