import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Badge,
} from "@mui/material";
import { Newspaper, Bookmark, Menu as MenuIcon } from "@mui/icons-material";
import { NEWS_CATEGORIES } from "../utils/api";

const Navbar = ({ bookmarksCount = 0 }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ top: 0 }}>
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
        <Newspaper
          sx={{ mr: { xs: 1, sm: 2 }, fontSize: { xs: 20, sm: 24 } }}
        />
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: isMobile ? 1 : 0,
            textDecoration: "none",
            color: "inherit",
            mr: { xs: 0, md: 4 },
            fontSize: { xs: "1rem", sm: "1.25rem" },
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          📰 News Dashboard
        </Typography>

        {!isMobile ? (
          <Box sx={{ flexGrow: 1, display: "flex", gap: 1 }}>
            {NEWS_CATEGORIES.map((category) => (
              <Button
                key={category.id}
                component={Link}
                to={`/category/${category.id}`}
                color="inherit"
                size="small"
              >
                {category.icon} {category.name}
              </Button>
            ))}
          </Box>
        ) : (
          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {NEWS_CATEGORIES.map((category) => (
                <MenuItem
                  key={category.id}
                  component={Link}
                  to={`/category/${category.id}`}
                  onClick={handleMenuClose}
                >
                  {category.icon} {category.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}

        <Button
          component={Link}
          to="/bookmarks"
          color="inherit"
          startIcon={
            <Badge badgeContent={bookmarksCount} color="secondary">
              <Bookmark sx={{ fontSize: { xs: 20, sm: 24 } }} />
            </Badge>
          }
          sx={{
            minWidth: { xs: "auto", sm: 64 },
            px: { xs: 1, sm: 2 },
            fontSize: { xs: "0.875rem", sm: "0.875rem" },
          }}
        >
          {!isMobile ? "Bookmarks" : ""}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
