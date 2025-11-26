import { Container, Typography, Box } from "@mui/material";
import { Newspaper } from "@mui/icons-material";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          py: 6,
        }}
      >
        <Newspaper sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to News Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Stay updated with the latest news from Canada
        </Typography>
        <Typography variant="body1" color="text.secondary">
          🚧 Home page with news feed coming soon...
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
