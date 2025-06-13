import React from "react";

function FormBuilder() {
    return (
    <div className="flex">
        <div className="glass flex flex-col justify-between p-8 mt-8 ml-8 max-w-xs rounded-xl h-[90vh]">
        <div className="">
            <div className="mb-10">
            <img src="/images/inttoLogo.png" alt="into logo" className="w-32 h-auto" />
            <div className="text-xs text-white mt-2 ml-1">Innovation & Technology Transfer Office</div>
            </div>
            <div className="flex flex-col gap-6 mt-16">
            <button className="glass-buttons text-white font-bold text-lg py-5 rounded-xl border border-[#3be382] hover:bg-[#1a1a1a] transition">Custom Form Builder</button>
            <button onClick={() => window.location.href='feedback-results.html'} className="glass-buttons text-white font-bold text-lg py-5 rounded-xl border border-[#3be382] hover:bg-[#1a1a1a] transition">Feedback Results</button>
            <button onClick={() => window.location.href='certificate-builder.html'} className="glass-buttons text-white font-bold text-lg py-5 rounded-xl border border-[#3be382] hover:bg-[#1a1a1a] transition">Certificate Builder</button>
            </div>
        </div>
        <div className="flex justify-center mt-8">
            <button className="glass-buttons text-white font-bold px-8 py-2 rounded border border-[#3be382] hover:bg-[#1a1a1a] transition">
            Log Out
            </button>
        </div>
        </div>

        <div className="glass flex-1 mx-8 my-8 p-10 rounded-xl shadow-md text-white flex flex-col overflow-y-auto h-[90vh]">
        <h1 className="text-center text-3xl font-bold mb-2">Custom Form Builder</h1>
        <div className="mb-6">
            <div className="text-sm font-semibold mb-2">Instructions:</div>
            <ul className="list-disc list-inside text-sm mb-4 text-gray-200">
            <li>Enter the Event Name</li>
            <li>Add Feedback Form Questions as needed</li>
            <li>Click deploy to Generate QR code and to Deploy the Form</li>
            </ul>
        </div>
        <div className="mb-6">
            <label htmlFor="eventTitle" className="block text-base font-semibold mb-2">Event Name</label>
            <input type="text" id="eventTitle" className="w-full p-3 border border-gray-400 rounded-xl shadow-lg bg-transparent text-white placeholder-gray-400" placeholder="what is the name of the Event?" />
        </div>
        <form id="questionForm" className="flex flex-col gap-6 overflow-y-auto max-h-[45vh]">
            {/* questions will appear here */}
        </form>
        <div className="flex justify-center mt-4">
            <button id="addQuestionBtn" type="button" className="border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 hover:text-black text-3xl bg-[#232b2b] text-[#3be382] transition">
            +
            </button>
        </div>
        <div className="flex justify-center mt-8">
            <button id="saveFormBtn" className="bg-[#232b2b] border border-[#3be382] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#1a1a1a] transition">
            Deploy and Generate QR
            </button>
        </div>
        <pre id="output" className="mt-6 bg-gray-100 p-4 rounded text-sm text-gray-800 hidden"></pre>
        </div>
    </div>
  );
}

export default FormBuilder;