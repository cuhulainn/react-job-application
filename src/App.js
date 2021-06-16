import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SignUp from "./SignUp";
import Sidebar from "./Sidebar";
import CssBaseline from "@material-ui/core/CssBaseline";
import rocket from "./ethrocket.jpg";

const useStyles = makeStyles({
  pageContainer: {
    backgroundImage: "url('" + rocket + "')",
    backgroundSize: "1930px 1230px",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    minHeight: "1230px",
  },
  aspectContainer: {
    paddingTop: "75%", // this didn't work and I didn't have time to figure out how to do that last aspect ratio/text shrink
  },
  contentContainer: {
    maxWidth: "1800px",
    height: "1000px",
    backgroundColor: "white",
  },
  sidebar: {
    backgroundColor: "#2b6ff3",
    color: "white",
    height: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Grid container className={classes.pageContainer} justify="center">
        {/* <div className={classes.aspectContainer}> */}
        <Grid
          container
          style={{
            display: "flex",
            alignItems: "center",
          }}
          className={classes.contentContainer}
        >
          <Grid item xs={8}>
            <Grid container className="signupContainer">
              <Grid item lg={2} sm={1} xs={0} />
              <Grid item lg={8} sm={10} xs={12}>
                <SignUp />
              </Grid>
              <Grid item lg={2} sm={1} xs={0} />
            </Grid>
          </Grid>
          <Grid
            item
            className={classes.sidebar}
            style={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
            }}
            xs={4}
          >
            <Sidebar />
          </Grid>
        </Grid>
        {/* </div> */}
      </Grid>
    </>
  );
}

export default App;
