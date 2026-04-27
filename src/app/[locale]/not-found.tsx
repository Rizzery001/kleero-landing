import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center container-x py-24">
        <div className="text-center max-w-lg">
          <div className="font-display text-7xl text-forest-700 mb-3">404</div>
          <p className="text-ink-700 mb-8">This page does not exist.</p>
          <a href="/" className="btn-primary">
            ← Back home
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
