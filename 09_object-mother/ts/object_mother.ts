class User {
  public name: string;
  public email: string;
  public role: string;

  constructor(name: string, email: string, role: string) {
    this.name = name;
    this.email = email;
    this.role = role;
  }
}

class ObjectMother {
  public static createDefaultUser(): User {
    return new User("John Doe", "john@example.com", "user");
  }

  public static createAdminUser(): User {
    return new User("Admin User", "admin@example.com", "admin");
  }

  public static createUserWithCustomRole(role: string): User {
    return new User("Custom User", "custom@example.com", role);
  }
}

// Ejemplo de uso en una prueba:
const defaultUser: User = ObjectMother.createDefaultUser();
console.log(defaultUser);

const adminUser: User = ObjectMother.createAdminUser();
console.log(adminUser);

const customUser: User = ObjectMother.createUserWithCustomRole("manager");
console.log(customUser);
