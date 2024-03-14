import React,{useState, useEffect} from "react";

import Settings from './../assets/settings.png'
import UserProfile from './UserProfile'

import Trends from "./Trends";
import Quotes from "./Quotes";

const Main = () => {
  const [quotes, setQuote] = useState([]);
  const [limit, setLimit] = useState(5);



  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(`https://api.quotable.io/quotes/random?limit=${limit}`);
        if (!response.ok) {
          throw new Error("Failed to fetch quote");
        }
        const data = await response.json();
        setQuote(data);
        // console.log(data)
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, [limit]);

  const fetchMoreQuotes = () => {
    setLimit(prevLimit => prevLimit + 5);
  };

  return (

    <div>
      <div className=" w-full grid grid-cols-7 ">
        <div className="lg:inline md:inline hidden md:col-span-2 lg:col-span-2 ">
        <UserProfile />
        </div>

        <div id="scroll" className="lg:col-span-3 md:col-span-3 col-span-7 sm:max-h-screen grid">
          <div>          
          {quotes.map(q => (

                <Quotes
                  Name={q.author}
                  Quote={q.content}
                  tag={q.tags.join(" • ")}
                  onClick={() => handleQuoteClick(q._id)}
                  />
            ))}

 
          </div>
          <button onClick={fetchMoreQuotes} className="text-center p-10">More Quotes</button>
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
