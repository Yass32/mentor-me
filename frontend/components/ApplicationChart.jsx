'use client';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function ApplicationChart() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const chart = new Chart(ref.current, {
      type: 'bar',
      data: {
        labels: ['Pending', 'Accepted', 'Rejected', 'Withdrawn'],
        datasets: [{
          label: 'Applications',
          data: [3, 1, 2, 0],
          backgroundColor: ['#f59e0b', '#10b981', '#ef4444', '#9ca3af'],
          borderRadius: 6,
          borderWidth: 0,
          barThickness: 32,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1b1b24',
            titleFont: { family: 'Inter', size: 13 },
            bodyFont: { family: 'Inter', size: 14, weight: 'bold' },
            padding: 12, cornerRadius: 8, displayColors: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1, font: { family: 'Inter', size: 12 }, color: '#777587' },
            grid: { color: '#eae6f4' },
          },
          x: {
            ticks: { font: { family: 'Inter', size: 12, weight: '500' }, color: '#464555' },
            grid: { display: false },
          },
        },
      },
    });
    return () => chart.destroy();
  }, []);
  return <canvas ref={ref} />;
}
