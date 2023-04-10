import React from 'react';
import {Area, Bar, CartesianGrid, ComposedChart, Legend, Line,Tooltip, XAxis, YAxis } from 'recharts';
const Statistics = () => {
  const assignmentsArray = [
    { assignmentId: 1, assignmentName: "New Year New Me", assingmentMark: 56 },
    { assignmentId: 2, assignmentName: "G3 Architects", assingmentMark: 60 },
    { assignmentId: 3, assignmentName: "Legal Solution Resources", assingmentMark: 60 },
    { assignmentId: 4, assignmentName: "Javascript Problem Solving", assingmentMark: 60 },
    { assignmentId: 5, assignmentName: "Geometry Genius", assingmentMark: 41 },
    { assignmentId: 6, assignmentName: "Ai Universe Hub", assingmentMark: 60 },
    { assignmentId: 7, assignmentName: "Quiz Hero", assingmentMark: 60 }
  ];

  return (
    <div className='grid h-screen place-items-center'>
      <h3 className='mb-5 w-1/2 text-center lg:text-4xl tracking-tight font-extrabold text-slate-500'>Ph Hero 7 Assignment Marks ComposedChart</h3>
        <ComposedChart width={950} height={250}  data={assignmentsArray}>
          <XAxis dataKey="assignmentId" />
          <YAxis dataKey="assingmentMark" />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="assignmentId" fill="#8884d8" stroke="#8884d8" />
          <Area type="monotone" dataKey="assignmentName" fill="#192a56" stroke="#192a56" />
          <Bar dataKey="assingmentMark" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="assingmentMark" stroke="#ff7300" />
        </ComposedChart>
    </div>
  );
};

export default Statistics;
