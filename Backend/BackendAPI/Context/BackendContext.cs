using Microsoft.EntityFrameworkCore;
using BackendAPI.Models;

namespace BackendAPI.Context 
{
    public class BackendContext : DbContext
    {
        public BackendContext(DbContextOptions<BackendContext> options)
            : base(options)
        {
        }

        public DbSet<Script> Scripts { get; set; }
    }
}


