import React, { Fragment } from 'react'

function Header() {
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
                    <ul className="navid">
                      <li><a href="/">Home</a></li>
                      <li><a href="#">Courses</a>
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
        </Fragment>
    )
}

export default Header
