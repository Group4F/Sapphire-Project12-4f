// this works on the View button that creates a pop up box for 
// additional information that did not fit in the table

import { Modal, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getSchools } from '../../../../Utils/requests';

export default function LessonModal({ linkBtn, organization }) {
  const [visible, setVisible] = useState(false);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSchools(organization.id);
        console.log(res); 
        if (res.data) {
          setOrganizations(res.data);
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
          <h1 id='lessons-card-title'>{organizations.name}Details</h1>
        </div>
        <div id='modal-card-content-container'>

        </div>
      </Modal>
    </div>
  );
}
