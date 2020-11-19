const deviceController = require("../controllers/device.controller");

module.exports = function (app) {
    app.post("/api/test", deviceController.test)
    app.post("/api/devices", deviceController.create);
    app.get("/api/devices", deviceController.index);
    app.get("/api/devices/:id", deviceController.show);
    app.put("/api/devices/:id", deviceController.update);
    app.delete("/api/devices/:id", deviceController.destroy);
};
