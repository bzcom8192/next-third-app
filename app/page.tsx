import Footer from "@/components/Footer";
import Image from "next/image";
import imgmoney from "@/assets/images/imgmoney.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col w-full h-screen justify-between">
      <h1 className="text-2xl font-bold text-center mt-10 text-blue-500">
        American Share แชร์เงินกันเถอะ
      </h1>

      <div className="flex flex-col items-center">
        <Image
          src={imgmoney}
          alt="App Logo"
          className="mx-auto h-32 w-auto mt-10"
          draggable={false}
        />

        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded-full mt-10 mx-auto hover:bg-blue-600 transition-colors duration-200"
          href="/moneyshareinput"
        >
          เริ่มต้นใช้งาน
        </Link>
      </div>

      <Footer />
    </div>
  );
}
