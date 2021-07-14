import { useForm } from "@formspree/react";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_SUBSCRIBE_FORM_ID;

function Thankyou() {
  return (
    <span className="w-full flex justify-center items-center px-6 py-2 mt-auto text-blueGray-500 text-xl transition duration-500 ease-in-out transform rounded-lg ring-offset-current ring-offset-2">
      Thankyou&nbsp;🎉
    </span>
  );
}

export default function Subscribe() {
  const [state, handleSubmit] = useForm(formId!);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col w-full gap-2 md:justify-start md:flex-row">
        {state.succeeded ? (
          <Thankyou />
        ) : (
          <>
            <input
              className="flex-grow w-full px-4 py-2 mb-2 text-base text-black transition duration-650 ease-in-out border-white transform rounded-lg lg:w-auto bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              placeholder="メールアドレス"
              type="email"
              name="email"
              disabled={state.submitting}
              required={true}
            />
            <button
              type="submit"
              className="flex justify-center items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
            >
              購読する
            </button>
          </>
        )}
      </div>
      <p className="w-full mt-2 mb-8 text-sm text-left text-blueGray-600">
        私は99の問題を抱えていますが、ブロックは一つもありません。
      </p>
    </form>
  );
}
