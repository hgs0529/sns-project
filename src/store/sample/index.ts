import { atom, selector } from "recoil";

const sampleAtom = atom({
  key: "sample",
  default: "Hello World",
});

export const sampleSelector = selector({
  key: "sampleSelector",
  get: ({ get }) => {
    const sample = get(sampleAtom);
    return sample;
  },
});

export default sampleAtom;
