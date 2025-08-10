import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('should load initial page quickly', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/imposter-party/');
    await expect(page.locator('h1:has-text("Imposter")')).toBeVisible();

    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000); // Should load within 3 seconds
  });

  test('should handle many players without performance issues', async ({
    page,
  }) => {
    await page.goto('/imposter-party/');

    const playerInput = page.locator('input[placeholder*="Spielername"]');
    const addButton = page.locator('button:has-text("Hinzufügen")');

    // Add many players
    const startTime = Date.now();
    for (let i = 1; i <= 20; i++) {
      await playerInput.fill(`Player ${i}`);
      await addButton.click();
    }
    const addTime = Date.now() - startTime;

    // Should be able to add 20 players quickly
    expect(addTime).toBeLessThan(10000); // Within 10 seconds

    // All players should be visible
    await expect(page.locator('text=Player 1')).toBeVisible();
    await expect(page.locator('text=Player 20')).toBeVisible();
  });

  test('should handle large category data efficiently', async ({ page }) => {
    await page.goto('/imposter-party/');

    // Navigate to categories
    await page.locator('a:has-text("Kategorien verwalten")').click();

    const startTime = Date.now();
    await expect(page.locator('text=Kategorien verwalten')).toBeVisible();
    const loadTime = Date.now() - startTime;

    // Categories page should load quickly even with many categories
    expect(loadTime).toBeLessThan(2000);

    // Should show multiple categories without issues
    await expect(page.locator('text=Jugendworte')).toBeVisible();
  });

  test('should maintain responsiveness during game flow', async ({ page }) => {
    await page.goto('/imposter-party/');

    // Add players quickly
    const playerInput = page.locator('input[placeholder*="Spielername"]');
    const addButton = page.locator('button:has-text("Hinzufügen")');

    for (let i = 1; i <= 5; i++) {
      await playerInput.fill(`FastPlayer ${i}`);
      await addButton.click();
    }

    // Start game
    const startTime = Date.now();
    await page.locator('button:has-text("Spiel starten")').click();
    await expect(page.locator('text=Wort für')).toBeVisible();
    const gameStartTime = Date.now() - startTime;

    // Game should start quickly
    expect(gameStartTime).toBeLessThan(2000);
  });

  test('should handle localStorage operations efficiently', async ({
    page,
  }) => {
    await page.goto('/imposter-party/');

    // Add players (this triggers localStorage writes)
    const playerInput = page.locator('input[placeholder*="Spielername"]');
    const addButton = page.locator('button:has-text("Hinzufügen")');

    const startTime = Date.now();
    for (let i = 1; i <= 10; i++) {
      await playerInput.fill(`StoragePlayer ${i}`);
      await addButton.click();
    }

    // Reload to test localStorage read
    await page.reload();
    await expect(page.locator('h1:has-text("Imposter")')).toBeVisible();

    const totalTime = Date.now() - startTime;
    expect(totalTime).toBeLessThan(15000); // Should handle storage operations quickly

    // Data should persist
    await expect(page.locator('text=StoragePlayer 1')).toBeVisible();
    await expect(page.locator('text=StoragePlayer 10')).toBeVisible();
  });

  test('should have reasonable bundle size', async ({ page }) => {
    // Monitor network requests during initial load
    const responses = [];

    page.on('response', (response) => {
      if (response.url().includes('.js') || response.url().includes('.css')) {
        responses.push({
          url: response.url(),
          status: response.status(),
        });
      }
    });

    await page.goto('/imposter-party/');
    await expect(page.locator('h1:has-text("Imposter")')).toBeVisible();

    // Should have successful responses for assets
    const jsFiles = responses.filter((r) => r.url.includes('.js'));
    const cssFiles = responses.filter((r) => r.url.includes('.css'));

    expect(jsFiles.length).toBeGreaterThan(0);
    expect(cssFiles.length).toBeGreaterThan(0);

    // All assets should load successfully
    responses.forEach((response) => {
      expect(response.status).toBe(200);
    });
  });

  test('should be responsive to user interactions', async ({ page }) => {
    await page.goto('/imposter-party/');

    // Test button responsiveness
    const playerInput = page.locator('input[placeholder*="Spielername"]');
    const addButton = page.locator('button:has-text("Hinzufügen")');

    await playerInput.fill('Responsive Test');

    const startTime = Date.now();
    await addButton.click();
    await expect(page.locator('text=Responsive Test')).toBeVisible();
    const responseTime = Date.now() - startTime;

    // UI should respond to clicks quickly
    expect(responseTime).toBeLessThan(500);
  });

  test('should handle rapid user inputs', async ({ page }) => {
    await page.goto('/imposter-party/');

    const playerInput = page.locator('input[placeholder*="Spielername"]');
    const addButton = page.locator('button:has-text("Hinzufügen")');

    // Rapidly add and remove players
    for (let i = 1; i <= 5; i++) {
      await playerInput.fill(`RapidPlayer ${i}`);
      await addButton.click();
    }

    // Remove some players rapidly
    const removeButtons = page.locator('button[title*="entfernen"]');
    const count = await removeButtons.count();

    if (count > 0) {
      await removeButtons.first().click();
      await removeButtons.first().click(); // Remove another if available
    }

    // UI should remain stable
    await expect(page.locator('h1:has-text("Imposter")')).toBeVisible();
  });
});
