import React from "react";
import "./App.css";

const Introduce = () => (
  <div className="introduce">
    <h2>Yang Seoyeon</h2>
    <p>2001.02.11</p>
    <p>컴퓨터공학전공</p>
    <p>@se0_yeonn</p>
    <p>010-7655-1817</p>
    <p>yseoyeon@duksung.ac.kr</p>
  </div>
);

const Education = () => (
  <div className="education">
    <h3>Education</h3>
    <p>2017-2020 &nbsp; &nbsp; &nbsp; 문정고등학교</p>
    <p>2023-Now &nbsp; &nbsp; &nbsp;덕성여자대학교</p>
  </div>
);

const Activities = () => (
  <div className="activities">
    <h3>Activities</h3>
    <p>2023-Now &nbsp; &nbsp; &nbsp;11기 아기사자</p>
  </div>
);

const Skills = () => (
  <div className="skills">
    <h3>What I Learn</h3>

    <div className="language">
      <div>
        <img src="/img/python.png" alt="파이썬" />
        <img src="/img/c.png" alt="c" />
        <img src="/img/java.png" alt="java" />
      </div>
      <div>
        <img src="/img/htmlcssjs.png" alt="htnl+css+js" />
        <img src="/img/react.png" alt="react" />
      </div>
    </div>
  </div>
);

const Hobby = () => (
  <div className="hobby">
    <h3>Hobby</h3>
    <p>travel</p>
    <article className="atc">
      <div className="travelimg">
        <img src="/img/travel1.jpg" alt="여행사진1" />
        <img src="/img/travel.4.jpg" alt="여행사진2" />
        <img src="/img/travel.3.jpg" alt="여행사진3" />
      </div>
    </article>
  </div>
);

function App() {
  return (
    <div className="App">
      <div className="frame">
        <div className="first">
          <img id="first_pic" src="/img/aboutme.jpg" alt="first-pic" />
          <Introduce />
        </div>
        <hr />
        <div className="second">
          <Education />
          <Activities />
        </div>
        <hr />
        <div className="third">
          <Skills />
        </div>
        <hr />
        <div className="fourth">
          <Hobby />
        </div>
      </div>
    </div>
  );
}

export default App;
