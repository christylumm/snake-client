const setupInput = function(connection) {
  const stdin = process.stdin;
  
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', function(key) {
    handleUserInput(key, connection);
  });
  return stdin;
}


/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const handleUserInput = function(key, conn) {
  //WASD
  if (key === 'w') {
    conn.write("Move: up");
  }

  if (key === 'a') {
    conn.write("Move: left");
  }

  if (key === 's') {
    conn.write("Move: down");
  }

  if (key === 'd') {
    conn.write("Move: right");
  }

  if (key === '\u0003') {
    process.exit();
  }
}

