# Veterinaria Barberini – Sitio Web

One-page website para Veterinaria Barberini. Paleta navy/crema, tipografía Playfair Display + Nunito. Secciones: hero, servicios, seguimiento post consulta, sobre nosotros, galería, reseñas de Google, FAQ y contacto.

## Estructura del proyecto

```
veterinaria-barberini/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── img/
│   └── (coloca aquí las fotos del veterinario)
└── README.md
```

## Cómo ejecutar localmente

### Opción 1 – Live Server (VSCode) ✅ Recomendado
1. Abrí la carpeta en Visual Studio Code
2. Instalá la extensión **Live Server** (ritwickdey.LiveServer)
3. Hacé clic derecho en `index.html` → **"Open with Live Server"**

### Opción 2 – Python (sin instalar nada extra)
```bash
# Python 3
python -m http.server 3000
# Luego abrí http://localhost:3000
```

### Opción 3 – Node.js (npx serve)
```bash
npx serve .
# Luego abrí la URL que muestra en pantalla
```

## Agregar imágenes reales

Guardá las fotos en la carpeta `img/` y actualizá el `<img src="...">` en el `index.html`.

## Personalización rápida

- **Teléfono / WhatsApp**: buscar `5492216780950` / `542216780950` en `index.html` y reemplazarlo
- **Email**: buscar `veterinariabarberini@gmail.com`
- **Instagram**: el link ya apunta a `@veterinariabarberini.lp`
- **Colores**: editá las variables CSS en `:root` dentro de `css/style.css` (`--navy`, `--cream`, etc.)
- **Reseñas de Google**: reemplazar los textos de ejemplo en la sección `#resenas` por reseñas reales
- **Precio de consulta**: buscar `$60.000` en la sección FAQ

## Notas

- Las imágenes `LOGO.jpg`, `vet-home.jpg` y `vet-pug.jpg` en `img/` quedaron de una versión anterior del diseño y ya no se usan en `index.html`. Se pueden borrar si no se van a reutilizar.
