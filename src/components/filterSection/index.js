import React, { useRef } from "react";
import debounce from "debounce";

import {
  getKeywordFilter,
  getSourceFilter,
  getDateFilter,
} from "../../services/newsApi";

import "./style.css";

export default function FilterSection({
  setLoading,
  setCategoryList,
  selectedCategory,
  setSelectedCategory,
}) {
  const keywordRef = useRef(null);
  const sourcesRef = useRef(null);

  if (selectedCategory) {
    sourcesRef.current.value = "";
    keywordRef.current.value = "";
  }

  const changeHandler = debounce(async (e) => {
    setLoading(true);
    try {
      let data;
      if (e.target.name === "keyword") {
        sourcesRef.current.value = "";
        setSelectedCategory("");
        data = await getKeywordFilter(e.target.value);
      } else if (e.target.name === "source") {
        keywordRef.current.value = "";
        setSelectedCategory("");
        data = await getSourceFilter(e.target.value);
      } else {
        keywordRef.current.value = "";
        sourcesRef.current.value = "";
        setSelectedCategory("");
        console.log("date:", e.target.value);
        data = await getDateFilter(e.target.value);
      }
      setCategoryList([...data.data.articles]);
      setLoading(false);
    } catch (err) {
      console.log("Error:", err);
      setLoading(false);
    }
  }, 1000);

  return (
    <div className="filter mb-2">
      <form className="d-flex justify-content-end">
        <div className="d-flex flex-column me-2">
          <label>Search by Keyword</label>
          <input
            type="search"
            placeholder="Keyword..."
            name="keyword"
            onChange={changeHandler}
            ref={keywordRef}
          />
        </div>
        <div className="d-flex flex-column me-2">
          <label>Filter by date</label>
          <input type="date" onChange={changeHandler} name="date" />
        </div>
        <div className="d-flex flex-column">
          <label>Filter by source</label>
          <input
            type="search"
            placeholder="Enter Source..."
            name="source"
            onChange={changeHandler}
            ref={sourcesRef}
          />
        </div>
      </form>
    </div>
  );
}
