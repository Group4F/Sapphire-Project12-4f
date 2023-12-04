import React from 'react';
import { Table } from 'antd';
import LessonModal from './LessonModal';

export default function LessonListView({ classrooms }) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Number of Mentors',
      dataIndex: 'mentorsLength',
    },
    {
      title: 'Number of Students',
      dataIndex: 'studentsLength',
    },
    {
      title: 'Code',
      dataIndex: 'code',
    },
    {
      title: 'Classroom ID',
      dataIndex: 'id',
    },
    {
      title: 'Details',
      dataIndex: 'view',
      width: '10%',
      align: 'center',
      render: (_, record) => (
        <LessonModal
          classroom={record}
          linkBtn={true}
        />
      ),
    },
  ];

  const data = classrooms.map((classroom) => ({
    name: classroom.name,
    id: classroom.id,
    code: classroom.code,
    mentorsLength: classroom.mentors.length,
    studentsLength: classroom.students.length,

  }));

  return (
    <div id='table-container'>
      <Table columns={columns} dataSource={data} rowKey='id' />
    </div>
  );
}
