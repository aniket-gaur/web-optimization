onmessage = function (event) {
  console.log("Received message in worker:", event.data);

  const result = "Simulating a long task";

  setTimeout(() => {
    postMessage(result);
  }, 5000);
};
