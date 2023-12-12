import "./globals.css";

export default function Home() {
  return (
    <>
      <div
        id="containerMain"
        className="flex items-center justify-center w-screen h-screen bg-yellow-400 flex-col gap-10"
      >
        <div
          id="yellowCircle"
          className="absolute top-[19%] left-50 w-[610px] h-[610px] rounded-full bg-yellow-400 z-10"
        ></div>

        <div
          id="circle"
          className="absolute top-[17%] left-50 w-[650px] h-[650px] 
                        rounded-full bg-green-800 z-0 flex items-center justify-center
                        animate-spin"
        >
          <div id="pasek1" className="bg-yellow-400 h-[660px] w-[220px]"></div>
          <div
            id="pasek2"
            className="bg-yellow-400 h-[220px] w-[660px]
                        absolute left-50"
          ></div>
        </div>

        <div
          id="conatainer1"
          className="flex items-center justify-center w-[550px] h-[550px] 
                    flex-col gap-2.5 bg-slate-950 rounded-full z-20"
        >
          <div
            id="div1"
            className="bg-green-600 w-80 h-60 hover:bg-green-900 
                    text-4xl text-center cursor-wait rounded-full
                    hover:text-white border-4 border-green-900
                    hover:border-white z-30"
          >
            DIV 1
          </div>

          <div
            id="div2"
            className="bg-blue-500 w-80 h-60 text-center text-4xl 
                    cursor-help hover:bg-blue-900
                     hover:text-white rounded-full
                     border-4 border-blue-900
                     hover:border-white z-30"
          >
            DIV 2
          </div>
        </div>
      </div>
    </>
  );
}
