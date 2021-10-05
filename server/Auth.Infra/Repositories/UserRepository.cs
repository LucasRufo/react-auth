using Auth.Infra.Context;
using Auth.Infra.Entities;
using Auth.Infra.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Auth.Infra.Repositories;

public class UserRepository : IUserRepository
{
    private readonly ApplicationContext _contexto;

    public UserRepository(ApplicationContext context)
    {
        _contexto = context;
    }

    public async Task Add(User user)
    {
        _contexto.User.Add(user);
        await _contexto.SaveChangesAsync();
    }

    public async Task<User> GetByEmail(string email) 
        => await _contexto.User.FirstOrDefaultAsync(m => m.Email == email);
}
