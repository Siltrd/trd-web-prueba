import { useEffect } from 'react';

export default function useHoverCapability() {
  useEffect(() => {
    const root = document.documentElement;

    const apply = (hasHover) => {
      if (hasHover) {
        root.classList.add('has-hover');
        root.classList.remove('no-hover');
      } else {
        root.classList.add('no-hover');
        root.classList.remove('has-hover');
      }
    };

    // Estado inicial
    const mq = window.matchMedia('(any-hover: hover)');
    apply(mq.matches);

    // Reaccionar a cambios (teclado/trackpad conectados, Sidecar, etc.)
    const listener = (e) => apply(e.matches);
    mq.addEventListener?.('change', listener);
    // fallback Safari viejo
    mq.addListener?.(listener);

    // Primer toque en pantallas táctiles: fuerza no-hover
    const onFirstTouch = () => apply(false);
    window.addEventListener('touchstart', onFirstTouch, { passive: true, once: true });

    return () => {
      mq.removeEventListener?.('change', listener);
      mq.removeListener?.(listener);
      window.removeEventListener('touchstart', onFirstTouch);
    };
  }, []);
}
