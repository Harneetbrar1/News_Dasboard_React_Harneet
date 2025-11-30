import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Chip,
  Grid,
  Alert,
  Skeleton,
  Card,
  CardContent,
  Button,
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
      <Container maxWidth="xl">
        <Box py={4}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Skeleton
              animation="wave"
              variant="rounded"
              width={200}
              height={50}
              sx={{ mx: "auto", mb: 2 }}
            />
            <Skeleton
              animation="wave"
              variant="text"
              width={300}
              height={60}
              sx={{ mx: "auto" }}
            />
            <Skeleton
              animation="wave"
              variant="text"
              width={400}
              height={30}
              sx={{ mx: "auto" }}
            />
          </Box>
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
                onClick={() => loadCategoryNews()}
              >
                RETRY
              </Button>
            }
          >
            <strong>Failed to load {category.name} news</strong>
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
