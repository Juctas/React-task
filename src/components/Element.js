import React, { Component } from 'react'

export default class Element extends Component {
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            value: 1,
            id: this.props.id
        };
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue = (event) =>
    {
        const val = event.target.value;
        this.setState({value: val});
        this.props.handleChange(event, this.state.id);
    }

    render() {
        return (
            <input 
            onInput={this.changeValue} 
            defaultValue={this.state.value} 
            className="elinput" 
            type="number" 
            id="element" 
            name="element" 
            min="-9" 
            max="9"
            />
        )
    }
}
