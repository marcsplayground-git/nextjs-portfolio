"use client";

import Image from "next/image";
import { useState } from "react";

type ZoomableImageProps = {
  src: string;
  alt: string;
  caption?: string;
  /** Tailwind classes for the small image container (e.g. h-64) */
  wrapperClassName?: string;
};

export function ZoomableImage({
  src,
  alt,
  caption,
  wrapperClassName = "h-64",
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail / inline image */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full focus:outline-none"
      >
        <div
          className={
            "relative w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 " +
            wrapperClassName
          }
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* subtle overlay + label */}
          <div className="pointer-events-none absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div
            className="
      pointer-events-none
      absolute inset-0
      flex items-center justify-center
      opacity-0 group-hover:opacity-100
      transition-opacity duration-200
      bg-slate-900/20 dark:bg-slate-900/30
    "
          >
            <span className="rounded-lg bg-slate-900/70 dark:bg-slate-800/70 px-3 py-1.5 text-[11px] font-medium text-white shadow-sm backdrop-blur">
              Click to zoom
            </span>
          </div>
        </div>

        {caption && (
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 text-left">
            {caption}
          </p>
        )}
      </button>

      {/* Fullscreen zoom modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-[95vw] max-w-5xl max-h-[90vh] rounded-2xl p-3"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking image
          >
            <div className="relative w-full h-[70vh] rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 800px, 100vw"
              />
            </div>

            {caption && (
              <p className="mt-2 text-xs text-slate-200 text-center">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
