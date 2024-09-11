import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import PagePhoto from "../../assets/man-and-woman-in-gadgets.svg";

const SignUpPage = () => {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [error, setError] = useState("");
  const [success] = useState("");

  const handleGoogleAuth = async () => {
    //privacy policy validation
    if (!privacyAccepted) {
      setError("Пожалуйста, примите политику конфиденциальности.");
      return;
    }

    try {
      // send data to backend
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_HOST}/auth/google/callback`,
        { privacyAccepted },
      );

      //redirect user to some URL, that ill get on FrontEnd
      if (response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      }
    } catch (err) {
      console.error(error);
      setError("Ошибка при отправке запроса. Попробуйте снова.");
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="flex-1 flex items-center justify-center bg-gray-200">
        <img
          src={PagePhoto}
          alt="People with gadgets"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl text-gray-900 text-center mb-4">
            Зарегистрируйтесь
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Зарегистрируйтесь, чтобы получить полный доступ к платформе
          </p>

          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          {success && (
            <div className="text-green-500 text-center mb-4">{success}</div>
          )}
          {/* todo : think about Toast libs, such as react-toast */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              className="mr-2"
            />
            <label>
              Я принимаю условия{" "}
              <NavLink to="/privacy-policy" className="text-gray-700 underline">
                Политики конфиденциальности
              </NavLink>
            </label>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleGoogleAuth}
              className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white"
            >
              Войти через Google
            </button>
          </div>

          <p className="text-center mt-4">
            Уже есть аккаунт?{" "}
            <NavLink to="/login" className="underline">
              Войдите
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
