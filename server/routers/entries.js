const {Router} = require('express');
const entryController = require('..controller/entrycontroller.js');
const entryRouter = Router();

entryRouter.get("/", entryController.index);
entryRouter.get("/:date", entryController.show);
entryRouter.get("/:category", entryController.show);
entryRouter.post("/", entryController.create);
entryRouter.put("/:date", entryController.update);
entryRouter.delete("/:date", entryController.destroy);

module.exports = entryRouter;