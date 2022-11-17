import React from "react";
import { CardLesson } from "./cardLesson/cardLesson";

export default function App() {
  return (
    <main className="card_container">
      <h1>
        React For Beginners by Itera
        <br />
        Curators: Vitalii Ruban and Ihor Tsvietkov
      </h1>

      <div className="card_wrapper">
        <CardLesson />
      </div>
    </main>
  );
}
