import { test, expect } from '@playwright/test';

test.describe('Complete Game Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app and wait for it to load
    await page.goto('/imposter-party/');
    await expect(page.locator('h1:has-text("Imposter")')).toBeVisible();
  });

  test('should complete a full game from setup to end', async ({ page }) => {
    // Step 1: Add players
    const playerInput = page.locator('input[placeholder*="Spielername"]');
    const addButton = page.locator('button:has-text("Hinzufügen")');

    // Add first player
    await playerInput.fill('Alice');
    await addButton.click();
    await expect(page.locator('text=Alice')).toBeVisible();

    // Add second player
    await playerInput.fill('Bob');
    await addButton.click();
    await expect(page.locator('text=Bob')).toBeVisible();

    // Add third player
    await playerInput.fill('Charlie');
    await addButton.click();
    await expect(page.locator('text=Charlie')).toBeVisible();

    // Step 2: Start the game
    const startButton = page.locator('button:has-text("Spiel starten")');
    await expect(startButton).toBeEnabled();
    await startButton.click();

    // Step 3: Word reveal phase
    await expect(page.locator('text=Wort für')).toBeVisible();

    // Go through each player's word reveal
    const players = ['Alice', 'Bob', 'Charlie'];
    for (const player of players) {
      // Check that we're showing word for current player
      await expect(page.locator(`text=Wort für ${player}`)).toBeVisible();

      // Click to show word/hint
      await page.locator('button:has-text("Wort anzeigen")').click();

      // Should show either a word or "Du bist der Imposter"
      const hasWord = await page
        .locator('text=Du bist der Imposter!')
        .isVisible();
      if (!hasWord) {
        // Should show actual word and hint
        await expect(page.locator('.text-4xl')).toBeVisible(); // Word display
      }

      // Continue to next player
      const continueButton = page.locator('button:has-text("Weiter")');
      if (await continueButton.isVisible()) {
        await continueButton.click();
      }
    }

    // Step 4: Game play phase
    await expect(page.locator('text=Diskussionsrunde')).toBeVisible();

    // Skip discussion by clicking end round button
    const endRoundButton = page.locator('button:has-text("Runde beenden")');
    await endRoundButton.click();

    // Step 5: Voting phase
    await expect(page.locator('text=Wer ist der Imposter?')).toBeVisible();

    // Vote for someone (click on a player)
    const playerButtons = page
      .locator('button')
      .filter({ hasText: /Alice|Bob|Charlie/ });
    await playerButtons.first().click();

    // Submit vote
    await page.locator('button:has-text("Abstimmen")').click();

    // Step 6: Results phase
    await expect(page.locator('text=Spiel beendet')).toBeVisible();

    // Should show game results
    await expect(page.locator('text=Imposter war:')).toBeVisible();

    // Return to setup
    await page.locator('button:has-text("Neues Spiel")').click();

    // Should be back at setup screen
    await expect(page.locator('h1:has-text("Imposter")')).toBeVisible();
  });

  test('should handle category management', async ({ page }) => {
    // Navigate to categories
    await page.locator('a:has-text("Kategorien verwalten")').click();
    await expect(page.locator('text=Kategorien verwalten')).toBeVisible();

    // Should show existing categories
    await expect(page.locator('text=Jugendworte')).toBeVisible();

    // Add a new category
    await page.locator('button:has-text("Neue Kategorie")').click();
    await page
      .locator('input[placeholder*="Kategorienname"]')
      .fill('Test Category');

    // Add words to the category
    await page.locator('input[placeholder*="Wort"]').fill('TestWord');
    await page.locator('input[placeholder*="Hinweis"]').fill('TestHint');
    await page.locator('button:has-text("Wort hinzufügen")').click();

    // Save category
    await page.locator('button:has-text("Kategorie speichern")').click();

    // Return to setup
    await page.locator('button:has-text("Zurück")').click();
    await expect(page.locator('h1:has-text("Imposter")')).toBeVisible();
  });

  test('should persist player data', async ({ page }) => {
    // Add a player
    await page
      .locator('input[placeholder*="Spielername"]')
      .fill('Persistent Player');
    await page.locator('button:has-text("Hinzufügen")').click();
    await expect(page.locator('text=Persistent Player')).toBeVisible();

    // Reload the page
    await page.reload();
    await expect(page.locator('h1:has-text("Imposter")')).toBeVisible();

    // Player should still be there
    await expect(page.locator('text=Persistent Player')).toBeVisible();
  });

  test('should handle responsive design', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Should still be usable on mobile
    await expect(page.locator('h1:has-text("Imposter")')).toBeVisible();

    // Add a player on mobile
    await page
      .locator('input[placeholder*="Spielername"]')
      .fill('Mobile Player');
    await page.locator('button:has-text("Hinzufügen")').click();
    await expect(page.locator('text=Mobile Player')).toBeVisible();

    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('text=Mobile Player')).toBeVisible();
  });

  test('should handle game settings', async ({ page }) => {
    // Should show settings section
    await expect(page.locator('text=Einstellungen')).toBeVisible();

    // Change number of imposters
    const imposterSelect = page.locator('select[title*="Anzahl Imposter"]');
    await imposterSelect.selectOption('2');

    // Change round time
    const timeSelect = page.locator('select[title*="Rundendauer"]');
    await timeSelect.selectOption('3');

    // Settings should be preserved after reload
    await page.reload();
    await expect(imposterSelect).toHaveValue('2');
    await expect(timeSelect).toHaveValue('3');
  });
});
