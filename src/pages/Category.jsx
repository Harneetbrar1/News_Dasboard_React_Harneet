import { useParams } from "react-router-dom";
import { Container, Typography, Box, Chip } from "@mui/material";
import { NEWS_CATEGORIES } from "../utils/api";

const Category = () => {
  const { categoryId } = useParams();

  const category = NEWS_CATEGORIES.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <Container>
        <Typography variant="h4">Category not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Box sx={{ mb: 3 }}>
          <Chip
            label={`${category.icon} ${category.name}`}
            color="primary"
            variant="outlined"
            sx={{ fontSize: "1.2rem", p: 2 }}
          />
        </Box>

        <Typography variant="h3" component="h1" gutterBottom>
          {category.name} News
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph>
          Latest {category.name.toLowerCase()} news from Canada
        </Typography>

        <Typography variant="body1" color="text.secondary">
          🚧 Category news feed coming soon...
        </Typography>
      </Box>
    </Container>
  );
};

export default Category;
