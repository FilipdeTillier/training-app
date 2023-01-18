const jsonServer = require("json-server");
const fs = require("fs");
const { v4 } = require("uuid");
const bodyParser = require("body-parser");
const server = jsonServer.create();
const filePath = "./db.json";
const router = jsonServer.router(filePath);
const db = JSON.parse(fs.readFileSync(filePath, "UTF-8").toString());
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());

server.get("/service-provider", (req, res) => {
  const { query } = req;

  try {
    let results = db["service-provider"];
    const {
      specialty = "",
      province = "",
      _page = 1,
      _limit = 10,
      _sortBy = "",
    } = query;
    if (specialty || province) {
      if (specialty) {
        results = results.filter((el) => el.serviceType === specialty);
      }
      if (province) {
        results = results.filter((el) => el.province === province);
      }
    }
    const pages = Math.ceil(results.length / _limit);
    const from = (Number(_page) - 1) * Number(_limit);
    const to = Number(_page) * Number(_limit);
    results = results.slice(from, to);
    return res.json({ results, pages }).status(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500).json(err);
  }
});

server.post("/generate-plan", (req, res) => {
  try {
    const { exercises, warmUp } = db.allExercises;
    const plan = {
      ...req.body,
      id: v4(),
      exercises: exercises.slice(0, 3),
      warmUp: warmUp.slice(0, 3),
    };
    const wholeDb = { ...db, plans: [...db.plans, plan] };
    fs.writeFile(filePath, JSON.stringify(wholeDb), () => {
      return res.json(plan.id).status(201);
    });
  } catch (err) {
    return res.json(err).status(404);
  }
});

server.use(middlewares);
server.use(cors());
server.use(router);

server.listen(3004, () => {
  console.log("JSON Server is running");
});
