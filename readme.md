**This is set up to be used with docker. Ensure Docker is installed on your machine before running**

Run this command to start:
```
docker-compose up
```

After the contiainers have started run the following steps to initalise the database:
```
docker exec -it ttn_database_prototype_db_1 mysql
```
Then in the mysql prompt paste the following create table statement:
```
CREATE TABLE IF NOT EXISTS sensor_data ( pedl int,  pedr int, cycll int, cyclr int, temp double, devid varchar(255), time timestamp);
```