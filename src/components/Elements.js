import React, { Component } from 'react'
import Element from './Element'
import Buttons from './Buttons'
import Result from './Result';

export default class Elements extends Component {
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            elements: 7,
            array: [1,1,1,1,1,1,1]
        };
        this.renderElements = this.renderElements.bind(this);
    }
    
    renderElements = () =>
    {
        var elements_array = [];
        
        for (var i = 0; i < this.state.elements; i++)
        {
            elements_array.push(
            <Element 
                handleChange = {this.handleChange}
                key = {i}
                id = {i}
            />);
        }
        return elements_array;
    }

    componentDidMount()
    {
        var values_array = [];
        for (var i = 0; i < this.state.elements; i++)
        {
            values_array.push(1);
        }
        this.setState({array: values_array});
    }

    handleChange = (event, index) =>
    {
        const val = event.target.value;
        let updated_array = this.state.array;
        updated_array[index] = Number(val);
        this.setState({array: updated_array});
    }

    increase = () =>
    {
        var newArray = this.state.array;
        newArray.push(1);
        this.setState({
            elements: this.state.elements + 1,
            array: newArray
        })
    }

    decrease = () =>
    {
        var newArray = this.state.array;
        newArray.pop();
        this.setState({
            elements: this.state.elements - 1,
            array: newArray
        })
    }

    render() 
    {
        return  (
            <div>
                <Buttons element_count={this.state.elements} increase={this.increase} decrease={this.decrease}/>
                <div className="elementscontainer">{this.renderElements()}</div>
                <div className="resultcontainer"><Result array={this.state.array}/></div>
            </div>
        )
    }
}
