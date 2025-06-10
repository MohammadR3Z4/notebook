import Layout from "@/components/layout/layout";
import Image from "next/image";

export default function Aboutus() {
  return (
    <Layout>
        <section className="bg-gray-50 dark:bg-gray-700 w-full text-white">
            <div className="flex justify-center items-center my-14 text-4xl flex-col">
                <h1>Business</h1>
                <div className="md:mx-0 mx-5 md:w-1/2 flex justify-center items-center">
                    <Image src="/Business.jpg" width={800} height={300} className="mt-5 rounded-4xl "/>
                </div>
                <p className="text-lg mt-5 md:w-1/2 md:mx-0 mx-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </section>
    </Layout>
  );
}
