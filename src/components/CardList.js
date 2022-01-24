import React from "react";
import { Card } from "../components/Card";
import "../styles/CardList.css";

export const CardList = ({ robots }) => {
  return (
    <div className="container">
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};
