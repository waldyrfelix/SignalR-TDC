using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Microsoft.AspNet.SignalR;

namespace SignalRTDC
{
    public class Contact
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }

    public class ContactsController : ApiController
    {

        private readonly IHubContext _hubContext;

        private static readonly List<Contact> Contacts = new List<Contact>();

        public ContactsController()
        {
            _hubContext = GlobalHost.ConnectionManager.GetHubContext<EmployeeHub>();
        }

        // GET api/contacts
        public IEnumerable<Contact> Get()
        {
            return Contacts;
        }

        // POST api/contacts
        public Contact Post(Contact contact)
        {
            contact.Id = Guid.NewGuid();

            _hubContext.Clients.All.newContact(contact);

            Contacts.Add(contact);

            return contact;
        }

        // DELETE api/contacts
        public Contact Delete(Guid id)
        {
            var contact = Contacts.Single(x => x.Id == id);
            Contacts.Remove(contact);

            _hubContext.Clients.All.deleteContact(contact);
            return contact;
        }
    }
}