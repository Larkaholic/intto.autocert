import React from "react";

function LoginPage() {
  const goToCertificateBuilder = (e) => {
    e.preventDefault();
    window.location.href = "/certificate-builder";
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-tr from-[#000000] from-35% to-[#00691c] min-h-screen overflow-hidden">
      <img
        src="/images/inntoLogoNew.png"
        alt="Side Logo"
        className="fixed -left-20 top-1/2 w-24 sm:w-36 md:w-48 lg:w-64 xl:w-80 -translate-y-1/2"
        style={{ zIndex: 0, transform: "translateY(-50%) rotate(-90deg)" }}
      />
      <div className="w-full max-w-[95vw] sm:max-w-lg md:max-w-xl lg:max-w-2xl z-10 px-2 sm:px-4">
        <div className="glass p-4 sm:p-8 mx-auto">
          <div className="flex w-full mb-6 sm:mb-10 rounded-xl justify-start">
            <img src="/images/inttoLogo.png" alt="InTTO Logo" className="inttologo w-24 sm:w-32 md:w-40" />
          </div>
          <form className="flex flex-col space-y-4 sm:space-y-6" id="loginForm" onSubmit={goToCertificateBuilder}>
            <div>
              <label htmlFor="email" className="block text-center text-base sm:text-xl font-bold text-white">
                USERNAME
              </label>
              <input
                type="email"
                id="emailInput"
                className="mt-2 w-full px-2 py-2 sm:px-4 sm:py-2 border border-gray-400 text-center rounded-xl text-white bg-transparent focus:border-green-500 focus:outline-none focus:ring-1 text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-center text-base sm:text-xl font-bold text-white">
                PASSWORD
              </label>
              <input
                type="password"
                id="passwordInput"
                className="mt-2 w-full px-2 py-2 sm:px-4 sm:py-2 border border-gray-400 text-center rounded-xl text-white bg-transparent focus:border-green-500 focus:outline-none focus:ring-1 text-sm sm:text-base"
              />
            </div>
            <div className="flex justify-center pt-4">
              <button
                className="w-full sm:w-1/2 md:w-1/3 text-white font-medium py-2 rounded-lg border border-gray transition-colors hover:border-green-500 focus:border-green-500 focus:outline-none focus:ring-1 text-base"
                id="loginButton"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <img
        className="sideLogoBottomLeft fixed left-2 bottom-2 w-10 sm:w-16 md:w-20 opacity-70 z-0"
        src="/images/inntoLogoNew.png"
        alt="intto bottom left logo"
      />
    </div>
  );
}

export default LoginPage;