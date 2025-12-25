"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth_client";


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";

import { signInUser } from "@/server/users";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

   const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const response = await signInUser(values.email, values.password);

      if (response.success) {
        toast.success(response.message);
        router.push("/dashboard");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            {/* single form */}
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FieldGroup>
                {/* Email */}
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    {...form.register("email")}
                  />
                </Field>

                {/* Password */}
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Link
                      href="/forgot-password"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    {...form.register("password")}
                  />
                </Field>

                {/* Actions */}
                <Field>
                  <div className="flex flex-col gap-3">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="size-4 animate-spin" />
                      ) : (
                        "Login"
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      type="button"
                      className="w-full"
                      onClick={signIn}
                    >
                      Login with Google
                    </Button>
                  </div>
                </Field>

                {/* Footer */}
                <Field>
                  <FieldDescription className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/signup"
                      className="underline underline-offset-4"
                    >
                      Sign up
                    </Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}


// "use client";
// import { z } from "zod";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//    Field,
//    FieldDescription,
//    FieldGroup,
//    FieldLabel,
//  } from "@/components/ui/field"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/input";

// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// const formSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(8),
// });

// export function LoginForm({
//   className,
//   ...props
// }: React.ComponentProps<"div">) {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values);
//   }
//   return (
//     <div className={cn("flex flex-col gap-6", className)} {...props}>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//           <Card>
//             <CardHeader>
//               <CardTitle>Login to your account</CardTitle>
//               <CardDescription>
//                 Enter your email below to login to your account
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form>
//                 <FieldGroup>
//                   <Field>
//                     <FieldLabel htmlFor="email">Email</FieldLabel>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="m@example.com"
//                       required
//                     />
//                   </Field>
//                   <Field>
//                     <div className="flex items-center">
//                       <FieldLabel htmlFor="password">Password</FieldLabel>
//                       <a
//                         href="#"
//                         className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
//                       >
//                         Forgot your password?
//                       </a>
//                     </div>
//                     <Input id="password" type="password" required />
//                   </Field>
//                   <Field>
//                     <Button type="submit">Login</Button>
//                     <Button variant="outline" type="button">
//                       Login with Google
//                     </Button>
//                     <FieldDescription className="text-center">
//                       Don&apos;t have an account? <a href="#">Sign up</a>
//                     </FieldDescription>
//                   </Field>
//                 </FieldGroup>
//               </form>
//             </CardContent>
//           </Card>
//         </form>
//       </Form>
//     </div>
//   );
// }
