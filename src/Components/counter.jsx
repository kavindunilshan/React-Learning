import React, { Component } from 'react'

class Counter extends Component {
    getCount() {
        return this.props.counter.value == 0 ? "Zero" : this.props.counter.value;
    }

    styles = {
        size: 100
    }; 

    style2 = {
        color: "black",
        background: "yellow",
        size: 100,
    };


    render() {
        return (
        <div>
            <span style={this.style2} className='badge'>{this.getCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter, 1)} style={this.styles} className='btn btn-secondary m-2'>+</button>
            <button onClick={() => this.props.onIncrement(this.props.counter, -1)} style={this.styles} className='btn btn-secondary m-2'>-</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} style={{size: 100}} className='btn btn-danger m-2'>DEL</button>
        </div>); 
    }
}
 
export default Counter;