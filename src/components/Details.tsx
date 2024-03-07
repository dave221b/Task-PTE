import { BookmarkBorder, CheckBox } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export const Details = () => {
  return (
    <Box
      sx={{
        height: "10%",
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        mx: 5,
        width:'95%'
      }}
    >
      <Box sx={{ height: "80%", display: "flex", alignItems: "center" }}>
        <Box sx={{display:'flex', flexDirection:'row'}}>
          <Typography>#1 Study Abroad (RP)</Typography>
          <BookmarkBorder sx={{color:'#547feb'}}/>
        </Box>
      </Box>
      <Box
        sx={{
          height: "80%",
          width:'23%',
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop:'auto'
        }}
      >
        <Box sx={{ height: "50%" }}>
          <Button
            sx={{
              background: "#3e4040",
              color: "white",
              height: "45%",
              mx: 0.5,
            }}
          >
            Exam Q(0)
          </Button>
          <Button
            sx={{
              background: "#3e4040",
              color: "white",
              height: "45%",
              mx: 0.5,
            }}
          >
            Done Before Q(0)
          </Button>
          <Button
            sx={{
              background: "#3e4040",
              color: "white",
              height: "45%",
              ml: 0.5,
            }}
          >
            Difficult (4)
          </Button>
        </Box>
        <Box sx={{ width:'100%', display: "flex", flexDirection: "row", justifyContent:'end' }}>
          <Typography>Difficult</Typography>
          <CheckBox />
          <Typography>My Exam</Typography>
          <CheckBox />
        </Box>
      </Box>
    </Box>
  );
};
