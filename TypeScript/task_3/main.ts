// task_3/main.ts
/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';

// Crée un objet row
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insère une ligne et récupère le nouveau RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Met à jour la ligne avec un champ age
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Supprime la ligne
CRUD.deleteRow(newRowID);
