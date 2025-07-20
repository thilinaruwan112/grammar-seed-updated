import GrammarCheckerForm from '@/components/grammar-checker-form';

export default function CheckerPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">AI Grammar Checker</h1>
        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
          Paste your text below and let our AI-powered tool help you find and fix grammar, spelling, and style issues.
        </p>
      </div>
      <div className="mt-8 max-w-3xl mx-auto">
        <GrammarCheckerForm />
      </div>
    </div>
  );
}
