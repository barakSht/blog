import React from "react";
import Blog from "../Blog/Blog";
import { Consumer } from './../Context/index.js';


export default function BlogsList(props) {

  return (
    <Consumer>
      {
        c =>  c.allBlogs.map( item => <Blog title={item.title} subtitle={item.subtitle} />)
      }
    </Consumer>
  );
}