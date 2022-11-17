import { CardItem } from "../cardItem/cardItem";
import { useData } from "../getData/getData";
import "./cardLesson.css";
import { useState, useEffect } from "react";

export function CardLesson() {
  const getLessonsData = useData();

  /*   function getCompletedLessons(name) {
    let arr = [];
    console.log(name);
  }

  useEffect(() => {
    getCompletedLessons();
  }); */

  return Object.values(getLessonsData).map((item, index) => {
    return (
      <details className="card-lesson">
        <CardItem
          item={item}
          key={index}
          handleChange={(name) => {
            getCompletedLessons(name);
          }}
        />
      </details>
    );
  });
}
