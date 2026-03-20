<?php
session_start();

// Verificar si el usuario está logueado
if (!isset($_SESSION['usuario'])) {
    header("Location: login.html");
    exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Datos del Usuario</title>
</head>
<body>
  <h2>Bienvenido, <?php echo $_SESSION['usuario']; ?>!</h2>
  <p>ID de usuario: <?php echo $_SESSION['id']; ?></p>
  <a href="logout.php">Cerrar sesión</a>
</body>
</html>