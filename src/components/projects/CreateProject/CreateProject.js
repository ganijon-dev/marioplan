import React, { Component } from 'react'
import { connect} from 'react-redux';
import { createProject } from '../../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
// eslint-disable-next-line
import firebase from 'firebase';
import Container from '../../layout/Container/Container';
import classes from './CreateProject.module.scss';
import uploadLogo from '../../../img/upload.svg'


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
        }
    }
    render() {
        const {user} = this.props;
        
        if (!user.uid) return <Redirect to='/signin'/>
        return (
            <Container>
                <form className={classes["form"]} onSubmit={this.handleSubmit}>
                    <h5 className={classes["header"]}>Create New Project</h5>
                    <div className={classes["input-field"]}>
                        
                        <input onChange={this.handleChange} className={classes["input"]} type="text" id="title" required placeholder="Title"/>
                        <label htmlFor="title"  className={classes['label']}>Title</label>
                    </div>

                    <div className={classes["input-field"]}>
                        
                        <textarea required onChange={this.handleChange} className={classes['textarea']} name="content" id="content" rows="6"  placeholder="Content"></textarea>
                        <label htmlFor="content" className={classes['label']}>Content</label>
                    </div>
                    <label htmlFor="file-upload" className={classes["custom-file-upload"]}>
                        <img src={uploadLogo} className={classes['upload-image']} alt="upload-logo"/>
                        Upload Image
                    </label>
                    <input id="file-upload" className={classes["file-upload"]} type="file" onChange={ this.handleImageUpload}/>
                    
                   
                    <button className={classes["btn"]}>Create</button>
        
                </form>
            </Container>
        )
    }
}

const mapStateToProps = state => {
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
