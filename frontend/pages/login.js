import { loginUser } from "@/components/api/api";
import Alert from "@/components/layout/alert";
import Layout from "@/components/layout/layout";
import { useFormik } from "formik";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

export default function Login() {
  const [errorType, setErrorType] = useState();
  const searchParams = useSearchParams();
  const response = searchParams.get("response");

  const submitHandler = async (data) => {
    try {
      const res = await loginUser(JSON.stringify(data));

      console.log('res : ' + res.httpCode)
      if (res.token) {
        localStorage.setItem("auth_token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));

        window.location.href = "/";
      }
    } catch (err) {
      console.log("err : " + err)
      console.log("err : " + JSON.stringify(err))
      if (err.httpCode === 404) {
        setErrorType(() => "UserNotFound");
      } else if (err.httpCode === 401) {
        setErrorType(() => "IncorrectPassword");
      } else {
        alert("Server Error! Please Try again Later");
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required").email("Enter a valid Email"),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
          "Enter a valid Password"
        ),
    }),
    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };
      submitHandler(data);
    },
  });
  return (
    <Layout showFooter={false}>
      <section className="bg-gray-50 dark:bg-gray-900 w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">
          {response == "user-created" && (
            <div className="md:w-1/4 w-full">
              <Alert type="success" text="User Created SuccessFully" />
            </div>
          )}
          {errorType == "UserNotFound" && (
            <div className="md:w-1/4 w-full">
              <Alert type="error" text="User not found. <a href='/register' className='font-medium text-blue-600 hover:underline' > Register </a>" />
            </div>
          )}
          {errorType == "IncorrectPassword" && (
            <div className="md:w-1/4 w-full">
              <Alert type="error" text="Incorrect Password! Try again!" />
            </div>
          )}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-sm mt-2">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-red-500 text-sm mt-2">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/register"
                    className="font-medium text-blue-400 underline hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
