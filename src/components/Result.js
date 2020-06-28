import React, { Component } from 'react'

export default class Result extends Component {
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            array: [],
            moves: []
        };

        this.minimumJumps = this.minimumJumps.bind(this);
    }

    componentWillReceiveProps()
    {
        this.setState({array: this.props.array})
    }

    componentDidUpdate()
    {
        this.minimumJumps()
    }

    minimumJumps()
    {
        let el = this.state.array.length;
        let ar = this.state.array;
        let reach = ar[0];
        let steps = ar[0];
        let skip = 1;
        let moves_arr = [];

        if (el === 1)
        {
            return 1;
        }
        else if (ar[0] < 1)
        {
            return 0;
        }

        if (ar[0] > 1)
        {
            moves_arr.push(<li>From 1 to {reach+1 > el ? el : reach+1}</li>);
        }
        
        for (var i = 0; i < el; i++)
        {
            if (i === el-1) 
            {
                return moves_arr;
            }

            reach = Math.max(reach, i+ar[i]);
            steps--;
            
            if (steps === 0)
            {
                if (ar[0] > 1 && !skip)
                {
                    moves_arr.push(<li>From {i+1} to {reach+1 > el ? el : reach+1}</li>);
                } else if (ar[0] === 1)
                {
                    moves_arr.push(<li>From {i+1} to {reach+1 > el ? el : reach+1}</li>);
                }
                skip = 0;
                
                if (i >= reach)
                {
                    return 0;
                }

                steps = reach - i;
            }
        }
        return 0;
    }

    render() 
    {
        const jumps = this.minimumJumps();
        return (
            <div>
                {jumps === 0 ? "Goal is not reachable.." : "Goal is reachable!"}
                {jumps.length > 0 ? jumps : ''}
            </div>
        )
    }
}
