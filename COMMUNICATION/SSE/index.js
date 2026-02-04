const express = require("express");
const path = require("path");
const app = express();

app.get("/sse", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    res.flushHeaders?.();

    res.write("data: Welcome to Server Sent Events\n\n");

    const interval = setInterval(() => {
        res.write(`data: ${new Date().toISOString()}\n\n`);
    }, 2000);

    req.on("close", () => {
        clearInterval(interval);
        console.log("Client disconnected");
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
