using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using BC = BCrypt.Net.BCrypt;

namespace Auth.Infra.Entities;

[Table("Users")]
public class User
{
    [Key]
    public Guid Id { get; private set; }
    public string Email { get; private set; }
    public string Password { get; private set; }

    public User(string email, string password)
    {
        Id = Guid.NewGuid();
        Email = email;
        Password = password;
    }

    internal void HashPassword()
    {
        if (string.IsNullOrEmpty(Password))
            throw new ArgumentNullException(nameof(Password));

        Password = BC.HashPassword(Password);
    }
}
