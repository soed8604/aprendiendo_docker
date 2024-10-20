FROM node:19.2-alpine3.16

# cd app
WORKDIR /app

# Destino /app
COPY . .

# Instalar las dependencias
RUN npm install

# Realizar testing
RUN npm run test

# Eliminar archivos y directorios no necesarios en producción
RUN rm -rf tests && rm -rf node_modules

# Copia unicamente las dependencias de prod
RUN npm install --prod

# Comando para ejecutar la aplicación
ENTRYPOINT [ "node","app.js" ]