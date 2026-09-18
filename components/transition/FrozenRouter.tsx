'use client';

import { useContext, useState } from 'react';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const [frozen] = useState(context);

  if (!context) {
    return <>{props.children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>
  );
}
