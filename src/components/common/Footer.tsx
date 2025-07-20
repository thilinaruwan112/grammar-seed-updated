export default function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Grammar Seed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
