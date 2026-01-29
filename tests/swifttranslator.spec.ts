import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

type TC = {
  id: string;
  name: string;
  type: 'positive' | 'negative' | 'ui';
  input: string;
  expected: string;
};

const dataPath = path.join(__dirname, '..', 'test-data', 'testcases.json');
const testcases: TC[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

test.describe('SwiftTranslator Singlish → Sinhala', () => {
  for (const tc of testcases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      await page.goto('https://www.swifttranslator.com/');

      const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
      await expect(inputBox).toBeVisible();

      await inputBox.fill(tc.input);

      // Positive & UI: expected Sinhala text should appear 
      if (tc.type === 'positive' || tc.type === 'ui') {
        await expect(page.getByText(tc.expected)).toBeVisible();
        return;
      }

      // Negative: ideal Sinhala text should NOT appear 
      await expect(page.getByText(tc.expected)).not.toBeVisible();
    });
  }
});
