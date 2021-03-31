import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Typography,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Paper,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import RegisterModal from "./RegisterModal";

const useStyles = makeStyles((theme) => ({
  login: {
    width: "100vw",
    height: "100vh",
    color: "#3B3F20",
  },
  register: {
    position: "absolute",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "15%"
  },
  welcome: {
    textAlign: "right",
    width: "50vw",
  },
  about: {
    marginTop: theme.spacing(8),
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#CEDD55",
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
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

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
      <RegisterModal className={classes.register}/>
      <div className={classes.container}>
        <div className={classes.welcome}>
          <Typography variant="h1">WELCOME</Typography>
          <Typography variant="h4">TO THE BEST APP FOR YOUR PANTRY!</Typography>
          <Typography variant="body1" className={classes.about}>
            We know that it can be difficult sometimes to use all of the
            ingredients that you have in your pantry. That's why this
            application was built. You'll be able to input all of the
            ingredients, spices, and other items that you have in your pantry
            to:
            <br />
            <br />
            Generate possible recipes to make with your ingredients.
            <br />
            Save your favorite recipes to your profile to use later.
            <br />
            Keep track of anything you have and how much.
            <br />
            Create grocery list for easy shopping.
            <br />
            Save your grocery lists to your pantry.
          </Typography>
        </div>
        <Paper elevation={4} className={classes.paper}>
          <Typography variant="h4">Login</Typography>

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
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Paper>
      </div>
    </div>
  );
}
