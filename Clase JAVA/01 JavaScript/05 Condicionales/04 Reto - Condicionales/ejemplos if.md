if (condición) {
  // Código a ejecutar si la condición es verdadera
} else {
  // Código a ejecutar si la condición es falsa
}




int numero = -5;

if (numero >= 0) {
  System.out.println("El número es positivo.");
} else {
  System.out.println("El número es negativo.");
}




int edad = 25;
String licencia = "SI";

if (edad >= 18) {
  if (licencia.equals("SI")) {
    System.out.println("Puede conducir.");
  } else {
    System.out.println("Debe obtener una licencia para conducir.");
  }
} else {
  System.out.println("No tiene la edad suficiente para conducir.");
}