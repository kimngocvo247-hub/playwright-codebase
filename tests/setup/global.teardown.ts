import { test as teardown } from '@playwright/test';
import fs from 'fs';
import { AUTH_FILE } from '../../src/utils/constants';

teardown('xoa file login', async () => {
  console.log('From global teardown - removing resources');

  if (fs.existsSync(AUTH_FILE)) {
    fs.unlinkSync(AUTH_FILE);
  }
});
