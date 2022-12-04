import React  from "react";

class CountDown extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            currentCount: this.props.startFrom
        }
    }

    componentDidMount(){
        const intervalId = setInterval(() => {
            if(this.state.currentCount > 0){
                this.setState(
                    {currentCount: this.state.currentCount - 1}
                )
            }
            else{
                clearInterval(intervalId);
            }
            
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("==========================")
        console.log({ currentState: this.state, prevState });
        console.log({ currentProps: this.props, prevProps });
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render(){
        return(
            <>
                <ul>
                    <li>Start From: {this.props.startFrom}</li>
                    <li>Current Count: {this.state.currentCount}</li>
                </ul>
            </>
        )
    }
}

export default CountDown;