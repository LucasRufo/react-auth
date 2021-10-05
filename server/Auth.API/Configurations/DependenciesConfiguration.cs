using Auth.API.Token;
using Auth.Infra.Interfaces;
using Auth.Infra.Repositories;

namespace Auth.API.Configurations;

public static class DependenciesConfiguration
{
    public static void ResolveDependencies(this IServiceCollection services)
    {
        services.AddScoped<IUserRepository, UserRepository>();

        services.AddSingleton<TokenService>();
    }
}
