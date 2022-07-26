import React from "react"

export default function Landing({ changeLoginSuccess }) {
  return (
    <div className="w-full h-full landscapeImage relative">
      <div className="h-3/4 w-1/3 centerSom lg1:w-1/2 md2:w-3/5 sm2:w-full sm2:h-full">
        <div className="w-full h-full float-right relative bg-gradient-to-tl from-yellow-200 via-red-300 to-blue-400 opacity-80 px-2 pt-8">
          <div className="w-full h-auto absolute centerSom px-2">
            <div className="w-full h-24 border-black border-b-2 logoBackground "></div>
            <div className="w-full opacity-100 ">
              <h1 className="w-auto mt-4 text-black text-2xl uppercase font-medium text-center rsm:text-lg usm:text-base">
                Start managing your time now
              </h1>
              <form
                action="http://localhost:5000/api/auth/google"
                className="text-center bg-opacity-100 "
              >
                <button
                  onClick={() => changeLoginSuccess()}
                  className="bg-black !bg-opacity-100 text-white w-1/2 mx-2 h-14 pt-1 uppercase mt-8 text-xl font-semibold rounded-full button-shadow outline-button hover:bg-red-200 hover:text-black rsm:w-4/5"
                >
                  <img
                    src="https://img.icons8.com/fluent/48/000000/google-logo.png"
                    className="inline w-8 mb-1"
                    alt="googleLogo"
                  />
                  Google
                </button>
                <button
                  className="bg-black bg-opacity-100 text-white w-1/2 mx-2 h-14 pt-1 uppercase mt-8 text-xl font-semibold rounded-full button-shadow outline-button hover:bg-red-200 hover:text-black rsm:w-4/5"
                  type="submit"
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/facebook-new.png"
                    className="inline w-8 mb-1"
                    alt="facebook logo"
                  />
                  Facebook
                </button>
              </form>
              <div className="border-black border-t-2 mt-10 pt-4">
                <p className="text-center w-5/6 mx-auto text-rsmall">
                  By clicking on register you accept the terms and contions of
                  the site, for more information about this please refere to the{" "}
                  <a href="#" className="underline">
                    terms and contions
                  </a>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
