import { Container, Typography, Box, Paper } from "@mui/material";
import { Bookmark } from "@mui/icons-material";

const Bookmarks = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <Bookmark sx={{ fontSize: 40, color: "secondary.main", mr: 2 }} />
          <Typography variant="h3" component="h1">
            Saved Articles
          </Typography>
        </Box>

        <Paper
          elevation={1}
          sx={{
            p: 6,
            textAlign: "center",
            backgroundColor: "grey.50",
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No bookmarks yet
          </Typography>
          <Typography variant="body1" color="text.secondary">
            🚧 Bookmark system coming soon...
            <br />
            Save interesting articles to read later!
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Bookmarks;
