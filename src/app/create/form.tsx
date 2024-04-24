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
  Textarea,
} from "@/components/ui";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PostSchema = z.object({
  status: z.string().min(1, "Обязательное поле").max(100),
  text: z.string().min(1, "Обязательное поле"),
  links: z.string().min(1, "Обязательное поле"),
  tags: z.string().min(1, "Обязательное поле"),
  picture: z.any(),
});

export const NewForm = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedImage, setSelectedImage] = useState<File>();

  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      status: "",
      text: "",
      links: "",
      tags: "",
      picture: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof PostSchema>) => {
    const formData = new FormData();
    formData.set("picture", selectedFile);
    formData.append("status", values.status);
    formData.append("text", values.text);
    formData.append("links", values.links);
    formData.append("tags", values.tags);
    const response = await fetch("/api/create", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      toast({
        title: "Успех",
        description: "Вы успешно создали запись",
      });
      router.push("/main");
      router.refresh();
    } else {
      toast({
        title: "Ошибка",
        description: "Что то пошло не так",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={"relative w-full pt-5"}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="space-y-2 flex flex-col gap-[20px]">
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
                  <FormLabel>Описание достижений</FormLabel>
                  <FormControl>
                    <Textarea
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

            <FormField
              control={form.control}
              name="picture"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Загрузите превью</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={({ target }) => {
                        if (target.files) {
                          const file = target.files[0];
                          setSelectedFile(file);
                          setSelectedImage(URL.createObjectURL(file));
                        }
                      }}
                      type="file"
                      accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                      placeholder="Загрузите подтверждающие материалы"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Укажите теги для вашего портфолио</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Пожалуйста, введите теги через запятую"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="link" className="w-full mt-6" type="submit">
              Создать портфолио
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
