import { test, expect } from '@playwright/test';

test.describe.skip('API Tests', () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com'; 

  test('get a  list of posts', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/1`);
    expect(response.status()).toBe(200); 

    const data = await response.json();

    //  Assert specific properties of the first post
    if (data.length > 0) {
      expect(data[0]).toHaveProperty('userId');
      expect(data[0]).toHaveProperty('id');
      expect(data[0]).toHaveProperty('title');
      expect(data[0]).toHaveProperty('body');
    }

    // Validate a specific property value
    expect(data.userId).toBe(1);
    expect(data.id).toBe(1);

    // validate the structure datatype
    expect(data).toMatchObject({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    //   status: 'active',
    });

  });
});