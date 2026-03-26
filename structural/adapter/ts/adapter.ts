/**
 * Adapter (estructural): el cliente espera send(message),
 * pero la API legada usa dispatchEmail(body, subject).
 */

// Interfaz que el cliente espera
interface Notifier {
  send(message: string): void;
}

// Clase con la API legada
class LegacyEmailApi {
  dispatchEmail(body: string, subject: string): void {
    console.log(`[legacy] subject="${subject}" body="${body} 🚀"`);
  }
}

// Adaptador: traduce la interfaz esperada a la legada
class EmailNotifierAdapter implements Notifier {
  private legacyApi: LegacyEmailApi;

  constructor(legacyApi: LegacyEmailApi) {
    this.legacyApi = legacyApi;
  }

  send(message: string): void {
    this.legacyApi.dispatchEmail(message, "notificación");
  }
}

// Cliente solo conoce objetos con .send()
function notifyUser(notifier: Notifier, text: string): void {
  notifier.send(text);
}

// Creamos una instancia de la API legada y la adaptamos
const legacy = new LegacyEmailApi();
const notifier = new EmailNotifierAdapter(legacy);

// Usamos el adaptador para notificar al usuario
notifyUser(notifier, "tu pedido está listo");
