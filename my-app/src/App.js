import React from 'react';
 import UserCard from './components/UserCard'
 import './App.css';
 import styled from 'styled-components'

 const ContainerStyle = styled.div`
 width: 100%;
 `

 //app
 class App extends React.Component {

   constructor(){
     super()
     this.state = {
       user:[]
     }
   }

   componentDidMount() {
     fetch('https://api.github.com/users/AustinLynes')
     .then(res => res.json())
     .then(
       user => {
         console.log(user)
         this.setState({user: user})
       }
     )
     .catch(err => console.log('there was an error getting the user data', err))

   }
   render() {
     return (
       
       <ContainerStyle>
         <h1>Github Card</h1>
         <UserCard user={this.state.user} />
       </ContainerStyle>
     )
   }
 }

 export default App;