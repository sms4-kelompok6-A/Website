import React, { Component } from 'react'
import './CSS/form.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",        
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            email: event.target.value
        })
   
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        alert(`${this.state.email}  Login Berhasil !`)
        console.log(this.state);
        this.setState({
            email: "",
            password: '',
        })
     event.preventDefault()
        
    }
    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h3>Selamat Datang<br/>
                    Silahkan masukkan email dan password</h3>
                     <input type="text" value={this.state.email} onChange={this.firsthandler} placeholder="Email" /><br />
                     <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" /><br />
                    <input type="submit" value="Masuk" />
                </form>

            </div>
            
        )
    }
}

export default Form
