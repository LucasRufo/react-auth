using Auth.Infra.Context;
using Auth.Infra.Entities;
using Auth.Infra.Interfaces;

namespace Auth.Infra.Repositories;

public class UserRepository : IUserRepository
{
    private readonly ApplicationContext _contexto;

    public UserRepository(ApplicationContext context)
    {
        _contexto = context;
    }

    public async Task AddUser(User user)
    {
        _contexto.User.Add(user);
        await _contexto.SaveChangesAsync();
    }
}
