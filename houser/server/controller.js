module.exports = {
  getAllHouses: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_all().then(houses => res.send(houses))
  },
  addHouse: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {name, address, city, state, zip} = req.body;

    dbInstance.add_house([name, address, city, state, zip]).then(() => res.sendStatus(200))
  },
  removeHouse: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {id} = req.params;

    dbInstance.delete_house(id).then(() => res.sendStatus(200))
  }
}