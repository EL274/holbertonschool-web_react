interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher =  {
    firstName: "john",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York", 
};

const teacher2: Teacher = {
    firstName: "jane",
    lastName: "Smith",
    fullTimeEmployee: false,
    yearsOfExperience: 5,
    location: "Los Angeles",
    contract: true,
};

console.log(teacher1);
console.log(teacher2);

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: "john",
    lastName: "string",
    fullTimeEmployee: boolean,
    location: "string",
    numberOfReports: 17,     
};

const director2: Directors = {
    firstName: "string",
    lastName: "string",
    fullTimeEmployee: boolean,
    yearsOfExperience: "number",
    location: "string",
    numberOfReports: number,
    contract: boolean,
};

console.log(director1);
console.log(director2);

