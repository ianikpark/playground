## Books

Assume we have a function `get_book_info(isbn)` that takes a string [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number) argument and retrieves a struct/object containing the Title, Author, and Language of a book (each represented as a string) from a database. Write a wrapper function that increases performance by keeping some of the database results in memory for quick lookup.

To prevent memory from growing unbounded, we only want to store a maximum of N book records. At any
given time, we should be storing the N books that we accessed most recently. Assume that N can be a large
number when making decisions about choices of data structure(s) and algorithm(s).

### How to Run

Built and tested on Windows Subsystem for Linux 2 (WSL 2) running Ubuntu 18.04.5 LTS and Python 3.6.9.

1. Clone the repository, if you have not done so, yet.
```
git clone git@github.com:ianikpark/picovoice.git
```

2. Navigate to the home directory of the current project.
```
cd picovoice/Books
```

3. Refresh your local package index.
```
sudo apt update
```

4. Run the program.
```
python3 main.py
```

### Description

The following 5 books have been pre-imported into a dummy database in the program:

1. 
