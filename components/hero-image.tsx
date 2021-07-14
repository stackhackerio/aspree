import Image from "next/image";
import dashboard from "../public/images/dashboard.png";

export default function HeroImage() {
  return (
    <>
      <style jsx>
        {`
          .wrapper {
            transform: perspective(1000px) rotateX(30deg) rotateY(0) rotateZ(0)
              translateZ(-50px);
            transform-origin: center bottom;
          }
        `}
      </style>
      <div className="wrapper">
        <Image
          className="object-cover object-center w-full shadow-xl rounded-xl"
          alt="hero"
          src={dashboard}
          placeholder="blur"
        />
      </div>
    </>
  );
}
