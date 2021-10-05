using Auth.Infra.Entities;
using Microsoft.EntityFrameworkCore;

namespace Auth.Infra.Context;
public class ApplicationContext : DbContext
{
    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
    }

    public DbSet<User> User { get; set; }
}
