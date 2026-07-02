# Login App - React Native (Expo)

Aplicación de ejemplo desarrollada con **React Native** utilizando **Expo**. El proyecto implementa una pantalla de inicio de sesión con componentes reutilizables y una autenticación simulada mediante una API mock.

## Características

- Pantalla de Login.
- Componentes reutilizables.
- Validación de campos obligatorios.
- Autenticación simulada.
- Feedback mediante Toasts.
- Diseño responsive.

## Tecnologías utilizadas

- React Native
- Expo
- JavaScript (ES6+)
- React Hooks (`useState`)
- Expo Go

## Estructura del proyecto

```
.
├── assets
│   └── images
│       └── logo.png
│
├── src
│   ├── api
│   │   └── auth.js
│   │
│   └── components
│       ├── Button.js
│       ├── Form.js
│       ├── Header.js
│       ├── InputField.js
│       ├── Logo.js
│       └── TextButton.js
│
├── App.js
├── index.js
├── package.json
└── README.md
```

## Componentes

### Header

Barra superior de la aplicación.

- Color corporativo.
- Texto centrado.
- Integración con la StatusBar.

---

### Logo

Muestra el logo de la aplicación.

Características:

- Imagen responsive.
- Mantiene la relación de aspecto mediante `resizeMode="contain"`.

---

### InputField

Componente reutilizable para la entrada de texto.

Propiedades:

| Prop | Tipo | Descripción |
|------|------|-------------|
| text | String | Placeholder del campo |
| isHidden | Boolean | Oculta el texto (contraseña) |
| onChangeText | Function | Callback al modificar el contenido |

---

### Button

Botón principal de la aplicación.

Implementado mediante `Pressable` para permitir una personalización completa del diseño.

Características:

- Color de fondo personalizable.
- Estado presionado.
- Estado deshabilitado.
- Elevación (Android).
- Sombras (iOS).

Propiedades:

| Prop | Tipo |
|------|------|
| text | String |
| onPress | Function |
| disabled | Boolean |
| backgroundColor | String |
| textColor | String |

---

### TextButton

Botón secundario utilizado para acciones como:

- Olvidé mi contraseña
- Crear cuenta

Implementado mediante `Pressable`.

---

### Form

Agrupa todos los componentes del formulario.

Gestiona:

- Email
- Contraseña

Utiliza `useState` para mantener el estado local de los campos.

## Autenticación simulada

El proyecto implementa una API mock ubicada en:

```
src/api/auth.js
```

La autenticación compara las credenciales ingresadas con un usuario hardcodeado para simular el comportamiento de un backend.

Ejemplo:

```javascript
export const MOCK_USER = {
    email: "usuario@email.com",
    password: "123456"
}
```

La función de login es asíncrona para simular el tiempo de respuesta de una API.

```javascript
export const login = async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return (
        email === MOCK_USER.email &&
        password === MOCK_USER.password
    );
}
```

## Flujo de autenticación

```
Usuario

↓

Completa Email

↓

Completa Contraseña

↓

Presiona "Ingresar"

↓

App.js

↓

login()

↓

Espera simulada (1 segundo)

↓

Comparación de credenciales

↓

Respuesta

↓

Toast de éxito o error
```

## Validaciones

El botón **Ingresar** permanece deshabilitado mientras alguno de los campos se encuentre vacío.

Condición utilizada:

```javascript
disabled={!email || !password}
```

## Feedback al usuario

Se utilizan Alerts para informar:

- Inicio de sesión exitoso.
- Credenciales inválidas.
- Acciones no implementadas ("Olvidé mi contraseña" y "Crear cuenta").

## Diseño

La interfaz está compuesta por:

- Header superior.
- Logo.
- Campos de Email y Contraseña.
- Botón principal.
- Botones de texto para acciones secundarias.

Todos los componentes mantienen un ancho del **85%** para lograr una interfaz consistente y responsive.

## Ejecución

Instalar dependencias:

```bash
npm install
```

Iniciar Expo:

```bash
npx expo start
```

O utilizando túnel:

```bash
npx expo start --tunnel
```

Escanear el código QR con **Expo Go**.
