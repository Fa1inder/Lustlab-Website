export default async function handler(req, res) {
  try {
    const r = await fetch('https://api.github.com/repos/Fa1inder/Lustlab-CRM/releases/latest', {
      headers: { 'User-Agent': 'Lustlab-Website' }
    });
    const data = await r.json();
    const asset = data.assets?.find(a => a.name.endsWith('.exe'));
    if (asset) {
      res.redirect(302, asset.browser_download_url);
    } else {
      res.status(503).send('Download temporarily unavailable. Please try again later.');
    }
  } catch {
    res.status(503).send('Download temporarily unavailable. Please try again later.');
  }
}
