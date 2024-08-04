exports.adminMiddleware = (req, res, next) => {
    if (req.headers['api-key'] !== process.env.ADMIN_API_KEY) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
  