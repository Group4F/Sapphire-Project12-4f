import React from 'react';
import { Table } from 'antd';
import LessonModal from './LessonModal';

export default function LessonListView({ organizations }) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Organization ID',
      dataIndex: 'id',
    },
    {
      title: 'Details',
      dataIndex: 'view',
      width: '10%',
      align: 'center',
      render: (_, record) => (
        <LessonModal
          organization={record}
          linkBtn={true}
        />
      ),
    },
  ];

  const data = organizations.map((organization) => ({
    name: organization.name,
    id: organization.id,
    
  }));

  return (
    <div id='table-container'>
      <Table columns={columns} dataSource={data} rowKey='id' />
    </div>
  );
}
