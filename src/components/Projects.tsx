import '../styles/Projects.css';
import { Link } from 'react-router-dom'; // 导入 Link 组件

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'project1.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Portfolio Template',
      description: 'A customizable portfolio template for creative professionals with smooth animations and modern design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      image: 'project2.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with team collaboration features.',
      technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
      image: 'project3.jpg',
      link: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <Link to={`/project/${project.id}`} key={project.id} className="project-card-link">
              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder-image"></div>
                  {/* If you have actual images, use this instead:
                  <img src={`/images/${project.image}`} alt={project.title} /> */}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="view-more">
          <a href="#" className="btn btn-primary">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
