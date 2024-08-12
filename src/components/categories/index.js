import React from "react";

import "./style.css";

export default function Categories({ categoryHandler, selectedCategory }) {
  const list = [
    {
      title: "All",
    },
    {
      title: "Entertainment",
    },
    {
      title: "General",
    },
    {
      title: "Health",
    },
    {
      title: "Science",
    },
    {
      title: "Sports",
    },
    {
      title: "Technology",
    },
  ];

  return (
    <ul className="list-unstyled d-flex fixed-top">
      {list.map((item) => (
        <li
          onClick={() => categoryHandler(item.title)}
          className={selectedCategory === item.title ? "active" : ""}
          key={item.title}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
