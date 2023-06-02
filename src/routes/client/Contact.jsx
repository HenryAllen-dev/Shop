import { Button, Container, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Helmet>
        <title>Contact me</title>
      </Helmet>
      <Typography p={2} variant="h4">
        Contact Us
      </Typography>
      <Grid container>
        <Grid xs={12} md={6} p={1}>
          <TextField fullWidth label="Name" variant="outlined" />
        </Grid>
        <Grid xs={12} md={6} p={1}>
          <TextField type="email" fullWidth label="Email" variant="outlined" />
        </Grid>
        <TextField sx={{ m: 1 }} fullWidth label="Subject" variant="outlined" />
        <TextField
          fullWidth
          multiline
          rows={10}
          sx={{ m: 1 }}
          id="outlined-basic"
          label="Comment"
          variant="outlined"
        />
      </Grid>

      <Button
        onClick={() => {
          toast.info("Thanks for your feedback");
          navigate("/");
        }}
        size="large"
        sx={{ m: 2, px: 5 }}
        variant="contained"
      >
        Submit
      </Button>
    </Container>
  );
};

export default Contact;
