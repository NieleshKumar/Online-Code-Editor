import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    // Timeout to delay rendering the updated preview after user stops typing
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, javascript]);

  return (
    <div className="app">
      <div className="pane top-pane">
        <Editor
          language="xml" // Corrected spelling of "language"
          label="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          label="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          label="JavaScript"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div className="bottom-pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
