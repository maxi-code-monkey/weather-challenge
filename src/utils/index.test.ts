import { randomizeCities } from "./randomizeCities";

describe("randomizeCities", () => {
  it("Returns 5 cities", () => {
    expect(randomizeCities(5).length).toBe(5);
  });

  it("Returns 3 cities", () => {
    expect(randomizeCities(3).length).toBe(3);
  });

  it("Returns 12 cities", () => {
    expect(randomizeCities(12).length).toBe(12);
  });
});
