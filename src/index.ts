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

// Create a request for an elevator
app.post(
    "/requests/:floorId",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(201).send({
            requestId: `not implemented`,
            requestedFromFloor: req.params.floorId,
            elevatorId: null,
        });
    }
);

// Get all requests assigned to an elevator
app.post(
    "/elevator/:floorId",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(201).send({
            requestId: `not implemented`,
            requestedFromFloor: req.params.floorId,
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



// Get all requests assigned to an elevator
app.get(
    "/elevators/:elevatorId/requests",
    async (req: Request, res: Response): Promise<Response> => {
        let requests = [
            {"requestId": 1, "requestedFromFloor": 5, "elevatorId": "abc"},
            {"requestId": 2, "requestedFromFloor": 2, "elevatorId": undefined},
            {"requestId": 3, "requestedFromFloor": 4, "elevatorId": "def"},
            {"requestId": 4, "requestedFromFloor": 6, "elevatorId": "abc"},
            {"requestId": 5, "requestedFromFloor": 3, "elevatorId": undefined},
        ];
        let results: IRequest[] = requests.filter(request => request.elevatorId === req.params.elevatorId);
        console.log(results);
        let floorsToVisit: Set<number> = new Set(results.map(a => a.requestedFromFloor));
        console.log(floorsToVisit);
        return res.status(200).send([...floorsToVisit]);
    }
);
