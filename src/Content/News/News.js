import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  CardFooter
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/fontawesome-free-brands";

import Content from "../../Layout/Content";
import articles from "./articles.json";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: articles };
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <Content title="News">
        <CardColumns>
          {this.state.articles.map((article, index) => (
            <Card key={index}>
              <CardImg
                top
                width="100%"
                src={article.image}
                alt={article.title}
                max-height="300px"
              />
              <CardBody>
                <CardTitle>
                  <a href={article.fburl}>{article.title}</a>
                </CardTitle>
                <CardText>{article.date}</CardText>
                <CardSubtitle>
                  <div
                    dangerouslySetInnerHTML={{ __html: article.description }}
                  />
                </CardSubtitle>

                {/* <Button>Button</Button> */}
              </CardBody>
              <CardFooter>
                <a href={article.fburl}>
                  {" "}
                  <FontAwesomeIcon icon={faFacebook} />
                  <span className="has-icons-left">View on Facebook</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </CardColumns>
      </Content>
    );
  }
}

export default News;
