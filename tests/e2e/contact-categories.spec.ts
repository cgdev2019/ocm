import { test, expect } from '@playwright/test';

const CATEGORY_CODE = 'PLAY-E2E';
const CATEGORY_DESCRIPTION = 'Playwright category';
const UPDATED_DESCRIPTION = 'Updated Playwright category';

test('manages contact categories end to end', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Contact categories' }).click();
  await expect(page.getByRole('heading', { name: 'Contact categories' })).toBeVisible();

  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByLabel('Category code')).toBeVisible();

  await page.getByLabel('Category code').fill(CATEGORY_CODE);
  await page.getByLabel('Description').fill(CATEGORY_DESCRIPTION);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForURL(`**/contact-categories/${CATEGORY_CODE}`);

  await expect(page.getByRole('heading', { name: CATEGORY_CODE })).toBeVisible();
  await expect(page.getByText(CATEGORY_DESCRIPTION)).toBeVisible();

  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForURL(`**/contact-categories/${CATEGORY_CODE}/edit`);
  const descriptionField = page.getByLabel('Description');
  await descriptionField.fill(UPDATED_DESCRIPTION);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForURL(`**/contact-categories/${CATEGORY_CODE}`);

  await expect(page.getByText(UPDATED_DESCRIPTION)).toBeVisible();

  await page.getByRole('button', { name: 'Delete' }).click();
  const dialog = page.getByRole('dialog', { name: 'Delete' });
  await expect(dialog).toBeVisible();
  await dialog.getByRole('button', { name: 'Delete' }).click();
  await page.waitForURL('**/contact-categories');

  await expect(page.getByRole('heading', { name: 'Contact categories' })).toBeVisible();
  await expect(page.getByRole('gridcell', { name: CATEGORY_CODE })).toHaveCount(0);
});
