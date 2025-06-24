# Sitio Web Colegio Técnico Vida Nueva

## Descripción
Sitio web institucional del Colegio Técnico Vida Nueva, desarrollado con Bootstrap 5 y diseñado para mostrar la oferta académica, servicios y especialidades técnicas de la institución.

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.6
- Font Awesome 6.3.0
- Google Fonts (Montserrat, Roboto Slab)

## Características Principales

### Diseño Responsivo
- Navegación adaptativa con menú desplegable para dispositivos móviles
- Diseño fluido que se adapta a diferentes tamaños de pantalla
- Soporte para modo oscuro automático basado en preferencias del sistema

### Animaciones y Efectos
- Pantalla de carga animada con efecto de líquido
- Transiciones suaves en la navegación
- Efectos hover en tarjetas y botones

### Secciones Principales
1. **Inicio**
   - Presentación principal con llamada a la acción
   - Resumen de servicios
   - Galería de especialidades técnicas

2. **Servicios**
   - Formación académica
   - Desarrollo integral
   - Programas especiales
   - Áreas de desarrollo

3. **Especialidades Técnicas**
   - Mecatrónica
   - Informática
   - Electromecánica Automotriz
   - Gestión Administrativa
   - Modalidad Semipresencial
   - Modalidad a Distancia

4. **Sección Nosotros**
   - Información institucional
   - Historia y valores

5. **Contacto**
   - Formulario de contacto
   - Información de ubicación

### Integración Externa
- Acceso directo al Aula Virtual
- Enlaces a redes sociales
- Integración con servicios de Google

## Estructura de Archivos
```
├── assets/
│   ├── img/
│   │   ├── headers
│   │   ├── portfolio
│   │   └── logos
│   └── favicon.ico
├── css/
│   └── styles-new.css
├── js/
│   └── scripts.js
└── html/
    ├── index.html
    ├── servicios.html
    ├── mecatronica.html
    ├── informatica.html
    ├── automotriz.html
    ├── gestion.html
    ├── semipresencial.html
    ├── distancia.html
    ├── nosotros.html
    └── contacto.html
```

## Mantenimiento
Para realizar modificaciones en el sitio:

1. Los estilos personalizados se encuentran en `css/styles-new.css`
2. Las funciones JavaScript están en `js/scripts.js`
3. Las imágenes y recursos se almacenan en la carpeta `assets`
4. Cada especialidad tiene su propia página HTML independiente

## Dependencias Externas
- Bootstrap 5.3.6: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css`
- Font Awesome 6.3.0: `https://use.fontawesome.com/releases/v6.3.0/js/all.js`
- Google Fonts: Montserrat y Roboto Slab

## Características de Accesibilidad
- Etiquetas ARIA para mejorar la navegación
- Textos alternativos en imágenes
- Estructura semántica HTML5
- Alto contraste en textos y elementos interactivos