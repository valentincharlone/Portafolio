import boots from '../assets/boots.png'
import carnes from '../assets/carnes.png'
import tasks from '../assets/frontend-task.png'
import blog from '../assets/blog.png'
import weather from '../assets/weather.png'
import movies from '../assets/movies.png'
import news from '../assets/1news.png'

export const works = [
    {
        'id': 'News',
        'name': 'News',
        'url': 'https://github.com/valentincharlone/News-homepage',
        'tecnologias': 'HTML - CSS',
        'link': 'https://comforting-sherbet-b52501.netlify.app/',
        'img': `${news}`,
        'description': 'Proyecto elaborado tomando como diseño uno de los challenge de frontendmentor.io, pagina estatica utilizando solamente HTML y CSS Grid'
    },
    {
        'id': 'Pagina de botines',
        'name': 'Venta de botines',
        'link': 'nada',
        'url': 'https://github.com/valentincharlone/TPE-Venta-de-botines',
        'tecnologias': 'HTML - CSS - JavaScript (vue) - PHP - SQL',
        'description': 'Proyecto creado para la facultad en el cual se trabajo tambien de manera colaborativa utilizando PHP como lenguaje principal, ademas usamos MVC como estructura y PDO - trabajamos con XAMP para hostear de manera local el proyecto',
        'img': `${boots}`
    },
    {
        'id': 'carnes premiun',
        'name': 'Carnes premiun',
        'url': 'https://github.com/valentincharlone/carnesPremiun',
        'tecnologias': 'HTML, CSS, JavaScript',
        'link': 'https://carnespremiun.netlify.app/',
        'img': `${carnes}`,
        'description': 'Proyecto finalizado del curso de Javascript de CoderHouse, E-commerce en el que se trabajo con HTML - CSS Y JAVASCRIPT, ademas POO y localStorage para almacenar los datos del lado del cliente'
    },
    {
        'id': 'frontend-mentor',
        'name': 'Tasks',
        'url': 'https://github.com/valentincharlone/frontend-mentor-tailwind-react',
        'tecnologias': 'React - Taildwind ',
        'link': 'https://proyectoreactvachi.netlify.app/',
        'description': 'Proyecto creado usando React. CRUD de tareas trabajando con hooks y localStorage, inicializando el proyecto con Vite, tambien se aplico el tema nocturno y claro y para el estilo use el framework Tailwind CSS muy bueno!',
        'img': `${tasks}`
    },
    {
        'id': 'movies',
        'name': 'App Movies',
        'url': 'https://github.com/valentincharlone/app-movies',
        'tecnologias': 'React - CSS Module ',
        'link': 'https://app-movies-tmdb.netlify.app/',
        'description': 'Proyecto creado tambien usando React en el cual consumimos una API de TMDB, inicializando el proyecto con create-react-app y en los estilos utilizamos CSS Modules',
        'img': `${movies}`
    },
    {
        'id': 'Weather',
        'name': 'Weather app',
        'url': 'https://github.com/valentincharlone/Weather-app',
        'link': 'https://storied-custard-7cfc03.netlify.app/',
        'description': 'App creada e inicializada con Vite donde se empleo el uso de Weather API para consultar el clima sobre una ciudad especifica, la cual esta hecha con React y en los estilos y componenetes se utilizo Material UI ',
        'tecnologias': 'React - Material UI',
        'img': `${weather}`
    },
    
]