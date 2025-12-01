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
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: { xs: "none", sm: "translateY(-4px)" },
          boxShadow: { xs: 2, sm: 4 },
        },
      }}
    >
      {article.urlToImage && (
        <CardMedia
          component="img"
          height="200"
          image={article.urlToImage}
          alt={article.title}
          sx={{
            objectFit: "cover",
            height: { xs: 180, sm: 200 },
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      )}

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: { xs: 2, sm: 2.5 },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
        >
          {article.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          paragraph
          sx={{
            flexGrow: 1,
            fontSize: { xs: "0.875rem", sm: "0.875rem" },
            display: "-webkit-box",
            WebkitLineClamp: { xs: 3, sm: 4 },
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {article.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Chip
            label={article.source.name}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}
          />
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}
          >
            {formatDate(article.publishedAt)}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            size="small"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNew sx={{ fontSize: { xs: 16, sm: 18 } }} />}
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              px: { xs: 1.5, sm: 2 },
              minWidth: { xs: "auto", sm: 64 },
            }}
          >
            Read More
          </Button>

          <IconButton
            onClick={() => onBookmark(article)}
            color={isBookmarked ? "secondary" : "default"}
            sx={{
              p: { xs: 1, sm: 1.5 },
              "&:hover": { bgcolor: "action.hover" },
            }}
          >
            {isBookmarked ? (
              <Bookmark sx={{ fontSize: { xs: 20, sm: 24 } }} />
            ) : (
              <BookmarkBorder sx={{ fontSize: { xs: 20, sm: 24 } }} />
            )}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
