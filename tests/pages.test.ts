import { expect, test } from '@playwright/test';

test.describe('pages', () => {
	test('should show landing page', async ({ page }) => {
		await page.goto('/');
		expect(page.locator('h1')).toBeTruthy();
	});
});
