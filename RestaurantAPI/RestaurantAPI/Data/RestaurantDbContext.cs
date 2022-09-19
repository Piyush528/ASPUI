using Microsoft.EntityFrameworkCore;
using RestaurantAPI.Models;

namespace RestaurantAPI.Data
{
    public class RestaurantDbContext : DbContext
    {
        public RestaurantDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Menu> menus { get; set; }
        public DbSet<Item> items { get; set; }
        
    }
}
