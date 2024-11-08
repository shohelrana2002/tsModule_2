{
  // generic type

  // generic type

  type Generic<T> = Array<T>; // Dynamic type Array
  //   const rollNumber: number[] = [10, 20, 20, 2365, 6, 6, 656, 256];
  const rollNumber: Generic<number> = [10, 20, 20, 2365, 6, 6, 656, 256];

  //   const mentors: string[] = ["Mr.s ", "Mr.y", "mr.z"];
  const mentors: Generic<string> = ["Mr.s ", "Mr.y", "mr.z"];

  //   const bollArray: boolean[] = [true, false, true];
  const bollArray: Generic<boolean> = [true, false, true];

  //   array of object

  const user: Generic<{ name: string; age: number }> = [
    {
      name: "Me",
      age: 11,
    },
    {
      name: "Hj. x",
      age: 20,
    },
  ];

  // generic tuple

  type GenericTuple<x, y> = [x, y];

  const men: GenericTuple<string, string> = ["mr. x", "Mr.Y"];
  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "sho", email: "sho@" },
  ];
}
