import { test, expect } from '@playwright/test';

const COUNTER_CODE = 'E2E-COUNTER-01';
const UPDATED_PRODUCT = 'UPDATED-PRODUCT';

test('manages counter instances end to end', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Counter instances' }).click();
  await expect(page.getByRole('heading', { name: 'Counter instances' })).toBeVisible();

  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByLabel('Counter instance code')).toBeVisible();

  await page.getByLabel('Counter instance code').fill(COUNTER_CODE);
  await page.getByLabel('Counter template code').fill('TEMPLATE-001');
  await page.getByLabel('Charge instance code').fill('CHARGE-001');
  await page.getByLabel('Product code').fill('PRODUCT-001');
  await page.getByLabel('User account code').fill('UA-001');
  await page.getByLabel('Customer account code').fill('CA-001');
  await page.getByLabel('Billing account code').fill('BA-001');
  await page.getByLabel('Subscription code').fill('SUB-001');

  await page.getByLabel('Code', { exact: false }).first().fill('PERIOD-001');
  await page.getByLabel('Counter type').first().selectOption('USAGE');
  await page.getByLabel('Level').first().fill('1');
  await page.getByLabel('Period start date').first().fill('2024-01-01T00:00:00Z');
  await page.getByLabel('Period end date').first().fill('2024-01-31T23:59:59Z');
  await page.getByLabel('Value').first().fill('120');
  await page.getByText('Accumulator').first().click();
  await page.getByLabel('Accumulator type').first().selectOption('MULTI_VALUE');
  await page
    .getByLabel('Accumulated values (JSON)')
    .first()
    .fill('{"usage":120}');

  await page.getByRole('button', { name: 'Create counter instance' }).click();
  await page.waitForURL(`**/counter-instances/${COUNTER_CODE}`);

  await expect(page.getByRole('heading', { name: COUNTER_CODE })).toBeVisible();
  await expect(page.getByText('PRODUCT-001')).toBeVisible();

  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForURL(`**/counter-instances/${COUNTER_CODE}/edit`);

  const productField = page.getByLabel('Product code');
  await productField.fill(UPDATED_PRODUCT);
  await page.getByRole('button', { name: 'Update counter instance' }).click();
  await page.waitForURL(`**/counter-instances/${COUNTER_CODE}`);

  await expect(page.getByText(UPDATED_PRODUCT)).toBeVisible();
});
