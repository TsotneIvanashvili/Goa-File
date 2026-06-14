import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [text, setText] = useState("");

  const totalCharacters = text.length;

  const totalWords = text.trim() === "" ? 0 : text.trim().split(" ").filter(word => word !== "").length;

  const totalSentences = text.trim() === "" ? 0 : text.replaceAll("!", ".").replaceAll("?", ".").split(".").filter((sentence) => sentence.trim() !== "").length;

  return (
    <section className="flex justify-center items-center pt-5">
      <main className="w-[70%] h-full flex flex-col items-center gap-20">
        <nav className="flex items-center p-5 justify-between w-full">
          <div className="flex items-center gap-5">
            <img src="../public/logo.svg" alt="" />
            <p className="text-[#E4E4EF] font-medium text-2xl">
              Character Counter
            </p>
          </div>

          <div>
            <button className="bg-[#2A2B37] p-3 rounded-[10px]">
              <img src="./public/Settings-Icon.svg" alt="" />
            </button>
          </div>
        </nav>

        <p className="text-[70px] text-[#E4E4EF] w-175 text-center font-bold">
          Analyze your text in real-time.
        </p>

        <form className="w-full">
          <textarea
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-[#2A2B37] h-50 w-full focus:outline-0 text-[#E4E4EF] text-[20px] rounded-xl p-5 resize-none"
            type="text"
            placeholder="Start typing here… (or paste your text)"
          />
          <div className="flex gap-10 items-center">
            <div className="flex gap-3 items-center">
              <input
                className="bg-transparent outline-amber-600"
                name="spaces"
                type="checkbox"
              />
              <label className="text-[#E4E4EF]" htmlFor="spaces">
                Exclude Spaces
              </label>
            </div>

            <div className="flex gap-3 items-center">
              <input className="" name="limit" type="checkbox" />
              <label className="text-[#E4E4EF]" htmlFor="limit">
                Set Character Limit
              </label>
            </div>
          </div>
        </form>

        <div className="flex gap-5 w-full">
          <div className="bg-[#D3A0FA] flex items-center justify-between w-full rounded-xl overflow-hidden">
            <div className="p-5 flex flex-col gap-3.75">
              <p className="text-[#12131A] text-7xl">{totalCharacters}</p>
              <p className="text-[#12131A]">Total Characters</p>
            </div>

            <img src="../public/Vector.png" alt="" />
          </div>

          <div className="bg-[#FF9F00] flex items-center justify-between w-full rounded-xl overflow-hidden">
            <div className="p-5 flex flex-col gap-3.75">
              <p className="text-[#12131A] text-7xl">{totalWords}</p>
              <p className="text-[#12131A]">Word Count</p>
            </div>

            <img src="../public/shape-29.png" alt="" />
          </div>

          <div className="bg-[#FE8159] flex items-center justify-between w-full rounded-xl overflow-hidden">
            <div className="p-5 flex flex-col gap-3.75">
              <p className="text-[#12131A] text-7xl">{totalSentences}</p>
              <p className="text-[#12131A]">Sentence Count</p>
            </div>

            <img src="../public/shape-111.png" alt="" />
          </div>
        </div>

        <div className="flex justify-start w-full flex-col gap-5">
          <p className="text-2xl text-[#E4E4EF] font-semibold">
            Letter Density
          </p>
          <p className="text-[#E4E4EF] ">
            No characters found. Start typing to see letter density.
          </p>
        </div>
      </main>
    </section>
  );
}

export default App;
