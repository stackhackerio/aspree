import Image from "next/image";

import Subscribe from "./subscribe";
import HeroImage from "./hero-image";
import KeyIcon from "./icons/key";
import Check from "./icons/check";
import Cross from "./icons/cross";
import notion from "../public/images/notion.svg";
import jb from "../public/images/jb_rider.svg";
import marvel from "../public/images/marvel.svg";
import paypal from "../public/images/paypal.svg";
import photo from "../public/images/photo.jpg";
import photo2 from "../public/images/photo2.jpg";
import avator from "../public/images/avator.jpg";
import avator2 from "../public/images/avator2.jpg";

export default function Home() {
  return (
    <>
      <section className="text-blueGray-700 py-6 lg:py-24">
        <div className="container flex flex-col px-5 mx-auto lg:items-center">
          <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            <h1 className="mb-6 text-2xl font-black font-semibold tracking-tighter text-black sm:text-6xl title-font">
              センタリングされた
              <br className="md:hidden" />
              ミドルレングスの見出し
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
              もうすぐ発売なので、100％製品に集中しなければなりません。
              ランディングページのデザイン、コーディング、テストに貴重な時間を割かないでください。
            </p>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center px-10 mx-auto rounded-lg -mt-24 md:-mt-32 lg:-mt-40 lg:px-40 ">
          <HeroImage />
        </div>
      </section>
      <section className="text-blueGray-700 py-6 lg:py-20">
        <div className="container flex flex-col items-center px-5 mx-auto">
          <div className="flex flex-col w-full text-left lg:text-center">
            <div className="grid w-full grid-cols-2 gap-8 mx-auto my-8 text-center lg:grid-cols-4 lg:w-1/2">
              <div className="flex items-center justify-center ">
                <Image
                  src={notion}
                  alt="Notion Logo"
                  className="block object-contain h-12"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={jb}
                  alt="JetBrain Logo"
                  className="block object-contain h-12"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={marvel}
                  alt="Marvel Logo"
                  className="block object-contain h-12"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src={paypal}
                  alt="Paypal Logo"
                  className="block object-contain h-12"
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-blueGray-700 py-6 lg:py-20">
        <div className="flex flex-col px-5 mb-10 mx-auto lg:items-center">
          <div className="flex flex-col w-full text-left lg:text-center">
            <h2 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">
              ここにヘッダーがはいります
            </h2>
            <h1 className="mb-6 text-2xl font-black font-semibold tracking-tighter text-black sm:text-5xl title-font">
              センタリングされた
              <br className="md:hidden" />
              ミドルレングスの見出し
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
              もうすぐ発売なので、100％製品に集中しなければなりません。
              ランディングページのデザイン、コーディング、テストに貴重な時間を割かないでください。
            </p>
          </div>
        </div>
        <div className="items-center px-5 mx-auto lg:px-24">
          <div className="flex flex-wrap text-left">
            <div className="w-full p-4 mx-auto lg:w-1/3">
              <div className="p-4 lg:p-8 rounded-xl bg-blueGray-50">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
                  <KeyIcon />
                </div>
                <h1 className="mx-auto mb-8 text-xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                  ショートレングスの見出し
                </h1>
                <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700">
                  もうすぐ発売なので、100％製品に集中しなければなりません。
                  ランディングページのデザイン、コーディング、テストに貴重な時間を割かないでください。
                </p>
              </div>
            </div>
            <div className="w-full p-4 mx-auto lg:w-1/3">
              <div className="p-4 lg:p-8 rounded-xl bg-blueGray-50">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
                  <KeyIcon />
                </div>
                <h1 className="mx-auto mb-8 text-xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                  ショートレングスの見出し
                </h1>
                <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">
                  もうすぐ発売なので、100％製品に集中しなければなりません。
                  ランディングページのデザイン、コーディング、テストに貴重な時間を割かないでください。
                </p>
              </div>
            </div>
            <div className="w-full p-4 mx-auto lg:w-1/3">
              <div className="p-4 lg:p-8 rounded-xl bg-blueGray-50">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
                  <KeyIcon />
                </div>
                <h1 className="mx-auto mb-8 text-xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                  ショートレングスの見出し
                </h1>
                <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">
                  もうすぐ発売なので、100％製品に集中しなければなりません。
                  ランディングページのデザイン、コーディング、テストに貴重な時間を割かないでください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-blueGray-700 py-6 lg:py-20">
        <div className="container flex flex-col items-center px-5 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">
              タグがはいります
            </h2>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-black md:text-5xl title-font">
              ミドルレングスの見出し
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
              数日ではなく数分でMVPをローンチ。WTは、ランディングページのセクションを変更できます。
            </p>
          </div>
          <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
            <Image
              className="object-cover object-center rounded-lg "
              alt="Photo"
              src={photo}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <section className="text-blueGray-700 py-6 lg:py-20">
        <div className="container flex flex-col px-5 mx-auto lg:items-center">
          <div className="flex flex-col w-full mb-8 text-left lg:text-center">
            <h2 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">
              ここにヘッダーがはいります
            </h2>
            <h1 className="mb-6 text-2xl font-black font-semibold tracking-tighter text-black sm:text-5xl title-font">
              センタリングされた
              <br className="md:hidden" />
              ミドルレングスの見出し
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
              もうすぐ発売なので、100％製品に集中しなければなりません。
              ランディングページのデザイン、コーディング、テストなど、貴重な時間を無駄にしてはいけません。
            </p>
          </div>
        </div>
        <div className="container px-5 mx-auto lg:px-24">
          <div className="flex flex-wrap">
            <div className="flex flex-col w-full mb-12 text-left lg:text-center lg:w-1/2">
              <div className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8">
                <Image
                  alt="testimonial"
                  className="rounded-full"
                  src={avator}
                  placeholder="blur"
                />
              </div>
              <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-1/2">
                もうすぐ発売なので、100％製品に集中しなければなりません。
                ランディングページのデザイン、コーディング、テストなど、貴重な時間を無駄にしてはいけません。
              </p>
              <h2 className="mt-4 text-xs font-semibold tracking-widest text-black uppercase title-font">
                鈴木太郎
                <span className="font-semibold text-blueGray-500 lg:mb-0">
                  Acme&apos;s 広報
                </span>
              </h2>
            </div>
            <div className="flex flex-col w-full mb-12 text-left lg:text-center lg:w-1/2">
              <div className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8">
                <Image
                  alt="testimonial"
                  className="rounded-full"
                  src={avator2}
                  placeholder="blur"
                />
              </div>
              <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-1/2">
                もうすぐ発売なので、100％製品に集中しなければなりません。
                ランディングページのデザイン、コーディング、テストなど、貴重な時間を無駄にしてはいけません。
              </p>
              <h2 className="mt-4 text-xs font-semibold tracking-widest text-black uppercase title-font">
                鈴木太郎
                <span className="font-semibold text-blueGray-500 lg:mb-0">
                  Acme&apos;s 広報
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="text-blueGray-700 py-6 md:py-20">
        <div className="container flex flex-col px-5 mx-auto lg:items-center">
          <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            <h2 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">
              ここにヘッダーがはいります
            </h2>
            <h1 className="mb-6 text-2xl font-black font-semibold tracking-tighter text-black sm:text-5xl title-font">
              センタリングされた
              <br className="md:hidden" />
              ミドルレングスの見出し
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
              もうすぐ発売なので、100％製品に集中しなければなりません。
              ランディングページのデザイン、コーディング、テストなど、貴重な時間を無駄にしてはいけません。
            </p>
          </div>
        </div>
        <div className="container items-center px-5 py-6 md:py-10 lg:px-20">
          <div className="flex flex-wrap items-center justify-center w-full gap-4">
            <div className="w-full xl:w-1/4 md:w-2/6">
              <div className="relative flex flex-col h-full p-8 transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl">
                <h2 className="mb-4 text-sm font-medium tracking-widest text-black uppercase title-font">
                  スポンサーシップ
                </h2>
                <p className="flex items-center mb-8 text-base font-medium leading-relaxed text-blueGray-700">
                  新しいビジネスを始めるための基本機能
                </p>
                <strong className="flex items-end text-3xl font-black leading-none text-black lg:text-4xl ">
                  <span>1,000円</span>
                </strong>
                <p className="flex items-center mt-8 mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                    <Check />
                  </span>
                  ニュースレターのトップ
                </p>
                <p className="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white bg-blueGray-500 rounded-full">
                    <Cross />
                  </span>
                  1 ニュースレターの発行
                </p>
                <p className="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white bg-blueGray-500 rounded-full">
                    <Cross />
                  </span>
                  1.6k+ 購読者
                </p>
                <button
                  role="button"
                  className="w-full px-4 py-2 mt-6 text-base font-medium text-blue-600 transition duration-500 ease-in-out transform bg-blue-100 rounded-lg hover:bg-blue-300 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                >
                  今すぐ購入
                </button>
              </div>
            </div>
            <div className="w-full xl:w-1/4 md:w-2/6">
              <div className="relative flex flex-col h-full p-8 transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl ">
                <h2 className="mb-4 text-sm font-medium tracking-widest text-black uppercase title-font">
                  スポンサーシップ
                </h2>
                <p className="flex items-center mb-8 text-base font-medium leading-relaxed text-blueGray-700">
                  新しいビジネスを始めるための基本機能
                </p>
                <strong className="flex items-end text-3xl font-black leading-none text-black lg:text-4xl ">
                  <span>5,000円</span>
                </strong>
                <p className="flex items-center mt-8 mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                    <Check />
                  </span>
                  ニュースレターのトップ
                </p>
                <p className="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                    <Check />
                  </span>
                  1 ニュースレターの発行
                </p>
                <p className="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                    <Check />
                  </span>
                  1.6k+ 購読者
                </p>
                <button
                  role="button"
                  className="w-full px-4 py-2 mx-auto mt-6 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-700 "
                >
                  今すぐ購入
                </button>
              </div>
            </div>
            <div className="w-full xl:w-1/4 md:w-2/6">
              <div className="relative flex flex-col h-full p-8 transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl">
                <h2 className="mb-4 text-sm font-medium tracking-widest text-black uppercase title-font">
                  スポンサーシップ
                </h2>
                <p className="flex items-center mb-8 text-base font-medium leading-relaxed text-blueGray-700">
                  新しいビジネスを始めるための基本機能
                </p>
                <strong className="flex items-end text-3xl font-black leading-none text-black lg:text-4xl ">
                  <span>10,000円</span>
                </strong>
                <p className="flex items-center mt-8 mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                    <Check />
                  </span>
                  ニュースレターのトップ
                </p>
                <p className="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white bg-blueGray-500 rounded-full">
                    <Cross />
                  </span>
                  1 ニュースレターの発行
                </p>
                <p className="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white bg-blueGray-500 rounded-full">
                    <Cross />
                  </span>
                  1.6k+ 購読者
                </p>
                <button
                  role="button"
                  className="w-full px-4 py-2 mt-6 text-base font-medium text-blue-600 transition duration-500 ease-in-out transform bg-blue-100 rounded-lg hover:bg-blue-300 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                >
                  今すぐ購入
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-blueGray-700 py-6 lg:py-20">
        <div className="container flex flex-col items-start px-5 mx-auto lg:items-center md:flex-row lg:px-28">
          <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
            <Image
              className="object-cover object-center rounded"
              alt="Photo2"
              placeholder="blur"
              src={photo2}
            />
          </div>
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <h1 className="mb-8 text-2xl font-bold tracking-tighter text-black lg:text-left lg:text-5xl title-font">
              ミドルレングスの見出し
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-blueGray-700 ">
              数日ではなく数分でMVPをローンチ。WTは、ランディングページのセクションを変更できます。
            </p>
            <Subscribe />
          </div>
        </div>
      </section>
    </>
  );
}
