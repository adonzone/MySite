"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseCopyToClipboardResult {
  copiedKey: string | null;
  copyText: (text: string, key?: string) => Promise<void>;
}

/**
 * Reusable clipboard helper with auto-resetting visual confirmation state.
 */
export function useCopyToClipboard(resetDelayMs = 2000): UseCopyToClipboardResult {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const copyText = useCallback(
    async (text: string, key = "default") => {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedKey(key);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
          setCopiedKey(null);
        }, resetDelayMs);
      } catch {
        setCopiedKey(null);
      }
    },
    [resetDelayMs]
  );

  return { copiedKey, copyText };
}
