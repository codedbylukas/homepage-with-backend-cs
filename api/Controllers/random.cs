using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace api.Controllers
{
    public abstract class BaseRandomController : ControllerBase
    {
        protected static readonly Random SharedRandom = new();
        protected void LogRequest(string endpointFromApi)
        {
            string ip = HttpContext.Connection.RemoteIpAddress?.ToString() ?? "Unknown IP";
            string httpMethod = HttpContext.Request.Method;
            string timestamp = DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss.fff");
            string logMessage = $"Received request: From {ip}, to {endpointFromApi}, at: {timestamp}, method: {httpMethod}.";
            Log.Information(logMessage);
        }
    }

    [ApiController]
    [Route("api/random")]
    public class RandomController : BaseRandomController
    {
        [HttpGet]
        public IActionResult GetRandomNumber()
        {
            LogRequest("/api/random");
            return Ok(new { randomNumber = SharedRandom.Next(1, 101) });
        }

        [HttpPost]
        public IActionResult PostRandomNumber()
        {
            LogRequest("/api/random (POST)");
            return Ok(new { randomNumber = SharedRandom.Next(1, 101) });
        }
    }
}
