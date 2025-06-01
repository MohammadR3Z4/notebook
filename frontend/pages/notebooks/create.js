import Tiptap from "@/components/cards/texteditor";
import { useState } from "react";
import Layout from "@/components/layout/layout";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Create() {
  const [editorContent, setEditorContent] = useState("");

  const submitHandler = (data) => {
    alert(data);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      description: Yup.string()
        .max(30, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const data = {
        title: values.title,
        description: values.description,
        text: editorContent,
      };
      submitHandler(data);
    },
  });
  return (
    <Layout title="create" showFooter={false}>
      <div className="bg-gray-50 dark:bg-gray-900 flex justify-center w-full p-14">
        <form className="w-full flex justify-center">
          <div className="flex flex-col md:w-1/2 w-full">
            <div className="mb-5">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title :
              </label>
              <input
                type="text"
                id="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-red-500 text-sm mt-2">
                  {formik.errors.title}
                </div>
              ) : null}
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                description :
              </label>
              <input
                type="text"
                id="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-red-500 text-sm mt-2">
                  {formik.errors.description}
                </div>
              ) : null}
            </div>
            <div className="mb-5">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Thumbnail :
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
            </div>
            <div className="text-editor-container text-white grow">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Text :
              </label>
              <div className="bg-gray-700 p-2.5 rounded-lg h-full">
                <Tiptap onChange={(html) => setEditorContent(html)} />
              </div>
            </div>
            <div>
              <button
                onClick={formik.handleSubmit}
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg  px-5 py-2.5 text-center me-2 mb-2 mt-16 cursor-pointer w-full text-xl font-bold"
              >
                {" "}
                Submit{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
