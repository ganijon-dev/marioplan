import React, { Component } from 'react'

class CreateProject extends Component {
    state  = {
        title:'',
        content:''
    };
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    } 
    render() {
        return (
            <div className='container'> 
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input onChange={this.handleChange} type="text" id="title"/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea onChange={this.handleChange} className='materialize-textarea' name="content" id="content"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject;
