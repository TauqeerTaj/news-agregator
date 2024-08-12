import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Bars } from "react-loader-spinner";

import Categories from "./components/categories";
import NewsList from "./components/News/list/NewsList";
import FilterSection from "./components/filterSection";

import { getCategoryList, getNewsList } from "./services/newsApi";

import "./App.css";

function App() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const categoryHandler = async (category) => {
    window.scrollTo(0, 0);
    setLoading(true);
    setSelectedCategory(category);
    try {
      let data;
      if (category === "All") {
        data = await getNewsList();
      } else {
        data = await getCategoryList(category);
      }
      setCategoryList([...data.data.articles]);
      setLoading(false);
    } catch (err) {
      console.log("Error:", err);
      setLoading(false);
    }
  };
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <div className="categories">
              <Categories
                categoryHandler={categoryHandler}
                selectedCategory={selectedCategory}
              />
            </div>
            <div className="list-section">
              <FilterSection
                setLoading={setLoading}
                setCategoryList={setCategoryList}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
              <NewsList categoryList={categoryList} />
            </div>
          </Col>
        </Row>
      </Container>
      {loading && (
        <div className="loading">
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
}

export default App;
