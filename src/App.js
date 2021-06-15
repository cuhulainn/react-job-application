import React from "react";
import Grid from "@material-ui/core/Grid";
import SignUp from "./SignUp";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item xs="8">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item lg="2" sm="1" xs="0" />
            <Grid item lg="8" sm="10" xs="12">
              <SignUp />
            </Grid>
            <Grid item lg="2" sm="1" xs="0" />
          </Grid>
        </Grid>
        <Grid item xs="4">
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
