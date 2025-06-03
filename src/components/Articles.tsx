import '../styles/Articles.css';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: 'Building Responsive Websites with CSS Grid',
      excerpt: 'Learn how to create modern, responsive layouts using CSS Grid that work across all devices.',
      date: 'June 10, 2025',
      category: 'CSS',
      link: '#'
    },
    {
      id: 2,
      title: 'Getting Started with React Hooks',
      excerpt: 'A comprehensive guide to understanding and implementing React Hooks in your applications.',
      date: 'May 25, 2025',
      category: 'React',
      link: '#'
    },
    {
      id: 3,
      title: 'Optimizing Website Performance',
      excerpt: 'Techniques and best practices for improving your website\'s loading speed and overall performance.',
      date: 'May 12, 2025',
      category: 'Performance',
      link: '#'
    }
  ];

  return (
    <section className="articles" id="articles">
      <div className="container">
        <div className="section-header">
          <h2>Articles & Tutorials</h2>
          <div className="underline"></div>
        </div>
        
        <div className="articles-grid">
          {articles.map(article => (
            <div className="article-card" key={article.id}>
              <div className="article-category">
                <span>{article.category}</span>
              </div>
              <h3 className="article-title">
                <a href={article.link}>{article.title}</a>
              </h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
                <a href={article.link} className="read-more">Read More</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="browse-categories">
          <h3>Browse By Category</h3>
          <div className="category-tags">
            <a href="#" className="category-tag">CSS</a>
            <a href="#" className="category-tag">JavaScript</a>
            <a href="#" className="category-tag">React</a>
            <a href="#" className="category-tag">TypeScript</a>
            <a href="#" className="category-tag">Career</a>
            <a href="#" className="category-tag">General</a>
          </div>
        </div>
        
        <div className="view-more">
          <a href="#" className="btn btn-primary">View All Articles</a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
