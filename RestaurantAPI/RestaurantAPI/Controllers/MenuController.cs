using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantAPI.Data;
using RestaurantAPI.Models;


namespace RestaurantAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MenuController : Controller
    {
        private readonly RestaurantDbContext restaurantDbContext;

        public MenuController(RestaurantDbContext restaurantDbContext)
        {
            this.restaurantDbContext = restaurantDbContext;
        }
        [HttpGet]
        

        public async Task<IActionResult> GetAllMenu()
        {
            var menu = await restaurantDbContext.menus.ToListAsync();


            return Ok(menu);


        }
    }
}
       
    

