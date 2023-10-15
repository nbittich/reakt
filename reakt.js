export const APP_DIV = document.querySelector("#app");

export function useState(value) {
  return [
    () => value,
    (newValue) => {
      value = newValue;
    },
  ];
}

export function reakt(updateFunction, timeout = 50) {
  (function loop() {
    Promise.resolve()
      .then(updateFunction)
      .then(
        async () =>
          await new Promise((resolve) => setTimeout(resolve, timeout)),
      )
      .catch((e) => console.error(e))
      .then(loop);
  })();
}
