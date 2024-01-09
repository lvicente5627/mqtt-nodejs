# Usa una imagen base de Node.js basada en Alpine
FROM node:alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/app

# Copia los archivos de la aplicación al contenedor
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que la aplicación Node.js se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación en modo de desarrollo
CMD ["npm", "run", "dev"]

