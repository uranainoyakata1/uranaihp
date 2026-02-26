"use client";

import { useState } from "react";

type CopyBlockProps = {
  lines: string[];
};

export function CopyBlock({ lines }: CopyBlockProps) {
  const [copied, setCopied] = useState(false);
  const text = lines.join("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-white">LINE送信用テンプレ</p>
        <button
          type="button"
          onClick={handleCopy}
          className="cta-outline border-white/40 text-white text-xs"
          aria-live="polite"
        >
          {copied ? "コピーしました" : "テンプレをコピー"}
        </button>
      </div>
      <div className="mt-4 space-y-2 text-sm text-white/70">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}
