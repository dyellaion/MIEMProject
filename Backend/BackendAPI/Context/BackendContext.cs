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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Script>()
                .HasData(
                    new Script
                    {
                        ID = 1,
                        scriptName = "test.py",
                        path = "test.py",
                        lang = "python"
                    },
                    new Script
                    {
                        ID = 2,
                        scriptName = "test.rb",
                        path = "test.rb",
                        lang = "ruby"
                    }
                );
        }
        public DbSet<Script> Scripts { get; set; }
    }
}


