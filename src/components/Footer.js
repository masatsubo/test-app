import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h4>企業情報</h4>
        <ul>
          <li><Link to="/about">会社概要</Link></li>
          <li><Link to="/contact">お問い合わせ</Link></li>
        </ul>
      </div>
      <div>
        <h4>ご利用にあたって</h4>
        <ul>
          <li><Link to="/terms">利用規約</Link></li>
          <li><Link to="/privacy">プライバシーポリシー</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;