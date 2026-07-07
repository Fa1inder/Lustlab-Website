module.exports = async function handler(req, res) {
  try {
    const r = await fetch('https://api.github.com/repos/Fa1inder/Lustlab-CRM/releases/latest', {
      headers: {
        'User-Agent': 'Lustlab-Website',
        'Accept': 'application/vnd.github+json'
      }
    });
    const text = await r.text();
    res.status(200).send(`HTTP ${r.status}\n\n${text}`);
  } catch (err) {
    res.status(200).send(`EXCEPTION: ${err.message}`);
  }
};
