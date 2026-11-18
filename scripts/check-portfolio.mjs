import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const base = process.argv[2] ?? "http://localhost:3000";
for (const route of ["/", "/about", "/experience", "/projects", "/skills", "/certifications"]) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.ok(!html.includes("Future Ideas"), `${route}: retired ideas still rendered`);
  assert.ok(!html.includes("/projects/urm/"), `${route}: production capture still referenced`);
  assert.ok(!html.includes("Pending Marc"), `${route}: draft placeholder rendered`);
  if (route === "/" || route === "/projects") {
    assert.equal((html.match(/<article /g) ?? []).length, 4, `${route}: project count`);
    for (const text of ["18 client templates", "50+ developers", "Microsoft Teams"]) {
      assert.ok(html.includes(text), `${route}: missing confirmed result ${text}`);
    }
  }
  if (route === "/" || route === "/about") assert.ok(html.includes("5 years"), route);
  if (route === "/experience") {
    assert.ok(html.includes("Bravissimo") && html.includes("BruntWork"), "Missing recent roles");
  }
}

const redirect = await fetch(new URL("/projects/unifiedrequestmanagement", base), { redirect: "manual" });
assert.equal(redirect.status, 308, "Old project URL must permanently redirect");
assert.equal(redirect.headers.get("location"), "/projects#unified-request-management");

for (const diagram of ["client-branded-report-generator", "copilot-studio-reporting-agent", "urm"]) {
  const response = await fetch(new URL(`/projects/diagrams/${diagram}.svg`, base));
  assert.equal(response.status, 200, diagram);
  const svg = await response.text();
  assert.ok(svg.includes("<title") && !svg.includes("<script"), `${diagram}: accessible static SVG`);
}

for (const image of ["canvas-app.png", "canvas-app-request.png", "canvas-app-request-details.png", "canvas-app-responsive.png", "ado-work-item.jpeg", "email-approved.png", "flow-architecture.png", "solution-architecture.png", "dataverse-architecture.png", "flow-failed-orchestration.png", "model-driven.jpeg", "model-driven-form.jpeg", "model-driven-form-2.jpeg", "model-driven-request-logs.jpeg", "teams-approval.png", "teams-approved.png"]) {
  const response = await fetch(new URL(`/projects/urm/${image}`, base));
  assert.equal(response.status, 404, `Production capture still served: ${image}`);
}

const projectsSource = await readFile(new URL("../components/Projects.tsx", import.meta.url), "utf8");
for (const name of ["Bravissimo", "BruntWork", "FutureAbility", "Peak Support", "Accenture"]) {
  assert.ok(!projectsSource.includes(name), `Employer name in public project cards: ${name}`);
}
console.log("PASS: six pages, four projects, confirmed copy, three diagrams, permanent redirect, and 16 retired image URLs.");
