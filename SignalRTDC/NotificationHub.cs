using System;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SignalRTDC
{
    [HubName("notification")]
    public class NotificationHub : Hub
    {
        public static void SendMessageNewContact(Contact contact)
        {
            var msg = String.Format("Novo contato: {0} <{1}>", contact.Name, contact.Email);

            var hubContext = GlobalHost.ConnectionManager.GetHubContext<NotificationHub>();
            hubContext.Clients.All.newContact(msg);
        }

        public static void SendMessageDeleteContact(Contact contact)
        {
            var msg = String.Format("Contato removido: {0} <{1}>", contact.Name, contact.Email);

            var hubContext = GlobalHost.ConnectionManager.GetHubContext<NotificationHub>();
            hubContext.Clients.All.deleteContact(msg);
        }
    }
}