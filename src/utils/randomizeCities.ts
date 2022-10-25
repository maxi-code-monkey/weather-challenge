import { Cities } from "../constants/cities";

export const randomizeCities = (count: number) => {
  const res = [];
  for (let i = 0; i < count; ) {
    const random = Math.floor(Math.random() * Cities.length);
    if (res.indexOf(Cities[random]) !== -1) {
      continue;
    }
    res.push(Cities[random]);
    i++;
  }
  return res;
};
