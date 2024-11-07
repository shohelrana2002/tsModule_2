{
  // type assertion
  const l: string = "Module_2";
  console.log("Hir bro This is My Second", l);

  let anyThing: any;

  anyThing = "Next Level Web Development";
  anyThing = 123;

  // auto sugation

  //  (anyThing as string).
  //  (anyThing as number).

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertValue = parseFloat(value) * 1000;
      return `The Converted Value ${convertValue}`;
    } else if (typeof value === "number") {
      return `The Converted Value ${value}`;
    }
  };

  const res = kgToGm(1000) as number;
  const res2 = kgToGm("1000") as string;
  console.log(res);

  type ErrorMessage = {
    message: string;
  };
  try {
  } catch (err) {
    console.log((err as ErrorMessage).message);
  }
}
