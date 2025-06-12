import React, { useRef, useState } from "react";

function CertificateBuilder() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("No File Chosen");

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setFileName(e.target.files.length ? e.target.files[0].name : "No File Chosen");
  };

  const goToFormBuilder = () => window.location.href = "/form-builder";
  const goToFeedbackResults = () => window.location.href = "/feedback-results";

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-[#181b1d] from-35% to-[#00691c]">
      {/* Sidebar */}
      <div
        className="flex flex-col justify-between items-center bg-transparent h-[95vh] min-h-[600px] max-h-[98vh] w-[370px] rounded-2xl border border-[#3be382] mt-12 ml-12 mr-8 mb-12 p-8"
        style={{ boxShadow: "0 2px 32px 0 rgba(0,0,0,0.12)", background: "rgba(24,27,29,0.7)" }}
      >
        <div className="w-full">
          <img src="/images/inttoLogo.png" alt="into logo" className="w-36 h-auto mb-2 mx-auto" />
          <div className="text-xs text-white text-center mb-10">Innovation & Technology Transfer Office</div>
          <div className="flex flex-col gap-6 mt-16">
            <button
              onClick={goToFormBuilder}
              className="w-full text-white font-bold text-lg py-4 rounded-xl border border-[#3be382] hover:bg-[#1a1a1a] transition"
            >
              Custom Form Builder
            </button>
            <button
              onClick={goToFeedbackResults}
              className="w-full text-white font-bold text-lg py-4 rounded-xl border border-[#3be382] hover:bg-[#1a1a1a] transition"
            >
              Feedback Results
            </button>
            <button
              className="w-full text-white font-bold text-lg py-4 rounded-xl border-2 border-[#3be382] hover:bg-[#1a1a1a] transition"
            >
              Certificate Builder
            </button>
          </div>
        </div>
        <button className="w-full text-white font-bold py-2 rounded-xl border border-[#3be382] hover:bg-[#1a1a1a] transition mt-10">
          Log Out
        </button>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div
          className="w-full max-w-[1100px] min-h-[600px] h-[90vh] border border-[#3be382] rounded-2xl p-12 flex flex-col bg-gradient-to-br from-white/5 to-[#3be382]/10 mr-12 mt-12 mb-12"
          style={{ boxShadow: "0 2px 32px 0 rgba(0,0,0,0.12)" }}
        >
          <h1 className="text-4xl font-extrabold text-white mb-8 text-center">Certificate Builder</h1>
          <div>
            <label className="block font-bold text-lg mb-2 text-white">Upload Certificate Template</label>
            <div className="flex flex-row gap-4 items-center mb-6">
              <button
                type="button"
                onClick={handleUploadClick}
                className="border border-[#3be382] rounded-full px-8 py-2 text-white font-semibold bg-transparent hover:bg-[#1a1a1a] transition"
              >
                Upload
              </button>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="border border-[#3be382] rounded-xl px-8 py-2 bg-transparent text-white text-lg font-bold min-w-[220px] text-left">
                {fileName}
              </span>
            </div>
          </div>
          <div
            id="konvaContainer"
            className="border border-[#3be382] rounded-xl bg-gradient-to-br from-white/5 to-[#3be382]/5 flex justify-center items-center w-full mb-8"
            style={{ height: "480px", maxWidth: "900px", margin: "0 auto" }}
          >
            {/* Konva canvas will be rendered here */}
          </div>
          <div className="flex justify-end mt-auto">
            <button
              id="savePlacementBtn"
              className="border border-[#3be382] rounded-xl px-8 py-3 text-white font-semibold bg-transparent hover:bg-[#1a1a1a] transition"
            >
              Save Placement and Send
            </button>
          </div>
          <span id="saveStatus" className="text-green-400 mt-2 text-center"></span>
        </div>
      </div>
    </div>
  );
}

export default CertificateBuilder;