import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsCard from './TopicsCard';
import styles from './Topics.module.css';
import '../../Utils.module.css';

const Topics = () => {
  const topicsData = useLoaderData();

  return (
    <section className={styles.topics}>
      <h2 className={styles.title}>Start Practicing</h2>
      <div className={`${styles.topicsContainer} container`}>
        {topicsData.data.map(topic => (
          <TopicsCard key={topic.id} topic={topic} />
        ))}
      </div>
    </section>
  );
};

export default Topics;
