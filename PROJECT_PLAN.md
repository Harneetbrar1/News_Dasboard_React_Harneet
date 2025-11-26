# News Dashboard - React Learning Project

**20-Hour Development Timeline**

## 🎯 Learning Objectives

- Master React fundamentals (components, hooks, state)
- Learn API integration with async/await
- Understand React Router for navigation
- Practice Material UI component library
- Build responsive, modern UI

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── NewsCard.jsx
│   └── SearchBar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Category.jsx
│   └── Bookmarks.jsx
├── utils/
│   └── api.js
├── App.jsx
└── main.jsx
```

## ⏰ Development Timeline

### Phase 1: Foundation (Hours 1-4)

**Hour 1-2: Project Setup**

- [ ] Create API utility file with NewsAPI integration
- [ ] Set up basic App.jsx with Material UI theme
- [ ] Install and configure React Router

**Hour 3-4: Navigation Structure**

- [ ] Build Navbar component with category links
- [ ] Implement basic routing structure
- [ ] Test navigation between pages

### Phase 2: Core Features (Hours 5-12)

**Hour 5-6: News Display**

- [ ] Create NewsCard component for article display
- [ ] Build Home page with news fetching
- [ ] Add loading states and basic error handling

**Hour 7-8: Search Functionality**

- [ ] Create SearchBar component
- [ ] Implement search API calls
- [ ] Add search results display

**Hour 9-10: Category Pages**

- [ ] Build Category page component
- [ ] Implement category-based news filtering
- [ ] Connect category links to filtered content

**Hour 11-12: Bookmarks System**

- [ ] Create Bookmarks page
- [ ] Implement add/remove bookmark functionality
- [ ] Add bookmark persistence with localStorage

### Phase 3: Enhancement (Hours 13-18)

**Hour 13-14: User Experience**

- [ ] Improve loading states with skeletons
- [ ] Add better error messages
- [ ] Implement retry functionality

**Hour 15-16: Responsive Design**

- [ ] Make all components mobile-friendly
- [ ] Test across different screen sizes
- [ ] Optimize Material UI breakpoints

**Hour 17-18: Additional Features**

- [ ] Add article date formatting
- [ ] Implement infinite scroll or pagination
- [ ] Add news source filtering

### Phase 4: Polish (Hours 19-20)

**Hour 19-20: Final Touches**

- [ ] Code cleanup and optimization
- [ ] Final testing of all features
- [ ] Deploy preparation

## 🚀 Getting Started

### Step 1: Get Your API Key

1. Visit https://newsapi.org/register
2. Create free account
3. Copy your API key
4. Replace placeholder in api.js

### Step 2: Start Development

```bash
npm run dev
```

### Step 3: Build in This Order

1. **API utility** - Establishes data connection
2. **App.jsx** - Sets up routing and theme
3. **Navbar** - Navigation structure
4. **NewsCard** - Article display component
5. **Home page** - Main news feed
6. **Search feature** - User interaction
7. **Categories** - Content filtering
8. **Bookmarks** - Data persistence

## 📋 Key React Concepts You'll Practice

### Hooks Used

- `useState` - Managing component state
- `useEffect` - Side effects and API calls
- `useParams` - Reading URL parameters
- `useNavigate` - Programmatic navigation

### Component Patterns

- Functional components with props
- Conditional rendering
- List rendering with keys
- Event handling
- Form input management

### State Management

- Local component state
- Passing state between components
- Lifting state up
- Using localStorage for persistence

## 🏆 Success Criteria

By the end, you should have:

- ✅ Working news app with multiple pages
- ✅ Real API integration
- ✅ Responsive design
- ✅ Search and filter functionality
- ✅ Bookmark system
- ✅ Error handling
- ✅ Clean, readable code

## 📝 Tips for Success

1. **Start simple** - Get basic functionality working first
2. **Test frequently** - Run your app after each major change
3. **Use console.log** - Debug API responses and state changes
4. **Read errors carefully** - React error messages are helpful
5. **Don't skip the plan** - Follow the hour-by-hour timeline

Ready to build? Start with creating the API utility file!
