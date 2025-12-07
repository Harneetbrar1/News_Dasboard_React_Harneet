# 📰 News Dashboard - React Project

A modern, responsive news application built with React that fetches and displays the latest news articles from The Guardian API. This is my first React project, showcasing fundamental concepts like component architecture, state management, API integration, and responsive design.

## 🌐 Live Demo

[View Live Site](https://news-dasboard-react-harneet.vercel.app/)

## ✨ Features

- **📱 Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **🔍 Search Functionality** - Search for news articles by keyword
- **📂 Category Browsing** - Browse news by categories (Technology, Sports, Business, etc.)
- **🔖 Bookmarks** - Save your favorite articles (persists across sessions)
- **⚡ Real-time Updates** - Fetches latest news from The Guardian API
- **🎨 Modern UI** - Clean interface built with Material-UI

## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and dev server
- **Material-UI (MUI)** - React component library for styling
- **React Router** - Client-side routing
- **The Guardian API** - News data source
- **localStorage** - Client-side data persistence

## 📂 Project Structure

```
vite-project/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── NewsCard.jsx
│   │   └── SearchBar.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Category.jsx
│   │   └── Bookmarks.jsx
│   ├── utils/           # Utility functions
│   │   └── api.js       # API integration
│   ├── App.jsx          # Main app component
│   └── main.jsx         # App entry point
├── public/              # Static assets
└── index.html           # HTML template
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Harneetbrar1/News_Dasboard_React_Harneet.git
cd News_Dasboard_React_Harneet/vite-project
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
VITE_GUARDIAN_API_KEY=your-api-key-here
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit: `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🎓 What I Learned

This project helped me understand:

- ✅ **React Fundamentals** - Components, Props, State
- ✅ **React Hooks** - useState, useEffect
- ✅ **API Integration** - Fetching data, error handling
- ✅ **Routing** - Single-page application navigation
- ✅ **State Management** - Managing application state
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Component Composition** - Building reusable components

## 🔑 API Reference

This project uses [The Guardian Open Platform API](https://open-platform.theguardian.com/).

To get your own API key:

1. Visit https://open-platform.theguardian.com/access/
2. Register for a free developer key
3. Add it to your `.env` file

## 🤝 Contributing

This is a learning project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 👨‍💻 Author

**Harneet Singh Brar**

- GitHub: [@Harneetbrar1](https://github.com/Harneetbrar1)

## Acknowledgments

- [The Guardian](https://www.theguardian.com/) for providing the news API
- [Material-UI](https://mui.com/) for the component library
- [Vite](https://vitejs.dev/) for the amazing development experience

---

**Note:** This is my first React project created as part of my web development learning journey. 🚀
