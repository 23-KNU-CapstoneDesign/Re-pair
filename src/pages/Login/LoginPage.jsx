import React from 'react';
import styled from 'styled-components';
import InfoForm from '../../components/common/InfoForm';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../lib/apis/LoginApi';
import { useContext } from 'react';
import { LoginDispatchContext } from '../../lib/context/LoginContext';
const S = {
  content: styled.main`
    justify-content: flex-start;
    margin-top: 50px;
  `,
};

const LoginPage = () => {
  const { login } = useContext(LoginDispatchContext);
  const navigate = useNavigate();

  const handleLogin = async (inputs) => {
    try {
      const response = await loginApi(inputs);
      if (response.success) {
        console.log('로그인/가입 성공');
        login(response.userName);
        navigate('/main');
      } else {
        console.log('로그인/가입 실패');
        alert('로그인에 실패하였습니다! : ' + response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.content>
      <InfoForm type="login" onSubmit={handleLogin} />
    </S.content>
  );
};

export default LoginPage;
