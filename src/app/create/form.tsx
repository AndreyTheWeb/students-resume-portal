"use client";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PostSchema = z.object({
  status: z.string().min(1, "Обязательное поле").max(100),
  text: z.string().min(1, "Обязательное поле"),
  links: z.string().min(1, "Обязательное поле"),
});

export const NewForm = () => {
  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      status: "",
      text: "",
      links: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof PostSchema>) => {
    const response = await fetch("/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: values.status,
        text: values.text,
        links: values.links,
      }),
    });

    if (response.ok) {
      toast({
        title: "Успех",
        description: "Вы успешно создали запись",
      });
      router.push("/main");
    } else {
      toast({
        title: "Ошибка",
        description: "Что то пошло не так",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={"relative w-full"}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Статус</FormLabel>
                  <FormControl>
                    <Input placeholder="Студент / преподаватель" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание достижения</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Введите описание ваших достижений"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="links"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Подтверждающие ссылки</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Укажите ссылки на подтверждающие материалы"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button variant="link" className="w-full mt-6" type="submit">
            Создать портфолио
          </Button>
        </form>
      </Form>
    </div>
  );
};
