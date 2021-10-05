using Auth.API.DTOs;
using Auth.API.Token;
using Auth.Infra.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Auth.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IUserRepository _userRepository;
    private readonly TokenService _tokenService;
    public AuthController(IUserRepository repository, TokenService tokenService)
    {
        _userRepository = repository;
        _tokenService = tokenService;
    }

    [HttpPost]
    public async Task<IActionResult> Post(UserDto user)
    {
        var userEntity = await _userRepository.GetByEmail(user.Email);

        if (userEntity is null) return NotFound();

        if (userEntity.CheckPassword(user.Email)) return BadRequest(new Dictionary<string, string>() { { nameof(userEntity.Password), "Senha inválida" } });

        var token = _tokenService.GenerateToken(userEntity);

        return Ok(new { access_token = token });
    }
}
