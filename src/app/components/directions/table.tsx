"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

interface TableRow {
  name: string;
  education: string[];
  price: string[];
  code: string;
  year: string;
}

const bakalavriat: TableRow[] = [
  {
    name: "Iqtisodiyot (tarmoqlar va sohalar bo'yicha)",
    education: ["Kunduzgi", "Sirtqi"],
    code: "60410100",
    year: "Qabul 2025 - 2026",
    price: ["17000000", "15000000"],
  },
  {
    name: "Kompyuter injiringi",
    education: ["Kunduzgi", "Sirtqi"],
    code: "60610300",
    year: "Qabul 2025 - 2026",
    price: ["17000000", "15000000"],
  },
  {
    name: "Xorijiy til va adabiyoti",
    education: ["Kunduzgi"],
    code: "60110900",
    year: "Qabul 2025 - 2026",
    price: ["16000000"],
  },
  {
    name: "Pedagogika",
    education: ["Kunduzgi"],
    code: "60110100",
    year: "Qabul 2025 - 2026",
    price: ["16000000"],
  },
  {
    name: "Boshlang‘ich ta’lim",
    education: ["Kunduzgi"],
    code: "60110400",
    year: "Qabul 2025 - 2026",
    price: ["16000000"],
  },
  {
    name: "Maktabgacha ta’lim",
    education: ["Kunduzgi"],
    code: "60110200",
    year: "Qabul 2025 - 2026",
    price: ["16000000"],
  },
  {
    name: "Tarix",
    education: ["Kunduzgi"],
    code: "60220300",
    year: "Qabul 2025 - 2026",
    price: ["16000000"],
  },
  {
    name: "Jismoniy madaniyat",
    education: ["Kunduzgi"],
    code: "60111200",
    year: "Qabul 2025 - 2026",
    price: ["16000000"],
  },
  {
    name: "O‘zbek tili va adabiyoti",
    education: ["Kunduzgi"],
    code: "60110700",
    year: "Qabul 2025 - 2026",
    price: ["16000000"],
  },
  {
    name: "Psixologiya",
    education: ["Kunduzgi", "Sirtqi"],
    code: "60310300",
    year: "Qabul 2025 - 2026",
    price: ["16000000", "14000000"],
  },
  {
    name: "Arxitektura",
    education: ["Kunduzgi", "Sirtqi"],
    code: "60730100",
    year: "Qabul 2025 - 2026",
    price: ["16000000", "14000000"],
  },
  {
    name: "Kadastr",
    education: ["Kunduzgi", "Sirtqi"],
    code: "60721700",
    year: "Qabul 2025 - 2026",
    price: ["16000000", "14000000"],
  },
  {
    name: "Metallurgiya muhandisligi",
    education: ["Kunduzgi", "Sirtqi"],
    code: "60711200",
    year: "Qabul 2025 - 2026",
    price: ["16000000", "14000000"],
  },
  {
    name: "Energetika muhandisligi",
    education: ["Kunduzgi", "Sirtqi"],
    code: "60710400",
    year: "Qabul 2025 - 2026",
    price: ["16000000", "14000000"],
  },
  {
    name: "Filologiya va tillarni o‘qitish",
    education: ["Kunduzgi", "Sirtqi"],
    code: "60230100",
    year: "Qabul 2025 - 2026",
    price: ["16000000", "14000000"],
  },
  {
    name: "Dasturiy injiniring",
    education: ["Kunduzgi", "Sirtqi"],
    code: "60610400",
    year: "Qabul 2025 - 2026",
    price: ["16000000", "14000000"],
  },
];
const magistratura: TableRow[] = [
  {
    name: "Kompyuter tizimlari va ularning dasturiy ta’minoti",
    education: ["Kunduzgi"],
    code: "70610101",
    year: "Qabul 2025 - 2026",
    price: ["17000000"],
  },
  {
    name: "Xorijiy til va adabiyoti",
    education: ["Kunduzgi"],
    code: "70110901",
    year: "Qabul 2025 - 2026",
    price: ["21000000"],
  },
  {
    name: "O‘zbek tili va adabiyoti",
    education: ["Kunduzgi"],
    code: "70110701",
    year: "Qabul 2025 - 2026",
    price: ["21000000"],
  },
];

function RenderTable(data: TableRow[]) {
  const t = useTranslations();
  return (
    <table className="w-[1200px] mx-auto rounded-md overflow-hidden border border-[#F3F4F6] text-sm text-left text-bg-[#F3F4F6]">
      <thead className="text-bg-[#F3F4F6] bg-[#F3F4F6]">
        <tr className="">
          <th className="border border-bg-[#F3F4F6] px-2 py-3 font-bold text-center">
            №
          </th>
          <th className="border border-bg-[#F3F4F6] px-2 py-3 font-bold text-center">
            {t("table.columns.code")}
          </th>
          <th className="border border-bg-[#F3F4F6] px-2 py-3 font-bold text-center">
            {t("table.columns.name")}
          </th>
          <th className="border border-bg-[#F3F4F6] px-2 py-3 font-bold text-center">
            {t("table.columns.form")}
          </th>
          <th className="border border-bg-[#F3F4F6] px-2 py-3 font-bold text-center">
            {t("table.columns.price")}
          </th>
          <th className="border border-bg-[#F3F4F6] px-2 py-3 font-bold text-center"></th>
        </tr>
      </thead>
      <tbody className="border-b-2 border-[#F3F4F6]">
        {data.map((row, index) => {
          const rowSpan = row.education.length;
          return row.education.map((edu, i) => (
            <tr
              key={`${index}-${i}`}
              className={index % 2 === 0 ? "bg-white" : "bg-[#F3F4F6] "}
            >
              {i === 0 && (
                <>
                  <td
                    className="border border-bg-[#F3F4F6] px-2 py-1 text-center text-sm"
                    rowSpan={rowSpan}
                  >
                    {index + 1}.
                  </td>
                  <td
                    className="border border-bg-[#F3F4F6] px-2 py-1 text-center text-sm"
                    rowSpan={rowSpan}
                  >
                    {row.code}
                  </td>
                  <td
                    className="border border-bg-[#F3F4F6] px-2 py-1 text-sm "
                    rowSpan={rowSpan}
                  >
                    {t(`programs.${row.code}`)}
                  </td>
                </>
              )}
              <td className="border border-bg-[#F3F4F6] px-2 py-1 text-center text-sm">
                {t(`education.${edu}`)}
              </td>
              <td className="border border-bg-[#F3F4F6] px-2 py-1 text-center text-sm">
                {Number(row.price[i]).toLocaleString("uz-UZ")}
              </td>
              <td className="border border-bg-[#F3F4F6] px-2 py-1 text-center text-sm text-[#4953A7]">
                <Link href="https://qabul.tipi.uz/" target="_blank">
                  {t("programs.year")}
                </Link>
              </td>
            </tr>
          ));
        })}
      </tbody>
    </table>
  );
}

export default function Table() {
  const t = useTranslations();
  return (
    <div className="max-w-[1340px] mx-auto px-4 py-[68px] flex gap-10 flex-col">
      <div className="overflow-x-auto overflow-hidden">
        <h2 className="text-lg font-semibold mb-2 text-center w-[1000px] mx-auto">
          {t("table.bachelor_heading")}
        </h2>
        {RenderTable(bakalavriat)}
      </div>
      <div className="overflow-x-auto overflow-hidden">
        <h2 className="text-lg font-semibold mb-2 text-center w-[1000px] mx-auto">
          {t("table.master_heading")}
        </h2>
        {RenderTable(magistratura)}
      </div>
    </div>
  );
}
