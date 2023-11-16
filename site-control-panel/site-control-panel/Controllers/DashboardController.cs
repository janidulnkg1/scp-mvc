using Microsoft.AspNetCore.Mvc;
using site_control_panel.Models;
using System.Diagnostics;

namespace site_control_panel.Controllers
{
    public class DashboardController : Controller
    {
        private readonly ILogger<DashboardController> _logger;

        public DashboardController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Dashboard()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}