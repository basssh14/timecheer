import React from "react"

export default function Todo() {
  return (
    <div className="w-full h-14 border-gray-200 border-b-2">
      <table className="w-full h-14 ">
        <td className="w-10/2 h-auto text-center relative">
          <input type="checkbox" className="centerSom w-4 h-4"></input>
        </td>
        <td className="w-180/2 h-auto text-center px-2 relative">
          <h1 className="text-xl w-full absolute centerVertical md:text-lg sm:text-base rsm:text-sm">
            Go do the laundry
          </h1>
        </td>
        <td className="w-10/2 h-auto text-center relative">
          <button className="centerSom text-xl">X</button>
        </td>
      </table>
    </div>
  )
}
