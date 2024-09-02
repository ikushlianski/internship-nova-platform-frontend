import s from "./style.module.css";
import { Picture } from "./Picture.tsx";
import { Form } from "./Form.tsx";
import { useSearchParams } from "react-router-dom";
import { useLogin } from "react-admin";
import { useEffect } from "react";

export const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const login = useLogin();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) login(token);
  }, [searchParams, login]);

  return (
    <div className={s.container}>
      <div className={s.header}></div>
      <Picture />
      <Form />
    </div>
  );
};
