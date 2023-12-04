import React from 'react';
import { Table } from 'antd';
import LessonModal from './LessonModal';

export default function LessonListView({ classrooms }) {
  const columns = [
    {
      title: 'Class Name',
      dataIndex: 'name',
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
  }));

  return (
    <div id='table-container'>
      <Table columns={columns} dataSource={data} rowKey='id' />
    </div>
  );
}
