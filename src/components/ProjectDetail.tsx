import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectDetail.css'; // 导入新的 CSS 文件

// 假设项目数据仍然从 Projects.tsx 或类似地方获取
// 在实际应用中，您可能希望从API或全局状态获取此数据
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'project1.jpg',
    details: 'Detailed information about the e-commerce website project...'
  },
  {
    id: 2,
    title: 'Portfolio Template',
    description: 'A customizable portfolio template for creative professionals with smooth animations and modern design. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    image: 'project2.jpg',
    details: 'Detailed information about the portfolio template project...'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and deadlines with team collaboration features. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
    image: 'project3.jpg',
    details: 'Detailed information about the task management app project...'
  }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || '', 10);
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail-container">
      <h1>{project.title}</h1>
      <img 
        src={`/images/${project.image}`} 
        alt={project.title} 
      />
      <p><strong>Description:</strong> {project.description}</p>
      <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
      <p><strong>Details:</strong> {project.details}</p>
      {/* Add more project details here */}
    </div>
  );
};

export default ProjectDetail;
