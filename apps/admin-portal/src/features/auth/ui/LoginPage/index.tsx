import classes from './style.module.css';
import { Typography } from '@/shared';
import { GoggleIcon, ManAndWomanInGadgets } from '@/assets';

import { useLogin } from 'react-admin';

export const LoginPage = () => {
  const login = useLogin();

  return (
    <div className={classes.container}>
      {/* Header */}
      <div className={classes.header}></div>

      {/* Picture */}
      <div className={classes.picture}>
        <ManAndWomanInGadgets className={classes.image} />
        {/*<img className={classes.image} src={ManAndWomanInGadgets} alt="man and woman in gadgets" />*/}
      </div>

      {/* Sign In form */}
      <div className={classes.form}>
        <div className={classes.intro}>
          <Typography type="h3" className={classes.title}>
            Sign in
          </Typography>
          <Typography type="body2" className={classes.subtitle}>
            Login to your account to continue
          </Typography>
        </div>
        <div className={classes.providers}>
          <button className={classes.provider} onClick={login}>
            <GoggleIcon width="30px" height="30px" />
          </button>
        </div>
      </div>
    </div>
  );
};
