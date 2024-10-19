#test Carlos Bautista

Este es un proyecto de prueba tecnica desarrollado con React Native. La aplicación permite a los usuarios ver una lista de productos, buscar productos y agregar nuevos productos. La aplicación utiliza persistencia local para almacenar los productos.

## Tecnologías Utilizadas

- **React Native**: Framework para construir aplicaciones móviles.
- **Redux**: Para el manejo del estado global de la aplicación.
- **React Query**: Para el manejo de la lógica de negocio y el estado de los datos.
- **AsyncStorage**: Para la persistencia local de los datos.
- **Axios**: Para hacer peticiones HTTP a la API.
- **Styled Components**: Para el estilizado de los componentes.

## Arquitectura

La aplicación sigue una combinación de los patrones arquitectónicos **MVVM (Model-View-ViewModel)** y **Clean Architecture**.

- **MVVM**:
  - **Model**: Manejo de datos y persistencia local.
  - **View**: Interfaz de usuario.
  - **ViewModel**: Lógica de negocio y estado de los datos.
- **Clean Architecture**:
  - **Capa de Datos**: Obtención y almacenamiento de datos.
  - **Capa de Dominio**: Lógica de negocio.
  - **Capa de Presentación**: Componentes de UI.

## Requisitos Previos

- Node.js
- npm o yarn
- Expo CLI (opcional, pero recomendado)

## Instalación

1. Clona el repositorio:

   git clone https://github.com/CarlosBautistaDev/testmobiikacarlos.git
   cd testmobiikacarlos
2. Instala las dependencias:
   
    npm install
    # o
    yarn install

3. Instala AsyncStorage:
   
    npm install @react-native-async-storage/async-storage
 
 ## Ejecucion

1. Inicia el servidor de desarrollo:

    npm run start


## Estructura del Proyecto

* src/api: Funciones para la obtención de datos (fetchProducts).
* src/components: Componentes reutilizables de la UI (ProductItem, SearchBar).
* src/screens: Pantallas de la aplicación (HomeScreen).
* src/store: Configuración de Redux y slices (productsSlice).
