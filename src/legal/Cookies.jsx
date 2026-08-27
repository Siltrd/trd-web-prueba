import React from 'react';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'que-son', label: 'Qué son las cookies' },
  { id: 'responsable', label: 'Responsable' },
  { id: 'tipos', label: 'Tipos de cookies' },
  { id: 'propias-terceros', label: 'Cookies propias y de terceros' },
  { id: 'consentimiento', label: 'Gestión del consentimiento' },
  { id: 'etiquetas', label: 'Medición y etiquetas' },
  { id: 'analytics', label: 'Google Analytics' },
  { id: 'marketing', label: 'Cookies de marketing futuras' },
  { id: 'duracion', label: 'Duración de las cookies' },
  { id: 'gestion', label: 'Modificar o eliminar cookies' },
  { id: 'transferencias', label: 'Transferencias internacionales' },
  { id: 'privacidad', label: 'Relación con Privacidad' },
  { id: 'actualizaciones', label: 'Actualizaciones' },
  { id: 'contacto', label: 'Contacto' },
];

const Cookies = () => {
  return (
    <LegalLayout
      title="Política de Cookies"
      updated="26 de agosto de 2026"
      sections={sections}
    >
      <section id="que-son">
        <h2>1. Qué son las cookies</h2>

        <p>
          Las cookies son pequeños archivos o identificadores que pueden
          almacenarse en el dispositivo del usuario al visitar un sitio web.
        </p>

        <p>
          También pueden utilizarse tecnologías similares, como etiquetas,
          píxeles, scripts o almacenamiento local, para recordar preferencias,
          medir el funcionamiento del sitio o analizar su uso.
        </p>
      </section>

      <section id="responsable">
        <h2>2. Responsable</h2>

        <p>
          El sitio web de <strong>Tunica de Realidad</strong>, en adelante
          <strong> “TDR”</strong>, utiliza cookies y tecnologías similares bajo
          la responsabilidad de:
        </p>

        <p>
          <strong>[NOMBRE Y APELLIDO]</strong>
          <br />
          CUIT: <strong>[CUIT]</strong>
          <br />
          Domicilio: <strong>[DOMICILIO]</strong>
          <br />
          Correo electrónico: <strong>[EMAIL]</strong>
        </p>
      </section>

      <section id="tipos">
        <h2>3. Tipos de cookies que puede utilizar TDR</h2>

        <h3>Cookies necesarias</h3>
        <p>
          Son aquellas indispensables para el funcionamiento básico del sitio o
          para prestar una funcionalidad solicitada por el usuario.
        </p>

        <h3>Cookies de analítica</h3>
        <p>
          Permiten conocer cómo se utiliza el sitio y obtener información
          agregada o estadística sobre la navegación.
        </p>

        <h3>Cookies de funcionalidad</h3>
        <p>
          Permiten recordar determinadas preferencias o mejorar algunas
          funciones del sitio.
        </p>

        <h3>Cookies de marketing y publicidad</h3>
        <p>
          Podrán utilizarse en el futuro para medir campañas, atribuir
          conversiones, crear audiencias o mostrar publicidad relevante.
        </p>
      </section>

      <section id="propias-terceros">
        <h2>4. Cookies propias y de terceros</h2>

        <p>
          Las cookies pueden ser propias, cuando son gestionadas directamente por
          TDR o su infraestructura, o de terceros, cuando son gestionadas por
          proveedores externos.
        </p>
      </section>

      <section id="consentimiento">
        <h2>5. Gestión del consentimiento</h2>

        <p>
          Cuando corresponda, TDR pondrá a disposición del usuario un sistema
          para gestionar sus preferencias de cookies.
        </p>

        <p>
          El usuario podrá aceptar, rechazar o configurar determinadas
          categorías, salvo aquellas estrictamente necesarias.
        </p>
      </section>

      <section id="etiquetas">
        <h2>6. Herramientas de medición y etiquetas</h2>

        <p>
          TDR podrá utilizar herramientas de gestión de etiquetas y medición,
          como Google Tag Manager, para administrar de forma centralizada
          determinadas tecnologías utilizadas en el sitio.
        </p>

        <p>
          La existencia de una herramienta de gestión de etiquetas no implica
          que todas las tecnologías disponibles se encuentren activas.
        </p>
      </section>

      <section id="analytics">
        <h2>7. Google Analytics</h2>

        <p>
          Cuando Google Analytics se encuentre activo, podrá utilizarse para
          obtener información estadística sobre el uso del sitio y medir
          interacciones y conversiones.
        </p>

        <p>
          La utilización de Google Analytics estará sujeta a la configuración de
          privacidad y consentimiento adoptada por TDR.
        </p>
      </section>

      <section id="marketing">
        <h2>8. Cookies de marketing futuras</h2>

        <p>TDR podrá incorporar en el futuro herramientas como:</p>

        <ul>
          <li>Google Ads;</li>
          <li>Meta Pixel;</li>
          <li>otras plataformas de publicidad digital.</li>
        </ul>

        <p>
          Estas herramientas no se considerarán activas hasta que efectivamente
          se instalen y configuren.
        </p>
      </section>

      <section id="duracion">
        <h2>9. Duración de las cookies</h2>

        <p>
          Las cookies pueden ser de sesión o persistentes. Su duración concreta
          dependerá de la finalidad y del proveedor correspondiente.
        </p>
      </section>

      <section id="gestion">
        <h2>10. Cómo modificar o eliminar cookies</h2>

        <p>
          El usuario podrá gestionar sus preferencias mediante el sistema de
          consentimiento disponible en el sitio, cuando corresponda.
        </p>

        <p>
          También puede modificar la configuración de su navegador para
          bloquear, limitar o eliminar cookies.
        </p>
      </section>

      <section id="transferencias">
        <h2>11. Transferencias internacionales</h2>

        <p>
          Algunos proveedores pueden procesar información fuera de la República
          Argentina. Cuando esto ocurra, el tratamiento se realizará conforme a
          la Política de Privacidad y a la normativa aplicable.
        </p>
      </section>

      <section id="privacidad">
        <h2>12. Relación con la Política de Privacidad</h2>

        <p>
          La información obtenida mediante cookies o tecnologías similares puede
          constituir dato personal cuando permita identificar directa o
          indirectamente a una persona.
        </p>
      </section>

      <section id="actualizaciones">
        <h2>13. Actualizaciones de esta Política</h2>

        <p>
          TDR podrá modificar esta Política cuando cambien las herramientas
          utilizadas, finalidades, proveedores, configuración del sitio o
          exigencias legales.
        </p>
      </section>

      <section id="contacto">
        <h2>14. Contacto</h2>

        <p>
          <strong>Tunica de Realidad — TDR</strong>
          <br />
          Correo electrónico: <strong>[EMAIL DE PRIVACIDAD]</strong>
          <br />
          Domicilio: <strong>[DOMICILIO]</strong>
        </p>
      </section>
    </LegalLayout>
  );
};

export default Cookies;