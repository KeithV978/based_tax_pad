import React from "react";
import {
  VideoWrapper,
  // Item,
  // ItemBody,
  // ItemHeader,
  SubTitle,
  TitleBar,
  Wrapper,
} from "./styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "../../assets/images/logo/logo.png"; 
// import ReactPlayer from "react-player";

export const About = () => {
  return (
    <Wrapper id="about">
      <Box sx={{ width: { sm: "40%", xs: "100%" } }}>
        <img src={logo} alt="logo" style={{ width: '100%', display: "block"}}/>
      </Box>
      <Box
        sx={{
          width: { sm: "60%", xs: "100%" },
        }}
      >
        <TitleBar sx={{ margin: { sm: "1rem 0", xs: "1rem auto" } }}>
          About Based Tax Pad
        </TitleBar>
        <SubTitle
          variant="h2"
          sx={{
            textAlign: { sm: "left", xs: "center" },
          }}
        >
          Introducing <br /> Based Tax Pad
        </SubTitle>
        <Typography
          sx={{
            textAlign: { sm: "left", xs: "center" },
          }}
          variant="body2"
        >
          Launch tax tokens in minutes with a $BPAD platform that’s built for
          speed. Automate rewards to keep holders stacking sats—no manual moves
          needed. next-gen tech for a launchpad that’s pure crypto gold.
        </Typography>
      </Box>
    </Wrapper>
  );
};
