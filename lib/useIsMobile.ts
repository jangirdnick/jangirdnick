/**
 * Shared useSyncExternalStore-based mobile breakpoint hook.
 * Returns true when viewport width is <= 767px (Tailwind md breakpoint).
 *
 * Using useSyncExternalStore is the correct React 18+ pattern for
 * subscribing to browser APIs — it avoids the hydration mismatch
 * that useState + useEffect produces, and avoids re-subscribing on every render.
 *
 * Previously this code was duplicated identically in both:
 *   - modules/about/components/Skill & Experience/ExperienceCard.tsx
 *   - modules/about/components/Skill & Experience/SkillExperience.tsx
 */

export const subscribeMobile = (callback: () => void): (() => void) => {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(max-width: 767px)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
};

export const getMobileSnapshot = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(max-width: 767px)').matches;
};
export const getMobileServerSnapshot = (): boolean => false;

export const subscribeDesktop = (callback: () => void): (() => void) => {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(min-width: 1024px)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
};

export const getDesktopSnapshot = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(min-width: 1024px)').matches;
};
export const getDesktopServerSnapshot = (): boolean => false;
