// import modules

export const authRequired = (errorMessage) => {
  return (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(403);
      res.end(`Error: ${errorMessage}`);
    }
  }
};