export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col justify-start">
      <div className="flex flex-row justify-center items-center mt-[20%]">
        <button className="h-[200px] w-[400px] animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
          To Get Email notification from <a href="#">/api/notification</a>
        </button>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
    </main>
  );
}
