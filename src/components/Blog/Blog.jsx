import React from 'react';
import BlogCard from './BlogCard';
import styles from './Blog.module.css';
import '../../Utils.module.css';

const BLOG_DATA = [
  {
    id: 1,
    question: 'What is the purpose of react router?',
    answer:
      'React Router is a JavaScript library used to handle client and server-side routing in React applications. It allows the creation of single-page web or mobile apps that allows navigation without the page refreshing. React Router also gives access to browser history features while maintaining the correct view of the application. React Router uses a component-based approach to routing. It provides different routing components as needed by the application.',
    img: 'https://www.loginradius.com/blog/static/a53096b6796dd3d1e3f3df8bc77a6689/ee604/index.png',
  },
  {
    id: 2,
    question: 'How does the context api work?',
    answer:
      'The Context API is a api provided by the React framework, which enables us to share specific forms of data across all levels of the application. To use Context API, the first thing we need to do is create a context using the createContext function. That created context has two React components: Provider and Consumer. The Provider component is going to be used to wrap the components that are going to have access to our context. We can access the context with the Provider component. The useContext is a better way of accessing context',
    img: 'https://miro.medium.com/max/800/0*_54xAc93WGeIuRZZ.png',
  },
  {
    id: 3,
    question: 'What is useRef and how does it work?',
    answer:
      'useRef hook is part of the React Hooks API. It is a function which takes one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. Some of the use cases of useRef hook are To access DOM elements To persist values in successive renders',
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
