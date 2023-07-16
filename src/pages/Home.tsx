/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useGetRecentBooksQuery } from "../redux/features/books/booksApi";

interface IBook {
  _id: string;
  email: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  reviews: [];
}

const Home = () => {
  const { data: books } = useGetRecentBooksQuery(undefined);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center h-[calc(100vh-80px)]">
          <div>
            <h2 className="text-6xl font-black text-primary mb-2">
            Stay true to your <br />values  beliefs, and goals
            </h2>
            <p className="text-secondary font-semibold text-xl">
            Stay positive 
            </p>
            <div className="text-primary mt-10">
              <p>Cultivate a positive mindset</p>
              <q>
              even in challenging situations. Optimism can help you overcome obstacles and lead to a happier life.{" "}
                <br />  Failure is a natural part of learning and growth. Don't be afraid to fail, as it often leads to valuable lessons and opportunities.
              </q>
            </div>
            <button className="mt-5 border-2 border-red-200 hover:bg-red-400 hover:text-white font-[500] px-[12px] py-[4px] rounded-[8px]">
              Learn more
            </button>
          </div>
          <div className="">
            <img
              height="600px"
              width="600px"
              className="rounded-[14px]"
              src="https://i.ibb.co/HndCwkZ/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="mt-[20px] mb-[100px]">
          <h3 className="text-[20px] font-[500] text-left mb-[20px]">
            Recently Add New Books
          </h3>
          <div className="grid grid-cols-3 gap-x-10 gap-y-10">
            {books?.books?.map((book: IBook, i: number) => {
              return (
                <Link key={i} to={`/details/${book._id}`}>
                  <Card book={book} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
