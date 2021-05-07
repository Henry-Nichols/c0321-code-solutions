select "actors"."firstName" as "firstName",
       "actors"."lastName" as "lastName",
       "films"."title" as "title"
from "castMembers"
join "films" using ("filmId")
join "actors" using ("actorId")
where "films"."title" = 'Jersey Sassy';
