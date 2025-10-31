import { test, expect } from '@playwright/test';

test('lists rated transactions and opens detail drawer', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Rated transactions' }).click();
  await expect(page.getByRole('heading', { name: 'Rated transactions' })).toBeVisible();
  await expect(page.getByRole('gridcell', { name: 'TRX-001' })).toBeVisible();
  await page.getByRole('row', { name: /TRX-001/ }).click();
  await expect(page.getByRole('dialog', { name: 'Transaction details' })).toBeVisible();
});
