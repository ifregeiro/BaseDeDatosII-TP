
# Trabajo Práctico: Agregación en MongoDB

## Ejercicio 1: Filtrado básico con `$match`

---

### 🔍 Consulta 1: Productos electrónicos con precio > 500

```js
db.productos.aggregate([
  {
    $match: {
      categoria: "Electrónica",
      precio: { $gt: 500 }
    }
  }
])
```

📌 **Explicación**: Se buscan los productos que pertenecen a la categoría "Electrónica" y tienen un precio mayor a 500.

![screen1](img/ej1_captura1.png)

---

### 🔍 Consulta 2: Ventas a clientes de España con estado "Entregado"

```js
db.ventas.aggregate([
  {
    $match: {
      "cliente.pais": "España",
      estado: "Entregado"
    }
  }
])
```

📌 **Explicación**: Se filtran las ventas realizadas a clientes cuyo país es "España" y el estado de la venta es "Entregado".

![screen2](img/ej1_captura2.png)