import { useEffect, useState } from "react";
import "./App.css";
import FetchData from "./utils/Fetch";

function App() {
  const [user, setUser] = useState("");
  const [found, setFound] = useState(null);

  const formatted = found
  ? new Date(found.created_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  : "";

  useEffect(() => {
    FetchData(`https://api.github.com/users/${user}`).then((res) =>
      setFound(res),
    );
  }, [user]);

  console.log(found);

  return (
    <main className="bg-[#141C2F] flex flex-col justify-center items-center gap-10 w-full h-screen">
      <div>
        <p>DevFinder</p>
        <button></button>
      </div>
      <form className="flex w-full justify-center items-center">
        <input
          className="bg-[#202947] p-3 rounded-xl w-[50%]"
          onChange={(e) => setUser(e.target.value)}
          type="search"
          name="userName"
          placeholder="Search GitHub username..."
        />
      </form>

      <div className="flex justify-center rounded-xl items-center w-full">
        {user === "" ? (
          <div className="flex w-[50%] bg-[#202947] ">
            <div className="bg-white rounded-full p-2  h-fit">
              <img src="public/octocat.png" className="w-20 h-fit " alt="" />
            </div>
            <div>
              <div>
                <p>{}</p>
                <p>Joined 17 Oct 2008</p>
              </div>
              <p>octocat</p>
              <p>This profile has no bio</p>
              <div>
                <div>
                  <p>Repos</p>
                  <p>8</p>
                </div>
                <div>
                  <p>Followers</p>
                  <p>6767</p>
                </div>
                <div>
                  <p>Following</p>
                  <p>9</p>
                </div>
              </div>

              <div>
                <div>
                  <h1>San Francisco</h1>
                  <a href="https://github.blog">https://github.blog</a>
                </div>
                <div>
                  <h1>Not Available</h1>
                  <h1>github</h1>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-[50%] gap-20 bg-[#202947] ">
            <div className="bg-white rounded-full p-2 overflow-hidden h-fit">
              <img src={found.avatar_url} className="w-20 h-fit rounded-full " alt="" />
            </div>
            <div>
              <div>
                <p>{found.login}</p>
                <p>{formatted}</p>
              </div>
              <p>{found.lgoin}</p>
              <p>{found.bio}</p>
              <div>
                <div>
                  <p>Repos</p>
                  <p></p>
                </div>
                <div>
                  <p>Followers</p>
                  <p>{found.followers}</p>
                </div>
                <div>
                  <p>Following</p>
                  <p>{found.following}</p>
                </div>
              </div>

              <div>
                <div>
                  <h1>San Francisco</h1>
                  <a href={found.repos_url}>View Profile</a>
                </div>
                <div>
                  <h1>
                    {found.twitter_username
                      ? found.twitter_username
                      : "Not Available"}
                  </h1>
                  <h1>github</h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
