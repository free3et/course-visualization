import { createContext, useContext } from "react";

const defaultLessonData = {
  title: "",
  type: "",
  keyPoints: [],
  hometask: [],
  links: [],
  takeaways: [],
  //confirmUserAccount: function () {},
};

export const LessonsContext = createContext(defaultLessonData);
export const useLessonData = () => {
  return useContext(LessonsContext);
};
