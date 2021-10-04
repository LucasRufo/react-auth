namespace Auth.API.Validators;

public interface IValidator<Entity> where Entity : class
{
    IDictionary<string, string> Validate(Entity entity);
}
