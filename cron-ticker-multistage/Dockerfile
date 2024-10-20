# Stage dependencias de desarrollo
FROM node:19.2-alpine3.16 AS dependencias
# cd app
WORKDIR /app
# Destino /app
COPY package.json ./
# Instalar las dependencias
RUN npm install

# Stage de build and test
FROM node:19.2-alpine3.16 AS builder
# cd app
WORKDIR /app
# Copiar las dependencias del stage de dependencias a builder
COPY --from=dependencias /app/node_modules ./node_modules
# Copiar todo el proyecto de local a la imagén
COPY . .
# Correr las pruebas
RUN npm run test

# Stage para solo utilizar las dependencias de producción
FROM node:19.2-alpine3.16 AS prod-dependencias
# cd app
WORKDIR /app
# Copiar archivo package.json local a la nueva imagen
COPY package.json ./
# Instalar las dependencias de producción
RUN npm install --prod

# Stage de runner
FROM node:19.2-alpine3.16 AS runner
# cd app
WORKDIR /app
# Copiar las dependencias de producción al nuevo stage
COPY --from=prod-dependencias /app/node_modules ./node_modules
# Copiar el archivo app.js local a la nueva imagen
COPY app.js ./
# Copiar el directorio tasks local a la nueva imagen
COPY tasks/ ./tasks
# Comando para ejecutar la aplicación
ENTRYPOINT [ "node","app.js" ]