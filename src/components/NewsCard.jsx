import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import { BookmarkBorder, Bookmark, OpenInNew } from "@mui/icons-material";

const NewsCard = ({ article, onBookmark, isBookmarked = false }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {article.urlToImage && (
        <CardMedia
          component="img"
          height="200"
          image={article.urlToImage}
          alt={article.title}
        />
      )}

      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h6" gutterBottom>
          {article.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          paragraph
          sx={{ flexGrow: 1 }}
        >
          {article.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Chip
            label={article.source.name}
            size="small"
            color="primary"
            variant="outlined"
          />
          <Typography variant="caption" color="text.secondary">
            {formatDate(article.publishedAt)}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            size="small"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNew />}
          >
            Read More
          </Button>

          <IconButton
            onClick={() => onBookmark(article)}
            color={isBookmarked ? "secondary" : "default"}
          >
            {isBookmarked ? <Bookmark /> : <BookmarkBorder />}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
