export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="relative flex flex-col bg-[url(../assets/bg-stars.svg)] border-r border-white/10">
        {/* Geralzão */}
        <div>
          {/* Logo */}
          <div>LOGO</div>

          {/* HERO */}
          <div>HERO</div>

          {/* FOOTER */}
          <div>Footer</div>
        </div>
      </div>

      {/* Rigth */}
      <div className="relative flex flex-col justify-center items-center bg-[url(../assets/bg-stars.svg)]">
        <div className='absolute flex bg-zinc-800 h-[450px] w-[480px] flex-col justify-between rounded-md shadow-md'>
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Login
      </button>
              </div>
            </form>
          </div>

          {/* Create User */}
          <div className="flex justify-center text-zinc-50">
            <p>New user?
              <a className="p-2 font-bold" href="http://" target="_blank" rel="noopener noreferrer">Create Account</a>
            </p>
          </div>
        </div>
      </div>
    </main>

  )
}
