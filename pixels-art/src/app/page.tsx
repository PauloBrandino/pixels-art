export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="relative flex text-zinc-50 flex-col bg-[url(../assets/bg-stars.svg)] border-r border-white/10 bg-cover px-28 py-16 overflow-hidden justify-between">
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-700 opacity-50 blur-full" />

          {/* Logo */}
          <div>
            <h1 className="text-blue-800 font-extrabold text-2xl">
              PixelDraft
            </h1>
          </div>

          {/* HERO */}
          <div className="space-y-5">
            {/* FRASE PRINCIPAL */}
            <div className="max-w-[800px]">
              <h1 className="text-8xl leading-tight font-light">DRAW</h1>
              <h1 className="text-9xl text-blue-800 font-bold">YOUR PIXEL</h1>
            </div>

            {/* texto */}
            <div className="max-w-[500px]">
              <p className="text-lg leading-relaxed">
               Spark your imagination, unleash your creativity and make your mark in the digital universe. Create unique works of art!
              </p>
            </div>

            {/* Call to Action */}
            <div>
              <h1 className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600">
                Start Now {'>>'}
              </h1>
            </div>
          </div>

          {/* FOOTER */}
          <div>
            <p>
              created by <span className="text-lg leading-relaxed font-medium">Paulo Brandino</span> 
            </p>
          </div>
        
      </div>

      {/* Rigth */}
      <div className="relative flex flex-col justify-center items-center bg-[url(../assets/bg-stars.svg)]">
        <div className='absolute flex bg-zinc-800 h-[450px] w-[480px] flex-col justify-between rounded-lg shadow-md bg-opacity-50'>
          {/* Welcome */}
          <div className="flex space-y-1 flex-col items-center text-gray-50 p-2">
            <h1 className="text-base leading-tight uppercase">
              Welcome
            </h1>
            <h1 className="text-2xl leading-relaxed font-bold p-5">
              Login Into Your Account
            </h1>
          </div>

          {/* Login Form */}
          <div className="flex flex-col justify-center items-center">
            <form action="" className="max-w-max">
              {/* Login Email */}
              <div className="pb-5 pl-3">
                <label htmlFor="" className="text-base mb text-zinc-50">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="type your email"/>
              </div>

              {/* Login Senha */}
              <div className="pl-3 w-full">
                <label htmlFor="" className=" text-base text-zinc-50">
                  Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*********"/>
              </div>

              {/* Login Button */}
              <div className="pl-3 w-full items-center">
              <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Login
      </button>
              </div>
            </form>
          </div>

          {/* Create User */}
          <div className="flex justify-center text-zinc-50 pb-2">
            <p>New user?
              <a className="p-2 font-bold" href="http://" target="_blank" rel="noopener noreferrer">Create Account</a>
            </p>
          </div>
        </div>
      </div>
    </main>

  )
}
