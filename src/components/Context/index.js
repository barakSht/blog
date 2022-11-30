import React,{Component} from "react";

const Context = React.createContext()

export class Provider extends Component{

    state = {
        allBlogs :  [{title: "Adopt a Dog" , subtitle: "Save a life and make a friend."}, {title: "Adopt a Cat" , subtitle: "Save a life and make a friend."}],
        counterBlog : 2
    }


    addBlog = (blog)=>{
    this.setState({allBlogs: [...this.state.allBlogs, blog]})
    }

    render(){
        return(
            <Context.Provider value= {{
                counterBlog: this.state.counterBlog,
                allBlogs: this.state.allBlogs,
                action: {
                    addBlog:this.addBlog
                }} }
            
            >
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer