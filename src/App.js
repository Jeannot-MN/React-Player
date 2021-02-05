import logo from './logo.svg';
import './App.css';
import React from "react"
import ReactPlayer from "react-player"
import { Box, Typography } from '@material-ui/core';
import SearchAppBar from './Bar'


function App() {
  return (
    <Box display={"flex"} flexDirection="column" justifyContent="center" className="App">
      <SearchAppBar></SearchAppBar>
      {/* <Typography variant="h4">Click On the video to play</Typography> */}

      <ReactPlayer
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
        controls={true}
        muted={true}
        style={{
          margin: '10px auto'
        }}
      />
    </Box>
  );
}

export default App;
