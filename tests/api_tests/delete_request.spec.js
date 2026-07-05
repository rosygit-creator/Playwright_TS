import { test, expect } from '@playwright/test';

test.describe.skip('API Tests', () => {
  const BASE_URL = 'https://api.example.com'; 
  

  test('should send a PUT request', async ({ request }) => {

    const customHeaders = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_access_token_here',
      'X-Custom-Header': 'my-value'
      };
      
      const response = await request.delete(`${BASE_URL}/users/2`, {customHeaders});

        // Assert that the request was successful (status code 2xx) or 200 or 201 as per implementation
        expect(response.status()).toBe(204); 

        // assert on status text if needed
         expect(response.statusText()).toBe('No Content');

        // subsequent GET request should return a 404
          const getResponse = await request.get(`${BASE_URL}/users/2`, { headers });
          expect(getResponse.status()).toBe(404);
});
});