# weather-frontend-m3
Proyecto portafolio / Módulo III / Bootcamp Frontend TD

Visita el proyecto en: https://ramirezjm.github.io/weather-frontend-m3/

ClimApp es una aplicación que entrega pronósticos meteorólogicos precisos y personalizados. Ofrecemos una muestra de nuestro trabajo con una selección de distintas ciudades del mundo.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![Static Badge](https://img.shields.io/badge/HTML5-%23f06529)
![Static Badge](https://img.shields.io/badge/CSS3-%232965f1)
![Static Badge](https://img.shields.io/badge/Javascript-%23f0db4f)
![Static Badge](https://img.shields.io/badge/Bootstrap-8A2BE2)
![Static Badge](https://img.shields.io/badge/Sass-CC6699)

<div><img src='./assets/images/darkscreen1.jpg' width=600></div>
<div><img src='./assets/images/lightscreen1.jpg' width=600></div>

#### Estructura de carpetas
EL proyecto se crea usando la metodología __BEM__ (en lugares precisos y sin interferir con el sistemas de clases de bootstrap) y estilos personalizados con __Sass__ (usando la estructura 7-1). He aquí el árbol del repositorio:

```
weather-frontend-m3/
├── .gitignore
├── LICENSE
├── README.md
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── styles.css.map
│   ├── images/
│   ├── js/
│   └── scss/
│       ├── abstracts/
│       │   ├── _mixins.scss
│       │   └── _variables.scss
│       ├── base/
│       │   └── _typography.scss
│       ├── components/
│       │   ├── _buttons.scss
│       │   ├── _components.scss
│       │   ├── _form.scss
│       │   └── _pronostico-modal.scss
│       ├── layout/
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   ├── _layout.scss
│       │   ├── _navbar.scss
│       │   └── _pronostico-section.scss
│       └── main.scss
├── index.html
├── package-lock.json
├── package.json
└── postcss.config.js
```

#### 1. Clonar el repositorio

  ```bash
   git clone https://github.com/RamirezJM/weather-frontend-m3.git
   cd weather-frontend-m3
```

#### 2. Instalar dependencias

```bash
npm install
```
--> Dependencias usadas en el proyecto:

 "_@fullhuman/postcss-purgecss_": "^7.0.2",
 
 "_autoprefixer_": "^10.4.22",
 
 "_bootstrap_": "^5.3.8",
 
 "_postcss_": "^8.5.6",
 
 "_postcss-cli_": "^11.0.1",
 
 "_sass_": "^1.95.1"


 #### 3. Compilar Sass

 ```bash
npm run watch:css
```

#### 4. Ejecutar el el proceso de build

```bash
npm run build:css
```

--> Build incluye __purgecss__, que permite eliminar todas las clases no usadas una vez desplegado el proyecto, reduciendo el peso del archivo final compilado (~250kb -> ~50kb), y borrando alrededor de 10.000 líneas de código no utilizado. Se incluye una _safelist_ para resguardar las clases usadas y evitar que sean borradas.
