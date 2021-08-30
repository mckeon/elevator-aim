import express, {Application, Request, Response} from "express";
import {IRequest} from "./Models/IRequest";

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// "health check"
app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);

/**
 * Create a request for an elevator without specifying an elevatorId
 * (A person requests an elevator be sent to their current floor)
 */
app.post(
    "/requests/:floorId",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(201).send({
            requestId: `not implemented`,
            requestedFloor: req.params.floorId,
            elevatorId: null,
        });
    }
);

/**
 * From inside a particular elevator, create a request to stop on a certain floor.
 * (A person requests that they be brought to a floor)
 */
app.post(
    "/elevators/:elevatorId/:floorId",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(201).send({
            requestId: `not implemented`,
            requestedFloor: req.params.floorId,
        });
    }
);


try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error}`);
}


/**
 * Get all requests assigned to an elevator by providing it's elevatorId. Returns an array of floorIds.
 */
app.get(
    "/elevators/:elevatorId/requests",
    async (req: Request, res: Response): Promise<Response> => {
        let floorsToVisit = getFloorsToVisitByElevatorID(req.params.elevatorId);
        return res.status(200).send(floorsToVisit);
    }
);

/**
 * Get next request assigned to an elevator by providing it's elevatorId. Returns a numberic floorId.
 */
app.get(
    "/elevators/:elevatorId/nextRequest",
    async (req: Request, res: Response): Promise<Response> => {
        let nextFloor = getNextFloorToVisit(req.params.elevatorId);
        return res.status(200).send(nextFloor);
    }
);


function getFloorsToVisitByElevatorID(elevatorId: string): number[]{
    let requests = [
        {"requestId": 1, "requestedFloor": 5, "elevatorId": "abc"},
        {"requestId": 2, "requestedFloor": 2, "elevatorId": undefined},
        {"requestId": 3, "requestedFloor": 4, "elevatorId": "def"},
        {"requestId": 4, "requestedFloor": 6, "elevatorId": "abc"},
        {"requestId": 5, "requestedFloor": 3, "elevatorId": undefined},
    ];
    let results: IRequest[] = requests.filter(request => request.elevatorId === elevatorId);
    let floorsToVisit: Set<number> = new Set(results.map(a => a.requestedFloor));
    return [... floorsToVisit]
};

function getNextFloorToVisit(elevatorId: string): number{
    // These will be very very slow elevators
    return getFloorsToVisitByElevatorID(elevatorId)[0];
}
