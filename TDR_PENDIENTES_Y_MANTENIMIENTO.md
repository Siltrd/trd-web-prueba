# TDR — Pendientes, decisiones y mantenimiento

Este archivo registra decisiones temporales, tareas pendientes y cambios que pueden requerir revisión futura.

Regla:
Cuando algo quede "por ahora", dependa de una herramienta aún no elegida o pueda provocar un problema futuro difícil de rastrear, se documentará aquí.

---

## 1. Correo de TDR

### Estado actual

- Existe y funciona: contacto@tunicaderealidad.com
- El buzón está alojado actualmente en Zoho Mail.
- El dominio tunicaderealidad.com está verificado en Zoho.
- MX, SPF y DKIM de Zoho fueron configurados.
- Se comprobó envío y recepción desde Zoho Mail.
- notificaciones@tunicaderealidad.com se utiliza como remitente automático mediante Resend.
- Los formularios de Arrepentimiento y Baja están enviando correctamente.
- CONTACT_TO puede seguir apuntando temporalmente a Gmail para recibir avisos de los formularios.

### Limitación actual

El plan gratuito de Zoho Mail no permite:

- IMAP
- POP
- acceso mediante Apple Mail
- acceso mediante clientes externos de correo

Por lo tanto, Apple Mail NO podrá verificar contacto@tunicaderealidad.com mientras se mantenga este plan.

### Si en el futuro ocurre:

- "No funciona el correo en Apple Mail"
- "No puedo ver contacto@... en el móvil"
- "Apple dice que no puede verificar usuario o contraseña"

NO empezar cambiando contraseñas ni configuraciones de Apple.

Revisar primero:

1. Plan actual de Zoho Mail.
2. Si el plan permite IMAP.
3. Configuración del buzón contacto@tunicaderealidad.com.
4. Después configurar Apple Mail.

### Pendiente

Comparar:

- Zoho Mail Lite
- otros proveedores de correo profesional con IMAP

Objetivo:
Poder recibir y responder contacto@tunicaderealidad.com desde móvil y Apple Mail.

---

## 2. Destino de los formularios — CONTACT_TO

Los endpoints:

- api/contact.js
- api/arrepentimiento.js
- api/baja.js

utilizan la variable de entorno:

CONTACT_TO

Esta variable determina dónde recibe TDR los avisos internos de los formularios.

Actualmente puede mantenerse apuntando a Gmail hasta resolver definitivamente el sistema de correo profesional.

### Cuando se cambie el buzón definitivo

Revisar:

Vercel → Environment Variables → CONTACT_TO

Después probar en producción:

- Contacto
- Arrepentimiento
- Baja de servicio

IMPORTANTE:
La dirección pública contacto@tunicaderealidad.com y el valor interno de CONTACT_TO no tienen por qué ser la misma dirección.

---

## 3. Resend

Estado actual:

- Dominio tunicaderealidad.com verificado.
- RESEND_FROM configurado con:
  TDR <notificaciones@tunicaderealidad.com>
- Arrepentimiento funciona.
- Baja funciona.
- Emails internos y confirmaciones al usuario comprobados en producción.

No modificar los registros DNS de Resend al cambiar configuraciones de Zoho.

---

## 4. Legales — datos todavía pendientes

Antes de considerar la documentación legal definitivamente lista para publicación comercial hay que completar:

- Nombre y apellido / denominación legal del prestador.
- CUIT.
- Domicilio legal/fiscal correspondiente.

Consultar con contador qué datos deben figurar como prestador de TDR.

Correo público definido:

contacto@tunicaderealidad.com

Horario de atención definido:

lunes a viernes de 10:00 a 18:00, excepto feriados nacionales.

---

## 5. Data Fiscal — ARCA

Pendiente:

Incorporar el Formulario / Data Fiscal 960/D correspondiente.

Debe añadirse en la Home en lugar visible y accesible cuando esté disponible.

Consultar/generar con los datos fiscales definitivos.

---

## 6. Privacidad y Cookies — cuándo revisar

Revisar Política de Privacidad y Política de Cookies cada vez que TDR incorpore o cambie:

- proveedor de analítica
- Google Analytics
- Meta Pixel
- herramientas publicitarias
- CRM
- plataforma de email
- proveedor de pagos
- agenda/reservas
- membresías
- almacenamiento de datos
- formularios externos
- cualquier proveedor que procese datos personales

Las políticas actuales utilizan expresiones condicionales para herramientas todavía no activas.

No indicar una herramienta como activa hasta que realmente lo esté.

---

## 7. Términos y Reservas — cuándo revisar

Revisar Términos y Condiciones y Política de Reservas cuando cambie:

- forma de contratación
- precios o modalidad de cobro
- checkout
- pagos recurrentes
- membresías
- políticas de cancelación
- reprogramaciones
- devoluciones
- programas
- productos digitales
- modelo comercial relevante

---

## 8. Checkout futuro

Cuando se implemente contratación/pago directo desde la web comprobar:

- resumen de la contratación antes de confirmar
- posibilidad de revisar/corregir datos
- precio total
- aceptación expresa
- acceso a Términos
- posibilidad de conservar/consultar condiciones
- confirmación electrónica de la operación

---

## 9. Arrepentimiento y Baja

Actualmente:

- existen páginas específicas
- existen formularios independientes
- generan códigos AR-... y BA-...
- utilizan fecha argentina para los códigos
- registran fecha/hora argentina en las constancias
- envían aviso interno
- envían confirmación al usuario
- si falla la confirmación al usuario, la solicitud interna sigue siendo válida
- no requieren login ni creación de cuenta

Antes de modificar estos endpoints:
NO reconstruirlos desde cero.
Trabajar siempre sobre el código real vigente.

---

## 10. Regla de mantenimiento TDR

Cuando se haga una modificación temporal o se deje una decisión para más adelante, añadir aquí:

- ESTADO ACTUAL
- POR QUÉ ESTÁ ASÍ
- QUÉ QUEDA PENDIENTE
- QUÉ SÍNTOMA FUTURO PUEDE APARECER
- DÓNDE SE CORRIGE
- QUÉ HAY QUE PROBAR DESPUÉS

Este archivo debe actualizarse junto con el cambio correspondiente.