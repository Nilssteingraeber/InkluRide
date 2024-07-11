import ApiRoute, { RequestType } from "../ApiRoute";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { Event, EventModel } from "../../schemas/Event";
import { addDays, format } from 'date-fns';

const path = "/events";
const random = "/random"
const stat = "/static"

class EventRoute {
    allRoutes = [new GetList(), new NewEvent(), new CreateStatic()];
}

class NewEvent extends ApiRoute {
    handleRoute(_request: Request, response: Response): Promise<any> | any {

        const eventData = _request.body
        console.log(eventData)

        response.status(300).json(eventData);
        return 
    }
    constructor() {
        super(RequestType.PUT, path);
    }
}

class GetList extends ApiRoute {
    handleRoute(_request: Request, response: Response): Promise<any> | any {
        const result = EventModel.find().then((result) => {
            console.log(result)
            response.status(300).json(result);
            return
        })

        return result;
    }
    constructor() {
        super(RequestType.GET, path);
    }
}

class CreateStatic extends ApiRoute {
    handleRoute(_request: Request, response: Response): Promise<any> | any {
        const result = EventModel.find().then((result) => {
            console.log(result)



            let startDate = new Date('2024-07-12T08:00:00Z')
            let eventsDates = [
                { date: new Date('2024-07-12T08:15:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T08:15:00Z'), "kk:mm") },
                { date: new Date('2024-07-12T11:00:00Z'), name: "Mittagessen", pretty: format(new Date('2024-07-12T11:00:00Z'), "kk:mm")},
                { date: new Date('2024-07-12T12:00:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T12:00:00Z'), "kk:mm") },
            ]
            let endDate = new Date('2024-07-12T13:00:00Z')
            let dateData = { startDate, eventsDates, endDate }

            let bergbaumuseum = {
                "title": "Bergbaumuseum",
                "subtitle": "Bochum",
                "longinfo": "Das Bergbaumuseum Bochum, eines der weltweit größten seiner Art, bietet umfassende Einblicke in die Geschichte und Technik des Bergbaus. Das Museum beherbergt beeindruckende Exponate, darunter originalgetreue Maschinen und Werkzeuge, sowie ein nachgebautes Anschauungsbergwerk, das Besucher durch unterirdische Stollen führt. Ein Highlight ist das Fördergerüst, das einen atemberaubenden Blick über Bochum ermöglicht.",
                "suitedFor": ["mobility", "vision", "hearing"],
                "eventTimings": dateData,
                "pricePerPerson": 5,
                "images": ["/static/images/1/Bergwerk_Info_001.png", "/static/images/1/Bergbaumuseum_002.jpg"],
                "state": {"maxPeople": 8, "currentPeople": 5},
                "location": ["51.48861", "7.21641"]
            }


            let bergbaumuseum_event = new Event(bergbaumuseum.title, bergbaumuseum.subtitle,
                bergbaumuseum.longinfo, bergbaumuseum.suitedFor, bergbaumuseum.eventTimings,
                bergbaumuseum.pricePerPerson, bergbaumuseum.images, bergbaumuseum.state,
                bergbaumuseum.location
            )

            let entry = new EventModel(bergbaumuseum_event)
            entry.save().then((r) => {
                console.log(r)
            })




            startDate = new Date('2024-07-12T08:00:00Z')
            eventsDates = [
                { date: new Date('2024-07-12T08:15:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T08:15:00Z'), "kk:mm") },
                { date: new Date('2024-07-12T11:00:00Z'), name: "Mittagessen", pretty: format(new Date('2024-07-12T11:00:00Z'), "kk:mm")},
                { date: new Date('2024-07-12T12:00:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T12:00:00Z'), "kk:mm") },
            ]
            endDate = new Date('2024-07-12T13:00:00Z')
            dateData = { startDate, eventsDates, endDate }

            bergbaumuseum = {
                "title": "Planetarium",
                "subtitle": "Bochum",
                "longinfo": "Das Planetarium Bochum ist eines der modernsten Planetarien Europas und bietet beeindruckende Shows über Astronomie und Weltraumforschung. Mit einem 20-Meter-Kuppelsaal und hochauflösenden Projektoren werden realistische Darstellungen des Nachthimmels und kosmischer Phänomene ermöglicht. Neben den klassischen Sternenshows gibt es auch Musik- und Laserprojekte, die das Publikum begeistern. Das Planetarium dient zudem als Bildungsstätte für Schulen und Familien, um das Verständnis für das Universum zu fördern.",
                "suitedFor": ["mobility", "vision"],
                "eventTimings": dateData,
                "pricePerPerson": 7.50,
                "images": ["1/Bergwerk_Info_001.png", "1/Bergwerk_Info_002.png"],
                "state": {"maxPeople": 8, "currentPeople": 5},
                "location": ["51.48546", "7.22784"]
            }


            bergbaumuseum_event = new Event(bergbaumuseum.title, bergbaumuseum.subtitle,
                bergbaumuseum.longinfo, bergbaumuseum.suitedFor, bergbaumuseum.eventTimings,
                bergbaumuseum.pricePerPerson, bergbaumuseum.images, bergbaumuseum.state,
                bergbaumuseum.location
            )

            entry = new EventModel(bergbaumuseum_event)
            entry.save().then((r) => {
                console.log(r)
            })


            // -------------------

            startDate = new Date('2024-07-16T08:00:00Z')
            eventsDates = [
                { date: new Date('2024-07-16T08:15:00Z'), name: "Tropenhäuser", pretty: format(new Date('2024-07-16T08:15:00Z'), "kk:mm") },
                { date: new Date('2024-07-16T11:00:00Z'), name: "Chinesischer Garten", pretty: format(new Date('2024-07-16T08:15:00Z'), "kk:mm")},
            ]
            endDate = new Date('2024-07-16T13:00:00Z')
            dateData = { startDate, eventsDates, endDate }

            bergbaumuseum = {
                "title": "Botanischer Garten",
                "subtitle": "Bochum",
                "longinfo": "Der Botanische Garten Bochum ist eine weitläufige Anlage, die eine Vielzahl von Pflanzenarten aus verschiedenen Klimazonen und Lebensräumen präsentiert. Besucher können thematische Gärten wie den Chinesischen Garten, das Tropenhaus und den Alpinum erkunden. Der Garten dient nicht nur der Erholung, sondern auch der Forschung und Lehre an der Ruhr-Universität Bochum. Er bietet eine ideale Umgebung, um die Vielfalt der Pflanzenwelt zu erleben und zu studieren.",
                "suitedFor": ["mobility"],
                "eventTimings": dateData,
                "pricePerPerson": 0,
                "images": ["/static/images/2/BO-3.JPG", "/static/images/2/BO1.jpg", "/static/images/2/BO2.jpg"],
                "state": {"maxPeople": 8, "currentPeople": 5},
                "location": ["51.44214", "7.26677"]
            }


            bergbaumuseum_event = new Event(bergbaumuseum.title, bergbaumuseum.subtitle,
                bergbaumuseum.longinfo, bergbaumuseum.suitedFor, bergbaumuseum.eventTimings,
                bergbaumuseum.pricePerPerson, bergbaumuseum.images, bergbaumuseum.state,
                bergbaumuseum.location
            )

            entry = new EventModel(bergbaumuseum_event)
            entry.save().then((r) => {
                console.log(r)
            })

            // -------------------

            startDate = new Date('2024-07-12T08:00:00Z')
            eventsDates = [
                { date: new Date('2024-07-12T08:15:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T08:15:00Z'), "kk:mm") },
                { date: new Date('2024-07-12T11:00:00Z'), name: "Mittagessen", pretty: format(new Date('2024-07-12T11:00:00Z'), "kk:mm")},
                { date: new Date('2024-07-12T12:00:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T12:00:00Z'), "kk:mm") },
            ]
            endDate = new Date('2024-07-12T13:00:00Z')
            dateData = { startDate, eventsDates, endDate }

            bergbaumuseum = {
                "title": "Kunstmuseum",
                "subtitle": "Bochum",
                "longinfo": "Der Botanische Garten Bochum ist eine weitläufige Anlage, die eine Vielzahl von Pflanzenarten aus verschiedenen Klimazonen und Lebensräumen präsentiert. Besucher können thematische Gärten wie den Chinesischen Garten, das Tropenhaus und den Alpinum erkunden. Der Garten dient nicht nur der Erholung, sondern auch der Forschung und Lehre an der Ruhr-Universität Bochum. Er bietet eine ideale Umgebung, um die Vielfalt der Pflanzenwelt zu erleben und zu studieren.",
                "suitedFor": ["mobility"],
                "eventTimings": dateData,
                "pricePerPerson": 0,
                "images": ["1/Bergwerk_Info_001.png", "1/Bergwerk_Info_002.png"],
                "state": {"maxPeople": 8, "currentPeople": 5},
                "location": ["51.48744", "7.22112"]
            }


            bergbaumuseum_event = new Event(bergbaumuseum.title, bergbaumuseum.subtitle,
                bergbaumuseum.longinfo, bergbaumuseum.suitedFor, bergbaumuseum.eventTimings,
                bergbaumuseum.pricePerPerson, bergbaumuseum.images, bergbaumuseum.state,
                bergbaumuseum.location
            )

            entry = new EventModel(bergbaumuseum_event)
            entry.save().then((r) => {
                console.log(r)
            })



            startDate = new Date('2024-07-12T08:00:00Z')
            eventsDates = [
                { date: new Date('2024-07-12T08:15:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T08:15:00Z'), "kk:mm") },
                { date: new Date('2024-07-12T11:00:00Z'), name: "Mittagessen", pretty: format(new Date('2024-07-12T11:00:00Z'), "kk:mm")},
                { date: new Date('2024-07-12T12:00:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T12:00:00Z'), "kk:mm") },
            ]
            endDate = new Date('2024-07-12T13:00:00Z')
            dateData = { startDate, eventsDates, endDate }

            bergbaumuseum = {
                "title": "Kunstmuseum",
                "subtitle": "Bochum",
                "longinfo": "Der Botanische Garten Bochum ist eine weitläufige Anlage, die eine Vielzahl von Pflanzenarten aus verschiedenen Klimazonen und Lebensräumen präsentiert. Besucher können thematische Gärten wie den Chinesischen Garten, das Tropenhaus und den Alpinum erkunden. Der Garten dient nicht nur der Erholung, sondern auch der Forschung und Lehre an der Ruhr-Universität Bochum. Er bietet eine ideale Umgebung, um die Vielfalt der Pflanzenwelt zu erleben und zu studieren.",
                "suitedFor": ["mobility"],
                "eventTimings": dateData,
                "pricePerPerson": 0,
                "images": ["1/Bergwerk_Info_001.png", "1/Bergwerk_Info_002.png"],
                "state": {"maxPeople": 8, "currentPeople": 5},
                "location": ["51.48744", "7.22112"]
            }


            bergbaumuseum_event = new Event(bergbaumuseum.title, bergbaumuseum.subtitle,
                bergbaumuseum.longinfo, bergbaumuseum.suitedFor, bergbaumuseum.eventTimings,
                bergbaumuseum.pricePerPerson, bergbaumuseum.images, bergbaumuseum.state,
                bergbaumuseum.location
            )

            entry = new EventModel(bergbaumuseum_event)
            entry.save().then((r) => {
                console.log(r)
            })










            startDate = new Date('2024-07-12T08:00:00Z')
            eventsDates = [
                { date: new Date('2024-07-12T08:15:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T08:15:00Z'), "kk:mm") },
                { date: new Date('2024-07-12T11:00:00Z'), name: "Mittagessen", pretty: format(new Date('2024-07-12T11:00:00Z'), "kk:mm")},
                { date: new Date('2024-07-12T12:00:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T12:00:00Z'), "kk:mm") },
            ]
            endDate = new Date('2024-07-12T13:00:00Z')
            dateData = { startDate, eventsDates, endDate }

            bergbaumuseum = {
                "title": "Jahrhunderthalle",
                "subtitle": "Bochum",
                "longinfo": "Der Botanische Garten Bochum ist eine weitläufige Anlage, die eine Vielzahl von Pflanzenarten aus verschiedenen Klimazonen und Lebensräumen präsentiert. Besucher können thematische Gärten wie den Chinesischen Garten, das Tropenhaus und den Alpinum erkunden. Der Garten dient nicht nur der Erholung, sondern auch der Forschung und Lehre an der Ruhr-Universität Bochum. Er bietet eine ideale Umgebung, um die Vielfalt der Pflanzenwelt zu erleben und zu studieren.",
                "suitedFor": ["mobility"],
                "eventTimings": dateData,
                "pricePerPerson": 0,
                "images": ["1/Bergwerk_Info_001.png", "1/Bergwerk_Info_002.png"],
                "state": {"maxPeople": 8, "currentPeople": 5},
                "location": ["51.48119", "7.19812"]
            }


            bergbaumuseum_event = new Event(bergbaumuseum.title, bergbaumuseum.subtitle,
                bergbaumuseum.longinfo, bergbaumuseum.suitedFor, bergbaumuseum.eventTimings,
                bergbaumuseum.pricePerPerson, bergbaumuseum.images, bergbaumuseum.state,
                bergbaumuseum.location
            )

            entry = new EventModel(bergbaumuseum_event)
            entry.save().then((r) => {
                console.log(r)
            })








            startDate = new Date('2024-07-12T08:00:00Z')
            eventsDates = [
                { date: new Date('2024-07-12T08:15:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T08:15:00Z'), "kk:mm") },
                { date: new Date('2024-07-12T11:00:00Z'), name: "Mittagessen", pretty: format(new Date('2024-07-12T11:00:00Z'), "kk:mm")},
                { date: new Date('2024-07-12T12:00:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T12:00:00Z'), "kk:mm") },
            ]
            endDate = new Date('2024-07-12T13:00:00Z')
            dateData = { startDate, eventsDates, endDate }

            bergbaumuseum = {
                "title": "Jahrhunderthalle",
                "subtitle": "Bochum",
                "longinfo": "Der Botanische Garten Bochum ist eine weitläufige Anlage, die eine Vielzahl von Pflanzenarten aus verschiedenen Klimazonen und Lebensräumen präsentiert. Besucher können thematische Gärten wie den Chinesischen Garten, das Tropenhaus und den Alpinum erkunden. Der Garten dient nicht nur der Erholung, sondern auch der Forschung und Lehre an der Ruhr-Universität Bochum. Er bietet eine ideale Umgebung, um die Vielfalt der Pflanzenwelt zu erleben und zu studieren.",
                "suitedFor": ["mobility"],
                "eventTimings": dateData,
                "pricePerPerson": 0,
                "images": ["1/Bergwerk_Info_001.png", "1/Bergwerk_Info_002.png"],
                "state": {"maxPeople": 8, "currentPeople": 5},
                "location": ["51.47709", "7.21480"]
            }


            bergbaumuseum_event = new Event(bergbaumuseum.title, bergbaumuseum.subtitle,
                bergbaumuseum.longinfo, bergbaumuseum.suitedFor, bergbaumuseum.eventTimings,
                bergbaumuseum.pricePerPerson, bergbaumuseum.images, bergbaumuseum.state,
                bergbaumuseum.location
            )

            entry = new EventModel(bergbaumuseum_event)
            entry.save().then((r) => {
                console.log(r)
            })

            

            response.status(300).json(bergbaumuseum_event);
            return
        })

        return result;
    }
    constructor() {
        super(RequestType.POST, path + stat);
    }
}

export default EventRoute;
