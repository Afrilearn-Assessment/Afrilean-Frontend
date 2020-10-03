import React, { Fragment } from 'react'
import Footer from './layout/footer'

function Index() {
    return (
        <Fragment>
            {/*Start mobile menu  area */}
            <div class="mobile_memu_area nav home-2">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="mobile_memu">
                    <nav>
                    <ul className="navid">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
        {/*end mobile menu  area */}	
        <div className="slide_wrap_area">
          {/*Start nav  area */} 
          <div className="nav_area home-2">
            <div className="container">
              <div className="row">
                {/*nav item*/}
                <div className="col-md-3 col-sm-3 col-xs-3">
                  <div className="home2_logo"><a href="index-2.html"><img src="/assets/img/logo.png" alt="" /></a></div>
                </div>
                <div className="col-md-9 col-sm-9 col-xs-9">
                  {/*  nav menu*/}
                  <nav className="menu">
                    <ul className="navid">
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
                      <input type="text" className="form_control" placeholder="search..." />
                      <span className="search-open"><i className="fa fa-search search" /><i className="fa fa-close hidden close" /></span>
                    </div>
                  </div>
                </div>
                {/*end nav item */}
              </div>	
            </div>
          </div>
          {/*end nav  area */}	
          {/* HOME SLIDER */}
          <div className="slider-wrap home-1-slider" id="home">
            <div id="htmlcaption1">
              <div className="slider-progress"></div>	
              <div className="container">
                <div className="row">
                  <div className="col-md-12">						
                    <div className="slide1-text slide-text">
                      <div className="middle-text">
                        <div className="left_sidet1">
                          <div className="cap-title wow slideInRight" data-wow-duration=".9s" data-wow-delay="0s">
                            <h1>Opening up a world of <br />online education </h1>
                          </div>
                          <div className="cap-dec wow slideInRight" data-wow-duration="1s" data-wow-delay=".5s">
                            <form>
                            <div className="form-group" style={{width:"65%"}}>
                              
                            <input type="text" placeholder="What will you like to learn" className="input-group input-lg" />
                            </div>
                            </form>
                          </div>
                          <div className="cap-readmore animated fadeInUpBig" data-wow-duration="2s" data-wow-delay=".5s">
                            <a href="/register" >Browser</a>
                          </div>
                        </div>				
                      </div>	
                    </div>		
                  </div>
                </div>
              </div>					
            </div>	
        
          </div>
          {/* HOME SLIDER */}
        </div>
       
        {/*start courses  area */}
        <div className="courses_area home-2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title">
                  <h3 className="module-title">
                    Explore all the   <span> Professional Exams</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              
              {/*start course single  item */}
              <div className="col-md-6 col-sm-6 col-lg-6">
                <div className="course_item">
                  <div className="courses_thumb">
                    <a href><img src="/assets/img/home1/course/gmat.jpg" alt="" /></a>
                    <div className="courses_thumb_text">
                      <p><a href="#"></a></p>
                    </div>
                  </div>
                  <div className="courses_content">
                    <h2><a href="#">GMAT</a></h2>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <a href="#" className="text_uppercase">Read More ...</a>
                  </div>
                </div>
              </div>
              {/*End course single  item */}
              
              {/*start course single  item */}
              <div className="col-md-6 col-sm-6 col-lg-6">
                <div className="course_item">
                  <div className="courses_thumb">
                    <a href><img src="/assets/img/home1/course/ican.jpg" alt="" /></a>
                    <div className="courses_thumb_text">
                      <p><a href="#"></a></p>
                    </div>
                  </div>
                  <div className="courses_content">
                    <h2><a href="#">ICAN</a></h2>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <a href="#" className="text_uppercase">Read More ...</a>
                  </div>
                </div>
              </div>
              {/*End course single  item */}
              {/*start course single  item */}
              <div className="col-md-6 col-sm-6 col-lg-6">
                <div className="course_item">
                  <div className="courses_thumb">
                    <a href><img src="/assets/img/home1/course/pmp.jpg" alt="" /></a>
                    <div className="courses_thumb_text">
                      <p><a href="#"></a></p>
                    </div>
                  </div>
                  <div className="courses_content">
                    <h2><a href="#">Project Management</a></h2>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <a href="#" className="text_uppercase">Read More ...</a>
                  </div>
                </div>
              </div>
              {/*End course single  item */}			
              {/*start course single  item */}
              <div className="col-md-6 col-sm-6 col-lg-6">
                <div className="course_item">
                  <div className="courses_thumb">
                    <a href><img src="/assets/img/home1/course/ielts.jpg" alt="" /></a>
                    <div className="courses_thumb_text">
                      <p><a href="#"></a></p>
                    </div>
                  </div>
                  <div className="courses_content">
                    <h2><a href="#">IELTS</a></h2>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <a href="#" className="text_uppercase">Read More ...</a>
                  </div>
                </div>
              </div>
              {/*End course single  item */}		
            </div>		
          </div>
        </div>	
        {/*end courses  area */}
        {/*start ads  area */}
        <div className="teacher_area home-2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title">
                  <h3 className="module-title">
                    Explore all  <span>Universities</span>
                  </h3>
                </div>
              </div>
            </div>	
          </div>	
          <div className="container">
            <div className="row">
              {/*start teacher single  item */}
              <div className="col-md-4 col-lg-4 col-sm-6">
                <div className="single_teacher_item">
                  <div className="teacher_thumb">
                    <img src="/assets/img/home1/team/UNILAG.jpg" style={{width:"100%",height:"auto"}} alt="" />
                    <div className="thumb_text">
                      <h2>University of Lagos</h2>
                    </div>
                  </div>
                  <div className="teacher_content">
                    <h2>University of Lagos</h2>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                    <span className="btn btn-success">view</span>
                    <div className="social_icons">
                    </div>
                  </div>
                </div>
              </div>
              {/*End teacher single  item */}
              {/*start teacher single  item */}
              <div className="col-md-4 col-lg-4 col-sm-6">
                <div className="single_teacher_item">
                  <div className="teacher_thumb">
                    <img src="/assets/img/home1/team/OAU.jpg" style={{width:"100%",height:"auto"}} alt="" />
                    <div className="thumb_text">
                      <h2>Obafemi Awolowo University</h2>
                    </div>
                  </div>
                  <div className="teacher_content">
                    <h2>Obafemi Awolowo University</h2>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                    <span className="btn btn-success">view</span>
                    <div className="social_icons">
                    </div>
                  </div>
                </div>
              </div>
              {/*End teacher single  item */}
              
              {/*start teacher single  item */}
              <div className="col-md-4 col-lg-4 col-sm-6">
                <div className="single_teacher_item">
                  <div className="teacher_thumb">
                    <img src="/assets/img/home1/team/UNIPORT.jpeg" style={{width:"100%",height:"auto"}} alt="" />
                    <div className="thumb_text">
                      <h2>University of PortHarcourt</h2>
                    </div>
                  </div>
                  <div className="teacher_content">
                    <h2>University of PortHarcourt</h2>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                    <span className="btn btn-success">view</span>
                    <div className="social_icons">
                    </div>
                  </div>
                </div>
              </div>
              {/*End teacher single  item */}
               {/*start teacher single  item */}
               <div className="col-md-4 col-lg-4 col-sm-6">
                <div className="single_teacher_item">
                  <div className="teacher_thumb">
                    <img src="/assets/img/home1/team/UI.jpg" style={{width:"100%",height:"auto"}} alt="" />
                    <div className="thumb_text">
                      <h2>University of Ibadan</h2>
                    </div>
                  </div>
                  <div className="teacher_content">
                    <h2>University of Ibadan</h2>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                    <span className="btn btn-success">view</span>
                    <div className="social_icons">
                    </div>
                  </div>
                </div>
              </div>
              {/*End teacher single  item */}
              
            </div>
          </div>
        </div>	
        {/*end teacher  area */}
        
        {/*start news  area */}	
        <div className="news_area home-2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title">
                  <h3 className="module-title">
                    Explore all  <span>Courses</span>
                  </h3>
                </div>
              </div>
            </div>		
            <div className="row">
              {/*start single news  item */}	
              <div className="col-md-3 col-sm-6">
                <div className="single_news_item">
                  <div className="news_thumb">
                    <a href="#"><img src="/assets/img/home1/news/eng.jpg" alt="" /></a>	
                  </div>
                  <div className="news_content">
                    <p className="date">8 Jan 2016</p>
                    <h2><a href="single-blog.html">A Diploma of Accounting is specifically designed for indivisuals </a></h2>
                  </div>
                </div>
              </div>
              {/*end single news  item */}
              {/*start single news  item */}	
              <div className="col-md-3 col-sm-6">
                <div className="single_news_item">
                  <div className="news_thumb">
                    <a href="#"><img src="/assets/img/home1/news/law.jpg" alt="" /></a>	
                  </div>
                  <div className="news_content">
                    <p className="date">8 Jan 2016</p>
                    <h2><a href="single-blog.html">A Diploma of Accounting is specifically designed for indivisuals </a></h2>
                  </div>
                </div>
              </div>
              {/*end single news  item */}
              {/*start single news  item */}	
              <div className="col-md-3 col-sm-6">
                <div className="single_news_item">
                  <div className="news_thumb">
                    <a href="#"><img src="/assets/img/home1/news/med.jpg" alt="" /></a>	
                  </div>
                  <div className="news_content">
                    <p className="date">8 Jan 2016</p>
                    <h2><a href="single-blog.html">A Diploma of Accounting is specifically designed for indivisuals </a></h2>
                  </div>
                </div>
              </div>
              {/*end single news  item */}
              {/*start single news  item */}	
              <div className="col-md-3 col-sm-6">
                <div className="single_news_item">
                  <div className="news_thumb">
                    <a href="#"><img src="/assets/img/home1/news/sci.jpeg" alt="" /></a>	
                  </div>
                  <div className="news_content">
                    <p className="date">8 Jan 2016</p>
                    <h2><a href="single-blog.html">A Diploma of Accounting is specifically designed for indivisuals </a></h2>
                  </div>
                </div>
              </div>
              {/*end single news  item */}					
            </div>
          </div>
        </div>
        {/*end news  area */}
        
          <Footer/>
        </Fragment>
    )
}

export default Index
