# Установим базовый образ Node для сборки приложения
FROM node:18 AS build

# Установим рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Установим зависимости
RUN npm install

# Копируем остальной исходный код
COPY . .

# Собираем приложение для продакшена
RUN npm run build

# Используем образ Nginx для запуска приложения
FROM nginx:alpine

# Копируем собранное приложение в директорию, обслуживаемую Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем файл конфигурации Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Указываем, что контейнер будет слушать 80 порт
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
