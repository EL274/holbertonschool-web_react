// Define the RowID type
type RowID = number;

// Define the RowElement interface
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // age is optional
}

// Export the type and interface
export { RowID, RowElement };
