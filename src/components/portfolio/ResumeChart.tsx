"use client";

import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { subject: 'Frontend', A: 120, fullMark: 150 },
  { subject: 'Backend', A: 98, fullMark: 150 },
  { subject: 'Design', A: 86, fullMark: 150 },
  { subject: 'DevOps', A: 70, fullMark: 150 },
  { subject: 'Testing', A: 85, fullMark: 150 },
  { subject: 'Soft Skills', A: 110, fullMark: 150 },
];

const ResumeChart = () => {
  return (
    <div className="h-[300px] w-full mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#E5E5E5" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#6B6B6B', fontSize: 10, fontWeight: 900, textTransform: 'uppercase' }} 
          />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#FF4A1C"
            fill="#FF4A1C"
            fillOpacity={0.2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResumeChart;