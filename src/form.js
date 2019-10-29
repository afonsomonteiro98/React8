import React, {Component} from 'react'

class Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            globalTitle: ''
        } 
    }

    componentDidMount() {
        console.log('Rendered Form')
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(
            (state) => {
                return {
                    ...state,
                    globalTitle: "My form - "
                }
            },
            () => {
            document.title = this.state.globalTitle
            }
        )
        
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    componentDidUpdate() {
        console.log('Title changed')
    }

    render () {
        return (      
            <div>
                <title> {this.state.globalTitle} </title>
                <form onSubmit={this.handleSubmit}>
                    <textarea name='title' onChange={this.handleChange}></textarea>
                    <button type='submit'> badjoras </button>
                </form>
            </div>
        )
    }
}

export default Form