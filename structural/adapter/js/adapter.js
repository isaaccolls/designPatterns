/**
 * Adapter (estructural): el cliente espera send(message),
 * pero la API legada usa dispatchEmail(body, subject).
 */

class LegacyEmailApi {
  dispatchEmail(body, subject) {
    console.log(`[legacy] subject="${subject}" body="${body}"`);
  }
}

/** Adaptador: traduce la interfaz esperada a la legada. */
class EmailNotifierAdapter {
  constructor(legacyApi) {
    this.legacyApi = legacyApi;
  }

  send(message) {
    this.legacyApi.dispatchEmail(message, "notificación");
  }
}

// Cliente solo conoce objetos con .send()
function notifyUser(notifier, text) {
  notifier.send(text);
}

const legacy = new LegacyEmailApi();
const notifier = new EmailNotifierAdapter(legacy);

notifyUser(notifier, "tu pedido está listo");
