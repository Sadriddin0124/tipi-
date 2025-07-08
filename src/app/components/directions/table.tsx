"use client";

import React from "react";

interface TableRow {
  name: string;
  price: string;
  year: string;
}

const bakalavriat: TableRow[] = [
  {
    name: "Axborot texnologiyalari",
    price: "12,000,000 so'm",
    year: "2025 - 2026",
  },
  {
    name: "Kimyo va biologiya",
    price: "12,000,000 so'm",
    year: "2025 - 2026",
  },
  {
    name: "Robototexnika",
    price: "12,000,000 so'm",
    year: "2025 - 2026",
  },
  {
    name: "Transport vositalari muhandisligi",
    price: "12,000,000 so'm",
    year: "2025 - 2026",
  },
];
const magistratura: TableRow[] = [
  {
    name: "Axborot texnologiyalari",
    price: "12,000,000 so'm",
    year: "2025 - 2026",
  },
  {
    name: "Kimyo va biologiya",
    price: "12,000,000 so'm",
    year: "2025 - 2026",
  },
  {
    name: "Robototexnika",
    price: "12,000,000 so'm",
    year: "2025 - 2026",
  },
  {
    name: "Transport vositalari muhandisligi",
    price: "12,000,000 so'm",
    year: "2025 - 2026",
  },
];

export default function Table() {
  return (
    <div className="max-w-[1340px]  mx-auto px-4 py-[68px] flex gap-10 flex-col">
      <div className="overflow-x-auto shadow rounded-md overflow-hidden">
        <table className="w-full border  rounded-md overflow-hidden">
          <thead className=" text-black bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Magistratura yo'nalishi</th>
              <th className="px-4 py-3 text-left">Narxi</th>
              <th className="px-4 py-3 text-left">Qabul</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {magistratura.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3">{row.price}</td>
                <td className="px-4 py-3 text-blue-600 underline cursor-pointer">
                  {row.year}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto shadow rounded-md overflow-hidden">
        <table className="w-full border  rounded-md overflow-hidden">
          <thead className=" text-black bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Bakalavriat yo'nalishi</th>
              <th className="px-4 py-3 text-left">Narxi</th>
              <th className="px-4 py-3 text-left">Qabul</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bakalavriat.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3">{row.price}</td>
                <td className="px-4 py-3 text-blue-600 underline cursor-pointer">
                  {row.year}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
