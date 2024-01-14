function sonAnagramas(palabra1, palabra2) {
    // Convertir ambas palabras a minúsculas
    palabra1 = palabra1.toLowerCase();
    palabra2 = palabra2.toLowerCase();
  
    // Convertir a arrays de caracteres, ordenar y unir
    const cadenaOrdenada1 = palabra1.split('').sort().join('');
    const cadenaOrdenada2 = palabra2.split('').sort().join('');
  
    // Verificar si las cadenas ordenadas son iguales
    if (cadenaOrdenada1 === cadenaOrdenada2) {
      return true;
    } else {
      return false;
    }
  }