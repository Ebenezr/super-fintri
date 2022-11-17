const Status = () => {
  return (
    <div className="border-t-2 border-b-2 mt-8">
      {/*cards wrapper*/}
      <div className="grid grid-cols-3 py-6">
        {/*card*/}

        <div className="flex">
          {/*text content*/}
          <div className="flex flex-col gap-2">
            <p className="text-infoDark font-semibold">Task In Progress</p>
            <div className="flex justify-between">
              <p className="text-accent text-xl font-bold">210</p>
              <small className="bg-green-100 px-3 rounded-full font-bold flex items-center text-green-800">
                23
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-green-800"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </small>
            </div>
            <p className="text-infoDark font-semibold">Current Month</p>
          </div>
          {/*graph*/}
          <div></div>
        </div>

        {/*card*/}
        <div className="flex">
          {/*text content*/}
          <div className="flex flex-col gap-2">
            <p className="text-infoDark font-semibold">Task Completed</p>
            <div className="flex justify-between">
              <p className="text-violet-800 text-xl font-bold">185</p>
              <small className="bg-violet-100 px-3 rounded-full font-bold flex items-center text-violet-800">
                45
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-violet-800"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </small>
            </div>
            <p className="text-infoDark font-semibold">Current Month</p>
          </div>
          {/*graph*/}
          <div></div>
        </div>
        {/*card*/}
        <div className="flex">
          {/*text content*/}
          <div className="flex flex-col gap-2">
            <p className="text-infoDark font-semibold">Monthly Tasks Summary</p>
            <div className="flex justify-between">
              <p className="text-emerald-400 font-bold text-xl">1240</p>
              <small className="bg-emerald-100 px-3 rounded-full font-bold flex items-center text-emerald-800">
                154
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-green-800"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </small>
            </div>
            <p className="text-infoDark font-semibold">Current Month</p>
          </div>
          {/*graph*/}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Status;
