using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantAPI.Data;
using RestaurantAPI.Models;

namespace RestaurantAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemsController : Controller
    {
       
            private readonly RestaurantDbContext restaurantDbContext;

            public ItemsController(RestaurantDbContext restaurantDbContext)
            {
                this.restaurantDbContext = restaurantDbContext;
            }
            [HttpGet]
        [Route("{id}")]

            public async Task<IActionResult> GetAllItems(int id)
            {
            var item = await (from i in restaurantDbContext.items
                              where i.MenuID == id
                              select new Item()
                              {
                                  ItemID = i.ItemID,
                                  MenuID = i.MenuID,
                                  Name = i.Name,
                                  Price = i.Price,
                              }
                              ).ToListAsync();
                    

                return Ok(item);


            }
        }
    }