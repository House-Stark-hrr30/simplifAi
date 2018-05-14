const morganSettings = (tokens, req, res) => {
  return [
  tokens.method(req, res),
  tokens.url(req, res),
  tokens.status(req, res),
  JSON.stringify(req.body),
  '\n',
  tokens.res(req, res, 'content-length'),
  '-',
  tokens['response-time'](req,res),
  'ms'].join(' ');
};

export default morganSettings;