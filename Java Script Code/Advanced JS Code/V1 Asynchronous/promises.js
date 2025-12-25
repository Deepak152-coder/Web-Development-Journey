function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success === 1) {
        resolve("Data Fetched successfully!");
      } else {
        reject("Error Fetched data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
