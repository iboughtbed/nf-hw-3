import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { SignInForm } from "../_components/signin-form";

export default function SignInPage() {
  return (
    <div className="container max-w-3xl">
      <div className="flex flex-col items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              You can use any user&apos;s credentials from{" "}
              <Link
                href="https://dummyjson.com/users"
                rel="noreferrer"
                target="_blank"
                className="underline"
              >
                dummyjson.com/users
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignInForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
