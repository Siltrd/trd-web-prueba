import React from 'react';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'identificacion', label: 'Identificación del prestador' },
  { id: 'objeto', label: 'Objeto y alcance' },
  { id: 'servicios', label: 'Servicios ofrecidos' },
  { id: 'contratacion', label: 'Proceso de contratación' },
  { id: 'pagos', label: 'Precios, pagos y facturación' },
  { id: 'reservas', label: 'Reservas, cancelaciones y devoluciones' },
  { id: 'arrepentimiento', label: 'Derecho de arrepentimiento' },
  { id: 'baja', label: 'Baja o finalización de servicios' },
  { id: 'coaching', label: 'Coaching 1 a 1' },
  { id: 'procesos', label: 'Procesos de varias sesiones' },
  { id: 'sound-healing', label: 'Sound Healing y organizaciones' },
  { id: 'experiencias', label: 'Experiencias y eventos' },
  { id: 'programas', label: 'Programas' },
  { id: 'recursos', label: 'Recursos digitales' },
  { id: 'membresias', label: 'Membresías y servicios recurrentes' },
  { id: 'alcance', label: 'Alcance de los servicios' },
  { id: 'propiedad', label: 'Propiedad intelectual' },
  { id: 'uso', label: 'Uso del sitio' },
  { id: 'privacidad', label: 'Datos personales y privacidad' },
  { id: 'comunicaciones', label: 'Comunicaciones' },
  { id: 'modificaciones', label: 'Modificaciones' },
  { id: 'internacional', label: 'Contratación internacional' },
  { id: 'responsabilidad', label: 'Responsabilidad' },
  { id: 'atencion', label: 'Atención y reclamos' },
  { id: 'ley', label: 'Ley aplicable y controversias' },
  { id: 'vigencia', label: 'Vigencia' },
];

