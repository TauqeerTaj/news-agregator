import React, { useEffect, useState } from "react";
import NewsCard from "../card/NewsCard";
import { getNewsList } from "../../../services/newsApi";

export default function NewsList({ categoryList }) {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    setNewsList([...categoryList]);
  }, [categoryList]);

  const getList = async () => {
    const listData = await getNewsList();
    setNewsList([...listData.data.articles]);
  };

  return (
    <>
      {newsList.length ? (
        newsList.map((article) => (
          <NewsCard article={article} key={article.title} />
        ))
      ) : (
        <h1 className="text-center">No Record found!</h1>
      )}
    </>
  );
}
