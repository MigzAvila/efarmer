import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const LoginForm = () => {
  const[write, setWrite] = useState("")
  const [openHandle, setHandleOpen] = useState(() => false)
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const openHandleFun = (event) => {
    setHandleOpen(openHandle)
    console.log()
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const practicePurpose = (e) => {
   setWrite( e.target.value)  
  }

  return (
    <Card
      sx={{ maxWidth: 345, margin: "0 auto", textAlign: "center", bgcolor: "white", borderColor: "error.main"}}
    >
      <div>Name: {write}</div>
      <CardMedia
        component="img"
        height="270"
        image="https://i.pinimg.com/736x/3f/5a/d8/3f5ad816179850d23695910e906554a7.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          style={{ textAlign: "center" }}
        >
          Login
        </Typography>
        <Typography variant="body2" color="text.secondary" component = "div">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <TextField
                sx={{ m: 1, width: "35ch", margin: "0 auto", height: "70px" }}
                id="standard-basic"
                label="Username"
                variant="standard"
                onChange={practicePurpose}
              />
              <FormControl
                sx={{ m: 1, width: "35ch", margin: "0 auto" }}
                variant="standard"
              >
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
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ textAlign: "center", margin: "0 auto" }}>
          Login
        </Button>  
         <div style={{ textAlign: "center", margin: "0 auto" }}>
         <SignUp  openHandle ={openHandle}/>
          </div>

      </CardActions>
      {/* <div>
        Name: {practicePurpose}
      </div> */}
    </Card>
  );
}; //end of login form

// Sign up function
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const textFields = [
  { textFieldName: "First Name" },
  { textFieldName: "Last Name" },
  { textFieldName: "Email" },
  { textFieldName: " Username" },
];

//sign up function
const SignUp = (props) => {
  const [open, setOpen] = React.useState(props.openHandle);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const [values, setValues] = React.useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    confirmShowPassword: false
  });

  //showPassword validations
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };
  
  const handleClickShowPassword = () => {
    if(values.showPassword ===  values.showPassword ){
      setValues({
        ...values,
        showPassword: !values.showPassword,
      })
    }
    else{
      setValues({
        ...values,
        confirmShowPassword: !values.confirmShowPassword,
      })
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // confirm Password validation
  const confirmPasswordHandleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const handleMouseDownPasswordConfirm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Button onClick={handleOpen}>Sign Up</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            sx={{ borderRadius: "20px" }}
            component="img"
            height="100"
            image="https://i.pinimg.com/736x/3f/5a/d8/3f5ad816179850d23695910e906554a7.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              style={{ textAlign: "center" }}
            >
              Sign In Form
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {/* mapping text fields from textFields object*/}
                  {textFields.map((text, index) => (
                    <TextField
                      sx={{ m: 1, width: "35ch", margin: "0 auto", height: "60px",}}
                      id="standard-basic"
                      label={text.textFieldName}
                      variant="standard"
                      key={index}
                    />
                  ))}

                  {/* password and confirm password input  field */}
                    <FormControl
                    sx={{ m: 1, width: "35ch", margin: "0 auto", height: "60px",}}
                    variant="standard">
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
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl
                    sx={{ m: 1, width: "35ch", margin: "0 auto", height: "60px",}}
                    variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={values.confirmShowPassword ? "text" : "password"}
                      value={values.confirmPassword}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPasswordConfirm}
                          >
                            {values.confirmShowPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  
                </Grid>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              Create
            </Button>
          </CardActions>
        </Box>
      </Modal>
    </>
  );
};

export { LoginForm, SignUp };
