import React from 'react'
import { CardTitle, FeaturesCard, FeaturesCardWrapper, ImageHolder, Wrapper } from './styles';
import { SubTitle, TitleBar } from '../about/styles';
import { Typography } from '@mui/material';

export const Technology = () => {
  return (
    <Wrapper id="features">
         <TitleBar>Technology</TitleBar>
         <SubTitle variant="h2" sx={{ textAlign: "center" }}>
         Based TaxPad {" "}
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
             Technology
           </span> 

         </SubTitle>
         <Typography variant="h6" sx={{margin: '0 auto', textAlign: 'center'}}>Dive into Base’s speed and $BPAD innovation for Web3 tokenomics.</Typography>
   
         <FeaturesCardWrapper>
           {[
             {
               title: "Base’s speed for tax tokens—fast, cheap, reliable.",
               subtitle:
                  [
                    "- Powered by Base’s high-throughput blockchain, handling millions of transactions.",
                    "- Low gas fees keep launches affordable for degens and devs.",
                    "- Ensures real-time tax token performance on a global scale."
                  ]
             },
             {
               title: "Automation for rewards, taxes, and burns—securely.",
               subtitle:
               [
                "- Smart contracts on Base automate rewards, dynamic taxes, and burn mechanisms.",
                "- Audited code ensures trust and rug-proof tokenomics.",
                "- Real-time adjustments for custom incentives—holders, buyers, stakers."
               ]
             } 
            
           ].map((item, index) => {
             return (
               <FeaturesCard key={index}>
                 <ImageHolder>
                   {/* <img src={item.img} alt={item.title} /> */}
                 </ImageHolder>
                 <CardTitle variant="h5" color='secondary'>
                   {item.title}
                 </CardTitle>
                   {item.subtitle.map((item, index) =>  <Typography key={index} variant="body1" margin="1rem 0"> {item}
                 </Typography>)}
                
               </FeaturesCard>
             );
           })}
         </FeaturesCardWrapper>
       </Wrapper>
  )
}
