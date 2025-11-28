import { URMGalleryButton } from "@/components/URMGalleryButton";
import { SectionHeader } from "@/components/SectionHeader";
import { ZoomableImage } from "@/components/ZoomableImage";

export default function UnifiedRequestManagementPage() {
  return (
    <main className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      {/* Hero */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[3fr,2fr] items-start">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Project"
              title="Unified Request Management (URM)"
              description="Centralizing internal requests across IT, HR, Facilities, and Engineering."
            />

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The Unified Request Management (URM) system centralizes all
              internal requests into a single platform, streamlines routing and
              approvals, and integrates with Azure DevOps to ensure engineering
              teams never miss a task.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="badge">Power Apps</span>
              <span className="badge">Dataverse</span>
              <span className="badge">Power Automate</span>
              <span className="badge">Azure DevOps</span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="rounded-2xl bg-slate-50/80 dark:bg-slate-900/70 p-4">
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <ZoomableImage
                src="/projects/urm/canvas-app.png"
                alt="Unified Request Management portal overview"
                caption="URM request portal a high-level overview of the intake experience."
                wrapperClassName="h-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Why */}
      <section className="section border-t border-slate-100 dark:border-slate-800">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="eyebrow">Why This Solution Was Built</p>
            <h2 className="h2">Fragmented internal request processes</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Organizations often struggle with fragmented request processes
              spread across email, spreadsheets, SharePoint lists, and chat
              messages. This leads to lost requests, inconsistent SLAs, limited
              visibility, and duplicated effort across departments.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The Unified Request Management (URM) system was created to
              centralize all internal requests into a single platform,
              streamline routing, automate workflows, and improve traceability
              from submission to completion.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-600">
              Problem I Wanted to Solve
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Before URM, typical issues included:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>No single entry point for internal requests</li>
              <li>Manual processing and inconsistent routing</li>
              <li>Lack of transparency for requesters</li>
              <li>Siloed tools across IT, HR, Facilities, and other teams</li>
              <li>No standard workflow or approvals</li>
              <li>Limited reporting and auditability</li>
              <li>No integration with engineering tools like Azure DevOps</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-300">
              The goal was to build one scalable system that eliminates these
              pain points.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="section bg-slate-50/70 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Solution Overview</p>
            <h2 className="h2">Dataverse-first Unified Request Platform</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              URM is a Dataverse-first request platform that allows employees to
              submit, track, and manage requests through a modern user
              experience, while operations teams work from a unified
              model-driven interface.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The system automates assignment, multi-level approvals, external
              ticket creation in Azure DevOps, and end-to-end notifications. All
              components are built as modular, reusable, enterprise-ready
              services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Assignment based on request type",
              "Multi-level approvals",
              "External work items in Azure DevOps",
              "Request logging & failure tracing",
              "Notifications per workflow step",
              "Modular child flow architecture",
              "Dataverse governance & ALM",
              "End-to-end request visibility",
            ].map((item) => (
              <div
                key={item}
                className="card rounded-2xl bg-white dark:bg-slate-950 p-4"
              >
                <p className="text-sm font-medium text-slate-900 dark:text-slate-50 text-center">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[3fr,2fr] items-start">
          <div className="space-y-4">
            <p className="eyebrow">Benefits Delivered</p>
            <h2 className="h2">Unified intake, governance, and traceability</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
              <li>One unified intake system for all departments</li>
              <li>Automated routing reduces manual triage</li>
              <li>Faster approvals using defined workflows</li>
              <li>
                External integration ensures engineering teams never miss tasks
              </li>
              <li>End-to-end visibility for both users and support teams</li>
              <li>
                Better governance through Dataverse and solution-based ALM
              </li>
              <li>Consistent, repeatable workflows across business units</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-300">
              This improves productivity, reduces delays, and creates a
              foundation for future scale.
            </p>
          </div>

          {/* BENEFITS IMAGE */}
          <div className="rounded-2xl bg-slate-50/80 dark:bg-slate-900/70 p-4">
            <ZoomableImage
              src="/projects/urm/model-driven.jpeg"
              alt="Unified Request Management Operations dashboard"
              wrapperClassName="h-64"
            />
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="section bg-slate-50/70 dark:bg-slate-900/40">
        <div className="container space-y-6">
          <p className="eyebrow">My Role in the Solution</p>
          <h2 className="h2">Solution Architect + Developer</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Architecture & Design
              </h3>
              <ul className="text-sm space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>Dataverse data model & relational structure</li>
                <li>Solution layering & ALM strategy</li>
                <li>Security model & team-based ownership</li>
                <li>API integration patterns for Azure DevOps</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                App Development
              </h3>
              <ul className="text-sm space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>Canvas App (Request Portal) UI/UX</li>
                <li>Model-driven App for back-office processing</li>
                <li>Reusable components & standardized forms</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Automation
              </h3>
              <ul className="text-sm space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>Orchestrator flow architecture</li>
                <li>Child flows for assignment & approvals</li>
                <li>Azure DevOps integration flows</li>
                <li>Error handling & monitoring logic</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                DevOps & Governance
              </h3>
              <ul className="text-sm space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>Environment strategy (Dev → Test → Prod)</li>
                <li>Power Platform Pipelines configuration</li>
                <li>Environment variables & connection references</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech & Methodology */}
      <section className="section">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Technology & Methodology</p>
            <h2 className="h2">Microsoft Power Platform, Dataverse-first</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              URM is designed following enterprise Power Platform best
              practices: Dataverse as the authoritative data store, a Canvas App
              for user submissions, a Model-driven App for operations, and Power
              Automate for orchestration and integrations.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[3fr,2fr] items-start">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-indigo-600">
                Why These Technologies
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                <li>
                  Dataverse provides relational modeling, security, auditing,
                  and governance.
                </li>
                <li>
                  Canvas Apps offer a friendly, flexible UI for employees.
                </li>
                <li>
                  Model-driven Apps suit structured back-office processes.
                </li>
                <li>
                  Power Automate delivers scalable, maintainable automation.
                </li>
                <li>
                  Azure DevOps REST APIs connect business requests to
                  engineering workflows.
                </li>
                <li>
                  Solution pipelines ensure consistent deployment across
                  environments.
                </li>
              </ul>
            </div>

            {/* ARCHITECTURE IMAGE PLACEHOLDER */}
            <div className="card rounded-2xl bg-slate-50/80 dark:bg-slate-900/70 p-4">
              <ZoomableImage
                src="/projects/urm/solution-architecture.png"
                alt="Unified Request Management Solution Architecture"
                wrapperClassName="h-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Data & Storage */}
      <section className="section bg-slate-50/70 dark:bg-slate-900/40">
        <div className="container space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Data Sources & Storage</p>
            <h2 className="h2">Dataverse as the authoritative store</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              All core entities live inside Dataverse with role-based security,
              row-level access, and referential integrity aligned to enterprise
              reporting and governance standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-indigo-600">
                Core Entities
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>Request</li>
                <li>Request Type</li>
                <li>Assignment Team</li>
                <li>Priority</li>
                <li>Request Logs</li>
              </ul>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Azure DevOps work item metadata (ID, URL, status) is stored back
                into Dataverse for traceability.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-indigo-600">
                How Data Is Saved
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>Canvas App forms to create/view Request records</li>
                <li>Child flows update fields via Dataverse connector</li>
                <li>Logs stored as Request Log records for auditability</li>
                <li>
                  Azure DevOps tickets created via REST API using PAT &amp;
                  environment variables
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Image Strip / Gallery Placeholder */}
      <section className="section">
        <div className="container space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="eyebrow">Portfolio Gallery</p>
              <h2 className="h2">Screenshots & Walkthroughs</h2>
            </div>
            <URMGalleryButton />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Azure DevOps - Created Tickets",
                src: "/projects/urm/ado-work-item.jpeg",
              },
              {
                title: "Email - Approved Request",
                src: "/projects/urm/email-approved.png",
              },
              {
                title: "Teams - Approved Request",
                src: "/projects/urm/teams-approved.png",
              },
            ].map((i) => (
              <ZoomableImage
                key={i.title}
                src={i.src}
                alt={i.title}
                caption={i.title}
                wrapperClassName="h-44"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
