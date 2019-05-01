**This is set up to be used with docker. Ensure Docker is installed on your machine before running**

Run this command to start:
###`docker-compose up`

After the contiainers have started run the following commands to initalise the database:
(You should only have to do this on first run)
###`docker exec -it ttn_database_prototype_db_1 mysql`
Then in the mysql prompt paste the following:
###`use ttn_test_db;`
###`CREATE TABLE IF NOT EXISTS sensor_data ( pedl int,  pedr int, cycll int, cyclr int, temp double, devid varchar(255), date datetime);`


**API Endpoints:**
```
Page                Method      Payload         Response
\sensor-data        GET         N/A             Array containing all data
\sensor-data        POST        JSON object     201 (created) //this input needs to be sanitised
\node-sensor-data   GET         \nodeID    		Takes the deviceID of a node and returns an array containing all of node's data.
\nodes				GET			N\A				Array containing all nodes
```
