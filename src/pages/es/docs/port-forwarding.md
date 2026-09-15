---
layout: ../../../layouts/DocLayout.astro
title: "Reenvío de puertos"
description: "Configura túneles SSH y servidores de salto en Android e iOS, además de VPN, proxy SOCKS5, enrutamiento y DNS en Android."
---

# Reenvío de puertos

Mobile SSH admite el reenvío local de puertos SSH tanto en Android como en iOS. Un puerto local en el dispositivo escucha en `127.0.0.1` y reenvía el tráfico a través de la conexión SSH a un host y puerto remotos.

Android también tiene una página **VPN** para SSH VPN, proxy SOCKS5 local, WireGuard, Shadowsocks y OpenVPN. Estos perfiles son independientes de los reenvíos locales descritos abajo.

## Sintaxis del túnel guardado

Las reglas de reenvío de puertos se separan por comas. Cada entrada usa una de dos formas:

```text
PORT
LOCAL:REMOTEHOST:REMOTE
```

Forma corta:

```text
8080
```

Esto vincula `127.0.0.1:8080` en el dispositivo y lo reenvía a `localhost:8080` desde el punto de vista del servidor.

Forma completa:

```text
3000:localhost:3000
```

Esto vincula `127.0.0.1:3000` en el dispositivo y lo reenvía por SSH a `localhost:3000` en el lado remoto.

Varios reenvíos:

```text
8080, 3000:localhost:3000, 15432:db.internal:5432
```

## Agregar un túnel a un servidor guardado

1. Abre **Saved Servers**.
2. Agrega o edita un perfil de servidor.
3. Introduce las reglas de reenvío en **Port forwards**.
4. Guarda el servidor.
5. Conéctate al servidor.

La app aplica los reenvíos guardados después de que la sesión SSH se conecta.

## Los túneles pertenecen al perfil del servidor

Los reenvíos locales se guardan en el perfil y se activan al conectar ese servidor. Para cambiarlos, edita el perfil y vuelve a conectar.

Un túnel guardado vuelve cada vez que conectas, también después de reconectar en otra red.

## Destinos IPv6

Un destino IPv6 debe ir entre corchetes para que los dos puntos no puedan confundirse con el separador de puerto:

```text
8080:[2001:db8::1]:80
```

Una dirección IPv6 desnuda, sin corchetes, se rechaza por ambigua en lugar de interpretarse mal en silencio. La misma forma con corchetes funciona en el campo de dirección de un servidor, con un puerto opcional detrás (`[fe80::1]:22`).

## Vinculación de dirección

Mobile SSH vincula los reenvíos locales a `127.0.0.1` en el dispositivo. Es intencional: mantiene el túnel local al dispositivo y evita sorpresas de loopback solo IPv6. Otras apps en el mismo dispositivo podrían conectarse al puerto local reenviado si el sistema operativo permite su acceso de red.

## Ejemplos comunes

Acceder a un servicio web que se ejecuta en el servidor remoto:

```text
8080
```

Luego abre `http://127.0.0.1:8080` desde un navegador en el mismo dispositivo.

Acceder a un servidor de desarrollo:

```text
3000:localhost:3000
```

Acceder a una base de datos interna accesible desde el servidor SSH:

```text
15432:db.internal:5432
```

## Conexiones mediante servidores de salto

En ambas plataformas puedes conectar un servidor SSH mediante una lista ordenada de bastiones guardados. Edita el destino, añádelos en **Conectar mediante** y ordénalos. Cada salto usa sus propias credenciales; la ruta expandida admite hasta ocho saltos.

El teléfono alcanza el primer bastión; cada dirección posterior debe ser accesible desde el servidor anterior. Los reenvíos locales siguen la misma ruta SSH verificada que el terminal y SFTP. El destino del reenvío se alcanza desde el último servidor SSH. Cada bastión debe permitir reenvío TCP y se comprueba cada identidad antes de autenticar. Estas rutas requieren SSH y no sirven para Eternal Terminal.

## Enrutamiento VPN en Android

Abre **VPN** desde el inicio, añade o importa un perfil con nombre y pulsa **Iniciar**. Autoriza la solicitud VPN de Android. El icono pasa a **Detener enrutamiento** mientras está activado; el lápiz edita y la papelera elimina. Los tipos más usados aparecen primero.

