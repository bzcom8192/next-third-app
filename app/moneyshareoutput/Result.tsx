"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import imgmoney from "@/assets/images/imgmoney.png";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Info from "@/components/Info";

export default function Result() {
  const router = useRouter();
  const params = useSearchParams();
  const amount = params.get("amount") || "0.00";
  const people = params.get("people") || "1";
  const share = parseFloat(amount) / parseInt(people);
  const [alertMessage, setAlertMessage] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div
        className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8"
        id="result-card"
      >
        <h1 className="text-2xl font-bold mb-4">แชร์เงินกันเถอะ</h1>
        <Image
          src={imgmoney}
          alt="App Logo"
          className="mx-auto h-32 w-auto my-10"
          draggable={false}
        />
        <div className="w-full flex items-center rounded px-4 py-2 bg-gray-100 hover:shadow-md transition-shadow duration-200">
          <div className="rounded px-4 py-2 bg-gray-100">
            <p className="text-gray-600">จำนวนเงิน</p>
            <p className="text-2xl font-bold text-blue-500 py-1">
              {parseFloat(amount).toLocaleString("th-TH", {
                style: "currency",
                currency: "THB",
              })}{" "}
              บาท
            </p>
            <p className="text-gray-600 mt-2">จำนวนคน</p>
            <p className="text-2xl font-bold text-blue-500 py-1">{people} คน</p>
            <p className="text-gray-600 mt-2">คนละ</p>
            <p className="text-3xl font-bold text-blue-500 py-2">
              {share.toLocaleString("th-TH", {
                style: "currency",
                currency: "THB",
              })}{" "}
              บาท
            </p>
            <div className="w-full flex justify-center gap-3 mt-6">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(share.toFixed(2));
                  setAlertMessage("คัดลอกเรียบร้อย!");
                  setTimeout(() => setAlertMessage(""), 3000);
                }}
                className="w-32 bg-blue-500 text-white text-base px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
              >
                คัดลอก
              </button>
              <button
                onClick={() => router.back()}
                className="w-32 bg-gray-500 text-white text-base px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
              >
                คำนวณใหม่
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {alertMessage && (
        <Info message={alertMessage} onClick={() => setAlertMessage("")} />
      )}
    </div>
  );
}
