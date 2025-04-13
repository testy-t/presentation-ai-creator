import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Введите корректный email" }),
  presentationTopic: z.string().min(3, { message: "Тема должна содержать минимум 3 символа" }),
  slidesCount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Введите положительное число"
  }),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      presentationTopic: "",
      slidesCount: "10",
      additionalInfo: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Имитация отправки данных на сервер
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы скоро свяжемся с вами для уточнения деталей.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="form-section" className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Создать презентацию
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Заполните форму, и мы создадим для вас идеальную презентацию
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@mail.ru" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="presentationTopic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Тема презентации</FormLabel>
                  <FormControl>
                    <Input placeholder="Например: Стратегия развития бизнеса" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="slidesCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Количество слайдов</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите количество слайдов" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="5">5 слайдов</SelectItem>
                      <SelectItem value="10">10 слайдов</SelectItem>
                      <SelectItem value="15">15 слайдов</SelectItem>
                      <SelectItem value="20">20 слайдов</SelectItem>
                      <SelectItem value="25">25 слайдов</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Дополнительная информация (необязательно)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Укажите особые пожелания или требования к презентации"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Отправляем..." : "Создать презентацию"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default RequestForm;
