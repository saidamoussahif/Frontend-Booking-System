import React, { useState } from "react";

function AddTravel() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <span className="flex justify-center items-start">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="bg-indigo-400 rounded text-blue-900 p-2 absolute top-20 left-80 "
        >
          Add Travel
        </button>
      </span>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Add Trip</h3>
                  <button
                    className="bg-transparent border-0 text-blue-800 float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-red-600 font-bold opacity-7 h-6 w-6 text-2xl block">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-blue-50 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-blue-900 text-sm font-bold mb-1">
                      Departing time
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-blue-900"
                    />
                    <label className="block text-blue-900 text-sm font-bold mb-1">
                      Arriving time
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-blue-900"
                    />
                    <label className="block text-blue-900 text-sm font-bold mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-blue-900"
                    />
                    <label className="block text-blue-900 text-sm font-bold mb-1">
                      Seats
                    </label>
                    <input
                      type="number"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-blue-900"
                    />
                    <label className="block text-blue-900 text-sm font-bold mb-1">
                      Status
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-blue-900"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-blue-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default AddTravel;
