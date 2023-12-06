import React from 'react';
import { Table } from 'antd';
import LessonModal from './LessonModal';

export default function LessonListView({ lessons }) {
  const columns = [
    {
      title: 'Lesson Name',
      dataIndex: 'name',
    },
    {
      title: 'Lesson ID',
      dataIndex: 'id',
    },
    {
      title: 'Lesson Standard',
      dataIndex: 'lessonStandard',
    },
    {
      title: 'Unit Name',
      dataIndex: 'unitName',
    },
    {
      title: 'Unit ID',
      align: 'center',
      dataIndex: 'unitID',
    },
    {
      title: 'Grade Level',
      width: '15%',
      align: 'center',
      dataIndex: 'grade',
    },
    {
      title: 'Details',
      dataIndex: 'view',
      width: '10%',
      align: 'center',
      render: (_, record) => (
        <LessonModal
          lesson={record}
          linkBtn={true}
        />
      ),
    },

    // {
    //   title: 'Delete',
    //   dataIndex: 'delete',
    //   key: 'delete',
    //   width: '10%',
    //   align: 'right',
    //   render: (text, record) =>
    //     studentData.length >= 1 ? (
    //       <Popconfirm
    //         title={`Are you sure you want to delete all data for ${record.name}?`}
    //         icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
    //         onConfirm={() => handleDelete(record.key)}
    //       >
    //         <button id='link-btn'> Delete</button>
    //       </Popconfirm>
    //     ) : null,
    // },
  ];

  const data = lessons.map((lesson) => ({
    name: lesson.name,
    id: lesson.id,
    lessonStandard: lesson.standards,
    unitName: lesson.unit.name,
    unitID: lesson.unit.id,
    grade: lesson.unit.grade,
  }));

  return (
    <div id='table-container'>
      <Table columns={columns} dataSource={data} rowKey='id' />
    </div>
  );
}
