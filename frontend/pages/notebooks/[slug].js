import Layout from "@/components/layout/layout";
import Tiptap from "@/components/cards/texteditor";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { showNotebook, updateNoteBook } from "@/components/api/api";
import Modal from "@/components/layout/modal";
import Alert from "@/components/layout/alert";
import { useSearchParams, useRouter } from "next/navigation";

export default function Show({ book }) {
  const router = useRouter();
  const [editorContent, setEditorContent] = useState("");
  const [text, setText] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const searchParams = useSearchParams();
  const result = searchParams.get("result");

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      file: "",
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
        id: book?.id,
        title: values.title,
        description: values.description,
        // file: values.file,
        text: editorContent || text,
      };
      submitHandler(data);
    },
  });

  const submitHandler = async (data) => {
    console.log("data : " + JSON.stringify(data));
    const res = await updateNoteBook(data.id, data);
    console.log("res : " + JSON.stringify(res));

    if (res.code == 200) {
      router.push(`/notebooks/${book?.id}?result=update-success`);
    }
  };

  useEffect(() => {
    if (book) {
      setText(book.text);
      formik.setValues({
        title: book.title || "",
        description: book.description || "",
      });
    }
    console.log("book : " + book.text);
    console.log("editorContent : " + editorContent);
  }, [book]);

  return (
    <>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} id={book.id} />
      ) : null}
      <Layout title="create" showFooter={false}>
        <div className="bg-gray-50 dark:bg-gray-900 flex justify-center w-full p-14">
          <form className="w-full flex justify-center">
            <div className="flex flex-col md:w-1/2 w-full">
              {result === "update-success" && (
                <Alert type="success" text={`Record ${book?.id} Successfully Updated `} />
              )}
              <div className="mb-9">
                <h1 className=" text-2xl block mb-2 font-medium text-gray-900 dark:text-white">
                  {" "}
                  Notebook {book?.id}{" "}
                </h1>
              </div>
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
                  value={formik.values.file}
                  onChange={formik.handleChange}
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
                  <Tiptap
                    onChange={(html) => setEditorContent(html)}
                    text={text}
                  />
                </div>
              </div>
              <div className="flex md:flex-nowrap flex-wrap">
                <button
                  onClick={formik.handleSubmit}
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg  px-5 py-2.5 text-center me-2 mb-2 mt-16 cursor-pointer w-full text-xl font-bold"
                >
                  {" "}
                  Update{" "}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(!showModal)}
                  className="text-white bg-gradient-to-br from-red-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg  px-5 py-2.5 text-center me-2 mb-2 mt-4 md:mt-16 cursor-pointer w-full text-xl font-bold"
                >
                  {" "}
                  Delete{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const book = await showNotebook(params.slug);
    console.log(book);
    if (!book.id) {
      return { notFound: true };
    }

    return {
      props: {
        book,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
