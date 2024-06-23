"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { buildFaculties, buildSummary, buildTags } from "./helpers";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui";

type DashboardProps = {
  resumes: Array<{
    id: number;
    status: string;
    name: string;
    links?: string;
    tags?: Array<string>;
    postId?: number;
    text?: string;
    picture?: string;
  }>;
};

export const Overview = (resumes: DashboardProps) => {
  const summaryData = buildSummary(resumes);
  const tagsData = buildTags(resumes);
  const faculty = buildFaculties(resumes);

  console.log(tagsData);
  return (
    <>
      <CardHeader>
        <CardTitle>Статусы</CardTitle>
      </CardHeader>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={summaryData}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Bar dataKey="total" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <CardHeader>
        <CardTitle>Теги</CardTitle>
      </CardHeader>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={tagsData}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Bar dataKey="total" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <CardHeader>
        <CardTitle>Факультеты</CardTitle>
      </CardHeader>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={faculty}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Bar dataKey="total" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
