using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Curve.Controllers
{
    public class MainController : Controller
    {
        // GET: Main
        public ActionResult MainHome()
        {
            return View();
        }
        public ActionResult RedirectToContent()
        {
            return PartialView("MainNew",null);// View();
        }
        
    }
}