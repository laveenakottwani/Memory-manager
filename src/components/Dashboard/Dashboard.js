import React, { Fragment } from 'react';
import './Dashboard.css';
import Gallery from './gallery/Gallery'

import getData from './data'


function Dashboard() {
  let images = getData();
  return (
    <Fragment>
      
      <div className="gallery">
        <Gallery imgarr={images} />
      </div>
    </Fragment>
  );
}

export default Dashboard;
//Photo {{name:"https://myawscapstone.s3.us-east-2.amazonaws.com/User1/1607061777540.jpg", title=""}}