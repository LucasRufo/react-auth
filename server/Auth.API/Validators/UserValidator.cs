using Auth.API.DTOs;

namespace Auth.API.Validators;

public class UserValidator : IValidator<UserDto>
{
    public IDictionary<string, string> Validate(UserDto entity)
    {
        var errors = new Dictionary<string, string>();

        if (string.IsNullOrEmpty(entity.Email))
            errors.Add(nameof(entity.Email), "Email inválido");

        if (string.IsNullOrEmpty(entity.Password))
            errors.Add(nameof(entity.Password), "Senha inválida");

        return errors;
    }
}
