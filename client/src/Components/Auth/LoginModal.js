import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Fade,
  Button,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Paper,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  login: {
    width: "50vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0475B"
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column"
  },
  margin: {
    margin: theme.spacing(4),
  },
  textField: {
    width: "25ch",
  },
}));

export default function LoginModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.login}>
      {open ? (
        <div className={classes.container}>
          <Fade in={open}>
            <Paper elevation={4} className={classes.paper}>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">
                  Username
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type="username"
                  onChange={handleChange("username")}
                />
              </FormControl>

              <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Paper>
          </Fade>
        </div>
      ) : (
        <Button onClick={handleOpen}>LOGIN</Button>
      )}
    </div>
  );
}
