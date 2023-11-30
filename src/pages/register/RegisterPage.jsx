import React from 'react';
import styled from 'styled-components';
import InfoForm from '../../components/common/InfoForm';
import { RegisterApi } from '../../lib/apis/RegisterApi';
import { useNavigate } from 'react-router-dom';

const S = {
  content: styled.main`
    justify-content: flex-start;
    margin-top: 50px;
    cursor: default;
  `,
};
const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (inputs) => {
    try {
      const response = await RegisterApi(inputs);
      if (response.success) {
        alert('환영합니다! 다시 로그인하여 주시기 바랍니다!');
        navigate('/home');
      } else {
        alert('회원가입도중 오류가 발생했습니다. : ' + response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.content>
      <InfoForm type="register" onSubmit={handleRegister} />
    </S.content>
  );
};

export default RegisterPage;
