using Auth.Infra.Entities;

namespace Auth.Infra.Interfaces;

public interface IUserRepository
{
    Task Add(User user);
    Task<User> GetByEmail(string email);
}
