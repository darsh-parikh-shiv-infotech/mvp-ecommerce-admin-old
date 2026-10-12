import { useState } from 'react';
import BaseAppInfoAuth from '../../Components/BaseAppInfoAuth';
import { LuShoppingCart } from 'react-icons/lu';
import BaseForgotPasswordForm from '../../Components/BaseForgotPasswordForm';
import BaseChangePasswordForm from '../../Components/BaseChangePasswordForm';

const ResetPasswordPage = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const forgotPasswordHandler = () => {
    setStep(2);
    return;
  };
  const resetPasswordHandler = () => {
    setStep(1);
    return;
  };
  return (
    <div className="w-full h-dvh overflow-hidden bg-red-100">
      <div className="w-full h-full flex flex-col md:flex-row px-4 md:px-12">
        {/* Left Login Card */}
        <div className="w-full md:w-[40%] h-full flex items-center">
          <div className="w-full flex flex-col gap-7 p-4 md:p-12 rounded-lg shadow-lg bg-red-50">
            <div className="w-full flex flex-row items-center gap-3">
              <div className="flex items-center px-2 py-2 rounded-base bg-red-700 transform transition-all hover:scale-110 hover:-rotate-3 duration-300 ease-in-out ">
                <LuShoppingCart className="shrink-0" size={25} color={'white'} />
              </div>
              <span className="font-bold text-lg md:text-xl">AdminShop</span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="w-full bg-neutral-quaternary rounded-full h-2">
                {step >= 1 && <div className="bg-red-700 w-full h-2 rounded-full"></div>}
              </div>
              <div className="w-full bg-neutral-quaternary rounded-full h-2">
                {step >= 2 && <div className="bg-red-700 w-full h-2 rounded-full"></div>}
              </div>
            </div>

            {step === 1 && <BaseForgotPasswordForm submitHandler={forgotPasswordHandler} />}
            {step === 2 && (
              <BaseChangePasswordForm
                email="changeEmail@mail.com"
                submitHandler={resetPasswordHandler}
              />
            )}
          </div>
        </div>

        {/* App Info */}
        <BaseAppInfoAuth />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
