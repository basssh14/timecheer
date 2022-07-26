import React from "react"

export default function Header({ changeLoginSuccess }) {
  return (
    <div className="w-full h-20/2 bg-black px-4 relative">
      <div className="w-auto h-auto  float-left absolute centerVertical">
        <h1 className="orbitronLetter text-4xl uppercase text-white tracking-widest sm:text-2xl rsm:text-base usm:text-small">
          Timecheer
        </h1>
      </div>
      <div className="w-2/5 float-right h-full  inline-block  relative">
        <div className="h-full w-20/2 inline-block relative md:absolute md:right-14">
          <div className="w-14 h-14 rounded-full bg-white centerSom profileImage sm:w-12 sm:h-12 rsm:h-10 rsm:w-10"></div>
        </div>
        <div className="h-full w-4/5 inline-block md:hidden">
          <div className="w-full h-full grid grid-cols-2">
            <div className="h-full col-span-1  relative">
              <h2 className="w-full text-left pl-2 absolute centerVertical text-white text-xl truncate lg1:pl-4 md:">
                Hi, Sebastian
              </h2>
            </div>
            <div className="h-full col-span-1  ">
              <h2 className="w-full text- pl-2 absolute centerVertical text-white text-xl truncate">
                Calendar
              </h2>
            </div>
          </div>
        </div>
        <div className="h-full w-20/2   inline-block relative md:float-right sm:w-1/6">
          <img
            src="https://img.icons8.com/android/24/ffffff/menu.png"
            className="centerSom"
            onClick={() => {
              changeLoginSuccess()
            }}
          />
        </div>
      </div>
    </div>
  )
}
