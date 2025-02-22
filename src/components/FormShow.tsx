import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ButtonDemo } from "@/components/Button";
import { Checkboxs } from "./Checkbox";

export const FormShow = ({
  form,
  onSubmit,
  showPassword,
  setShowPassword,
}: {
  form: any;
  onSubmit: any;
  showPassword?: any;
  setShowPassword?: any;
}) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Checkboxs
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <ButtonDemo text={"Let's go"} />
      </form>
    </Form>
  );
};
