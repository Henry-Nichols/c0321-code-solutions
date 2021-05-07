select distinct "addresses"."line1" as "address",
       "addresses"."district" as "district",
       "cities"."name" as "city",
       "countries"."name" as "country"
from "addresses"
join "cities" using ("cityId")
join "countries" using ("countryId")
