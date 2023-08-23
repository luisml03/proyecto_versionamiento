# Proyecto de versionamiento
   [![N|Solid](https://github.com/luisml03/proyecto_ada_tor/blob/main/assets/brain.png)](https://github.com/luisml03/proyecto_ada_tor/blob/main/assets/moon.png)
## _Tecnologias utilizadas_


[![N|Solid](https://github.com/luisml03/proyecto_ada_tor/blob/main/assets/node.jpg)](https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi)    [![N|Solid](https://github.com/luisml03/proyecto_ada_tor/blob/main/assets/html.jpg)](https://nodejs.org/en/download)  [![N|Solid](https://github.com/luisml03/proyecto_ada_tor/blob/main/assets/npm.jpg)](https://www.npmjs.com/) [![N|Solid](https://github.com/luisml03/proyecto_ada_tor/blob/main/assets/oracle.jpg)](https://download.oracle.com/otn_software/nt/instantclient/2110000/instantclient-basic-windows.x64-21.10.0.0.0dbru.zip) [![N|Solid](https://github.com/luisml03/proyecto_ada_tor/blob/main/assets/torto.png)](https://tortoisesvn.net/downloads.html) [![N|Solid](https://github.com/luisml03/proyecto_ada_tor/blob/main/assets/electron.jpg)](https://electronjs.org/es/) [![N|Solid](https://github.com/luisml03/proyecto_ada_tor/blob/main/assets/subversion.png)](https://subversion.apache.org/) 


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
  <a href= "https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"></a>
 ![Static Badge](https://img.shields.io/badge/Design_by-luisml03-blue)
 ![Static Badge](https://img.shields.io/badge/Version-%201.0%20-%20green)
 <a href="https://github.com/luisml03/proyecto_ada_tor/main/Readme.markdown"><img src="https://github.com/facebook/docusaurus/actions/workflows/tests.yml/badge.svg" alt="GitHub Actions status"></a>



> Este documento es el manual de usuario de instalación del aplicativo para manejo de versiones, tener en cuenta que para muchos pasos es necesario el acompañamiento  del desarrollador.

## Requisitos

- Tener instalado Node js en caso de no tenerlo instalarlo, dar click en la imagen de arriba, donde esta el logo.
- Descargar el codigo del repositorio Github [![N|Solid](https://github.com/luisml03/proyecto_ada_tor/blob/main/assets/github.jpg)](https://github.com/luisml03/proyecto_ada_tor).
- Tener instalado el tortoisseSVN.
- Tener instalado por lo menos el Oracle Instant Client basic x64, dar click en la imagen de oracle de arriba para la descarga.
- Conocer las credenciales de la base de datos a conectar.
- Tener conocimientos basicos sobre los hooks y comandos del svn.
- Tener instalado vscode (preferencialmente) o algún editor de codigo.

## Installation
1. Descargar el codigo del repositorio.
2. Crear una carpeta y utilizando tortoisse hacer esa carpeta un repositorio.
3. En la carpeta que se genera con el nombre hooks ingresar y pasar los archivos descargados del repositorio a esta carpeta, se debe ver de esta forma, excepto por el archivo de pruebas que no es necesario.

[![N|Solid](https://github.com/luisml03/proyecto_ada_tor/blob/main/assets/conf.png)](https://github.com/luisml03/proyecto_ada_tor/blob/main/assets/conf.png).

4. Luego de tener el codigo del repositorio en la carpeta hooks, abrir la carpeta hooks en vscode o el editor elegido y ejecutar los siguientes comandos.
```sh
CONTROL + BLOCK MAYUS + Ñ -- Abre la terminal
```
Ejecutar el siguiente comando en la consola.
```sh
npm install oracledb@4.2.0 -- instala la ultima version compatible con oracle 11g
npm i -- Instala las dependencias necesarias
```
Luego
```sh
cd ventana -- Cambiar de carpeta
```
y
```sh
npm install oracledb@4.2.0 -- instala la ultima version compatible con oracle 11g
npm i -- Instala las dependencias necesarias
```
5. Esto generara una carpeta llamada node_modules y dos archivos package en cada carpeta(hooks y ventana), pero es algo normal.
6. Despues de esto se deben realizar varias verificaciones para asegurar que este funcionando bien, ejecutar los siguientes pasos.
Abrir el cmd y ejecutar el siguiente comando.
```sh
netstat -ano | findstr 3000 -- No debe devolver nada,  no de ser asi hablar con el desarrollador
```
Volver a vscode y a la terminal y ejecitar el siguiente comando.
```sh
cd ventana -- Si no estas en la carpeta ventana
```
Luego
```sh
node backend.js -- Debe devolver un aviso de que se esta ejecutando en el puerto 3000
```
Y volver abrir el cmd y ejecutar el siguiente comando.
```sh
netstat -ano | findstr 3000 -- Debe devolver algo, de no ser asi hablar con el desarrollador
```
En caso de que todo funcione bien.

8. Luego de esto se deben configurar los hooks apuntando al repositorio en el que se desea implementar la funcionalidad, se preparo un video para esto, asi que aqui comparto el [enlace](https://drive.google.com/file/d/1IErreVaCkDYavLUN9cMUXLgdkDAj1hle/view?usp=drivesdk).
9.  Por ultimo se debe validar recuerda que se debe validar que tanto el client x64 de oracle como el node js este agregados en las variables e entorno


  
