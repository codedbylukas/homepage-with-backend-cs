using System;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("/")]
    public class IndexController: BaseApiController
    {
        [HttpGet]
        public IActionResult Index()
        {
            LogRequest("/");
            string Text = "Diese API ist dazu gemacht, auf die Anfragen des Frontends zu reagieren und nicht um es einfach so im Webbrowser zu nutzen. Dies ist eine reine Empfehlung und keine Verplichtung. Sonst werden Sie warscheinlich so keinen Spaß haben.";
            return Ok(Text);
        }
    }
}
