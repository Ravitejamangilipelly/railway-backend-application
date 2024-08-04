const Train = require('../models/Train');

exports.addTrain = async (req, res) => {
  const { train_name, source, destination, total_seats } = req.body;
  await Train.createTrain(train_name, source, destination, total_seats);
  res.status(201).json({ message: 'Train added successfully' });
};

exports.getSeatAvailability = async (req, res) => {
  const { source, destination } = req.query;
  const trains = await Train.getTrainsByRoute(source, destination);
  res.status(200).json(trains);
};
