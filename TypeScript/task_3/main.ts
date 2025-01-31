import * as CRUD from crud;

const row = { firstName: 'Guillaume', lastName: 'Salva' };

// Insertion
const newRowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Mise à jour
const updatedRow = { ...row, age: 23 };
const updatedRowID = CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row ID: ${updatedRowID}`);

// Suppression
CRUD.deleteRow(updatedRowID); 
