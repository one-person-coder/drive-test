const mainRootAPI = "https://driveapi.moviesburn.com";

function getApiUrl(calledValue, apiType) {
  return `${mainRootAPI}/${calledValue}/${apiType}`;
}

export { getApiUrl };
