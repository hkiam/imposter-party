# Testing Documentation - Imposter Party

Dieses Dokument beschreibt die umfassende Teststrategie und -implementierung für die Imposter Party Anwendung.

## 🧪 Test-Übersicht

Die Anwendung verfügt über eine mehrstufige Teststrategie:

- **Unit Tests**: Testen einzelne Funktionen und Komponenten
- **Integration Tests**: Testen das Zusammenspiel zwischen Komponenten
- **End-to-End Tests**: Testen komplette Benutzer-Workflows
- **Accessibility Tests**: Prüfen Barrierefreiheit
- **Performance Tests**: Überwachen Ladezeiten und Responsiveness

## 🚀 Schnellstart

```bash
# Alle Tests ausführen
npm run test:all

# Unit Tests (mit Watch-Modus)
npm test

# Unit Tests einmal ausführen
npm run test:run

# Tests mit Code-Coverage
npm run test:coverage

# E2E Tests
npm run test:e2e

# Test UI für interaktive Tests
npm run test:ui
```

## 📊 Code Coverage

**Aktuelle Coverage-Ziele:**

- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

Coverage Reports werden generiert in:

- `coverage/` - Detaillierte HTML-Reports
- `coverage/lcov.info` - LCOV Format für CI/CD

## 📋 Test-Kategorien

### Unit Tests (`src/**/__tests__/*.test.ts(x)`)

**Getestete Bereiche:**

- ✅ **defaultSettings**: Konfiguration und Typen
- ✅ **useGameStore**: Zustand-Management (Zustand)
- ✅ **Button Component**: UI-Komponente mit Props
- ✅ **Card Components**: Layout-Komponenten
- ✅ **CountdownBar**: Timer-Anzeige mit Farblogik
- ✅ **VotingPanel**: Abstimmungs-Interaktion
- ✅ **PlayerStats**: Statistik-Berechnung und Sortierung

**Beispiel Unit Test:**

```typescript
test('should calculate correct percentage for countdown', () => {
  render(<CountdownBar current={60} total={120} />);
  const progressElement = screen.getByRole('progressbar', { hidden: true });
  expect(progressElement).toHaveStyle('width: 50%');
});
```

### Integration Tests (`src/screens/__tests__/*.test.tsx`)

**Getestete Bereiche:**

- ✅ **GameSetupScreen**: Spieler-Management und Game-Start
- ✅ **Router Integration**: Navigation zwischen Screens
- ✅ **Store Integration**: State-Änderungen über Komponenten hinweg

**Test-Features:**

- Mock-Stores für isolierte Tests
- Router-Navigation Testing
- Benutzer-Interaktionen mit `@testing-library/user-event`

### End-to-End Tests (`tests/e2e/*.spec.ts`)

**Test-Szenarien:**

#### 🎮 **Complete Game Flow** (`game-flow.spec.ts`)

- Spieler hinzufügen/entfernen
- Spiel starten und durchspielen
- Wort-Reveal Phase
- Diskussion und Abstimmung
- Ergebnis-Anzeige
- Kategorie-Management
- Daten-Persistierung
- Responsive Design
- Spiel-Einstellungen

#### ♿ **Accessibility Tests** (`accessibility.spec.ts`)

- Keyboard-Navigation
- Screen-Reader Unterstützung
- Semantische HTML-Struktur
- Focus-Management in Modals
- Farb-Kontrast
- Form-Labels und ARIA-Attribute
- Error-State Handling

#### ⚡ **Performance Tests** (`performance.spec.ts`)

- Initiale Ladezeit (< 3 Sekunden)
- Viele Spieler handhaben (20+ ohne Performance-Einbußen)
- Große Kategorie-Daten
- LocalStorage-Operationen
- Bundle-Größe Monitoring
- UI-Responsiveness (< 500ms)

## 🔧 Test-Konfiguration

### Vitest Setup (`vitest.config.ts`)

```typescript
export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'c8',
      thresholds: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70,
        },
      },
    },
  },
});
```

### Playwright Setup (`playwright.config.ts`)

- Multi-Browser Testing (Chrome, Firefox, Safari)
- Mobile Device Testing
- Parallelisierung für schnelle Ausführung
- Screenshot bei Fehlern
- HTML/JSON/JUnit Reports

### Test Utilities (`src/test/testUtils.tsx`)

- Router-Mocks für isolierte Tests
- Store-Mocks mit Initial-State
- Gemeinsame Test-Daten
- Wiederverwendbare Render-Funktionen

## 🛠 Mocking Strategy

### Service Worker & PWA

```typescript
vi.mock('virtual:pwa-register', () => ({
  registerSW: vi.fn(),
}));
```

### Framer Motion (Performance)

