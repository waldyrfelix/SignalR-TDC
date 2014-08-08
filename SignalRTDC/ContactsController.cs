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
        private static readonly List<Contact> Contacts = new List<Contact>();

        // GET api/contacts
        public IEnumerable<Contact> Get()
        {
            return Contacts;
        }

        // POST api/contacts
        public Contact Post(Contact contact)
        {
            contact.Id = Guid.NewGuid();
            Contacts.Add(contact);

            NotificationHub.SendMessageNewContact(contact);
            return contact;
        }

        // DELETE api/contacts
        public Contact Delete(Guid id)
        {
            var contact = Contacts.Single(x => x.Id == id);
            Contacts.Remove(contact);

            NotificationHub.SendMessageDeleteContact(contact);
            return contact;
        }
    }
}