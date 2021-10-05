using Auth.API.DTOs;
using Auth.API.Validators;
using Auth.Infra.Entities;
using Auth.Infra.Interfaces;
using Microsoft.AspNetCore.Mvc;

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
}
