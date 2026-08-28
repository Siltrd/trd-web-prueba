import React from 'react';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'alcance', label: 'Alcance' },
  { id: 'confirmacion', label: 'Confirmación de reservas' },
  { id: 'coaching', label: 'Coaching 1 a 1' },
  { id: 'procesos', label: 'Procesos de varias sesiones' },
  { id: 'finalizacion', label: 'Finalización anticipada' },
  { id: 'sound-healing', label: 'Sound Healing y organizaciones' },
  { id: 'experiencias', label: 'Experiencias, eventos y programas' },
  { id: 'recursos', label: 'Recursos digitales' },
  { id: 'arrepentimiento', label: 'Derecho de arrepentimiento' },
  { id: 'baja', label: 'Baja de servicios' },
  { id: 'devoluciones', label: 'Devoluciones' },
  { id: 'medio', label: 'Medio de devolución' },
  { id: 'situaciones', label: 'Situaciones no previstas' },
  { id: 'modificaciones', label: 'Modificaciones' },
  { id: 'contacto', label: 'Contacto' },
];

const ReservasDevoluciones = () => {
  return (
    <LegalLayout
      title="Política de Reservas, Cancelaciones y Devoluciones"
      updated="27 de agosto de 2026"
      sections={sections}
    >
      <section id="alcance">
        <h2>1. Alcance</h2>

        <p>
          Esta política regula las reservas, reprogramaciones, cancelaciones,
          inasistencias, finalización anticipada y devoluciones aplicables a los
          servicios contratados con <strong>Tunica de Realidad</strong>, en
          adelante <strong>“TDR”</strong>.
        </p>

        <p>
          Cuando un servicio tenga condiciones particulares, estas
          complementarán la presente política y serán informadas antes de la
          contratación.
        </p>

        <p>
          Ninguna condición particular limitará los derechos inderogables que
          pudieran corresponder al consumidor conforme a la normativa
          aplicable.
        </p>
      </section>

      <section id="confirmacion">
        <h2>2. Confirmación de reservas</h2>

        <p>
          Una reserva se considera confirmada cuando se hayan cumplido las
          condiciones indicadas para el servicio correspondiente y, cuando
          corresponda, se haya acreditado el pago.
        </p>

        <p>
          En los servicios que requieran coordinación previa de fechas,
          presupuesto o condiciones particulares, la confirmación estará sujeta
          a dicha coordinación.
        </p>

        <p>
          Antes de formalizar la contratación se informarán las condiciones
          esenciales del servicio, incluyendo modalidad, duración, precio,
          condiciones de reserva y reglas de cancelación o reprogramación
          aplicables.
        </p>
      </section>

      <section id="coaching">
        <h2>3. Coaching 1 a 1 — sesión individual</h2>

        <p>
          Las sesiones individuales de Coaching 1 a 1 tienen una duración de 60
          minutos y se realizan online, salvo que se indique expresamente otra
          modalidad.
        </p>

        <p>
          La fecha y horario elegidos quedan confirmados una vez acreditado el
          pago, cuando este sea requerido para confirmar la reserva.
        </p>

        <h3>Reprogramaciones</h3>

        <p>
          La sesión puede reprogramarse con una anticipación mínima de 24 horas
          respecto del horario reservado.
        </p>

        <p>
          Las solicitudes realizadas con menos de 24 horas de anticipación no
          generan, como regla contractual, derecho automático a una nueva fecha,
          sin perjuicio de las circunstancias particulares y de los derechos que
          pudieran resultar legalmente aplicables.
        </p>

        <h3>Cancelaciones e inasistencias</h3>

        <p>
          Si el cliente cancela con menos de 24 horas de anticipación o no se
          presenta en el horario acordado, el importe correspondiente a esa
          sesión no será reintegrado ni podrá aplicarse automáticamente a una
          nueva fecha como regla contractual, sin perjuicio de los derechos que
          pudieran corresponder legalmente.
        </p>

        <p>
          Si TDR no pudiera realizar la sesión en la fecha acordada, el cliente
          podrá elegir entre reprogramarla sin coste adicional o recibir el
          reintegro íntegro correspondiente a esa sesión.
        </p>
      </section>

      <section id="procesos">
        <h2>4. Procesos de varias sesiones</h2>

        <p>
          Cuando se contrate un proceso compuesto por varias sesiones, las
          fechas podrán coordinarse previamente al pago cuando así se indique en
          la propuesta comercial.
        </p>

        <p>
          Una vez cumplidas las condiciones informadas y acreditado el pago
          cuando corresponda, el proceso quedará confirmado.
        </p>

        <p>
          Las reprogramaciones se aplican de manera individual a cada sesión y
          se rigen por el plazo general de 24 horas, salvo que se informe
          expresamente otra condición antes de contratar.
        </p>
      </section>

      <section id="finalizacion">
        <h2>5. Finalización anticipada de procesos</h2>

        <p>
          El cliente podrá solicitar la finalización de un proceso de varias
          sesiones antes de completar todas las sesiones contratadas.
        </p>

        <p>
          Cuando existan sesiones pendientes, se calculará el importe que
          corresponda reintegrar descontando del precio abonado las sesiones
          efectivamente realizadas, valoradas al precio de la sesión individual
          vigente al momento de la contratación.
        </p>

        <p>
          El saldo resultante, cuando corresponda, será reintegrado conforme a
          esta política y a la normativa aplicable.
        </p>

        <p>
          Las sesiones ya realizadas no generan por sí mismas derecho
          contractual a reintegro, sin perjuicio de los derechos que pudieran
          resultar aplicables en cada caso.
        </p>
      </section>

      <section id="sound-healing">
        <h2>6. Sound Healing y servicios para organizaciones</h2>

        <p>
          Los servicios de Sound Healing destinados a estudios, centros,
          hoteles, spas, empresas u otras organizaciones podrán estar sujetos a
          condiciones específicas de reserva, anticipo, cancelación,
          reprogramación, desplazamiento, aforo, espacio y equipamiento.
        </p>

        <p>
          Dichas condiciones serán informadas mediante presupuesto o propuesta
          comercial antes de la contratación.
        </p>

        <p>
          En contrataciones realizadas con organizaciones o empresas para fines
          vinculados con su actividad profesional o comercial, podrán resultar
          aplicables condiciones específicas distintas de las previstas para
          relaciones de consumo.
        </p>

        <p>
          Cuando corresponda una relación de consumo, prevalecerán los derechos
          inderogables previstos por la normativa aplicable.
        </p>
      </section>

      <section id="experiencias">
        <h2>7. Experiencias, eventos y programas</h2>

        <p>
          Las experiencias, eventos y programas podrán contar con reglas
          particulares relativas a fecha, lugar, aforo, inscripción, pagos,
          reprogramaciones, cancelaciones, inasistencias y acceso a materiales o
          grabaciones.
        </p>

        <p>
          Estas condiciones serán informadas antes de la contratación.
        </p>

        <p>
          Cuando TDR cancele una experiencia, evento o programa y no pueda
          ofrecer una alternativa aceptable para el cliente, corresponderá el
          reintegro del importe abonado en los términos aplicables.
        </p>
      </section>

      <section id="recursos">
        <h2>8. Recursos digitales</h2>

        <p>
          Las condiciones de devolución y ejercicio del derecho de
          arrepentimiento respecto de recursos digitales dependerán de la
          naturaleza del contenido, de la forma en que se suministre y de la
          normativa aplicable.
        </p>

        <p>
          Antes de la compra se informarán, cuando corresponda, las condiciones
          específicas de acceso, disponibilidad, uso y devolución.
        </p>

        <p>
          Podrán resultar aplicables las excepciones legales previstas para
          determinados contenidos digitales suministrados electrónicamente y
          susceptibles de utilización o reproducción inmediata.
        </p>
      </section>

      <section id="arrepentimiento">
        <h2>9. Derecho de arrepentimiento</h2>

        <p>
          Cuando resulte legalmente aplicable, el consumidor podrá ejercer el
          derecho de arrepentimiento respecto de contrataciones realizadas a
          distancia dentro del plazo previsto por la normativa vigente.
        </p>

        <p>
          TDR dispone en su sitio web del
          <strong> Botón de Arrepentimiento</strong>, mediante el cual podrá
          iniciarse la solicitud sin necesidad de crear una cuenta ni iniciar
          sesión.
        </p>

        <p>
          Una vez recibida la solicitud, TDR informará el código identificatorio
          correspondiente y adoptará, dentro del plazo legal aplicable, las
          medidas necesarias para efectivizar la revocación cuando resulte
          procedente.
        </p>

        <p>
          Los efectos de la revocación, incluyendo las restituciones que
          correspondan, se determinarán conforme a la normativa aplicable, la
          naturaleza de la contratación y las circunstancias del caso.
        </p>
      </section>

      <section id="baja">
        <h2>10. Baja de servicios</h2>

        <p>
          Cuando corresponda, el consumidor podrá solicitar la baja o
          finalización de un servicio en curso mediante el
          <strong> Botón de Baja de Servicio</strong> disponible en el sitio de
          TDR.
        </p>

        <p>
          La solicitud podrá iniciarse sin necesidad de crear una cuenta ni
          iniciar sesión.
        </p>

        <p>
          TDR informará el código identificatorio correspondiente y adoptará las
          medidas necesarias para hacer efectiva la baja conforme a la normativa
          y a las condiciones aplicables.
        </p>

        <p>
          La baja se regirá además por las condiciones específicas del servicio,
          por las reglas sobre prestaciones ya realizadas y pendientes y por
          esta política.
        </p>
      </section>

      <section id="devoluciones">
        <h2>11. Devoluciones</h2>

        <p>
          Cuando corresponda efectuar un reintegro, TDR gestionará la devolución
          sin demora injustificada y dentro de los plazos que resulten
          legalmente aplicables según la naturaleza de la contratación y la
          causa del reintegro.
        </p>

        <p>
          El tiempo necesario para que el importe quede finalmente acreditado
          podrá depender de la entidad bancaria, proveedor de pagos o medio
          utilizado y puede exceder el tiempo de gestión propio de TDR.
        </p>

        <p>
          Cuando una normativa específica establezca un plazo concreto para un
          determinado supuesto, prevalecerá dicho plazo.
        </p>
      </section>

      <section id="medio">
        <h2>12. Medio de devolución</h2>

        <p>
          Siempre que sea posible, los reintegros se realizarán mediante el
          mismo medio utilizado para efectuar el pago o mediante otro medio
          acordado con el cliente cuando exista una razón que lo justifique.
        </p>

        <p>
          TDR podrá solicitar únicamente los datos necesarios para efectuar la
          devolución de manera correcta y segura.
        </p>
      </section>

      <section id="situaciones">
        <h2>13. Situaciones no previstas</h2>

        <p>
          Las situaciones no contempladas expresamente en esta política serán
          evaluadas conforme a las condiciones del servicio contratado y a la
          normativa aplicable.
        </p>

        <p>
          Ninguna interpretación de esta política tendrá por objeto excluir o
          limitar derechos inderogables que correspondan al consumidor.
        </p>
      </section>

      <section id="modificaciones">
        <h2>14. Modificaciones</h2>

        <p>
          TDR podrá actualizar esta política cuando cambien sus servicios,
          procesos operativos o la normativa aplicable.
        </p>

        <p>
          La versión vigente estará disponible en el sitio web e indicará su
          fecha de última actualización.
        </p>

        <p>
          Las modificaciones no afectarán retroactivamente derechos adquiridos
          ni condiciones ya aceptadas cuando ello resulte contrario a la
          normativa aplicable.
        </p>
      </section>

      <section id="contacto">
        <h2>15. Contacto</h2>

        <p>
          Para consultas relacionadas con reservas, reprogramaciones,
          cancelaciones o devoluciones:
        </p>

        <p>
          <strong>Tunica de Realidad — TDR</strong>
          <br />
          Correo electrónico: <strong>[EMAIL DE CONTACTO]</strong>
          <br />
          Horario de atención: <strong>lunes a viernes de 10:00 a 18:00, excepto feriados nacionales</strong>
        </p>

        <p>
          Para ejercer el derecho de arrepentimiento o solicitar la baja de un
          servicio deberán utilizarse, cuando corresponda, los mecanismos
          específicos habilitados en el sitio web.
        </p>
      </section>
    </LegalLayout>
  );
};

export default ReservasDevoluciones;