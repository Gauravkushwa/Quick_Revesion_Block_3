const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
    addBook(book) {
      if (
        !book ||
        typeof book.title !== 'string' ||
        typeof book.author !== 'string' ||
        typeof book.year !== 'number'
      ) {
        console.log("Book information is incomplete or invalid.");
        return false;
      }
  
      // Check for duplicate title
      if (this.findBookByTitle(book.title)) {
        console.log(`Book titled "${book.title}" already exists.`);
        return false;
      }
  
      this.books.push(book);
      console.log(`Book titled "${book.title}" added successfully.`);
      return true;
    },
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    },
  
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
  
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book titled "${title}" removed successfully.`);
        return true;
      } else {
        console.log(`Book titled "${title}" not found.`);
        return false;
      }
    }
  };
  
  // Example usage:
  
  // Try adding an incomplete book
  library.addBook({ author: "George Orwell", year: 1949 });
  
  // Try adding a valid book
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
  
  // Try adding a duplicate
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
  
  // Check collection
  console.log(`Total books in library: ${library.books.length}`);
  
  // Remove a book
  library.removeBook("The Hobbit");
  
  // Remove a non-existent book
  library.removeBook("Nonexistent Book");
  
  // Final list
  console.log("Final books list:", library.books);
  