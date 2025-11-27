"use client";

import { useState } from "react";
import { ZoomableImage } from "./ZoomableImage";

const galleryItems = [
  {
    title: "Request Portal - My Request",
    src: "/projects/urm/canvas-app.png",
  },
  {
    title: "Request Portal - Create Request",
    src: "/projects/urm/canvas-app-request.png",
  },
  {
    title: "Request Portal - Request Details",
    src: "/projects/urm/canvas-app-request-details.png",
  },
  {
    title: "Request Portal - Responsive",
    src: "/projects/urm/canvas-app-responsive.png",
  },
  {
    title: "Azure DevOps - Created Tickets",
    src: "/projects/urm/ado-work-item.jpeg",
  },
  {
    title: "Email Notification - Approved",
    src: "/projects/urm/email-approved.png",
  },
  {
    title: "Flow - Architecture",
    src: "/projects/urm/flow-architecture.png",
  },
  {
    title: "Flow - Solution Architecture",
    src: "/projects/urm/solution-architecture.png",
  },
  {
    title: "Flow - Failed Orchestration",
    src: "/projects/urm/flow-failed-orchestration.png",
  },
  {
    title: "Model Driven - Request Table",
    src: "/projects/urm/model-driven.jpeg",
  },
  {
    title: "Model Driven - Request Form Top",
    src: "/projects/urm/model-driven-form.jpeg",
  },
  {
    title: "Model Driven - Request Form Bottom",
    src: "/projects/urm/model-driven-form-2.jpeg",
  },
  {
    title: "Model Driven - Request Logs",
    src: "/projects/urm/model-driven-request-logs.jpeg",
  },
  {
    title: "Teams - Approval",
    src: "/projects/urm/teams-approval.png",
  },
  {
    title: "Teams - Approved",
    src: "/projects/urm/teams-approved.png",
  },
];

export function URMGalleryButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <button
        className="btn btn-outline text-xs sm:text-sm"
        onClick={() => setOpen(true)}
      >
        View Full Gallery
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background overlay that closes modal */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setOpen(false)} // ✅ only background closes
          />

          {/* Modal content (no close on click here) */}
          <div className="relative bg-white dark:bg-slate-950 rounded-2xl shadow-2xl w-[95vw] max-w-7xl max-h-[92vh] overflow-y-auto no-scrollbar p-8">
            {/* Gallery grid */}
            <h3 className="text-base font-semibold text-indigo-600 mb-3">
              Unified Request Management - Full Gallery
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item) => (
                <ZoomableImage
                  key={item.title}
                  src={item.src}
                  alt={item.title}
                  caption={item.title}
                  wrapperClassName="h-44"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
