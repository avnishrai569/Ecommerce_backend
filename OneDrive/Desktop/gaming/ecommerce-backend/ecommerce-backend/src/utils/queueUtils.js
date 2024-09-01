const queue = [];
const processQueue = () => {
  while (queue.length) {
    const task = queue.shift();
    task();
  }
};

exports.addToQueue = (task) => {
  queue.push(task);
  processQueue();
};
