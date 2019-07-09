import React, {Component, Fragment} from "react"
import Button from './components/button'

class MyFirstComp extends Component{
    constructor(props){
        super(props);
        this.state={
            counter : 0,
            buttons: ['?','?','?','?','?','?','?','?','?']
        }

    }
    handleClick = (i)=>{
        let {buttons,counter}=this.state;

        let player = counter%2 ?"0":"X";
        let std= buttons[i]
        if (buttons[i]==="?")
        {
            buttons[i]= player
            counter ++;
        }
        else{
            buttons[i] =std;
        }
        this.setState({buttons:buttons, counter:counter})
        this.won()
    }
    won=()=>{
        let buttons = this.state.buttons
        if((buttons[0] === "X" && buttons[1] === "X" && buttons[2] === "X")||
        (buttons[3] === "X" && buttons[4] === "X" && buttons[5] === "X")||
        (buttons[6] === "X" && buttons[7] === "X" && buttons[8] === "X")||
        (buttons[0] === "X" && buttons[3] === "X" && buttons[6] === "X")||
        (buttons[1] === "X" && buttons[4] === "X" && buttons[7] === "X")||
        (buttons[2] === "X" && buttons[5] === "X" && buttons[8] === "X")||
        (buttons[0] === "X" && buttons[4] === "X" && buttons[8] === "X")||
        (buttons[2] === "X" && buttons[4] === "X" && buttons[6] === "X")){
            alert("Player X won")
        }
        else if((buttons[0] === "0" && buttons[1] === "0" && buttons[2] === "0")||
        (buttons[3] === "0" && buttons[4] === "0" && buttons[5] === "0")||
        (buttons[6] === "0" && buttons[7] === "0" && buttons[8] === "0")||
        (buttons[0] === "0" && buttons[3] === "0" && buttons[6] === "0")||
        (buttons[1] === "0" && buttons[4] === "0" && buttons[7] === "0")||
        (buttons[2] === "0" && buttons[5] === "0" && buttons[8] === "0")||
        (buttons[0] === "0" && buttons[4] === "0" && buttons[8] === "0")||
        (buttons[2] === "0" && buttons[4] === "0" && buttons[6] === "0")){
            alert("Player 0 won")
        }
        
    } 
    render(){
        return(
            <Fragment>{
                this.state.buttons.map((data,i) =>{
                    return(
                        <Fragment key={i}>
                                {
                                    i%3===0?<br/>:null
                                }
                                <Button 
                                    handleClick={this.handleClick} 
                                    index={i} 
                                    label={data}
                                />
                            </Fragment>
                    )
                })
            }                
            </Fragment>
        )
    }

}

export default MyFirstComp;