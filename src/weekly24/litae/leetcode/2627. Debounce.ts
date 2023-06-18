type F = (...p: any[]) => any;

const debounce = (fn: F, t: number): F => {
  let timerId;
  return function (...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
