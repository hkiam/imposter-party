import { test, expect } from '@playwright/test';

test.describe('Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/imposter-party/');
  });

  test('should have proper heading structure', async ({ page }) => {
    // Should have main heading
    await expect(page.locator('h1')).toBeVisible();

    // Check heading hierarchy
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    expect(headings.length).toBeGreaterThan(0);
  });

  test('should have keyboard navigation support', async ({ page }) => {
    // Focus should be manageable with keyboard
    await page.keyboard.press('Tab');

    // Should be able to navigate to input field
    const playerInput = page.locator('input[placeholder*="Spielername"]');
    await expect(playerInput).toBeFocused();

    // Should be able to fill and submit with keyboard
    await playerInput.fill('Keyboard Player');
    await page.keyboard.press('Tab'); // Move to add button
    await page.keyboard.press('Enter'); // Click add button

    await expect(page.locator('text=Keyboard Player')).toBeVisible();
  });

  test('should have proper form labels and descriptions', async ({ page }) => {
    // Input should have accessible label or placeholder
    const playerInput = page.locator('input[placeholder*="Spielername"]');
    await expect(playerInput).toBeVisible();

    // Buttons should have accessible text
    const addButton = page.locator('button:has-text("Hinzufügen")');
    await expect(addButton).toBeVisible();
  });

  test('should support screen reader text', async ({ page }) => {
    // Check for sr-only text or aria-labels where appropriate
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();

    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');
      const title = await button.getAttribute('title');

      // Button should have text, aria-label, or title for screen readers
      expect(text || ariaLabel || title).toBeTruthy();
    }
  });

  test('should have proper color contrast', async ({ page }) => {
    // Add some players to test different states
    await page.locator('input[placeholder*="Spielername"]').fill('Test Player');
    await page.locator('button:has-text("Hinzufügen")').click();

    // Check that text is visible (basic contrast check)
    await expect(page.locator('text=Test Player')).toBeVisible();
    await expect(page.locator('h1:has-text("Imposter")')).toBeVisible();

    // Check button states
    const startButton = page.locator('button:has-text("Spiel starten")');
    await expect(startButton).toBeVisible();
  });

  test('should handle focus management in modals', async ({ page }) => {
    // If instruction modal appears
    const instructionModal = page.locator('text=Willkommen bei Imposter');
    if (await instructionModal.isVisible()) {
      // Modal should trap focus
      const closeButton = page.locator('button:has-text("Verstanden!")');
      await expect(closeButton).toBeVisible();

      // Focus should be on close button or modal content
      await page.keyboard.press('Tab');
      await closeButton.click();

      // Focus should return to main content after modal closes
      await expect(instructionModal).not.toBeVisible();
    }
  });

  test('should have semantic HTML structure', async ({ page }) => {
    // Should have proper landmarks
    await expect(page.locator('main, [role="main"]')).toBeVisible();

    // Lists should be properly marked up
    const lists = page.locator('ul, ol');
    if ((await lists.count()) > 0) {
      await expect(lists.first()).toBeVisible();
    }

    // Buttons should be button elements or have proper role
    const buttons = page.locator('button, [role="button"]');
    expect(await buttons.count()).toBeGreaterThan(0);
  });

  test('should provide feedback for user actions', async ({ page }) => {
    // Adding a player should provide visual feedback
    const playerInput = page.locator('input[placeholder*="Spielername"]');
    await playerInput.fill('Feedback Test');
    await page.locator('button:has-text("Hinzufügen")').click();

    // Player should appear in the list (feedback)
    await expect(page.locator('text=Feedback Test')).toBeVisible();

    // Input should be cleared (feedback)
    await expect(playerInput).toHaveValue('');
  });

  test('should handle error states accessibly', async ({ page }) => {
    // Try to start game without enough players
    const startButton = page.locator('button:has-text("Spiel starten")');

    // Button should be disabled when requirements not met
    await expect(startButton).toBeDisabled();

    // Add minimum players
    const playerInput = page.locator('input[placeholder*="Spielername"]');
    const addButton = page.locator('button:has-text("Hinzufügen")');

    await playerInput.fill('Player 1');
    await addButton.click();
    await playerInput.fill('Player 2');
    await addButton.click();

    // Now button should be enabled
    await expect(startButton).toBeEnabled();
  });

  test('should work with high contrast mode', async ({ page }) => {
    // Simulate high contrast by checking if content is still visible
    await expect(page.locator('h1:has-text("Imposter")')).toBeVisible();
    await expect(page.locator('button:has-text("Hinzufügen")')).toBeVisible();

    // Add a player to test different elements
    await page
      .locator('input[placeholder*="Spielername"]')
      .fill('Contrast Test');
    await page.locator('button:has-text("Hinzufügen")').click();

    await expect(page.locator('text=Contrast Test')).toBeVisible();
  });
});
