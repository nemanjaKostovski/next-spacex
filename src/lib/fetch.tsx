const URL = 'https://api.spacexdata.com';
const VERSION = '/v4';

async function getCompanyInfo() {
  const response = await fetch(`${URL}${VERSION}/company`);
  if (response.status !== 200) {
    throw new Error(`Fetch failed ${response.status}`);
  }

  const data = await response.json();
  return data;
}

async function getLaunchesInfo() {
  const response = await fetch(`${URL}${VERSION}/launches`);

  if (response.status !== 200) {
    throw new Error(`Fetch failed ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export { getCompanyInfo, getLaunchesInfo };
