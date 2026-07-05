import { test, expect } from '@playwright/test';

test.describe.skip('API Tests', () => {
  const BASE_URL = 'https://api.example.com'; 
  

  test('should send a PUT request', async ({ request }) => {
    // define payload or body
    const payload= {
      userId: 5,
      id: 5,
      title: 'title 2',
      body:'body123'
      };

    const customHeaders = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_access_token_here',
      'X-Custom-Header': 'my-value'
      };
      
      const response = await request.put(`${BASE_URL}/users`, {
        data: payload,
        headers: customHeaders
      });

        // Assert that the request was successful (status code 2xx)
        expect(response.status()).toBe(200); 

        // Parse the JSON response body
        const responseBody = await response.json();

    // Validate a specific property value when updated
    expect(responseBody.title).toBe('title 2');
    expect(responseBody.id).toBe(5);
  });
});