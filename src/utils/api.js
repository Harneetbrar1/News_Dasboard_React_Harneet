// API Configuration for The Guardian
const API_CONFIG = {
  BASE_URL: 'https://content.guardianapis.com',
  API_KEY: 'd6f2cf02-f30e-4d41-9260-7958dae609a4',
  DEFAULT_PAGE_SIZE: 20
};

// News Categories
export const NEWS_CATEGORIES = [
  { id: 'world', name: 'Top Stories', icon: '📰' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'technology', name: 'Technology', icon: '💻' },
  { id: 'sport', name: 'Sports', icon: '⚽' },
  { id: 'culture', name: 'Entertainment', icon: '🎬' },
  { id: 'lifeandstyle', name: 'Health', icon: '🏥' },
  { id: 'science', name: 'Science', icon: '🔬' },
  { id: 'politics', name: 'Politics', icon: '🏛️' }
];

// Build URL with parameters
const buildUrl = (params = {}) => {
  const url = new URL(`${API_CONFIG.BASE_URL}/search`);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value);
    }
  });
  
  url.searchParams.append('api-key', API_CONFIG.API_KEY);
  url.searchParams.append('show-fields', 'thumbnail,bodyText');
  url.searchParams.append('page-size', API_CONFIG.DEFAULT_PAGE_SIZE);
  
  return url.toString();
};

// Transform Guardian article to our format
const transformArticle = (article) => {
  //  console.log("Raw Guardian article:", article);
  return {
    title: article.webTitle,
    description: article.fields?.bodyText?.substring(0, 200) + '...' || 'No description available',
    url: article.webUrl,
    urlToImage: article.fields?.thumbnail || null,
    publishedAt: article.webPublicationDate,
    source: {
      name: 'The Guardian'
    }
  };
};

// Fetch news by category or search
export const fetchNews = async ({ category, searchQuery }) => {
  try {
    const params = {};
    
    if (searchQuery && searchQuery.trim()) {
      params.q = searchQuery.trim();
    } else if (category) {
      params.section = category;
    }
    
    const url = buildUrl(params);
    console.log('Fetching from Guardian:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.response.status !== 'ok') {
      throw new Error('Failed to fetch news');
    }

    return {
      articles: data.response.results.map(transformArticle),
      totalResults: data.response.total
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

// For backward compatibility
export const fetchTopHeadlines = async (category = 'world') => {
  return fetchNews({ category });
};

export const searchNews = async (query) => {
  return fetchNews({ searchQuery: query });
};
