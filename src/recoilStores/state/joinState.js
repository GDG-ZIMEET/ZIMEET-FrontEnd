import { atom } from "recoil";

export const joinState = atom({
  key: "joinState",
  default: {
    name: "",
    studentNumber: "",
    password: "",
    phoneNumber: "",
    nickname: "",
    grade: "",
    age: "",
    gender: "",
    major: "",
    emoji: "Jewel",
    mbti: "",
    music: "",
    style: "",
    idealAge: "",
    idealType: "",
  },
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedSession = sessionStorage.getItem("joinState");
      if (savedSession) {
        setSelf(JSON.parse(savedSession)); 
      }

      onSet((newValue) => {
        sessionStorage.setItem("joinState", JSON.stringify(newValue));
      });
    },
  ],
});
