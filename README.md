Тестовый репозиторий, для испытания модулей npm.
Исключительно лабораторные черновые работы.

1. Проверка установлен ли Node.js
```
npm -v
```
2. Проверка установлен ли NPM
```
npm -v
```
3. Создан файл README.md

4. Создан файл .giignor и вписаны игнорируемые файлы

5. git init

6. Первый коммит, инициализация.

7. Создал связку с Гитхабом и запушил:
  
```
git remote add origin https://github.com/Evgheni-Nichitenco/gulp_test.git

git push -u origin master
```
9. Создаем файл **package.json** с помощью команды
```
npm init
```
10. Ставим пакет **browser-sync** для Галпа.

```
https://www.browsersync.io/docs#installation
```

11. В команде установки можно написать сразу все нужные пакеты:

```
npm install browesr-sync gulp gulp-gug gulp-sass --save-dev
```
Всё ставится локально, в папку проекта. Соответственно скачались пакеты:  
**browser-sync**  
**gulp**  
**gulp-pug**  
**gulp-sass**

12. Команда **npm update npm -g** позволяет обновить версию npm.

13. **npm list --depth=0** показывает список установленных пакетов.

14. Команда **npm outdated --depth=0** покажет список установленных пакетов,
которые требуют обновления.

15. **npm uninstall package** — удаляет установленный пакет по имени.

16. Создаем файл **gulpfile.js** и подключаем в нем Галп.
```
https://www.npmjs.com/package/gulp
```
17. Подключаем **browser-sync**:
```
https://browsersync.io/docs/gulp
```
Работа сервера проверяется командой **gulp browser-sync**

18. Подключаем **gulp-pug**
```
https://www.npmjs.com/package/gulp-pug
```
19. Создается папка source и в ней вложенные папки прокекта, для картинок, стилей, шаблона,
шрифтов, и т.д.

20. Подключаем **gulp-sass**
```
https://www.npmjs.com/package/gulp-sass
```
21. Подключаем плагин для спрайтов 
```
https://www.npmjs.com/package/gulp.spritesmith
```
```
npm i gulp.spritesmith --save-dev
```
22. Создаем пакет **rimraf** для очистки от мусора

23. Создаем задачи для копирования шрифтов и картинок в папки готового проекта

24. Cоздаем задачу для одновременного копирования картинок и файлов.

25. Создаем вотчер для автоматизации всех процессов Галпа, и выполнение задачи "по дефолту".

26. Ставим локально 4-ю локальную версию Галп.
Для этого в package.json удаляем строчку с записью про Галп,
а Также удаляем папку node_modeles.
Затем выполняем команду
```

```
27. В файл package.json  вписываем **"start": "gulp"** для запуска галпа по 
команде **npm start**.

28. Ставим пакет для работы с иконками и нормалайзер
```
npm install font-awesome normalize.scss --save
```
29. В главном файле SCSS делаем подключение:
```
@import "../../node_modules/font-awesome/scss/font-awesome";
@import "../../node_modules/normalize.scss/normalize";
```
30. Чтобы иконки отображались в браузере Firefox, в хедере главного HTML файла вписываем строчку
```
link(rel="stylesheet" type="text/css" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css")
```




