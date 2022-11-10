const debounce = (callback: (...args: unknown[]) => void, delay: number) => {
  let timerId: NodeJS.Timeout;
  return (...args: unknown[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(callback, delay, ...args);
  };
};

export default debounce;
