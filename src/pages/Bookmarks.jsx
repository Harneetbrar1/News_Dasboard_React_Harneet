import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import NewsCard from "../components/NewsCard";

const Bookmarks = ({ bookmarks, removeBookmark }) => {
  const isBookmarked = () => true; // All items here are bookmarked

  return (
    <Container maxWidth="xl">
      <Box py={4}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <Bookmark sx={{ fontSize: 40, color: "secondary.main", mr: 2 }} />
          <Typography variant="h3" component="h1">
            Saved Articles
          </Typography>
        </Box>

        <Typography variant="h6" color="text.secondary" paragraph>
          You have {bookmarks.length} saved article
          {bookmarks.length !== 1 ? "s" : ""}
        </Typography>

        {bookmarks.length === 0 ? (
          <Paper
            elevation={1}
            sx={{
              p: 6,
              textAlign: "center",
              backgroundColor: "grey.50",
            }}
          >
            <BookmarkBorder sx={{ fontSize: 60, color: "grey.400", mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No bookmarks yet
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Save interesting articles to read later!
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={3}>
            {bookmarks.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <NewsCard
                  article={article}
                  onBookmark={removeBookmark}
                  isBookmarked={isBookmarked}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default Bookmarks;
