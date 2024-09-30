import { GoggleIcon, ManAndWomanInGadgets } from '@/assets';
import { useLogin } from 'react-admin';

export const LoginPage = () => {
  const login = useLogin();

  return (
    <div className="flex flex-col h-screen w-screen bg-color-white">
      {/* Header */}
      <div className="bg-color-white h-[102px]">header</div>

      {/* Content */}
      <div className="flex flex-row w-full h-full bg-color-darker">
        {/* Picture */}
        <div className="h-full w-2/5 flex justify-center items-center">
          <ManAndWomanInGadgets className="max-w-[320px] max-h-[280px]" />
        </div>

        {/* Sign In form */}
        <div className="h-full w-3/5 flex flex-col items-center gap-2 bg-color-white rounded-l-[20px]">
          <div className="flex flex-col items-center gap-5 mt-20">
            <h3 className="font-manrope text-h3 font-bold text-color-primary">Sign in</h3>
            <p className="font-manrope text-body2 text-color-tertiary">
              Login to your account to continue
            </p>
          </div>
          <button
            className="flex justify-center items-center w-[60px] h-[60px] rounded-[20px] bg-color-darker hover:cursor-pointer mt-10"
            onClick={login}
          >
            <GoggleIcon width="30px" height="30px" />
          </button>
        </div>
      </div>
    </div>
  );
};
