import Layout from "@/components/layout/layout";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="bg-image-main bg-center bg-no-repeat bg-cover flex justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white"> Note Book </h1>
          <p className="text-xl text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="mt-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <a href="/notebooks" className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          Create New
          </a>
          </button>
        </div>
      </div>
    </Layout>
  );
}
