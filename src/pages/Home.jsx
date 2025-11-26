import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  Box,
  Alert,
} from "@mui/material";
import { fetchNews } from "../utils/api";
import NewsCard from "../components/NewsCard";

const Home = ({ addBookmark, isBookmarked }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNews({ category: "general" });
      setArticles(data.articles);
    } catch (err) {
      setError(err.message || "Failed to load news");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="60vh"
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Box py={4}>
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Box py={4}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          📰 Latest News
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          paragraph
          align="center"
        >
          Stay updated with the latest news from Canada
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <NewsCard
                article={article}
                onBookmark={addBookmark}
                isBookmarked={isBookmarked(article.url)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
