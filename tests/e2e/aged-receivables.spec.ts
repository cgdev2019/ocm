import { test, expect } from '@playwright/test';

test('displays aged receivables with dynamic buckets', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Aged receivables' }).click();
  await expect(page.getByRole('heading', { name: 'Aged receivables' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: '0-30' })).toBeVisible();
  await expect(page.getByRole('gridcell', { name: 'CUST-001' })).toBeVisible();
});
