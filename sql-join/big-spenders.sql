select "customers"."firstName" as "firstName",
       "customers"."lastName" as "lastName",
       "payments"."amount" as "amount"
from "payments"
join "customers" using ("customerId")
order by "amount" desc
limit 10;
