# React + TypeScript Library Template con Vite (Modo Biblioteca)

Plantilla minimalista para crear **bibliotecas React** usando **TypeScript** y **Vite** en modo biblioteca. Ideal para desarrollar componentes o librerías reutilizables con empaquetado moderno y tipado fuerte.

---

## 🚀 Características

- Soporte nativo para React y TypeScript.
- Empaquetado en formato ESM y UMD.
- Tipos TypeScript generados automáticamente.
- Configuración lista para publicar en NPM.
- Uso del modo biblioteca (`build.lib`) de Vite para optimizar el bundle.

---

## 📦 Estructura del proyecto

- **index.tsx** # Punto de entrada principal de la librería
- **dist/** # Carpeta generada con los bundles compilados
- **package.json** # Configuración del paquete npm
- **tsconfig.json** # Configuración de TypeScript
- **vite.config.ts** # Configuración de Vite en modo biblioteca
- **README.md** # Documentación

---

## ⚙️ Instalación y desarrollo

Clona esta plantilla y corre en modo desarrollo:

**npm install**

**npm run dev**

Esto levanta un servidor local para probar tu librería durante el desarrollo.

---

## 🔨 Construcción (Build)

**Nota** El archivo **main.tsx** antes de compilarlo tienes que eliminarlo o sacarlo de la carpeta **src/** para que no se compile, este archivo es solo para visualizar y probar las bibliotecas que estás construyendo.

Para compilar la librería en formatos listos para publicar:

**npm run build**

Los archivos compilados se guardan en la carpeta dist.

---

## 📖 Uso en otros proyectos

Una vez publicada en NPM, puedes instalarla y usarla así:

npm install **tu-paquete**

Y luego importar componentes o funciones desde la librería normalmente:

**ejemplo**

import { **MiComponente** } from '**tu-paquete**';

---

## 📝 Personalización

- Modifica **src/index.tsx** para exportar tus componentes o funciones.

- Ajusta **vite.config.ts** si necesitas formatos o configuraciones especiales.

- Actualiza la versión y nombre en **package.json** antes de publicar.
  **npm publish --access public**

---

## 🤝 Contribuciones

Pull requests, issues y sugerencias son bienvenidos.

---

## 📄 Licencia

MIT

¡Listo para crear bibliotecas React modernas y tipadas con TypeScript usando Vite!
