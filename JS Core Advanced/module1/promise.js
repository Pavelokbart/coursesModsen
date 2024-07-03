function fetchUrls(urls) {
    // Функция для загрузки одного URL
    const fetchUrl = (url) => {
      return fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
          }
          return response.text();
        });
    };
  
    // Массив промисов для всех URL-адресов
    const promises = urls.map(url => fetchUrl(url));
  
    return Promise.all(promises)
      .then(results => {
        return results;
      })
      .catch(error => {
        console.error('Error fetching URLs:', error);
        throw error;
      });
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/users/1'
  ];
fetchUrls(urls)
  .then(contents => {
    console.log(contents); // Массив содержимого каждого URL
  })
  .catch(error => {
    console.error('Error:', error);
});