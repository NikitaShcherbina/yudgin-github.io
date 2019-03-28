chcp 65001
set /P name="Введите название файла: "
echo sass --watch -s compressed %name%.scss:..\css\%name%.css >> "start_scss - "%name%.cmd
:EOF