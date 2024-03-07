import { Feed } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

export const Heading = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }, []);

  const timeElapsed = useMemo(() => {
    const minutes = Math.floor(timer / 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
    const seconds = (timer % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });

    return `${minutes}:${seconds}`;
  }, [timer]);

  return (
    <Box
      sx={{
        height: "7%",
        width: "100%",
        background: "#26282b",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          ml: 5,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ background: "white" }}>
          <Feed sx={{ color: "#148399" }} />
        </Avatar>
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ ml: 2, color: "white" }}
        >
          Reading
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ color: "white", mr:3}}>{timeElapsed}</Typography>
      </Box>
    </Box>
  );
};
