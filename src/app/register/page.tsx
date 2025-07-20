import RegistrationForm from '@/components/auth/registration-form';
import { Card } from '@/components/ui/card';

export default function RegisterPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="space-y-4 text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">Student Registration</h1>
        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
          Create your account to get started. It only takes a few minutes.
        </p>
      </div>
      <Card className="mx-auto max-w-4xl">
        <RegistrationForm />
      </Card>
    </div>
  );
}
