import { Express } from "express";
import { RequestType } from "./ApiRoute";
import EventsRoute from "./Events/EventsRoute";

class REST_Router {
    constructor(expressApp: Express) {

        const itemsRoutes = new EventsRoute();
        const allUpperRoutes = [itemsRoutes];
        this.init(allUpperRoutes, expressApp);
    }

    init = (upperRoutes: any[], expressApp: Express) => {
        console.log("*** Routes ***")
        upperRoutes.forEach((upperRoute) => {
            upperRoute.allRoutes.forEach((subRoute: any) => {
                console.log(
                    "Connecting " +
                    "[" +
                    subRoute.type +
                    "]\t" +
                    "/api" +
                    subRoute.routePath
                );
                switch (subRoute.type) {
                    case RequestType.GET:
                        expressApp.get("/api" + subRoute.routePath, async (req, res) => {
                            await subRoute.handleRoute(req, res);
                        });
                        break;
                    case RequestType.POST:
                        expressApp.post("/api" + subRoute.routePath, async (req, res) => {
                            await subRoute.handleRoute(req, res);
                        });
                        break;
                    case RequestType.DELETE:
                        expressApp.delete("/api" + subRoute.routePath, async (req, res) => {
                            await subRoute.handleRoute(req, res);
                        });
                        break;
                    case RequestType.PUT:
                        expressApp.put("/api" + subRoute.routePath, async (req, res) => {
                            await subRoute.handleRoute(req, res);
                        });
                        break;
                }
            });
            console.log("--------------------------------------")
        });
    };
}

export default REST_Router;
