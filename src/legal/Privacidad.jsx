import React from 'react';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'responsable', label: 'Responsable del tratamiento' },
  { id: 'alcance', label: 'Alcance de esta Política' },
  { id: 'datos', label: 'Datos que podemos recopilar' },
  { id: 'finalidades', label: 'Finalidades del tratamiento' },
  { id: 'base-legal', label: 'Base legal del tratamiento' },
  { id: 'obligatorios', label: 'Datos obligatorios y opcionales' },
  { id: 'proveedores', label: 'Destinatarios y proveedores' },
  { id: 'transferencias', label: 'Transferencias internacionales' },
  { id: 'conservacion', label: 'Conservación de los datos' },
  { id: 'seguridad', label: 'Seguridad' },
  { id: 'crm', label: 'CRM y notas internas' },
  { id: 'comunicaciones', label: 'WhatsApp y correo electrónico' },
  { id: 'menores', label: 'Menores de edad' },
  { id: 'derechos', label: 'Derechos del titular' },
  { id: 'autoridad', label: 'Autoridad de control' },
  { id: 'cookies', label: 'Cookies y tecnologías similares' },
  { id: 'terceros', label: 'Enlaces y servicios de terceros' },
  { id: 'modificaciones', label: 'Modificaciones' },
  { id: 'contacto', label: 'Contacto' },
];

