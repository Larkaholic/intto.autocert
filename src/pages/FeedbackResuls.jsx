import React from "react";

function FeedbackResults() {
    return (
        <div className="flex">
            <div className="glass flex flex-col justify-between p-8 mt-8 ml-8 max-w-xs rounded-xl h-[90vh] border border-gray-400">
                <div>
                    <div className="mb-10">
                        <img src="/images/inttoLogo.png" alt="into logo" className="w-32 h-auto" />
                        <div className="text-xs text-white mt-2 ml-1">Innovation & Technology Transfer Office</div>
                    </div>
                    <div className="flex flex-col gap-6 mt-16">
                        <button onClick={() => window.location.href='/form-builder'} className="glass-buttons text-white font-bold text-lg py-5 rounded-xl border border-[#3be382] hover:bg-[#1a1a1a] transition">Custom Form Builder</button>
                        <button className="glass-buttons text-white font-bold text-lg py-5 rounded-xl border border-[#3be382] bg-[#1a1a1a] transition">Feedback Results</button>
                        <button onClick={() => window.location.href='/certificate-builder'} className="glass-buttons text-white font-bold text-lg py-5 rounded-xl border border-[#3be382] hover:bg-[#1a1a1a] transition">Certificate Builder</button>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button onClick={() => window.location.href='/'} className="glass-buttons text-white font-bold px-8 py-2 rounded border border-[#3be382] hover:bg-[#1a1a1a] transition">
                        Log Out
                    </button>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="glass flex-1 mx-8 my-8 p-10 rounded-xl shadow-md text-white flex flex-col overflow-y-auto h-[90vh] border border-gray-400">
                <h1 className="text-center text-3xl font-bold mb-10">Feedback Results</h1>
                <div className="mb-8">
                    <label htmlFor="eventSelect" className="block text-base font-semibold mb-2">Event Name</label>
                    <select id="eventSelect" className="w-full p-3 border border-gray-400 rounded-xl shadow-lg bg-transparent text-white placeholder-gray-400">
                        <option value="">-- Select an event --</option>
                    </select>
                </div>
                <div className="mb-8">
                    <label className="block text-base font-semibold mb-2">What do you think about the event</label>
                    <textarea 
                        id="feedbackText" 
                        rows="6" 
                        readOnly 
                        className="w-full p-3 border border-gray-400 rounded-xl shadow-lg bg-transparent text-white placeholder-gray-400 resize-none"
                        defaultValue="1. This event is nice&#10;2. i like it&#10;3. wheres the event"
                    />
                </div>
                <div>
                    <label className="block text-base font-semibold mb-2">Rate the event</label>
                    <input id="rateInput" type="text" readOnly className="w-full p-3 border border-gray-400 rounded-xl shadow-lg bg-transparent text-white placeholder-gray-400" />
                </div>
            </div>
        </div>
    );
}

export default FeedbackResults;