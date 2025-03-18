# API Users

Este proyecto es una API REST desarrollada con Node.js, Express y TypeScript, con MongoDB como base de datos. Permite gestionar usuarios con operaciones CRUD.

## 🚀 Clonar y Ejecutar el Proyecto

### 1. Clonar el repositorio

```bash
git clone git@github.com:Florez264/api-users.git
cd api-users
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto y define la siguiente variable:

```
MONGO_URI=mongodb://localhost:27017/prueba_backend
PORT=3000
```

### 4. Ejecutar la API en modo desarrollo

```bash
npm run dev
```

### 5. Ejecutar la API en producción

```bash
npm run build
npm start
```

---

## 📌 Rutas y Endpoints

### 1️⃣ Crear un usuario
**POST** `/create-user`
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "edad": 30,
  "direcciones": [
    {
      "calle": "Av. Principal",
      "ciudad": "Lima",
      "pais": "Perú",
      "codigo_postal": "15001"
    }
  ]
}
```

### 2️⃣ Obtener lista de usuarios
**GET** `/list-users`

### 3️⃣ Buscar usuarios por ciudad
**GET** `/buscar?ciudad=Lima`

### 4️⃣ Obtener un usuario por ID
**GET** `/get-user/:id`

### 5️⃣ Actualizar un usuario
**PUT** `/update-user/:id`
```json
{
  "nombre": "Juan Pérez",
  "edad": 31
}
```

### 6️⃣ Eliminar un usuario
**DELETE** `/delete-user/:id`

---

## 🛠 Tecnologías Utilizadas
- Node.js
- Express
- TypeScript
- MongoDB con Mongoose
- Nodemon (para desarrollo)

---

## 📝 Notas
- Asegúrate de tener MongoDB corriendo localmente o usar un servicio en la nube.
- Puedes probar la API con herramientas como [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/).
- Sientete libre de contribuir o sugerir mejoras.

📌 **Repositorio:** [GitHub](git@github.com:Florez264/api-users.git)

