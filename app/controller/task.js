function getAll(req, res, next) {
  req.data = {
    status: 200,
    data: [],
  };

  next();
}

function add(req, res, next) {
  req.data = {
    status: 200,
    data: [],
  };

  next();
}

function edit(req, res, next) {
  req.data = {
    status: 200,
    data: [],
  };

  next();
}

function remove(req, res, next) {
  req.data = {
    status: 200,
    data: [],
  };

  next();
}

module.exports = {
  getAll,
  add,
  edit,
  remove,
};
