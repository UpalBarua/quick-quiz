import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '../../Utils.module.css';
import styles from './Topics.module.css';
import TopicsCard from './TopicsCard';

const Topics = () => {
  const topicsData = useLoaderData();
  console.log(topicsData.data);

  return (
    <section className={`${styles.topicsContainer} container`}>
      {topicsData.data.map(topic => (
        <TopicsCard key={topic.id} topic={topic} />
      ))}
    </section>
  );
};

export default Topics;
