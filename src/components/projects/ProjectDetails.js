import React from 'react'

const ProjectDetails = (props) => {
    //console.log(props);
    const id = props.match.params.id;
    console.log(id);
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
    <span className="card-title">Project Details {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis velit inventore quos, fugiat illum, soluta eum rem aspernatur mollitia odio, voluptas rerum expedita eius sint illo enim voluptate! Voluptatem.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Ganijon Toshtemurov</div>
                    <div>2nd of August, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
