import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import useTypeWriter from '../useTypeWriter';

describe('useTypeWriter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  /**
   * Advances one typewriter "tick": fires the pending timer, flushes state,
   * which causes the effect to schedule the NEXT timer.
   */
  const tick = () => act(async () => vi.runAllTimers());

  it('starts with an empty string', () => {
    const { result } = renderHook(() => useTypeWriter('Hello'));
    expect(result.current).toBe('');
  });

  it('eventually types out the full text', async () => {
    const text = 'Hi';
    const { result } = renderHook(() => useTypeWriter(text));

    // Each tick advances one charIndex step; text.length+1 ticks to finish
    for (let i = 0; i <= text.length; i++) {
      await tick();
    }

    expect(result.current).toBe(text);
  });

  it('reveals characters progressively', async () => {
    const text = 'AB';
    const { result } = renderHook(() => useTypeWriter(text));

    await tick(); // charIndex 0 -> 1, display still ''
    await tick(); // charIndex 1 -> 2, display 'A'
    expect(result.current).toBe('A');

    await tick(); // charIndex 2 -> 3, display 'AB'
    expect(result.current).toBe('AB');
  });

  it('removes the pending timer on unmount', () => {
    const clearSpy = vi.spyOn(globalThis, 'clearTimeout');
    const { unmount } = renderHook(() => useTypeWriter('Test'));
    unmount();
    expect(clearSpy).toHaveBeenCalled();
  });

  it('resets and restarts when the text prop changes', async () => {
    let text = 'AB';
    const { result, rerender } = renderHook(() => useTypeWriter(text));

    // Finish typing 'AB'
    for (let i = 0; i <= text.length; i++) {
      await tick();
    }
    expect(result.current).toBe('AB');

    // Change text prop – hook should reset displayText to empty string
    text = 'XY';
    rerender();
    expect(result.current).toBe('');
  });
});
