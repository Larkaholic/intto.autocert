import React, { useRef, useState } from "react";

function CertificateBuilder() {
  const certificateTemplateRef = useRef(null);
  const participantListRef = useRef(null);
  const [templateFileName, setTemplateFileName] = useState("No file chosen");
  const [listFileName, setListFileName] = useState("No file chosen");

  const handleTemplateFileChange = (e) => {
    setTemplateFileName(e.target.files.length ? e.target.files[0].name : "No file chosen");
  };

  const handleListFileChange = (e) => {
    setListFileName(e.target.files.length ? e.target.files[0].name : "No file chosen");
  };

  const goToFormBuilder = () => window.location.href = "/form-builder";
  const goToFeedbackResults = () => window.location.href = "/feedback-results";

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-[#000000] from-35% to-[#00691c]">
      {/* Sidebar */}
      <div className="glass flex flex-col justify-between p-8 mt-8 ml-8 max-w-xs rounded-xl h-[100vh]">
        <div>
          <div className="mb-10">
            <img src="/images/inttoLogo.png" alt="into logo" className="w-32 h-auto" />
            <div className="text-xs text-white mt-2 ml-1">Innovation & Technology Transfer Office</div>
          </div>
          <div className="flex flex-col gap-6 mt-16">
            <button
              onClick={goToFormBuilder}
              className="glass-buttons text-white font-bold text-lg py-5 rounded-xl border border-gray-400 hover:bg-[#1a1a1a] transition"
            >
              Custom Form Builder
            </button>
            <button
              onClick={goToFeedbackResults}
              className="glass-buttons text-white font-bold text-lg py-5 rounded-xl border border-gray-400 hover:bg-[#1a1a1a] transition"
            >
              Feedback Results
            </button>
            <button className="glass-buttons text-white font-bold text-lg py-5 rounded-xl border border-gray-400 bg-[#1a1a1a] transition">
              Certificate Builder
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => window.location.href = '/'}
            className="glass-buttons text-white font-bold px-8 py-2 rounded border border-[#3be382] hover:bg-[#1a1a1a] transition"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="glass flex-1 mx-8 my-8 p-10 rounded-xl shadow-md text-white flex flex-col overflow-y-auto h-[90vh]">
        <h1 className="text-center text-3xl font-bold mb-2">Certificate Builder</h1>
        <div className="mb-6">
          <div className="text-sm font-semibold mb-2">Instructions:</div>
          <ul className="list-disc list-inside text-sm mb-4 text-gray-200">
            <li>Enter the Event Name</li>
            <li>Upload the Certificate Template</li>
            <li>Set text position and styling</li>
            <li>Upload participant list and generate certificates</li>
          </ul>
        </div>
        <div className="mb-6">
          <label htmlFor="eventTitle" className="block text-base font-semibold mb-2">Event Name</label>
          <input
            type="text"
            id="eventTitle"
            className="w-full p-3 border border-gray-400 rounded-xl shadow-lg bg-transparent text-white placeholder-gray-400"
            placeholder="What is the name of the Event?"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="certificateTemplate" className="block text-base font-semibold mb-2">Certificate Template</label>
          <div className="flex items-center gap-4">
            <input
              ref={certificateTemplateRef}
              type="file"
              id="certificateTemplate"
              className="hidden"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleTemplateFileChange}
            />
            <button
              onClick={() => certificateTemplateRef.current.click()}
              className="px-4 py-2 border border-gray-400 rounded-lg bg-transparent text-white hover:bg-[#1a1a1a] transition"
            >
              Upload Template
            </button>
            <span className="text-sm text-gray-300">{templateFileName}</span>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="participantList" className="block text-base font-semibold mb-2">Participant List (CSV or Excel)</label>
          <div className="flex items-center gap-4">
            <input
              ref={participantListRef}
              type="file"
              id="participantList"
              className="hidden"
              accept=".csv,.xlsx,.xls"
              onChange={handleListFileChange}
            />
            <button
              onClick={() => participantListRef.current.click()}
              className="px-4 py-2 border border-gray-400 rounded-lg bg-transparent text-white hover:bg-[#1a1a1a] transition"
            >
              Upload List
            </button>
            <span className="text-sm text-gray-300">{listFileName}</span>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Certificate Text Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="namePosition" className="block text-sm font-medium mb-1">Name Position</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="X"
                  className="w-1/2 p-2 border border-gray-400 rounded bg-transparent text-white"
                />
                <input
                  type="number"
                  placeholder="Y"
                  className="w-1/2 p-2 border border-gray-400 rounded bg-transparent text-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="nameFont" className="block text-sm font-medium mb-1">Font Size & Color</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Size"
                  className="w-1/2 p-2 border border-gray-400 rounded bg-transparent text-white"
                />
                <input
                  type="color"
                  defaultValue="#000000"
                  className="w-1/2 p-1 border border-gray-400 rounded bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            id="generateCertificatesBtn"
            className="bg-[#232b2b] border border-[#3be382] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#1a1a1a] transition"
          >
            Generate Certificates
          </button>
        </div>
        <div className="mt-6 text-center text-sm text-gray-300">
          <p id="generationStatus"></p>
        </div>
      </div>
    </div>
  );
}

export default CertificateBuilder;