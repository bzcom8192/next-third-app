"use client";

import Alert from "@/components/Alert";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import imgmoney from "@/assets/images/imgmoney.png";
import { useRouter } from "next/navigation";

const numberPattern = /^\d*$/;

export default function Page() {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleCalculate = () => {
    const amountNum = parseFloat(amount);
    const peopleNum = parseInt(numberOfPeople);
    if (isNaN(amountNum) || isNaN(peopleNum) || peopleNum <= 0) {
      setAlertMessage("กรุณาใส่จำนวนเงินและจำนวนคนที่ถูกต้อง");
      setTimeout(() => setAlertMessage(""), 3000);
      return;
    }
    const q = new URLSearchParams({
      amount: amount,
      people: numberOfPeople,
    }).toString();
    router.push(`/moneyshareoutput?${q}`);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-4">แชร์เงินกันเถอะ</h1>
          <Image
            src={imgmoney}
            alt="App Logo"
            className="mx-auto h-32 w-auto my-10"
            draggable={false}
          />
          <div className="w-full flex items-center rounded px-4 py-2 bg-gray-100 hover:shadow-md transition-shadow duration-200">
            <label className="mr-2">จำนวนเงิน</label>
            <span className="w-px bg-gray-500">&nbsp;</span>
            <div className="rounded px-4 py-2 bg-gray-100">
              <input
                type="text"
                placeholder="ป้อนจำนวนเงิน เช่น 1000"
                value={amount}
                onChange={(e) => {
                  if (numberPattern.test(e.target.value)) {
                    setAmount(e.target.value);
                  }
                }}
                className="outline-none"
              />
            </div>
          </div>
          <div className="w-full flex items-center rounded px-4 py-2 bg-gray-100 mt-4 hover:shadow-md transition-shadow duration-200">
            <label className="mr-2">จำนวนคน</label>
            <span className="w-px bg-gray-500">&nbsp;</span>
            <div className="rounded px-4 py-2 bg-gray-100">
              <input
                type="text"
                placeholder="ป้อนจำนวนคน เช่น 4"
                value={numberOfPeople}
                onChange={(e) => {
                  if (numberPattern.test(e.target.value)) {
                    setNumberOfPeople(e.target.value);
                  }
                }}
                className="outline-none"
              />
            </div>
          </div>
          <button
            onClick={handleCalculate}
            className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 cursor-pointer transition-colors duration-200"
          >
            คำนวณ
          </button>
          <Footer />
        </div>
      </div>
      {alertMessage && (
        <Alert
          message={alertMessage}
          onClick={() => {
            setAlertMessage("");
          }}
        />
      )}
    </>
  );
}
