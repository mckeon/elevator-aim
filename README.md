# elevator-aim

You are tasked with designing an API for an elevator control system. Your API needs to account for the following scenarios:

- A person requests an elevator be sent to their current floor
- A person requests that they be brought to a floor
- An elevator car requests all floors that it’s current passengers are servicing (e.g. to light up the buttons that show which floors the car is going to)
- An elevator car requests the next floor it needs to service



Another developer should be able to clone the git repo and:
- [ ] invoke a single command that builds and runs the service. 
- [ ] The developer should be able to make requests to localhost:8080 to test the services using a tool such as postman or curl. 
- [ ] Be sure to include information about how the services should be called.



The code should be developed in the same way that you develop in day-to-day professional work and branched, committed and merged as you would a production service.

# User stories 

Type    path        verb    purpose
---     ----        ----    -------
create  /request/   post    create new request for an elevator when someone pushes button 
