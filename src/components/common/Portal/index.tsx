import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

import { Props } from './Portal.types';

const PortalWrapper = ({ children }: PropsWithChildren) => {
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    setContainer(document.body);
  }, []);

  if (!container) return null;

  return createPortal(<>{children}</>, container);
};

export const Portal = ({ isOpen, children }: PropsWithChildren<Props>) => {
  return (
    <PortalWrapper>
      <AnimatePresence mode="wait">{isOpen && children}</AnimatePresence>
    </PortalWrapper>
  );
};
