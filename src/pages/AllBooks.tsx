/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useGetAllBooksQuery } from "../redux/features/books/booksApi";

interface IBook {
  _id: string;
  email: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  description: string;
}

const AllBooks = () => {
const myGenres = [
  "Scary Story",
  "Mystery",
  "Horror",
  "Fantasy Horror",
  "Supernatural",
]
  const publicationYears = [
    "2011",
    "2014",
    "2015",
    "2017",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];

  // Filter Books
  const [selectGenre, setSelectGenre] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectpublicationYear, setSelectPublicationYear] = useState("");

  const { data: books, isLoading } = useGetAllBooksQuery({
    search: searchText,
    genre: selectGenre,
    publicationYear: selectpublicationYear
  });

  return (
    <>
      <Helmet>
        <title>All Books</title>
      </Helmet>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-yellow-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button
              onClick={() => {
                setSelectGenre("");
                setSelectPublicationYear("");
              }}
              className="text-[14px] bg-yellow-400 text-black px-[12px] py-[4px] rounded-[8px]"
            >
              Reset
            </button>
          </div>
          {/* Filter options */}
          <div className="space-y-2">
            <div className="bg-yellow-100 p-2 rounded">
              <h2 className="text-[15px] text-black">By Genre:</h2>
              <div className="mt-2">
                {myGenres?.map((genre, i) => {
                  return (
                    <div key={i} className="flex items-center mb-[8px]">
                      <input
                        onChange={() => setSelectGenre(genre)}
                        className="h-[18px] w-[18px]"
                        id={genre}
                        type="radio"
                        name="genre"
                        checked={selectGenre === genre}
                      />
                      <label className="text-[14px] ml-3" htmlFor={genre}>
                        {genre}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-yellow-100 p-2 rounded">
              <div className="bg-yellow-100 p-2 rounded">
                <h2 className="text-[15px] text-black">
                  By Publication Year:
                </h2>
                <div className="mt-2">
                  {publicationYears?.map((year, i) => {
                    return (
                      <div key={i} className="flex items-center mb-[8px]">
                        <input
                          onChange={() => setSelectPublicationYear(year)}
                          className="h-[18px] w-[18px]"
                          id={year}
                          type="radio"
                          name="year"
                          checked={selectpublicationYear === year}
                        />
                        <label className="text-[14px] ml-3" htmlFor={year}>
                          {year}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-grow p-4">
          {/* Search bar */}
          <div className="flex items-center mb-4">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              className="border border-gray-300 p-2 mr-2 flex-grow"
              type="text"
              placeholder="Search..."
            />
          </div>

          {/* All Books */}
          <div className="mt-[20px] mb-[100px]">
            {isLoading ? (
              <div>
                <h3 className="text-3xl font-[500] text-center">Loading...</h3>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-x-10 gap-y-10">
                {books?.books?.map((book: IBook, i: number) => {
                  return (
                    <Link key={i} to={`/details/${book?._id}`}>
                      <Card book={book} />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
