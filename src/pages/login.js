import React, { Fragment,useState } from 'react'
import {useHistory} from 'react-router-dom'
import Header from './layout/header';
import Footer from './layout/footer';
import api from '../api';
import Alert from "react-s-alert";

function Login(props) {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Login = (e)=>{
        e.preventDefault();
      // console.log(firstName,lastName,email,password);
        api.post("/login",{email,password}).then(resp=>{
          if (resp.data.success==true){
            history.push("/");
          }else{
            Alert.error(resp.data.message,{
              position: 'top-right',
              effect: 'bouncyflip',
              beep: true,
              timeout: 5000,
              offset: 10
            })
          }
        })
    }
    return (
        <Fragment>
        <Header/>
        {/*start offer  area */}
        <div className="offer_area">
          <div className="container">	
            <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>	
              <div className="col-sm-12 col-md-5 col-xs-12 col-lg-5" style={{marginLeft:"50px"}}>
                <div className="slide_thumb3" style={{textAlign:"center",borderRadius:"8px"}}> 
                  <h3 style={{fontSize:30}}>Login</h3><br/>
                  <form>
                    <div className="form-group">
                      <input type="email" placeholder="Your email" className="input-group input-lg" onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Your password" className="input-group input-lg" onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>	
                    <div className="form-group">
                      <button className="btn btn-primary btn-lg btn3" onClick={Login}>Login</button>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12 col-sm-12" style={{display:"inline-flex"}}>
                        <span style={{display:"inline-flex"}}>
                          <small><a href="#">
                              Forgot your password?</a></small>
                          <small><a href="#">
                              Forgot your username?</a></small>
                          <small><a href="/register">
                              Don't have an account?</a></small>
                        </span>
                      </div>							
                    </div>		
                  </form>								
                </div>					
              </div>
              <div className="col-md-3 col-sm-3 col-lg-3"></div>				
            </div>
          </div>
        </div>	
        {/*end offer  area */}
        <Footer/>
        </Fragment>
    )
}

export default Login
