function fetchDataWithTimeout(url, timeout) {
   
    return new Promise((resolve, reject) => {
      
        const controller = new AbortController();
        const signal = controller.signal;

        
        const timeoutId = setTimeout(() => {
            controller.abort();
            reject(new Error(`Request timed out after ${timeout}ms`));
        }, timeout);

       
        fetch(url, { signal })
            .then(response => {
                clearTimeout(timeoutId); 
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
                }
                return response.json(); 
            })
            .then(data => resolve(data))
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.error(`Fetch aborted after ${timeout}ms`);
                } else {
                    console.error('Error:', error);
                }
                reject(error);
            });
    });
}


const url = 'https://jsonplaceholder.typicode.com/posts/1';
const timeout = 5000; 

fetchDataWithTimeout(url, timeout)
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error('Error:', error); 
    });
