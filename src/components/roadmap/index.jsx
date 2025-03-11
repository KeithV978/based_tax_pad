import {
  Wrapper,
  SubTitle,
  TitleBar,
  CardWrapper,
  Card,
  CardTitle,
  Circle,
} from "./styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
// import ListItemText from "@mui/material/ListItemText";
import BlurOnRounded from "@mui/icons-material/BlurOnRounded";

export const Roadmap = () => {
  return (
    <Wrapper id="roadmap">
      <div>
        <TitleBar>Roadmap</TitleBar>
        <SubTitle variant="h2" sx={{ marrgin: "0 auto" }}>
          The
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
            Roadmap
          </span>
        </SubTitle>
        <Typography sx={{}}>
          Launch tax tokens with ease—Base speed, auto-rewards, retro style.
        </Typography>
      </div>

      <CardWrapper>
        <div
          className="roadmap"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            padding: "2rem 0",
            overflowX: "auto",
            // scrollbarWidth: "10px",
            // scrollbarColor: `linear-gradient(89.9deg, #02C3FA -1.07%, #0163D6 39.04%, #02C7FC 70.22%, #1634CA 101.56%)`,
          }}
        >
          {/* 1 */}
          <Card>
            {/* <CardTitle variant="body1">
             PHASE 1
            </CardTitle> */}
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>PHASE ONE</Typography>
            </Stack>

            <List>
              {[
                "Whitepaper Release",
                " Website Launch",
                " MVP Development",
                " Social Media Verified",
                " Prelaunch Hype Campaign",
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ color: "#fff" }}>
                    <BlurOnRounded />
                  </ListItemIcon>
                  <Typography variant="body2">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Card>

          {/* 2 */}
          <Card>
            {/* <CardTitle variant="body1">
              Automatic Strategy Bots (Algo Trading)
            </CardTitle> */}
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>PHASE TWO</Typography>
            </Stack>

            <List>
              {[
                "Presale on $BPAD Platform",
                " Token Launch on Uniswap",
                "  Post-Launch Marketing Blast",
                " CMC & CoinGecko Listings",
              ].map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#fff" }}>
                      <BlurOnRounded />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>

          {/* 3 */}
          <Card>
            {/* <CardTitle variant="body1">
              Cross-Chain Liquidity Management
            </CardTitle> */}
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>PHASE THREE</Typography>
            </Stack>

            <List>
              {[
                " Global Marketing Push",
                "Advanced Tax Mechanics Release",
                " Base DeFi Partnerships",
                " Top Buyer & Staker Incentives Live",
              ].map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#fff" }}>
                      <BlurOnRounded />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>

          {/* 4 */}
          <Card>
            {/* <CardTitle variant="body1">
              Cross-Chain Liquidity Management
            </CardTitle> */}
            <Stack direction="row" gap={1}>
              <Circle />
              <Typography fontWeight={600}>PHASE THREE</Typography>
            </Stack>

            <List>
              {[
                " Heavy Hype Campaign",
                "   CEX Listings (Gate, Bitget, KuCoin, OKX)",
                " Custom Tokenomics Toolkit",
                "  BPADDAO Governance Launch",
                "   API for Devs",
              ].map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#fff" }}>
                      <BlurOnRounded />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>
        </div>
      </CardWrapper>
    </Wrapper>
  );
};
