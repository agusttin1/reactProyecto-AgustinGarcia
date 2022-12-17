//importación de la dependencia
import { mock2firestore } from 'mock2firestore';
//db representa la conexión con la Base de datos de Firestore, creada aquí, en el archivo firebaseConfig.js
import { db } from './firebaseConfig.js'
//ComicsData representa el array con los datos a llevar a la Base de Datos
import ComicsData from './Data.js'

//'products' es el nombre de la colección
//Con 3 argumentos, la función crea los documentos con ID automáticos (generados por Firestore)
mock2firestore(ComicsData, db, 'products')
