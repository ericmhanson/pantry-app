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
  Modal,
  Backdrop,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center"
  },
    paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#D45464"
  },
  margin: {
    margin: theme.spacing(4),
  },
  textField: {
    width: "25ch",
  },
}));

export default function RegisterModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    name: "",
    username: "",
    email: "",
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
    <div className={classes.register}>
      <Button onClick={handleOpen}>REGISTER</Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper elevation={4} className={classes.paper}>
            <Typography variant="h4">Register</Typography>

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">
                Name
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type="name"
                onChange={handleChange("name")}
              />
            </FormControl>

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
                Email
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type="email"
                onChange={handleChange("email")}
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
        </Fade>
      </Modal>
    </div>
  );
}
