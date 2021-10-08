using Auth.API.Configurations;
using Auth.API.Settings;
using Auth.Infra.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var privateJwtKey = builder.Configuration.GetSection("TokenSettings").GetSection("PrivateKey") ?? throw new ArgumentNullException();
var connectionString = builder.Configuration.GetConnectionString("AppDatabase");

builder.Services.ResolveDependencies();
builder.Services.ResolveAuthentication(privateJwtKey.Value);

//builder.Services.AddCors(options => options.AddPolicy("AnyOrigin", o => o.AllowAnyOrigin()));

builder.Services.AddControllers();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "Auth.API", Version = "v1" });
});

builder.Services.AddDbContext<ApplicationContext>(m => m.UseSqlServer(connectionString));
builder.Services.Configure<TokenSettings>
   (options => builder.Configuration.GetSection("TokenSettings").Bind(options));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Auth.API v1"));
}

app.UseCors(x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
