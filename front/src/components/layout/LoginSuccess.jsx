import React, { useState } from "react"
import Header from "../individual/Header"
import CalendarDay from "../individual/CalendarDay"
import DayTodos from "../individual/DayTodos"
export default function LoginSuccess({ changeLoginSuccess }) {
  const [visibilityOfDayTodos, setVisibilityOfDayTodos] = useState(false)
  const changeVisibilityOfDayTodos = () => {
    setVisibilityOfDayTodos(!visibilityOfDayTodos)
  }
  const days = [...Array(31).keys()].map((x) => x + 1)
  return (
    <div className="w-full h-full bg-white relative">
      <Header changeLoginSuccess={changeLoginSuccess} />
      <div className="w-full h-180/2 patternBg px-2">
        <div className="w-full h-20/2 border-black border-b-2 relative">
          <div className="w-14 h-full  inline-block relative sm:w-10 ">
            <img
              src="https://img.icons8.com/fluent-systems-regular/48/000000/less-than.png"
              className="w-10 h-10 centerSom sm:w-8 sm:h-8"
            />
          </div>
          <div className="w-14 h-full  inline-block relative sm:w-10">
            <img
              src="https://img.icons8.com/fluent-systems-regular/48/000000/more-than.png"
              className="w-10 h-10 centerSom sm:w-8 sm:h-8"
            />
          </div>
          <h1 className="text-3xl absolute centerVertical ml-4 inline-block tracking-normal uppercase sm:text-2xl">
            July
          </h1>
        </div>
        <div className="w-full h-180/2 border-black border-t-2">
          <div className="w-full h-full grid grid-cols-10 gap-x-2 gap-y-10 grid-rows-4 pt-2 overflow-y-scroll lg1:grid-cols-8 md2:grid-cols-6 md2:grid-rows-6 xl:gap-y-32 md2:gap-y-32 sm2:grid-cols-5 sm2:grid-rows-7 sm2:gap-y-36 sm:grid-cols-4 sm:grid-rows-8 rsm:grid-cols-3 rsm:grid-rows-10 rsm:gap-y-36 usm:grid-cols-2">
            {days.map((number) => (
              <CalendarDay
                number={number}
                status={number % 3 === 0 ? "fail" : "success"}
                changeVisibilityOfDayTodos={changeVisibilityOfDayTodos}
              />
            ))}
          </div>
        </div>
      </div>
      <DayTodos
        visibility={visibilityOfDayTodos}
        changeVisibilityOfDayTodos={changeVisibilityOfDayTodos}
      />
    </div>
  )
}
