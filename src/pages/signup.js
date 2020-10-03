import React, { Fragment,useState,useEffect } from 'react'

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
             <div className="header_area">
          <div className="container">
            <div className="row">
              {/* header  logo */} 
              <div className="col-md-4 col-sm-3 col-xs-12">
                <div className="logo"><a href="index.html"><img src="/assets/img/logo.png" alt="" /></a></div>
              </div>
              {/* end header  logo */} 
              <div className="col-md-8 col-sm-9 col-xs-12">
                <div>
                  <div className="form pull-right">
                    <div className="language">
                      <select className="form-lan">
                        <option value="english" selected>English</option>
                        <option value="english">Arabic</option>
                      </select>
                    </div>
                  </div>
                  <div className="social_icon pull-right">
                    <p>
                      <a target="_blank" href="#" className="icon-set"><i className="fa fa-facebook" /></a> 
                      <a target="_blank" href="#" className="icon-set"><i className="fa fa-twitter" /></a> 
                      <a target="_blank" href="#" className="icon-set"><i className="fa fa-linkedin" /></a>
                    </p>
                  </div>				
                </div>
                <div className="phone_address pull-right clear">
                  <p className="no-margin">
                    <small>
                      <span className="text-msg">Have any questions?</span>
                      <span className="icon-set"><i className="fa fa-phone" /> +880 1973 833 508</span> 
                      <span className="icon-set"><i className="fa fa-envelope" /> admin@bootexperts.com</span>  
                    </small>
                  </p>				
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end header  area */} 
        {/*Start nav  area */} 
        <div className="nav_area">
          <div className="container">
            <div className="row">
              {/*nav item*/}
              <div className="col-md-12 col-sm-12 col-xs-12">
                {/*  nav menu*/}
                <nav className="menu">
                <ul className="navid pull-left">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Courses <i className="fa fa-angle-down" /></a>
                      {/* <ul>
                        <li><a href="courses-item-1.html">Courses List layout 1</a></li>
                        <li><a href="courses-item-2.html">Courses List layout 2 </a></li>
                        <li><a href="single-courses.html">Course Item </a></li>
                      </ul>							 */}
                    </li>
                    						
                    <li><a href="#">Blog</a></li>							
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </nav>
                {/*end  nav menu*/}	
                <div className="search pull-right">
                  <div className="search-box">
                    <input type="text" className="form_control" placeholder="search" />
                    <span className="search-open"><i className="fa fa-search search" /><i className="fa fa-close hidden close" /></span>
                  </div>
                </div>
              </div>
              {/*end nav item */}
            </div>	
          </div>
        </div>
        {/*end nav  area */}
        {/*Start mobile menu  area */}
        <div className="mobile_memu_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="mobile_memu">
                  {/*  nav menu*/}
                  <nav>
                    <ul className="navid pull-left">
                      <li><a href="/">Home</a></li>
                      <li><a href="#">Courses <i className="fa fa-angle-down" /></a>
                        {/* <ul>
                          <li><a href="courses-item-1.html">Courses List layout 1</a></li>
                          <li><a href="courses-item-2.html">Courses List layout 2 </a></li>
                          <li><a href="single-courses.html">Course Item </a></li>
                        </ul>							 */}
                      </li>
                                  
                      <li><a href="#">Blog</a></li>							
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </nav>
                  {/*end  nav menu*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*start offer  area */}
        <div className="offer_area">
          <div className="container">	
            <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>	
              <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
                <div className="slide_thumb3" style={{textAlign:"center"}}> 
                  <h3>Join Afrilearn to quality affordable Education</h3><br/>
                  <form>
                    <div className="form-group">
                      <input type="text" placeholder="Your first name" className="input-group input-lg" />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Your last name" className="input-group input-lg" />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Your email" className="input-group input-lg" />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Your password" className="input-group input-lg" />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Confirm password" className="input-group input-lg" />
                    </div>	
                    <div className="form-group">
                      <button className="btn btn-primary btn-lg btn3" onclick="return false;">Submit</button>
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
              <div className="col-md-3 col-sm-3 col-lg-3"></div>				
            </div>
          </div>
        </div>	
        {/*end offer  area */}
        {/* footer  area */}	
        <div className="footer_area">
          <div className="container">
            <div className="row">
              <div className="">			
                <div className="col-md-6 col-sm-12">
                  <div className="footer_top_left">
                    <img src="/assets/img/logo.png" alt="" />
                    <span>Learning language is easier then ever before</span>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="footer_top_right">
                    <span>256 Tutors 20,690 Tutorials 646 Video Courses </span>
                    <a href className="read_more">signup</a>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        {/* footer bottom area */}
        <div className="footer_bottom_area">
          <div className="container">
            <div className="row">
              <div className=" col-sm-6 col-md-6 col-lg-6">
                <div className="footer_text">
                  <p>
                    Copyright © 2016 Afrilearn. All Rights Reserved.
                  </p>
                </div>
              </div>
              {/* <div className=" col-sm-6 col-md-6 col-lg-6">
                <p className="text-right">Design By <a href="http://bootexperts.com/">bootexperts.com</a></p>
              </div>				 */}
            </div>
          </div>	
        </div>
        </Fragment>
    )
}

export default Signup
