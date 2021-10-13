using Auth.API.DTOs;
using Auth.API.Validators;
using Auth.Infra.Entities;
using Auth.Infra.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Auth.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserRepository _userRepository;
    private readonly IValidator<UserDto> _validator;
    public UserController(IUserRepository repository)
    {
        _userRepository = repository;
        _validator = new UserValidator();
    }

    [HttpGet]
    [Authorize]
    public async Task<IActionResult> GetGuid()
    {
        var userEntity = await _userRepository.GetByEmailAsync(ReadClaimValue("Email"));

        if (userEntity is null) return NotFound();

        return Ok(new { Guid = Guid.NewGuid() });
    }

    [HttpPost]
    public async Task<IActionResult> Post(UserDto user)
    {
        var errors = _validator.Validate(user);

        if (errors.Any())
            return BadRequest(errors);

        var userEntity = new User(user.Email, user.Password);

        await _userRepository.AddAsync(userEntity);

        return Ok(user);
    }

    private string ReadClaimValue(string claim)
    {
        ClaimsIdentity identity = HttpContext.User.Identity as ClaimsIdentity;

        if (identity != null)
        {
            return identity.FindFirst(claim)?.Value;
        }

        return "";
    }
}
