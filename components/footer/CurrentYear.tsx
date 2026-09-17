'use client';

import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};
const getSnapshot = () => new Date().getFullYear();
const getServerSnapshot = () => 2026;

export default function CurrentYear() {
  const year = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
  return <>{year}</>;
}
