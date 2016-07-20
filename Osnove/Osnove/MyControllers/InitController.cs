using Jayrock.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Osnove.MyControllers
{
    public class InitController : Controller
    {
        public ActionResult Default()
        {
            return File("~/IndexHtml.html", "text/html");
        }        
    }
}