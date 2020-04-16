import React, { Component } from 'react'
import { connect} from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';


class CreateProject extends Component {
    state  = {
        title:'',
        content:'',
        image:null,
    };
    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/')
        
    } 

    handleImageUpload = event => {
        
        if (event.target.files) {
            const image = event.target.files[0];
            this.setState(() => ({image}));
            console.log(event.target.files[0]);
        }
    }
    render() {
        const {user} = this.props;
        //console.log(this.props)
        
        if (!user.uid) return <Redirect to='/signin'/>
        return (
            <div className='container'> 
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input onChange={this.handleChange} type="text" id="title" required/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea required onChange={this.handleChange} className='materialize-textarea' name="content" id="content"></textarea>
                        <input type="file" onChange={ this.handleImageUpload}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
   console.log(state);
    return {
        user: state.firebase.auth,
        storage: state.firebase
    }

}

const mapDispatchToProps = dispatch => {
    return {
        createProject : project => dispatch (createProject(project))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) ( CreateProject);
