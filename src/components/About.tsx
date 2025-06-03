import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer with expertise in creating modern, 
              responsive websites and applications. With a strong foundation in 
              front-end technologies and a keen eye for design, I strive to build 
              digital experiences that are both beautiful and functional.
            </p>
            <p>
              My journey in web development began several years ago, and since then, 
              I've worked on a variety of projects that have helped me refine my skills 
              and approach to creating effective web solutions.
            </p>
            
            <div className="skills">
              <h3>My Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Responsive Design</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-frame">
              {/* You can add an actual image here */}
              <div className="placeholder-image"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
