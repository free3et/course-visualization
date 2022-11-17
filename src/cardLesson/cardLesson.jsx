import { useState, useEffect } from "react";
import { CardItem } from "../cardItem/cardItem";
import { useData } from "../getData/getData";
import { Checkbox } from "../UI/checkbox/checkbox";
import "./cardLesson.css";

export function CardLesson() {
  const getLessonsData = useData();

  return Object.values(getLessonsData).map((item, index) => {
    const { title } = item;

    return (
      <details className={`card_lesson`}>
        <summary>
          <h2 className="lesson-title">{title}</h2>

          <Checkbox />
        </summary>
        <CardItem item={item} key={index} />
      </details>
    );
  });
}
