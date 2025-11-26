// API Configuration
const API_CONFIG = {
  BASE_URL: 'https://newsapi.org/v2',
  API_KEY: 'de9ad9bb4b1d4f2d8b46c5ccd7068014', // Replace with your NewsAPI key
  DEFAULT_COUNTRY: 'ca',
  DEFAULT_PAGE_SIZE: 20
};

// News Categories - Most Popular
export const NEWS_CATEGORIES = [
  { id: 'general', name: 'Top Stories', icon: '📰' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'technology', name: 'Technology', icon: '💻' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎬' },
  { id: 'health', name: 'Health', icon: '🏥' },
  { id: 'science', name: 'Science', icon: '🔬' },
  { id: 'politics', name: 'Politics', icon: '🏛️' }
];

// API Endpoints
const ENDPOINTS = {
  TOP_HEADLINES: '/top-headlines',
  EVERYTHING: '/everything'
};

// Utility function to build URL with parameters
const buildUrl = (endpoint, params = {}) => {
  const url = new URL(`${API_CONFIG.BASE_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value);
    }
  });
  url.searchParams.append('apiKey', API_CONFIG.API_KEY);
  return url.toString();
};

// Utility function to filter valid articles
const filterValidArticles = (articles) => {
  return articles.filter(article => 
    article.title && 
    article.title !== '[Removed]' && 
    article.description && 
    article.url &&
    article.source?.name
  );
};

// Fetch top headlines by category
export const fetchTopHeadlines = async (category = 'general') => {
  try {
    const url = buildUrl(ENDPOINTS.TOP_HEADLINES, {
      country: API_CONFIG.DEFAULT_COUNTRY,
      category,
      pageSize: API_CONFIG.DEFAULT_PAGE_SIZE
    });

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error(data.message || 'Failed to fetch news');
    }

    return {
      articles: filterValidArticles(data.articles),
      totalResults: data.totalResults
    };
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  }
};

// Search news articles
export const searchNews = async (query, sortBy = 'publishedAt') => {
  try {
    if (!query || query.trim() === '') {
      throw new Error('Search query is required');
    }

    const url = buildUrl(ENDPOINTS.EVERYTHING, {
      q: query.trim(),
      sortBy,
      pageSize: API_CONFIG.DEFAULT_PAGE_SIZE,
      language: 'en'
    });

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error(data.message || 'Failed to search news');
    }

    return {
      articles: filterValidArticles(data.articles),
      totalResults: data.totalResults
    };
  } catch (error) {
    console.error('Error searching news:', error);
    throw error;
  }
};

// Generic fetch function that can be used for both headlines and search
export const fetchNews = async (options = {}) => {
  const { category, searchQuery, sortBy } = options;
  
  if (searchQuery) {
    return await searchNews(searchQuery, sortBy);
  } else {
    return await fetchTopHeadlines(category);
  }
};