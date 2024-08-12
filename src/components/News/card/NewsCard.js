import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import moment from "moment";
import NewsImage from "./../../../assets/news-image.avif";

import "./style.css";

export default function NewsCard({ article }) {
  return (
    <>
      <Row>
        <Col>
          <Card className="mb-3">
            <Card.Img variant="top" src={NewsImage} />
            <Card.Body>
              <Row>
                <Col xs={12}>
                  <Card.Title className="fw-bold">{article.title}</Card.Title>
                </Col>
                <Col>
                  <Card.Text className="text-end mb-3">
                    <span className="fw-bold me-2">Published at:</span>
                    {moment(article.publishedAt).format("MMMM Do YYYY")}
                  </Card.Text>
                </Col>
              </Row>
              <Button variant="primary" href={article.url}>
                See Details &#x21e2;
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
