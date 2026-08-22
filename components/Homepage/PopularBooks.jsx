"use client";

import React from "react";
import Image from "next/image";

const books = [
      {
            id: 1,
            title: "Origin",
            author: "Dan Brown",
            category: "Thriller / Mystery",
            price: "$24.99",
            borrowPrice: "$3.99",
            image: "/origin.jpg",
      },
      {
            id: 2,
            title: "The Fury",
            author: "Alex Michaelides",
            category: "Psychological Thriller",
            price: "$18.99",
            borrowPrice: "$2.99",
            image: "/the-fury.jpg",
      },
      {
            id: 3,
            title: "The Maidens",
            author: "Alex Michaelides",
            category: "Psychological Thriller",
            price: "$16.50",
            borrowPrice: "$2.49",
            image: "/the-maidens.webp",
      },
      {
            id: 4,
            title: "Gerald's Game",
            author: "Stephen King",
            category: "Horror",
            price: "$14.99",
            borrowPrice: "$1.99",
            image: "/geralds-game.jpg",
      },
      {
            id: 5,
            title: "Don't Turn Around",
            author: "Jessica Barry",
            category: "Thriller / Suspense",
            price: "$15.99",
            borrowPrice: "$2.49",
            image: "/dont-turn-around.jpg",
      },
      {
            id: 6,
            title: "Don't Turn",
            author: "Jessica Barry",
            category: "Thriller / Suspense",
            price: "$13.99",
            borrowPrice: "$1.99",
            image: "/dont-turn.jpg",
      },
];

const PopularBooks = () => {
      const handleBuy = (title, price) => {
            console.log(`Buy: ${title} (${price})`);
      };

      const handleBorrow = (title, borrowPrice) => {
            console.log(`Borrow: ${title} (${borrowPrice})`);
      };

      return (
            <section className="w-full px-6 py-10 sm:px-10 sm:py-14">
                  <h2 className="mb-6 text-xl font-bold tracking-tight text-white sm:mb-8 sm:text-2xl">
                        Popular Books
                  </h2>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 md:grid-cols-4 lg:grid-cols-6">
                        {books.map((book) => (
                              <div key={book.id} className="group flex flex-col justify-between min-w-0">
                                    <div>
                                          {/* Book Cover */}
                                          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xs bg-gray-900 shadow-md">
                                                <Image
                                                      src={book.image}
                                                      alt={book.title}
                                                      fill
                                                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                                                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                          </div>

                                          {/* Book Information */}
                                          <h3 className="mt-3 line-clamp-2 text-sm font-semibold leading-5 text-white sm:text-base sm:leading-6">
                                                {book.title}
                                                <span className="block font-normal text-gray-400 text-xs sm:text-sm">
                                                      By {book.author}
                                                </span>
                                          </h3>

                                          <p className="mt-1 line-clamp-1 text-xs italic text-gray-500 sm:text-sm">
                                                {book.category}
                                          </p>
                                    </div>

                                    {/* Buy and Borrow Buttons */}
                                    <div className="mt-3 grid grid-cols-2 gap-1.5 pt-2 border-t border-gray-800">
                                          <button
                                                onClick={() => handleBuy(book.title, book.price)}
                                                className="flex items-center justify-center rounded bg-gradient-to-r from-purple-600 to-indigo-600 px-2 py-1.5 text-[11px] font-extrabold tracking-wide text-white transition hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/20 cursor-pointer"
                                                title={`Buy for ${book.price}`}
                                          >
                                                Buy {book.price}
                                          </button>

                                          <button
                                                onClick={() => handleBorrow(book.title, book.borrowPrice)}
                                                className="flex items-center justify-center rounded border border-gray-700 bg-gray-800 px-2 py-1.5 text-[11px] font-extrabold tracking-wide text-gray-200 transition hover:bg-gray-700 hover:text-white cursor-pointer"
                                                title={`Borrow for ${book.borrowPrice}`}
                                          >
                                                Borrow
                                          </button>
                                    </div>
                              </div>
                        ))}
                  </div>
            </section>
      );
};

export default PopularBooks;