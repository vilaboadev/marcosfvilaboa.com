import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import useScrollShrink from '../useScrollShrink';
import { SCROLL_SHRINK_THRESHOLD } from '../../constants';

describe('useScrollShrink', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns false when page has not been scrolled', () => {
    const { result } = renderHook(() => useScrollShrink());
    expect(result.current).toBe(false);
  });

  it('returns true immediately on mount when page is already scrolled past threshold', () => {
    Object.defineProperty(window, 'scrollY', {
      value: SCROLL_SHRINK_THRESHOLD + 1,
      writable: true,
      configurable: true,
    });
    const { result } = renderHook(() => useScrollShrink());
    expect(result.current).toBe(true);
  });

  it(`returns true when scrollY exceeds ${SCROLL_SHRINK_THRESHOLD}px`, () => {
    const { result } = renderHook(() => useScrollShrink());

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: SCROLL_SHRINK_THRESHOLD + 1 });
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);
  });

  it(`returns false when scrollY is exactly ${SCROLL_SHRINK_THRESHOLD}px`, () => {
    const { result } = renderHook(() => useScrollShrink());

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: SCROLL_SHRINK_THRESHOLD });
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);
  });

  it('removes the scroll event listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useScrollShrink());
    unmount();
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
