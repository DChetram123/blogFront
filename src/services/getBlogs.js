async function getBlogs() {
    const url = 'http://localhost:8000/api/';
    

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const posts = await response.json();
      console.log('yeo')

      return posts;  // You can return the response data if needed
    } catch (error) {
      console.error('Error getting posts:', error);
      throw error;  // Re-throw the error to handle it at a higher level if needed
    }
  }
  
  export { getBlogs };