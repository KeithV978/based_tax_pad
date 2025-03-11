import React from "react";
import {
  CardTitle,
  FeaturesCard,
  FeaturesCardWrapper,
  ImageHolder,
  TitleBar,
  Wrapper,
} from "./styles";
// import { Button } from "../button";
import { SubTitle } from "../about/styles";
import { Typography } from "@mui/material";

// images
// import comm from "../../assets/images/comm.png";
import analysis from "../../assets/images/analysis.png";
// import cross from "../../assets/images/cross.png";
import risk from "../../assets/images/risk.png";
// import token from "../../assets/images/token.png";
import manage from "../../assets/images/manage.png";

export const Features = () => {
  return (
    <Wrapper id="features">
      <TitleBar>How It Works</TitleBar>
      <SubTitle variant="h2" sx={{ textAlign: "center" }}>
        How{" "}
        <span
          style={{
            background: `linear-gradient(89.9deg, #02C3FA -1.07%, #0163D6 39.04%, #02C7FC 70.22%, #1634CA 101.56%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextTillColor: "transparent",
            color: "transparent",
          }}
        >
          {" "}
          Based Tax Pad{" "}
        </span>
        Works
      </SubTitle>
      <Typography variant="h6" sx={{margin: '0 auto', textAlign: 'center'}}>3 easy steps to Base tax tokens—$BPAD power, auto-rewards!</Typography>

      <FeaturesCardWrapper>
        {[
          {
            title: "STEP 1: Design token",
            subtitle:
              "Craft your token—pick a name, set supply, and choose rewards like SOL, USDC, or your custom token.",
            img: manage,
          },
          {
            title: "STEP 2: Set Taxes",
            subtitle:
              "Set your tax rate (e.g., 5% for auto-rewards), add burns, buybacks, or treasury rules.",
            img: analysis,
          },
          {
            title: "STEP 3: Launch & Reward",
            subtitle:
             "aunch on Base in seconds, automate rewards for holders, and watch profits stack—$BPAD style, zero hassle!",
            img: risk,
          }
        ].map((item, index) => {
          return (
            <FeaturesCard key={index}>
              <ImageHolder>
                <img src={item.img} alt={item.title} />
              </ImageHolder>
              <CardTitle variant="h5" textAlign="center">
                {item.title}
              </CardTitle>
              <Typography variant="body2" textAlign="center">
                {item.subtitle}
              </Typography>
            </FeaturesCard>
          );
        })}
      </FeaturesCardWrapper>
    </Wrapper>
  );
};
