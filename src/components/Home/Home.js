import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';
//import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiConstants';
import Upload from './Upload';

import axios from 'axios'
import Dashboard from '../Dashboard/Dashboard';
function Home(props) {
  console.log('now here');
  /*
    useEffect(() => {
        axios.get("http://localhost:8080"+'/user/me', { headers: { 'token': localStorage.getItem("ACCESS_TOKEN_NAME") }})
        .then(function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }
        })
        .catch(function (error) {
          redirectToLogin()
        });
      })*/
      
    function redirectToLogin() {
    props.history.push('/login');
    }
    return(
        <div className="home">
            <p>   </p>
            <Upload />
            <p>   </p>
            <Dashboard/>
            

        </div>
    )
}

export default withRouter(Home);
