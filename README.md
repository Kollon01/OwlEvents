# OwlEvents

## Instalacion de servidor

- `bash $ cd OwlEvents-Api`
- Configurar el config.json
- Configurar firebase
    - Crear una cuenta en firebase y un proyecto.
    - Seleccionar las autheticaciones disponibles a la izquierda. Por ahora solo correo y google.
    - Conseguir el json de credenciales
        - Configuracion > Cuentas de Servicio > Generar nueva clave privada
        - Renombrar el archivo generado a credentials.js y guardarlos en /config
- `bash $ npm install`

## Instalacion de front

- `bash $ cd owleventsfront`
- Configurar firebase
    - Conseguir el json de credenciales
        - Configuracion de Proyecto (el engranaje junto a informacion general) > Tus aplicaciones > Web app > Registrar aplicacion > Agregar Firebase a la aplicacion
        - Copiar el json de la variable firebaseConfig y reemplzar el que esta en src/services/firabase/index.js
- `bash $ npm install`
- Para probar que todo este correcto ingrese a /login e intente logearse con su cuenta de google

## TODOS

- Mejorar TODOS
- Sistema de authenticacion
- Front Basico con CRA
- Mejorar documentacion starter