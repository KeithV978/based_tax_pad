import React from "react";
import { Body, FlexBox, FlexItem, Wrapper } from "./styles";
import { TitleBar } from "../features/styles";
import { SubTitle } from "../about/styles";
import { Box, Typography } from "@mui/material";

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
      <Body>
        <FlexBox>
          <FlexItem>
            <div>
              <Typography variant="h4">
                Token Name:{" "}<br/> 
                  Based TaxPad 
              </Typography>
            </div>
          </FlexItem>
          <FlexItem>
            <div>
              <Typography variant="h4">
                Symbol:{" "}<br/> 
                  $BPAD 
              </Typography>
            </div>
          </FlexItem>
          <FlexItem>
            <div>
              <Typography variant="h4">
                Total Supply:{" "}<br/> 
                  1,000,000,000 
              </Typography>
            </div>
          </FlexItem>
        </FlexBox>

      </Body>
      <div>
        <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'row'},
            width: '100%',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '1rem'
        }}>
          <div>
            <Typography variant="h4">Buy Tax: 5%</Typography>
          </div>

          <div>
            <Typography variant="h4">Sell Tax: 5%</Typography>
          </div>
        </Box>
      </div>
    </Wrapper>
  );
};
