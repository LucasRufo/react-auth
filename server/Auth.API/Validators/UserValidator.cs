using Auth.Infra.Entities;

namespace Auth.API.Validators;

public class UserValidator : IValidator<User>
{
    public IDictionary<string, string> Validate(User entity)
    {
        var errors = new Dictionary<string, string>();

        if (string.IsNullOrEmpty(entity.Email))
            errors.Add(nameof(entity.Email), "Email inválido");

        if (string.IsNullOrEmpty(entity.Password))
            errors.Add(nameof(entity.Password), "Senha inválida");

        return errors;
    }
}
