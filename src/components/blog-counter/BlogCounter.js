import React from 'react';
import './blogCounter.css';
import { Consumer } from './../Context/index.js';


export default function BlogCounter(props){
    // console.log(props);
    return(
        <Consumer>
            {
                context => <div> <h3> {context.counterBlog} blog already </h3> </div> 
            }
        </Consumer>
    )
}