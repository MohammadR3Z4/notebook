import { readNoteBook } from "@/components/api/api";
import Book from "@/components/cards/book";
import Layout from "@/components/layout/layout";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Alert from "@/components/layout/alert";

export default function Notebooks() {
  const [data, setData] = useState([]);

  const searchParams = useSearchParams();
  const result = searchParams.get("result");

  const fetchData = async () => {
    const res = await readNoteBook();
    const notebooks = res?.map((item) => {
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        text: item.text,
      };
    });

    setData(notebooks);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout title="Home">
      <div className="flex flex-col w-full mx-12 justify-start items-start my-5">
          {result === "del-success" && (
            <Alert type="success" text="Record successfully deleted" />
          )}
          {result === "add-success" && (
            <Alert type="success" text="Record successfully Added" />
          )}
        <div className="flex w-full justify-between items-center">
          <h1 className="text-2xl"> My Note Books </h1>
          <button className="mt-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <a
              href="/notebooks/create"
              className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent"
            >
              Create New
            </a>
          </button>
        </div>
        <div className="w-full">
          {data?.map((item) => (
            <Book
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
