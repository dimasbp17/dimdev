// Di-cache saat build supaya tidak memblokir prerender (Cache Components).
export async function CopyrightYear() {
  "use cache"
  return <>{new Date().getFullYear()}</>
}
