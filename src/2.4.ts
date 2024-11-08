{
  // Generic InterFace
  interface Developer<T, B> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: string;
    };
    smartWatch: T;
    bike?: B;
  }
  type PoorWatch = {
    brand: string;
    model: string;
    releaseYear: string;
  };
  interface RichDeveloper {
    brand: string;
    model: string;
    releaseYear: string;
    herattarcker: boolean;
    workTarcker: boolean;
  }
  const poorDeveloper: Developer<PoorWatch, null> = {
    name: "Mr. X",
    computer: {
      brand: "Asu_s",
      model: "xs_587",
      releaseYear: "2017",
    },
    smartWatch: {
      brand: "Asu_s",
      model: "xs_587",
      releaseYear: "2017",
    },
  };
  interface Yahama {
    name: string;
    model: string;
  }
  const richDeveloper: Developer<RichDeveloper, Yahama> = {
    name: "Mr. X",
    computer: {
      brand: "Asu_s",
      model: "xs_587",
      releaseYear: "2017",
    },
    smartWatch: {
      brand: "Asu_s",
      model: "xs_587",
      releaseYear: "2017",
      herattarcker: true,
      workTarcker: true,
    },
    bike: {
      name: "Yahama",
      model: "kdjfk",
    },
  };
}
