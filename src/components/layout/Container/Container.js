import React, { Component } from 'react'
import classes from './Container.module.scss'

export default class Container extends Component {
    render() {
        return (
            <div className={classes['container']}>
                {this.props.children}
                
            </div>
        )
    }
}
