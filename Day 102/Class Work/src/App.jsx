import "./App.css";

function App() {
  return (
    <main className="bg-[#F6D050] w-full h-screen flex justify-center items-center">
      <div className="bg-white w-100 h-125 flex flex-col justify-center items-center rounded-[10px] shadow-[5px_5px_5px]">
        <div className="w-[90%] gap-2.5 flex flex-col ">
          <img
            className="rounded-[10px]"
            src="../public/illustration-article.svg"
            alt=""
          />
          <p className="bg-[#F6D050] w-fit p-1 rounded-[5px] text-[19px] font-semibold">
            Learning
          </p>
          <p className="">Published 21Dec 2023</p>
          <p className="text-black font-extrabold text-2xl">HTML & CSS foundations</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
            aperiam.
          </p>

          <div className="flex gap-3 items-center">
            <img src="../public/image-avatar.webp" alt="" />
            <p className="font-bold">Greg Heeper</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
