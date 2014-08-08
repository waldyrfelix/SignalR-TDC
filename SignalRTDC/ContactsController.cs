using System.Collections.Generic;
using System.Web.Http;
using Microsoft.AspNet.SignalR;

namespace SignalRTDC
{
    public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }

    public class ContactsController : ApiController
    {

        public IHubContext HubContext { get; private set; }
        public static List<Contact> Contacts = new List<Contact>();

        public ContactsController()
        {
            HubContext = GlobalHost.ConnectionManager.GetHubContext<EmployeeHub>();
        }

        // GET api/contacts
        public IEnumerable<Contact> Get()
        {
            return Contacts;
        }

        // POST api/contacts
        public void Post(Contact contact)
        {
            HubContext.Clients.All.newContact(contact);

            Contacts.Add(contact);
        }
    }
}