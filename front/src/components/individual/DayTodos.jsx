import React from "react"
import Todo from "./Todo"

export default function DayTodos({ visibility, changeVisibilityOfDayTodos }) {
  return (
    <div
      className={`w-1/2 h-2/3 bg-white border-black border-2 centerSom rounded-lg px-2 ${
        visibility ? "" : "hidden"
      } lg3:w-2/3 sm2:w-full sm2:h-full`}
    >
      <div className="w-full h-1/5 border-black border-b-4 relative">
        <button
          className="text-3xl text-black absolute top-1 right-4 hover:text-gray-300 z-50"
          onClick={() => {
            changeVisibilityOfDayTodos()
          }}
        >
          X
        </button>
        <h1 className="text-6xl text-black w-full text-center absolute centerVertical">
          1
        </h1>
      </div>
      <div className="w-full h-1/6 ">
        <form className="w-full h-full relative">
          <div className="w-full centerSom px-3">
            <input
              type="text"
              name="title"
              id="todo"
              className="rounded-xl w-180/2 border-2 h-11 border-black px-2 md3:w-87/1 md:w-4/5 rsm:w-140/2"
              placeholder="Add new todo here..."
            />
            <button
              type="submit"
              className="bg-white w-14 border-2 ml-2 border-black py-2 px-3 rounded-xl text-center transition duration-200 ease-in-out hover:bg-black hover:text-white rsm:px-0 md3:w-20/2 md3:float-right md:w-1/6 rsm:w-1/4"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="w-full h-3/5  overflow-y-scroll">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  )
}
