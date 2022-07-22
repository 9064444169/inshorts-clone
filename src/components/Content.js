import { Container } from "@material-ui/core";
import React from "react";
import Card from "./Card";
import "./Content.css";

const Content = ({ newsArray, newsResults, loadMore, setLoadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadApp">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="appStore"
            height="80%"
          />
          <img
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="playStore"
            height="80%"
          />
        </div>
        {newsArray.map((item) => (
          <Card item={item} key={item.title} />
        ))}

        {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default Content;
