﻿using Microsoft.AspNetCore.Mvc;

namespace site_control_panel.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult IsConfiguration()
        {
            return View();
        }
    }
}
