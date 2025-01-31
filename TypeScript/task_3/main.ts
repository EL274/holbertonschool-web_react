
/// <reference path="./js/crud.d.ts" />

// Importer RowID et RowElement depuis interface.ts
import { RowID, RowElement } from './interface';

// Importer tout depuis crud.js sous le nom CRUD
import * as CRUD from './js/crud';

// Créer un objet row de type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Créer une variable newRowID de type RowID et lui assigner la valeur de insertRow
const newRowID: RowID = CRUD.insertRow(row);

// Créer une variable updatedRow de type RowElement et mettre à jour row avec un champ age
const updatedRow: RowElement = { ...row, age: 23 };

// Appeler les fonctions updateRow et deleteRow
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
