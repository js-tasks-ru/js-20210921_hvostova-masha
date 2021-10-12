export default class NotificationMessage {
  element;
  static activeNotificationElement;
  static timer;

  constructor(notificationMessage = '', {duration = 0, type = ''} = {}) {
    this.notificationMessage = notificationMessage;
    this.duration = duration;
    this.type = type;

    this.render();
  }

  get template() {
    return `
     <div class="notification ${this.type}" style="--value:${this.duration}ms">
       <div class="timer"></div>
       <div class="inner-wrapper">
         <div class="notification-header">${this.type}</div>
         <div class="notification-body">
           ${this.notificationMessage}
         </div>
       </div>
     </div>`;
  }

  show(targetElement) {
    if (NotificationMessage.activeNotificationElement) {
      clearTimeout(NotificationMessage.timer);
      this.remove();
    }

    this.render();
    NotificationMessage.activeNotificationElement = this.element;
    if (targetElement) {
      targetElement.appendChild(this.element);
    } else {
      document.body.append(this.element);
    }
    NotificationMessage.timer = setTimeout(() => {
      this.remove();
    }, this.duration);
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = this.template;
    this.element = element.firstElementChild;
  }

  remove() {
    this.element.remove();
    NotificationMessage.activeNotificationElement.remove();
    NotificationMessage.activeNotificationElement = null;
  }

  destroy() {
    this.element.remove();
    NotificationMessage.activeNotificationElement = null;
    NotificationMessage.timer = null;
  }
}
