import React from 'react';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'que-son', label: 'Qué son las cookies' },
  { id: 'responsable', label: 'Responsable' },
  { id: 'tipos', label: 'Tipos de cookies' },
  { id: 'propias-terceros', label: 'Cookies propias y de terceros' },
  { id: 'consentimiento', label: 'Gestión del consentimiento' },
  { id: 'etiquetas', label: 'Medición y etiquetas' },
  { id: 'analytics', label: 'Herramientas de analítica' },
  { id: 'marketing', label: 'Marketing y publicidad' },
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
      updated="27 de agosto de 2026"
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
          píxeles, scripts o identificadores de almacenamiento local, para
          recordar preferencias, permitir funcionalidades, medir el
          funcionamiento del sitio o analizar el uso de sus páginas.
        </p>

        <p>
          En esta Política, el término “cookies” se utiliza de forma amplia
          para referirse también a estas tecnologías cuando corresponda.
        </p>
      </section>

      <section id="responsable">
        <h2>2. Responsable</h2>

        <p>
          El sitio web de <strong>Tunica de Realidad</strong>, en adelante
          <strong> “TDR”</strong>, utiliza o podrá utilizar cookies y
          tecnologías similares bajo la responsabilidad de:
        </p>

        <p>
          <strong>[NOMBRE Y APELLIDO / DENOMINACIÓN LEGAL]</strong>
          <br />
          CUIT: <strong>[CUIT]</strong>
          <br />
          Domicilio: <strong>[DOMICILIO]</strong>
          <br />
          Correo electrónico:{' '}
          <strong>[EMAIL DE PRIVACIDAD / CONTACTO]</strong>
        </p>
      </section>

      <section id="tipos">
        <h2>3. Tipos de cookies que puede utilizar TDR</h2>

        <h3>Cookies necesarias</h3>

        <p>
          Son aquellas indispensables para el funcionamiento básico del sitio,
          su seguridad o para prestar una funcionalidad expresamente solicitada
          por el usuario.
        </p>

        <p>Pueden utilizarse, por ejemplo, para:</p>

        <ul>
          <li>mantener la seguridad del sitio;</li>
          <li>gestionar preferencias esenciales;</li>
          <li>permitir el funcionamiento de formularios;</li>
          <li>recordar elecciones necesarias para la navegación;</li>
          <li>gestionar preferencias relacionadas con cookies.</li>
        </ul>

        <p>
          Estas tecnologías no tienen por finalidad principal realizar
          mediciones publicitarias o elaborar perfiles comerciales.
        </p>

        <h3>Cookies de analítica</h3>

        <p>
          Permiten conocer cómo se utiliza el sitio y obtener información
          estadística sobre su funcionamiento y navegación.
        </p>

        <p>Pueden utilizarse para medir, entre otras cosas:</p>

        <ul>
          <li>páginas visitadas;</li>
          <li>tiempo de permanencia;</li>
          <li>origen del tráfico;</li>
          <li>dispositivo o navegador;</li>
          <li>interacciones;</li>
          <li>recorridos dentro del sitio;</li>
          <li>conversiones.</li>
        </ul>

        <p>
          Estas herramientas solo se considerarán activas cuando se encuentren
          efectivamente instaladas y configuradas en el sitio.
        </p>

        <h3>Cookies de funcionalidad</h3>

        <p>
          Permiten recordar determinadas preferencias o mejorar algunas
          funciones del sitio.
        </p>

        <p>Pueden utilizarse, por ejemplo, para:</p>

        <ul>
          <li>preferencias de visualización;</li>
          <li>idioma;</li>
          <li>configuraciones elegidas por el usuario.</li>
        </ul>

        <h3>Cookies de marketing y publicidad</h3>

        <p>
          TDR podrá incorporar en el futuro tecnologías destinadas a medir
          campañas, atribuir conversiones, crear audiencias o gestionar
          publicidad.
        </p>

        <p>
          Estas herramientas solo se considerarán activas cuando hayan sido
          efectivamente instaladas y configuradas.
        </p>

        <p>
          Cuando el tratamiento de datos personales asociado a estas
          tecnologías requiera consentimiento, se solicitará de acuerdo con la
          normativa aplicable antes de utilizarlas para esa finalidad.
        </p>
      </section>

      <section id="propias-terceros">
        <h2>4. Cookies propias y de terceros</h2>

        <p>
          Las cookies pueden ser propias, cuando son gestionadas directamente
          por TDR o por la infraestructura técnica del sitio, o de terceros,
          cuando son gestionadas por proveedores externos.
        </p>

        <p>
          Los terceros podrán prestar servicios relacionados, entre otros, con:
        </p>

        <ul>
          <li>hosting e infraestructura;</li>
          <li>analítica y medición;</li>
          <li>formularios;</li>
          <li>agenda y reservas;</li>
          <li>publicidad, si se incorpora en el futuro;</li>
          <li>otras funcionalidades necesarias para el sitio.</li>
        </ul>

        <p>
          Entre los proveedores que TDR utiliza actualmente o podrá utilizar,
          según la configuración efectiva del sitio, se encuentran:
        </p>

        <ul>
          <li>Vercel;</li>
          <li>Google;</li>
          <li>Zoho;</li>
          <li>Meta, si se incorporan herramientas de su ecosistema;</li>
          <li>
            otros proveedores tecnológicos necesarios para el funcionamiento
            o medición del sitio.
          </li>
        </ul>

        <p>
          La inclusión de un proveedor en esta Política no significa que todas
          sus tecnologías se encuentren activas en todo momento.
        </p>
      </section>

      <section id="consentimiento">
        <h2>5. Gestión del consentimiento</h2>

        <p>
          Cuando una cookie o tecnología similar implique tratamiento de datos
          personales que requiera consentimiento, TDR procurará obtenerlo de
          forma previa, libre e informada conforme a la normativa aplicable.
        </p>

        <p>
          Cuando se implemente un sistema de gestión de preferencias, el usuario
          podrá aceptar, rechazar o configurar determinadas categorías, salvo
          aquellas estrictamente necesarias para el funcionamiento o seguridad
          del sitio.
        </p>

        <p>
          Las preferencias podrán modificarse posteriormente mediante el
          mecanismo habilitado en el sitio, cuando este se encuentre
          disponible.
        </p>

        <p>
          La elección relativa a cookies analíticas, publicitarias o de
          marketing no se utilizará para impedir el acceso a las funcionalidades
          esenciales del sitio cuando no exista una razón técnica o legal que
          lo justifique.
        </p>
      </section>

      <section id="etiquetas">
        <h2>6. Herramientas de medición y etiquetas</h2>

        <p>
          TDR podrá utilizar herramientas de gestión de etiquetas o tecnologías
          similares para administrar de manera centralizada determinados
          scripts o servicios utilizados en el sitio.
        </p>

        <p>
          La presencia técnica de un gestor de etiquetas no implica que todas
          las herramientas que pueda administrar se encuentren activas.
        </p>

        <p>
          Las etiquetas de analítica o marketing se configurarán de acuerdo con
          la finalidad correspondiente y, cuando resulte necesario, con las
          preferencias o el consentimiento del usuario.
        </p>
      </section>

      <section id="analytics">
        <h2>7. Herramientas de analítica</h2>

        <p>
          TDR podrá utilizar herramientas de analítica, como Google Analytics u
          otros servicios equivalentes, para obtener información estadística
          sobre el uso del sitio cuando dichas herramientas se encuentren
          efectivamente activas.
        </p>

        <p>La información tratada podrá incluir:</p>

        <ul>
          <li>dirección IP;</li>
          <li>dispositivo;</li>
          <li>navegador y sistema operativo;</li>
          <li>páginas visitadas;</li>
          <li>eventos e interacciones;</li>
          <li>fuente de tráfico;</li>
          <li>parámetros UTM;</li>
          <li>datos de conversión.</li>
        </ul>

        <p>
          La configuración concreta de estas herramientas procurará respetar
          los principios de información, proporcionalidad y minimización
          previstos por la normativa de protección de datos.
        </p>
      </section>

      <section id="marketing">
        <h2>8. Cookies de marketing y publicidad</h2>

        <p>
          TDR podrá incorporar en el futuro herramientas de medición o
          publicidad digital, como:
        </p>

        <ul>
          <li>Google Ads;</li>
          <li>Meta Pixel;</li>
          <li>otras plataformas de publicidad digital.</li>
        </ul>

        <p>
          Estas herramientas no se considerarán activas hasta que se instalen y
          configuren efectivamente.
        </p>

        <p>
          Cuando se incorporen, esta Política y, cuando corresponda, el sistema
          de gestión de consentimiento serán actualizados.
        </p>
      </section>

      <section id="duracion">
        <h2>9. Duración de las cookies</h2>

        <p>
          Las cookies pueden ser de sesión, cuando dejan de estar disponibles
          al cerrar el navegador, o persistentes, cuando permanecen almacenadas
          durante un período determinado o hasta que el usuario las elimina.
        </p>

        <p>
          La duración concreta dependerá de la finalidad, configuración y
          proveedor de cada tecnología.
        </p>

        <p>
          Cuando el sistema de gestión de preferencias lo permita, el usuario
          podrá consultar información más detallada sobre las tecnologías
          activas y su duración.
        </p>
      </section>

      <section id="gestion">
        <h2>10. Cómo modificar o eliminar cookies</h2>

        <p>
          Cuando exista un sistema de gestión de preferencias en el sitio, el
          usuario podrá utilizarlo para modificar sus elecciones.
        </p>

        <p>
          También puede modificar la configuración de su navegador para
          bloquear, limitar o eliminar cookies.
        </p>

        <p>
          La desactivación de determinadas tecnologías estrictamente necesarias
          puede afectar el funcionamiento de algunas características del sitio.
        </p>
      </section>

      <section id="transferencias">
        <h2>11. Transferencias internacionales</h2>

        <p>
          Algunos proveedores de cookies o tecnologías similares pueden
          almacenar o procesar información fuera de la República Argentina.
        </p>

        <p>
          Cuando dichos tratamientos impliquen transferencias internacionales
          de datos personales, se aplicará lo previsto en la Política de
          Privacidad de TDR y en la normativa argentina correspondiente.
        </p>
      </section>

      <section id="privacidad">
        <h2>12. Relación con la Política de Privacidad</h2>

        <p>
          La información obtenida mediante cookies o tecnologías similares
          puede constituir dato personal cuando permita identificar directa o
          indirectamente a una persona.
        </p>

        <p>
          En esos casos, su tratamiento quedará sujeto además a la Política de
          Privacidad de TDR y a la normativa aplicable en materia de protección
          de datos personales.
        </p>

        <p>
          La información sobre responsable, finalidades, proveedores,
          transferencias internacionales, conservación y ejercicio de derechos
          puede consultarse en dicha Política.
        </p>
      </section>

      <section id="actualizaciones">
        <h2>13. Actualizaciones de esta Política</h2>

        <p>
          TDR podrá modificar esta Política de Cookies cuando cambien las
          herramientas utilizadas, sus finalidades, los proveedores, la
          configuración del sitio o las exigencias legales o regulatorias.
        </p>

        <p>
          La versión vigente estará disponible en el sitio e indicará su fecha
          de última actualización.
        </p>

        <p>
          Cuando una modificación afecte de forma relevante una elección de
          consentimiento previamente otorgada, TDR podrá solicitar una nueva
          elección cuando corresponda.
        </p>
      </section>

      <section id="contacto">
        <h2>14. Contacto</h2>

        <p>
          Para consultas relacionadas con cookies o privacidad:
        </p>

        <p>
          <strong>Tunica de Realidad — TDR</strong>
          <br />
          Correo electrónico:{' '}
          <strong>[EMAIL DE PRIVACIDAD / CONTACTO]</strong>
          <br />
          Domicilio: <strong>[DOMICILIO]</strong>
        </p>
      </section>
    </LegalLayout>
  );
};

export default Cookies;