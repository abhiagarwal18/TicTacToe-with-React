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
}