¿Red Doméstica o Entorno Aislado(VM)?

# Objetivo:
Conocer los dos entornos y establecer los pros y contras en ambos espacios de trabajo.

Anáisis
![image.png](attachment:aba7ce28-e697-48b2-bfd2-c4ca19b730f2:7ca2ddfc-8708-4c49-be69-5fb0cd5f4029.png)

Es una duda frecuente cuando estamos empezando, porque no tenemos muy claro el alcance o para qué sirve una máquina virtual o como en mi caso, el almacenamiento de mi laptop no es el adecuado, lo que hace que el trabajo que hace la máquina virtual sea lentísimo, pero si estoy implementando buenas prácticas, este paso es necesario así me tome un poco más de tiempo. 

**Red Doméstica**

Para empezar a entender estos conceptos de una forma gráfica, si vamos a analizar el tráfico de red desde una red doméstica, imaginemos que la red de tu casa es una calle y tu router es la esquina donde convergen todos tus dispositivos: PC, celular, TV, etc., y ahí se juntan para enviar y recibir información (datos), tú como analista observas desde la esquina (Router), quien entra y sale de las casas, como tu tlf envía mensajes a Instagram, como tu TV le pide un video a YouTube y como tu PC busca una tarea en Google y Wireshark es como una cámara con lupa en esa esquina, que te muestra todas las cartas que pasan y que tipo de cartas son: si es un pedido de una página web (HTTP/HTTPS), una consulta de nombres (DNS), o algo más técnico (TCP, UDP).

**Ventajas de analizar desde tu red doméstica**

Ves cómo se comporta el tráfico real: qué hacen las apps, cómo se comunican los dispositivos, qué es “normal”. 
*  Es ideal para aprender patrones comunes y entender cómo se comunican los servicios.
*  Recomendable que sean casos básicos y educativos.
*  No requiere configuración especial
*  Wireshare funciona con cualquiera de las interfaces
*  Está bueno para practicar filtrado, análisis básico y observar el tráfico “normal” de una red doméstica.

**Desventajas de analizar desde tu red doméstica**

Ves el tráfico real de tus dispositivos, por lo que debes tener cuidado de compartir o hacer capturas porque puedes mostrar datos privados, como direcciones IP de tu casa, nombres de sitios visitados por ti o tus familiares, etc.

Por estar en la “vida real” estás expuesto, no hagas pruebas peligrosas en la red doméstica, no descargues malware ni lances escaneos agresivos desde tu casa, porque puedes afectar a tus equipos o meterte en problemas con tu proveedor de Internet. Tu red doméstica no es el mejor lugar para ejecutar herramientas ofensivas.

**Entorno Aislado**

![image.png](attachment:11246c67-39e0-4238-b991-478173384781:image.png)

Si analizas desde un entorno aislado, en lugar de mirar toda la calle desde la esquina, te inventas un mini barrio dentro tu cuarto como si fuera una maqueta y observas esa interacción. En esa interacción solo están tu y tus pruebas, los sistemas operativos que quieras instalar, y lo que navegues o ejecutes en ese mundo virtual, el tráfico lo generas tu. Wireshare va a ver solo lo que ocurre dentro de ese mundo.

**¿Pero qué es una máquina virtual?**
Es una computadora virtualizada dentro de una computadora física que posee un software para crear un entorno aislado y seguro para probar múltiples sistemas operativos y estudiar tráficos de red, vulnerabilidades sin riesgos para la máquina física.

**Ventajas de analizar desde un entorno aislado VM**
Entorno seguro y controlado, puedes probar simulaciones de ataques, abrir archivos sospechosos, ejecutar scripts y no estás poniendo en riesgo tus equipos.

Es ideal para laboratorios de análisis de malware, tráfico malicioso o CTFs.

Cada práctica puede tener su snapshot o punto de restauración, es decir, el snapshot es como una foto que tomas de toda tu maquina virtual en un momento exacto, S.O, programas abiertos, configuración, etc, si te equivocas o algo sale mal, puedes restaurar el snapshot y la VM queda como al principio cuando sacaste la foto.

**Desventajas de analizar desde tu red doméstica**

Tienes tráfico limitado, si no generas tráfico activamente, la VM estará “vacía”, es decir, no hay navegación, DNS, ni comportamiento real a menos que lo provoques.

**Configuración de red necesaria**

Debes elegir el modo de red correcto en la configuración de la VM:

- **NAT:** la VM usa la conexión del host, pero no ve todo el tráfico.
- **Bridged:** la VM se comporta como otro dispositivo en la red, más realista.
- **Host-only:** conexión solo entre VM y tu PC, ideal para entornos cerrados.

Gracias por haber llegado hasta aquí, estos términos son necesarios para no confundirnos más adelante, en el siguiente artículo empezamos con la práctica: **Analizando el tráfico de red.**

