import moment from "moment";

interface IBook {
  book: {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    image: string;
  };
}

const Card = ({ book }: IBook) => {
  return (
    <div className="w-full h-auto w-[350px] pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img src={book.image} alt="" className="h-64 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 bg-white flex flex-col">
          <div>
            <h5 className="text-black text-xl font-bold">{book.title}</h5>
            <span className="text-sm text-black">Author: {book.author}</span>
          </div>
          <div className="flex items-center">
            <div className="text-lg text-black font-light">
              Genre: {book.genre}
            </div>
          </div>
          <p className="text-[14px] text-black">
            Published by {moment(book.publicationDate).format("DD MMMM, YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
