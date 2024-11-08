Blog: The significance of union and intersection types in Typescript.

Union types | =>
Union types allow a variable to be of more than one type. It is defined using the | (pipe) operator.

```
// Example:
let value: string | number;
value = "Hello";
value = 5;
value = true; // Error: type 'true' is not assignable to type 'string | number'
```

Intersection types & =>
Intersection types allow a variable to be of multiple types simultaneously. It is defined using the & (ampersand) operator.

```
// Example:
type Person = {
    name: string;
    age: number;
}

type Teacher = {
    id: number;
    department: string;
}

type Faculty = Person & Teacher;

const juniorFaculty: Faculty = {
    id: 6623455
    name: 'Jahangir',
    department: 'CSE'
    age: 40,
}

```
