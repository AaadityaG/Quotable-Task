import React, { useState, useEffect } from "react";
import Settings from './../assets/settings.png'
import UserProfile from './UserProfile'
import Trends from "./Trends";
import Quotes from "./Quotes";

const Main = () => {
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [randomQuotes, setRandomQuotes] = useState([]);
  const [limit, setLimit] = useState(5);
  const [isClose, setIsClose] = useState(false);

  useEffect(() => {
    const fetchRandomQuotes = async () => {
      try {
        const response = await fetch(`https://api.quotable.io/quotes/random?limit=${limit}`);
        if (!response.ok) {
          throw new Error("Failed to fetch random quotes");
        }
        const data = await response.json();
        setRandomQuotes(data);
      } catch (error) {
        console.error("Error fetching random quotes:", error);
      }
    };

    fetchRandomQuotes();
  }, [limit]);
  

  const handleQuoteClick = async (quoteId) => {
    try {
      const response = await fetch(`https://api.quotable.io/quotes/${quoteId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      setSelectedQuote(data);
      setIsClose(!isClose);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div>
      <div className="w-full grid grid-cols-7">
        <div className="lg:inline md:inline hidden md:col-span-2 lg:col-span-2">
          <UserProfile />
        </div>

        <div id="scroll" className="lg:col-span-3 md:col-span-3 col-span-7 sm:max-h-screen grid">
          <div className="cursor-pointer">
            {selectedQuote ? (
              <Quotes
                Name={selectedQuote.author}
                Quote={selectedQuote.content}
                tag={selectedQuote.tags.join(" • ")}
                onClick={() => {
                  setSelectedQuote(null);
                  setIsClose(false);
                }} // Close quote when clicked again
                Close={isClose}
              />
            ) : (
              randomQuotes.map(q => (
                <Quotes
                  key={q._id}
                  Name={q.author}
                  Quote={q.content}
                  tag={q.tags.join(" • ")}
                  onClick={() => handleQuoteClick(q._id)} // Call handleQuoteClick here
                />
              ))
            )}
          </div>
          {!isClose ? <button onClick={() => setLimit(prevLimit => prevLimit + 5)} className="text-center p-10">More Quotes</button> : null}
        </div>

        <div className="hidden lg:col-span-2 md:col-span-2 col-span-auto p-[48px] lg:flex md:flex flex-col gap-[16px]">
          <div className="flex justify-between items-center">
            <h2 className="text-[20px] font-bold">Trending Topics</h2>
            <img src={Settings} alt="" className="w-[19px] h-[19px]" />
          </div>

          <div className="text-[14px] text-[#3897F0]">show all quotes</div>

          <Trends />
          <Trends head="EDUCATION" tag="education" number="93" />
          <Trends head="SCIENCE" tag="science" number="85" />
          <Trends head="GAMES" tag="games" number="71" />
          <Trends head="DESIGN" tag="design" number="69" />
        </div>
      </div>
    </div>
  );
};

export default Main;
