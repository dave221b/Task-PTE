import { Box } from "@mui/material";
import { Heading } from "../components/Heading";
import { Description } from "../components/Description";
import { Body } from "../components/Body";
import { Details } from "../components/Details";
import { Footer } from "../components/Footer";

export const ReadingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Heading />
      <Description />
      <Details />
      <Body />
      <Footer />
    </Box>
  );
};
