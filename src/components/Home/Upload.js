//import logo from './logo.svg';
import './Upload.css';
import React, { useState } from 'react';
import { Component } from 'react'
import axios from 'axios';
import { withRouter } from "react-router-dom";

const Upload = (props) => {
    // If you are using TypeScript the state will be
    // const [file, setFile] = useState<FileList | null>(null);
    const [file, setFile] = useState(null);
  
    
    const submitFile = async () => {
      
      try {
        if (!file) {
          throw new Error('Select a file first!');
        }
        
        const formData = new FormData();
        console.log(file[0]);
        //file[0].name='abc1.jpg';
        /* --------file name is defined here-------*/
        const fn=`User1/${Date.now().toString()}.jpg`;
        //
        formData.append('file', file[0],fn);
        await axios.post(`/test-upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        redirectToDashboard();

        /*axios.post("http://localhost:8080"+'/user/upload', fn)
            .then(function (response) {
                if(response.status === 200){
                    
                  
                  redirectToDashboard();
                    
                }
                else {
                    //error
                }
              })
              .catch(function (error) {
                  console.log(error);
              });*/


        console.log(formData);
        // handle success
      } catch (error) {
        // handle error
        console.log('err...');
      }
    };

    const redirectToDashboard = () => {
      props.updateTitle('Dashboard')
      props.history.push('/dashboard');
  }
  
    return (
      <div className="Upload">
        <header className="Upload-header">
        
        <form onSubmit={submitFile}>
          
          
          <input type="file" onChange={event => setFile(event.target.files)} 
          
          />
          <button className="btn btn-info" type="submit">Upload</button>
        </form>
        
      </header>
      </div>
    );
  };
  export default Upload;
  /*
onBeforeUpload = event => {
          event.files[0].name = 'customName.jpg';
      }
  */