import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
    handleReset = () => {
        const counters = this.state.counters.map(count => {count.value = 0; return count});
        this.setState({counters: counters});
      }

    render() { 
        return (
            <React.Fragment>
            <button onClick={this.props.onReset} style={{size: 100}} className='btn btn-primary m-2'>RESET</button>
            {this.props.counters.map(counter => 
                <Counter key={counter.id} counter={counter} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement}><h1>Hi title</h1></Counter>)} 
            </React.Fragment>
        );
    }
}
 
export default Counters;