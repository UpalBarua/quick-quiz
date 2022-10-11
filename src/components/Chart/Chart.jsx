import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import '../../Utils.module.css';
import styles from './Chart.module.css';

const Chart = () => {
  const data = useLoaderData().data;
  console.log(data);

  return (
    <section className={`${styles.chart} container`}>
      <h2 className={styles.title}>Questions Chart</h2>
      <LineChart width={600} height={400} data={data}>
        <Line type={'monotone'} dataKey="total" stroke="#ccc" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </section>
  );
};

export default Chart;
