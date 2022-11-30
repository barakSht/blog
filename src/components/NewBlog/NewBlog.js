import React, {Component} from "react";
import "./newBlog.css";
import './../blog-counter/BlogCounter.js'
import BlogCounter from "./../blog-counter/BlogCounter.js";
import { Consumer } from './../Context/index.js';


export default class NewBlog extends Component {

    constructor(props){
        super(props)
        this.state = {
            header: "Create a new blog:"
        }
        
    }
    
    detectTyping = ()=>{
        this.setState( {header:"typing..."})
    }
    
    detectNotTyping = ()=>{
        this.setState( {header:"Create a new blog"})
    }
    render(){
        
        return(
            <Consumer>
                {
                    context=> {
                        return(

                            <div className="main">
                                <BlogCounter />
                                <h1>{this.state.header}</h1>
                                <div className="flex">
                                    
                                        <input className="NewBlogtitle rest" 
                                                id="title"
                                                placeholder="title" 
                                                onKeyDown={() => {this.detectTyping()}
                                                    }
                                                onKeyUp = {()=>{
                                                    setTimeout(() => {this.detectNotTyping()}, 1000) 
                                                }}
                                        />
    
                                        <input 
                                            className="NewBlogsubTitle rest" 
                                            placeholder="sub title"
                                            id="subtitle"
                                        />
                                        <button className="addbutton" 
                                                onClick= { ()=> {
                                                        let title = document.getElementById('title').value
                                                        let subtitle = document.getElementById('subtitle').value
                                                        let blog = {title: title, subtitle: subtitle}
    
                                                        context.action.addBlog(blog)}}> Add</button>
                                    
                                </div>
                            </div>
                        )
                    }
                    
                }
            </Consumer>
        )
    }
}
