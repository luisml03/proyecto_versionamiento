@echo off

REM Ruta al ejecutable de Node.js
set NODE_EXE="C:\Program Files\nodejs\node.exe"

REM Ruta al archivo JavaScript para insertar los datos
set JS_SCRIPT="C:\repositorio\hooks\take_commit.js"

REM Ejecutar el script JavaScript para insertar los datos en la base de datos
%NODE_EXE% %JS_SCRIPT% %1 %2