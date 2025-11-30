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
import SearchBar from "../components/SearchBar";

const Home = ({ addBookmark, isBookmarked }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async (query = "") => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNews({
        category: query ? undefined : "world",
        searchQuery: query,
      });
      setArticles(data.articles);
    } catch (err) {
      setError(err.message || "Failed to load news");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    loadNews(query);
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
          📰{" "}
          {searchQuery ? `Search Results for "${searchQuery}"` : "Latest News"}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          paragraph
          align="center"
        >
          Stay updated with the latest news from Canada
        </Typography>

        <Box sx={{ maxWidth: 600, margin: "0 auto", mb: 4 }}>
          <SearchBar onSearch={handleSearch} />
        </Box>

        {articles.length === 0 ? (
          <Box textAlign="center" py={4}>
            <Typography variant="h6" color="text.secondary">
              No articles found. Try a different search term.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {articles.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <NewsCard
                  article={article}
                  onBookmark={addBookmark}
                  isBookmarked={isBookmarked(article.url)}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default Home;
