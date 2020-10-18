import React, { createContext, useState } from 'react';

export const BookContext = createContext();


const BookContextProvider = (props) => {
  const [ books, setBooks ] = useState([
    {title: 'Sample Book 1', author: 'Sample Author', id: '1'},
    {title: 'Click to Delete', author: 'Sample Author', id: '2'},
    {title: 'Sample Book 2', author: 'Sample Author', id: '3'},
  ]
)

  const bid = () => {
    Math.random();
  }

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: {bid} }])
  }

  const removeBook = (id) => {
    setBooks( books.filter( book => book.id !== id))
  }

  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      { props.children }
    </BookContext.Provider>
  )
}

export default BookContextProvider;