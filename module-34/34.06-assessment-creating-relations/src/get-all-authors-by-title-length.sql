select *
  from authors a
  join books b
  on a.author_id = b.author_id
  where length(b.title) > 25