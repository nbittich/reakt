export function useState(value) {
  return [
    () => value,
    (newValue) => {
      value = newValue;
    },
  ];
}

class ReaktFramework {
  constructor() {
    this.components = [];
    this.timeout = 50;
    this.appDiv = document.querySelector("#app");
    this.run();
  }
  run() {
    const self = this;
    (function loop() {
      Promise.resolve()
        .then(async () => {
          for (const component of self.components) {
            let currentState = component.state();
            if (currentState !== component.old_state) {
              await Promise.all(
                component.updatesFn.map(async (updater) => await updater()),
              );
              component.old_state = currentState;
            }
          }
        })
        .then(
          async () =>
            await new Promise((resolve) => setTimeout(resolve, self.timeout)),
        )
        .catch((e) => console.error(e))
        .then(loop);
    })();
  }
  registerComponent(elem, state, updatesFn = []) {
    this.components.push({ state, old_state: state(), elem, updatesFn });
    this.appDiv.appendChild(elem);
  }
  destroyComponent(elem) {
    this.components = this.components.filter((c) => c.elem === elem);
    this.appDiv.removeChild(elem);
  }
}

export const Reakt = new ReaktFramework();
