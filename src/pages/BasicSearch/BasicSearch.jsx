
const BasicSearch = () => {
    return (
        <div className="pt-5">
           <h1 className="text-2xl font-semibold mb-1">CLASSICAL ART RESEARCH CENTRE POTTERY SEARCH</h1>
           <p>How would you like to search the databases?</p>
           <div className="my-5 flex flex-col w-60">

           <button type="button" className="mb-2 px-8 py-3 font-semibold rounded bg-[#E22232] text-gray-100">Shape</button>
           <button type="button" className="mb-2 px-8 py-3 font-semibold rounded bg-[#E22232] text-gray-100">Technique</button>
           <button type="button" className="mb-2 px-8 py-3 font-semibold rounded bg-[#E22232] text-gray-100">Sub Technique</button>
           <button type="button" className="mb-2 px-8 py-3 font-semibold rounded bg-[#E22232] text-gray-100">Painter or Potter</button>
           <button type="button" className="mb-2 px-8 py-3 font-semibold rounded bg-[#E22232] text-gray-100">Inscription</button>
           <button type="button" className="mb-2 px-8 py-3 font-semibold rounded bg-[#E22232] text-gray-100">Subject</button>
           <button type="button" className="mb-2 px-8 py-3 font-semibold rounded bg-[#E22232] text-gray-100">Collection</button>
           <button type="button" className="mb-2 px-8 py-3 font-semibold rounded bg-[#E22232] text-gray-100">Date</button>
           
           </div>
        </div>
    );
};

export default BasicSearch;