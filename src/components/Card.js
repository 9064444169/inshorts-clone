import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  const fulldate = new Date(item.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
  var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
  const hour = parseInt(date[4].substring(0, 2)); //
  const time = hour > 12 ? true : false;

  return (
    <div className="card">
      <img
        className="newsImage"
        src={
          item.urlToImage
            ? item.urlToImage
            : "https://www.examsegg.com/wp-content/uploads/2021/02/hindi-news-channels-list-e1613312066124-810x379.png"
        }
        alt={item.title}
      />
      <div className="newsText">
        <div>
          <span className="title">{item.title}</span>
          <br />
          <span className="author">
            <a href={item.url} target="_blank">
              <b>Short </b>
            </a>
            <span className="muted">
              by {item.author ? item.author : "unknown"}{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{item.description}</div>
          <span className="readMore">
            read more at{" "}
            <a href={item.url} target="_blank">
              <b>{item.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
