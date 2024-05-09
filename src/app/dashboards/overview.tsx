"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { buildSummary, buildTags } from "./helpers";
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
  console.log(resumes);
  const summaryData = buildSummary(resumes);
  const tagsData = buildTags(resumes);
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
          <Bar
            dataKey="total"
            fill="currentColor"
            radius={[4, 4, 0, 0]}
            className="fill-primary"
          />
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
          <Bar
            dataKey="total"
            fill="currentColor"
            radius={[4, 4, 0, 0]}
            className="fill-primary"
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