const TerminosCondiciones = () => {
  return (
    <LegalLayout
      title="Términos y Condiciones"
      updated="26 de agosto de 2026"
      sections={sections}
    >
      <section id="identificacion">
        <h2>1. Identificación del prestador</h2>
        <p>
          Los servicios ofrecidos a través de este sitio son prestados por
          <strong> [NOMBRE Y APELLIDO]</strong>, CUIT <strong>[CUIT]</strong>,
          con domicilio en <strong>[DOMICILIO]</strong>, correo electrónico
          <strong> [EMAIL DE CONTACTO]</strong>, quien opera comercialmente
          bajo el nombre <strong>Tunica de Realidad</strong>, en adelante,
          <strong> “TDR”</strong>.
        </p>

        <p>
          El sitio oficial de TDR es <strong>[DOMINIO]</strong>.
        </p>
      </section>

      <section id="objeto">
        <h2>2. Objeto y alcance</h2>
        <p>
          Estos Términos y Condiciones regulan el acceso y uso del sitio web de
          TDR, así como la contratación de los servicios, programas,
          experiencias, recursos y demás propuestas comerciales que se ofrezcan
          a través del sitio o de los canales expresamente indicados por TDR.
        </p>

        <p>
          Determinados servicios podrán contar con condiciones particulares. En
          esos casos, dichas condiciones complementarán estos Términos y
          Condiciones.
        </p>

        <p>
          La contratación de cualquier servicio implica la aceptación de las
          condiciones vigentes al momento de contratar.
        </p>
      </section>

      <section id="servicios">
        <h2>3. Servicios ofrecidos</h2>
        <p>TDR podrá ofrecer, entre otros:</p>

        <ul>
          <li>sesiones individuales de Coaching 1 a 1;</li>
          <li>procesos de varias sesiones;</li>
          <li>
            servicios de Sound Healing para particulares, estudios, centros,
            empresas, hoteles, spas u otras organizaciones;
          </li>
          <li>experiencias presenciales u online;</li>
          <li>programas individuales o grupales;</li>
          <li>recursos digitales;</li>
          <li>
            membresías o servicios recurrentes, si fueran incorporados en el
            futuro.
          </li>
        </ul>

        <p>
          La disponibilidad, modalidad, duración, precio y condiciones
          específicas de cada propuesta serán informadas en la página
          correspondiente, presupuesto, formulario de contratación o
          comunicación comercial aplicable.
        </p>

        <p>
          La inclusión de una categoría de servicio en estos Términos no implica
          necesariamente que se encuentre disponible en todo momento.
        </p>
      </section>

      <section id="contratacion">
        <h2>4. Proceso de contratación</h2>
        <p>La forma de contratación podrá variar según el servicio.</p>

        <p>TDR podrá utilizar, según corresponda:</p>

        <ul>
          <li>reserva directa desde agenda online;</li>
          <li>coordinación previa por correo electrónico o WhatsApp;</li>
          <li>envío y aceptación de presupuesto;</li>
          <li>formulario de inscripción;</li>
          <li>compra directa de recursos digitales;</li>
          <li>suscripción a servicios recurrentes.</li>
        </ul>

        <p>
          La contratación se considerará confirmada cuando se hayan cumplido las
          condiciones expresamente indicadas para el servicio correspondiente,
          incluyendo, cuando proceda, la acreditación del pago.
        </p>

        <p>
          En los servicios que requieran coordinación previa de fechas,
          presupuesto o condiciones particulares, la contratación quedará
          sujeta a dicha coordinación.
        </p>
      </section>

      <section id="pagos">
        <h2>5. Precios, moneda, pagos y facturación</h2>

        <p>
          Los precios aplicables serán los publicados en el sitio web, informados
          mediante presupuesto o comunicados expresamente antes de la
          contratación.
        </p>

        <p>
          Salvo indicación en contrario, los precios ofrecidos para
          contrataciones en Argentina se expresarán en pesos argentinos (ARS).
        </p>

        <p>
          Los medios de pago disponibles serán informados durante el proceso de
          contratación.
        </p>

        <p>
          Cuando el pago se realice mediante transferencia u otro medio sujeto a
          verificación, la contratación o reserva quedará definitivamente
          confirmada una vez acreditado el importe correspondiente.
        </p>

        <p>
          TDR emitirá la documentación fiscal que corresponda conforme a la
          normativa vigente.
        </p>
      </section>

      <section id="reservas">
        <h2>6. Reservas, reprogramaciones, cancelaciones y devoluciones</h2>

        <p>
          Las reservas, reprogramaciones, cancelaciones, inasistencias y
          devoluciones se regirán por la Política de Reservas, Cancelaciones y
          Devoluciones vigente al momento de la contratación.
        </p>

        <p>
          Las condiciones podrán variar según el tipo de servicio.
        </p>

        <p>
          Cuando existan condiciones específicas informadas en la página de un
          servicio, presupuesto o propuesta comercial, dichas condiciones
          formarán parte de la contratación.
        </p>
      </section>

      <section id="arrepentimiento">
        <h2>7. Derecho de arrepentimiento</h2>

        <p>
          Cuando resulte legalmente aplicable, el consumidor podrá ejercer el
          derecho de revocación o arrepentimiento correspondiente a
          contrataciones realizadas a distancia, dentro de los plazos previstos
          por la normativa vigente.
        </p>

        <p>
          TDR pondrá a disposición del usuario el mecanismo correspondiente para
          ejercer este derecho.
        </p>

        <p>
          El ejercicio del derecho de arrepentimiento no afectará las
          prestaciones que, conforme a la normativa aplicable, ya hubieran sido
          efectivamente realizadas o utilizadas.
        </p>
      </section>

      <section id="baja">
        <h2>8. Baja o finalización de servicios</h2>

        <p>
          Cuando corresponda, el usuario podrá solicitar la baja o finalización
          de un servicio contratado a distancia mediante los mecanismos
          habilitados por TDR.
        </p>

        <p>
          La finalización de un servicio en curso se regirá además por las
          condiciones específicas de la propuesta contratada y por la Política
          de Reservas, Cancelaciones y Devoluciones.
        </p>

        <p>
          La baja de un servicio no implica automáticamente el reintegro de
          importes correspondientes a prestaciones ya realizadas.
        </p>
      </section>

      <section id="coaching">
        <h2>9. Condiciones específicas de Coaching 1 a 1</h2>

        <p>
          Las sesiones de Coaching 1 a 1 tienen una duración de 60 minutos y se
          realizan online, salvo que se indique expresamente otra modalidad.
        </p>

        <p>
          La reserva de una sesión individual quedará confirmada una vez
          acreditado el pago correspondiente.
        </p>

        <p>
          Las sesiones podrán reprogramarse con una anticipación mínima de 24
          horas.
        </p>

        <p>
          Las cancelaciones o inasistencias con una anticipación inferior a 24
          horas no generan derecho a reprogramación ni reintegro.
        </p>

        <p>
          Si TDR no pudiera realizar una sesión en la fecha acordada, el cliente
          podrá elegir entre reprogramarla sin coste adicional o recibir el
          reintegro íntegro correspondiente a esa sesión.
        </p>
      </section>

      <section id="procesos">
        <h2>10. Condiciones específicas de procesos de varias sesiones</h2>

        <p>
          Cuando se contrate un proceso compuesto por varias sesiones, las fechas
          podrán coordinarse previamente a la acreditación del pago cuando así se
          indique en la propuesta comercial.
        </p>

        <p>
          Si el cliente decide finalizar el proceso una vez iniciado, podrá
          solicitar el reintegro correspondiente a las sesiones que aún no hayan
          sido realizadas.
        </p>

        <p>
          Para calcular dicho reintegro, las sesiones ya realizadas se imputarán
          al valor de la sesión individual vigente al momento de la
          contratación.
        </p>

        <p>
          Las sesiones efectivamente realizadas no generan derecho a reintegro.
        </p>

        <p>
          Las reprogramaciones se aplicarán individualmente a cada sesión
          conforme a la política vigente.
        </p>
      </section>

      <section id="sound-healing">
        <h2>11. Sound Healing y servicios para organizaciones</h2>

        <p>
          Los servicios de Sound Healing destinados a estudios, spas, hoteles,
          empresas, centros u otras organizaciones podrán requerir presupuesto y
          condiciones particulares.
        </p>

        <p>La contratación podrá incluir condiciones específicas relativas a:</p>

        <ul>
          <li>fecha y duración;</li>
          <li>espacio y condiciones técnicas;</li>
          <li>número de participantes;</li>
          <li>desplazamiento;</li>
          <li>equipamiento;</li>
          <li>importe, seña o anticipo;</li>
          <li>cancelación o reprogramación;</li>
          <li>obligaciones de la organización contratante.</li>
        </ul>

        <p>
          Estas condiciones serán informadas mediante presupuesto o propuesta
          comercial antes de la contratación.
        </p>

        <p>
          Hasta tanto una propuesta sea aceptada y, cuando corresponda, se
          acredite el pago o anticipo requerido, la fecha no se considerará
          definitivamente confirmada.
        </p>
      </section>

      <section id="experiencias">
        <h2>12. Experiencias y eventos</h2>

        <p>
          Las experiencias presenciales u online podrán contar con condiciones
          particulares relativas a fecha, lugar, capacidad, duración,
          reprogramación, cancelación y asistencia.
        </p>

        <p>
          Si TDR debiera cancelar una experiencia, se informarán las alternativas
          disponibles, que podrán incluir reprogramación o reintegro conforme a
          las condiciones aplicables.
        </p>

        <p>
          La inasistencia del participante no genera automáticamente derecho a
          devolución, salvo que así se establezca expresamente.
        </p>
      </section>

      <section id="programas">
        <h2>13. Programas</h2>

        <p>
          Los programas podrán desarrollarse de manera individual o grupal,
          online o presencial.
        </p>

        <p>Cada programa podrá contar con reglas específicas sobre:</p>

        <ul>
          <li>fechas;</li>
          <li>duración;</li>
          <li>acceso;</li>
          <li>materiales;</li>
          <li>asistencia;</li>
          <li>reprogramaciones;</li>
          <li>grabaciones;</li>
          <li>pagos;</li>
          <li>finalización anticipada.</li>
        </ul>

        <p>Estas condiciones serán informadas antes de la contratación.</p>
      </section>

      <section id="recursos">
        <h2>14. Recursos digitales</h2>

        <p>
          Los recursos digitales podrán incluir, entre otros, documentos,
          audios, videos, ejercicios, guías, materiales descargables u otros
          contenidos.
        </p>

        <p>El acceso a estos materiales será personal y no transferible.</p>

        <p>
          La compra o acceso a un recurso digital no implica cesión de derechos
          de propiedad intelectual.
        </p>

        <p>
          Las condiciones de devolución, arrepentimiento y acceso se regirán por
          la normativa aplicable y por las condiciones específicas informadas
          antes de la compra.
        </p>
      </section>

      <section id="membresias">
        <h2>15. Membresías y servicios recurrentes</h2>

        <p>
          En caso de incorporarse membresías o servicios recurrentes, se
          informarán previamente:
        </p>

        <ul>
          <li>precio;</li>
          <li>frecuencia de cobro;</li>
          <li>modalidad de renovación;</li>
          <li>forma de cancelación;</li>
          <li>alcance del acceso;</li>
          <li>efectos de la baja.</li>
        </ul>

        <p>
          TDR no realizará cobros recurrentes sin información previa y aceptación
          del usuario.
        </p>
      </section>

      <section id="alcance">
        <h2>16. Alcance de los servicios</h2>

        <p>
          Los servicios ofrecidos por TDR tienen carácter de acompañamiento,
          formación, práctica, desarrollo personal o experiencia, según
          corresponda a cada propuesta.
        </p>

        <p>
          No sustituyen servicios médicos, psicológicos, psiquiátricos ni otros
          tratamientos sanitarios cuando estos resulten necesarios.
        </p>

        <p>
          TDR no garantiza resultados específicos derivados de la contratación
          de un servicio, programa o experiencia.
        </p>

        <p>
          Las decisiones que el cliente adopte a partir del trabajo realizado
          son de su exclusiva responsabilidad.
        </p>
      </section>

      <section id="propiedad">
        <h2>17. Propiedad intelectual</h2>

        <p>
          Todos los contenidos propios de TDR, incluidos textos, audios, videos,
          materiales, metodologías, ejercicios, documentos, diseños, recursos y
          demás contenidos originales se encuentran protegidos por la normativa
          aplicable en materia de propiedad intelectual.
        </p>

        <p>
          Salvo autorización expresa, no está permitida su reproducción,
          redistribución, venta, cesión, publicación, modificación o utilización
          comercial.
        </p>

        <p>
          Los materiales adquiridos o recibidos por el usuario están destinados
          exclusivamente a su uso personal o al uso expresamente autorizado.
        </p>
      </section>

      <section id="uso">
        <h2>18. Uso del sitio web</h2>

        <p>
          El usuario se compromete a utilizar el sitio de manera lícita y
          conforme a estos Términos y Condiciones.
        </p>

        <p>
          No está permitido realizar acciones que puedan comprometer la
          seguridad, funcionamiento o integridad del sitio, acceder de manera no
          autorizada a áreas restringidas, utilizar sistemas automatizados de
          forma abusiva o emplear los contenidos de TDR con fines fraudulentos o
          ilícitos.
        </p>
      </section>

      <section id="privacidad">
        <h2>19. Datos personales y privacidad</h2>

        <p>
          El tratamiento de datos personales se regirá por la Política de
          Privacidad de TDR.
        </p>

        <p>TDR podrá tratar los datos necesarios para:</p>

        <ul>
          <li>gestionar consultas;</li>
          <li>realizar reservas;</li>
          <li>prestar los servicios contratados;</li>
          <li>gestionar pagos y facturación;</li>
          <li>mantener comunicaciones operativas;</li>
          <li>cumplir obligaciones legales;</li>
          <li>
            enviar comunicaciones comerciales cuando exista consentimiento o
            base legal suficiente.
          </li>
        </ul>

        <p>
          La contratación de un servicio no requiere necesariamente la creación
          de una cuenta de usuario.
        </p>
      </section>

      <section id="comunicaciones">
        <h2>20. Comunicaciones</h2>

        <p>
          El usuario acepta recibir las comunicaciones necesarias para gestionar
          la relación contractual, incluyendo confirmaciones de reserva,
          modificaciones, cancelaciones, facturación, recordatorios y
          comunicaciones vinculadas al servicio contratado.
        </p>

        <p>
          Las comunicaciones promocionales o comerciales que no sean necesarias
          para la prestación del servicio se gestionarán conforme a la normativa
          aplicable y, cuando corresponda, podrán ser canceladas por el usuario.
        </p>
      </section>

      <section id="modificaciones">
        <h2>21. Modificación de estos Términos</h2>

        <p>
          TDR podrá actualizar estos Términos y Condiciones cuando resulte
          necesario por cambios normativos, operativos, tecnológicos o
          comerciales.
        </p>

        <p>
          La versión vigente estará disponible en el sitio web e indicará su
          fecha de última actualización.
        </p>

        <p>
          Cuando una modificación sea material y pueda afectar de manera
          relevante a clientes con una relación contractual en curso, TDR podrá
          comunicarla mediante correo electrónico u otro medio adecuado.
        </p>

        <p>
          Las modificaciones no afectarán de manera retroactiva derechos
          adquiridos ni condiciones ya pactadas cuando ello resulte contrario a
          la normativa aplicable.
        </p>
      </section>

      <section id="internacional">
        <h2>22. Contratación internacional</h2>

        <p>TDR opera desde la República Argentina.</p>

        <p>
          Cuando un usuario contrate desde otro país, la relación se regirá por
          las normas que resulten aplicables de acuerdo con las circunstancias
          de la contratación.
        </p>

        <p>
          Nada de lo previsto en estos Términos tiene por objeto excluir derechos
          inderogables que pudieran corresponder al consumidor conforme a la
          normativa de su país de residencia cuando dicha normativa resulte
          aplicable.
        </p>
      </section>

      <section id="responsabilidad">
        <h2>23. Responsabilidad</h2>

        <p>
          TDR se compromete a prestar los servicios contratados conforme a las
          condiciones informadas.
        </p>

        <p>
          No será responsable por incumplimientos derivados de causas ajenas
          razonablemente a su control, sin perjuicio de los derechos que
          pudieran corresponder al consumidor.
        </p>

        <p>
          TDR tampoco será responsable por fallos atribuibles a servicios de
          terceros, plataformas externas, proveedores tecnológicos, conexiones
          de internet u otros sistemas ajenos, salvo que la normativa aplicable
          disponga lo contrario.
        </p>
      </section>

      <section id="atencion">
        <h2>24. Atención al cliente y reclamos</h2>

        <p>Las consultas, solicitudes y reclamos podrán enviarse a:</p>

        <p>
          <strong>Correo electrónico:</strong> [EMAIL]
        </p>

        <p>
          <strong>WhatsApp / teléfono:</strong> [NÚMERO, SI CORRESPONDE]
        </p>

        <p>
          Los mecanismos específicos de Arrepentimiento y Baja de Servicio
          estarán disponibles en el sitio web cuando corresponda.
        </p>
      </section>

      <section id="ley">
        <h2>25. Ley aplicable y resolución de controversias</h2>

        <p>
          Estos Términos se interpretarán conforme a la normativa que resulte
          aplicable a la relación contractual.
        </p>

        <p>
          Cuando se trate de una relación de consumo, nada de lo aquí previsto
          limitará los derechos inderogables reconocidos al consumidor por la
          legislación vigente.
        </p>

        <p>
          Antes de iniciar cualquier instancia formal, las partes podrán intentar
          resolver la cuestión mediante los canales de atención de TDR, sin que
          ello limite el acceso del consumidor a los mecanismos administrativos
          o judiciales que correspondan.
        </p>
      </section>

      <section id="vigencia">
        <h2>26. Vigencia</h2>

        <p>
          Estos Términos y Condiciones entran en vigor a partir de
          <strong> [FECHA]</strong>.
        </p>

        <p>
          La versión vigente será siempre la publicada en el sitio web de TDR.
        </p>
      </section>
    </LegalLayout>
  );
};

export default TerminosCondiciones;