/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number;
    }
  
    export class Java extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for Java";
      }
  
      getAvailableTeacher(): string {
        if (this._teacher?.experienceTeachingJava) {
          return `Available Teacher: ${this._teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
