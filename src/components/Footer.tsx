import { Box, Button } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        height: "8%",
        background: "black",
        borderRadius: "20px",
        margin: "2.5%",
      }}
    >
      <Box sx={{mx:2, display:'flex', alignItems:'center', height:'100%', justifyContent:'space-between'}}>
        <Box>
          <Button variant='contained' sx={{ mx:1, background: "white", color:'black' }}>Exit</Button>
          <Button variant='contained' sx={{ mx:1, background: "white", color:'black' }}>Redo</Button>
          <Button variant='contained' sx={{ mx:1, background: "white", color:'black' }}>Share Resp</Button>
        </Box>
        <Box>
        <Button variant='contained' sx={{ mx:1, background: "white", color:'black' }}>Submit</Button>
        <Button variant='contained' sx={{ mx:1, background: "white", color:'black' }}>AI Score</Button>
        </Box>
        <Box>
        <Button variant='contained' sx={{ mx:1, background: "white", color:'black' }}>Prev</Button>
        <Button variant='contained' sx={{ mx:1, background: "white", color:'black' }}>Next</Button>
        </Box>
      </Box>
    </Box>
  );
};
