import s from "./style.module.css";
import { Typography } from "../../../../shared";
import GoogleIcon from "../../../../assets/google-icon.svg";
import { useOauth } from "../../logic";

export const Form = () => {
  const { handelGoogleSignIn } = useOauth();

  return (
    <div className={s.form}>
      <div className={s.intro}>
        <Typography type="h3" className={s.title}>
          Войдите
        </Typography>
        <Typography type="body2" className={s.subtitle}>
          Войдите в свою учетную запись, чтобы продолжить
        </Typography>
      </div>
      <div className={s.providers}>
        <button className={s.provider} onClick={handelGoogleSignIn}>
          <img width={30} height={30} src={GoogleIcon} alt="google icon" />
        </button>
      </div>
    </div>
  );
};
