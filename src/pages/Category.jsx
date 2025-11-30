import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Chip,
  Grid,
  CircularProgress,
  Alert,
} from "@mui/material";
import { NEWS_CATEGORIES, fetchNews } from "../utils/api";
import NewsCard from "../components/NewsCard";

const Category = ({ addBookmark, isBookmarked }) => {
  const { categoryId } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const category = NEWS_CATEGORIES.find((cat) => cat.id === categoryId);

  useEffect(() => {
    if (categoryId) {
      loadCategoryNews();
    }
  }, [categoryId]);

  const loadCategoryNews = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("Fetching category:", categoryId);
      const data = await fetchNews({ category: categoryId });
      console.log("Category data received:", data);
      setArticles(data.articles);
    } catch (err) {
      console.error("Category fetch error:", err);
      setError(err.message || "Failed to load news");
    } finally {
      setLoading(false);
    }
  };

  if (!category) {
    return (
      <Container>
        <Box py={4}>
          <Alert severity="error">Category not found</Alert>
        </Box>
      </Container>
    );
  }

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
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Chip
            label={`${category.icon} ${category.name}`}
            color="primary"
            variant="outlined"
            sx={{ fontSize: "1.2rem", p: 2, mb: 2 }}
          />
          <Typography variant="h3" component="h1" gutterBottom>
            {category.name} News
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Latest {category.name.toLowerCase()} news from Canada
          </Typography>
        </Box>

        {articles.length === 0 ? (
          <Box textAlign="center" py={4}>
            <Typography variant="h6" color="text.secondary">
              No articles found in this category.
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

export default Category;
