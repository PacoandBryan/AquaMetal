# Configuración del Formulario de Contacto (Headless WordPress)

Para que el formulario de contacto funcione correctamente con la aplicación "Headless" (React/Next.js), recomendamos usar el plugin **Contact Form 7** en lugar de Jetpack Forms. Esto se debe a que Contact Form 7 incluye una API REST nativa que permite enviar mensajes desde sitios externos de manera segura y estándar.

## Paso 1: Instalar el Plugin
1. En tu panel de WordPress, ve a **Plugins > Añadir nuevo**.
2. Busca "**Contact Form 7**".
3. Instala y activa el plugin.

## Paso 2: Crear el Formulario
1. Ve a **Contacto > Añadir nuevo** en el menú de WordPress.
2. Ponle de título: "Formulario Web".
3. En la pestaña **Formulario**, borra todo el contenido y pega el siguiente código para que coincida exactamente con los campos de tu página web:

```html
<label> Nombre
    [text* your-name autocomplete:name placeholder "Tu nombre"] </label>

<label> Email
    [email* your-email autocomplete:email placeholder "ejemplo@correo.com"] </label>

<label> Asunto
    [text* your-subject placeholder "Cotización / Información"] </label>

<label> Mensaje
    [textarea* your-message placeholder "¿En qué podemos ayudarte?"] </label>

[submit "Enviar Mensaje"]
```

4. Ve a la pestaña **Correo** y configura a qué dirección quieres recibir los mensajes (por defecto usa el email del administrador).
5. Haz clic en **Guardar**.

## Paso 3: Obtener el ID del Formulario
1. Una vez guardado, verás un "shortcode" en la parte superior, algo como: `[contact-form-7 id="123" title="Formulario Web"]`.
2. El número **123** (en este ejemplo) es tu **FORM_ID**.

## Paso 4: Conectar con la Página Web
1. Abre el archivo `app/contacto/page.tsx` en este proyecto.
2. Busca la línea:
   ```typescript
   const FORM_ID = "YOUR_FORM_ID";
   ```
3. Reemplaza `"YOUR_FORM_ID"` con el número que obtuviste en el paso anterior (ej. `"123"`).
4. Asegúrate que la variable `WORDPRESS_URL` en ese mismo archivo apunte a tu sitio de WordPress (ej. `"https://aqua-metal.com"`).

## Paso 5: Ver los Mensajes en el Portal (Opcional pero Recomendado)
Por defecto, **Contact Form 7** NO guarda los mensajes en el portal de WordPress, solo los envía por correo electrónico.

Si quieres ver una lista de los mensajes recibidos dentro de tu panel de administración (como lo hacías con Jetpack):

1. Ve a **Plugins > Añadir nuevo**.
2. Busca e instala el plugin **"Flamingo"** (es del mismo creador de Contact Form 7).
3. Una vez activado, aparecerá un nuevo menú llamado **Flamingo** en tu barra lateral.
4. Ahí encontrarás la bandeja de entrada con todos los mensajes recibidos desde tu web.

## Nota Importante sobre CORS
Si estás probando esto desde `localhost` pero tu WordPress está en un dominio real (online), es posible que necesites permitir peticiones externas.
- Si falla el envío, instala el plugin **"WP GraphQL CORS"** o añade este código al `functions.php` de tu tema en WordPress:

```php
add_action( 'init', function() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
});
```
*(Nota: Para producción, cambia el `*` por el dominio real de tu web, ej. `https://tu-sitio-web.com`)*
