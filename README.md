Single page application: 
У нас 4 папки и порядок запуска такой ("пишем..." - значит в папке открываем консоль и там пишем):
- application - фронтенд -  ставим react, npm и т.п. - пишем npm start - запустили страничку, браузер нам открыл localhost/3000

- db - тут лежит база данных на ms sql server. качаем sql server, включаем его(если первый раз знакомимся с sqlserver) - 
так же качаем sqlcmd -  пишем sqlcmd -i main.sql - заполняем данными - пишем sqlcmd -i content.sql

- backend - тут сервер лежит - это скала - <del>это круто</del> ставим jre10,jdk11,JDBC Driver for SQL Server,sbt - и пишем sbt run - ждем Server start

- admin-panel - тут админ панель на react-admin - логин:admin пароль:panel - для sql,если что login:root password:root - пишем npm start - перекинет 
нас на localhost/3001, это мы подтвердим в консоле

все готово!