Android admite una VPN de dispositivo a la vez. Iniciar otro perfil sustituye la anterior. Un proxy SSH SOCKS5 local puede seguir funcionando mediante una VPN que no sea SSH. Tailscale usa su propia app; iniciar una VPN de Mobile SSH reemplaza su conexión. IKEv2/IPsec se gestiona en los ajustes VPN de Android, no en Mobile SSH.

### SSH VPN y proxy SOCKS5

- **SSH VPN:** elige un servidor SSH guardado con sus credenciales y saltos, y todas o algunas apps y webs. El servidor debe permitir reenvío TCP; no necesita un auxiliar VPN. SSH transporta TCP y DNS remoto; bloquea el resto de UDP asignado a SSH, por lo que los navegadores pueden pasar de QUIC a TCP.
- **Proxy SOCKS5:** elige el servidor en su editor propio y configura cada app con el proxy local y DNS remoto. Por defecto usa `127.0.0.1:1080` y contraseña generada. **Copiar URL del proxy con credenciales** ofrece `socks5h://` para clientes compatibles. Puede usar una VPN existente, incluido Tailscale. Solo funciona un perfil SSH VPN o SSH SOCKS5 a la vez.

Escribe dominios como `example.org`, que abarcan ese nombre y sus subdominios. Los dominios identificados no incluidos usan la red normal. Las IP directas y direcciones obtenidas por DNS cifrado no se pueden comparar de forma fiable y usan SSH. SSH VPN aplica tanto la selección de apps como la de webs; los clientes SOCKS5 se eligen configurándolos individualmente.

DNS remoto usa `1.1.1.1:53` por defecto; indica una dirección numérica de resolver accesible desde el servidor SSH. Durante reconexión o autenticación, el tráfico asignado a SSH queda bloqueado mientras los destinos de desvío conocidos siguen normalmente. Detener, cambiar perfil, revocar el permiso VPN o terminar la app acaba esa protección. No se garantiza VPN siempre activa ni bloqueo de Android.

### WireGuard, Shadowsocks y OpenVPN

- **WireGuard:** importa o pega un `.conf` estándar. `AllowedIPs` define rutas y `DNS` los resolvers. Comprueba el intercambio de claves y los contadores; una interfaz activa no demuestra que el par sea accesible.
- **Shadowsocks:** importa `ss://` o introduce servidor, puerto, contraseña, cifrado y DNS. Admite AES-128-GCM, AES-256-GCM y ChaCha20-Poly1305. TCP y UDP pasan por el túnel; el servidor necesita retransmisión UDP para UDP y DNS. No admite enlaces con plugins ni AEAD-2022.
- **OpenVPN:** importa un `.ovpn` autocontenido con certificados y claves integrados. Admite usuario/contraseña y contraseña de clave privada cifrada. Exige verificar el certificado del servidor. Rutas y DNS dependen del perfil y servidor; un túnel completo necesita DNS VPN. No admite archivos externos, scripts, plugins, TAP ni desafíos interactivos.

La app incluye los motores de estos protocolos. Shadowsocks y OpenVPN no tienen los selectores de apps y webs de SSH VPN. Una VPN tampoco concede al servidor acceso a internet que su proveedor o administrador haya restringido.

### Mosaico de ajustes rápidos

Inicia un perfil VPN una vez para seleccionarlo en **Mobile SSH VPN**. El mosaico se ilumina mientras una VPN de Mobile SSH está activada, incluso conectando o reconectando. Toca para detener y otra vez para iniciar el perfil recordado. No inicia SOCKS5 ni detiene la VPN de otra app.

En Android 13 o posterior, la primera apertura de VPN solicita permiso para añadir el mosaico. Si rechazas o usas una versión anterior, añádelo desde **Ajustes rápidos → Editar**. Si se eliminó el perfil o falta permiso, se abre VPN para configurarlo.

## Solución de problemas de túneles

- Asegúrate de que la sesión SSH esté conectada — los reenvíos se levantan después de que lo haga la sesión.
- Comprueba que el puerto local no esté ya en uso.
- Comprueba que el host y el puerto remotos sean accesibles desde el servidor SSH.
- Usa `localhost` cuando el servicio de destino esté en el propio servidor SSH.
- Usa el nombre DNS interno o la IP del servidor al reenviar a otro host detrás del servidor SSH.
- Con bastiones, comprueba las credenciales, identidad y permiso de reenvío TCP de cada salto.
- Con VPN, revisa servidor o configuración, DNS, permiso VPN y otras VPN activas. Consulta la [guía de solución de problemas](../troubleshooting/) para cada protocolo.
