import { useEffect, useRef, useLayoutEffect } from "react";

//gsap
import gsap from "gsap";

//links
import { Link } from "react-router-dom";

// imgs
import mona from "../assets/mona.png";
import gui from "../assets/gui.png";
import savio from "../assets/savio.png";
import manu from "../assets/manu.png";
import logoCm from "../assets/cmlogo.png";
//video
import videoBg from "../assets/bgmove.mp4";

//toastfy-hot
// import toast from "react-hot-toast";

export function Home() {
  const imgMona = useRef();
  const imgGuilherme = useRef();
  const imgSavio = useRef();
  const imgManu = useRef();
  const container = useRef();
  const videoRef = useRef();
  const cmLogo = useRef();

  const useLogoLayoutEffect =
    typeof window === "undefined" ? useLayoutEffect : useEffect;

  useLogoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgMona.current, {
        opacity: 1,
        left: 125,
        duration: 1,
        onComplete: () => {
          gsap.to(imgGuilherme.current, {
            opacity: 1,
            left: 125,
            duration: 1,
            onComplete: () => {
              gsap.to(imgSavio.current, {
                opacity: 1,
                left: 125,
                duration: 1,
                onComplete: () => {
                  gsap.to(imgManu.current, {
                    opacity: 1,
                    left: 125,
                    duration: 1,

                    onComplete: () => {
                      gsap.to(imgMona.current, {
                        opacity: 0,
                        left: 125,
                        duration: 1,
                        onComplete: () => {
                          gsap.to(imgGuilherme.current, {
                            opacity: 0,
                            left: 125,
                            duration: 1,
                            onComplete: () => {
                              gsap.to(imgSavio.current, {
                                opacity: 0,
                                left: 125,
                                duration: 1,
                                onComplete: () => {
                                  gsap.to(imgManu.current, {
                                    opacity: 0,
                                    left: 125,
                                    duration: 1,
                                    onComplete: () => {
                                      gsap.to(cmLogo.current, {
                                        xPercent: -50,
                                        yPercent: -50,
                                        opacity: 1,
                                        left: "50%",
                                        top: "50%",
                                        duration: 1,
                                      });
                                    },
                                  });
                                },
                              });
                            },
                          });
                        },
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-neutral-800 flex flex-col h-screen relative">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      <div
        ref={container}
        className="flex relative flex-col min-w-min w-9/12 m-auto items-center justify-center "
      >
        <img
          ref={imgMona}
          className="max-w-40 mt-5 opacity-0  "
          src={mona}
          alt=""
        />
        <img
          ref={imgGuilherme}
          className="max-w-40 mt-5 opacity-0"
          src={gui}
          alt=""
        />
        <img
          ref={imgSavio}
          className="max-w-40 mt-5 opacity-0"
          src={savio}
          alt=""
        />
        <img
          ref={imgManu}
          className="max-w-36 my-5 opacity-0"
          src={manu}
          alt=""
        />
        <img
          ref={cmLogo}
          src={logoCm}
          alt=""
          className="max-w-80 min-w-36 my-5 opacity-0 absolute sm:max-w-96"
        />
      </div>
      <div className="flex items-center justify-center mb-10 z-50">
        <Link to={"/agendamento"}>
          <button
            type="button"
            class="text-gray-900  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Iniciar agendamento
          </button>
        </Link>
        <Link to={"/admin"}>
          <button
            type="button"
            class="text-gray-900  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </button>
        </Link>
      </div>
    </section>
  );
}
