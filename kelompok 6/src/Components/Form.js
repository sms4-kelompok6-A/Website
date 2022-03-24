import React, { Component } from 'react'
import './CSS/todo.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            password: "",        
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
   
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        alert(`${this.state.firstName}  Login Berhasil !`)
        console.log(this.state);
        this.setState({
            firstName: "",
        
            password: '',
          
        })
     event.preventDefault()
        
    }
    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                     <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="Email" /><br />
                
                     <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" /><br />
                   
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
