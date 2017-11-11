using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace LBMCjamz.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext() : base("LBMCjamz")
        {}

        public DbSet<Artist> Artists { get; set; }
        public DbSet<Album> Albums { get; set; }
        //public DbSet<Song> Songs { get; set; }

    }
}