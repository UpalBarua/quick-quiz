import React from 'react';
import '../../Utils.module.css';
import styles from './Blog.module.css';
import BlogCard from './BlogCard';

const BLOG_DATA = [
  {
    id: 1,
    question: 'What is the purpose of react router?',
    answer:
      "packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    img: 'https://www.loginradius.com/blog/static/a53096b6796dd3d1e3f3df8bc77a6689/ee604/index.png',
  },
  {
    id: 2,
    question: 'How does the context api work?',
    answer:
      "packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    img: 'https://miro.medium.com/max/800/0*_54xAc93WGeIuRZZ.png',
  },
  {
    id: 3,
    question: 'What is the useRef and how does is work?',
    answer:
      "packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    img: 'https://reffect.co.jp/wp-content/uploads/2021/01/react_useRef-1024x585.png',
  },
];

const Blog = () => {
  return (
    <section className={`${styles.blogContainer} container`}>
      <h2 className={styles.title}>Questions & Answers</h2>
      <div className={styles.cardsContainer}>
        {BLOG_DATA.map(data => (
          <BlogCard key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
