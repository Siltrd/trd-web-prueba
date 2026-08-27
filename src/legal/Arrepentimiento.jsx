import React, { useState } from 'react';
import LegalLayout from '../components/LegalLayout';
import '../styles/legalForms.css';

const sections = [
  { id: 'alcance', label: 'Alcance' },
  { id: 'como', label: 'Cómo ejercer el derecho' },
  { id: 'datos', label: 'Datos necesarios' },
  { id: 'confirmacion', label: 'Confirmación de recepción' },
  { id: 'evaluacion', label: 'Evaluación de la solicitud' },
  { id: 'efectos', label: 'Efectos del arrepentimiento' },
  { id: 'reintegros', label: 'Reintegros' },
  { id: 'incompletas', label: 'Solicitudes incompletas' },
  { id: 'comunicaciones', label: 'Comunicaciones' },
  { id: 'conservacion', label: 'Conservación del trámite' },
  { id: 'derechos', label: 'Derechos del consumidor' },
  { id: 'contacto', label: 'Contacto' },
];

const Arrepentimiento = () => {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  service: '',
  contractDate: '',
  reference: '',
  additionalInfo: '',
});

const [status, setStatus] = useState('idle');
const [codigo, setCodigo] = useState('');
const [error, setError] = useState('');

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setStatus('sending');
  setError('');
  setCodigo('');

  try {
    const response = await fetch('/api/arrepentimiento', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      throw new Error(data.error || 'No se pudo enviar la solicitud.');
    }

    setCodigo(data.codigo);
    setStatus('success');

    setFormData({
      name: '',
      email: '',
      service: '',
      contractDate: '',
      reference: '',
      additionalInfo: '',
    });
  } catch (err) {
    console.error(err);
    setError(
      'No pudimos registrar la solicitud. Intenta nuevamente o contacta con TDR.'
    );
    setStatus('error');
  }
};
  return (
    <LegalLayout
      title="Procedimiento de Arrepentimiento"
      updated="27 de agosto de 2026"
      sections={sections}
    >
      <section id="alcance">
        <h2>1. Alcance</h2>

        <p>
          Este procedimiento regula el ejercicio del derecho de arrepentimiento
          respecto de contrataciones realizadas a distancia con
          <strong> Tunica de Realidad</strong>, en adelante
          <strong> “TDR”</strong>, cuando dicho derecho resulte aplicable
          conforme a la normativa vigente.
        </p>

        <p>
          Con carácter general, el consumidor dispone del plazo previsto por la
          normativa aplicable para ejercer el derecho de revocación, sin
          perjuicio de las excepciones o modalidades que pudieran corresponder
          según la naturaleza de la contratación.
        </p>
      </section>

      <section id="como">
        <h2>2. Cómo ejercer el derecho</h2>

        <p>
          El consumidor podrá iniciar la solicitud mediante el Botón de
          Arrepentimiento habilitado en el sitio web de TDR.
        </p>

        <p>
          El acceso al procedimiento no requerirá la creación de una cuenta ni
          el inicio de sesión.
        </p>

        <p>
          Cuando resulte necesario, TDR podrá aplicar mecanismos razonables de
          verificación de identidad exclusivamente con fines de seguridad y
          validación de la solicitud.
        </p>
      </section>

      <section id="datos">
        <h2>3. Datos necesarios para la solicitud</h2>

        <p>
          Para identificar correctamente la contratación y tramitar el pedido,
          TDR podrá solicitar únicamente los datos razonablemente necesarios,
          entre ellos:
        </p>

        <ul>
          <li>nombre y apellido;</li>
          <li>correo electrónico utilizado en la contratación;</li>
          <li>servicio contratado;</li>
          <li>fecha aproximada de contratación;</li>
          <li>referencia de reserva, operación o pago, si existiera;</li>
          <li>
            información adicional estrictamente necesaria para identificar la
            operación.
          </li>
        </ul>
      </section>

      <section id="confirmacion">
        <h2>4. Confirmación de recepción</h2>

        <p>
          Una vez enviada la solicitud, TDR emitirá una constancia de recepción
          con un código identificatorio del trámite.
        </p>

        <p>
          La constancia será enviada dentro de las 24 horas siguientes a la
          recepción de la solicitud, conforme a la normativa aplicable.
        </p>

        <p>
          El código permitirá identificar la solicitud y mantener trazabilidad
          sobre su tramitación.
        </p>
      </section>

      <section id="evaluacion">
        <h2>5. Evaluación de la solicitud</h2>

        <p>TDR verificará, según corresponda:</p>

        <ul>
          <li>la contratación correspondiente;</li>
          <li>la fecha en que fue realizada;</li>
          <li>el servicio contratado;</li>
          <li>si el servicio fue prestado total o parcialmente;</li>
          <li>los pagos efectuados;</li>
          <li>
            las demás circunstancias relevantes para determinar el alcance del
            derecho.
          </li>
        </ul>
      </section>

      <section id="efectos">
        <h2>6. Efectos del arrepentimiento</h2>

        <p>
          Cuando el derecho de arrepentimiento resulte procedente, TDR dará
          curso a la revocación de la contratación y realizará las
          restituciones que correspondan conforme a la normativa aplicable.
        </p>

        <p>
          Cuando el servicio haya sido prestado total o parcialmente, los
          efectos económicos de la revocación se determinarán conforme a la
          normativa aplicable, la naturaleza de la prestación y las
          circunstancias concretas de la contratación.
        </p>
      </section>

      <section id="reintegros">
        <h2>7. Reintegros</h2>

        <p>
          Cuando corresponda un reintegro, TDR gestionará la devolución
          conforme a la Política de Reservas, Cancelaciones y Devoluciones.
        </p>

        <p>
          Siempre que sea posible, el reintegro se realizará mediante el mismo
          medio utilizado para efectuar el pago o mediante otro medio acordado
          con el consumidor.
        </p>

        <p>
          El tiempo de acreditación final podrá depender de la entidad
          bancaria, proveedor de pagos o medio utilizado.
        </p>
      </section>

      <section id="incompletas">
        <h2>8. Solicitudes incompletas</h2>

        <p>
          Si la información proporcionada no permitiera identificar
          correctamente la contratación, TDR podrá solicitar los datos mínimos
          adicionales necesarios para tramitar el pedido.
        </p>

        <p>
          Esta solicitud de información no tendrá por objeto dificultar,
          demorar injustificadamente ni impedir el ejercicio del derecho.
        </p>
      </section>

      <section id="comunicaciones">
        <h2>9. Comunicaciones</h2>

        <p>
          Las comunicaciones relacionadas con el arrepentimiento se enviarán al
          correo electrónico informado por el consumidor, salvo que se acuerde
          otro medio adecuado.
        </p>
      </section>

      <section id="conservacion">
        <h2>10. Conservación del trámite</h2>

        <p>
          TDR podrá conservar la constancia de la solicitud, su código
          identificatorio, las comunicaciones vinculadas y la resolución
          adoptada durante el tiempo necesario para acreditar el cumplimiento
          de sus obligaciones legales, contractuales y administrativas.
        </p>
      </section>

      <section id="derechos">
        <h2>11. Derechos del consumidor</h2>

        <p>
          Este procedimiento no limita, sustituye ni condiciona los derechos
          reconocidos al consumidor por la normativa aplicable.
        </p>
      </section>
<section id="contacto">
  <h2>12. Solicitud de arrepentimiento</h2>

  <p>
    Completa el siguiente formulario para ejercer el derecho de
    arrepentimiento cuando resulte aplicable.
  </p>

  {status === 'success' ? (
    <div className="legalFormSuccess">
      <h3>Solicitud recibida</h3>

      <p>
        Tu solicitud ha sido registrada correctamente.
      </p>

      <p>
        Código de trámite: <strong>{codigo}</strong>
      </p>

      <p>
        También hemos enviado una constancia al correo electrónico
        informado.
      </p>

      <p>
        Conserva este código para cualquier consulta relacionada con la
        solicitud.
      </p>
    </div>
  ) : (
    <form className="legalForm" onSubmit={handleSubmit}>
      <div className="legalFormField">
        <label htmlFor="name">Nombre y apellido *</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="legalFormField">
        <label htmlFor="email">
          Correo electrónico utilizado en la contratación *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="legalFormField">
        <label htmlFor="service">Servicio contratado *</label>
        <input
          id="service"
          name="service"
          type="text"
          value={formData.service}
          onChange={handleChange}
          required
        />
      </div>

      <div className="legalFormField">
        <label htmlFor="contractDate">
          Fecha aproximada de contratación *
        </label>
        <input
          id="contractDate"
          name="contractDate"
          type="date"
          value={formData.contractDate}
          onChange={handleChange}
          max={new Date().toISOString().split('T')[0]}
          required
       />
      </div>

      <div className="legalFormField">
        <label htmlFor="reference">
          Referencia de reserva, operación o pago
        </label>
        <input
          id="reference"
          name="reference"
          type="text"
          value={formData.reference}
          onChange={handleChange}
        />
      </div>

      <div className="legalFormField">
        <label htmlFor="additionalInfo">
          Información adicional
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows="5"
          value={formData.additionalInfo}
          onChange={handleChange}
        />
      </div>

      {status === 'error' && (
        <p className="legalFormError">{error}</p>
      )}

      <button
        type="submit"
        className="legalFormButton"
        disabled={status === 'sending'}
      >
        {status === 'sending'
          ? 'Enviando solicitud...'
          : 'Enviar solicitud de arrepentimiento'}
      </button>
    </form>
  )}
</section>
    </LegalLayout>
  );
};

export default Arrepentimiento;