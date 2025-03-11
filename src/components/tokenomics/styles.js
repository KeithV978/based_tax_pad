import { Box, styled } from "@mui/material";

export const Wrapper = styled("header")(({ theme }) => ({
    
    width: "100%", 
    marginBottom: "2rem",
    padding: "1rem 0",  
  
  }));

  export const FlexBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '1rem',
    marginTop: '2rem',
  }));
  
  export const FlexItem = styled(Box)(({ theme }) => ({
    // flex: '1 1 30%',
    minWidth: '200px',
    width: '100%',
    height: '150px',
    // backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    [theme.breakpoints.up("sm")]: {
        width: "fit-content",
      },
  }));
  