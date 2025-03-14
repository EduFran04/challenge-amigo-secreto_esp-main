# Amigo Secreto

## Descripción
Este proyecto es una aplicación web que permite organizar un sorteo de "Amigo Secreto" de manera sencilla. Los usuarios pueden ingresar los nombres de los participantes y realizar el sorteo aleatorio para asignar un amigo secreto a cada uno.

## Características
- Agregar nombres de amigos a una lista.
- Visualizar la lista de amigos ingresados.
- Realizar un sorteo aleatorio de "Amigo Secreto" evitando repeticiones.
- Mostrar el resultado del sorteo en pantalla.
- Diseño responsivo y atractivo.

## Tecnologías utilizadas
- **HTML**: Estructura de la página.
- **CSS**: Estilización de la interfaz de usuario.
- **JavaScript**: Lógica de funcionamiento del sorteo.

## Instalación y uso
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```
2. Abre el archivo `index.html` en un navegador web.
3. Ingresa los nombres de los amigos en el campo de texto y presiona "Añadir".
4. Presiona el botón "Sortear amigo" para obtener un nombre aleatorio.

## Estructura del Proyecto
```
|-- index.html  (Estructura principal de la aplicación)
|-- style.css   (Estilos para la interfaz de usuario)
|-- app.js      (Lógica del sorteo y manipulación del DOM)
|-- assets/     (Imágenes y otros recursos)
```

## Funcionalidades clave
### 1. Agregar amigos
- Los nombres ingresados se almacenan en la lista `listaAmigos`.
- Se valida que no se ingresen valores vacíos.

### 2. Mostrar lista de amigos
- Los nombres ingresados se muestran en una lista en pantalla.

### 3. Sorteo de amigos
- Se selecciona aleatoriamente un amigo que aún no haya sido sorteado.
- Se evita la repetición de nombres hasta que todos sean seleccionados.

## Mejoras futuras
- Implementar la funcionalidad de reiniciar el sorteo.
- Agregar la opción de descargar la lista de amigos secretos.
- Mejorar la interfaz con animaciones y efectos visuales.

## Autor
Desarrollado por [Tu Nombre].

## Licencia
Este proyecto está bajo la licencia MIT.

