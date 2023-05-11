select count(b.book_id)
  from books b
  where b.publication_year < 2000