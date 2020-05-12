import React, { Component } from 'react'
import { connect} from 'react-redux';
import { createProject } from '../../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
// eslint-disable-next-line
import firebase from 'firebase';
import Container from '../../layout/Container/Container';
import classes from './CreateProject.module.scss';
import uploadLogo from '../../../img/upload.svg'
import tick from '../../../img/tick.svg'


class CreateProject extends Component {
    state  = {
        title:'',
        content:'',
        image:null,
        uploaded:false
    };
    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.uploaded) {
            this.props.createProject(this.state);
            this.props.history.push('/')
        }
        else {
            this.setState({
                error:true
            })
        }
        
        
    } 

    handleImageUpload = event => {
        
        if (event.target.files) {
            const image = event.target.files[0];
            this.setState(() => ({image, uploaded:true}));
        }
    }
    checkUpload = upload => {
        let status,text;
        if (upload) {
            status = <img src={tick} className={classes['upload-image']} alt="upload-logo"/>;
            text = 'Uploaded'
        }
        else {
           status =  <img src={uploadLogo} className={classes['upload-image']} alt="upload-logo"/>
           text = 'Upload Image'
        }
        return {status,text}
    }

    handleInput(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${Math.max(150, e.target.scrollHeight)}px`;
       
      }
    render() {
        const {user} = this.props;
        const {uploaded,error} = this.state;
        const imageStatus = this.checkUpload(uploaded);
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
                        
                        <textarea  onInput = {this.handleInput} required onChange={this.handleChange} className={classes['textarea']} name="content" id="content" placeholder="Content"></textarea>
                        <label htmlFor="content" className={classes['label']}>Content</label>
                    </div>
                    <label htmlFor="file-upload" className={classes["custom-file-upload"]}>
                        {imageStatus.status} 
                        {imageStatus.text}
                       
                    </label>
                    {error ? <p className={classes['error']}> *Uploading Image is required</p>:null}
                    <input id="file-upload" name="file-upload" className={classes["file-upload"]} type="file" onChange={ this.handleImageUpload}/>
                    
                   
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
