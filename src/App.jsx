import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

// Import components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Bookmarks from "./pages/Bookmarks";

// Material UI Theme Configuration
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#dc004e",
      light: "#ff5983",
      dark: "#9a0036",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
        "#root": {
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderRadius: "12px",
        },
      },
    },
  },
});

function App() {
  // Global state for bookmarks
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("newsBookmarks");
    return saved ? JSON.parse(saved) : [];
  });

  // Bookmark management functions
  const addBookmark = (article) => {
    const newBookmark = {
      ...article,
      id: Date.now(),
      savedAt: new Date().toISOString(),
    };

    const updatedBookmarks = [...bookmarks, newBookmark];
    setBookmarks(updatedBookmarks);
    localStorage.setItem("newsBookmarks", JSON.stringify(updatedBookmarks));
  };

  const removeBookmark = (bookmarkId) => {
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== bookmarkId
    );
    setBookmarks(updatedBookmarks);
    localStorage.setItem("newsBookmarks", JSON.stringify(updatedBookmarks));
  };

  const isBookmarked = (articleUrl) => {
    return bookmarks.some((bookmark) => bookmark.url === articleUrl);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Navbar bookmarksCount={bookmarks.length} />
          <Container
            maxWidth="xl"
            sx={{
              py: 2,
              px: { xs: 1, sm: 2, md: 3 },
              mt: { xs: 0, sm: 1, md: 2 },
            }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <Home addBookmark={addBookmark} isBookmarked={isBookmarked} />
                }
              />
              <Route
                path="/category/:categoryId"
                element={
                  <Category
                    addBookmark={addBookmark}
                    isBookmarked={isBookmarked}
                  />
                }
              />
              <Route
                path="/bookmarks"
                element={
                  <Bookmarks
                    bookmarks={bookmarks}
                    removeBookmark={removeBookmark}
                  />
                }
              />
            </Routes>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