```typescript
vi.mock('framer-motion', () => ({
  motion: { div: 'div', button: 'button' },
  AnimatePresence: ({ children }) => children,
}));
```

### Browser APIs

- `localStorage`/`sessionStorage`
- `navigator.wakeLock`
- `Audio` Constructor
- React Router Navigation

## 📈 CI/CD Integration

### GitHub Actions (`.github/workflows/tests.yml`)

**Jobs:**

1. **unit-tests**: TypeScript + Unit Tests + Coverage
2. **e2e-tests**: Playwright Cross-Browser Testing
3. **build-test**: Production Build Verification

**Features:**

- Automatische Test-Ausführung bei PRs
- Coverage-Upload zu Codecov
- Artefakt-Upload für Test-Reports
- Multi-Node.js Version Testing

## 🎯 Test-Beispiele

### Component Test mit User Interaction

```typescript
test('should allow selecting multiple players', async () => {
  const user = userEvent.setup();
  render(<VotingPanel players={mockPlayers} onFinishVoting={mockFn} />);

  await user.click(screen.getByText('😀 Player 1'));
  await user.click(screen.getByText('😎 Player 2'));

  expect(screen.getAllByText('✅')).toHaveLength(2);
});
```

### Store Integration Test

```typescript
test('should persist player data across sessions', () => {
  const { result } = renderHook(() => useGamePersistStore());

  act(() => {
    result.current.addPlayer(mockPlayer);
  });

  expect(result.current.players).toContainEqual(mockPlayer);
});
```

### E2E Workflow Test

```typescript
test('should complete full game flow', async ({ page }) => {
  await page.goto('/imposter-party/');

  // Add players
  await page.fill('input[placeholder*="Spielername"]', 'Alice');
  await page.click('button:has-text("Hinzufügen")');

  // Start game
  await page.click('button:has-text("Spiel starten")');

  // Verify game started
  await expect(page.locator('text=Wort für')).toBeVisible();
});
```

## 🔍 Coverage Analysis

**Aktuelle Coverage (Beispiel-Ziele):**

```
File                    | % Stmts | % Branch | % Funcs | % Lines
------------------------|---------|----------|---------|--------
All files              |   85.2   |   78.1   |   84.3  |   86.7
config/                |   95.4   |   88.9   |   100   |   95.4
  defaultSettings.ts   |   95.4   |   88.9   |   100   |   95.4
components/ui/         |   88.7   |   82.4   |   90.1  |   89.3
state/                 |   82.1   |   75.3   |   85.2  |   83.8
screens/               |   78.9   |   71.2   |   79.4  |   80.1
```

## 🚨 Debugging Tests

### Unit Tests debuggen

```bash
# Debug-Modus mit Chrome DevTools
npm run test:ui

# Einzelnen Test ausführen
npm test -- --t "should calculate percentage"

# Watch-Modus für TDD
npm test -- --watch
```

### E2E Tests debuggen

```bash
# UI-Modus (visuelles Debugging)
npm run test:e2e:ui

# Headed-Modus (Browser sichtbar)
npx playwright test --headed

# Debug einzelnen Test
npx playwright test --debug tests/e2e/game-flow.spec.ts
```

## 📚 Best Practices

### 1. Test-Isolation

- Jeder Test läuft isoliert
- Mock-Reset zwischen Tests
- Keine Test-Dependencies untereinander

### 2. Naming Convention

```typescript
describe('ComponentName', () => {
  test('should perform expected behavior when condition', () => {
    // Test implementation
  });
});
```

### 3. Arrange-Act-Assert Pattern

```typescript
test('should add player when valid input provided', () => {
  // Arrange
  const mockStore = createMockStore();

  // Act
  mockStore.addPlayer(validPlayer);

  // Assert
  expect(mockStore.players).toContain(validPlayer);
});
```

### 4. Accessibility Testing

- Verwende semantische Queries (`getByRole`, `getByLabelText`)
- Teste Keyboard-Navigation
- Prüfe ARIA-Attribute
- Screen-Reader Kompatibilität

## 🔄 Wartung & Updates

### Coverage Monitoring

- Wöchentliche Coverage-Reports
- Trend-Analyse für Test-Qualität
- Refactoring bei Coverage-Drop

### Test-Aktualisierung

- Bei Feature-Änderungen: Tests zuerst aktualisieren
- Bei Bug-Fixes: Regression-Tests hinzufügen
- Regelmäßige Test-Dependency Updates

### Performance Benchmarking

- Baseline-Metriken definieren
- Regelmäßige Performance-Tests
- Alert bei Performance-Degradation

---

**Autor**: Claude Code Assistant  
**Letzte Aktualisierung**: August 2025  
**Version**: 1.0.0
