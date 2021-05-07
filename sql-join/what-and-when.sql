select "films"."title" as "title",
       "films"."releaseYear" as "releaseYear",
       "categories"."name" as "genre"
from "filmCategory"
join "films" using ("filmId")
join "categories" using ("categoryId")
where "films"."title" = 'Boogie Amelie';
