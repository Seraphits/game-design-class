export const LETTERS_DATA = [
  {
    id: "0",
    letter: "A",
    sound: "a.mp3",
    img: "/img/MetalLetters/letter_A.png"
  },
  {
    id: "1",
    letter: "B",
    sound: "b.mp3",
    img: "/img/MetalLetters/letter_B.png"
  }, {
    id: "2",
    letter: "C",
    sound: "c.mp3",
    img: "/img/MetalLetters/letter_C.png"
  }, {
    id: "3",
    letter: "D",
    sound: "d.mp3",
    img: "/img/MetalLetters/letter_D.png"
  }, {
    id: "4",
    letter: "E",
    sound: "e.mp3",
    img: "/img/MetalLetters/letter_E.png"
  }, {
    id: "5",
    letter: "F",
    sound: "f.mp3",
    img: "/img/MetalLetters/letter_F.png"
  }, {
    id: "6",
    letter: "G",
    sound: "g.mp3",
    img: "/img/MetalLetters/letter_G.png"
  }
];

export function getAllLetters() {
  const allLetters = LETTERS_DATA;
  return allLetters;
}
