using Auth.Infra.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Auth.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    public IActionResult Post(User user)
    {
        return Ok();
    }
}
