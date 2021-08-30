# elevator-aim

You are tasked with designing an API for an elevator control system. Your API needs to account for the following scenarios:

-[x ] A person requests an elevator be sent to their current floor
    `curl -X POST \
    http://localhost:3000/requests/:floorId \`

    ```{
    "requestId": "not implemented",
    "requestedFloor": "3",
    "elevatorId": null
    }```

-[x ] A person requests that they be brought to a floor
    `curl -X POST \
    http://localhost:3000/elevators/:elevatorId/:floorId \`

    ```{
    "requestId": "not implemented",
    "requestedFloor": "5"
    }
    ```


-[x ] An elevator car requests all floors that it’s current passengers are servicing (e.g. to light up the buttons that show which floors the car is going to)
    `curl -X GET \
    http://localhost:3000/elevators/:elevatorID/requests \`

     

    ```{
        "floorsToVisit": [
            4
        ]
    }```

-[x ] An elevator car requests the next floor it needs to service
    `curl -X GET \
    http://localhost:3000/elevators/:elevatorId/nextRequest \`

    ``` {
    "nextFloor": 5
}
    ```



Another developer should be able to clone the git repo and:
- [x ] invoke a single command that builds and runs the service. 
- [x ] The developer should be able to make requests to localhost:8080 to test the services using a tool such as postman or curl. 
- [x ] Be sure to include information about how the services should be called.



The code should be developed in the same way that you develop in day-to-day professional work and branched, committed and merged as you would a production service.
