import React from "react";
import "./MySkills.css";

const MySkills = () => {
  return (
    <div class='skills-container'>
      <h2>Here's some stuff I'm good at!</h2>
      <div class='skills'>
        {" "}
        <div class='skill'>
          <div class='skill-head'>
            <i class='fas fa-code'></i>
            <h2 style={{textTransform:"uppercase"}}>Full stack Web Developement</h2>
          </div>
          <div class='skill-info'>
            <div class='skill-content'>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </div>
            <div class='skill-knowledge'>
              <div class='skill-knowledge-item'>
                <div class='topic'>Frameworks I've worked in: </div>
                <div class='knowledge'>
                  React, Angular, Flask,Java Springboot,Node
                </div>
              </div>
              <div class='skill-knowledge-item'>
                <div class='topic'>Languages I've used: </div>
                <div class='knowledge'>
                  JavaScript, Python, TypeScript, Java
                </div>
              </div>
              <div class='skill-knowledge-item'>
                <div class='topic'>Databases I've used: </div>
                <div class='knowledge'>MongoDB,Netezza,Oracle,MySQL</div>
              </div>
            </div>
          </div>
        </div>
        <div class='skill'>
          <div class='skill-head'>
            <i class='fas fa-database'></i>
            <h2 style={{textTransform:"uppercase"}}>Big Data</h2>
          </div>
          <div class='skill-info'>
            <div class='skill-content'>
              I picked up this amazing skill set at Citi where I worked with big
              data technologies to process huge volumes of data at real-time
            </div>
            <div class='skill-knowledge'>
              <div class='skill-knowledge-item'>
                <div class='topic'>Frameworks I've worked in: </div>
                <div class='knowledge'>
                  Hadoop,Apache Spark,Yarn,MapReduce,Kafka,Hdfs
                </div>
              </div>
              <div class='skill-knowledge-item'>
                <div class='topic'>Languages I've used: </div>
                <div class='knowledge'>Scala,Java,Shell scripting</div>
              </div>
              <div class='skill-knowledge-item'>
                <div class='topic'>Databases I've used: </div>
                <div class='knowledge'>Hbase,Hive</div>
              </div>
            </div>
          </div>
        </div>
        <div class='skill'>
          <div class='skill-head'>
            <i class='fas fa-robot'></i>
            <h2 style={{textTransform:"uppercase"}}>Machine Learning</h2>
          </div>
          <div class='skill-info'>
            <div class='skill-content'>
              I am a nerd. I have been dreaming about Star Trek computers,
              Jarvis like AI, and robots from a very young age.
            </div>
            <div class='skill-knowledge'>
              <div class='skill-knowledge-item'>
                <div class='topic'>ML Frameworks/Libraries I've used: </div>
                <div class='knowledge'>Skicit-learn,PyTorch,Tensorflow</div>
              </div>
              <div class='skill-knowledge-item'>
                <div class='topic'>Languages I've used: </div>
                <div class='knowledge'>Python</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
