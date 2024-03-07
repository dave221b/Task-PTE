import { Box, Typography } from "@mui/material";

export const Description = () => {
  return (
    <Box sx={{height:'7%', background:'#e6eaeb', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Typography>
        The text boxes in the left panel have been placed in a random order.
        Restore the original order by dragging the text boxes from the left
        panel to the right panel. Move atleast one paragraph to right to
        activate 'Submit'
      </Typography>
    </Box>
  );
};
