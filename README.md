**This is set up to be used with docker. Ensure Docker is installed on your machine before running**

Check out the user manual [here](https://github.com/SubnormalNebula/pedestrian-frequency-counter/blob/master/User_Manual.pdf)

Run the following commands to start:
```
docker-compose build
docker-compose up
```

After the contiainers have started run the following commands to initalise the database:
(You should only have to do this on first run)
```
docker exec -it pedestrian-frequency-counter_db_1 mysql
```
Then in the mysql prompt paste the following:
```
use ttn_test_db;
```
```
CREATE TABLE IF NOT EXISTS sensor_data ( 
    pedl int,  
    pedr int, 
    cycll int, 
    cyclr int, 
    temp double, 
    devid varchar(255), 
    date datetime
);
```
```
CREATE TABLE IF NOT EXISTS nodes (
	devid	varchar(16)	not null,
	lat	FLOAT(10,6)	not null,
	lng	FLOAT(10,6)	not null,
	street	varchar(255)	not null,
PRIMARY KEY (devid)
);
```


**API Endpoints:**
```
Page                Method      Payload         Response
/sensor-data        GET         N/A             Array containing all data
/sensor-data        POST        JSON            201 (created)
/sensor-nodes		GET			N/A				Array containing all nodes
/sensor-nodes       POST        JSON            201 (created)
/node-sensor-data   GET         /nodeID    		Takes the deviceID of a node and returns an array containing all of node's data.
```
