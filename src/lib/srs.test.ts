import { describe, expect, it } from 'vitest';
import { getStatus, isDue, scheduleCard } from './srs';

describe('srs', () => {
  it('treats a missing state as new', () => {
    expect(getStatus(undefined)).toBe('new');
  });

  it('schedules a first review into the future for "good"', () => {
    const s = scheduleCard(null, 'good', 'k1');
    expect(s.cardKey).toBe('k1');
    expect(s.due).toBeGreaterThan(Date.now() - 1000);
  });

  it('keeps an "again" card due sooner than an "easy" one', () => {
    const again = scheduleCard(null, 'again', 'k');
    const easy = scheduleCard(null, 'easy', 'k');
    expect(again.due).toBeLessThan(easy.due);
  });

  it('reports a card with a past due date as due', () => {
    const s = { ...scheduleCard(null, 'good', 'k'), due: Date.now() - 1000 };
    expect(isDue(s)).toBe(true);
  });
});
