import React, { Component } from 'react';
import HomePage from './HomePage'
import LoginPage from './LoginPage' 

export default class CONDITIONAL_RENARING extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogedIn : true
        }
    }
        render (){
        
        return (            
            <div>
                {this.state.isLogedIn? <LoginPage /> : <HomePage />}                
            </div>
)}}
// export default class CONDITIONAL_RENARING extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             isLogedIn : false
//         }
//     }
//     render() {
//         if(this.state.isLogedIn){
//             return <HomePage />
//         } 
//         else{
//             return <LoginPage />
//         }  
//     }
// }

