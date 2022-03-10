import "./Footer.css";

const Footer = () => {
  return (
    <div id="contacto" className="container-footer">
      <hr/>
      <div className="container_text">
        <p>NBA Fan Page <br /> Sentite cerca de tus heroes</p>
      </div>
      <div className="container_list">
        <table>
          <tr>
            <th>Bienvenidos</th>
            <th>Sobre nosotros</th>
            <th>Informacion</th>
          </tr>
          <tr>
            <td>Temporada</td>
            <td>Ayuda</td>
            <td>Contactanos</td>
          </tr>
          <tr>
            <td>Buscanos</td>
            <td>Shipping</td>
            <td>Politicas de privacidad</td>
          </tr>
          <tr>
            <td>Mas Vendido</td>
            <td>Afiliate</td>
            <td>Terminos y Condiciones</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Footer;
