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
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    numberOfReports: 17,     
};

const director2: Directors = {
    firstName: "Jane",
    lastName: "smith",
    fullTimeEmployee: false,
    yearsOfExperience: 10,
    location: "Los Angeles",
    numberOfReports: 5,
    contract: true,
};

console.log(director1);
console.log(director2);

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;

    constructor(firstName:string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());
