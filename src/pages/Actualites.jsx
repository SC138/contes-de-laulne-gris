// src/pages/Actualites.jsx
import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../services/api';

const Actualites = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
    };

    getArticles();
  }, []);

  return (
    <div>
      <h2>Actualités</h2>
      {articles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Actualites;
