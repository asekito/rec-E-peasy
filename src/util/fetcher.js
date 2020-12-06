const fetcher = (url, opts) => {
  return window
    .fetch(url, opts)
    .then((res) => {
      if (res.errors) {
        throw res.errors;
      }

      if (res.body) {
        return res.json();
      }
    })
    .catch((err) => {
      return err;
    });
};

window.debugFetcher = fetcher;
export default fetcher;
