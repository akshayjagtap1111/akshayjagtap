import React from "react";
import myImage from "../img/myImage.png";
import aaa from "../img/aaa.jpg";

import express_icon from "../img/express_icon.png"

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "HTML5_skill",
          content: "HTML5",
          porcentage: "80%",
          value: "80",
          img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
        },
        {
          id: "CSS3_skill",
          content: "CSS3",
          porcentage: "75%",
          value: "75",
          img: "https://static.cdnlogo.com/logos/c/18/css.svg",
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSkrYIN-38LoMu5f3UTJ0HFFGMu0zZ68jX-r9ZoSJ0h0ip3_hdmVONCe9sUHdwbCoP4c&usqp=CAU",
        },
        {
          id: "PHP_skill",
          content: "NodeJs",
          porcentage: "70%",
          value: "70",
          img: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
        },
        {
          id: "Python_skill",
          content: "ExpressJs",
          porcentage: "75%",
          value: "75",
          img: express_icon,
        },

        {
          id: "ReactJS_skill",
          content: "ReactJs",
          porcentage: "80%",
          value: "80",
          img: "https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png",
        },
        {
          id: "Redux_skill",
          content: "ReduxJs",
          porcentage: "80%",
          value: "80",
          img: "http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png",
        },
        {
          id: "VanillaJS_skill",
          content: "MongoDB",
          porcentage: "85%",
          value: "85",
          img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        },
        {
          id: "Heroku_skill",
          content: "Heroku",
          porcentage: "85%",
          value: "85",
          img: "https://d29fhpw069ctt2.cloudfront.net/icon/image/38840/preview.svg",
        },
        {
          id: "Github_skill",
          content: "Github",
          porcentage: "85%",
          value: "85",
          img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        },
        {
          id: "Postman",
          content: "Postman",
          porcentage: "85%",
          value: "85",
          img: "https://user-images.githubusercontent.com/2676579/34940598-17cc20f0-f9be-11e7-8c6d-f0190d502d64.png",
        },
      ],
      about_me: [
        // {
        //   id: "first-p-about",
        //   content:
        //     `Hey There i am Akshay Jagtap....
        //      I am full stack web
        //     developer having good
        //     attention to the details.
        //     Specialized in front-end tools
        //     and java-script. Curious about
        //     modern web technology.
        //     Interested in learning more.
        //     looking for an opportunity to
        //     prove my skills in a healthy
        //     work environment.`,
        // },
        {
          id: "first-p-about",
          content: `Hey There i am Akshay Jagtap....
            a hardworking and highly efficient web developer
             with sound knowledge in full stack technology
              and hands-on practice in Data Struture and
               Algorithms Looking forword to making a significant 
               contribution to a product-based company through
                dedicated effort andmuse of his skill set. 

            `,
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row" style={{ display: "block" }}>
                  <div className="col-md-6" style={{ maxWidth: "100%" }}>
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>

                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>

                  <div className="col-md-6" style={{ maxWidth: "100%" }}>
                    <div className="row" style={{ display: "block" }}>
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <h1 className="title-s" style={{"font-size": 30}}>
                        Skills{" "}
                      </h1>
                    <div className="skill-mf">
                      
                      <div id="my_skills">
                      {this.state.skills.map((skill) => {
                        return (
                         
                            <React.Fragment key={skill.id}>
                              <div className="my_skills_icon_out">
                                <div className="my_skills_icon">
                                <img src={skill.img} width={50}></img>
                                </div>  
                              <p>{skill.content}</p>
                              </div>
                            </React.Fragment>
                          
                        );
                      })}
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
