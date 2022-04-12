export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__heading">Made with ❤️ by Uttam Sharma</div>
      <ul className="social__links unordered-list">
        <li className="footer__buttons">
          <a
            className="link"
            href="https://github.com/LordUttam/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li className="footer__buttons">
          <a
            className="link"
            href="https://www.linkedin.com/in/uttam-sharma-55a588178/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li className="footer__buttons">
          <a
            className="link"
            href="mailto:sharmaji.uttam@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-envelope-o"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
