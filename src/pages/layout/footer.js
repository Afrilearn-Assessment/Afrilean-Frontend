import React, { Fragment } from 'react'

function Footer() {
    return (
        <Fragment>
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

export default Footer
