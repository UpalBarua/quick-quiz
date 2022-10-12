import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import styles from './Chart.module.css';
import '../../Utils.module.css';

const Chart = () => {
  const data = useLoaderData().data;

  return (
    <section className={`${styles.chart} container`}>
      <h2 className={styles.title}>Questions Chart</h2>
      <ResponsiveContainer
        className={styles.chartContainer}
        width="100%"
        height={400}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 50, left: 0, bottom: 10 }}>
          <Area
            type="monotone"
            dataKey="total"
            stroke="#7e57c2"
            fill="#7e57c2"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="6 6" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Chart;
