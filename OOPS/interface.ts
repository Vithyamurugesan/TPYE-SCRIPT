interface Student {
    name: string;
    age: number;
}

function display(student: Student) {
    console.log("Name:", student.name);
    console.log("Age:", student.age);
}

let s1: Student = {
    name: "Vithya",
    age: 22
};

display(s1);
