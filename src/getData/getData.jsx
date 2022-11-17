import { useEffect, useState } from "react";

export function useData() {
  const [data, setData] = useState({ res: [] });

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Drag13/react-learning-course-short/master/course.json"
    )
      .then((response) => response.json())
      .then((res) => setData(res.lessons));
  }, []);

  return data;
}
