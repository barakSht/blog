import React from "react";
import "./blog.css";

export default function Blog(props) {

  return (
    <div className="blog-container">
      <div className="left-img">
      </div>

      <div className="details">
        <p className="title">{props.title}</p>
        <hr />
        <p className="subtitle"> {props.subtitle}</p>
      </div>
    </div>
  );
}