const Privacidad = () => {
  return (
    <LegalLayout
      title="Política de Privacidad"
      updated="26 de agosto de 2026"
      sections={sections}
    >
      <section id="responsable">
        <h2>1. Responsable del tratamiento</h2>

        <p>
          Los datos personales tratados a través de este sitio y de los
          servicios ofrecidos bajo el nombre comercial
          <strong> Tunica de Realidad</strong>, en adelante
          <strong> “TDR”</strong>, son responsabilidad de:
        </p>

        <p>
          <strong>[NOMBRE Y APELLIDO]</strong>
          <br />
          CUIT: <strong>[CUIT]</strong>
          <br />
          Domicilio: <strong>[DOMICILIO]</strong>
          <br />
          Correo electrónico: <strong>[EMAIL DE PRIVACIDAD / CONTACTO]</strong>
        </p>

        <p>TDR opera desde la República Argentina.</p>
      </section>

      <section id="alcance">
        <h2>2. Alcance de esta Política</h2>

        <p>
          Esta Política de Privacidad describe cómo TDR recopila, utiliza,
          almacena y protege los datos personales obtenidos a través del sitio
          web, formularios, reservas, procesos de contratación, comunicaciones,
          herramientas de analítica, tests, CRM y demás servicios ofrecidos por
          TDR.
        </p>
      </section>

      <section id="datos">
        <h2>3. Datos que podemos recopilar</h2>

        <h3>Datos de identificación y contacto</h3>
        <ul>
          <li>nombre y apellido;</li>
          <li>correo electrónico;</li>
          <li>teléfono;</li>
          <li>datos de contacto profesional;</li>
          <li>empresa u organización cuando corresponda.</li>
        </ul>

        <h3>Datos de contratación y prestación</h3>
        <ul>
          <li>servicio de interés;</li>
          <li>modalidad contratada;</li>
          <li>fechas y horarios;</li>
          <li>estado de reserva;</li>
          <li>historial operativo;</li>
          <li>sesiones contratadas y realizadas;</li>
          <li>información necesaria para facturación.</li>
        </ul>

        <h3>Datos de formularios y consultas</h3>
        <p>
          TDR podrá almacenar los datos facilitados voluntariamente por el
          usuario y el contenido de las comunicaciones.
        </p>

        <p>
          TDR procura no solicitar información clínica o datos sensibles que no
          sean necesarios para la prestación o gestión comercial de sus
          servicios.
        </p>

        <h3>Datos de uso y navegación</h3>
        <p>
          Cuando se encuentren activas herramientas de analítica o medición,
          podrán recopilarse datos técnicos y de navegación, como dirección IP,
          dispositivo, navegador, páginas visitadas, interacciones, origen del
          tráfico, parámetros UTM y eventos de conversión.
        </p>

        <h3>Tests o recursos interactivos</h3>
        <p>
          Cuando el usuario utilice tests o cuestionarios, TDR podrá tratar las
          respuestas ingresadas, el resultado generado, la fecha de realización
          y los datos de contacto asociados cuando el usuario los facilite.
        </p>
      </section>

      <section id="finalidades">
        <h2>4. Finalidades del tratamiento</h2>

        <p>TDR podrá utilizar los datos personales para:</p>

        <ul>
          <li>responder consultas;</li>
          <li>gestionar reservas y servicios;</li>
          <li>administrar la relación comercial;</li>
          <li>gestionar pagos y facturación;</li>
          <li>enviar comunicaciones operativas;</li>
          <li>medir y mejorar el funcionamiento del sitio;</li>
          <li>
            enviar comunicaciones comerciales cuando exista consentimiento o
            base legal suficiente.
          </li>
        </ul>
      </section>

      <section id="base-legal">
        <h2>5. Base legal del tratamiento</h2>

        <p>
          TDR tratará los datos personales cuando exista una base válida, que
          podrá incluir consentimiento del titular, ejecución de una relación
          contractual o precontractual, cumplimiento de obligaciones legales o
          interés legítimo cuando corresponda.
        </p>

        <p>
          La contratación de un servicio no implica automáticamente el
          consentimiento para recibir comunicaciones promocionales.
        </p>
      </section>

      <section id="obligatorios">
        <h2>6. Datos obligatorios y opcionales</h2>

        <p>
          Cuando un formulario requiera determinados datos, se indicará cuáles
          son obligatorios.
        </p>

        <p>
          La falta de determinados datos podrá impedir procesar una reserva,
          emitir una factura, responder una consulta o prestar correctamente el
          servicio solicitado.
        </p>
      </section>

      <section id="proveedores">
        <h2>7. Destinatarios y proveedores</h2>

        <p>
          TDR podrá utilizar proveedores externos para hosting, CRM, agenda,
          correo electrónico, videollamadas, analítica, formularios,
          almacenamiento, pagos, facturación y automatización.
        </p>

        <p>
          Entre las herramientas que TDR podrá utilizar se encuentran, según
          disponibilidad y configuración:
        </p>

        <ul>
          <li>Zoho;</li>
          <li>Google;</li>
          <li>Vercel;</li>
          <li>WhatsApp / Meta;</li>
          <li>proveedores de pago;</li>
          <li>otros proveedores necesarios para la prestación de servicios.</li>
        </ul>
      </section>

      <section id="transferencias">
        <h2>8. Transferencias internacionales de datos</h2>

        <p>
          Algunos proveedores tecnológicos utilizados por TDR pueden almacenar o
          procesar información fuera de la República Argentina.
        </p>

        <p>
          Cuando exista una transferencia internacional de datos, TDR procurará
          que se realice conforme a la normativa aplicable y mediante proveedores
          que ofrezcan garantías adecuadas de protección.
        </p>
      </section>

      <section id="conservacion">
        <h2>9. Conservación de los datos</h2>

        <p>
          Los datos personales se conservarán durante el tiempo necesario para
          cumplir la finalidad para la que fueron recopilados y, posteriormente,
          durante los plazos requeridos por obligaciones legales, fiscales,
          contractuales o administrativas.
        </p>

        <p>
          Los datos de marketing se conservarán hasta que el titular retire su
          consentimiento o solicite la baja.
        </p>
      </section>

      <section id="seguridad">
        <h2>10. Seguridad</h2>

        <p>
          TDR adopta medidas razonables de seguridad para proteger los datos
          personales contra acceso no autorizado, pérdida, alteración,
          divulgación indebida o uso fraudulento.
        </p>

        <p>
          Estas medidas podrán incluir autenticación multifactor, control de
          accesos, cifrado, actualización de software, gestión segura de
          credenciales y revisión de permisos.
        </p>
      </section>

      <section id="crm">
        <h2>11. CRM y notas internas</h2>

        <p>
          TDR podrá utilizar un sistema CRM para gestionar contactos y clientes.
        </p>

        <p>El CRM tendrá finalidad comercial y operativa.</p>

        <p>
          No se utilizará como historia clínica ni expediente terapéutico, y se
          evitará registrar datos sensibles que no sean necesarios.
        </p>
      </section>

      <section id="comunicaciones">
        <h2>12. Comunicaciones por WhatsApp y correo electrónico</h2>

        <p>
          Cuando el usuario contacte a TDR por WhatsApp o correo electrónico, los
          datos y mensajes intercambiados podrán tratarse para responder la
          consulta, gestionar una contratación o prestar un servicio.
        </p>
      </section>

      <section id="menores">
        <h2>13. Menores de edad</h2>

        <p>
          Los servicios de TDR están dirigidos principalmente a personas mayores
          de edad.
        </p>

        <p>
          Cuando un servicio pudiera estar dirigido o resultar accesible a
          menores, se establecerán las condiciones y autorizaciones que
          correspondan.
        </p>
      </section>

      <section id="derechos">
        <h2>14. Derechos del titular</h2>

        <p>
          El titular de los datos podrá ejercer los derechos reconocidos por la
          normativa vigente, incluyendo acceso, rectificación, actualización,
          supresión, oposición cuando corresponda y retiro del consentimiento.
        </p>

        <p>
          Las solicitudes pueden enviarse a
          <strong> [EMAIL DE PRIVACIDAD]</strong>.
        </p>
      </section>

      <section id="autoridad">
        <h2>15. Autoridad de control</h2>

        <p>
          En Argentina, la autoridad de aplicación en materia de protección de
          datos personales es la Agencia de Acceso a la Información Pública
          (AAIP).
        </p>
      </section>

      <section id="cookies">
        <h2>16. Cookies y tecnologías similares</h2>

        <p>
          El uso de cookies, etiquetas, píxeles y tecnologías similares se
          regula en la Política de Cookies de TDR.
        </p>
      </section>

      <section id="terceros">
        <h2>17. Enlaces y servicios de terceros</h2>

        <p>
          El sitio puede contener enlaces hacia plataformas o servicios de
          terceros. TDR no controla sus políticas de privacidad ni sus prácticas
          de tratamiento de datos.
        </p>
      </section>

      <section id="modificaciones">
        <h2>18. Modificaciones de esta Política</h2>

        <p>
          TDR podrá actualizar esta Política de Privacidad cuando existan cambios
          legales, tecnológicos, operativos, comerciales, en los proveedores o
          en las finalidades del tratamiento.
        </p>

        <p>
          La versión vigente estará disponible en el sitio e indicará su fecha
          de última actualización.
        </p>
      </section>

      <section id="contacto">
        <h2>19. Contacto</h2>

        <p>
          <strong>Tunica de Realidad — TDR</strong>
          <br />
          Correo: <strong>[EMAIL DE PRIVACIDAD]</strong>
          <br />
          Domicilio: <strong>[DOMICILIO]</strong>
        </p>
      </section>
    </LegalLayout>
  );
};

export default Privacidad;