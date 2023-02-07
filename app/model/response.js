function response(req, res) {
  res.status(200).json({
    success: true,
    data: req.data.data,
  });
}

module.exports = response;
