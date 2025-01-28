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
