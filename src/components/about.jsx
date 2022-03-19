import React from "react";
import myImage from "../img/myImage.png";
import aaa from "../img/aaa.jpg";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80",img:"https://cdn.worldvectorlogo.com/logos/html-1.svg" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75",img:"https://static.cdnlogo.com/logos/c/18/css.svg" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90",
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSkrYIN-38LoMu5f3UTJ0HFFGMu0zZ68jX-r9ZoSJ0h0ip3_hdmVONCe9sUHdwbCoP4c&usqp=CAU"
        },
        { id: "PHP_skill", content: "NodeJs", porcentage: "70%", value: "70",img:"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" },
        {
          id: "Python_skill",
          content: "ExpressJs",
          porcentage: "75%",
          value: "75",
          img:"https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png"
        },
        
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80",
          img:"https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
        },
        {
          id: "VanillaJS_skill",
          content: "MongoDB",
          porcentage: "85%",
          value: "85",
          img:"https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png"
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
          content:
            `Hey There i am Akshay Jagtap....
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
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
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
                    <div className="skill-mf">
                      <p className="title-s">I possess the following technical skills </p>
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <img src={skill.img} width={30} id="img"></img>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
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
