import React from "react"

export default function CalendarDay({
  number,
  status,
  changeVisibilityOfDayTodos,
}) {
  return (
    <div
      className=" col-span-1 border-black border-4 rounded-md h-36 relative md2:h-28"
      onClick={() => {
        changeVisibilityOfDayTodos()
      }}
    >
      <h3 className="text-7xl text-black centerSom">{number}</h3>
      <div
        className={`absolute bottom-0 w-full h-3 ${
          status === "fail" ? "failDiv" : "successDiv"
        }`}
      ></div>
    </div>
  )
}
