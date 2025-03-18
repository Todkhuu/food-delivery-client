import { ButtonDemo } from "@/components/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must include at least one uppercase letter.",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must include at least one lowercase letter.",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Password must include at least one number.",
    }),
});

export const FormLogin = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const logIn = async (email: string, password: string) => {
    const response = await fetch(`http://localhost:8000/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const users = await response.json();
    localStorage.setItem("id", users.data._id);
    toast(users.message);
    users.error ? users.message : router.push("/");
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("value", values);
    logIn(values.email, values.password);
    localStorage.setItem("email", values.email);
    localStorage.getItem("email");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonDemo text={"Let's go"} />
      </form>
    </Form>
  );
};
