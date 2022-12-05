//Basic array to simulate our DB
let items = [
  {
    id: 0,
    description:
      "Working in an experienced and knowledgeable team, in an Agile environment",
  },
  {
    id: 1,
    description:
      "Dev-friendly processes such as Continuous Integration, Continuous Delivery, Code Review",
  },
  {
    id: 2,
    description: "Constant development of your professional skills",
  },
  {
    id: 3,
    description:
      "Modern technology projects with top companies (Enterprises and Start-ups)",
  },
  {
    id: 4,
    description:
      "Enjoying hybrid type of work & flextime: adjust your daily schedule to your individual needs and work fully remotely from wherever you want",
  },
  {
    id: 5,
    description: "Flat company structure- plenty of room for your own ideas",
  },
];

/*
In larger project scope or DB connection
error handelling and security (tokens,Hashing etc...) will be applied!
*/

export const getItems = (req, res) => {
  res.status(200).json(items);
};

export const addItem = (req, res) => {
  items.push({
    id: items.length + 1,
    description: req.body.description,
  });
  return res.status(200).json("Item added");
};

export const deleteItem = (req, res) => {
  let index = items.findIndex((item) => {
    return item.id.toString() === req.params.id;
  });
  items.splice(index, 1);
  return res.status(200).json("Item deleted");
};
