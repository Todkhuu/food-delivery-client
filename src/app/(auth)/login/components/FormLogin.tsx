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
import { z } from "zod";
import { toast } from "sonner";
import axios from "axios";
import { CheckCircle, CircleCheck, CircleX } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
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
    try {
      const res = await axios.post(`http://localhost:8000/auth/signin`, {
        email,
        password,
      });

      localStorage.setItem("id", res.data._id);
      toast(res.data.message, {
        icon: <CircleCheck size={18} className="text-green-500" />,
      });

      router.push("/");
    } catch (err: any) {
      toast(err.response.data.message, {
        icon: <CircleX size={18} className="text-red-500" />,
      });
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    logIn(values.email, values.password);
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
