import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import tokenBG from "../../assets/images/tokenomicsBG.jpg";
 

export const Wrapper = styled("header")(({ theme }) => ({
  minHeight: "700px",
  width: "100%",
  marginBottom: "2rem",
  padding: "1rem 0",
}));
export const Body = styled("header")(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('${tokenBG}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '2rem',
    minHeight: '300px'
}));

export const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: "1rem",
  marginTop: "2rem",
}));

export const FlexItem = styled(Box)(({ theme }) => ({
  // flex: '1 1 30%',
  minWidth: "200px",
  width: "100%",
//   height: "150px",
  // backgroundColor: '#f0f0f0',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
//   borderRadius: "8px",
  [theme.breakpoints.up("sm")]: {
    width: "fit-content",
    borderLeft: '4px solid #fff',
    paddingLeft: '.5rem',
    BorderColor: [theme.palette.primary.main]
  },
}));
