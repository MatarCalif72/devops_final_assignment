const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="background-color: #311432; color: white;">
        <h1>WASSSSSSUPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP</h1>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
