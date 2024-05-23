import React, { useState } from 'react';
import LoginFragment from '../../Fragments/LoginFragment/LoginFragment';

const Login = () => {
    const [isOpenModal, setisOpenModal] = useState(false);
    const Handlermodal = () => {
        setisOpenModal(true);
      }

      const Handlerclosemodal = () => {
        setisOpenModal(false);
      }

    return (
        <div>
             <p onClick={Handlermodal} className='text-white cursor-pointer'>Login</p>
             { isOpenModal ? <LoginFragment onClick={Handlerclosemodal} ></LoginFragment> : null}
        </div>
    );
}

export default Login;
