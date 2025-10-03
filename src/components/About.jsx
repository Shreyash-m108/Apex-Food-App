import { useEffect, useState } from "react";

const About = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://api.github.com/users/Shreyash-m108");
    const jsonData = await data.json();
    console.log(jsonData);
    setUserInfo(jsonData);
  };

  if (userInfo == null) {
    return <h1>Loading...</h1>;
  }

  const { avatar_url, bio, location, name, public_repos, html_url } = userInfo;

  return (
    <div className="relative min-h-screen isolate overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-indigo-200 via-fuchsia-200 to-pink-200 blur-3xl opacity-60" />

        <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-gradient-to-br from-purple-300 to-indigo-200 blur-2xl opacity-50 animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-pink-300 to-rose-200 blur-2xl opacity-50 animate-[float_12s_ease-in-out_infinite_reverse]" />
      </div>
      <div className="relative flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md rounded-3xl border border-white/30 bg-white/40 backdrop-blur-xl shadow-2xl p-8 text-center transform transition duration-500 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          {/* Avatar */}
          <img
            className="mx-auto h-32 w-32 rounded-full border-4 border-white shadow-lg object-cover"
            src={avatar_url}
            alt={name}
          />

          {/* Name */}
          <h1 className="mt-6 text-2xl font-bold text-gray-900 tracking-tight">
            {name}
          </h1>

          {/* Bio */}
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">{bio}</p>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            <div className="rounded-xl bg-white/50 backdrop-blur-md p-4 shadow-sm hover:shadow-md transition">
              <span className="block text-xl font-bold text-indigo-600">
                {public_repos}
              </span>
              <span className="block text-xs font-medium text-gray-600">
                Repositories
              </span>
            </div>
            <div className="rounded-xl bg-white/50 backdrop-blur-md p-4 shadow-sm hover:shadow-md transition">
              <span className="block text-xl font-bold text-indigo-600">
                {location}
              </span>
              <span className="block text-xs font-medium text-gray-600">
                Location
              </span>
            </div>
          </div>

          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 hover:shadow-lg active:scale-95 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
