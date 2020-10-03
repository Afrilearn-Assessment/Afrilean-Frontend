import React, { Fragment,useState,useEffect } from 'react'
import Header from './layout/header';
import Footer from './layout/footer';

function Signup(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const Register = ()=>{

    }
    return (
        <Fragment>
           <Header/>
        {/*start offer  area */}
        <div className="offer_area">
          <div className="container">	
            <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>	
              <div className="col-sm-12 col-md-5 col-xs-12 col-lg-5">
                <div className="slide_thumb3" style={{textAlign:"center",borderRadius:"8px"}}> 
                  <h3>Join Afrilearn to quality affordable Education</h3><br/>
                  <form >
                    <div className="form-group">
                      <input type="text" placeholder="Your first name" className="input-group input-lg" onChange={(e)=>{setFirstName(e.value)}} />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Your last name" className="input-group input-lg" onChange={(e)=>{setLastName(e.value)}} />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Your email" className="input-group input-lg"  onChange={(e)=>{setEmail(e.value)}}/>
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Your password" className="input-group input-lg" onChange={(e)=>{setPassword(e.value)}} />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Confirm password" className="input-group input-lg" onChange={(e)=>{setconfirmPassword(e.value)}}/>
                    </div>	
                    <div className="form-group">
                      <button className="btn btn-primary btn-lg btn3" onClick={Register}>Signup</button>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12 col-sm-12" style={{display:"inline-flex"}}>
                        <span style={{display:"inline-flex"}}>
                          
                          <small><a href="/login">
                              Already a member?</a></small>
                        </span>
                      </div>							
                    </div>		
                  </form>								
                </div>					
              </div>
              <div className="col-md-4 col-sm-4 col-lg-4">
                <div className="list-group">
                  <h3 style={{color:"#ffffff",fontSize:25}}><b>How it works?</b></h3>
                  <ul>
                    <li className="list-group-item" style={{color:"#2bb58e",fontSize:15}}><p>1. After registering, you can select and confirm a time slot for your free class as per your convenience</p></li>
                    <li className="list-group-item" style={{color:"#2bb58e",fontSize:15}}><p>2. Join the class on time and learn from our top teachers</p></li>
                    <li className="list-group-item" style={{color:"#2bb58e",fontSize:15}}><p>3. Revise your concepts after class through the homework that will be provided</p></li>

                  </ul>
                </div>
              </div>				
            </div>
          </div>
        </div>	
        {/*end offer  area */}
        <Footer/>
        </Fragment>
    )
}

export default Signup
