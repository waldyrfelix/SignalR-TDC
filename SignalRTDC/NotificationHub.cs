﻿using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SignalRTDC
{
    [HubName("employee")]
    public class EmployeeHub : Hub
    {
        private static ConcurrentDictionary<string, List<int>> _mapping = new ConcurrentDictionary<string, List<int>>();

        public override Task OnConnected()
        {
            _mapping.TryAdd(Context.ConnectionId, new List<int>());
            Clients.All.newConnection(Context.ConnectionId);
            return base.OnConnected();
        }

        public void Lock(int id)
        {
            //var employeeToPatch = db.Employees.Find(id);
            //employeeToPatch.Locked = true;
            //db.Entry(employeeToPatch).State = EntityState.Modified;
            //db.SaveChanges();
            Clients.Others.lockEmployee(id);
            _mapping[Context.ConnectionId].Add(id);
        }

        public void Unlock(int id)
        {
            UnlockHelper(id);
            _mapping[Context.ConnectionId].Remove(id);
        }

        private void UnlockHelper(int id)
        {
            //var employeeToPatch = db.Employees.Find(id);
            //employeeToPatch.Locked = false;
            //db.Entry(employeeToPatch).State = EntityState.Modified;
            //db.SaveChanges();
            Clients.Others.unlockEmployee(id);
        }

        public override Task OnDisconnected()
        {
            foreach (var id in _mapping[Context.ConnectionId])
            {
                UnlockHelper(id);
            }
            var list = new List<int>();
            _mapping.TryRemove(Context.ConnectionId, out list);
            Clients.All.removeConnection(Context.ConnectionId);
            return base.OnDisconnected();
        }
    }

}