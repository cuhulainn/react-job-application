import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Button, TextField } from "@material-ui/core";
import { useFormControls } from "./SignUpFormControls";

const userTypes = [
  {
    value: "dev",
    label: "Developer",
  },
  {
    value: "superDev",
    label: "Experienced Developer",
  },
  {
    value: "megaDev",
    label: "World-Renowned Developer",
  },
];

const useStyles = makeStyles((theme) => ({
  formText: {
    justifyItems: "left",
  },
  headerText: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(6),
  },
  submit: {
    margin: theme.spacing(5, 0, 5, 0),
  },
}));

function SignUp() {
  const classes = useStyles();
  const { handleInputValue, handleFormSubmit, formIsValid, errors, values } =
    useFormControls();

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <div className={classes.formText}>
          <Box fontWeight="fontWeightBold">
            <Typography variant="h4" className={classes.headerText}>
              Let's set up your account
            </Typography>
          </Box>
          <Typography variant="p" className={classes.headerText}>
            Already have an account?
            <Link href="/signin"> Sign in</Link>
          </Typography>
        </div>

        <form className={classes.form} onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Your name"
                name="name"
                autoComplete="name"
                onChange={handleInputValue}
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email address"
                name="email"
                autoComplete="email"
                onChange={handleInputValue}
                {...(errors["email"] && {
                  error: true,
                  helperText: errors["email"],
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                variant="outlined"
                required
                fullWidth
                id="userType"
                label="I would describe my user type as:"
                value={values.userType ? values.userType : ""}
                onChange={handleInputValue}
              >
                {userTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText="Minimum 8 characters"
                onChange={handleInputValue}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onSubmit={handleFormSubmit}
            disabled={!formIsValid()}
          >
            Next
          </Button>
          <Grid container className={classes.formText}>
            <Typography variant="body1">
              By clicking the "Next" button, you agree to creating a free
              account, and to
              <Link href="/terms"> Terms of Service</Link> and
              <Link href="/privacy"> Privacy Policy</Link>.
            </Typography>
          </Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}

export default SignUp;
