import React from "react";
import { FlexBox, FlexItem, Wrapper } from "./styles";
import { TitleBar } from "../features/styles";
import { SubTitle } from "../about/styles";
import { Typography } from "@mui/material";

export const Tokenomics = () => {
  return (
    <Wrapper>
      <div style={{ textAlign: "center", width: "100%", marginTop: "2rem" }}>
        <TitleBar>Tokenomics</TitleBar>
        <SubTitle variant="h2" sx={{ marrgin: "0 auto" }}>
          $BPAD
          <span
            style={{
              background: `linear-gradient(89.9deg, #02C3FA -1.07%, #0163D6 39.04%, #02C7FC 70.22%, #1634CA 101.56%)`,
              backgroundClip: "text",
              webkitBackgroundClip: "text",
              webkitTextTillColor: "transparent",
              color: "transparent",
            }}
          >
            {" "}
            Tokenomics
          </span>
        </SubTitle>
      </div>

      {/* body */}
      <div>
        <FlexBox>
          <FlexItem>
            <div>
              <Typography variant="h4">
                Token Name:{" "}
                <span
                  style={{
                    background: `linear-gradient(89.9deg, #02C3FA -1.07%, #0678F9, 39.04%, #0678F9 70.22%, #F90678 101.56%)`,
                    backgroundClip: "text",
                    webkitBackgroundClip: "text",
                    webkitTextTillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  Based TaxPad
                </span>
              </Typography>
            </div>
          </FlexItem>
          <FlexItem>
            <div>
              <Typography variant="h4">
                Symbol:{" "}
                <span
                  style={{
                    background: `linear-gradient(89.9deg, #02C3FA -1.07%, #0678F9, 39.04%, #0678F9 70.22%, #F90678 101.56%)`,
                    backgroundClip: "text",
                    webkitBackgroundClip: "text",
                    webkitTextTillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  $BPAD
                </span>
              </Typography>
            </div>
          </FlexItem>
          <FlexItem>
            <div>
              <Typography variant="h4">
                Total Supply:{" "}
                <span
                  style={{
                    background: `linear-gradient(89.9deg, #02C3FA -1.07%, #0678F9 39.04%, #0678F9 70.22%, #F90678 101.56%)`,
                    backgroundClip: "text",
                    webkitBackgroundClip: "text",
                    webkitTextTillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  1,000,000,000
                </span>
              </Typography>
            </div>
          </FlexItem>
        </FlexBox>
      </div>

      <div>
        <FlexBox>
          <FlexItem>
            <Typography variant="h4">Buy Tax: 5%</Typography>
          </FlexItem>

          <FlexItem>
            <Typography variant="h4">Sell Tax: 5%</Typography>
          </FlexItem>
        </FlexBox>
      </div>
    </Wrapper>
  );
};
