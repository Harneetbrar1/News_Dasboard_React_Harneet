import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Alert,
  Skeleton,
  Card,
  CardContent,
  CardMedia,
  Button,
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
      <Container maxWidth="xl">
        <Box py={4}>
          <Skeleton
            animation="wave"
            variant="text"
            width={300}
            height={60}
            sx={{ mx: "auto", mb: 2 }}
          />
          <Skeleton
            animation="wave"
            variant="text"
            width={400}
            height={30}
            sx={{ mx: "auto", mb: 4 }}
          />
          <Skeleton
            animation="wave"
            variant="rounded"
            width="100%"
            height={56}
            sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
          />
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    height={200}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Skeleton
                      animation="wave"
                      variant="text"
                      height={32}
                      sx={{ mb: 1 }}
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      height={20}
                      sx={{ mb: 0.5 }}
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      height={20}
                      sx={{ mb: 0.5 }}
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      height={20}
                      width="80%"
                      sx={{ mb: 2 }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Skeleton
                        animation="wave"
                        variant="rounded"
                        width={80}
                        height={24}
                      />
                      <Skeleton
                        animation="wave"
                        variant="text"
                        width={100}
                        height={20}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Skeleton
                        animation="wave"
                        variant="rounded"
                        width={120}
                        height={36}
                      />
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width={40}
                        height={40}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl">
        <Box py={4}>
          <Alert
            severity="error"
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => loadNews(searchQuery)}
              >
                RETRY
              </Button>
            }
          >
            <strong>Oops! Something went wrong.</strong>
            <br />
            {error}
            <br />
            <small>
              Please check your internet connection or try again later.
            </small>
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
