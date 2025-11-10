export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Marc Jason Yu</p>
        <div className="flex items-center gap-4">
          <a className="link" href="mailto:yu.marcjason@outlook.com">
            Email
          </a>
          <a className="link" href="https://www.linkedin.com" target="_blank">
            LinkedIn
          </a>
          <a className="link" href="https://github.com" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
