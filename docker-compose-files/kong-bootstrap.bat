docker run --rm ^
--network=developer ^
-e "KONG_DATABASE=postgres"  ^
-e "KONG_PG_HOST=postgres" ^
-e "KONG_PG_DATABASE=postgres" ^
-e "KONG_PG_PASSWORD=password" ^
-e "KONG_PG_USER=postgres"  ^
-e "KONG_CASSANDRA_CONTACT_POINTS=kong-database" kong:1.1.0 kong migrations bootstrap