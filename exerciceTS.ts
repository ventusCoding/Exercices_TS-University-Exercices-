//exercice 1
console.log('-------------------Exercice 1-------------------------')
let alf_const: string = "This is my first ALF lab!"; // change alf_const from const to let or var to assign to it after
alf_const = "This is not correct";

let alf_number: number;
alf_number = 10; // change "10" to 10 cause alf_number is a number and we want to assign to it a string so remove the quotes
let alf_bool: boolean = true;
if(alf_bool === true) { //change "true" to true cause alf_bool is a boolan
alf_bool = false;
console.log("I found the answer!");
}
let tuple_example: [string, number];
12.
tuple_example = ["ALF",1]; // change the order cause tuple_example accept the first element as string and the sec one as num
console.log(tuple_example[0].substring(1));// change tuple_example[1] to tuple_example[0] cause the first elem is the string
tuple_example[0] = "TP1"; // change tuple_example[2] to tuple_example[0] cause the first elem is the string

//-------------------------------------------------------
console.log('-------------------Exercice 2-------------------------')

//exercice 2

enum Colours {
    BLACK,
    BROWN,
    RED,
    ORANGE,
    YELLOW,
    GREEN,
    BLUE,
    VIOLET,
    GREY,
    WHITE
}
let sum: number = 0;

sum = Colours.BROWN + Colours.ORANGE + Colours.VIOLET;

console.log(sum);


//-------------------------------------------------------
console.log('-------------------Exercice 3-------------------------')

//exercice 3


interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = Admin | User;

export const persons: Person[] = [
    {
        name: 'John Doe',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    }
];

export function logPerson(user: User) {
    persons.map(p => console.log(p))
    console.log(` - ${user.name}, ${user.age}`);
}




//-------------------------------------------------------
console.log('-------------------Exercice 4-------------------------')

//exercice 4

class Pangram {
    private alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

    constructor(private phrase: string) {
        /* TODO */
    }

    isPangram(): boolean {
        const alphabetArray = this.alphabet.split('');
        return alphabetArray.every(letter =>
            this.phrase.indexOf(letter) >= 0 || this.phrase.indexOf(letter.toUpperCase()) >= 0
        );
    }
}
