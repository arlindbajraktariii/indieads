import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

// Register page component
function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Create your account</CardTitle>
          <CardDescription className="text-center">Join RoketAd to promote your product or monetize your audience</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a password" required />
            </div>
            <div className="space-y-2">
              <Label>What do you want to do?</Label>
              <RadioGroup defaultValue="promote">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="promote" id="promote" />
                  <Label htmlFor="promote">Promote my product</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monetize" id="monetize" />
                  <Label htmlFor="monetize">Monetize my audience</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" required />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{' '}
                <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
              </Label>
            </div>
            <Button type="submit" className="w-full">Create account</Button>
          </form>
          <div className="mt-6 text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default RegisterPage;