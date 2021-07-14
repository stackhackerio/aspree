import { useForm } from "@formspree/react";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID;

function Thankyou() {
  return (
    <section>
      <div className="container flex flex-col items-center px-5 py-8 mx-auto">
        <div className="flex flex-col w-full text-left lg:text-center">
          <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 lg:text-3xl title-font">
            お問い合わせありがとうございます。
          </h1>
          <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-1/2">
            この度はお問い合わせメールをお送りいただきありがとうございます。
            <br />
            後ほど、担当者よりご連絡をさせていただきます。
            <br />
            今しばらくお待ちくださいますようよろしくお願い申し上げます。
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  const [state, handleSubmit] = useForm(formId!);

  if (state.succeeded) {
    return <Thankyou />;
  }

  return (
    <>
      <section>
        <div className="container flex flex-col items-center px-5 py-8 mx-auto">
          <div className="flex flex-col w-full text-left lg:text-center">
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 lg:text-3xl title-font">
              お問い合わせ
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-1/2">
              サイトに関するご質問などなんでもお寄せください。
            </p>
          </div>
        </div>
        <div className="items-center px-5 pb-12 lg:px-20">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2"
          >
            <div className="flex flex-wrap mb-2 -mx-3">
              <div className="w-full px-3 md:mb-0">
                <label
                  className="text-base leading-7 text-blueGray-500"
                  htmlFor="grid-title"
                >
                  お名前
                </label>
                <input
                  className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                  id="grid-title"
                  type="text"
                  name="title"
                  required={true}
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-2 -mx-3">
              <div className="w-full px-3 md:mb-0">
                <label
                  className="text-base leading-7 text-blueGray-500"
                  htmlFor="email"
                >
                  メールアドレス
                </label>
                <input
                  className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                  id="email"
                  type="email"
                  name="email"
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3">
                <label
                  className="text-base leading-7 text-blueGray-500"
                  htmlFor="description"
                >
                  内容
                </label>
                <textarea
                  className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand"
                  id="description"
                  rows={5}
                  name="description"
                  required={true}
                ></textarea>
              </div>
            </div>
            <div className="flex items-center w-full pt-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3 text-base font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 "
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
