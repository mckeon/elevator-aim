import express, {Application, Request, Response} from "express";
import {IRequest} from "./Models/IRequest";

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//
app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);

/**
 * Create a request for an elevator without specifying an elevatorId (e.g. person on a floor requests elevator)
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
 * From inside a particular elevator, create a request to stop on a certain floor. Should be triggered by button inside
 * the elevator being pressed.
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
        let requests = [
            {"requestId": 1, "requestedFloor": 5, "elevatorId": "abc"},
            {"requestId": 2, "requestedFloor": 2, "elevatorId": undefined},
            {"requestId": 3, "requestedFloor": 4, "elevatorId": "def"},
            {"requestId": 4, "requestedFloor": 6, "elevatorId": "abc"},
            {"requestId": 5, "requestedFloor": 3, "elevatorId": undefined},
        ];
        let results: IRequest[] = requests.filter(request => request.elevatorId === req.params.elevatorId);
        console.log(results);
        let floorsToVisit: Set<number> = new Set(results.map(a => a.requestedFloor));
        console.log(floorsToVisit);
        return res.status(200).send([...floorsToVisit]);
    }
);
