
import AddReviewForm from '@/components/reviews/add-review-form';
import { Card } from '@/components/ui/card';

export default function AddReviewPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="space-y-4 text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">Submit Your Review</h1>
        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
          We'd love to hear about your experience. Share your story with us!
        </p>
      </div>
      <Card className="mx-auto max-w-2xl">
        <AddReviewForm />
      </Card>
    </div>
  );
}
