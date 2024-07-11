import mongoose, { Schema, Document } from "mongoose";

export class Event {
    title: string
    subtitle: string
    longinfo: string
    suitedFor: string[]
    eventTimings: {}
    pricePerPerson: number
    images: string[]
    state: {maxPeople: Number, currentPeople: Number}
    location: string[]

    constructor(
        title: string,
        subtitle: string,
        longinfo: string,
        suitedFor: string[],
        eventTimings: {},
        pricePerPerson: number,
        images: string[],
        state: {maxPeople: Number, currentPeople: Number},
        location: string[]
    ) {
        this.title = title;
        this.subtitle = subtitle;
        this.longinfo = longinfo;
        this.suitedFor = suitedFor;
        this.eventTimings = eventTimings;
        this.pricePerPerson = pricePerPerson;
        this.images = images;
        this.state = state;
        this.location = location
    }
}

const EventSchema: Schema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    longinfo: { type: String, required: true },
    suitedFor: { type: [String], required: true },
    eventTimings: { type: {}, required: true},
    pricePerPerson: { type: Number, required: true },
    images: { type: [String], required: true },
    state: {type: {"maxPeople": Number, "currentPeople": Number}, required: true},
    location: {type: [String], required: true},
});

export const EventModel = mongoose.model<Event>("events", EventSchema)
