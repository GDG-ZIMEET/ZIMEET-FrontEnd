import { atom } from "recoil";
import IconMapper from "utils/IconMapper";

const defaultEmoji = Object.keys(IconMapper)[0] || "Blossom";

export const joinState = atom({
  key: "joinState",
  default: {
    name: "",
    studentNumber: "",
    password: "",
    nickname: "",
    grade: "",
    age: null,
    gender: "",
    major: "",
    emoji: defaultEmoji,
    mbti: "",
    music: "",
    style: "",
    idealAge: "",
    idealType: "",
  },
});
