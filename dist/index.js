"use strict";
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://souzamateus1998:EV5EGbftxv1fMPMx@cluster0.scduko7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
