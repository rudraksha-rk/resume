import React, { useEffect } from 'react';
import {logo} from "../assets";
import {Footer} from "../containers";
import {AuthButtonWithProvider, MainSpinner} from "../components";
import {FaGoogle, FaGithub} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import useUser from "../hooks/useUser";



const Authentication = () => {
  const {data, isLoading, isError} = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoading && data){
      navigate("/",{replace:true});
    }
  }, [isLoading, data]);

  if(isLoading){
    return <MainSpinner />;
  }

  return (
    <div className="auth-section">
      {/*Top Section*/}
      <img src={logo} className="w-12 h-auto object-contain" alt=""/>

      {/*Main Section*/}
      <div className="w-full flex flex-1 flex-col items-center justify-center gap-6 ">
        <h1 className="text-3xl lg:text-4xl text-blue-700">Welcome to Expressresume</h1>
        <p className="text-base text-grey-600">express way to create resume</p>
        <h2 className='text-2xl text-grey-600'>Authenticate</h2>
        <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
          <AuthButtonWithProvider Icon={FaGoogle} label={"Sign-in with Google"} provider={"GoogelAuthProvider"}/>
          <AuthButtonWithProvider Icon={FaGithub} label={"Sign-in with Github"} provider={"GithubAuthProvider"}/>
        </div>
      </div>
      {/*Footer Section */}
      <Footer/>

    </div>
  )
}

export default Authentication