import { test as teardown, expect } from '@playwright/test';
import fs from 'fs/promises';

const filepath='tests/.auth/user.json'

teardown('delete user cookies from global setup', async ({ }) => {
  console.log('user cookies from global setup...');

  try {
    await fs.unlink(filepath);
    console.log(`Deleted file at: ${filepath}`);

    // 3. (Optional) Assertion to verify deletion
    // Check if the file still exists (this should throw an error if it doesn't)
    await expect(fs.access(filepath)).rejects.toThrow();
  } catch (error) {
    console.error('Error during file operation:', error);
    // Depending on your test case, you might want to fail the test if deletion fails unexpectedly
    throw error; 
  }
  
});