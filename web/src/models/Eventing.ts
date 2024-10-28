// use as a type annotation
type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  // converted to arrow (bind) function that has its "this"
  // value permanently set to a specific object (events)
  on = (eventName: string, callback: Callback): void => {
    // building an array of callbacks for some event
    const handlers = this.events[eventName] || []; // same as events.events[eventName]
    handlers.push(callback);
    this.events[eventName] = handlers; // same as events.events[eventName]
  };

  // converted to arrow (bind) function that has its "this"
  // value permanently set to a specific object (events)
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName]; // same as events.events[eventName]
    // check to see if handlers has a value
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  };
}
