// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="main-container">
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-purple-100">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="text-dark-900 rounded-lg bg-green-500 px-6 py-3 font-semibold transition-colors hover:bg-green-400"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
