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
        Password = BC.HashPassword(password);
    }

    public bool CheckPassword(string password) => BC.Verify(password, Password);
    
}
