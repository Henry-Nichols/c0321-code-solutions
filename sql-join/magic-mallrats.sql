select distinct "customers"."firstName" as "firstName",
       "customers"."lastName" as "lastName",
       "films"."title" as "title"
from "inventory"
join "films" using ("filmId")
join "customers" using ("storeId")
join "rentals" using ("inventoryId")
where "films"."title" = 'Magic Mallrats';
