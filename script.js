//your JS code here. If required.
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Log the response in a human-readable format
    console.log('Response:');
    console.log(`User ID: ${data.userId}`);
    console.log(`Title: ${data.title}`);
    console.log(`Completed: ${data.completed}`);
  } catch (error) {
    // Log any errors that occurred during the request
    console.error('Error fetching data:', error.message);
  }
}

// Call the function to initiate the asynchronous HTTP request
fetchData();
