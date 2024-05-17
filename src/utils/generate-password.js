import bcrypt from "bcrypt";

export const generatePassword = async () => {
  const longitud = 12;
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";

  while (password.length < longitud) {
    const caracterAleatorio =
      caracteres[Math.floor(Math.random() * caracteres.length)];
    password += caracterAleatorio;
  }

  console.log(password);

  const passwordHash = await bcrypt.hash(contrasenaSegura, 10);

  return passwordHash;
};
