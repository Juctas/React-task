
import React, { Component } from 'react'

export default class Buttons extends Component 
{
    render() 
    {
        return (
            <div>
                {this.props.element_count > 1 &&
                    <button className="button" onClick={this.props.decrease}>-</button>
                }
                <button className="button" onClick={this.props.increase}>+</button>
            </div>
        )
    }
}


