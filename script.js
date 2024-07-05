// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Document loaded");
//   // Simulate a long task
//   setTimeout(() => {
//     console.log("Simulating a long task");
//   }, 5000);
// });

document.addEventListener("DOMContentLoaded", () => {
  console.log("Document loaded");
  if (window.Worker) {
    const myWorker = new Worker("worker.js");

    myWorker.postMessage("Hello, Worker!");

    myWorker.onmessage = function (event) {
      console.log("Received message from worker:", event.data);
    };
  }
});
