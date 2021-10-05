using Auth.Infra.Entities;

namespace Auth.Infra.Interfaces;

public interface IUserRepository
{
    Task AddAsync(User user);
    Task<User> GetByEmailAsync(string email);
}
