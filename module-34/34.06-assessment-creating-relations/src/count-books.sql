select count(b.book_id)
  from books b
  join authors a
  on b.author_id = a.author_id
  where a.author_name = 'Leo Tolstoy'