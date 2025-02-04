// Subject.ts
/// <reference path="Teacher.ts" />

namespace Subjects {
    export class Subject {
        private _teacher: Teacher;

        constructor(teacher: Teacher) {
            this._teacher = teacher;
        }

        // Setter method for teacher
        set teacher(teacher: Teacher) {
            this._teacher = teacher;
        }

        // Getter method for teacher (optional, for completeness)
        get teacher(): Teacher {
            return this._teacher;
        }
    }
}
