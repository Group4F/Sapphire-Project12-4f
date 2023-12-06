// this works on the View button that creates a pop up box for 
// additional information that did not fit in the table

import { Modal, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAllClassrooms } from '../../../../Utils/requests';

export default function LessonModal({ linkBtn, classroom }) {
  const [visible, setVisible] = useState(false);
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllClassrooms(classroom.id);
        console.log(res);
        if (res.data) {
          setClassrooms(res.data);
          console.log(res);
        } else {
          message.error(res.err);
        }
      } catch {}
    };
    fetchData();
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  return (
    <div>
      <button id={linkBtn ? 'link-btn' : null} onClick={showModal}>
        View
      </button>
      <Modal
        open={visible}
        onCancel={handleCancel}
        footer={[
          <Button key='ok' type='primary' onClick={handleOk}>
            OK
          </Button>,
        ]}>       
        <div id='modal-lessons-card-header'>
          <h1 id='lessons-card-title'>{classrooms.name}Details</h1>
        </div>
        <div id='modal-card-content-container'>
 
        <div id='description-container'>
        <p id='label'>students:</p>

        </div>

        <div>this happens</div>

        </div>
      </Modal>
    </div>
  );
}
