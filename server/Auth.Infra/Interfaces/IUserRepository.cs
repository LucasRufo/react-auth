using Auth.Infra.Entities;

namespace Auth.Infra.Interfaces;

public interface IUserRepository
{
    Task AddUser(User user);
}
