import '../../Styles/Login.css';
import { LuShoppingCart } from 'react-icons/lu';
import BaseAppInfoAuth from '../../Components/BaseAppInfoAuth';
import BaseLoginForm from '../../Components/BaseLoginForm';

const LoginPage = () => {
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
            <div className="flex flex-col">
              <span className="font-bold text-xl md:text-3xl">Sign In</span>
              <span className="text-sm md:text-md text-gray-500">
                Access your admin dashboard to manage users.
              </span>
            </div>

            {/* Login Form */}
            <BaseLoginForm />
          </div>
        </div>

        {/* App Info */}
        <BaseAppInfoAuth />
      </div>
    </div>
  );
};

export default LoginPage;
