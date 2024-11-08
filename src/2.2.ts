{
  //  interface

  interface User2 {
    name: string;
    age: number;
  }
  // interface extend add

  interface UserWithRole2 extends User2 {
    // User1 type keo extends kor_te par_i
    role: string;
  }

  // new role add
  type UserWithRole1 = User1 & { role: string };

  // type alias
  type User1 = {
    name: string;
    age: number;
  };
  const userDe: UserWithRole2 = {
    name: "sho",
    age: 10,
    role: "manger",
  };

  //    js---->object--->array--->object function---->object

  type Roll1 = number[];
  interface Roll2 {
    // inter face Array
    [index: number]: number;
  }
  const rollNumber: Roll1 = [12, 21, 2, 12, 1, 2]; // number type hole number string hole string
  // function   inter face or Alias
  type Add1 = (num1: number, num2: number) => number;

  // interface

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;
}
