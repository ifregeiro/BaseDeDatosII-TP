1. Backup completo de la base:
   mysqldump -u root -p nombre_base > backup.sql

2. Simular pérdida de datos:
   DROP TABLE Clientes;

3. Restaurar desde backup:
   mysql -u root -p nombre_base < backup.sql

4. Comprobación:
   SELECT * FROM Clientes;