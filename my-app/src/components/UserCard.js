import React from 'react'
 import styled from 'styled-components'

 //style

 const CardStyle = styled.div`
 
 width: 1000px;
 margin: 0 auto;
 text-align:center;
 border: ridge black 10px;
 `

 const FollowerStyle = styled.div`
 
 width: 100%;

 margin: 10%;
 text-align:center;
     li{
         text-align:left;
     }
 `

 const CardCont = styled.div`
 display:flex;
 flex-direction:row;
 flex-wrap: wrap;
 height: 10%;
 margin:10%;
 `


 class UserCard extends React.Component {

     constructor(){
         super()
         this.state = {
             followers: []
         }
     }

     componentDidMount(){
         console.log('componentDidMount worked')

         fetch('https://api.github.com/users/AustinLynes/followers')
         .then(res => res.json())
         .then(followers => {
             // console.log(res)
             this.setState({ followers: followers })
             console.log(this.state)
         })
         .catch(err => console.log('there was an error getting followers', err))
     }
     render() {
         return(
             <div>
                 <CardStyle>
                     {/* {console.log(this.props.user, 'this is from the return')} */}
                     <img src={this.props.user.avatar_url} alt='user pic'/>
                     <p>{this.props.user.name}</p>
                     <p>{this.props.user.login}</p>
                     <p>{this.props.user.location}</p>
                     <p>{this.props.user.public_repos} repos</p>
                 </CardStyle>

                 <FollowerStyle>
                         followers:
                     {this.state.followers.map(follower => 
                     <CardCont>
                         <div class='follower-list'>
                             <div class='follower-container'>
                             <img src={follower.avatar_url} alt='follower pic'/>
                                 {follower.login}

                                 </div>
                                 </div>
                                 </CardCont>
                     )}
                 </FollowerStyle>
             </div>
                 )
     }
 }
 export default UserCard