import React from 'react';
import { withRouter } from "react-router-dom";
//import { ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
function Header(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    if(props.location.pathname === '/') {
        title = 'Welcome'
    }
    function renderLogout() {
        if(props.location.pathname === '/home'){
            return(
                <div className="ml-auto">
                    
                    <button className="btn btn-dark" onClick={() => handleQuiz()}>Quiz</button>
                    
                    <button className="btn btn-secondary" onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }
        if(props.location.pathname === '/quiz'){
            return(
                <div className="ml-auto">
                    
                    <button className="btn btn-dark" onClick={() => handleDashboard()}>Dashboard</button>
                    
                    <button className="btn btn-secondary" onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }
    }
    function handleLogout() {
        //localStorage.removeItem(ACCESS_TOKEN_NAME)
        props.history.push('/login')
    }
    function handleDashboard() {
        //localStorage.removeItem(ACCESS_TOKEN_NAME)
        props.history.push('/home')
    }
    
    function handleQuiz() {
        //localStorage.removeItem(ACCESS_TOKEN_NAME)
        props.history.push('/quiz')
    }
    return(
        <nav className="navbar navbar-dark bg-info">
            <div className="row col-12 d-flex justify-content-center text-white">
                <span className="title">Memory Manager</span>
                {renderLogout()}
                
            </div>
            
            
            
        </nav>
    )
}
export default withRouter(Header);
/*
{props.title || title}
<button className="btn btn-info">{props.title || title}</button>
             */