# Equipo Nakuru 🦏

![](/public/images/kenia.png)

¡Bienvenidos equipo Nakuru! Sabíamos que no nos ibáis a decepcionar. Habéis encontrado el repositorio, y eso nos da algo de esperanza, pero esto es solo el primer paso. Aún no sabéis de qué es la aplicación, pero aún no confiamos suficientemente en vosotros como para daros esas información. *Si esta parte sale bien, quizá...*

## Misión actual 🔓

### Preparación 💻

Este repositorio se ha generado mediante `express-generator` y es el que vais a usar para llevar a cabo todo el desarrollo. Lo primero que tenéis que hacer es hacer el setup para poder trabajar mediante **git colaborativo**. 

Ahora:

- El capitán o capitana del equipo se debe forkear el repositorio
- Todos los miembros deben clonarlo desde **la cuenta de github del capitán/a**
- El capitán/a debe daros permisos a todos para poder escribir en el código. Debéis aceptar esos permisos (os llegará un correo).
- Todos los miembros deben cambiar el nombre del archivo `sample.env` por `.env`.
- Una vez hecho, debéis ejecutar `npm install`
- Probad que todo funciona correctamente ejecutando `npm run dev`

> Si hay algún error en el repositorio, acudid al punto de control 📍

⚠️ El repositorio tiene todos los paquetes que vais a necesitar ya instalados.

---

### Primer paso 🔐

Lo primero que tenéis que hacer son las rutas de autenticación:

```bash
GET /auth/signup
POST auth/signup
GET /auth/login
POST /auth/login
GET /auth/logout
```

Podéis repartiros las tareas como vosotros consideréis, y hacer las vistas como vosotros creáis conveniente. Solo hay una norma: cada feature debe tener una rama, y una vez terminado, debéis ir haciendo merge a la rama `dev`. 

La rama `dev` ya existe, y todos podéis ir a ella haciendo `git checkout dev`. Os recomendamos que repaséis la chuleta de git colaborativo y que, en las primeras iteraciones, os ayudéis los unos a los otros.

Antes de continuar, solo hay un problema, y es que **el modelo de User se ha perdido**, por lo que no podemos avanzar. La única pista que tenemos es la siguiente:

