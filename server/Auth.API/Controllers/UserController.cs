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
    private readonly IValidator<User> _validator;

    public UserController(IUserRepository repository)
    {
        _userRepository = repository;
        _validator = new UserValidator();
    }

    public async Task<IActionResult> Post(User user)
    {
        var errors = _validator.Validate(user);

        if (errors.Any())
            return BadRequest(errors);

        await _userRepository.AddUser(user);

        return Ok(user);
    }
}
