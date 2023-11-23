import React, { useState } from 'react';
import Modal from 'react-modal';
import './YourComponent.css';
import styled from 'styled-components';
import closeImg from '../../assets/img/CloseModal.png';
import SideMenuModal from '../SideMenu/SideMenuModal';

// 스타일 지정
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};
const Rectangle = styled.div`
  width: 50px;
  height: 4px;
  background: #dbdbdb;
  border-radius: 5px;
  margin: 16px auto;
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  width: 390px;
  height: 46px;
  padding: 26px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  cursor: pointer;
`;

const ModalClose = styled.img`
  display: block;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -150%);
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  cursor: pointer;
`;

// App 컴포넌트
const SideModal = ({ isOpen, onRequestClose }) => {
  console.log('받은 값 : ', isOpen);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal"
      >
        <SideMenuModal />
      </Modal>
    </div>
  );
};

export default SideModal;
