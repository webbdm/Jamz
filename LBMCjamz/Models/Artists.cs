using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LBMCjamz.Models
{
    public class Artist
    {
        [Key]
        public int ArtistID { get; set; }
        public string ArtistName { get; set; }
    }
}