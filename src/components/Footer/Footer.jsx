import "./Footer.css";

const Footer = () => {
  return (
    <div id="contacto" className="container-footer">
      <hr/>
      <div className="container_text">
        <p>Your natural candle made for <br /> your home and for your wellness.</p>
      </div>
      <div className="container_list">
        <table>
          <tr>
            <th>Discovery</th>
            <th>About</th>
            <th>Info</th>
          </tr>
          <tr>
            <td>New season</td>
            <td>Help</td>
            <td>Contact us</td>
          </tr>
          <tr>
            <td>Most searched</td>
            <td>Shipping</td>
            <td>Privacies Policies</td>
          </tr>
          <tr>
            <td>Most selled</td>
            <td>Afillate</td>
            <td>Terms y Conditions</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Footer;
