import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

import ss_home from "../img/ss_home.png"
import ss_grid from "../img/ss_grid.png"
import ss_prod1 from "../img/ss_prod1.png"
import ss_login from "../img/ss_login.png"
import ss_cart from "../img/ss_cart.png"
import ss_checkout from "../img/ss_checkout.png"


import nw_home from "../img/nw_home.png"
import nw_home2 from "../img/nw_grid.png"
import nw_login from "../img/nw_login.png"
import nw_prod from "../img/nw_product.png"
import nw_signin from "../img/nw_signin.png"

import pf_home from "../img/pf_home.png"
import pf_home2 from "../img/pf_home2.png"
import pf_home3 from "../img/pf_home3.png"
import pf_cart from "../img/pf_cart.png"
import pf_grid from "../img/pf_grid.png"
import pf_prod from "../img/pf_prod.png"

import pp_home from "../img/pp_home.png"
import pp_login from "../img/pp_login.png"
import pp_prod from "../img/pp_prod.png"
import pp_signin from "../img/pp_signin.png"
import pp_cart from "../img/pp_cart.png"
import pp_checkout from "../img/pp_checkout.png"

import res_home from "../img/res_home.png"
import res_home2 from "../img/res_home2.png"
import res_grid from "../img/res_grid.png"
import res_grid2 from "../img/res_grid2.png"
import res_single from "../img/res_single.png"

import wt_home from "../img/wt_home.png"
import wt_home1 from "../img/wt_home1.png"
import wt_hrs from "../img/wt_hrs.png"
import wt_hrs2 from "../img/wt_hrs2.png"
import wt_hrs3 from "../img/wt_hr3.png"

import git_logo from "../img/github_logo1.png"
import redirect from "../img/redirect_img1.png"
class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects Work</h3>
                <p className="subtitle-a">
                  Here are some of my projects.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={ss_home} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={ss_home} alt="" className="img-fluid" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Ssence.com<a href="https://ssenseclone.vercel.app/" target="_blank"><img src={redirect} width={20}></img></a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 | CSS3 | JavaScript
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href="https://github.com/akshayjagtap1111/-ssense.com-s-clone" target="_blank"><img src={git_logo} width={30}></img></a>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                
                
                <div id="project_git"> </div>
                <a
                  href={ss_grid}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ss_prod1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ss_login}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ss_cart}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ss_checkout}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={nw_home} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={nw_home} alt="" className="img-fluid" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">NineWest.com<a href="https://rishabhtg209.github.io/NINE_WEST/" target="_blank"><img src={redirect} width={20}></img></a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                           NodeJS | Express | MongoDB
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href="https://github.com/RishabhTG209/NINE_WEST" target="_blank"><img src={git_logo} width={30}></img></a> 
                        </div>
                      </div>
                    </div>
                  </div>
                 
                
                <div id="project_git"></div>
                <a
                  href={nw_home2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={nw_login}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={nw_prod}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={nw_signin}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={pf_home} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={pf_home} alt="" className="img-fluid" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Paperfry.com <a href="https://pepperfry-project-akshayjagtap1111.vercel.app" target="_blank"><img src={redirect} width={20}></img></a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 | CSS3 | JavaScript
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href="https://github.com/sumit7195/pepperfry-project" target="_blank"><img src={git_logo} width={30}></img></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
              
                <div id="project_git"></div>
                <a
                  href={pf_home2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pf_home3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pf_grid}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pf_prod}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pf_cart}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={pp_home} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={pp_home} alt="" className="img-fluid" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Purplle.com <a href="https://ecommerce-cw.vercel.app/" target="_blank"><img src={redirect} width={20}></img></a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          HTML5 | CSS3 | JavaScript
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href="https://github.com/codingwithgyan/Purplle" target="_blank"><img src={git_logo} width={30}></img></a>
                        </div>
                      </div>
                    </div>
                  </div>
                
                
                <div id="project_git"></div>
                <a
                  href={pp_prod}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pp_login}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pp_signin}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pp_cart}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pp_checkout}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={wt_home} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={wt_home1} alt="" className="img-fluid" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Wether App <a href="https://wether-app-akshayjagtap1111.vercel.app/" target="_blank"><img src={redirect} width={20}></img></a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">HTML | CSS | JavaScript</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href="https://github.com/akshayjagtap1111/recipe_app" target="_blank"><img src={git_logo} width={30}></img></a> 
                        </div>
                      </div>
                    </div>
                    
                  </div> 
               

                <div id="project_git"></div>
                <a
                  href={wt_home1}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={wt_hrs}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={wt_hrs2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={wt_hrs3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={wt_home}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
              
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={res_home} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={res_home} alt="" className="img-fluid" />
                  </div>
                  
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Recipe App<a href="https://recipe-app-akshayjagtap1111.vercel.app" target="_blank"><img src={redirect} width={20}></img></a></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 | CSS3 | JavaScript
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href="https://github.com/akshayjagtap1111/recipe_app" target="_blank"><img src={git_logo} width={30}></img></a>
                        </div>
                      </div>
                    </div>
                  </div>
                 
               
                <div id="project_git"></div>
                <a
                  href={res_grid}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={res_single}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={res_home2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={res_grid2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={res_home}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
