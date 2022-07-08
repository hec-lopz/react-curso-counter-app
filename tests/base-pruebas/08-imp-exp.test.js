import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroesArray = getHeroesByOwner(owner);

    // expect(heroesArray).toMatchObject([{ owner }, { owner }, { owner }]);
    heroesArray.forEach((item) => {
      expect(item).toMatchObject({ owner });
    });

    expect(heroesArray.length).toBe(3);
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroesArray = getHeroesByOwner(owner);

    // expect(heroesArray).toMatchObject([{ owner }, { owner }]);
    heroesArray.forEach((item) => {
      expect(item).toMatchObject({ owner });
    });

    expect(heroesArray.length).toBe(2);
  });

  /* Tarea
   * Debe retornar un arreglo con los heroes de DC
   * Length === 3
   * toEqual al arreglo filtrado
   *
   * Debe retornar un arreglo con los heroes de Marvel
   * length === 2
   */
});
