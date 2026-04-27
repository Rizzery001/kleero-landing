// Passthrough root layout. The real html/body/fonts/i18n live in [locale]/layout.tsx.
// This file exists only so Next 14 doesn't complain about a missing root layout
// when the app uses a [locale] dynamic segment as its top level.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
