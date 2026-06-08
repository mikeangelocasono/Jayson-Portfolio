"use client";

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { name: 'Load Time', before: 4.2, after: 1.2, unit: 's' },
  { name: 'Conversion', before: 2.4, after: 5.8, unit: '%' },
  { name: 'Retention', before: 35, after: 62, unit: '%' },
  { name: 'SEO Score', before: 65, after: 98, unit: '' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-border rounded-2xl shadow-xl">
        <p className="font-black uppercase tracking-tighter mb-2">{label}</p>
        <p className="text-sm font-medium text-muted-foreground">
          Before: <span className="text-black font-bold">{payload[0].value}{payload[0].payload.unit}</span>
        </p>
        <p className="text-sm font-medium text-primary">
          After: <span className="font-bold">{payload[1].value}{payload[1].payload.unit}</span>
        </p>
      </div>
    );
  }
  return null;
};

const ProjectResultsChart = () => {
  return (
    <div className="my-20 p-10 rounded-[3rem] border border-border bg-accent/30">
      <div className="mb-10">
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Performance Impact</h3>
        <p className="text-muted-foreground font-medium">A data-driven look at the improvements achieved through this project.</p>
      </div>
      
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6B6B6B', fontSize: 12, fontWeight: 700 }}
              dy={10}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.05)' }} />
            <Legend 
              verticalAlign="top" 
              align="right" 
              iconType="circle"
              wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}
            />
            <Bar 
              name="Before" 
              dataKey="before" 
              fill="#E5E5E5" 
              radius={[10, 10, 0, 0]} 
              barSize={40}
            />
            <Bar 
              name="After" 
              dataKey="after" 
              fill="#FF4A1C" 
              radius={[10, 10, 0, 0]} 
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectResultsChart;