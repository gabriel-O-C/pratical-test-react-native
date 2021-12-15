import axios from 'axios';
const api = async () => {
  const bookCategory = await axios.get(
    'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR',
  );
  const mostReaded = await axios.get(
    'https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR',
  );
  return { bookCategory, mostReaded };
};

export default api;
