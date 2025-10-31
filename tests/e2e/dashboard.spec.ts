import { test, expect } from '@playwright/test';

test('dashboard loads KPIs', async ({ page }) => {
  await page.goto('/fr');
  await expect(page.getByRole('heading', { name: 'Tableau de bord' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Clients' })).toBeVisible();
});
